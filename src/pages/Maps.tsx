import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { mapsData } from "../lib/maps";
import { itemsData } from "../lib/items";
import type { MapEntry, MapPointKind } from "../lib/maps/types";

type ViewMode = "index" | "detail";

const pointKindOptions: { value: MapPointKind; label: string }[] = [
  { value: "area", label: "Area" },
  { value: "dcon", label: "Dcon" },
  { value: "exfil", label: "Crew Exfil" },
  { value: "guarded-exfil", label: "Guarded Exfil" },
  { value: "locked-room", label: "Locked Room" },
  { value: "spawn", label: "Spawn Point" },
  { value: "activity", label: "Activity" },
  { value: "contract", label: "Contract" },
  { value: "container", label: "Container" },
  { value: "loose-loot", label: "Loose Loot" },
  { value: "health", label: "Health" },
  { value: "supply", label: "Supply Drop" },
  { value: "key", label: "Key" },
  { value: "treasure", label: "Treasure" },
  { value: "lockbox", label: "Lockbox" },
  { value: "vault", label: "Vault" },
  { value: "priority", label: "Priority" },
  { value: "objective", label: "Objective" },
  { value: "nice-spot", label: "Nice Spot" },
];

const TICKER_TEXT =
  "DATA DECRYPTED :: ACCESSING DATA // DATA DECRYPTED :: ACCESSING DATA // DATA DECRYPTED :: ACCESSING DATA //";

const MARQUEE_SPEED = 80;

