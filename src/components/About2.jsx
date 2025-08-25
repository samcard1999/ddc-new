import React from "react";
import PrimaryButton from "./Button/PrimaryButton";

const About2 = () => {
  return (
    <section id="about2" className="h-full w-full px-4 lg:px-[2.7vw] bg-darken">
      <div className="w-full flex justify-start lg:justify-end">
        <h2 className="text-5xl lg:text-8xl 2xl:text-9xl text-white font-bold mt-16 max-w-[80%] lg:max-w-[55%] lg:text-end uppercase">
          The future is not waited, it is built
        </h2>
      </div>
      <div className="flex lg:flex-row flex-col gap-16 lg:justify-between lg:items-start pt-16 lg:pt-[11vw] lg:pb-[11vw] pb-16">
        <img
          alt="Construction_picture"
          src="/assets/about/about2.webp"
          className="h-full aspect-auto lg:w-[62.5vw] w-full"
        />
        <div className="flex flex-col gap-8 items-start lg:w-[23vw] w-full max-w-[70vw] text-white font-light text-lg lg:text-3xl">
          <p>
            At DDC Developments, we are dedicated to transforming the
            construction industry with a strong commitment to environmental
            responsibility. By leveraging cutting- edge technologies like our
            modular systems, we offer innovative and sustainable solutions that
            redefine efficiency and performance. Our disruptive approach
            positions us as an industry leader, driving progress and shaping the
            future of construction.
          </p>
          <PrimaryButton color="gold">
            <div className="flex gap-4 items-center text-darken lg:text-2xl text-lg">
              <span>About Us</span>
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
      </div>
    </section>
  );
};

export default About2;
