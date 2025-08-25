import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverCard from "./HoverCard";
import PrimaryButton from "../Button/PrimaryButton";
import InfoCard from "../Technologies/InfoCard";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const projects_background = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,

            start: "-40% top", // cuando el top del section llega al 80% del viewport
            end: "+=33%", // duración extra
            scrub: true, // progresivo y reversible
          },
        })
        .to(projects_background.current, {
          backgroundColor: "#ffff", // nuevo color del título
          duration: 1,
        })
        .to(
          sectionRef.current,
          {
            backgroundColor: "#ffffff", // nuevo color del subtítulo
            duration: 1,
          },
          "<"
        ); // "<" → simultáneo
    }, sectionRef);

    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: projects_background.current,
          start: "top", // cuando el top del section llega al 80% del viewport
          end: "top",
          scrub: true, // progresivo y reversible
        },
      })
      .to(projects_background.current, {
        backgroundColor: "#010A18", // nuevo color del título
        duration: 1,
      });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        id="projects"
        ref={projects_background}
        className="h-[auto] relative w-full flex flex-col gap-24 px-3 lg:px-24 pt-80 pb-32 z-20 bg-transparent overflow-hidden "
      >
        <div className="flex flex-col lg:flex-row gap-8  justify-between items-start lg:items-center text-white ">
          <h1 className="text-7xl lg:text-9xl font-bold uppercase">
            Featured Work
          </h1>
          <h3 className="text-2xl text-gray-400 lg:max-w-[20vw]">
            Step inside our spaces where accessibility meets innovation—because
            great design belongs to everyone
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-6 lg:grid-rows-3 gap-12 lg:gap-24 h-auto">
          <HoverCard
            image="/assets/projects/bg__1.jpeg"
            title="Villa Santa Marta"
            subtitle="4 BEDS • 5 BATHS • POOL"
          />
          <HoverCard
            image="/assets/projects/bg__2.jpeg"
            title="Villa Victor"
            subtitle="5 BEDS • 5 BATHS • TERRACE"
          />
          <HoverCard
            image="/assets/projects/bg__3.jpeg"
            title="Villa Ochoa"
            subtitle="4 BEDS • 4 BATHS • POOL"
          />
          <HoverCard
            image="/assets/projects/bg__4.jpeg"
            title="Villa Esplanade"
            subtitle="4 BEDS • 5 BATHS • SEA VIEW"
          />
          <HoverCard
            image="/assets/projects/bg__5.jpeg"
            title="Villa Guajira"
            subtitle="8 BEDS • 6 BATHS • POOL"
          />
          <HoverCard
            image="/assets/projects/bg__6.jpeg"
            title="Villa Tortuga"
            subtitle="4 BEDS • 4 BATHS • BEACH ACCESS"
          />
        </div>

        <div className="flex justify-center w-full -mt-10">
          <PrimaryButton color="gold" className="w-fit lg:text-6xl">
            <div className="flex gap-4 items-center text-darken lg:text-4xl text-lg">
              <span>View All</span>
              <svg
                width="1.8rem"
                height="1.8rem"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-darken"
              >
                <path
                  d="M8.25 9.75V17.25H9.75V9.75H17.25V8.25H9.75V0.75H8.25V8.25H0.75V9.75H8.25Z"
                  fill="#202020"
                ></path>
              </svg>
            </div>
          </PrimaryButton>
        </div>
        <div className="absolute bottom-0 opacity-30 left-0 w-full h-4 bg-gradient-to-t from-darken to-transparent"></div>
      </section>
      <section
        id="technologies01"
        ref={sectionRef}
        className="w-full h-auto px-6 py-24 lg:px-10 bg-darken z-30"
      >
        <div className="flex flex-col lg:flex-row gap-20 justify-between pb-24 items-start lg:items-center bg-transparent z-50">
          <h1 className="text-5xl lg:text-7xl font-bold uppercase text-white mix-blend-difference">
            How we make Work Better
            <br /> for Everyone
          </h1>
          <h3 className="text-xl font-thin lg:text-2xl lg:max-w-[20vw] text-white mix-blend-difference">
            At DDC, we integrate cutting-edge technologies to transform real
            estate and construction. From immersive design tools to smart
            project management and innovative investment models, our solutions
            empower clients with efficiency, transparency, and unmatched value
            at every stage.
          </h3>
        </div>
        <div className="lg:grid flex flex-col lg:grid-cols-3 mb-40 lg:grid-rows-2 gap-6 lg:gap-10 h-[130vh]">
          <div className="grid-item  lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2 text-white">
            <InfoCard
              heading="Augmented Reality"
              text="We use Augmented Reality to let clients and investors visualize spaces before construction, enhancing decisions and creating stronger connections."
              image="assets/technologies/augmented-reality.webp"
              alt="Augmented Reality image"
            />
          </div>
          <div className="grid-item text-white flex items-center justify-center lg:h-auto h-[45vh]">
            <InfoCard
              className=""
              heading="Modular Construction"
              text="We build with modular construction to deliver speed, efficiency, and precision, ensuring cost savings, sustainable methods, and adaptable spaces that meet the evolving needs of modern living."
              image="assets/technologies/modular-construction.webp"
              alt="Modular Construction image"
            />
          </div>
          <div className="grid-item bg-[#2E4672] text-white flex items-center justify-center">
            <InfoCard
              heading="Real Estate Tokenization"
              text="We’re pioneering real estate tokenization to democratize access to investment. By converting property value into digital tokens, we make it easier for global investors to participate with transparency, liquidity, and lower entry barriers."
              image="assets/technologies/tokenization.png"
              alt="Real Estate Tokenization image"
            />
          </div>
          <div className="grid-item  text-white flex items-center justify-center lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-2">
            <InfoCard
              className=""
              heading="BIM Software"
              text="Through BIM, DDC ensures accuracy, cost control, and collaboration by centralizing data for a smarter, transparent construction process."
              image="assets/technologies/software-bim.webp"
              alt="Software BIM image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
