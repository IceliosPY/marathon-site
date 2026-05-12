import { useMemo, useState } from "react";
import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";
import { mapsData } from "../../../public/maps";

type Props = {
  mapId: string;
};

export default function InteractiveMap({ mapId }: Props) {
  const map = useMemo(
    () => mapsData.find((m) => m.id === mapId) ?? mapsData[0],
    [mapId]
  );

  const [selectedPointId, setSelectedPointId] = useState(
    map?.points[0]?.id ?? ""
  );

  const selectedPoint =
    map?.points.find((p) => p.id === selectedPointId) ??
    map?.points[0] ??
    null;

  if (!map) return null;

  return (
    <div className="interactiveMap">
      <div className="interactiveMap__canvas">
        <TransformWrapper
          minScale={0.8}
          initialScale={1}
          maxScale={5}
          wheel={{ step: 0.12 }}
        >
          <TransformComponent>
            <div className="interactiveMap__stage">
              <img
                src={map.mapImage}
                alt={map.name}
                className="interactiveMap__image"
                draggable={false}
              />

              {map.points.map((point) => {
                const isActive = point.id === selectedPoint?.id;

                return (
                  <button
                    key={point.id}
                    className={`interactiveMap__marker${isActive ? " is-active" : ""}`}
                    style={{
                      left: `${point.x}%`,
                      top: `${point.y}%`,
                    }}
                    onClick={() => setSelectedPointId(point.id)}
                  >
                    <span className="interactiveMap__dot" />
                    <span className="interactiveMap__label">
                      {point.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>

      <aside className="interactiveMap__panel">
        {selectedPoint && (
          <>
            <h3>{selectedPoint.label}</h3>
            <p>{selectedPoint.description}</p>
          </>
        )}
      </aside>
    </div>
  );
}