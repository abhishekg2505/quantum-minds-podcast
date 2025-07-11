import HeroSection from "@/src/components/about/HeroSection";
import UncrackableTeam from "@/src/components/about/UncrackableTeam";
import Team from "@/src/components/about/Team";
import Counter from "@/src/components/about/Counter";
import Mission from "@/src/components/about/Mission";
import TeamCarousel from "@/src/components/about/TeamCarousel";
import GlobeWithCountries from "@/src/components/about/GlobeWithCountries";
import { aboutUsMetaData } from "@/src/constants/metadata";
import quraniumPreview from "../../../public/images/quraniumPreview.png";

export const metadata = {
  title: {
    default: aboutUsMetaData.title,
    template: `%s | ${aboutUsMetaData.title}`,
  },
  description: aboutUsMetaData.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: aboutUsMetaData.url,
    title: aboutUsMetaData.title,
    description: aboutUsMetaData.description,
    siteName: aboutUsMetaData.title,
    images: [
      {
        width: 1200,
        height: 630,
        url: `${quraniumPreview.src}?_=44fc893`,
        alt: aboutUsMetaData.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: aboutUsMetaData.title,
    description: aboutUsMetaData.description,
    images: [`${quraniumPreview.src}?_=44fc893`],
  },
};
export default function About() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <HeroSection />
      <Mission />
      <Counter />
      <TeamCarousel />
      <Team />
      <GlobeWithCountries />
      <UncrackableTeam />
    </main>
  );
}
