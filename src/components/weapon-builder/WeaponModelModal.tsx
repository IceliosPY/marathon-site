import { useEffect } from "react";
import type { ItemEntry } from "../../lib/items";
import WeaponModelViewer from "./WeaponModelViewer";

type WeaponModelModalProps = {
  weapon: ItemEntry;
  onClose: () => void;
};

export default function WeaponModelModal({
  weapon,
  onClose,
}: WeaponModelModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="weaponBuilder__modalBackdrop" onClick={onClose}>
      <div
        className="weaponBuilder__modelModal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="weaponBuilder__modelModalClose"
          onClick={onClose}
          aria-label="Close 3D viewer"
        >
          ×
        </button>

        <WeaponModelViewer weapon={weapon} fullscreen />
      </div>
    </div>
  );
}