import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { itemsData, itemCategoryLabels } from "../lib/items";
import type {
  ItemCategory,
  ItemEntry,
  ItemPossibleEffect,
  ItemRarity,
} from "../lib/items";
import "../styles/items/items.css";

type ItemsViewMode = "list" | "cards";
type ItemMediaMode = "image" | "video";
type ItemCategoryFilter = "all" | ItemCategory;
type ItemRarityFilter = "all" | ItemRarity;

const ITEM_TICKER_TEXT =
  "DATA DECRYPTED :: ACCESSING DATA // DATA DECRYPTED :: ACCESSING DATA // DATA DECRYPTED :: ACCESSING DATA //";

const ITEM_MARQUEE_SPEED = 80;
const BLOODTHIRSTY_VALUE_PER_KILL_RATE = 0.25;

const rarityLabels: Record<ItemRarity, string> = {
  standard: "Standard",
  enhanced: "Enhanced",
  deluxe: "Deluxe",
  superior: "Superior",
  prestige: "Prestige",
  contraband: "Contraband",
  priority: "Priority",
};

const sourceKindLabels: Record<string, string> = {
  contract: "Contract",
  "world-loot": "World Loot",
  vendor: "Vendor",
  "map-point": "Map",
  quest: "Quest",
  activity: "Activity",
  crafting: "Crafting",
  other: "Source",
};

const categoryOptions = Array.from(
  new Set(itemsData.map((item) => item.category))
) as ItemCategory[];

const rarityOptions = Array.from(
  new Set(itemsData.map((item) => item.rarity))
) as ItemRarity[];

type DropdownOption<T extends string> = {
  value: T;
  label: string;
};

function computeEnduringValue(
  baseValue: number,
  extractions: number,
  firstExtractionBonusRate: number,
  firstExtractionLimit: number,
  laterExtractionBonusRate: number
) {
  const firstTier = Math.min(extractions, firstExtractionLimit);
  const secondTier = Math.max(extractions - firstExtractionLimit, 0);

  return Math.round(
    baseValue +
      baseValue * firstExtractionBonusRate * firstTier +
      baseValue * laterExtractionBonusRate * secondTier
  );
}

function formatStatValue(value: number | string, unit?: string) {
  return `${value}${unit ?? ""}`;
}

function renderEffectText(text: string) {
  if (!text.startsWith("+")) return text;

  return (
    <>
      <span className="itemInspect__effectBonus">+</span>
      {text.slice(1)}
    </>
  );
}

function renderHighlightedText(text: string, terms?: string[]) {
  if (!terms?.length) return text;

  const escapedTerms = terms.map((term) =>
    term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );

  const regex = new RegExp(`(${escapedTerms.join("|")})`, "gi");

  return text.split(regex).map((part, index) => {
    const isHighlighted = terms.some(
      (term) => term.toLowerCase() === part.toLowerCase()
    );

    return isHighlighted ? (
      <span key={index} className="itemInspect__highlight">
        {part}
      </span>
    ) : (
      part
    );
  });
}

