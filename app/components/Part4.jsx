"use client";

import React, { useEffect, useRef, useState } from "react";

const Part4 = () => {
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
      id="part4"
      ref={part1Ref}
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-full h-screen bg-blue-800">
        <h1 className="text-6xl font-bold w-auto flex justify-center">
          Kontakt
        </h1>
        <p>Yo</p>
      </div>
    </div>
  );
};

export default Part4;
