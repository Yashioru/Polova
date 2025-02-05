import React from "react";

const scrollToSection = (sectionId) => {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  return (
    <div className="w-full h-screen bg-gray-800 flex items-center justify-center">
      <div>
        <div className="grid grid-cols-2 top-0 left-0 right-0 bottom-0 absolute">
          <div className=" bg-white flex items-center justify-center font-bold text-black">
            <div onClick={() => scrollToSection("part1")}>Informace</div>
          </div>
          <div className=" bg-blue-600 flex items-center justify-center font-bold text-black">
            <div onClick={() => scrollToSection("part2")}>MAPA</div>
          </div>
          <div className=" bg-red-600 flex items-center justify-center font-bold text-black">
            <div onClick={() => scrollToSection("part3")}>IDK</div>
          </div>
          <div className=" bg-white flex items-center justify-center font-bold text-black">
            <div onClick={() => scrollToSection("part4")}>KONTAKT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
