"use client";

import React, { useEffect, useRef, useState } from "react";

const Part2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const part2Ref = useRef(null);
  const [isMenuOpen1, setIsMenuOpen1] = useState(false);
  const [isMenuOpen2, setIsMenuOpen2] = useState(false);
  const [isMenuOpen3, setIsMenuOpen3] = useState(false);
  const [isMenuOpen4, setIsMenuOpen4] = useState(false);

  const toggleMenu1 = () => {
    setIsMenuOpen1(!isMenuOpen1);
    setIsMenuOpen2(false);
    setIsMenuOpen3(false);
    setIsMenuOpen4(false);
  };
  const toggleMenu2 = () => {
    setIsMenuOpen2(!isMenuOpen2);
    setIsMenuOpen1(false);
    setIsMenuOpen3(false);
    setIsMenuOpen4(false);
  };
  const toggleMenu3 = () => {
    setIsMenuOpen3(!isMenuOpen3);
    setIsMenuOpen1(false);
    setIsMenuOpen2(false);
    setIsMenuOpen4(false);
  };
  const toggleMenu4 = () => {
    setIsMenuOpen4(!isMenuOpen4);
    setIsMenuOpen1(false);
    setIsMenuOpen2(false);
    setIsMenuOpen3(false);
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

  useEffect(() => {
    if (isMenuOpen1) {
      setIsMenuOpen2(false);
      setIsMenuOpen3(false);
      setIsMenuOpen4(false);
    }
  }, [isMenuOpen1]);

  useEffect(() => {
    if (isMenuOpen2) {
      setIsMenuOpen1(false);
      setIsMenuOpen3(false);
      setIsMenuOpen4(false);
    }
  }, [isMenuOpen2]);

  useEffect(() => {
    if (isMenuOpen3) {
      setIsMenuOpen1(false);
      setIsMenuOpen2(false);
      setIsMenuOpen4(false);
    }
  }, [isMenuOpen3]);

  useEffect(() => {
    if (isMenuOpen4) {
      setIsMenuOpen1(false);
      setIsMenuOpen2(false);
      setIsMenuOpen3(false);
    }
  }, [isMenuOpen4]);

  return (
    <div
      id="part2"
      ref={part2Ref}
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-full h-auto bg-black p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
        <h1
          className={`text-3xl sm:text-4xl md:text-5xl font-bold w-auto flex transform transition-transform duration-1000 font-serif ${
            isVisible ? "translate-y-0" : "-translate-y-20"
          }`}
        >
          Překladatelství
        </h1>
        <div className="flex font-serif text-3xl justify-start flex-col items-start mt-8">
          <div className="h-px bg-white w-full mb-4"></div>
          <button
            onClick={toggleMenu1}
            className="flex justify-between w-full p-4 text-white"
          >
            <div className="text-3xl">Co bys měl o mě vědět</div>
            {isMenuOpen1 ? "-" : "+"}
          </button>
          <div
            className={`font-serif text-xl mt-2 transition-all duration-1000 overflow-hidden ${
              isMenuOpen1 ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div
              className={`transition-opacity duration-1000 ${
                isMenuOpen1 ? "opacity-100" : "opacity-0"
              }`}
            ></div>
            <p className="p-4">
              Překladům textů z českého do polského jazyka, a naopak, se věnuji
              od roku 1999. Jako rodilý mluvčí polského jazyka, který absolvoval
              vysokoškolská studia v České republice, se od té doby neustále
              pohybuji v oboujazyčném prostředí. Překládal jsem snad již všechny
              druhy textů.
            </p>
          </div>
        </div>
        <div className="flex font-serif text-3xl justify-start flex-col items-start">
          <div className="h-px bg-white w-full mb-4 mt-4"></div>
          <button
            onClick={toggleMenu2}
            className="flex justify-between w-full p-4 text-white"
          >
            <div className="text-3xl">Co vše dokážu přeložit</div>
            {isMenuOpen2 ? "-" : "+"}
          </button>
          <div
            className={`font-serif text-xl mt-2 transition-all duration-1000 overflow-hidden ${
              isMenuOpen2 ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div
              className={`transition-opacity duration-1000 ${
                isMenuOpen2 ? "opacity-100" : "opacity-0"
              }`}
            >
              <ul className="p-4 list-disc list-inside flex flex-col">
                <li>osobní korespondenci</li>
                <li>návody k obsluze různých zařízení</li>
                <li>projektovou a výrobní dokumentaci</li>
                <li>obchodní smlouvy</li>
                <li>obchodní korespondenci</li>
                <li>resumé akademických práci</li>
                <li>diplomové práce</li>
                <li>veřejné listiny (bez razítka soudního překladatele)</li>
                <li>webové stránky</li>
                <li>e-shopy</li>
                <li>cestovní materiály</li>
                <li>učebnice a pracovní listy</li>
                <li>dokumentaci projektů a grantů z fondů EU</li>
                <li>zdravotnickou dokumentaci</li>
                <li>materiály týkající se lázeňské péče</li>
                <li>propagační materiály</li>
                <li>texty pro časopisy</li>
                <li>a mnoho jiných</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex font-serif text-3xl justify-start flex-col items-start">
          <div className="h-px bg-white w-full mb-4 mt-4"></div>
          <button
            onClick={toggleMenu3}
            className="flex justify-between w-full p-4 text-white"
          >
            <div className="text-3xl">Moje služby</div>
            {isMenuOpen3 ? "-" : "+"}
          </button>
          <div
            className={`font-serif text-xl mt-2 transition-all duration-1000 overflow-hidden ${
              isMenuOpen3 ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div
              className={`transition-opacity duration-1000 ${
                isMenuOpen3 ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="p-4 font-serif">
                <p>
                  Sídlím v Ostravě, nicméně vzhledem k výhodám internetové
                  komunikace nabízím své služby po celém území ČR. Mailový
                  kontakt najdete zde.
                </p>
                <p>
                  Obvyklá výkonnost překladatele je 8 až 10 stránek textu na
                  den, proto běžně je třeba počítat s dobou vyhotovení překladu
                  v rozsahu 3 až 5 dnů.
                </p>
                <p>Cena za překlad je 350,- Kč za NS. (nejsem plátce DPH)</p>
                <p>
                  NS - normostrana je 1800 znaků výsledného textu vč. mezer a
                  interpunkčních znaků.
                </p>
                <p>
                  NS - normostrana je 1800 znaků výsledného textu vč. mezer a
                  interpunkčních znaků.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex font-serif text-3xl justify-start flex-col items-start">
          <div className="h-px bg-white w-full mb-4 mt-4"></div>
          <button
            onClick={toggleMenu4}
            className="flex justify-between w-full p-4 text-white"
          >
            <div className="text-3xl">Slovníček</div>
            {isMenuOpen4 ? "-" : "+"}
          </button>
          <div
            className={`w-full font-serif text-xl mt-2 transition-all duration-1000 overflow-hidden ${
              isMenuOpen4 ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div
              className={`transition-opacity duration-1000 ${
                isMenuOpen4 ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="p-4">
                <li>jak jdou měsíce česky? - leden, únor, březen…</li>
                <li>a polsky? - styczeń, luty, marzec…</li>
                <li>a po naszymu?… - piyrszy, drugi, trzečí…</li>
              </p>
            </div>
          </div>
        </div>
        <div className="h-px bg-white w-full mb-4 mt-4"></div>
      </div>
    </div>
  );
};

export default Part2;
