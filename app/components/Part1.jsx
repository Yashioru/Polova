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
      className={`mt-24 relative transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background:
          "linear-gradient(to right, white, var(--polish-red), var(--czech-red), var(--czech-blue))",
      }}>
      <div className="absolute inset-0 bg-black opacity-10"></div>{" "}
      {/* Add semi-transparent black overlay */}
      <div className="relative w-auto h-auto pb-12 px-4 sm:px-16">
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-bold w-auto flex justify-center pt-20 transform transition-transform duration-1000 text-white dark:text-white font-league-spartan ${
            isVisible ? "translate-y-0" : "-translate-y-10"
          }`}>
          Prostřednictví CZ &lt;=&gt; PL
        </h1>
        <div className="flex flex-col w-full sm:w-1/3 ml-0 sm:ml-[20%] mt-20 font-['League_Spartan'] text-xl sm:text-2xl md:text-4xl text-white dark:text-white">
          <h1 className="flex justify-center font-bold text-lg sm:text-xl md:text-2xl font-['League_Spartan']">
            Pomoc!
          </h1>
          <p className="font-league-spartan text-base sm:text-lg md:text-2xl">
            Stává se, že je třeba něco zařídit v té druhé z našich sousedních
            zemí, ale neznám jazyk, neznám zvyklosti, nevím, jak to tam chodí,
            anebo tam nemám stálé obchodní zastoupení. A příležitostně by se mi
            hodil někdo, kdo to ví, umí a může tam svobodně jednat mým jménem.
            Ať už jde o obchodní jednání, nebo pomoc s ním, úřední jednání nebo
            jen potřebuji něco v té druhé zemi sehnat …, v každé z těchto
            situací, a jim podobným, můžu a jsem ochoten Vám pomoci. Mám obojí
            státní občanství, tedy polské i české. V Polsku jsem vyrůstal a
            stále s ním udržuji vřelý kontakt. Během vysokoškolských studií jsem
            se přestěhoval do České republiky, kde žiji už 25 let, takže jsem
            tady zdomácněl. Sídlím v Ostravě, tedy v půli cesty mezi Prahou a
            Warszawou. O obou našich zemích říkám, že tady jsem u sebe :-){" "}
          </p>
        </div>
        <div className="w-auto flex justify-end">
          <div className="w-full sm:w-1/3 mr-0 sm:mr-[20%] mt-20 flex-col font-league-spartan text-base sm:text-lg md:text-2xl text-white dark:text-white">
            <h1 className="flex justify-center font-bold text-lg sm:text-xl md:text-2xl font-league-spartan">
              Proč já?
            </h1>
            Mám obojí státní občanství, tedy polské i české. V Polsku jsem
            vyrůstal a stále s ním udržuji vřelý kontakt. Během vysokoškolských
            studií jsem se přestěhoval do České republiky, kde žiji už 25 let,
            takže jsem tady zdomácněl. Sídlím v Ostravě, tedy v půli cesty mezi
            Prahou a Warszawou. O obou našich zemích říkám, že tady jsem u sebe
            :-){" "}
          </div>
        </div>
        <div className="flex flex-col w-full sm:w-1/3 ml-0 sm:ml-[20%] mt-20 font-league-spartan text-base sm:text-lg md:text-2xl text-white dark:text-white">
          <h1 className="flex justify-center font-bold text-lg sm:text-xl md:text-2xl font-league-spartan">
            A kolik to stoji?
          </h1>
          Je dvojí možnost - opět záleží na tom, jak se domluvíme: 750 Kč za
          hodinu věnovanou dané záležitosti nebo denní sazba: 5000 Kč za den
          věnovaný dané záležitosti (nejsem plátce DPH). Uvedené ceny jsou bez
          nákladů na cestu a případné ubytování. Ty se účtují zvlášť: cena
          dopravy vlastním autem: 15 Kč/km.
        </div>
        <div className="w-auto flex justify-end">
          <div className="w-full sm:w-1/3 mr-0 sm:mr-[20%] mt-20 flex-col font-league-spartan text-base sm:text-lg md:text-2xl text-white dark:text-white pb-20">
            <h1 className="flex justify-center font-bold text-lg sm:text-xl md:text-2xl font-league-spartan">
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
