import HeroSection from "@/src/components/layers-and-latte/HeroSection";
import LayersLattes from "@/src/components/layers-and-latte/LayersLattes";
import { layersAndLattesMetaData } from "@/src/constants/metadata";
import quraniumPreview from "../../../public/images/quraniumPreview.png";
import UpcomingEvents from "@/src/components/layers-and-latte/UpcomingEvents";

export const metadata = {
  title: {
    default: layersAndLattesMetaData.title,
    template: `%s | ${layersAndLattesMetaData.title}`,
  },
  description: layersAndLattesMetaData.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: layersAndLattesMetaData.url,
    title: layersAndLattesMetaData.title,
    description: layersAndLattesMetaData.description,
    siteName: layersAndLattesMetaData.title,
    images: [
      {
        width: 1200,
        height: 630,
        url: `${quraniumPreview.src}?_=44fc893`,
        alt: layersAndLattesMetaData.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: layersAndLattesMetaData.title,
    description: layersAndLattesMetaData.description,
    images: [`${quraniumPreview.src}?_=44fc893`],
  },
};

export default function LayersAndLattes() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <HeroSection />
      <LayersLattes />
      <UpcomingEvents />
    </main>
  );
}
