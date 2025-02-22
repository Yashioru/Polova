import Hero from "./components/Hero";
import Part1 from "./components/Part1";
import Part2 from "./components/Part2";
import Part3 from "./components/Part3";
import Part4 from "./components/Part4";

export default function Home() {
  return (
    <div>
      <div className="w-full h-[4vw] bg-white flex items-center justify-center">
        <img src="/images/picodrat.png" alt="Logo" className="h-1/2" />
      </div>
      <div className="w-full h-[0.35vw] bg-black"></div>
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
