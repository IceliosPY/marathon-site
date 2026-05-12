import { useEffect, useState } from "react";

type Guide = {
  id: string;
  title: string;
  category: string;
  status: string;
  summary: string;
};

export default function Guides() {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/guides.json")
      .then((r) => r.json())
      .then((data) => setGuides(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="container">
      <header className="pageHead">
        <p className="sysline">DIRECTORY ACCESS / GUIDES / ARCHIVE READ</p>
        <h1 className="h1 terminalTitle">GUIDES</h1>
        <p className="sub">TACTICAL FILES / FIELD NOTES / OPERATIONS</p>
      </header>

      <section className="terminalPanel">
        <div className="terminalPanel__head">
          <span className="terminalPanel__title">AVAILABLE FILES</span>
          <span className="terminalPanel__meta">
            {loading ? "LOADING..." : `${guides.length} FILES`}
          </span>
        </div>

        {loading ? (
          <p className="terminalText">LOADING GUIDE INDEX...</p>
        ) : (
          <div className="terminalList">
            {guides.map((guide) => (
              <article key={guide.id} className="terminalRow">
                <div className="terminalRow__main">
                  <div className="terminalRow__label">{guide.category}</div>
                  <h2 className="terminalRow__title">{guide.title}</h2>
                  <p className="terminalRow__text">{guide.summary}</p>
                </div>

                <div className="terminalRow__side">
                  <span className="terminalBadge">{guide.status}</span>
                  <span className="terminalCommand">&gt; READ FILE</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}