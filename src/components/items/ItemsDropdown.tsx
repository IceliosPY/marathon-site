import { useEffect, useRef, useState } from "react";

export type DropdownOption<T extends string> = {
  value: T;
  label: string;
};

type ItemsDropdownProps<T extends string> = {
  label: string;
  value: T;
  options: DropdownOption<T>[];
  onChange: (value: T) => void;
};

export default function ItemsDropdown<T extends string>({
  label,
  value,
  options,
  onChange,
}: ItemsDropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const selectedOption = options.find(
    (option) => option.value === value
  );

  useEffect(() => {
    if (!isOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      className="itemsToolbar__field"
      ref={rootRef}
    >
      <span className="itemsToolbar__label">
        {label}
      </span>

      <div
        className={`itemsDropdown${
          isOpen ? " is-open" : ""
        }`}
      >
        <button
          type="button"
          className="itemsDropdown__trigger"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span>
            {selectedOption?.label ?? value}
          </span>

          <span
            className="itemsDropdown__chevron"
            aria-hidden="true"
          />
        </button>

        {isOpen ? (
          <div
            className="itemsDropdown__menu"
            role="listbox"
          >
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                className={
                  option.value === value
                    ? "is-active"
                    : ""
                }
                role="option"
                aria-selected={
                  option.value === value
                }
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}