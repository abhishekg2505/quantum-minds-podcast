import BeHonest from "@/src/components/buildWithUs/BeHonest";
import CallToActionEcoSysytem from "@/src/components/buildWithUs/CallToActionEcoSysytem";
import ConvergenceFuture from "@/src/components/buildWithUs/ConvergenceFuture";
import DevelopersBuilder from "@/src/components/buildWithUs/DevelopersBuilder";
import ForPartners from "@/src/components/buildWithUs/ForPartners";
import HeroSection from "@/src/components/buildWithUs/HeroSection";
import { buildWithUsMetaData } from "@/src/constants/metadata";
import quraniumPreview from "../../../public/images/quraniumPreview.png";

export const metadata = {
  title: {
    default: buildWithUsMetaData.title,
    template: `%s | ${buildWithUsMetaData.title}`,
  },
  description: buildWithUsMetaData.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: buildWithUsMetaData.url,
    title: buildWithUsMetaData.title,
    description: buildWithUsMetaData.description,
    siteName: buildWithUsMetaData.title,
    images: [
      {
        width: 1200,
        height: 630,
        url: `${quraniumPreview.src}?_=44fc893`,
        alt: buildWithUsMetaData.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: buildWithUsMetaData.title,
    description: buildWithUsMetaData.description,
    images: [`${quraniumPreview.src}?_=44fc893`],
  },
};

export default function Technical() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <HeroSection />
      <BeHonest />
      <DevelopersBuilder />
      <ForPartners />
      <ConvergenceFuture />
      <CallToActionEcoSysytem />
    </main>
  );
}
