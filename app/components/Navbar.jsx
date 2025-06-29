"use client";

import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={` fixed top-0 w-full z-50 flex items-center justify-center h-16 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{
        background:
          "linear-gradient(to right, white, var(--polish-red), var(--czech-red), var(--czech-blue))",
        borderBottom: "2px solid black",
      }}>
      <div className="absolute inset-0 bg-black opacity-10"></div>{" "}
      {/* Add semi-transparent black overlay */}
      <ul className="relative flex justify-around items-center w-full text-center text-white text-lg font-league-spartan font-bold">
        <li>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}>
            <img
              src="/images/picodrat.png"
              alt="Logo"
              className="h-10 md:h-8"
            />
          </a>
        </li>
        <li>
          <a
            href="#part1"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("part3");
            }}>
            Tlumočení
          </a>
        </li>
        <li>
          <a
            href="#part2"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("part1");
            }}>
            Prostřednictví
          </a>
        </li>
        <li>
          <a
            href="#part3"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("part2");
            }}>
            Překladatelství
          </a>
        </li>
        <li>
          <a
            href="#part4"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("part4");
            }}>
            Kontakt
          </a>
        </li>
      </ul>
      <style jsx>{`
        @media (max-width: 768px) {
          nav ul {
            font-size: 0.75rem; /* Smaller font size */
            padding: 0 10px; /* Adjust padding */
          }
          nav ul li {
            margin: 0 5px; /* Adjust spacing */
          }
          nav img {
            height: 1.5rem; /* Smaller logo size */
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
