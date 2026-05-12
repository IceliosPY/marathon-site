import os
import time
import json
from collections import deque

import cloudscraper
from PIL import Image

# =========================
# CONFIG
# =========================

ZOOM = 10
BASE_URL = "https://tiles.mapgenie.io/games/marathon/perimeter/default-v5/{z}/{x}/{y}.jpg"

OUTPUT_DIR = "marathon_tiles"
OUTPUT_IMAGE = "marathon_map_progressive.png"
STATE_FILE = "marathon_state.json"

# Tile de départ connue valide
START_X = 508
START_Y = 508

# Limites de sécurité autour du point de départ
MIN_X = 430
MAX_X = 590
MIN_Y = 430
MAX_Y = 590

# Nombre max de tiles valides à récupérer avant arrêt
MAX_VALID_TILES = 500

# Temporisations
DELAY_OK = 0.8
DELAY_FAIL = 1.5
PAUSE_ON_403 = 30

TIMEOUT = 20

HEADERS = {
    "accept": "image/webp,*/*",
    "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
    "origin": "https://mapgenie.io",
    "priority": "u=1, i",
    "referer": "https://mapgenie.io/",
    "sec-ch-ua": '"Chromium";v="146", "Not-A.Brand";v="24", "Google Chrome";v="146"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36",
}

scraper = cloudscraper.create_scraper(browser={
    "browser": "chrome",
    "platform": "windows",
    "desktop": True,
})


# =========================
# OUTILS
# =========================

def ensure_dir(path: str) -> None:
    if not os.path.exists(path):
        os.makedirs(path)


def tile_path(z: int, x: int, y: int) -> str:
    return os.path.join(OUTPUT_DIR, f"{z}_{x}_{y}.jpg")


def save_state(valid_tiles, checked_tiles, queue_list):
    state = {
        "valid_tiles": [list(t) for t in valid_tiles],
        "checked_tiles": [list(t) for t in checked_tiles],
        "queue": [list(t) for t in queue_list],
    }
    with open(STATE_FILE, "w", encoding="utf-8") as f:
        json.dump(state, f)


def load_state():
    if not os.path.exists(STATE_FILE):
        return None
    with open(STATE_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)
    return {
        "valid_tiles": {tuple(t) for t in data["valid_tiles"]},
        "checked_tiles": {tuple(t) for t in data["checked_tiles"]},
        "queue": deque(tuple(t) for t in data["queue"]),
    }


def is_mostly_black_tile(path: str, threshold: int = 8, ratio: float = 0.985) -> bool:
    try:
        with Image.open(path) as img:
            img = img.convert("RGB")
            pixels = img.getdata()
            total = len(pixels)
            black_count = 0

            for r, g, b in pixels:
                if r <= threshold and g <= threshold and b <= threshold:
                    black_count += 1

            return (black_count / total) >= ratio
    except Exception:
        return False


def download_tile(z: int, x: int, y: int):
    path = tile_path(z, x, y)
    if os.path.exists(path):
        if not is_mostly_black_tile(path):
            return "ok", path
        return "black", path

    url = BASE_URL.format(z=z, x=x, y=y)

    try:
        resp = scraper.get(url, headers=HEADERS, timeout=TIMEOUT)

        if resp.status_code == 200 and resp.content:
            with open(path, "wb") as f:
                f.write(resp.content)

            if is_mostly_black_tile(path):
                print(f"[NOIR] {x}, {y}")
                time.sleep(DELAY_OK)
                return "black", path

            print(f"[OK] {x}, {y}")
            time.sleep(DELAY_OK)
            return "ok", path

        if resp.status_code == 403:
            print(f"[403] {x}, {y}")
            time.sleep(DELAY_FAIL)
            return "403", None

        print(f"[--] {x}, {y} -> HTTP {resp.status_code}")
        time.sleep(DELAY_FAIL)
        return "other", None

    except Exception as e:
        print(f"[ER] {x}, {y} -> {e}")
        time.sleep(DELAY_FAIL)
        return "error", None


def find_tile_size(valid_tiles):
    for x, y in valid_tiles:
        path = tile_path(ZOOM, x, y)
        if os.path.exists(path):
            with Image.open(path) as img:
                return img.size[0]
    return 256


def assemble(valid_tiles):
    if not valid_tiles:
        print("Aucune tile valide à assembler.")
        return

    tile_size = find_tile_size(valid_tiles)

    xs = [x for x, y in valid_tiles]
    ys = [y for x, y in valid_tiles]

    min_x, max_x = min(xs), max(xs)
    min_y, max_y = min(ys), max(ys)

    width = (max_x - min_x + 1) * tile_size
    height = (max_y - min_y + 1) * tile_size

    canvas = Image.new("RGB", (width, height), (0, 0, 0))

    for x, y in valid_tiles:
        path = tile_path(ZOOM, x, y)
        if not os.path.exists(path):
            continue
        try:
            with Image.open(path) as img:
                img = img.convert("RGB")
                px = (x - min_x) * tile_size
                py = (y - min_y) * tile_size
                canvas.paste(img, (px, py))
        except Exception as e:
            print(f"[ER] Assemblage {x},{y} -> {e}")

    canvas.save(OUTPUT_IMAGE)
    print(f"\nImage enregistrée : {OUTPUT_IMAGE}")


# =========================
# MAIN
# =========================

def main():
    ensure_dir(OUTPUT_DIR)

    state = load_state()
    if state:
        valid_tiles = state["valid_tiles"]
        checked_tiles = state["checked_tiles"]
        queue = state["queue"]
        print("État précédent rechargé.")
    else:
        valid_tiles = set()
        checked_tiles = set()
        queue = deque([(START_X, START_Y)])

    consecutive_403 = 0

    while queue and len(valid_tiles) < MAX_VALID_TILES:
        x, y = queue.popleft()

        if (x, y) in checked_tiles:
            continue

        if not (MIN_X <= x <= MAX_X and MIN_Y <= y <= MAX_Y):
            checked_tiles.add((x, y))
            continue

        status, _ = download_tile(ZOOM, x, y)
        checked_tiles.add((x, y))

        if status == "ok":
            valid_tiles.add((x, y))
            consecutive_403 = 0

            # On explore les voisines seulement depuis une tile valide
            for nx, ny in [(x+1,y), (x-1,y), (x,y+1), (x,y-1)]:
                if (nx, ny) not in checked_tiles:
                    queue.append((nx, ny))

        elif status == "black":
            consecutive_403 = 0

        elif status == "403":
            consecutive_403 += 1
            # on remet la tile en fin de file pour réessayer plus tard
            queue.append((x, y))

            if consecutive_403 >= 5:
                print(f"\nTrop de 403 d'affilée. Pause de {PAUSE_ON_403}s...\n")
                save_state(valid_tiles, checked_tiles, list(queue))
                time.sleep(PAUSE_ON_403)
                consecutive_403 = 0

        else:
            consecutive_403 = 0

        if len(valid_tiles) % 20 == 0 and len(valid_tiles) > 0:
            save_state(valid_tiles, checked_tiles, list(queue))
            print(f"Sauvegarde intermédiaire. Tiles valides : {len(valid_tiles)}")

    save_state(valid_tiles, checked_tiles, list(queue))
    print(f"\nTiles valides récupérées : {len(valid_tiles)}")
    assemble(valid_tiles)


if __name__ == "__main__":
    main()