import HeroSection from "@/src/components/contact/HeroSection";
import ContactForm from "@/src/components/contact/ContactForm";
import StayConnected from "@/src/components/contact/StayConnected";
import { contactUsMetaData } from "@/src/constants/metadata";
import quraniumPreview from "../../../public/images/quraniumPreview.png";

export const metadata = {
  title: {
    default: contactUsMetaData.title,
    template: `%s | ${contactUsMetaData.title}`,
  },
  description: contactUsMetaData.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: contactUsMetaData.url,
    title: contactUsMetaData.title,
    description: contactUsMetaData.description,
    siteName: contactUsMetaData.title,
    images: [
      {
        width: 1200,
        height: 630,
        url: `${quraniumPreview.src}?_=44fc893`,
        alt: contactUsMetaData.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: contactUsMetaData.title,
    description: contactUsMetaData.description,
    images: [`${quraniumPreview.src}?_=44fc893`],
  },
};
export default function Contact() {
  return (
    <main className="flex flex-col bg-background">
      <HeroSection />
      <ContactForm />
      <StayConnected />
    </main>
  );
}
