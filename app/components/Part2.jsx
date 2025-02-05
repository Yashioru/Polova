"use client";

import React, { useEffect, useRef, useState } from "react";

const Part2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const part2Ref = useRef(null);
  const [isMenuOpen1, setIsMenuOpen1] = useState(false);
  const [isMenuOpen2, setIsMenuOpen2] = useState(false);

  const toggleMenu1 = () => {
    setIsMenuOpen1(!isMenuOpen1);
  };
  const toggleMenu2 = () => {
    setIsMenuOpen2(!isMenuOpen2);
  };

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

    if (part2Ref.current) {
      observer.observe(part2Ref.current);
    }

    return () => {
      if (part2Ref.current) {
        observer.unobserve(part2Ref.current);
      }
    };
  }, []);

  return (
    <div
      id="part2"
      ref={part2Ref}
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-full h-auto bg-slate-500">
        <h1 className="text-6xl font-bold w-auto flex justify-center">
          Překladatelství
        </h1>
        <div className="h-px bg-white w-1/2 absolute  right-1/4 "></div>
        <div className="flex justify-center w-screen pt-10">
          <button
            onClick={toggleMenu1}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {isMenuOpen1 ? "-" : "+"}
          </button>
          {isMenuOpen1 && (
            <p className="flex justify-center content-center w-1/2 font-serif text-xl">
              Překladům textů z českého do polského jazyka, a naopak, se věnuji
              od roku 1999. Jako rodilý mluvčí polského jazyka, který absolvoval
              vysokoškolská studia v České republice, se od té doby neustále
              pohybuji v oboujazyčném prostředí. Překládal jsem snad již všechny
              druhy textů, jako např.:
            </p>
          )}
          <button
            onClick={toggleMenu2}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {isMenuOpen1 ? "Hide List" : "Show List"}
          </button>
          {isMenuOpen2 && (
            <ul>
              <li>- osobní korespondenci</li>
              <li>- návody k obsluze různých zařízení</li>
              <li>- projektovou a výrobní dokumentaci </li>
              <li>- obchodní smlouvy</li>
              <li>- obchodní korespondenci</li>
              <li>- resumé akademických práci</li>
              <li>- diplomové práce </li>
              <li>- veřejné listiny (bez razítka soudního překladatele)</li>
              <li>- webové stránky</li>
              <li>- e-shopy</li>
              <li>- cestovní materiály</li>
              <li>- učebnice a pracovní listy</li>
              <li>- dokumentaci projektů a grantů z fondů EU</li>
              <li>- zdravotnickou dokumentaci</li>
              <li>- materiály týkající se lázeňské péče </li>
              <li>- propagační materiály </li>
              <li>- texty pro časopisy</li>
              <li>- a mnoho jiných</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Part2;
