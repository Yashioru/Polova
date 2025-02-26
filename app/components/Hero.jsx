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
      }}
    >
      <div className="absolute inset-0 bg-black dark:bg-gray-900 opacity-20 z-10"></div>
      <div className="relative grid w-full h-full z-20">
        <div className="absolute bg-white w-60 h-60 flex top-[44%] left-[44.7%] border-4 border-black rounded-full z-40">
          <div className="relative top-20">
            <img
              src="/images/picodrat.png"
              alt="Logo"
              className="relative z-50 w-40 top-3 left-10"
            />
          </div>
        </div>
        <div
          className="absolute top-0 left-0 w-[50.75%] h-[43.6%] flex items-center justify-center font-bold text-white dark:text-white z-30 group hover:cursor-pointer"
          onClick={() => scrollToSection("part3")}
        >
          <div
            className={`font-league-spartan font-bold text-3xl sm:text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white dark:text-white transform transition-transform duration-1000 text-center flex items-center justify-center z-40 ${
              isVisible ? "translate-y-0" : "-translate-y-10"
            }`}
          >
            Tlumočení
          </div>
          <img
            src="/images/hln.png"
            alt="Tlumočení"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
          />
        </div>
        <div
          className="absolute top-0 right-0 w-[48.8%] h-[69.7%] flex items-center justify-center font-bold text-white dark:text-white z-30 group hover:cursor-pointer"
          onClick={() => scrollToSection("part2")}
        >
          <div
            className={`font-league-spartan font-bold text-3xl sm:text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white transform transition-transform duration-1000 text-center flex items-center justify-center z-40 ${
              isVisible ? "translate-y-0" : "-translate-y-10"
            }`}
          >
            Překlad
          </div>
          <img
            src="/images/ns.png"
            alt="Překlad"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
          />
        </div>
        <div
          className="absolute bottom-0 left-0 w-[50.8%] h-[55.5%] flex items-center justify-center font-bold text-black dark:text-white z-30 group hover:cursor-pointer"
          onClick={() => scrollToSection("part1")}
        >
          <div
            className={`font-league-spartan font-bold text-3xl sm:text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white transform transition-transform duration-1000 text-center flex items-center justify-center z-40 ${
              isVisible ? "translate-y-0" : "-translate-y-10"
            }`}
          >
            Důvěrné Ucho
          </div>
          <img
            src="/images/nk.png"
            alt="Důvěrné Ucho"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
          />
        </div>
        <div
          className="absolute bottom-0 right-0 w-[48.7%] h-[29.5%] flex items-center justify-center font-bold text-black dark:text-white z-30 group hover:cursor-pointer"
          onClick={() => scrollToSection("part4")}
        >
          <div
            className={`font-league-spartan font-bold text-3xl sm:text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-white transform transition-transform duration-1000 text-center flex items-center justify-center z-40 ${
              isVisible ? "translate-y-0" : "-translate-y-10"
            }`}
          >
            Kontakt
          </div>
          <img
            src="/images/nv.png"
            alt="Kontakt"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
