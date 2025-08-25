import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InfoCard from "./Technologies/InfoCard";

gsap.registerPlugin(ScrollTrigger);

const Technologies = () => {
  return (
    <section
      id="technologies"
      className="w-full h-screen px-4  lg:px-24 bg-white"
    ></section>
  );
};

export default Technologies;
