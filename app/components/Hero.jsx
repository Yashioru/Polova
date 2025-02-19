"use client";

import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
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

  useLayoutEffect(() => {
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
      className={`relative w-full h-screen bg-black flex items-center justify-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: 'url("/images/flag.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="absolute inset-0 bg-black dark:bg-gray-900 opacity-20 z-10"></div>
      <div className="relative w-full h-full z-20">
        <div className="absolute top-[20%] left-[4%] md:top-[20%] md:left-[12%] flex items-center justify-center font-bold text-black dark:text-black z-30">
          <div
            className={`hover:cursor-pointer font-serif font-bold text-2xl md:text-3xl lg:text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-black dark:text-black transform transition-transform duration-1000 text-center ${
              isVisible ? "translate-y-0" : "-translate-y-10"
            }`}
            onClick={() => scrollToSection("part1")}>
            Důvěrné Ucho
          </div>
        </div>
        <div className="absolute top-[30%] right-[10%] md:top-[30%] md:right-[17.5%] flex items-center justify-center font-bold text-black dark:text-white z-30">
          <div
            className={`hover:cursor-pointer font-serif font-bold text-2xl md:text-3xl lg:text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white transform transition-transform duration-1000 ${
              isVisible ? "translate-y-0" : "-translate-y-10"
            }`}
            onClick={() => scrollToSection("part2")}>
            Překlad
          </div>
        </div>
        <div className="absolute bottom-[25%] left-[9%] md:bottom-[24%] md:left-[16%] flex items-center justify-center font-bold text-black dark:text-white z-30">
          <div
            className={`hover:cursor-pointer font-serif font-bold text-2xl md:text-3xl lg:text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white transform transition-transform duration-1000 ${
              isVisible ? "translate-y-0" : "-translate-y-10"
            }`}
            onClick={() => scrollToSection("part3")}>
            Tlumočení
          </div>
        </div>
        <div className="absolute bottom-[15%] right-[10%] md:bottom-[12%] md:right-[17%] flex items-center justify-center font-bold text-black dark:text-white z-30">
          <div
            className={`hover:cursor-pointer font-serif font-bold text-2xl md:text-3xl lg:text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white transform transition-transform duration-1000 ${
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
