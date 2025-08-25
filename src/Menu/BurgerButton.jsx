import React, { useState } from "react";

export default function BurgerButton({
  isOpen: controlledOpen,
  onToggle,
  ariaLabel = "Abrir/cerrar menú",
  className = "",
  size = 40, // px
}) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = controlledOpen ?? internalOpen;

  const toggle = () => {
    onToggle?.(!isOpen); // avisamos al padre
    if (controlledOpen === undefined) setInternalOpen(!isOpen); // si es no-controlado
  };

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      aria-expanded={isOpen}
      onClick={toggle}
      style={{ height: size }}
      className={`group relative inline-flex items-center justify-center gap-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${className}`}
    >
      {/* Texto MENU */}
      <span className="hidden lg:flex text-white group-hover:text-gray-400 select-none text-lg lg:text-xl font-bold tracking-wide items-center">
        MENU
      </span>

      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        {/* Top line */}
        <span
          className={[
            "absolute left-1/2 h-[2px] w-7 -translate-x-1/2 rounded-full transition-all duration-200 will-change-transform",
            "bg-white group-hover:bg-gray-400",
            isOpen
              ? "top-1/2 -translate-y-1/2 rotate-45"
              : "top-[35%] rotate-0",
          ].join(" ")}
        />

        {/* Bottom line */}
        <span
          className={[
            "absolute left-1/2 h-[2px] w-7 -translate-x-1/2 rounded-full transition-all duration-200 will-change-transform",
            "bg-white group-hover:bg-gray-400",
            isOpen
              ? "top-1/2 -translate-y-1/2 -rotate-45"
              : "bottom-[35%] rotate-0",
          ].join(" ")}
        />
      </div>

      <span className="sr-only">{isOpen ? "Cerrar menú" : "Abrir menú"}</span>
    </button>
  );
}
