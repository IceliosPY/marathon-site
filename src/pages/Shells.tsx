import { useMemo, useRef, useState } from "react";
import { shellsData } from "../lib/Shells/api";
import "../styles/shells/shells.css";

const HOVER_PREVIEW_DELAY = 300;

export default function Shells() {
  const [activeShellId, setActiveShellId] = useState(shellsData[0]?.id ?? "");
  const [hoveredShellId, setHoveredShellId] = useState<string | null>(null);

  const hoverTimeoutRef = useRef<number | null>(null);

  const activeShell = useMemo(
    () => shellsData.find((shell) => shell.id === activeShellId) ?? shellsData[0],
    [activeShellId]
  );

  const previewShell = useMemo(
    () =>
      hoveredShellId
        ? shellsData.find((shell) => shell.id === hoveredShellId) ?? null
        : null,
    [hoveredShellId]
  );

  const clearHoverPreview = () => {
    if (hoverTimeoutRef.current !== null) {
      window.clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }

    setHoveredShellId(null);
  };

  const scheduleHoverPreview = (shellId: string) => {
    if (hoverTimeoutRef.current !== null) {
      window.clearTimeout(hoverTimeoutRef.current);
    }

    hoverTimeoutRef.current = window.setTimeout(() => {
      setHoveredShellId(shellId);
      hoverTimeoutRef.current = null;
    }, HOVER_PREVIEW_DELAY);
  };

  if (!activeShell) {
    return null;
  }

  return (
    <main className="shellsPage">
      <section className="shellsHero">
        <img
          src={activeShell.background}
          alt=""
          className="shellsHero__background"
        />

        <div className="shellsHero__overlay" />
        <div className="shellsHero__grid" />

        <section className="shellsAbilities">
          <h1 className="shellsAbilities__title">{activeShell.name}</h1>

          <p className="shellsAbilities__label">Abilities and Traits</p>

          <div className="shellsAbilities__list">
            {activeShell.abilities.map((ability) => (
              <article key={ability.id} className="shellsAbility">
                <div className="shellsAbility__icon">
                  {ability.icon ? (
                    <img
                      src={ability.icon}
                      alt=""
                      className="shellsAbility__iconImg"
                    />
                  ) : null}
                </div>

                <div>
                  <h2>{ability.name}</h2>
                  <p>{ability.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {activeShell.quote ? (
          <p className="shellsHero__quote">{activeShell.quote}</p>
        ) : null}

        {previewShell ? (
          <aside className="shellsPreview">
            <h2 className="shellsPreview__title">{previewShell.name}</h2>

            <div className="shellsPreview__line" />

            <p className="shellsPreview__meta">
              <span>ROLE:</span> {previewShell.preview.role}
            </p>

            <p className="shellsPreview__meta">
              <span>TECH:</span> {previewShell.preview.tech}
            </p>

            <div className="shellsPreview__smallLine" />

            <p className="shellsPreview__text">{previewShell.preview.intro}</p>
            <p className="shellsPreview__text">{previewShell.preview.body}</p>

            {previewShell.preview.code ? (
              <p className="shellsPreview__code">{previewShell.preview.code}</p>
            ) : null}

            <div className="shellsPreview__footer">⌁ Select Shell</div>
          </aside>
        ) : null}

        <nav className="shellsSelector" aria-label="Shell selection">
          {shellsData.map((shell) => (
            <button
              key={shell.id}
              type="button"
              className={`shellsSelector__item ${
                shell.id === activeShell.id ? "is-active" : ""
              }`}
              onClick={() => {
                setActiveShellId(shell.id);
                clearHoverPreview();
              }}
              onMouseEnter={() => scheduleHoverPreview(shell.id)}
              onMouseLeave={clearHoverPreview}
              onFocus={() => scheduleHoverPreview(shell.id)}
              onBlur={clearHoverPreview}
              aria-label={shell.name}
            >
              <img src={shell.portrait} alt="" />
            </button>
          ))}
        </nav>
      </section>
    </main>
  );
}