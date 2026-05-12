export function initCursor() {
  if (document.getElementById("cursorLabel")) return;

  const label = document.createElement("div");
  label.id = "cursorLabel";
  label.innerHTML = `
    <span class="cursorLabel__text">0, 0</span>
    <span class="cursorLabel__bottomLeft"></span>
    <span class="cursorLabel__bottomRight"></span>
  `;

  document.body.appendChild(label);

  const text = label.querySelector(".cursorLabel__text") as HTMLSpanElement | null;

  const clickableSelector = [
    "a",
    "button",
    "select",
    "[role='button']",
    "[data-cursor='pointer']",
    ".cursor-pointer",
    ".mapsPoint",
    ".mapsLandingCard__action",
    ".mapsDetailBackButton",
  ].join(",");

  let isPointerDown = false;

  const getLabel = (el: HTMLElement) => {
    return (
      el.dataset.cursorLabel ||
      el.dataset.name ||
      el.getAttribute("aria-label") ||
      el.getAttribute("title") ||
      "TARGET"
    );
  };

  const hasTextSelection = () => {
    const selection = window.getSelection();
    return Boolean(selection && selection.toString().trim().length > 0);
  };

  const updateSelectionCursor = () => {
    if (hasTextSelection()) {
      document.body.classList.add("is-text-selecting");
    } else if (!isPointerDown) {
      document.body.classList.remove("is-text-selecting");
    }
  };

  const updatePosition = (event: MouseEvent | PointerEvent) => {
    if (document.body.classList.contains("maps-modal-open")) return;

    const padding = 32;
    const screenMargin = 12;
    const vw = document.documentElement.clientWidth;
    const vh = document.documentElement.clientHeight;

    const rect = label.getBoundingClientRect();
    const bw = rect.width;
    const bh = rect.height;

    let left = event.clientX + padding;
    let top = event.clientY + padding;

    if (left + bw + screenMargin > vw) {
      left = event.clientX - padding - bw;
    }

    if (left < screenMargin) left = screenMargin;

    if (top + bh + screenMargin > vh) {
      top = event.clientY - padding - bh;
    }

    if (top < screenMargin) top = screenMargin;

    label.style.left = `${Math.round(left)}px`;
    label.style.top = `${Math.round(top)}px`;
  };

  const updateTarget = (
    target: EventTarget | null,
    event?: MouseEvent | PointerEvent
  ) => {
    if (document.body.classList.contains("maps-modal-open")) {
      label.classList.remove("is-target");
      if (text) text.textContent = "";
      return;
    }

    const el = target instanceof HTMLElement ? target : null;
    const clickable = el?.closest(clickableSelector) as HTMLElement | null;

    if (clickable && !document.body.classList.contains("is-text-selecting")) {
      label.classList.add("is-target");

      if (text) {
        text.textContent = getLabel(clickable)
          .replace(/\s+/g, " ")
          .trim()
          .slice(0, 22)
          .toUpperCase();
      }
    } else {
      label.classList.remove("is-target");

      if (text && event) {
        const x = Math.round(event.pageX - 1);
        const y = Math.round(event.pageY - 1);
        text.textContent = `${x}, ${y}`;
      }
    }
  };

  document.addEventListener(
    "pointermove",
    (event) => {
      updatePosition(event);
      updateTarget(event.target, event);

      if (isPointerDown && hasTextSelection()) {
        document.body.classList.add("is-text-selecting");
      }
    },
    { passive: true, capture: true }
  );

  document.addEventListener(
    "pointerdown",
    (event) => {
      isPointerDown = true;

      const target = event.target instanceof HTMLElement ? event.target : null;
      const clickable = target?.closest(clickableSelector);

      if (!clickable) {
        document.body.classList.add("is-text-selecting");
      }
    },
    true
  );

  document.addEventListener(
    "pointerup",
    () => {
      isPointerDown = false;
      updateSelectionCursor();
    },
    true
  );

  document.addEventListener("selectionchange", updateSelectionCursor);

  document.addEventListener("mouseleave", () => {
    label.style.opacity = "0";
  });

  document.addEventListener("mouseenter", () => {
    label.style.opacity = "1";
  });
}