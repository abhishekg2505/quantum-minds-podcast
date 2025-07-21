import HeroSection from "@/src/components/knowYourHost/HeroSection";
import AnchorCards from "@/src/components/knowYourHost/AnchorCards";
import TuneIn from "@/src/components/knowYourHost/TuneIn";
import ConvergenceLayer from "@/src/components/knowYourHost/ConvergenceLayer";
import TucSection from "@/src/components/knowYourHost/TucSection";
import PublicSpeaker from "@/src/components/knowYourHost/PublicSpeaker";

export default function Home() {
  return (
    <main className="flex flex-col bg-background">
      <HeroSection />
      <AnchorCards />
      <ConvergenceLayer />
      <TuneIn />
      <TucSection />
      <PublicSpeaker />
      <div className="z-10 bg-background"></div>
    </main>
  );
}
