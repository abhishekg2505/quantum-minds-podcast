import AnchorCards from "@/src/components/resources/AnchorCards";
import HeroSection from "@/src/components/resources/HeroSection";
import Pulse from "@/src/components/resources/Pulse";
import Podcast from "@/src/components/resources/Podcast";
import QuraniumInsights from "@/src/components/resources/QuraniumInsights";
import PressReleases from "@/src/components/resources/PressReleases";
import QuraniumInTheNews from "@/src/components/resources/QuraniumInTheNews";
import MediaKit from "@/src/components/resources/MediaKit";
import BuildWithQuranium from "@/src/components/resources/BuildWithQuranium";
import { resourceMetaData } from "@/src/constants/metadata";
import quraniumPreview from "../../../public/images/quraniumPreview.png";

export const metadata = {
  title: {
    default: resourceMetaData.title,
    template: `%s | ${resourceMetaData.title}`,
  },
  description: resourceMetaData.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: resourceMetaData.url,
    title: resourceMetaData.title,
    description: resourceMetaData.description,
    siteName: resourceMetaData.title,
    images: [
      {
        width: 1200,
        height: 630,
        url: `${quraniumPreview.src}?_=44fc893`,
        alt: resourceMetaData.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: resourceMetaData.title,
    description: resourceMetaData.description,
    images: [`${quraniumPreview.src}?_=44fc893`],
  },
};

export default function Resources() {
  return (
    <main className="flex flex-col bg-background">
      <HeroSection />
      <AnchorCards />
      <BuildWithQuranium />
      <Podcast />
      <QuraniumInsights />
      <Pulse />
      <PressReleases />
      <QuraniumInTheNews />
      <MediaKit />
    </main>
  );
}
