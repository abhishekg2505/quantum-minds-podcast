import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const anchorCards = [
  {
    title: "CEO & Co-founder, Quranium",
    link: "#founder",
    media: "/images/know-your-host/founder.webp",
    size: "md:w-1/2",
    urlTarget: "_self",
  },
  {
    title: "Host, Quantum Minds Podcast",
    link: "#quantum-minds-podcast",
    media: "/images/know-your-host/qmphost.webp",
    size: "md:w-1/2",
    urlTarget: "_self",
  },
  {
    title: "Host, The Uncrackable Conversation",
    link: "#the-uncrackable-conversation",
    media: "/images/know-your-host/tuchost.webp",
    size: "md:w-1/3",
    urlTarget: "_self",
  },
  {
    title: "Public Speaker",
    link: "#public-speaker",
    media: "/images/know-your-host/publicspeaker.webp",
    size: "md:w-1/3",
    urlTarget: "_self",
  },
  {
    title: "Writer and Philosopher",
    link: "https://medium.com/@kapil_dhiman",
    media: "/images/know-your-host/writer.webp",
    size: "md:w-1/3",
    urlTarget: "_blank",
  },
];

const AnchorCards = () => {
  return (
    <section className="pb-16">
      <div className="flex flex-col md:flex-row flex-wrap">
        {anchorCards.map((card, index) => (
          <Link
            key={index}
            href={card.link}
            target={card.urlTarget}
            className={`${card.size} overflow-hidden`}
          >
            <div className="group perspective">
              <div className="relative w-full transition-transform">
                <div className="relative w-full bg-[#0D031B] p-10 h-[300px] md:h-[485px] flex flex-col justify-end items-start text-left overflow-hidden">
                  <Image
                    src={card.media}
                    alt={card.title}
                    fill
                    className="transition-transform duration-500 ease-in-out group-hover:scale-110 object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-10">
                    <div className="flex flex-row flex-wrap items-center justify-between md:justify-between">
                      <div className="">
                        <h3 className="md:text-h4 font-antonio text-[24px] font-normal  text-center md:text-left">
                          {card.title}
                        </h3>
                      </div>
                      <span className="group text-center hidden md:block">
                        <Image
                          src="/images/know-your-host/arrow-right.svg"
                          alt="Arrow Right"
                          width={66}
                          height={67}
                        />
                      </span>
                    </div>
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
