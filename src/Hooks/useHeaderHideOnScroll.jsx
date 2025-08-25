// useHeaderHideOnScroll.js
import { useLayoutEffect } from "react";
import { gsap } from "gsap";

export default function useHeaderHideOnScroll(
  ref,
  {
    threshold = 100, // píxeles que debes desplazar hacia abajo antes de ocultar
    duration = 0.85, // velocidad de la animación
    easeIn = "power2.in",
    easeOut = "power2.out",
  } = {}
) {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    let lastY = window.scrollY;
    let downDistance = 0; // acumulador de scroll hacia abajo
    let hidden = false;

    const show = () => gsap.to(el, { y: 0, duration, ease: easeOut });
    const hide = () =>
      gsap.to(el, { y: -el.offsetHeight, duration, ease: easeOut });

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      lastY = y;

      // Siempre mostrar si volvemos cerca del top
      if (y <= 0) {
        downDistance = 0;
        if (hidden) {
          hidden = false;
          show();
        }
        return;
      }

      if (delta > 0) {
        // Desplazándonos hacia abajo
        downDistance += delta;
        if (!hidden && downDistance >= threshold) {
          hidden = true;
          hide();
        }
      } else if (delta < 0) {
        // Desplazándonos hacia arriba
        downDistance = 0;
        if (hidden) {
          hidden = false;
          show();
        }
      }
    };

    // Estado inicial (visible)
    gsap.set(el, { y: 0 });

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      gsap.killTweensOf(el);
    };
  }, [ref, threshold, duration, easeIn, easeOut]);
}
