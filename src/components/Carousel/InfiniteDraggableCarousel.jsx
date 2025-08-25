// InfiniteDraggableCarousel.jsx
import React, { useEffect, useRef, useState } from "react";

export default function InfiniteDraggableCarousel({
  images = [],
  speed = 60, // px/s (autoplay)
  gap = 16,
  className = "",
}) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const cursorRef = useRef(null);
  const circleRef = useRef(null); // círculo que escalamos
  const lastMouseRef = useRef(null); // última pos de puntero (para sync en scroll)

  const [hovered, setHovered] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [desktopPointer, setDesktopPointer] = useState(false); // (hover: hover) & (pointer: fine)

  const posRef = useRef(0); // desplazamiento actual (px)
  const dirRef = useRef(1); // 1 = izquierda, -1 = derecha
  const lastXRef = useRef(0);
  const lastDXRef = useRef(0);
  const widthRef = useRef(1); // ancho de una vuelta (primer set)
  const rafRef = useRef(0);
  const prevTsRef = useRef(0);

  // Detecta si hay puntero “fino” con hover (desktop/laptop)
  useEffect(() => {
    if (typeof window !== "undefined" && "matchMedia" in window) {
      const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
      const update = () => setDesktopPointer(!!mq.matches);
      update();
      mq.addEventListener?.("change", update);
      return () => mq.removeEventListener?.("change", update);
    }
  }, []);

  // Medición cuando cargan imágenes del primer set
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const imgs = Array.from(track.querySelectorAll("img")).slice(
      0,
      images.length
    );

    let loaded = 0;
    const ready = () => {
      loaded += 1;
      if (loaded >= imgs.length) measure();
    };

    imgs.forEach((img) => {
      if (img.complete) ready();
      else img.addEventListener("load", ready, { once: true });
    });

    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  function measure() {
    const track = trackRef.current;
    if (!track) return;
    widthRef.current = Math.max(1, track.scrollWidth / 2); // 2 sets → mitad = 1 vuelta
    posRef.current = mod(posRef.current, widthRef.current);
    applyTransform();
  }

  // Autoplay
  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const tick = (ts) => {
      if (!prevTsRef.current) prevTsRef.current = ts;
      const dt = Math.min((ts - prevTsRef.current) / 1000, 0.05);
      prevTsRef.current = ts;

      if (!dragging) {
        const delta = dirRef.current * speed * dt;
        posRef.current = mod(posRef.current + delta, widthRef.current || 1);
        applyTransform();
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed, dragging]);

  function mod(n, m) {
    return ((n % m) + m) % m;
  }

  function applyTransform() {
    const track = trackRef.current;
    if (!track) return;
    track.style.transform = `translate3d(${-posRef.current}px,0,0)`;
  }

  // --- Cursor helpers (solo desktop) ---
  function updateCursorPosition(clientX, clientY) {
    if (!desktopPointer) return;
    const el = containerRef.current;
    const cursor = cursorRef.current;
    if (!el || !cursor) return;
    const rect = el.getBoundingClientRect();
    cursor.style.transform = `translate(${clientX - rect.left}px, ${
      clientY - rect.top
    }px) translate(-50%, -50%)`;
  }

  // Reposiciona el cursor con scroll/resize (evita “congelado”)
  useEffect(() => {
    const onScrollOrResize = () => {
      if (!desktopPointer || !hovered || !lastMouseRef.current) return;
      updateCursorPosition(lastMouseRef.current.x, lastMouseRef.current.y);
    };
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [desktopPointer, hovered]);

  // Escalado combinado (hover * drag) — solo afecta al círculo (si existe)
  useEffect(() => {
    const el = circleRef.current;
    if (!el) return;
    const hoverScale = desktopPointer && hovered ? 1 : 0.9; // leve pop al entrar
    const pressScale = dragging ? 0.8 : 1; // -20% al presionar
    const scale = (hoverScale * pressScale).toFixed(3);
    el.style.transform = `scale(${scale})`;
  }, [desktopPointer, hovered, dragging]);

  // Pointer events (mouse y touch)
  const onPointerDown = (e) => {
    // Evita gestos del navegador (doble tap zoom en iOS, etc.) y seleccion
    e.preventDefault?.();
    setDragging(true);
    lastXRef.current = e.clientX;
    // Captura el puntero para seguir recibiendo eventos aunque salga del contenedor
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e) => {
    // Guarda última posición (útil para reposicionar el cursor en scroll)
    lastMouseRef.current = { x: e.clientX, y: e.clientY };
    if (desktopPointer && hovered) updateCursorPosition(e.clientX, e.clientY);

    if (!dragging) return;
    // Evita que el navegador “panee” mientras arrastras horizontalmente
    e.preventDefault?.();

    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;

    lastDXRef.current = dx;
    posRef.current = mod(posRef.current - dx, widthRef.current || 1);
    applyTransform();
  };

  const endDrag = () => {
    setDragging(false);
    const dx = lastDXRef.current;
    if (dx > 0) dirRef.current = -1; // arrastró → derecha
    else if (dx < 0) dirRef.current = 1; // arrastró → izquierda
  };

  // Mouse enter/leave solo en desktop
  const onMouseEnter = () => desktopPointer && setHovered(true);
  const onMouseLeave = () => desktopPointer && setHovered(false);

  // Dirección con rueda horizontal (opcional, desktop)
  const onWheel = (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      dirRef.current = e.deltaX > 0 ? 1 : -1;
    }
  };

  const doubled = images.concat(images);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden select-none [overflow-anchor:none] ${className}`}
      // IMPORTANTE para móvil: permite scroll vertical pero bloquea el horizontal del navegador,
      // dejando que el componente maneje el drag horizontal.
      style={{
        cursor:
          desktopPointer && hovered ? "none" : desktopPointer ? "grab" : "auto",
        userSelect: "none",
        touchAction: "pan-y",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onWheel={onWheel}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      // Nota: NO terminamos el drag en pointerleave porque usamos pointer capture
      onDragStart={(e) => e.preventDefault()}
      onContextMenu={(e) => e.preventDefault()}
      role="region"
      aria-roledescription="carrusel"
      aria-label="Carrusel de imágenes"
    >
      {/* Pista */}
      <div
        ref={trackRef}
        className="absolute inset-y-0 left-0 flex items-center will-change-transform"
        style={{ gap: `${gap}px`, touchAction: "pan-y" }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="h-full flex items-center"
            style={{ flex: "0 0 auto" }}
          >
            <img
              src={src}
              alt={`slide-${i % images.length}`}
              className="h-full w-auto object-cover pointer-events-none"
              draggable="false"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Cursor personalizado “Drag” — solo visible en desktop */}
      {desktopPointer && (
        <div
          ref={cursorRef}
          className={`pointer-events-none absolute top-0 left-0 z-20 transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        >
          <div
            ref={circleRef}
            className="flex items-center justify-center rounded-full bg-black/85 text-white font-semibold uppercase tracking-wider
                       text-xs will-change-transform transition-transform duration-200 ease-out"
            style={{
              width: 76,
              height: 76,
              boxShadow: "0 6px 20px rgba(0,0,0,.35)",
              transform: "scale(0.9)",
            }}
          >
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Drag
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
