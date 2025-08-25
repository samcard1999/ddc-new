import React, { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import gsap from "gsap";

const TestimonialCard = ({
  name,
  role,
  photo,
  rating = 5,
  review,
  className = "",
  animateOnView = false,
  moveDown = false,
  // 🔹 booleano para activar animación
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!animateOnView || !cardRef.current) return;

    const el = cardRef.current;

    // Estado inicial (fuera de vista arriba)
    gsap.set(el, { opacity: 0, y: -100 });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(el, {
            opacity: 1,
            y: moveDown ? "23.7%" : 0,
            duration: 1,
            ease: "power3.out",
          });
          observer.disconnect(); // 🔹 solo animar una vez
        }
      },
      { threshold: 0.2 } // cuando el 20% del elemento sea visible
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [animateOnView]);

  return (
    <div
      ref={cardRef}
      className={`z-10 max-w-md bg-white rounded-xl p-4 shadow-[0px_4px_20px_rgba(0,0,0,0.08)] ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={photo}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <span className="text-sm font-semibold text-gray-700">{rating}</span>
          <Star className="w-5 h-5 text-indigo-500 fill-indigo-500" />
        </div>
      </div>

      {/* Review */}
      <p className="mt-3 text-gray-700 italic">"{review}"</p>
    </div>
  );
};

export default TestimonialCard;
