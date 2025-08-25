import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import GsapParallax from "./Effects/GsapParallax";

const Hero = () => {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Fondo: scale y blur inicial
      tl.fromTo(
        bgRef.current,
        { scale: 1.2, filter: "blur(20px)", opacity: 0 },
        {
          scale: 1,
          filter: "blur(0px)",
          opacity: 1,
          duration: 2,
          ease: "power3.out",
        }
      );

      // Texto principal
      tl.fromTo(
        textRef.current,
        { scale: 0.8, opacity: 0, y: 50, filter: "blur(10px)" },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power3.out",
        },
        "-=1.7" // empieza un poco antes de terminar el fondo
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative bg-darken h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Fondo animado */}
      <div
        ref={bgRef}
        className="absolute -z-0 h-full w-full lg:h-[70%] lg:w-[85%]"
      >
        <GsapParallax
          className="bg h-full bg-hero filter brightness-75"
          src="/public/assets/bg/Aereo.webp"
          fromY={-100}
          toY={100}
        />
      </div>

      {/* Texto */}
      <h1
        ref={textRef}
        className="text-5xl lg:text-[7rem] z-10 text-center p-1 text-white font-bold uppercase"
      >
        Designing the future,
        <br /> turning visions
        <br /> into reality
      </h1>

      {/* Footer Hero */}
      <div className="hidden font-bold absolute lg:flex w-full justify-between items-start px-12 bottom-[6.6vh]">
        <div className="flex gap-4 text-white text-lg items-center">
          <h2>SCROLL DOWN</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-down-icon lucide-arrow-down hero__arrow"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </div>
        <div className="flex gap-4 text-white text-lg items-center">
          <span className="address-point"></span>
          <h2>FLORIDA, UNITED STATES</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
