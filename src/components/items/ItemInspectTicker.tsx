import { useLayoutEffect, useRef } from "react";

const ITEM_TICKER_TEXT =
  "DATA DECRYPTED :: ACCESSING DATA // DATA DECRYPTED :: ACCESSING DATA // DATA DECRYPTED :: ACCESSING DATA //";

const ITEM_MARQUEE_SPEED = 80;

export default function ItemInspectTicker() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const measureRef = useRef<HTMLSpanElement | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const measure = measureRef.current;

    if (!root || !measure) return;

    const updateMetrics = () => {
      const width = Math.ceil(
        measure.getBoundingClientRect().width
      );

      if (!width) return;

      root.style.setProperty(
        "--item-ticker-distance",
        `${width}px`
      );

      root.style.setProperty(
        "--item-ticker-duration",
        `${width / ITEM_MARQUEE_SPEED}s`
      );
    };

    updateMetrics();

    const resizeObserver = new ResizeObserver(updateMetrics);

    resizeObserver.observe(measure);
    window.addEventListener("resize", updateMetrics);

    document.fonts?.ready
      ?.then(updateMetrics)
      .catch(() => {});

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateMetrics);
    };
  }, []);

  return (
    <div
      className="itemInspectTicker"
      ref={rootRef}
      aria-hidden="true"
    >
      <div className="itemInspectTicker__viewport">
        <div className="itemInspectTicker__rail">
          <span className="itemInspectTicker__lead" />

          <div className="itemInspectTicker__inner">
            <span
              className="itemInspectTicker__copy"
              ref={measureRef}
            >
              {ITEM_TICKER_TEXT}
            </span>

            <span className="itemInspectTicker__gap" />

            <span className="itemInspectTicker__copy">
              {ITEM_TICKER_TEXT}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}