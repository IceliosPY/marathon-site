import { useMemo, useState } from "react";
import {itemsData, itemCategoryLabels, itemModSubcategoryLabels,} from "../lib/items";
import type {ItemCategory, ItemEntry, ItemModSubcategory, ItemRarity,} from "../lib/items";
import ItemsDropdown, { type DropdownOption,} from "../components/items/ItemsDropdown";
import ItemInspectModal from "../components/items/ItemInspectModal";
import "../styles/items/items.css";

// Declarations de types et de constantes
type ItemsViewMode = "list" | "cards";
type ItemMediaMode = "image" | "video";
type ItemCategoryFilter = "all" | ItemCategory;
type ItemRarityFilter = "all" | ItemRarity;
type ItemModSubcategoryFilter = "all" | ItemModSubcategory;

const rarityLabels: Record<ItemRarity, string> = {
  standard: "Standard",
  enhanced: "Enhanced",
  deluxe: "Deluxe",
  superior: "Superior",
  prestige: "Prestige",
  contraband: "Contraband",
  priority: "Priority",
};

const categoryOptions = Array.from(
  new Set(itemsData.map((item) => item.category))
) as ItemCategory[];

const rarityOptions = Array.from(
  new Set(itemsData.map((item) => item.rarity))
) as ItemRarity[];

const modSubcategoryOptions = Array.from(
  new Set(
    itemsData
      .map((item) => item.modSubcategory)
      .filter((subcategory): subcategory is ItemModSubcategory =>
        Boolean(subcategory)
      )
  )
) as ItemModSubcategory[];

export default function Items() {
  const [viewMode, setViewMode] = useState<ItemsViewMode>("list");
  const [selectedCategory, setSelectedCategory] =
    useState<ItemCategoryFilter>("all");
  const [selectedRarity, setSelectedRarity] = useState<ItemRarityFilter>("all");
  const [selectedModSubcategory, setSelectedModSubcategory] =
    useState<ItemModSubcategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState<ItemEntry | null>(null);
  const [mediaMode, setMediaMode] = useState<ItemMediaMode>("image");
  const [selectedEffectId, setSelectedEffectId] = useState<string | null>(null);
  const [selectedWeaponProfileId, setSelectedWeaponProfileId] = useState<
    string | null
  >(null);

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

  const modSubcategoryDropdownOptions = useMemo<
    DropdownOption<ItemModSubcategoryFilter>[]
  >(
    () => [
      { value: "all", label: "All mod slots" },
      ...modSubcategoryOptions.map((subcategory) => ({
        value: subcategory,
        label: itemModSubcategoryLabels[subcategory] ?? subcategory,
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

      const matchModSubcategory =
        selectedModSubcategory === "all" ||
        item.modSubcategory === selectedModSubcategory;

      const searchableText = [
        item.name,
        item.category,
        item.rarity,
        item.modSubcategory,
        item.modSubcategory
          ? itemModSubcategoryLabels[item.modSubcategory]
          : undefined,
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
        ...(item.weaponStatProfiles?.map((profile) => profile.weaponName) ??
          []),
        ...(item.weaponStatProfiles?.flatMap((profile) =>
          profile.stats.map((stat) => stat.label)
        ) ?? []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return (
        matchCategory &&
        matchRarity &&
        matchModSubcategory &&
        (!query || searchableText.includes(query))
      );
    });
  }, [selectedCategory, selectedRarity, selectedModSubcategory, searchQuery]);

  const openItemModal = (item: ItemEntry) => {
    setSelectedItem(item);
    setMediaMode("image");
    setSelectedEffectId(null);
    setSelectedWeaponProfileId(item.weaponStatProfiles?.[0]?.weaponId ?? null);
  };

  const closeItemModal = () => {
    setSelectedItem(null);
    setMediaMode("image");
    setSelectedEffectId(null);
    setSelectedWeaponProfileId(null);
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

          <ItemsDropdown
            label="Mod slot"
            value={selectedModSubcategory}
            options={modSubcategoryDropdownOptions}
            onChange={setSelectedModSubcategory}
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

                <span>
                  {itemCategoryLabels[item.category] ?? item.category}
                  {item.modSubcategory
                    ? ` / ${
                        itemModSubcategoryLabels[item.modSubcategory] ??
                        item.modSubcategory
                      }`
                    : ""}
                </span>

                <span className="itemsDatabase__rarity">{item.rarity}</span>

                <span>
                  {item.buyPrice || item.sellPrice
                    ? `${
                        item.buyPrice && item.buyPrice > 0
                          ? item.buyPrice
                          : "—"
                      } / ${item.sellPrice ?? "—"}`
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
                  {item.modSubcategory
                    ? ` / ${
                        itemModSubcategoryLabels[item.modSubcategory] ??
                        item.modSubcategory
                      }`
                    : ""}
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

      <ItemInspectModal
        selectedItem={selectedItem}
        mediaMode={mediaMode}
        setMediaMode={setMediaMode}
        selectedEffectId={selectedEffectId}
        setSelectedEffectId={setSelectedEffectId}
        selectedWeaponProfileId={selectedWeaponProfileId}
        setSelectedWeaponProfileId={setSelectedWeaponProfileId}
        closeItemModal={closeItemModal}
        openItemModal={openItemModal}
      />
    </main>
  );
}
