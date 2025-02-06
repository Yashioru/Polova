"use client";

import React, { useEffect, useRef, useState } from "react";

const Part3 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const part1Ref = useRef(null);
  const [flipped, setFlipped] = useState(Array(6).fill(false));
  const [hasMounted, setHasMounted] = useState(false);

  const backTexts = [
    "Jsem Polák, který už přes 20 let žije a pohybuje se na česko-polském pomezí. Vzhledem k různým kontaktům a životním situacím neustále přepínám mezi českým a polským jazykem. Tak vypadá můj běžný den. Zde byla jeho císařská milost Císař Jakub I.",
    <>
      Nabízím tedy službu konsekutivního tlumočníka obou naších blízkých a
      zároveň dosti odlišných jazyků především v těchto nebo podobných
      situacích:
      <ul className="list-disc list-inside">
        <li>obchodní jednání,</li>
        <li>schůze jednatelů, nebo jiných činitelů,</li>
        <li>vystoupení na konferencích,</li>
        <li>vystoupení na různých veřejných akcích,</li>
        <li>potřeba tlumočení v různých životních záležitostech.</li>
      </ul>
    </>,
    "Jejích nedokonalé ovládání může způsobit, že na obchodní jednání, nebo i rande, přijdete s měsíčním zpožděním, když se domluvíte na květen a druhá strana bude skálopevně přesvědčená, že to měl být kwiecień, tedy duben.",
    "Konsekutivní tlumočení je druh tlumočení, kde po nějakém uceleném fragmentu vystoupení řečníka nebo partnera v jednáních, jej tlumočník opakuje v druhém jazyce. Nejde tedy o tlumočení souběžné se slovy řečníka, kterému se říká simultánní.",
    "Základní účtovací sazbou je půl pracovního dne, tedy 4 hodiny za 4.000,- Kč.(nejsem plátce DPH) ",
    "Mým sídlem je Ostrava, nicméně nabízím své služby po celém území ČR a Polska. Náklady na dopravu a příp. ubytování nejsou součásti ceny a jsou účtovány zvlášť. V případě dopravy vlastním autem se účtuje 15,- Kč/km. ",
  ];

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

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
  }, [hasMounted]);

  const handleFlip = (index) => {
    setFlipped((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  if (!hasMounted) {
    return null;
  }

  return (
    <div
      id="part3"
      ref={part1Ref}
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-auto h-auto bg-black pt-20">
        <h1
          className={`text-6xl md:text-5xl sm:text-4xl font-bold w-auto flex justify-center transform transition-transform duration-1000 ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          Tlumočení
        </h1>
        <div className="flex min-h-screen flex-col justify-center bg-black h-auto">
          <div className="flex flex-wrap justify-center font-serif">
            {["O mně", "Nabídka", "Chyby", "Typ", "Peníze", "Služby"].map(
              (word, index) => (
                <div
                  key={index}
                  className="group h-[560px] w-[450px] [perspective:1000px] m-4"
                  onClick={() => handleFlip(index)}
                >
                  <div
                    className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] ${
                      flipped[index] ? "[transform:rotateY(180deg)]" : ""
                    }`}
                  >
                    <div className="absolute inset-0">
                      <div className="bg-white h-full w-full rounded-xl object-cover shadow-xl shadow-white/40 flex items-center justify-center">
                        <img
                          src="/images/card.jpg"
                          alt={`Frontside of ${word}`}
                          className="h-full w-full rounded-xl object-cover"
                        />
                        <span className="text-4xl md:text-3xl sm:text-2xl absolute text-black">
                          {word}
                        </span>
                      </div>
                    </div>
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-white px-12 text-center text-black [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center">
                      <div className="font-serif text-2xl md:text-xl sm:text-lg">
                        <span>{backTexts[index]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part3;
