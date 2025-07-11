import HeroSection from "@/src/components/careers/HeroSection";
import NextGen from "@/src/components/careers/NextGen";
import { careersMetaData } from "@/src/constants/metadata";
import quraniumPreview from "../../../public/images/quraniumPreview.png";

export const metadata = {
  title: {
    default: careersMetaData.title,
    template: `%s | ${careersMetaData.title}`,
  },
  description: careersMetaData.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: careersMetaData.url,
    title: careersMetaData.title,
    description: careersMetaData.description,
    siteName: careersMetaData.title,
    images: [
      {
        width: 1200,
        height: 630,
        url: `${quraniumPreview.src}?_=44fc893`,
        alt: careersMetaData.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: careersMetaData.title,
    description: careersMetaData.description,
    images: [`${quraniumPreview.src}?_=44fc893`],
  },
};

export default function Careers() {
  return (
    <main className="flex flex-col bg-background">
      <HeroSection />
      <NextGen />
    </main>
  );
}
