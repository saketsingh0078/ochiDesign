import About from "./components/About";
import Eyes from "./components/Eyes";
import FeaturedPage from "./components/FeaturedPage";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import { Marquee } from "./components/Marquee";
import NavBar from "./components/NavBar";
import Playful from "./components/Playful";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-[#F1F1F1] main">
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
