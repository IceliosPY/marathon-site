import type { Dispatch, SetStateAction } from "react";
import { itemsData, itemCategoryLabels } from "../../lib/items";
import type { ItemEntry, ItemRarity } from "../../lib/items";
import ItemStatsBlock from "./ItemStatsBlock";
import ItemInspectTicker from "./ItemInspectTicker";
import ItemEffectSimulator from "./ItemEffectSimulator";

type ItemMediaMode = "image" | "video";

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

function renderDescriptionLines(text: string, terms?: string[]) {
  return text.split("\n").map((line, index) => {
    const trimmedLine = line.trim();

    if (!trimmedLine) {
      return <br key={`description-break-${index}`} />;
    }

    return (
      <p
        key={`${trimmedLine}-${index}`}
        className={`itemInspect__descriptionLine ${
          trimmedLine.startsWith("+") ? "is-bonus-line" : ""
        }`}
      >
        {renderHighlightedText(trimmedLine, terms)}
      </p>
    );
  });
}

type ItemInspectModalProps = {
  selectedItem: ItemEntry | null;
  mediaMode: ItemMediaMode;
  setMediaMode: Dispatch<SetStateAction<ItemMediaMode>>;
  selectedEffectId: string | null;
  setSelectedEffectId: Dispatch<SetStateAction<string | null>>;
  selectedWeaponProfileId: string | null;
  setSelectedWeaponProfileId: Dispatch<SetStateAction<string | null>>;
  closeItemModal: () => void;
  openItemModal: (item: ItemEntry) => void;
};

export default function ItemInspectModal({
  selectedItem,
  mediaMode,
  setMediaMode,
  selectedEffectId,
  setSelectedEffectId,
  selectedWeaponProfileId,
  setSelectedWeaponProfileId,
  closeItemModal,
  openItemModal,
}: ItemInspectModalProps) {
  if (!selectedItem) return null;

  const activeWeaponProfile = selectedItem.weaponStatProfiles?.find(
    (profile) => profile.weaponId === selectedWeaponProfileId
  );

  const displayedStats = activeWeaponProfile?.stats ?? selectedItem.stats ?? [];

  const lockedUpgradeItems = selectedItem.lockedUpgradeIds
    ?.map((id) => itemsData.find((item) => item.id === id))
    .filter((item): item is ItemEntry => Boolean(item));

  const openAmmoItem = () => {
    if (!selectedItem.ammo?.itemId) return;

    const ammoItem = itemsData.find(
      (item) => item.id === selectedItem.ammo?.itemId
    );

    if (ammoItem) openItemModal(ammoItem);
  };

  return (
    <div
      className="itemInspectModal"
      role="dialog"
      aria-modal="true"
      aria-label={selectedItem.name}
      onClick={closeItemModal}
    >
      <section
        className={`itemInspect rarity-${selectedItem.rarity} category-${selectedItem.category}`}
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
              src={selectedItem.render ?? selectedItem.image ?? selectedItem.icon}
              alt={selectedItem.name}
              className="itemInspect__image"
            />
          )}

          {lockedUpgradeItems?.length ? (
            <section className="itemInspect__mediaLockedSlots">
              <div className="itemInspect__mediaLockedSlotsHead">
                <span>MODS</span>
                <strong>↗</strong>
              </div>

              <div className="itemInspect__mediaLockedSlotsGrid">
                {lockedUpgradeItems.map((upgrade) => (
                  <article
                    key={upgrade.id}
                    className={`itemInspect__mediaLockedSlot rarity-${upgrade.rarity}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => openItemModal(upgrade)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        openItemModal(upgrade);
                      }
                    }}
                  >
                    <div className="itemInspect__mediaLockedSlotBand">
                      {itemCategoryLabels[upgrade.category] ?? upgrade.category}
                    </div>

                    {upgrade.icon ? (
                      <img src={upgrade.icon} alt={upgrade.name} />
                    ) : null}

                    <div className="itemInspect__mediaLockedTooltip">
                      <span>
                        {rarityLabels[upgrade.rarity] ?? upgrade.rarity}{" "}
                        {itemCategoryLabels[upgrade.category] ??
                          upgrade.category}
                      </span>

                      <strong>{upgrade.name}</strong>

                      {upgrade.description ? <p>{upgrade.description}</p> : null}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ) : null}
        </div>

        <div className="itemInspect__content">
          <div className="itemInspect__topRow">
            <div className="itemInspect__eyebrow">
              {itemCategoryLabels[selectedItem.category] ?? selectedItem.category}
              {" // "}
              {selectedItem.rarity}
            </div>
          </div>

          <h2 className="itemInspect__title">{selectedItem.name}</h2>

          {selectedItem.effect ? (
            <p className="itemInspect__effect">
              {renderEffectText(selectedItem.effect)}
            </p>
          ) : null}

          {selectedItem.description ? (
            <div className="itemInspect__descriptionText itemInspect__descriptionText--lines">
              {renderDescriptionLines(
                selectedItem.description,
                selectedItem.highlightTerms
              )}
            </div>
          ) : null}

          {selectedItem.lore &&
          selectedItem.lore !== "None" &&
          selectedItem.lore !== selectedItem.description ? (
            <div className="itemInspect__intrinsic">
              <strong>{selectedItem.effect ?? "Item Effect"}</strong>
              <p>{renderHighlightedText(selectedItem.lore)}</p>
            </div>
          ) : null}

          {selectedItem.prestigeFeature ? (
            <div
              className={`itemInspect__prestigeFeature feature-${
                selectedItem.prestigeFeature.color ?? "yellow"
              }`}
            >
              <strong>{selectedItem.prestigeFeature.title}</strong>

              <p>
                {renderHighlightedText(
                  selectedItem.prestigeFeature.description,
                  selectedItem.highlightTerms
                )}
              </p>
            </div>
          ) : null}

          {selectedItem.weaponStatProfiles?.length ? (
            <section className="itemInspect__weaponProfiles">
              <div className="itemInspect__weaponProfileNotice">
                <span>Displaying stats based on active weapon</span>
                <strong>
                  {activeWeaponProfile?.weaponName ??
                    selectedItem.weaponStatProfiles[0]?.weaponName}
                </strong>
              </div>

              <div className="itemInspect__weaponProfileTabs">
                {selectedItem.weaponStatProfiles.map((profile) => (
                  <button
                    key={profile.weaponId}
                    type="button"
                    className={
                      profile.weaponId === selectedWeaponProfileId
                        ? "is-active"
                        : ""
                    }
                    onClick={() => setSelectedWeaponProfileId(profile.weaponId)}
                  >
                    {(() => {
                      const weaponItem = itemsData.find(
                        (item) => item.id === profile.weaponId
                      );

                      return (
                        <>
                          {weaponItem?.icon ? (
                            <img src={weaponItem.icon} alt="" />
                          ) : null}

                          <span>{profile.weaponName}</span>
                        </>
                      );
                    })()}
                  </button>
                ))}
              </div>

              {displayedStats.length ? (
                <ItemStatsBlock stats={displayedStats} />
              ) : null}
            </section>
          ) : displayedStats.length ? (
            <ItemStatsBlock stats={displayedStats} />
          ) : null}

          <div className="itemInspect__meta">
            {selectedItem.buyPrice && selectedItem.buyPrice > 0 ? (
              <span className="priceTag">BUY: {selectedItem.buyPrice}</span>
            ) : null}

            {selectedItem.sellPrice ? (
              <span className="priceTag">SELL: {selectedItem.sellPrice}</span>
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
                <span className="itemInspect__sourcesLabel">Obtained from</span>

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
  );
}