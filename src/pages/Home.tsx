import { useEffect, useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const target = targetRef.current;

    if (!hero || !target) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduce) return;

    let raf = 0;
    let mx = 0.5;
    let my = 0.5;
    let cx = 0.5;
    let cy = 0.5;

    const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

    const tick = () => {
      raf = 0;

      cx += (mx - cx) * 0.08;
      cy += (my - cy) * 0.08;

      const tx = (cx - 0.5) * 20;
      const ty = (cy - 0.5) * 14;
      target.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;

      if (Math.abs(mx - cx) > 0.0005 || Math.abs(my - cy) > 0.0005) {
        raf = window.requestAnimationFrame(tick);
      }
    };

    const onMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect();
      mx = clamp01((e.clientX - r.left) / r.width);
      my = clamp01((e.clientY - r.top) / r.height);

      if (!raf) {
        raf = window.requestAnimationFrame(tick);
      }
    };

    const onLeave = () => {
      mx = 0.5;
      my = 0.5;

      if (!raf) {
        raf = window.requestAnimationFrame(tick);
      }
    };

    hero.addEventListener("mousemove", onMove, { passive: true });
    hero.addEventListener("mouseleave", onLeave, { passive: true });

    tick();

    return () => {
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", onLeave);

      if (raf) {
        window.cancelAnimationFrame(raf);
      }
    };
  }, []);

  return (
    <main className="container">
      <header className="pageHead">
        <div className="homeTerminalTitleBlock">
          <h1 className="h1 terminalTitle">MARATHON ARCHIVE</h1>
          <p className="sysline">OPENING CONNECTION TO U.E.S.C. MARATHON NODE</p>
        </div>
      </header>

      <section
        ref={heroRef}
        className="heroTerminal"
        aria-label="Marathon archive terminal"
      >
        <div className="heroGrid" aria-hidden="true" />
        <div ref={targetRef} className="heroTarget" aria-hidden="true" />
        <div className="heroDots" aria-hidden="true" />

        <div className="heroInner">
          <div className="heroTopline">
            <span className="heroNodeMeta">
              RNNRQTERM.CDX.ACCESS / V.1.001.07.TCIV
            </span>
          </div>

          <div className="heroBody heroBody--single">
            <div className="heroMainPanel">
              <div className="heroSectionBlock">
                <div className="heroSectionLabel">OVERVIEW</div>
                <p className="heroText">
                  Base d’archives fan-made consacrée à Marathon. Cette interface
                  centralise des entrées sur le lore, les personnages, les
                  factions, ainsi que des guides de lecture et de navigation.
                </p>
              </div>

              <div className="heroSectionBlock">
                <div className="heroSectionLabel">CURRENT TERMINAL STATUS</div>

                <div className="statusGrid">
                  <div className="statusCard">
                    <span className="statusCard__label">NODE</span>
                    <span className="statusCard__value">TCIV / STABLE</span>
                  </div>

                  <div className="statusCard">
                    <span className="statusCard__label">ARCHIVE</span>
                    <span className="statusCard__value">PARTIAL INDEX ONLINE</span>
                  </div>

                  <div className="statusCard">
                    <span className="statusCard__label">ACCESS</span>
                    <span className="statusCard__value">READ / INTERNAL</span>
                  </div>

                  <div className="statusCard">
                    <span className="statusCard__label">FOCUS</span>
                    <span className="statusCard__value">LORE / GUIDES / DOSSIERS</span>
                  </div>
                </div>
              </div>
            </div>

            <aside className="heroBody__right" aria-label="System preview">
              <div className="terminalPreview">
                <div className="terminalPreview__head">
                  <span>CRYOARCHIVE ACCESS</span>
                  <span>///REDACTED///</span>
                </div>

                <div className="terminalPreview__body">
                  <div className="terminalPreview__block">
                    <div className="terminalPreview__title">NODE STATUS</div>
                    <div className="terminalPreview__text">
                      STABLE / PARTIAL VISUAL CORRUPTION
                    </div>
                  </div>

                  <div className="terminalPreview__block">
                    <div className="terminalPreview__title">PRIMARY INDEX</div>
                    <div className="terminalPreview__text">
                      RUNNERS / UESC / TAU CETI IV / MARATHON
                    </div>
                  </div>

                  <div className="terminalPreview__block">
                    <div className="terminalPreview__title">ACCESS KEY</div>
                    <div className="terminalPreview__text">
                      21-g &lt;34.3.2.401&gt;
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <div className="heroFooter">
            <span className="hudMark" aria-hidden="true" />
            <span className="hudMeta">SYNC OK / ACCESS STABLE / NODE 2893</span>
          </div>
        </div>
      </section>
    </main>
  );
}