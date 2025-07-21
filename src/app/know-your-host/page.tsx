import HeroSection from "@/src/components/knowYourHost/HeroSection";
import AnchorCards from "@/src/components/knowYourHost/AnchorCards";
import TuneIn from "@/src/components/knowYourHost/TuneIn";
import ConvergenceLayer from "@/src/components/knowYourHost/ConvergenceLayer";
import TucSection from "@/src/components/knowYourHost/TucSection";

export default function Home() {
  return (
    <main className="flex flex-col bg-background">
      <HeroSection />
      <AnchorCards />
      <ConvergenceLayer />
      <TuneIn />
      <TucSection />
      <div className="z-10 bg-background"></div>
    </main>
  );
}