function ItemsDropdown<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: DropdownOption<T>[];
  onChange: (value: T) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    if (!isOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="itemsToolbar__field" ref={rootRef}>
      <span className="itemsToolbar__label">{label}</span>

      <div className={`itemsDropdown${isOpen ? " is-open" : ""}`}>
        <button
          type="button"
          className="itemsDropdown__trigger"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span>{selectedOption?.label ?? value}</span>
          <span className="itemsDropdown__chevron" aria-hidden="true" />
        </button>

        {isOpen ? (
          <div className="itemsDropdown__menu" role="listbox">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                className={option.value === value ? "is-active" : ""}
                role="option"
                aria-selected={option.value === value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function ItemInspectTicker() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const measureRef = useRef<HTMLSpanElement | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const measure = measureRef.current;
    if (!root || !measure) return;

    const updateMetrics = () => {
      const width = Math.ceil(measure.getBoundingClientRect().width);
      if (!width) return;

      root.style.setProperty("--item-ticker-distance", `${width}px`);
      root.style.setProperty(
        "--item-ticker-duration",
        `${width / ITEM_MARQUEE_SPEED}s`
      );
    };

    updateMetrics();

    const resizeObserver = new ResizeObserver(updateMetrics);
    resizeObserver.observe(measure);
    window.addEventListener("resize", updateMetrics);
    document.fonts?.ready?.then(updateMetrics).catch(() => {});

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateMetrics);
    };
  }, []);

  return (
    <div className="itemInspectTicker" ref={rootRef} aria-hidden="true">
      <div className="itemInspectTicker__viewport">
        <div className="itemInspectTicker__rail">
          <span className="itemInspectTicker__lead" />
          <div className="itemInspectTicker__inner">
            <span className="itemInspectTicker__copy" ref={measureRef}>
              {ITEM_TICKER_TEXT}
            </span>
            <span className="itemInspectTicker__gap" />
            <span className="itemInspectTicker__copy">{ITEM_TICKER_TEXT}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemEffectSimulator({
  item,
  effect,
}: {
  item: ItemEntry;
  effect: ItemPossibleEffect;
}) {
  const simulation = effect.simulation;

  const [extractions, setExtractions] = useState(
    simulation?.type === "enduring" ? simulation.defaultExtractions ?? 1 : 1
  );

  const [kills, setKills] = useState(
    simulation?.type === "kills-scaling" ? simulation.defaultKills ?? 0 : 0
  );

  if (!simulation) {
    return (
      <article className="itemInspect__effectRoll">
        <div className="itemInspect__effectRollHead">
          <strong>{effect.label}</strong>
        </div>
        <p>{effect.description}</p>
      </article>
    );
  }

  if (simulation.type === "enduring") {
    const baseValue = item.sellPrice ?? 0;
    const maxExtractions = simulation.maxExtractions ?? 10;
    const simulatedValue = computeEnduringValue(
      baseValue,
      extractions,
      simulation.firstExtractionBonusRate,
      simulation.firstExtractionLimit,
      simulation.laterExtractionBonusRate
    );
    const gain = simulatedValue - baseValue;

    return (
      <article className="itemInspect__effectRoll effect-enduring">
        <div className="itemInspect__effectRollHead">
          <strong>{effect.label}</strong>
          <span>{extractions} extracts</span>
        </div>

        <p>{effect.description}</p>

        <div className="itemInspect__effectControls">
          <button
            type="button"
            onClick={() => setExtractions((value) => Math.max(0, value - 1))}
          >
            -
          </button>

          <input
            type="number"
            min={0}
            max={maxExtractions}
            value={extractions}
            onChange={(event) => {
              const value = Number(event.target.value);
              setExtractions(Math.max(0, Math.min(maxExtractions, value)));
            }}
          />

          <button
            type="button"
            onClick={() =>
              setExtractions((value) => Math.min(maxExtractions, value + 1))
            }
          >
            +
          </button>
        </div>

        <div className="itemInspect__effectResult">
          <span>Base value: {baseValue}</span>
          <span>New value: {simulatedValue}</span>
          <span>Gain: +{gain}</span>
        </div>
      </article>
    );
  }

  if (simulation.type === "kills-scaling") {
    const baseValue = item.sellPrice ?? 0;
    const maxKills = simulation.maxKills ?? 50;
    const gain = Math.round(
      baseValue * BLOODTHIRSTY_VALUE_PER_KILL_RATE * kills
    );
    const simulatedValue = baseValue + gain;

    return (
      <article className="itemInspect__effectRoll effect-bloodthirsty">
        <div className="itemInspect__effectRollHead">
          <strong>{effect.label}</strong>
          <span>{kills} kills</span>
        </div>

        <p>{effect.description}</p>

        <div className="itemInspect__effectControls">
          <button
            type="button"
            onClick={() => setKills((value) => Math.max(0, value - 1))}
          >
            -
          </button>

          <input
            type="number"
            min={0}
            max={maxKills}
            value={kills}
            onChange={(event) => {
              const value = Number(event.target.value);
              setKills(Math.max(0, Math.min(maxKills, value)));
            }}
          />

          <button
            type="button"
            onClick={() => setKills((value) => Math.min(maxKills, value + 1))}
          >
            +
          </button>
        </div>

        <div className="itemInspect__effectResult">
          <span>Base value: {baseValue}</span>
          <span>New value: {simulatedValue}</span>
          <span>Gain: +{gain}</span>
        </div>
      </article>
    );
  }

  if (simulation.type === "price-flat") {
    const baseValue = item.sellPrice ?? 0;
    const simulatedValue = baseValue + simulation.flatBonus;

    return (
      <article className="itemInspect__effectRoll">
        <div className="itemInspect__effectRollHead">
          <strong>{effect.label}</strong>
        </div>

        <p>{effect.description}</p>

        <div className="itemInspect__effectResult">
          <span>Base value: {baseValue}</span>
          <span>New value: {simulatedValue}</span>
          <span>Gain: +{simulation.flatBonus}</span>
        </div>
      </article>
    );
  }

  return null;
}

export default function Items() {
  const [viewMode, setViewMode] = useState<ItemsViewMode>("list");
  const [selectedCategory, setSelectedCategory] =
    useState<ItemCategoryFilter>("all");
  const [selectedRarity, setSelectedRarity] = useState<ItemRarityFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<ItemEntry | null>(null);
  const [mediaMode, setMediaMode] = useState<ItemMediaMode>("image");
  const [selectedEffectId, setSelectedEffectId] = useState<string | null>(null);

  const categoryDropdownOptions = useMemo<DropdownOption<ItemCategoryFilter>[]>(
    () => [
      { value: "all", label: "All types" },
      ...categoryOptions.map((category) => ({
        value: category,
        label: itemCategoryLabels[category] ?? category,
      })),
    ],
    []
  );

  const rarityDropdownOptions = useMemo<DropdownOption<ItemRarityFilter>[]>(
    () => [
      { value: "all", label: "All rarities" },
      ...rarityOptions.map((rarity) => ({
        value: rarity,
        label: rarityLabels[rarity] ?? rarity,
      })),
    ],
    []
  );

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return itemsData.filter((item) => {
      const matchCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchRarity =
        selectedRarity === "all" || item.rarity === selectedRarity;

      const searchableText = [
        item.name,
        item.category,
        item.rarity,
        item.description,
        item.effect,
        item.lore,
        item.manufacturer,
        item.slot,
        ...(item.tags ?? []),
        ...(item.sources?.map((source) => source.label) ?? []),
        ...(item.possibleEffects?.map((effect) => effect.label) ?? []),
        ...(item.possibleEffects?.map((effect) => effect.description) ?? []),
        ...(item.stats?.map((stat) => stat.label) ?? []),
        ...(item.stats?.flatMap(
          (stat) => stat.details?.map((detail) => detail.label) ?? []
        ) ?? []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return (
        matchCategory &&
        matchRarity &&
        (!query || searchableText.includes(query))
      );
    });
  }, [selectedCategory, selectedRarity, searchQuery]);

  const openItemModal = (item: ItemEntry) => {
    setSelectedItem(item);
    setMediaMode("image");
    setSelectedEffectId(null);
  };

  const closeItemModal = () => {
    setSelectedItem(null);
    setMediaMode("image");
    setSelectedEffectId(null);
  };

  const openAmmoItem = () => {
    if (!selectedItem?.ammo?.itemId) return;

    const ammoItem = itemsData.find((item) => item.id === selectedItem.ammo?.itemId);
    if (ammoItem) openItemModal(ammoItem);
  };

  return (
    <main className="container itemsPage itemsPage--split">
      <header className="itemsLandingHero">
        <div className="itemsLandingHero__visual" aria-hidden="true" />

        <div className="itemsLandingHero__content">
          <p className="itemsLandingHero__kicker">Tau Ceti IV / Gear Archive</p>
          <h1 className="itemsLandingHero__title">ITEMS</h1>
          <p className="itemsLandingHero__text">
            Browse every known piece of equipment before deployment. Review
            implants, weapons, keys, valuables, consumables, mods, cores and
            field assets recovered across the archive.
          </p>
        </div>
      </header>

      <section className="itemsToolbar" aria-label="Items filters">
        <div className="itemsToolbar__search">
          <label className="itemsToolbar__label" htmlFor="items-search">
            Search
          </label>

          <input
            id="items-search"
            className="itemsToolbar__searchInput"
            type="search"
            value={searchQuery}
            placeholder="Search item, source, stat..."
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </div>

        <div className="itemsToolbar__filters">
          <ItemsDropdown
            label="Type"
            value={selectedCategory}
            options={categoryDropdownOptions}
            onChange={setSelectedCategory}
          />

          <ItemsDropdown
            label="Rarity"
            value={selectedRarity}
            options={rarityDropdownOptions}
            onChange={setSelectedRarity}
          />
        </div>

        <div className="itemsToolbar__view">
          <span className="itemsToolbar__label">View</span>

          <div className="itemsViewSwitch">
            <button
              type="button"
              className={viewMode === "list" ? "is-active" : ""}
              onClick={() => setViewMode("list")}
            >
              List
            </button>

            <button
              type="button"
              className={viewMode === "cards" ? "is-active" : ""}
              onClick={() => setViewMode("cards")}
            >
              Cards
            </button>
          </div>
        </div>
      </section>

      {viewMode === "list" ? (
        <section className="itemsDatabase" aria-label="Items archive">
          <div className="itemsDatabase__head">
            <span>Name</span>
            <span>Type</span>
            <span>Rarity</span>
            <span>Buy / Sell</span>
            <span>Description</span>
          </div>

          <div className="itemsDatabase__body">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`itemsDatabase__row rarity-${item.rarity}`}
                onClick={() => openItemModal(item)}
              >
                <span className="itemsDatabase__name">
                  <img
                    src={item.icon ?? item.image}
                    alt=""
                    className="itemsDatabase__icon"
                  />
                  <strong>{item.name}</strong>
                </span>

                <span>{itemCategoryLabels[item.category] ?? item.category}</span>
                <span className="itemsDatabase__rarity">{item.rarity}</span>

                <span>
                  {item.buyPrice || item.sellPrice
                    ? `${item.buyPrice && item.buyPrice > 0 ? item.buyPrice : "—"} / ${
                        item.sellPrice ?? "—"
                      }`
                    : "—"}
                </span>

                <span>{item.description ?? "No data available."}</span>
              </button>
            ))}

            {filteredItems.length === 0 ? (
              <div className="itemsDatabase__empty">No items found.</div>
            ) : null}
          </div>
        </section>
      ) : (
        <section className="itemsCardGrid" aria-label="Items card archive">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`itemsGridCard rarity-${item.rarity}`}
              onClick={() => openItemModal(item)}
            >
              <img
                src={item.icon ?? item.image}
                alt={item.name}
                className="itemsGridCard__image"
              />

              <div className="itemsGridCard__overlay">
                <span className="itemsGridCard__type">
                  {itemCategoryLabels[item.category] ?? item.category}
                </span>

                <strong className="itemsGridCard__name">{item.name}</strong>
                <span className="itemsGridCard__rarity">{item.rarity}</span>

                {item.description ? (
                  <p className="itemsGridCard__description">
                    {item.description}
                  </p>
                ) : null}
              </div>
            </button>
          ))}

          {filteredItems.length === 0 ? (
            <div className="itemsCardGrid__empty">No items found.</div>
          ) : null}
        </section>
      )}

      {selectedItem ? (
        <div
          className="itemInspectModal"
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.name}
          onClick={closeItemModal}
        >
          <section
            className={`itemInspect rarity-${selectedItem.rarity}`}
            onClick={(event) => event.stopPropagation()}
          >
            <ItemInspectTicker />

            <button
              type="button"
              className="itemInspect__close"
              onClick={closeItemModal}
            >
              CLOSE
            </button>

            <div className="itemInspect__media">
              {selectedItem.video ? (
                <div className="itemInspect__mediaSwitch">
                  <button
                    type="button"
                    className={mediaMode === "image" ? "is-active" : ""}
                    onClick={() => setMediaMode("image")}
                  >
                    Image
                  </button>

                  <button
                    type="button"
                    className={mediaMode === "video" ? "is-active" : ""}
                    onClick={() => setMediaMode("video")}
                  >
                    Animation
                  </button>
                </div>
              ) : null}

              {selectedItem.ammo ? (
                <button
                  type="button"
                  className="itemInspect__ammoSlot"
                  aria-label={`Ammo: ${selectedItem.ammo.label}`}
                  onClick={openAmmoItem}
                >
                  <img src={selectedItem.ammo.icon} alt="" />

                  <span className="itemInspect__ammoTooltip">
                    {selectedItem.ammo.label}
                  </span>
                </button>
              ) : null}

              {mediaMode === "video" && selectedItem.video ? (
                <video
                  src={selectedItem.video}
                  className="itemInspect__video"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={
                    selectedItem.render ??
                    selectedItem.image ??
                    selectedItem.icon
                  }
                  alt={selectedItem.name}
                  className="itemInspect__image"
                />
              )}
            </div>

            <div className="itemInspect__content">
              <div className="itemInspect__eyebrow">
                {itemCategoryLabels[selectedItem.category] ??
                  selectedItem.category}
                {" // "}
                {selectedItem.rarity}
              </div>

              <h2 className="itemInspect__title">{selectedItem.name}</h2>

              {selectedItem.effect ? (
                <p className="itemInspect__effect">
                  {renderEffectText(selectedItem.effect)}
                </p>
              ) : null}

              {selectedItem.description ? (
                <p className="itemInspect__descriptionText">
                  {renderHighlightedText(
                    selectedItem.description,
                    selectedItem.highlightTerms
                  )}
                </p>
              ) : null}

              {selectedItem.lore &&
              selectedItem.lore !== "None" &&
              selectedItem.lore !== selectedItem.description ? (
                <div className="itemInspect__intrinsic">
                  <strong>{selectedItem.effect ?? "Item Effect"}</strong>
                  <p>{renderHighlightedText(selectedItem.lore)}</p>
                </div>
              ) : null}

              {selectedItem.stats?.length ? (
                <div className="itemInspect__stats">
                  {selectedItem.stats.map((stat) => {
                    const hasModifier =
                      typeof stat.modifier === "number" && stat.modifier !== 0;

                    const max = stat.max ?? 100;
                    const visibleValue = hasModifier
                      ? Math.abs(stat.modifier ?? 0)
                      : stat.value;

                    const percent = Math.min(100, (visibleValue / max) * 100);
                    const isNegative = hasModifier && (stat.modifier ?? 0) < 0;
                    const isPositive = hasModifier && (stat.modifier ?? 0) > 0;

                    return (
                      <div
                        key={stat.label}
                        className={`itemInspect__stat ${
                          isNegative
                            ? "is-negative"
                            : isPositive
                              ? "is-positive"
                              : "is-neutral"
                        }`}
                        style={
                          {
                            "--stat-modifier": `${percent}%`,
                          } as CSSProperties
                        }
                      >
                        <div className="itemInspect__statTop">
                          <span className="itemInspect__statName">
                            {stat.label}
                          </span>

                          <strong className="itemInspect__statValue">
                            <em>
                              {hasModifier
                                ? (stat.modifier ?? 0) > 0
                                  ? `+${stat.modifier}`
                                  : stat.modifier
                                : formatStatValue(stat.value, stat.unit)}
                            </em>
                          </strong>
                        </div>

                        <div className="itemInspect__statBar">
                          <span className="itemInspect__statBonus" />
                        </div>

                        {stat.details?.length ? (
                          <div className="itemInspect__statDetails">
                            {stat.details.map((detail) => (
                              <div
                                key={detail.label}
                                className="itemInspect__statDetail"
                              >
                                <span>{detail.label}</span>
                                <strong>{detail.value}</strong>
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              ) : null}

              <div className="itemInspect__meta">
                {selectedItem.buyPrice && selectedItem.buyPrice > 0 ? (
                  <span className="priceTag">BUY: {selectedItem.buyPrice}</span>
                ) : null}

                {selectedItem.sellPrice ? (
                  <span className="priceTag">
                    SELL: {selectedItem.sellPrice}
                  </span>
                ) : null}

                {selectedItem.slot ? <span>SLOT: {selectedItem.slot}</span> : null}

                {selectedItem.manufacturer ? (
                  <span>MAKER: {selectedItem.manufacturer}</span>
                ) : null}
              </div>

              {selectedItem.possibleEffects?.length ? (
                <section className="itemInspect__effects">
                  <div className="itemInspect__effectsHead">
                    <span className="itemInspect__effectsLabel">
                      Possible rolls
                    </span>

                    <span className="itemInspect__effectsCount">
                      {selectedItem.possibleEffects.length}
                    </span>
                  </div>

                  <div className="itemInspect__effectChoices">
                    {selectedItem.possibleEffects.map((effect) => (
                      <button
                        key={effect.id}
                        type="button"
                        className={`itemInspect__effectChoice ${
                          selectedEffectId === effect.id ? "is-active" : ""
                        }`}
                        onClick={() =>
                          setSelectedEffectId((current) =>
                            current === effect.id ? null : effect.id
                          )
                        }
                      >
                        {effect.label}
                      </button>
                    ))}
                  </div>

                  {selectedEffectId ? (
                    <div className="itemInspect__effectsList">
                      {selectedItem.possibleEffects
                        .filter((effect) => effect.id === selectedEffectId)
                        .map((effect) => (
                          <ItemEffectSimulator
                            key={effect.id}
                            item={selectedItem}
                            effect={effect}
                          />
                        ))}
                    </div>
                  ) : (
                    <p className="itemInspect__effectHint">
                      Select a roll to simulate its effect.
                    </p>
                  )}
                </section>
              ) : null}

              {selectedItem.sources?.length ? (
                <section className="itemInspect__sources">
                  <div className="itemInspect__sourcesHead">
                    <span className="itemInspect__sourcesLabel">
                      Obtained from
                    </span>

                    <span className="itemInspect__sourcesCount">
                      {selectedItem.sources.length}
                    </span>
                  </div>

                  <div className="itemInspect__sourcesList">
                    {selectedItem.sources.map((source) => (
                      <button
                        key={`${source.kind}-${source.label}`}
                        type="button"
                        className={`itemInspect__source source-${source.kind}${
                          source.target ? " is-link" : " is-static"
                        }`}
                        aria-disabled={!source.target}
                        onClick={() => {
                          if (!source.target) return;
                          console.log("Open source target:", source.target);
                        }}
                      >
                        <span className="itemInspect__sourceKind">
                          {sourceKindLabels[source.kind] ?? source.kind}
                        </span>

                        <span className="itemInspect__sourceLabel">
                          {source.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </section>
              ) : null}
            </div>
          </section>
        </div>
      ) : null}
    </main>
  );
}