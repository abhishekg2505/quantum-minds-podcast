import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const quraniumInsights = [
  {
    imageSrc: "/images/common/quranium-insights/quranium-insights-2.png",
    altText: "Crypto Wallets 101",
    description: "Crypto Wallets 101: How Do They Actually Work?",
    link: "https://quranium-org.medium.com/crypto-wallets-101-how-do-they-actually-work-1f363f4e7c52",
  },
  {
    imageSrc: "/images/common/quranium-insights/quranium-insights-3.png",
    altText: "QSafe Wallet Launch",
    description: "April: The Month of Quantum — Two Global Days, One Urgent Conversation",
    link: "https://quranium-org.medium.com/april-the-month-of-quantum-two-global-days-one-urgent-conversation-1744d0a4736c",
  },
  {
    imageSrc: "/images/common/quranium-insights/quranium-insights-4.png",
    altText: "Partnership Announcement",
    description: "The Future-Proof Innovators: A Guide to DeQUIP Brands",
    link: "https://quranium-org.medium.com/the-future-proof-innovators-a-guide-to-dequip-brands-1557cfc9fabb",
  },
];

export default function QuraniumInsights() {
  return (
    <section id="blog" className="scroll-mt-24 py-16 container mx-auto px-4 bg-background">
      <div className="space-y-12">
        <div className="grid md:grid-cols-[60%_40%] gap-6 md:gap-0 items-center px-6 pb-[60px]">
          <div>
            <h2 className="text-h4 md:text-h3 font-semibold">Quranium Insights</h2>
            <p className="text-p2 font-open-sans text-white-2 mt-2">
              Deep dives, expert analysis, and forward-looking perspectives on quantum security,
              blockchain innovation, and the future of digital trust.
            </p>
          </div>
          <div className="md:text-right">
            <Link href="https://quranium-org.medium.com/" target="_blank">
              <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
                <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                  Subscribe Now
                  <MoveRight className="ml-2 w-5 h-5 text-[#ffffff] group-hover:text-[#601dff] transition-all duration-400 group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Top Row */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Roadshow image and info */}
          <div className="flex-1 rounded-2xl overflow-hidden relative">
            <Image
              src="/images/common/quranium-insights/quranium-insights-1.png"
              alt="Be Uncrackable Roadshow"
              width={800}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Roadshow description */}
          <div className="flex flex-col justify-start items-start flex-1 px-4 pt-10 pb-6">
            <p className="text-h5 mb-4">
              Quantum Security Awareness Day: A New Chapter in Digital Security
            </p>
            <Link
              href="https://quranium-org.medium.com/quantum-security-awareness-day-a-new-chapter-in-digital-security-ed78fb30ed20"
              target="_blank"
            >
              <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
                <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                  Read Now
                </span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom Slider */}

        {/* <div className="flex items-center gap-4"> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quraniumInsights.map((insight, index) => (
            <Link key={index} href={insight.link} target="_blank">
              <div
                key={index}
                className="flex-1 h-full border border-white-1/10 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={insight.imageSrc}
                  alt={insight.altText}
                  width={1200}
                  height={627}
                  className="object-cover"
                />
                <div className="p-4 space-y-2">
                  <p className="text-h6 text-white-1">{insight.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
