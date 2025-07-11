import HeroSection from "@/src/components/community/HeroSection";
import { buildWithUsMetaData } from "@/src/constants/metadata";
import quraniumPreview from "../../../public/images/quraniumPreview.png";
import QrnRush from "@/src/components/community/QrnRush";
import AnchorCards from "@/src/components/community/AnchorCards";
import CampusProgram from "@/src/components/community/CampusProgram";
import AmbassadorProgram from "@/src/components/community/AmbassadorProgram";
import PromoteQuranium from "@/src/components/community/PromoteQuranium";
import HowToJoin from "@/src/components/community/HowToJoin";
import WhatIsQrnRush from "@/src/components/community/WhatIsQrnRush";

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

export default function Ecosystem() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <HeroSection />
      <AnchorCards />
      <QrnRush />
      <WhatIsQrnRush />
      <AmbassadorProgram />
      <PromoteQuranium />
      <CampusProgram />
      <HowToJoin />
    </main>
  );
}