function MapsTicker() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const measureRef = useRef<HTMLSpanElement | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const measure = measureRef.current;
    if (!root || !measure) return;

    const updateMetrics = () => {
      const width = Math.ceil(measure.getBoundingClientRect().width);
      if (!width) return;

      root.style.setProperty("--maps-ticker-distance", `${width}px`);
      root.style.setProperty("--maps-ticker-duration", `${width / MARQUEE_SPEED}s`);
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
    <div className="mapsSourceTicker" ref={rootRef} aria-hidden="true">
      <div className="mapsSourceTicker__viewport">
        <div className="mapsSourceTicker__rail">
          <span className="mapsSourceTicker__lead" />
          <div className="mapsSourceTicker__inner">
            <span className="mapsSourceTicker__copy" ref={measureRef}>
              {TICKER_TEXT}
            </span>
            <span className="mapsSourceTicker__gap" />
            <span className="mapsSourceTicker__copy">{TICKER_TEXT}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function getKindsForMap(map: MapEntry | null): MapPointKind[] {
  if (!map) return ["area"];
  const kinds = [...new Set(map.points.map((point) => point.kind))] as MapPointKind[];
  return kinds.length > 0 ? kinds : ["area"];
}

function getAreaLabelStyle(scale: number) {
  const safeScale = Math.max(0.75, Math.min(scale || 1, 3.2));
  const compensation = Math.max(
    0.72,
    Math.min(1.08, 1 / Math.pow(safeScale, 0.32))
  );

  return {
    transform: `scale(${compensation})`,
    transformOrigin: "center center" as const,
  };
}

export default function Maps() {
  const initialMapScale = 0.72;
  const exfilIconSrc = "/maps/icons/crew-exfil.png";

  const [viewMode, setViewMode] = useState<ViewMode>("index");
  const [selectedMapId, setSelectedMapId] = useState(mapsData[0]?.id ?? "");
  const [selectedPointId, setSelectedPointId] = useState(
    mapsData[0]?.points[0]?.id ?? ""
  );
  const [selectedKind, setSelectedKind] = useState<MapPointKind>(
    mapsData[0]?.points[0]?.kind ?? "area"
  );

  const [isBootingMap, setIsBootingMap] = useState(false);
  const [showBootOverlay, setShowBootOverlay] = useState(false);
  const [bootOuterVisible, setBootOuterVisible] = useState(true);
  const [bootInnerVisible, setBootInnerVisible] = useState(false);
  const [bootReady, setBootReady] = useState(false);

  const [fullscreenPoiImage, setFullscreenPoiImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const viewportRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const activeMap = useMemo(
    () => mapsData.find((map) => map.id === selectedMapId) ?? mapsData[0] ?? null,
    [selectedMapId]
  );

  const [visibleKinds, setVisibleKinds] = useState<MapPointKind[]>(() =>
    getKindsForMap(activeMap)
  );
  const [hiddenPointIds, setHiddenPointIds] = useState<string[]>([]);
  const [zoomScale, setZoomScale] = useState(initialMapScale);

  const [showMarkers, setShowMarkers] = useState(true);
  const [showLabels, setShowLabels] = useState(true);

  const [previewBroken, setPreviewBroken] = useState<Record<string, boolean>>({});
  const [mapBroken, setMapBroken] = useState(false);
  const [focusImageBroken, setFocusImageBroken] = useState(false);

  const availableKinds = useMemo(() => {
    if (!activeMap) return [];
    const kinds = new Set(activeMap.points.map((point) => point.kind));
    return pointKindOptions.filter((option) => kinds.has(option.value));
  }, [activeMap]);

  const visiblePoints = useMemo(() => {
    if (!activeMap) return [];
    return activeMap.points.filter(
      (point) =>
        visibleKinds.includes(point.kind) && !hiddenPointIds.includes(point.id)
    );
  }, [activeMap, visibleKinds, hiddenPointIds]);

  const activePoint = useMemo(() => {
    if (!activeMap) return null;
    return activeMap.points.find((point) => point.id === selectedPointId) ?? null;
  }, [activeMap, selectedPointId]);

  const filteredPoints = useMemo(() => {
    if (!activeMap) return [];
    return activeMap.points.filter((point) => point.kind === selectedKind);
  }, [activeMap, selectedKind]);

  const activePointLoots = useMemo(() => {
    if (!activePoint?.notableLoots?.length) return [];
    return activePoint.notableLoots
      .map((lootId) => itemsData.find((item) => item.id === lootId))
      .filter((item): item is NonNullable<typeof item> => Boolean(item));
  }, [activePoint]);

  const isDetailOpen = viewMode === "detail" && !!activeMap;

  useEffect(() => {
    if (!activeMap) return;

    const nextKinds = getKindsForMap(activeMap);
    const firstPoint = activeMap.points[0] ?? null;

    setVisibleKinds(nextKinds);
    setHiddenPointIds([]);
    setZoomScale(initialMapScale);
    setShowMarkers(true);
    setShowLabels(true);
    setMapBroken(false);
    setFocusImageBroken(false);

    if (firstPoint) {
      setSelectedPointId(firstPoint.id);
      setSelectedKind(firstPoint.kind);
    } else {
      setSelectedPointId("");
      setSelectedKind("area");
    }
  }, [activeMap?.id]);

  useEffect(() => {
    if (!isBootingMap && showBootOverlay) {
      const timeout = window.setTimeout(() => {
        setShowBootOverlay(false);
      }, 180);

      return () => window.clearTimeout(timeout);
    }
  }, [isBootingMap, showBootOverlay]);

  useEffect(() => {
    if (!isDetailOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.classList.add("maps-modal-open");

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (fullscreenPoiImage) {
          setFullscreenPoiImage(null);
        } else {
          backToIndex();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.classList.remove("maps-modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isDetailOpen, fullscreenPoiImage]);

  const centerMap = (
    setTransform: (x: number, y: number, scale: number, animationTime?: number) => void
  ) => {
    const viewport = viewportRef.current;
    const image = imageRef.current;

    if (!viewport || !image) {
      setTransform(0, 0, initialMapScale, 0);
      setZoomScale(initialMapScale);
      return;
    }

    const viewportWidth = viewport.clientWidth;
    const viewportHeight = viewport.clientHeight;
    const imageWidth = image.clientWidth * initialMapScale;
    const imageHeight = image.clientHeight * initialMapScale;

    setTransform(
      (viewportWidth - imageWidth) / 2,
      (viewportHeight - imageHeight) / 2,
      initialMapScale,
      0
    );
    setZoomScale(initialMapScale);
  };

  const openMapDetail = async (mapId: string) => {
    const nextMap = mapsData.find((map) => map.id === mapId) ?? null;
    const firstPoint = nextMap?.points[0] ?? null;
    const nextKinds = getKindsForMap(nextMap);

    setSelectedMapId(mapId);
    setSelectedPointId(firstPoint?.id ?? "");
    setSelectedKind(firstPoint?.kind ?? nextKinds[0] ?? "area");
    setVisibleKinds(nextKinds);
    setHiddenPointIds([]);
    setZoomScale(initialMapScale);
    setShowMarkers(true);
    setShowLabels(true);
    setMapBroken(false);
    setFocusImageBroken(false);
    setFullscreenPoiImage(null);

    setViewMode("detail");
    setShowBootOverlay(true);
    setIsBootingMap(true);
    setBootOuterVisible(true);
    setBootInnerVisible(false);
    setBootReady(false);

    const wait = (ms: number) =>
      new Promise((resolve) => window.setTimeout(resolve, ms));

    if (document.documentElement.classList.contains("reduce-effects")) {
      setBootInnerVisible(true);
      await wait(350);
      setBootReady(true);
      setIsBootingMap(false);
      return;
    }

    await wait(200);
    setBootInnerVisible(true);
    await wait(50);
    setBootOuterVisible(false);
    await wait(50);
    setBootOuterVisible(true);
    await wait(100);
    setBootOuterVisible(false);
    setBootInnerVisible(false);
    await wait(100);
    setBootOuterVisible(true);
    await wait(50);
    setBootInnerVisible(true);
    await wait(100);
    setBootInnerVisible(false);
    await wait(100);
    setBootInnerVisible(true);
    setBootReady(true);
    await wait(80);
    setIsBootingMap(false);
  };

  const backToIndex = () => {
    setShowBootOverlay(false);
    setIsBootingMap(false);
    setBootReady(false);
    setFullscreenPoiImage(null);
    setViewMode("index");
  };

  const handleSelectPoint = (pointId: string) => {
    const point = activeMap?.points.find((entry) => entry.id === pointId);
    setSelectedPointId(pointId);

    if (!point) return;

    setSelectedKind(point.kind);
    setFocusImageBroken(false);
    setFullscreenPoiImage(null);

    if (!visibleKinds.includes(point.kind)) {
      setVisibleKinds((prev) => [...prev, point.kind]);
    }

    if (hiddenPointIds.includes(point.id)) {
      setHiddenPointIds((prev) => prev.filter((id) => id !== point.id));
    }
  };

  const handleSelectKind = (kind: MapPointKind) => {
    setSelectedKind(kind);

    if (activeMap) {
      const idsOfKind = activeMap.points
        .filter((point) => point.kind === kind)
        .map((point) => point.id);

      setHiddenPointIds((prev) => prev.filter((id) => !idsOfKind.includes(id)));
    }

    const firstPointOfKind = activeMap?.points.find((point) => point.kind === kind);
    if (firstPointOfKind) {
      setSelectedPointId(firstPointOfKind.id);
      setFocusImageBroken(false);
      setFullscreenPoiImage(null);
    }
  };

  const handleToggleKindVisibility = (kind: MapPointKind) => {
    setVisibleKinds((prev) =>
      prev.includes(kind)
        ? prev.filter((entry) => entry !== kind)
        : [...prev, kind]
    );
  };

  const handleTogglePointVisibility = (pointId: string) => {
    setHiddenPointIds((prev) =>
      prev.includes(pointId)
        ? prev.filter((id) => id !== pointId)
        : [...prev, pointId]
    );
  };

  if (!activeMap) {
    return (
      <main className="container">
        <section className="terminalPanel">
          <div className="terminalPanel__head">
            <div className="terminalPanel__title">Maps</div>
            <div className="terminalPanel__meta">No data</div>
          </div>
          <p className="terminalRow__text">Aucune map disponible.</p>
        </section>
      </main>
    );
  }

  return (
    <main className="container mapsPage mapsPage--split">
      <header className="mapsLandingHero">
        <div className="mapsLandingHero__visual" aria-hidden="true" />
        <div className="mapsLandingHero__content">
          <p className="mapsLandingHero__kicker">Tau Ceti IV / Tactical Archive</p>
          <h1 className="mapsLandingHero__title">MAPS</h1>
          <p className="mapsLandingHero__text">
            Explore every operational zone before deployment. Select a map to
            review key areas, activity points, spawn routes, loot locations,
            and extraction paths.
          </p>
        </div>
      </header>

      <section className="mapsLandingGrid" aria-label="Maps selection">
        {mapsData.map((map) => {
          const isBroken = previewBroken[map.id] === true;

          return (
            <article key={map.id} className="mapsLandingCard">
              <div className="mapsLandingCard__tab">MAP</div>

              <div className="mapsLandingCard__head">
                <h2 className="mapsLandingCard__title">{map.name}</h2>
                <span className="mapsLandingCard__code">{map.code}</span>
              </div>

              <div className="mapsLandingCard__media">
                <video
                  className="mapsLandingCard__video"
                  src={map.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <div className="mapsLandingCard__mediaOverlay" />
              </div>

              <div className="mapsLandingCard__body">
                <div className="mapsLandingCard__thumb">
                  {!isBroken ? (
                    <img
                      src={map.previewImage}
                      alt={map.name}
                      className="mapsLandingCard__thumbImg"
                      onError={() =>
                        setPreviewBroken((prev) => ({ ...prev, [map.id]: true }))
                      }
                    />
                  ) : (
                    <div className="mapsAssetFallback">Preview unavailable</div>
                  )}
                </div>

                <div className="mapsLandingCard__copy">
                  <p className="mapsLandingCard__description">{map.description}</p>
                  <p className="mapsLandingCard__meta">
                    Threat: {map.threat} · {map.location}
                  </p>
                </div>
              </div>

              <div className="mapsLandingCard__footer">
                <button
                  type="button"
                  className="mapsLandingCard__action"
                  data-cursor-label="OPEN MAP"
                  onClick={() => openMapDetail(map.id)}
                >
                  Open Map
                </button>
              </div>
            </article>
          );
        })}
      </section>

      {isDetailOpen ? (
        <div
          className={`mapsModal${isBootingMap ? " is-booting" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label={`Map details for ${activeMap.name}`}
        >
          <div className="mapsModal__backdrop" onClick={backToIndex} />

          <div className="mapsModal__dialog">
            <MapsTicker />

            {showBootOverlay ? (
              <div
                className={`mapsBootOverlay${
                  isBootingMap ? " is-visible" : " is-leaving"
                }`}
              >
                <div className="mapsBootOverlay__stack">
                  <div
                    className={`mapsBootOverlay__outer${
                      bootOuterVisible ? " is-on" : " is-off"
                    }`}
                  >
                    <div className="mapsBootOverlay__outerGrid" />
                  </div>

                  <div
                    className={`mapsBootOverlay__inner${
                      bootInnerVisible ? " is-on" : " is-off"
                    }`}
                  >
                    <div className="mapsBootOverlay__innerFrame">
                      <div className="mapsBootOverlay__terminalLine">
                        ACCESSING DATA
                      </div>
                      <div className="mapsBootOverlay__terminalMeta">
                        MAP ARCHIVE // TCIV
                      </div>
                    </div>
                    <div className="mapsBootOverlay__scanline" />
                  </div>
                </div>

                {!isBootingMap && bootReady ? (
                  <button
                    type="button"
                    className="mapsBootOverlay__dismiss"
                    data-cursor-label="DISMISS"
                    onClick={() => setShowBootOverlay(false)}
                  >
                    DISMISS
                  </button>
                ) : null}
              </div>
            ) : null}

            <section className="mapsDetailLayout" aria-label="Selected map details">
              <aside className="mapsDetailSidebar">
                <button
                  type="button"
                  className="mapsDetailBackButton"
                  data-cursor-label="RETURN"
                  onClick={backToIndex}
                >
                  ← Back to Maps
                </button>

                <section className="mapsDetailPanel mapsDetailPanel--overview">
                  <div className="mapsDetailPanel__label">Map Overview</div>
                  <h2 className="mapsDetailSidebar__title">{activeMap.name}</h2>
                  <div className="mapsDetailSidebar__threat">
                    Threat: {activeMap.threat}
                  </div>

                  <div className="mapsDetailSidebar__thumb">
                    {previewBroken[activeMap.id] ? (
                      <div className="mapsAssetFallback">Preview unavailable</div>
                    ) : (
                      <img
                        src={activeMap.previewImage}
                        alt={activeMap.name}
                        className="mapsDetailSidebar__thumbImg"
                        onError={() =>
                          setPreviewBroken((prev) => ({
                            ...prev,
                            [activeMap.id]: true,
                          }))
                        }
                      />
                    )}
                  </div>

                  <p className="mapsDetailSidebar__description">
                    {activeMap.description}
                  </p>
                </section>

                <section className="mapsDetailPanel">
                  <div className="mapsDetailPanel__label">Activity Filters</div>

                  <div className="mapsDetailFilters">
                    {availableKinds.map((kind) => {
                      const isSelected = selectedKind === kind.value;
                      const isVisible = visibleKinds.includes(kind.value);
                      const count = activeMap.points.filter(
                        (point) => point.kind === kind.value
                      ).length;

                      return (
                        <div key={kind.value} className="mapsDetailFilters__row">
                          <button
                            type="button"
                            className={`mapsDetailFilters__main${
                              isSelected ? " is-selected" : ""
                            }`}
                            data-cursor-label={kind.label}
                            onClick={() => handleSelectKind(kind.value)}
                          >
                            <span>{kind.label}</span>
                            <span className="mapsDetailFilters__count">{count}</span>
                          </button>

                          <button
                            type="button"
                            className={`mapsDetailFilters__toggle${
                              isVisible ? " is-visible" : " is-hidden"
                            }`}
                            data-cursor-label={isVisible ? "HIDE" : "SHOW"}
                            onClick={(event) => {
                              event.stopPropagation();
                              handleToggleKindVisibility(kind.value);
                            }}
                          >
                            {isVisible ? "ON" : "OFF"}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </section>

                <section className="mapsDetailPanel">
                  <div className="mapsDetailPanel__label">Point Display</div>

                  <div className="mapsDetailDisplay">
                    <button
                      type="button"
                      className={`mapsDetailDisplay__button${
                        showMarkers ? " is-active" : ""
                      }`}
                      data-cursor-label="MARKERS"
                      onClick={() => setShowMarkers((prev) => !prev)}
                    >
                      Markers
                    </button>

                    <button
                      type="button"
                      className={`mapsDetailDisplay__button${
                        showLabels ? " is-active" : ""
                      }`}
                      data-cursor-label="LABELS"
                      onClick={() => setShowLabels((prev) => !prev)}
                    >
                      Labels
                    </button>
                  </div>
                </section>
              </aside>

              <div className="mapsDetailMapStage">
                {!mapBroken ? (
                  <TransformWrapper
                    minScale={0.58}
                    initialScale={initialMapScale}
                    maxScale={3.2}
                    centerOnInit={false}
                    centerZoomedOut={false}
                    limitToBounds={false}
                    disablePadding={true}
                    smooth={true}
                    wheel={{ step: 0.08 }}
                    doubleClick={{ disabled: true }}
                    pinch={{ step: 3 }}
                    panning={{
                      velocityDisabled: true,
                      lockAxisX: false,
                      lockAxisY: false,
                    }}
                    alignmentAnimation={{ disabled: true }}
                    onInit={(utils) => {
                      requestAnimationFrame(() => {
                        centerMap(utils.setTransform);
                      });
                    }}
                    onTransformed={(_, state) => {
                      setZoomScale(state.scale);
                    }}
                  >
                    {({ zoomIn, zoomOut, setTransform }) => (
                      <>
                        <div className="mapsDetailMapStage__controls">
                          <button
                            type="button"
                            data-cursor-label="ZOOM IN"
                            onClick={() => zoomIn()}
                          >
                            +
                          </button>
                          <button
                            type="button"
                            data-cursor-label="ZOOM OUT"
                            onClick={() => zoomOut()}
                          >
                            −
                          </button>
                          <button
                            type="button"
                            data-cursor-label="RESET"
                            onClick={() => centerMap(setTransform)}
                          >
                            Reset
                          </button>
                        </div>

                        <div className="mapsDetailMapStage__viewport" ref={viewportRef}>
                          <TransformComponent
                            wrapperClass="mapsDetailMapStage__wrapper"
                            contentClass="mapsDetailMapStage__content"
                          >
                            <div className="mapsDetailMapStage__inner">
                              <img
                                ref={imageRef}
                                src={activeMap.mapImage}
                                alt={`Carte de ${activeMap.name}`}
                                className="mapsDetailMapStage__image"
                                draggable={false}
                                onError={() => setMapBroken(true)}
                              />

                              {visiblePoints.map((point) => {
                                const isActive = activePoint?.id === point.id;
                                const isArea = point.kind === "area";
                                const isExfil =
                                  point.kind === "exfil" ||
                                  point.kind === "guarded-exfil";

                                const shouldShowMarker = isArea ? false : showMarkers;
                                const shouldShowLabel = isArea
                                  ? showLabels
                                  : isActive || showLabels;

                                return (
                                  <button
                                    key={point.id}
                                    type="button"
                                    className={`mapsPoint mapsPoint--${point.kind}${
                                      isActive ? " is-active" : ""
                                    }${isArea ? " is-area" : ""}${
                                      isExfil ? " is-exfil" : ""
                                    }`}
                                    data-cursor-label={point.label}
                                    style={{
                                      left: `${point.x}%`,
                                      top: `${point.y}%`,
                                    }}
                                    onClick={() => handleSelectPoint(point.id)}
                                    title={point.label}
                                    aria-label={point.label}
                                  >
                                    {isArea ? (
                                      shouldShowLabel ? (
                                        <span
                                          className="mapsPoint__label mapsPoint__label--area"
                                          style={getAreaLabelStyle(zoomScale)}
                                        >
                                          {point.label}
                                        </span>
                                      ) : null
                                    ) : isExfil ? (
                                      shouldShowMarker ? (
                                        <span
                                          className="mapsPoint__exfilIcon"
                                          aria-hidden="true"
                                        >
                                          <img
                                            src={exfilIconSrc}
                                            alt=""
                                            className="mapsPoint__exfilImg"
                                          />
                                        </span>
                                      ) : null
                                    ) : (
                                      <>
                                        {shouldShowMarker ? (
                                          <span className="mapsPoint__dot" />
                                        ) : null}

                                        {shouldShowLabel ? (
                                          <span className="mapsPoint__label">
                                            {point.label}
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          </TransformComponent>
                        </div>
                      </>
                    )}
                  </TransformWrapper>
                ) : (
                  <div className="mapsAssetFallback mapsAssetFallback--large">
                    Map image unavailable
                  </div>
                )}
              </div>

              <aside className="mapsDetailPoiPanel">
                <section className="mapsDetailPanel mapsDetailPanel--poi">
                  <div className="mapsDetailPoiPanel__head">
                    <div className="mapsDetailPanel__label">Selected POI</div>
                    {activePoint ? (
                      <span className="mapsDetailPoiPanel__type">
                        {pointKindOptions.find(
                          (item) => item.value === activePoint.kind
                        )?.label ?? activePoint.kind}
                      </span>
                    ) : null}
                  </div>

                  {activePoint ? (
                    <div className="mapsDetailPoiPanel__content">
                      {activePoint.image ? (
                        <div className="mapsDetailPoiPanel__media">
                          {!focusImageBroken ? (
                            <button
                              type="button"
                              className="mapsDetailPoiPanel__mediaButton"
                              data-cursor-label="FULLSCREEN"
                              onClick={() =>
                                setFullscreenPoiImage({
                                  src: activePoint.image ?? "",
                                  alt: activePoint.label,
                                })
                              }
                            >
                              <img
                                src={activePoint.image}
                                alt={activePoint.label}
                                className="mapsDetailPoiPanel__img"
                                onError={() => setFocusImageBroken(true)}
                              />
                            </button>
                          ) : (
                            <div className="mapsAssetFallback">
                              Zone image unavailable
                            </div>
                          )}
                        </div>
                      ) : null}

                      <h3 className="mapsDetailPoiPanel__title">
                        {activePoint.label}
                      </h3>

                      {activePoint.subtitle ? (
                        <p className="mapsDetailPoiPanel__subtitle">
                          {activePoint.subtitle}
                        </p>
                      ) : null}

                      <p className="mapsDetailPoiPanel__text">
                        {activePoint.description}
                      </p>

                      {activePointLoots.length > 0 ? (
                        <div className="mapsDetailPoiPanel__loot">
                          <div className="mapsDetailPoiPanel__lootLabel">
                            Notable Loot
                          </div>
                          <div className="mapsDetailPoiPanel__lootList">
                            {activePointLoots.map((item) => (
                              <span
                                key={item.id}
                                className={`mapsDetailPoiPanel__lootItem is-${item.rarity}${
                                  item.isPriority ? " is-priority" : ""
                                }`}
                                title={item.description ?? item.name}
                              >
                                {item.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <div className="mapsDetailPoiPanel__empty">
                      No point selected.
                    </div>
                  )}
                </section>

                <section className="mapsDetailPanel mapsDetailPanel--entries">
                  <div className="mapsDetailPanel__label">Entries</div>

                  <div className="mapsDetailEntries">
                    {filteredPoints.length > 0 ? (
                      filteredPoints.map((point, index) => {
                        const isActive = activePoint?.id === point.id;
                        const isVisible = !hiddenPointIds.includes(point.id);

                        return (
                          <div key={point.id} className="mapsDetailEntries__row">
                            <button
                              type="button"
                              className={`mapsDetailEntries__item${
                                isActive ? " is-active" : ""
                              }`}
                              data-cursor-label={point.label}
                              onClick={() => handleSelectPoint(point.id)}
                            >
                              <span className="mapsDetailEntries__index">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              <span className="mapsDetailEntries__label">
                                {point.label}
                              </span>
                            </button>

                            <button
                              type="button"
                              className={`mapsDetailEntries__toggle${
                                isVisible ? " is-visible" : " is-hidden"
                              }`}
                              data-cursor-label={
                                isVisible ? "HIDE POINT" : "SHOW POINT"
                              }
                              onClick={(event) => {
                                event.stopPropagation();
                                handleTogglePointVisibility(point.id);
                              }}
                            >
                              {isVisible ? "ON" : "OFF"}
                            </button>
                          </div>
                        );
                      })
                    ) : (
                      <div className="mapsDetailPoiPanel__empty">
                        No entries available for this filter.
                      </div>
                    )}
                  </div>
                </section>
              </aside>
            </section>
          </div>
        </div>
      ) : null}

      {fullscreenPoiImage ? (
        <div
          className="mapsPoiFullscreen"
          role="dialog"
          aria-modal="true"
          aria-label="Fullscreen POI image"
          onClick={() => setFullscreenPoiImage(null)}
        >
          <button
            type="button"
            className="mapsPoiFullscreen__close"
            data-cursor-label="CLOSE"
            onClick={() => setFullscreenPoiImage(null)}
          >
            CLOSE
          </button>

          <img
            src={fullscreenPoiImage.src}
            alt={fullscreenPoiImage.alt}
            className="mapsPoiFullscreen__img"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </main>
  );
}