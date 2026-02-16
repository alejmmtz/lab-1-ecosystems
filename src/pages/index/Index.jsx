import AnimeList from "./components/AnimeList.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";

import HeroSection from "./components/HeroSection.jsx";
import NavBar from "./components/NavBar.jsx";

export default function Index() {
  return (
    <div className="bg-[#ffffff]">
      <NavBar />
      <div className="w-full flex">
        <div className="p-4 w-8/12 ">
          <Hero />
        </div>
        <div className="w-4/12 py-4">
          <HeroSection />
        </div>
      </div>

      <AnimeList />
      <Footer />
    </div>
  );
}
