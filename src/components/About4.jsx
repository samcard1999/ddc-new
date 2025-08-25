import React from "react";

const About4 = () => {
  return (
    <section className="video-container px-4 lg:px-[2.7vw] pt-12 pb-16 rounded-[40px] lg:rounded-[10.27vw] rounded-b-none mt-16">
      <div className="flex flex-col items-center lg:px-[6.9vw] lg:pt-[6.9vw]">
        <h2 className="text-2xl lg:text-7xl text-white text-center uppercase font-bold">
          We shape the future of real estate design, blending technology,
          creativity, and innovation to elevate every DDC Developments project.
        </h2>
        <div className="mt-12 relative">
          <div className="z-20 relative video-wrapper h-[64vh] lg:h-screen aspect-[9/16] w-full border-[0.7rem] lg:border-[1rem] border-solid border-black rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden">
            <div className="rounded-full bg-black h-4 lg:h-8 aspect-square absolute -translate-x-1/2 left-1/2 top-[2.5%] z-20"></div>
            <video
              loop
              muted
              playsInline
              autoPlay
              className="h-full w-full object-cover z-50"
            >
              <source src="/assets/about/team.mp4" type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          </div>
          <div className="back-video hidden lg:block z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 video-wrapper h-[40vw] aspect-[16/9] rounded-[2.5rem] overflow-hidden">
            <video
              loop
              muted
              playsInline
              autoPlay
              className="h-full w-full object-cover z-50"
            >
              <source src="/assets/about/team.mp4" type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About4;
