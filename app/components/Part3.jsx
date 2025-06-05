"use client";

import React, { useEffect, useRef, useState } from "react";

const Part3 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const part1Ref = useRef(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isFading, setIsFading] = useState(false); // New state for fading animation

  const texts = [
    "Jsem Polák, který už přes 20 let žije a pohybuje se na česko-polském pomezí. Nabízím tedy službu konsekutivního tlumočníka obou naších blízkých a zároveň dosti odlišných jazyků.Jejích nedokonalé ovládání může způsobit, že na obchodní jednání, nebo i rande, přijdete s měsíčním zpožděním.",
    "Konsekutivní tlumočení je druh tlumočení, kde po nějakém uceleném fragmentu vystoupení řečníka nebo partnera v jednáních, jej tlumočník opakuje v druhém jazyce.",
    "Základní účtovací sazbou je půl pracovního dne, tedy 4 hodiny za 4.000,- Kč.Mým sídlem je Ostrava, nicméně nabízím své služby po celém území ČR a Polska.",
  ];

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

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setIsFading(false);
    }, 500); // Duration of the fade-out animation
  };

  const handlePrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentTextIndex(
        (prevIndex) => (prevIndex - 1 + texts.length) % texts.length
      );
      setIsFading(false);
    }, 500); // Duration of the fade-out animation
  };

  return (
    <div
      id="part3"
      ref={part1Ref}
      className={`pb-20 relative transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background:
          "linear-gradient(to right, white, var(--polish-red), var(--czech-red), var(--czech-blue))",
      }}>
      <div className="absolute inset-0 bg-black opacity-10"></div>{" "}
      {/* Add semi-transparent black overlay */}
      <div className="relative w-auto h-screen pb-[30rem]">
        <h1
          className={`text-6xl font-bold w-auto flex justify-center transform transition-transform duration-1000 text-white dark:text-white font-['League_Spartan']  ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          }`}>
          Tlumočení
        </h1>
        <div className="flex justify-center mt-8">
          <div className="p-8 w-full h-[20vw] relative flex items-center justify-center ">
            <button
              onClick={handlePrev}
              className="absolute right-3/4 top-[16rem] transform -translate-y-1/2
              bg-white rounded-full p-2 h-10 w-10 text-black md:right-3/4 md:top-[13.5rem]">
              {" "}
              &lt;
            </button>
            <div
              className={`text-center w-1/2 text-white text-2xl font-['League_Spartan'] transition-opacity duration-500 ${
                isFading ? "opacity-0" : "opacity-100"
              } pt-[40rem] md:pt-[10rem] md:text-xl`}>
              {texts[currentTextIndex]}
            </div>
            <button
              onClick={handleNext}
              className="absolute left-3/4 top-[16rem] transform -translate-y-1/2
              bg-white rounded-full p-2 h-10 w-10 text-black md:right-3/4 md:top-[13.5rem]">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;
