import React, { useEffect, useRef } from "react";
import AnimatedHeading from "../Animations/AnimatedHeading";
import TestimonialCard from "./TestimonialCard";
import logo_circle_white from "/assets/svg/logo_circle_white.svg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Projects from "./Projects";

const testimonials = [
  {
    name: "Clinton Reeves",
    role: "Real Estate Developer",
    review:
      "DDC Developments delivered on time with precision. Truly impressive work!",
    rating: 4.9,
  },
  {
    name: "Marjorie Whitman",
    role: "Architect",
    review:
      "The BIM software from DDC was outstanding. It gave me full clarity at every stage.",
    rating: 5.0,
  },
  {
    name: "Sterling Hayes",
    role: "Construction Manager",
    review:
      "Their modular construction saved weeks of work while keeping top quality.",
    rating: 4.7,
  },
  {
    name: "Fiona Carlisle",
    role: "Project Coordinator",
    review:
      "I was amazed by the speed and reliability of their modular system. A real game changer.",
    rating: 4.8,
  },
  {
    name: "Dorian Keller",
    role: "Investor",
    review:
      "Working with DDC gave me confidence—professional, transparent, and innovative.",
    rating: 5.0,
  },
  {
    name: "Selene Pratt",
    role: "Interior Designer",
    review:
      "Their attention to detail and design integration was flawless. Highly recommended!",
    rating: 4.6,
  },
  {
    name: "Roland Pierce",
    role: "Homeowner",
    review:
      "DDC Developments made the process smooth, stress-free, and enjoyable.",
    rating: 4.9,
  },
];

gsap.registerPlugin(ScrollTrigger);

