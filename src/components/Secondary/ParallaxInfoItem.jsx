// ParallaxInfoItem.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GsapParallax from "../Effects/GsapParallax";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxInfoItem({
  heading = "6+",
  paragraph = "Years of experience in development",
  src = "/assets/about/image1.webp",
  alt = "Parallax image",
  fromY = -60,
  toY = 60,
  className = "",
  headingClassName = "lg:text-9xl text-6xl font-bold",
  paragraphClassName = "lg:text-4xl text-2xl",
  imageClassName = "h-full w-auto aspect-square",
  containerClassName = "bg-semi_white lg:p-[1.38vw] p-4 flex flex-col gap-4 h-fit",
}) {
  const headingRef = useRef(null);

  useEffect(() => {
    const el = headingRef.current;

    const match = heading.match(/(\d+)/);
    const finalNumber = match ? parseInt(match[0], 10) : 0;
    const suffix = heading.replace(match?.[0], ""); // ej: "+"

    // 🚀 Arranca desde un valor cercano (ej. finalNumber - 10)
    let startVal = Math.max(0, finalNumber - 10);

    let obj = { val: startVal };

    gsap.fromTo(
      obj,
      { val: startVal },
      {
        val: finalNumber,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        onUpdate: () => {
          if (el) {
            el.textContent = Math.floor(obj.val) + suffix;
          }
        },
      }
    );
  }, [heading]);

  return (
    <li className={`${containerClassName} ${className}`}>
      <div className="flex flex-col items-start gap-4 text-black">
        <h3 ref={headingRef} className={headingClassName}>
          0
        </h3>
        <p className={paragraphClassName}>{paragraph}</p>
      </div>

      <GsapParallax
        className={imageClassName}
        alt={alt}
        src={src}
        fromY={fromY}
        toY={toY}
      />
    </li>
  );
}
