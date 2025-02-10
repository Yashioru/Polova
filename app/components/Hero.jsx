"use client";

import React, { useEffect, useRef, useState } from "react";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";
import Part4 from "./Part4";

const scrollToSection = (sectionId) => {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className={`relative w-full h-screen bg-gray-800 flex items-center justify-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}>
      <div className="absolute inset-0 bg-black dark:bg-gray-900 opacity-20 z-10"></div>
      <div className="relative grid grid-cols-2 w-full h-full z-20">
        <div className="bg-white dark:bg-gray-800 flex items-center justify-center font-bold text-black dark:text-white z-30">
          <div
            className={`hover:cursor-pointer font-serif font-bold text-3xl sm:text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-black transform transition-transform duration-1000 text-center ${
              isVisible ? "translate-y-0" : "-translate-y-10"
            }`}
            onClick={() => scrollToSection("part1")}>
            Důvěrné Ucho
          </div>
        </div>
        <div className="bg-czech-red flex items-center justify-center font-bold text-black dark:text-white z-30">
          <div
            className={`hover:cursor-pointer font-serif font-bold text-3xl sm:text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white transform transition-transform duration-1000 ${
              isVisible ? "translate-y-0" : "-translate-y-10"
            }`}
            onClick={() => scrollToSection("part2")}>
            Překlad
          </div>
        </div>
        <div className="bg-polish-red flex items-center justify-center font-bold text-black dark:text-white z-30">
          <div
            className={`hover:cursor-pointer font-serif font-bold text-3xl sm:text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white transform transition-transform duration-1000 ${
              isVisible ? "translate-y-0" : "-translate-y-10"
            }`}
            onClick={() => scrollToSection("part3")}>
            Tlumočení
          </div>
        </div>
        <div className="bg-czech-blue flex items-center justify-center font-bold text-black dark:text-white z-30">
          <div
            className={`hover:cursor-pointer font-serif font-bold text-3xl sm:text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white transform transition-transform duration-1000 ${
              isVisible ? "translate-y-0" : "-translate-y-10"
            }`}
            onClick={() => scrollToSection("part4")}>
            Kontakt
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
