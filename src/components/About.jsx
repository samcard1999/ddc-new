import React from "react";
import PrimaryButton from "./Button/PrimaryButton";
import InfiniteDraggableCarousel from "./Carousel/InfiniteDraggableCarousel";

const imgs = [
  "/assets/about/carousel1.jpeg",
  "/assets/about/carousel2.jpeg",
  "/assets/about/carousel3.jpeg",
  "/assets/about/carousel4.jpeg",
  "/assets/about/carousel5.jpeg",
];

const About = () => {
  return (
    <section
      id="about"
      className="h-auto w-full bg-[#EAEAEA] pb-14 pt-16 pl-4 lg:pb-[4.2vw] lg:pt-[7vw] lg:pl-[2.8vw] "
    >
      <div className="flex justify-between items-start w-full h-auto">
        <h2 className="text-5xl lg:text-7xl 2xl:text-8xl lg:max-w-[53vw] text-dark font-bold uppercase max-w-[90%]">
          We are company of the future that covers modular construction ON 360°
        </h2>
        <PrimaryButton className="hidden lg:block lg:mr-[2.8vw] text-2xl">
          Connect with us
        </PrimaryButton>
      </div>

      <div className="w-full overflow-x-hidden">
        <div className="flex gap-4 items-center h-[25vh] lg:h-[25vw] w-[calc(100%+4rem)]  mt-12 lg:mt-[7vw]">
          <div className="flex flex-col justify-between items-center h-full">
            <svg
              className="aspect-square lg:w-8 w-4"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-v-b02cf8eb=""
            >
              <path
                d="M8.25 9.75V17.25H9.75V9.75H17.25V8.25H9.75V0.75H8.25V8.25H0.75V9.75H8.25Z"
                fill="#202020"
              ></path>
            </svg>
            <svg
              className="aspect-square lg:w-8 w-4"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-v-b02cf8eb=""
            >
              <path
                d="M8.25 9.75V17.25H9.75V9.75H17.25V8.25H9.75V0.75H8.25V8.25H0.75V9.75H8.25Z"
                fill="#202020"
              ></path>
            </svg>
          </div>

          <InfiniteDraggableCarousel images={imgs} speed={70} gap={20} />
        </div>
      </div>

      <div className="flex justify-between w-full items-end uppercase text-xl font-bold text-dark mt-[9vw]">
        <div className="flex gap-44 items-end">
          <div className="hidden lg:flex gap-4  items-center">
            <h2>SCROLL DOWN</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-down-icon lucide-arrow-down hero__arrow"
              data-v-2c5f614c=""
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </div>
          <h2 className="lg:max-w-[22vw] max-w-[85%] text-xl lg:text-2xl 2xl:text-3xl ">
            We don't just build, but also manage, consult, train market
            participants and create educational content for investors and
            property buyers
          </h2>
        </div>
        <div className="gap-4 hidden lg:flex items-center lg:mr-[2.8vw]">
          <span className="address-point  !bg-dark"></span>
          <h2>FLORIDA, UNITED STATES</h2>
        </div>
      </div>
    </section>
  );
};

export default About;
