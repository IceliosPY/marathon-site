type WeaponModalControlsProps = {
    onRotateLeft: () => void;
    onRotateRight: () => void;
    onRotateUp: () => void;
    onRotateDown: () => void;
    onReset: () => void;
  };
  
  export default function WeaponModalControls({
    onRotateLeft,
    onRotateRight,
    onRotateUp,
    onRotateDown,
    onReset,
  }: WeaponModalControlsProps) {
    return (
      <div className="weaponModalControls">
        <div className="weaponModalControls__gauge" />
  
        <button type="button" onClick={onRotateLeft} aria-label="Rotate left">
          ‹
        </button>
  
        <button type="button" onClick={onRotateRight} aria-label="Rotate right">
          ›
        </button>
  
        <button type="button" onClick={onRotateUp} aria-label="Rotate up">
          ˄
        </button>
  
        <button type="button" onClick={onRotateDown} aria-label="Rotate down">
          ˅
        </button>
  
        <button type="button" onClick={onReset} aria-label="Reset rotation">
          ⟳
        </button>
      </div>
    );
  }