const ProjectsCard = () => {
  const boxRef = useRef(null);
  const targetEl = useRef(null);

  useEffect(() => {
    const el = boxRef.current;
    const target = targetEl.current;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top ",
          end: "+100%",
          // cuando el top del trigger toque el centro del viewport
          scrub: true,
          // permite scrub para una animación suave
        },
      })
      .fromTo(
        target,
        { y: "-10%" },
        { y: "26.3%", scrub: true, duration: 4, ease: "power2.out" }
      )
      .to(
        target,
        {
          scale: 12, // escala enorme
          duration: 8,
          transformOrigin: "center center", // punto de expansión
          scrub: true,
          ease: "power3.inOut",
        },
        "="
      )
      .to(
        target,
        {
          duration: 6,
          rotateY: 180, // rotación en eje Y
          transformOrigin: "center center", // punto de expansión
          scrub: true,
          ease: "power3.inOut",
        },
        "="
      );
  }, []);
  return (
    <section
      id="projects-card"
      ref={boxRef}
      className="h-[130vh] w-full relative  py-20 bg-semi_white"
    >
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col gap-8 w-full justify-center items-center px-8 lg:max-w-[50%]">
        <AnimatedHeading
          text={`❝Designing innovative & sustainable spaces isn’t a trend.—It’s the future of real estate.❞`}
          className="text-4xl font-normal  xl:text-6xl 2xl-custom:text-7xl lg:font-light lg:content-center text-darken lg:text-center "
          duration={0.3}
          stagger={0.06}
          ease="power4.out"
        />
        <h2 className="text-gray-600 lg:text-3xl text-2xl italic text-center">
          ~ Danilo Dominguez
        </h2>
      </div>
      <div className="hidden lg:flex flex-col justify-center items-center w-full h-full px-[12vw]">
        <div className="flex justify-between items-center w-full">
          <TestimonialCard
            className="mt-[11vh] ml-[5vw] scale-90 opacity-95"
            animateOnView={true}
            name={testimonials[0].name}
            role={testimonials[0].role}
            photo="assets/testimonials/2.webp"
            rating={testimonials[0].rating}
            review={testimonials[0].review}
          />
          <TestimonialCard
            className="scale-75 opacity-80"
            name={testimonials[1].name}
            role={testimonials[1].role}
            photo="assets/testimonials/1.webp"
            rating={testimonials[1].rating}
            review={testimonials[1].review}
          />
        </div>
        <div className="flex justify-between items-center w-full px-40">
          <TestimonialCard
            animateOnView={true}
            className="mt-[11vh] -translate-x-[15vh"
            name={testimonials[2].name}
            role={testimonials[2].role}
            photo="assets/testimonials/3.webp"
            rating={testimonials[2].rating}
            review={testimonials[2].review}
          />
          <TestimonialCard
            animateOnView={true}
            moveDown={true}
            className="scale-125 translate-y-[23.7vh] translate-x-[3vw]"
            name={testimonials[3].name}
            role={testimonials[3].role}
            photo="assets/testimonials/4.webp"
            rating={testimonials[3].rating}
            review={testimonials[3].review}
          />
        </div>
        <div className="flex justify-between items-center w-full px-[8.3vw]">
          <TestimonialCard
            animateOnView={true}
            className="mt-[11vh] translate-x-[8.3vw]"
            name={testimonials[2].name}
            role={testimonials[2].role}
            photo="assets/testimonials/3.webp"
            rating={testimonials[2].rating}
            review={testimonials[2].review}
          />
          <TestimonialCard
            className="scale-85 mt-[16.2vh] translate-x-[3.2vw] -translate-y-[9.6vh] opacity-80"
            name={testimonials[5].name}
            role={testimonials[5].role}
            photo="assets/testimonials/6.webp"
            rating={testimonials[5].rating}
            review={testimonials[5].review}
          />
        </div>
      </div>

      <div className="logo_card_container z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl">
        <div
          ref={targetEl}
          className="flex flex-col items-center justify-center h-[38.5vh] aspect-[9/16] rounded-2xl [transform-style:preserve-3d]"
        >
          {/* FRONT */}
          <div className="absolute inset-0 flex flex-col gap-16 items-start justify-between bg-darken overflow-hidden rounded-2xl backface-hidden">
            <div className="logo_card_wrapper logo_card w-full h-full flex items-start justify-center pt-24">
              <img
                src={logo_circle_white}
                alt="logo circle white"
                className="w-2/5"
              />
            </div>
            <h2 className="z-10 lg:text-4xl 2xl:text-5xl text-2xl text-white font-light absolute w-full text-center bottom-24">
              PROJECTS
            </h2>
          </div>

          {/* BACK */}
          <div className="backface-hidden back absolute inset-0 bg-darken z-10 flex items-center justify-center rounded-2xl [transform:rotateY(180deg)]">
            {/* El ::before en CSS le da color sólido */}
          </div>
        </div>
      </div>

      <div className="bg-atachment -z-0 flex flex-col items-start justify-start max-w-[1423px] top-64 h-full lg:top-28 left-1/2 -translate-x-1/2 absolute w-full lg:max-w-[66%]  lg:h-fit opacity-[0.2]">
        <img
          loading="lazy"
          alt="grid start"
          src="assets/grid/initial_grid.svg"
          className="h-[95px] lg:h-[fit] w-[1423px] lg:w-full  object-cover"
        />
        <img
          loading="lazy"
          alt="grid start"
          src="assets/grid/grid.svg"
          className="h-[95px] lg:h-[fit] w-[1423px] lg:w-full  object-cover"
        />
        <img
          loading="lazy"
          alt="grid start"
          src="assets/grid/grid.svg"
          className="h-[95px] lg:h-[fit] w-[1423px] lg:w-full  object-cover"
        />
        <img
          loading="lazy"
          alt="grid start"
          src="assets/grid/grid.svg"
          className="h-[95px] lg:h-[fit] w-[1423px] lg:w-full  object-cover"
        />
        <img
          loading="lazy"
          alt="grid start"
          src="assets/grid/grid.svg"
          className="h-[95px] lg:h-[fit] w-[1423px] lg:w-full object-cover"
        />
        <img
          loading="lazy"
          alt="grid start"
          src="assets/grid/grid.svg"
          className="h-[95px] lg:h-[fit] w-[1423px] lg:w-full object-cover"
        />
        <img
          loading="lazy"
          alt="grid start"
          src="assets/grid/grid.svg"
          className="h-[95px] lg:h-[fit] w-[1423px] lg:w-full object-cover"
        />
        <img
          loading="lazy"
          alt="grid start"
          src="assets/grid/grid.svg"
          className="h-[95px] lg:h-[fit] w-[1423px] lg:w-full object-cover"
        />
        <img
          loading="lazy"
          alt="grid start"
          src="assets/grid/grid.svg"
          className="h-[95px] lg:h-[fit] w-[1423px] lg:w-full object-cover"
        />
        <img
          loading="lazy"
          alt="grid start"
          src="assets/grid/grid.svg"
          className="h-[95px] lg:h-[fit] w-[1423px] lg:w-full object-cover"
        />
        <img
          loading="lazy"
          alt="grid start"
          src="assets/grid/grid.svg"
          className="h-[95px] lg:h-[fit] w-[1423px] lg:w-full object-cover"
        />
        <img
          loading="lazy"
          alt="grid start"
          src="assets/grid/grid.svg"
          className="lg:hidden h-[95px] lg:h-[fit] w-[1423px] lg:w-full object-cover"
        />

        <img
          loading="lazy"
          alt="grid start"
          src="assets/grid/grid.svg"
          className="lg:hidden h-[95px] lg:h-[fit] w-[1423px] lg:w-full object-cover"
        />

        <img
          loading="lazy"
          alt="grid start"
          src="assets/grid/grid.svg"
          className="lg:hidden h-[95px] lg:h-[fit] w-[1423px] lg:w-full object-cover"
        />

        <img
          loading="lazy"
          alt="grid start"
          src="assets/grid/grid.svg"
          className="lg:hidden h-[95px] lg:h-[fit] w-[1423px] lg:w-full object-cover"
        />

        <img
          loading="lazy"
          alt="grid start"
          src="assets/grid/final_grid.svg"
          className="h-[95px] lg:h-[fit] w-[1423px] lg:w-full object-cover"
        />
      </div>
    </section>
  );
};

export default ProjectsCard;
