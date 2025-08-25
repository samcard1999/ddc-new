import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LogoCard = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const front = cardRef.current.querySelector(".card-front");
      const back = cardRef.current.querySelector(".card-back");

      gsap.set(back, { opacity: 0 }); // al inicio back oculto

      // Timeline para el flip
      gsap
        .timeline({
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top center", // activa cuando la card entra al centro del viewport
            toggleActions: "play none reverse none", // reversible con scroll
          },
        })
        .to(front, { opacity: 0, duration: 0.7, ease: "power2.out" })
        .to(back, { opacity: 1, duration: 0.7, ease: "power2.out" }, "<"); // "<" = simultáneo
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="logo_card_container z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl">
      <div
        ref={cardRef}
        className="relative flex flex-col items-center justify-center h-[38.5vh] aspect-[9/16] rounded-2xl overflow-hidden"
      >
        {/* FRONT */}
        <div className="card-front absolute inset-0 flex flex-col gap-16 items-start justify-between bg-darken rounded-2xl">
          <div className="logo_card_wrapper logo_card w-full h-full flex items-start justify-center pt-24">
            <img
              src="assets/logo_circle_white.svg"
              alt="logo circle white"
              className="w-2/5"
            />
          </div>
          <img
            className="z-10 lg:h-8 text-2xl text-white absolute w-full bottom-24"
            src="assets/projects/projects_1.svg"
            alt="projects"
          />
        </div>

        {/* BACK */}
        <div className="card-back absolute inset-0 flex items-center justify-center bg-black rounded-2xl">
          <h2 className="text-white text-3xl font-bold">BACK SIDE</h2>
        </div>
      </div>
    </div>
  );
};

export default LogoCard;
