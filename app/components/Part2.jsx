"use client";

import React, { useEffect, useRef, useState } from "react";

const Part2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const part2Ref = useRef(null);

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
      <div className="w-full h-screen bg-green-800">
        <h1 className="text-6xl font-bold w-full flex justify-center">Mapa</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque
          ipsum. Vestibulum fermentum tortor id mi. Mauris dictum facilisis
          augue. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Integer pellentesque quam vel velit. Etiam commodo dui
          eget wisi. Mauris elementum mauris vitae tortor. Pellentesque pretium
          lectus id turpis. Nullam faucibus mi quis velit. Temporibus autem
          quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          Donec iaculis gravida nulla. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. Duis condimentum augue id magna semper rutrum. Etiam quis
          quam. Mauris tincidunt sem sed arcu. Etiam ligula pede, sagittis quis,
          interdum ultricies, scelerisque eu. Aliquam erat volutpat. In sem
          justo, commodo ut, suscipit at, pharetra vitae, orci. Curabitur
          bibendum justo non orci. Sed elit dui, pellentesque a, faucibus vel,
          interdum nec, diam. Nullam eget nisl. Praesent vitae arcu tempor neque
          lacinia pretium. Duis viverra diam non justo. Cras elementum. Itaque
          earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat.
        </p>
      </div>
    </div>
  );
};

export default Part2;
