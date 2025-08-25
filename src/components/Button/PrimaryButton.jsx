import React from "react";

export default function PrimaryButton({
  children,
  onClick,
  className = "",
  color = "dark",
}) {
  return (
    <button
      onClick={onClick}
      className={`${
        color === "gold" ? "primary-gold" : "primary-dark"
      } text-white text-3xl lg:text-3xl font-semibold uppercase lg:p-[1.38vw] p-4 rounded-3xl lg:rounded-[2.5rem] 
                   transition-colors duration-500 ${className}`}
    >
      {children}
    </button>
  );
}
