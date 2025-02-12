"use client";

import React, { useEffect, useRef, useState } from "react";

const Part1 = () => {
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
      id="part1"
      ref={part1Ref}
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}>
      <div className="w-auto h-auto bg-black dark:bg-black pt-12 pb-12">
        <h1
          className={`text-6xl font-bold w-auto flex justify-center pt-20 transform transition-transform duration-1000 text-white dark:text-white ${
            isVisible ? "translate-y-0" : "-translate-y-10"
          }`}>
          Důvěrné Ucho
        </h1>
        <div className="flex flex-col w-full sm:w-1/3 ml-0 sm:ml-[20%] mt-20 font-serif text-4xl text-white dark:text-gray-200">
          <h1 className="flex justify-center font-bold text-2xl font-serif">
            Pomoc!
          </h1>
          <p className="font-serif text-2xl">
            Přicházejí někdy chvíle, kdy se potřebujeme zastavit, reflektovat,
            prostě říct někomu co se v nás děje a tím si také ujasnit spoustu
            věci. Chceme slyšet názor někoho jiného, neangažovaného abychom sami
            v sobě dopracovali svůj vlastní postoj čí získali orientaci v sobě
            samotných. Není to na psychoterapeuta nebo psychologa ale spíš na
            „důvěrné ucho“, anebo abychom se ujistili čí přesvědčili, že odborná
            pomoc bude přece pro nás přínosná.{" "}
          </p>
        </div>
        <div className="w-auto flex justify-end">
          <div className="w-full sm:w-1/3 mr-0 sm:mr-[20%] mt-20 flex-col font-serif text-2xl text-white dark:text-white">
            <h1 className="flex justify-center font-bold text-2xl font-serif">
              Vzdělání!
            </h1>
            Přes dvacet let doprovázel jsem spousty lidi v jejích velice různých
            životních situacích, v podstatě od začátku do konce lidského
            pobývání na tomto světě - jako duchovní, pak se moje cesta s
            institucionální vírou rozešla a vydal jsem se na cestu individuální
            a jsem za to rád. Filozofii, theologii, psychologii a pedagogiku
            jsem studoval na fakultách ve Varšavě, Krakově a Olomouci a
            postgraduální studium jsem absolvovat na Opolské univerzitě.{" "}
          </div>
        </div>
        <div className="flex flex-col w-full sm:w-1/3 ml-0 sm:ml-[20%] mt-20 font-serif text-2xl text-white dark:text-white">
          <h1 className="flex justify-center font-bold text-2xl font-serif">
            Věrit!
          </h1>
          Stále jsou mi ale blízké judeo-křesťanské hodnoty a řecko-římský
          způsob uvažování, ostatně je to základ celé naší evropské kultury, ale
          už ne ve formální podobě, nýbrž spíše jako osobitá rozhodnutí
          jednotlivce v konkrétních životních situacích, s úctou k sobě
          samotnému, k druhému, k okolnímu světu a třeba také k Absolutnu, vždy
          však s ohledem na well-being.
        </div>
        <div className="w-auto flex justify-end">
          <div className="w-full sm:w-1/3 mr-0 sm:mr-[20%] mt-20 flex-col font-serif text-2xl text-white dark:text-white pb-20">
            <h1 className="flex justify-center font-bold text-2xl font-serif">
              Nebát se!
            </h1>
            Pokud cítíte, vnímáte, že o takové „důvěrné ucho“ stojíte, neváhejte
            mě kontaktovat :-) podrobnosti si pak sdělíme během mailové
            komunikace.{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;
