import About from "./components/About";
import LandingPage from "./components/LandingPage";
import { Marquee } from "./components/marquee";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div className="w-screen h-screen bg-[#F1F1F1]">
      <NavBar />
      <LandingPage />
      <Marquee />
      <About />
    </div>
  );
}
