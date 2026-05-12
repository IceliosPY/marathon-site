import { useEffect, useState } from "react";

type Character = {
  id: string;
  name: string;
  faction: string;
  clearance: string;
  summary: string;
};

export default function Characters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/characters.json")
      .then((r) => r.json())
      .then((data) => setCharacters(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="container">
      <header className="pageHead">
        <p className="sysline">DIRECTORY ACCESS / PERSONNEL / DOSSIERS</p>
        <h1 className="h1 terminalTitle">PERSONNAGES</h1>
        <p className="sub">PROFILES / FACTIONS / CLASSIFIED ENTRIES</p>
      </header>

      <section className="terminalPanel">
        <div className="terminalPanel__head">
          <span className="terminalPanel__title">PERSONNEL INDEX</span>
          <span className="terminalPanel__meta">
            {loading ? "LOADING..." : `${characters.length} DOSSIERS`}
          </span>
        </div>

        {loading ? (
          <p className="terminalText">LOADING PERSONNEL FILES...</p>
        ) : (
          <div className="terminalList">
            {characters.map((character) => (
              <article key={character.id} className="terminalRow">
                <div className="terminalRow__main">
                  <div className="terminalRow__label">{character.faction}</div>
                  <h2 className="terminalRow__title">{character.name}</h2>
                  <p className="terminalRow__text">{character.summary}</p>
                </div>

                <div className="terminalRow__side">
                  <span className="terminalBadge">{character.clearance}</span>
                  <span className="terminalCommand">&gt; OPEN DOSSIER</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}