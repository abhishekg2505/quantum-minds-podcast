import HeroSection from "@/src/components/quantum-minds-podcast/HeroSection";
import PodcastGuest from "@/src/components/quantum-minds-podcast/PodcastGuest";
import SeasonOneBlast from "@/src/components/quantum-minds-podcast/SeasonOneBlast";
import SeasonOneGuests from "@/src/components/quantum-minds-podcast/SeasonOneGuests";
import { QMPMetaData } from "@/src/constants/metadata";
import quraniumPreview from "../../../public/images/quraniumPreview.png";

export const metadata = {
  title: {
    default: QMPMetaData.title,
    template: `%s | ${QMPMetaData.title}`,
  },
  description: QMPMetaData.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: QMPMetaData.url,
    title: QMPMetaData.title,
    description: QMPMetaData.description,
    siteName: QMPMetaData.title,
    images: [
      {
        width: 1200,
        height: 630,
        url: `${quraniumPreview.src}?_=44fc893`,
        alt: QMPMetaData.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: QMPMetaData.title,
    description: QMPMetaData.description,
    images: [`${quraniumPreview.src}?_=44fc893`],
  },
};

export default function Technical() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <HeroSection />
      <SeasonOneGuests />
      <SeasonOneBlast />
      <PodcastGuest />
    </main>
  );
}
