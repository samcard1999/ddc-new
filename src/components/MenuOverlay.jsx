import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const MenuOverlay = ({ isOpen, onClose }) => {
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    if (isOpen) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();

        // Animación del fondo
        tl.fromTo(
          menuRef.current,
          { opacity: 0, scale: 1.05 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "power3.out",
          }
        );

        // Animación secuencial de las secciones
        tl.fromTo(
          linksRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.15,
          },
          "-=0.2"
        );
      }, menuRef);

      return () => ctx.revert();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center 
                 bg-dark backdrop-blur-3xl text-white text-center"
    >
      {/* Secciones */}
      <nav className="flex flex-col gap-10 text-5xl md:text-7xl font-bold uppercase tracking-wide">
        {["Home", "Projects", "About Us", "Investment", "Contact"].map(
          (item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              ref={(el) => (linksRef.current[i] = el)}
              className="hover:text-gray-300 transition-colors"
              onClick={onClose}
            >
              {item}
            </a>
          )
        )}
      </nav>

      {/* Redes sociales */}
      <div className="absolute bottom-10 flex flex-wrap gap-10 text-lg md:text-2xl font-medium">
        <a href="#" className="hover:text-gray-300">
          Whatsapp
        </a>
        <a href="#" className="hover:text-gray-300">
          Instagram
        </a>
        <a href="#" className="hover:text-gray-300">
          Youtube
        </a>
      </div>
    </div>
  );
};

export default MenuOverlay;
