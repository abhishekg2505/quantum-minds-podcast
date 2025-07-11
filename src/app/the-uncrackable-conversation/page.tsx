import HeroSection from "@/src/components/uncrackable-conversation/HeroSection";
import WhenAndWhere from "@/src/components/uncrackable-conversation/WhenAndWhere";
import FirstUncrackableConversation from "@/src/components/uncrackable-conversation/FirstUncrackableConversation";
import UpcomingEpisodes from "@/src/components/uncrackable-conversation/UpcomingEpisodes";
import { uncrackableMetaData } from "@/src/constants/metadata";
import quraniumPreview from "../../../public/images/quraniumPreview.png";

export const metadata = {
  title: {
    default: uncrackableMetaData.title,
    template: `%s | ${uncrackableMetaData.title}`,
  },
  description: uncrackableMetaData.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: uncrackableMetaData.url,
    title: uncrackableMetaData.title,
    description: uncrackableMetaData.description,
    siteName: uncrackableMetaData.title,
    images: [
      {
        width: 1200,
        height: 630,
        url: `${quraniumPreview.src}?_=44fc893`,
        alt: uncrackableMetaData.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: uncrackableMetaData.title,
    description: uncrackableMetaData.description,
    images: [`${quraniumPreview.src}?_=44fc893`],
  },
};

export default function Technical() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <HeroSection />
      <WhenAndWhere />
      <FirstUncrackableConversation />
      <UpcomingEpisodes />
    </main>
  );
}
