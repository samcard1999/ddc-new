import React from "react";
import GsapParallax from "./Effects/GsapParallax";
import ParallaxInfoItem from "./Secondary/ParallaxInfoItem";
import PrimaryButton from "./Button/PrimaryButton";
import About4 from "./About4";

const About3 = () => {
  return (
    <section
      id="about3"
      className="h-auto w-full lg:pb-[13.8vw] lg:pt-[7vw] pb-16 pt-6 bg-[#2C3240] px-4 lg:px-[2.7vw]"
    >
      <div className="flex justify-between items-end">
        <h2 className="text-white text-[2.75rem] leading-[3rem]  lg:text-8xl font-bold">
          WE ARE IN NUMBERS
        </h2>
        <div className="hidden lg:flex gap-4 text-white text-lg items-center">
          <span className="address-point"></span>
          <h2>FLORIDA, UNITED STATES</h2>
        </div>
      </div>
      <ul className="grid lg:gap-[1.38vw] gap-8 grid-flow-row grid-cols-1 lg:grid-cols-4 mt-[6.9vw] w-full mb-12">
        <ParallaxInfoItem
          heading="6+"
          paragraph="years of experience in development"
          src="/assets/about/image1.webp"
          alt="Years of experience image"
        />
        <ParallaxInfoItem
          className="lg:mt-[16vw]"
          heading="300+"
          paragraph="properties Sold"
          src="/assets/about/image2.webp"
          alt="Years of experience image"
        />
        <ParallaxInfoItem
          heading="3"
          paragraph="offices in Florida"
          src="/assets/about/image3.webp"
          alt="Years of experience image"
        />
        <ParallaxInfoItem
          className="lg:mt-[16vw]"
          heading="32"
          paragraph="projects in the Portfolio"
          src="/assets/about/image4.webp"
          alt="Years of experience image"
        />
      </ul>
      <div className="flex justify-center items-center">
        <PrimaryButton color="gold">
          <div className="flex gap-4 items-center text-black lg:text-2xl text-lg">
            <span>Connect with Us</span>
            <svg
              width="1.8rem"
              height="1.8rem"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-black"
            >
              <path
                d="M8.25 9.75V17.25H9.75V9.75H17.25V8.25H9.75V0.75H8.25V8.25H0.75V9.75H8.25Z"
                fill="#202020"
              ></path>
            </svg>
          </div>
        </PrimaryButton>
      </div>

      <About4 />
    </section>
  );
};

export default About3;
