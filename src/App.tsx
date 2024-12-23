import About from "./components/About";
import Eyes from "./components/Eyes";
import FeaturedPage from "./components/FeaturedPage";
import LandingPage from "./components/LandingPage";
import { Marquee } from "./components/Marquee";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div className="w-screen min-h-screen bg-[#F1F1F1]">
      <NavBar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <FeaturedPage />
    </div>
  );
}
