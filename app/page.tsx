import Image from "next/image";
import Hero from "./components/Hero";
import Part1 from "./components/Part1";
import Part2 from "./components/Part2";
import Part3 from "./components/Part3";
import Part4 from "./components/Part4";

export default function Home() {
  return (
    <div>
      <div>
        <Hero />
        <Part1 />
        <Part2 />
        <Part3 />
        <Part4 />
      </div>
    </div>
  );
}
