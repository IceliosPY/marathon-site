import { useMemo, useState } from "react";
import { shellsData } from "../lib/Shells/api";
import "../styles/index.css";

export default function Shells() {
  const [activeShellId, setActiveShellId] = useState(shellsData[0]?.id ?? "");

  const activeShell = useMemo(
    () => shellsData.find((shell) => shell.id === activeShellId) ?? shellsData[0],
    [activeShellId]
  );

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
                  {ability.name.slice(0, 2)}
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

        <nav className="shellsSelector" aria-label="Shell selection">
          {shellsData.map((shell) => (
            <button
              key={shell.id}
              type="button"
              className={`shellsSelector__item ${
                shell.id === activeShell.id ? "is-active" : ""
              }`}
              onClick={() => setActiveShellId(shell.id)}
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