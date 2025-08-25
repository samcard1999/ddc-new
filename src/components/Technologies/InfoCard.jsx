import React from "react";

const InfoCard = ({ heading, text, image, alt, className }) => {
  return (
    <div className="relative w-full h-full rounded-2xl lg:rounded-3xl overflow-hidden">
      {/* Imagen */}
      <img
        src={image}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
      />
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/20 to-black/80"></div>
      {/* Contenido */}
      <div className="absolute top-0 left-0 p-4 text-white ">
        <h3 className="text-lg lg:text-4xl font-bold m-2 lg:m-6">{heading}</h3>
        <p className="lg:text-xl text-sm max-w-[90%] mx-2 lg:mx-6">{text}</p>
      </div>
    </div>
  );
};

export default InfoCard;
