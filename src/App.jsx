import FAQsSection from "./components/FAQsSection";
import FeaturesSection from "./components/FeaturesSection";
import GamesSection from "./components/GamesSection";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import WordsListSection from "./components/WordsListSection";
import WorkFlowSection from "./components/WorkFlowSection";

function App() {
  return (
    <div className="mx-auto max-w-[1232px] px-4">
      <NavBar />
      <HeroSection />
      <GamesSection />
      <FeaturesSection />
      <WordsListSection />
      <WorkFlowSection />
      <FAQsSection />
    </div>
  );
}

export default App;
