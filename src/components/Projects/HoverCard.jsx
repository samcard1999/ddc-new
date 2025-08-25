import React from "react";
import { ArrowRight } from "lucide-react"; // icono de flecha

const HoverCard = ({ image, title, subtitle }) => {
  return (
    <div className="flex flex-col items-start group relative overflow-hidden rounded-lg lg:rounded-[2rem]  cursor-pointer">
      {/* Imagen */}
      <div className="overflow-hidden rounded-lg lg:rounded-3xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform scale-110 transition-transform duration-700 ease-in-out group-hover:scale-100"
        />
      </div>

      {/* Texto */}
      <div className="flex flex-col items-start lg:gap-4 w-full object-contain lg:p-6 pt-4 lg:pt-12 text-white ">
        <p className="lg:text-2xl text-base text-gray-400 lg:mb-2">
          {subtitle}
        </p>

        <h2 className="flex items-center gap-2 text-4xl leading-6 lg:text-7xl lg:font-bold text-white uppercase transition-all duration-500 group-hover:translate-x-2">
          {title}
          <ArrowRight
            className="hidden lg:block opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0"
            size={"4.5rem"}
          />
          <ArrowRight
            className="block lg:hidden opacity-100 lg:opacity-0 -translate-x-2 transition-all duration-500 lg:group-hover:opacity-100 group-hover:translate-x-0"
            size={"2.5rem"}
          />
        </h2>
      </div>
    </div>
  );
};

export default HoverCard;
