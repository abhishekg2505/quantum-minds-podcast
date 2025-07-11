import WhyConvergence from "@/src/components/awareness/WhyConvergence";
import HeroSection from "@/src/components/dequip/HeroSection";
import VideoSection from "@/src/components/awareness/VideoSection";
import QuantumThreat from "@/src/components/awareness/QuantumThreat";
import UncrackableConversations from "@/src/components/awareness/UncrackableConversation";
import Calendars from "@/src/components/awareness/Calendars";
import Movement from "@/src/components/dequip/Movement";
import DequipAlliance from "@/src/components/dequip/DequipAlliance";
import { dequipMetaData } from "@/src/constants/metadata";
import quraniumPreview from "../../../public/images/quraniumPreview.png";

export const metadata = {
  title: {
    default: dequipMetaData.title,
    template: `%s | ${dequipMetaData.title}`,
  },
  description: dequipMetaData.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: dequipMetaData.url,
    title: dequipMetaData.title,
    description: dequipMetaData.description,
    siteName: dequipMetaData.title,
    images: [
      {
        width: 1200,
        height: 630,
        url: `${quraniumPreview.src}?_=44fc893`,
        alt: dequipMetaData.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: dequipMetaData.title,
    description: dequipMetaData.description,
    images: [`${quraniumPreview.src}?_=44fc893`],
  },
};
export default function Dequip() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <HeroSection />
      <DequipAlliance />
      <Movement />
      {/* <WhyConvergence />
      <VideoSection />
      <QuantumThreat />
      <UncrackableConversations />
      <Calendars /> */}
    </main>
  );
}
