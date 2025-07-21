import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const anchorCards = [
  {
    title: "CEO & Co-founder, Quranium",
    link: "#founder",
    media: "/images/know-your-host/founder.webp",
  },
  {
    title: "Host, Quantum Minds Podcast",
    link: "#quantum-minds-podcast",
    media: "/images/know-your-host/qmphost.webp",
  },
  {
    title: "Host, The Uncrackable Conversation",
    link: "#the-uncrackable-conversation",
    media: "/images/know-your-host/tuchost.webp",
  },
  {
    title: "Public Speaker",
    link: "#public-speaker",
    media: "/images/know-your-host/publicspeaker.webp",
  },
];

const AnchorCards = () => {
  return (
    <section className="pb-16">
      <div className="flex flex-col md:flex-row flex-wrap">
        {anchorCards.map((card, index) => (
          <Link key={index} href={card.link} className="md:basis-[50%] overflow-hidden">
            <div className="group perspective">
              <div className="relative w-full transition-transform">
                <div
                  className="bg-[#0D031B] p-10 h-[262px] md:h-[485px] flex flex-col justify-end items-start text-left bg-cover bg-center-top transition-all duration-300 ease-in-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${card.media})` }}
                >
                  <div className="flex flex-row flex-wrap items-end justify-center md:justify-between w-full">
                    <div className="md:basis-10/12">
                      <h3 className="md:text-h3 font-antonio text-[24px] font-normal mt-5 text-center md:text-left">
                        {card.title}
                      </h3>
                    </div>
                    <span className="group text-center hidden md:block">
                      <MoveRight className="ml-2 w-[64px] h-[64px] text-[#ffffff] group-hover:text-[#601dff] transition-all duration-400 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AnchorCards;
