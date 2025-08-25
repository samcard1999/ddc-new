import React, { useRef, useState } from "react";
import logo_circle_white from "/assets/svg/logo_circle_white.svg";
import logo_letters from "/assets/svg/logo_letters.svg";
import BurgerButton from "../Menu/BurgerButton";
import useHeaderHideOnScroll from "../Hooks/useHeaderHideOnScroll";
import MenuOverlay from "./MenuOverlay";

const Header = () => {
  const headerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useHeaderHideOnScroll(headerRef, {
    threshold: 10, // puedes ajustar esto
    duration: 0.8,
  });
  return (
    <>
      <header
        ref={headerRef}
        className="mix-blend-difference flex fixed top-o w-full h-auto z-[100] justify-between items-center py-[2vh] lg:py-[4vh] px-4 lg:px-12"
      >
        <h1 className="underline-center text-white text-lg lg:text-xl font-bold cursor-pointer">
          EN
        </h1>
        <BurgerButton
          isOpen={isMenuOpen}
          onToggle={setIsMenuOpen} // ← aquí conectamos
          className="z-50"
        />

        <img
          src={logo_circle_white}
          alt="logo-circle"
          className="h-12 lg:h-24 z-50 absolute left-1/2 translate-x-[-50%] top-[2vh]"
        ></img>
      </header>
      {/* Menú animado */}
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
