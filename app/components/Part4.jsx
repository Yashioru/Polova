"use client";

import React, { useEffect, useRef, useState } from "react";

const Part4 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const part1Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (part1Ref.current) {
      observer.observe(part1Ref.current);
    }

    return () => {
      if (part1Ref.current) {
        observer.unobserve(part1Ref.current);
      }
    };
  }, []);

  return (
    <div
      id="part4"
      ref={part1Ref}
      className={`relative transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background:
          "linear-gradient(to right, white, var(--polish-red), var(--czech-red), var(--czech-blue))",
      }}>
      <div className="absolute inset-0 bg-black opacity-10"></div>{" "}
      {/* Add semi-transparent black overlay */}
      <div className="relative w-auto h-auto pt-12 pb-12">
        <h1
          className={`text-6xl font-bold w-auto flex justify-center transform transition-transform duration-1000 text-white dark:text-white font-['League_Spartan'] ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          }`}>
          Kontakt
        </h1>
        <p className="text-white dark:text-white">Yo</p>
      </div>
    </div>
  );
};

export default Part4;
