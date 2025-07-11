import WhyConvergence from "@/src/components/awareness/WhyConvergence";
import HeroSection from "@/src/components/awareness/HeroSection";
import QuantumThreat from "@/src/components/awareness/QuantumThreat";
import UncrackableConversations from "@/src/components/awareness/UncrackableConversation";
import Calendars from "@/src/components/awareness/Calendars";
import { AwarenessMetaData } from "@/src/constants/metadata";
import quraniumPreview from "../../../public/images/quraniumPreview.png";

export const metadata = {
  title: {
    default: AwarenessMetaData.title,
    template: `%s | ${AwarenessMetaData.title}`,
  },
  description: AwarenessMetaData.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: AwarenessMetaData.url,
    title: AwarenessMetaData.title,
    description: AwarenessMetaData.description,
    siteName: AwarenessMetaData.title,
    images: [
      {
        width: 1200,
        height: 630,
        url: `${quraniumPreview.src}?_=44fc893`,
        alt: AwarenessMetaData.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: AwarenessMetaData.title,
    description: AwarenessMetaData.description,
    images: [`${quraniumPreview.src}?_=44fc893`],
  },
};

export default function Technical() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <HeroSection />
      <WhyConvergence />
      <QuantumThreat />
      <UncrackableConversations />
      <Calendars />
    </main>
  );
}
