import { useEffect, useRef } from "react";
import About from "./components/About";
import Eyes from "./components/Eyes";
import FeaturedPage from "./components/FeaturedPage";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import { Marquee } from "./components/Marquee";
import NavBar from "./components/NavBar";
import Playful from "./components/Playful";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function App() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let locoScroll: LocomotiveScroll | undefined;

    if (scrollRef.current) {
      locoScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });
    }

    // Cleanup to avoid memory leaks
    return () => {
      if (locoScroll) locoScroll.destroy();
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#F1F1F1]">
      <NavBar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <FeaturedPage />
      <Playful />
      <Footer />
    </div>
  );
}
