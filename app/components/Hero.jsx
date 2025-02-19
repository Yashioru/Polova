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
      className={`relative w-full h-screen bg-black flex items-center justify-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: 'url("/images/flag.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="absolute inset-0 bg-black dark:bg-gray-900 opacity-20 z-10"></div>
      <div className="relative grid grid-cols-2 w-full h-full z-20">
        <div className=" flex items-center justify-center font-bold text-white dark:text-white z-30">
          <div
            className={`hover:cursor-pointer font-league-spartan font-bold text-3xl sm:text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white dark:text-white transform transition-transform duration-1000 text-center ${
              isVisible ? "translate-y-0" : "-translate-y-10"
            }`}
            onClick={() => scrollToSection("part1")}>
            Důvěrné Ucho
          </div>
        </div>
        <div className=" flex items-center justify-center font-bold text-white dark:text-white z-30">
          <div
            className={`top-1/3 ml-3 absolute hover:cursor-pointer font-league-spartan font-bold text-3xl sm:text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white transform transition-transform duration-1000 ${
              isVisible ? "translate-y-0" : "-translate-y-10"
            }`}
            onClick={() => scrollToSection("part2")}>
            Překlad
          </div>
        </div>
        <div className=" flex items-center justify-center font-bold text-black dark:text-white z-30">
          <div
            className={`hover:cursor-pointer font-league-spartan font-bold text-3xl sm:text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white transform transition-transform duration-1000 ${
              isVisible ? "translate-y-0" : "-translate-y-10"
            }`}
            onClick={() => scrollToSection("part3")}>
            Tlumočení
          </div>
        </div>
        <div className=" flex items-center justify-center font-bold text-black dark:text-white z-30">
          <div
            className={`absolute bottom-[12%] ml-3 hover:cursor-pointer font-league-spartan font-bold text-3xl sm:text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white transform transition-transform duration-1000 ${
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
