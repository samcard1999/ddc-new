import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const AnimatedHeading = ({
  text,
  className = "text-4xl font-bold leading-snug text-center",
  duration = 1,
  stagger = 0.3,
  ease = "power3.out",
}) => {
  const headingRef = useRef(null);

  useEffect(() => {
    let split;

    const init = () => {
      if (!headingRef.current) return;

      split = new SplitText(headingRef.current, { type: "lines" });

      gsap.from(split.lines, {
        y: 100,
        opacity: 0,
        duration,
        ease,
        stagger,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 70%", // cuando el top del heading llegue al 70% del viewport
          toggleActions: "play none none none",
        },
      });
    };

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(init);
    } else {
      window.addEventListener("load", init);
    }

    return () => {
      if (split) split.revert();
      window.removeEventListener("load", init);
    };
  }, [duration, stagger, ease]);

  return (
    <h2 ref={headingRef} className={className} style={{ overflow: "hidden" }}>
      {text}
    </h2>
  );
};

export default AnimatedHeading;
