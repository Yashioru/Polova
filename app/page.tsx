import Hero from "./components/Hero";
import Part1 from "./components/Part1";
import Part2 from "./components/Part2";
import Part3 from "./components/Part3";
import Part4 from "./components/Part4";
import Navbar from "./components/Navbar"; // Import Navbar component

export default function Home() {
  return (
    <div className="pt-16">
      {" "}
      {/* Add padding to the top */}
      <Navbar /> {/* Add Navbar component */}
      <div id="hero">
        <Hero />
      </div>
      <div id="part3">
        <Part3 />
      </div>
      <div id="part1">
        <Part1 />
      </div>
      <div id="part2">
        <Part2 />
      </div>
      <div id="part4">
        <Part4 />
      </div>
    </div>
  );
}
