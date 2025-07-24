import type { Metadata } from "next";
import HeroSection from "@/src/components/knowYourHost/HeroSection";
import AnchorCards from "@/src/components/knowYourHost/AnchorCards";
import TuneIn from "@/src/components/knowYourHost/TuneIn";
import ConvergenceLayer from "@/src/components/knowYourHost/ConvergenceLayer";
import TucSection from "@/src/components/knowYourHost/TucSection";
import PublicSpeaker from "@/src/components/knowYourHost/PublicSpeaker";
import { aboutKapilDhimanMetadata } from "@/src/constants/metadata";
import quraniumPreview from "../../../public/images/quraniumPreview.png";
import InMedia from "@/src/components/knowYourHost/InMedia";
export const metadata: Metadata = {
  title: {
    default: aboutKapilDhimanMetadata.title,
    template: `%s | ${aboutKapilDhimanMetadata.title}`,
  },
  metadataBase: new URL(aboutKapilDhimanMetadata.siteUrl),
  description: aboutKapilDhimanMetadata.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: aboutKapilDhimanMetadata.siteUrl,
    title: aboutKapilDhimanMetadata.title,
    description: aboutKapilDhimanMetadata.description,
    siteName: aboutKapilDhimanMetadata.title,
    images: [
      {
        width: 1200,
        height: 630,
        url: `${quraniumPreview.src}`,
        alt: aboutKapilDhimanMetadata.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: aboutKapilDhimanMetadata.title,
    description: aboutKapilDhimanMetadata.description,
    images: [`${quraniumPreview.src}`],
  },
};
export default function Home() {
  return (
    <main className="flex flex-col bg-background">
      <HeroSection />
      <AnchorCards />
      <InMedia />
      <ConvergenceLayer />
      <TuneIn />
      <TucSection />
      <PublicSpeaker />
      <div className="z-10 bg-background"></div>
    </main>
  );
}
