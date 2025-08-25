// GsapParallax.jsx
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GsapParallax({
  src,
  height = 600,
  fromY = -80, // desplazamiento inicial en Y (px)
  toY = 80, // desplazamiento final en Y (px)
  className = "",
  alt = "",
}) {
  const imgRef = useRef(null);
  const wrapRef = useRef(null);

  useLayoutEffect(() => {
    // Respeta accesibilidad: desactiva si el usuario prefiere reducir movimiento
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { y: fromY },
        {
          y: toY,
          ease: "none",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, wrapRef);

    return () => ctx.revert();
  }, [fromY, toY]);

  return (
    <div ref={wrapRef} className={`relative overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-[120%] object-cover will-change-transform"
      />
    </div>
  );
}
