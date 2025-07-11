"use client";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";

const pressReleases = [
  {
    imageSrc: "/images/common/press-releases/qrn-rush-pr.webp",
    altText: "Quranium Debuts QRNRush to Reward Real Community Engagement",
    date: "2 July, 2025",
    description: "Quranium Debuts QRNRush to Reward Real Community Engagement",
    link: "https://quranium-org.medium.com/from-action-to-access-quranium-debuts-qrnrush-to-reward-real-community-engagement-de879373bcd9",
  },
  {
    imageSrc: "/images/common/press-releases/abasssador-program.webp",
    altText:
      "Quranium’s Ambassador Program Ignites a Global Movement for Quantum-Secure Decentralization",
    date: "4 July, 2025",
    description:
      "Quranium’s Ambassador Program Ignites a Global Movement for Quantum-Secure Decentralization",
    link: "https://quranium-org.medium.com/quraniums-ambassador-program-ignites-a-global-movement-for-quantum-secure-decentralization-b0cc9c14b72f",
  },
  {
    imageSrc: "/images/common/press-releases/quantum-secure-onvergence-layer.jpg",
    altText: "Quantum-Secure Convergence Layer",
    date: "2 June, 2025",
    description: "Quranium Secures Investment from Animoca Brands",
    link: "https://quranium-org.medium.com/quranium-the-quantum-secure-convergence-layer-for-ai-web3-and-the-next-internet-secures-57432aebbf1a",
  },
  // {
  //   imageSrc: "/images/common/press-releases/quantum-secure.png",
  //   altText: "Quantum-Secure Innovation Across Borders",
  //   date: "29 May, 2025",
  //   description: "Who’s Building the Future? Quantum-Secure Innovation Across Borders",
  //   link: "https://quranium-org.medium.com/whos-building-the-future-quantum-secure-innovation-across-borders-f80c83012134",
  // },
  // {
  //   imageSrc: "/images/common/press-releases/quranium-announces-global-roadshow-2025.png",
  //   altText: "Quranium Announces Global Roadshow 2025",
  //   date: "27 March, 2025",
  //   description:
  //     "Quranium Announces Global Roadshow 2025: Uniting the World to Secure the Future of Blockchain",
  //   link: "https://quranium-org.medium.com/quranium-announces-global-roadshow-2025-uniting-the-world-to-secure-the-future-of-blockchain-790821bb42f8",
  // },
];

export default function PressReleases() {
  return (
    <section id="press" className="scroll-mt-24 py-16 container mx-auto px-4 bg-background">
      <div className="space-y-12">
        {/* Header */}
        <div className="lg:max-w-[790px]">
          <h2 className="text-h4 md:text-h3 font-semibold">Recent Press Releases</h2>
          <p className="text-p2 font-open-sans text-white-2 mt-2">
            For Journalists, Industry Analysts, and Influencers: Please contact our PR team for more
            information or to request materials.{" Claire: "}
            <Link href="mailto:claire@quranium.org" className="underline text-white-1">
              claire@quranium.org
            </Link>
          </p>
        </div>

        {/* Top Row */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Roadshow image and info */}
          <div className="flex-1 rounded-2xl overflow-hidden relative">
            <Image
              src="/images/common/press-releases/convergence-layer.jpg"
              alt="Convergence Layer"
              width={800}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Roadshow description */}
          <div className="flex flex-col justify-start items-start flex-1 px-4 pt-10 pb-6">
            <h5 className="text-h6 font-montserrat font-bold text-transparent bg-clip-text bg-date-gradient">
              28 May, 2025
            </h5>
            <p className="text-h5 mb-4">
              Quranium Launches the Convergence Layer: The uncrackable testnet converging Quantum,
              Blockchain and AI
            </p>
            <Link
              href="https://quranium-org.medium.com/quranium-launches-the-convergence-layer-the-uncrackable-testnet-converging-quantum-blockchain-and-bbd59cd9a21f"
              target="_blank"
            >
              <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
                <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                  Read press release
                </span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom Slider */}

        {/* <div className="flex items-center gap-4"> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pressReleases.map((release, index) => (
            <Link key={index} href={release.link} target="_blank" className="h-full">
              <div
                key={index}
                className="flex-1 h-full border border-white-1/10 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={release.imageSrc}
                  alt={release.altText}
                  width={1200}
                  height={627}
                  className="object-cover"
                />
                <div className="p-4 space-y-2">
                  <h5 className="text-h6 font-montserrat font-bold text-transparent bg-clip-text bg-date-gradient">
                    {release.date}
                  </h5>
                  <p className="text-h6 text-white-1">{release.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
