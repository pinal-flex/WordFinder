import FAQsSection from "../components/FAQsSection";
import FeaturesSection from "../components/FeaturesSection";
import GamesSection from "../components/GamesSection";
import HeroSection from "../components/HeroSection";
import WordsListSection from "../components/WordsListSection";
import WorkFlowSection from "../components/WorkFlowSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <GamesSection />
      <FeaturesSection />
      <WordsListSection />
      <WorkFlowSection />
      <FAQsSection />
    </>
  );
}
