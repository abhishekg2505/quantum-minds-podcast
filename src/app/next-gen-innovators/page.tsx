import ApplicationProcess from "@/src/components/next-gen-innovators/ApplicationProcess";
import HeroSection from "@/src/components/next-gen-innovators/HeroSection";
import NextgenProgram from "@/src/components/next-gen-innovators/NextgenProgram";
import NextGenVideoSlider from "@/src/components/next-gen-innovators/NextGenVideoSlider";
import WhyLeadersJoin from "@/src/components/next-gen-innovators/WhyLeadersJoin";
import { nextgenMetaData } from "@/src/constants/metadata";
import quraniumPreview from "../../../public/images/quraniumPreview.png";
export const metadata = {
  title: {
    default: nextgenMetaData.title,
    template: `%s | ${nextgenMetaData.title}`,
  },
  description: nextgenMetaData.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: nextgenMetaData.url,
    title: nextgenMetaData.title,
    description: nextgenMetaData.description,
    siteName: nextgenMetaData.title,
    images: [
      {
        width: 1200,
        height: 630,
        url: `${quraniumPreview.src}?_=44fc893`,
        alt: nextgenMetaData.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: nextgenMetaData.title,
    description: nextgenMetaData.description,
    images: [`${quraniumPreview.src}?_=44fc893`],
  },
};

export default function Technical() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <HeroSection />
      <NextgenProgram />
      <WhyLeadersJoin />
      <NextGenVideoSlider />
      <ApplicationProcess />
    </main>
  );
}
