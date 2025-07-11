import React from "react";
import Image from "next/image";
import Link from "next/link";

const anchorCards = [
  {
    title: "Tech Documents",
    link: "/resources#tech-document",
    media: "/images/resources/anchor-cards/tech-document.svg",
  },
  {
    title: "Global Business Podcast",
    link: "/resources#podcast",
    media: "/images/resources/anchor-cards/podcast-icon.svg",
  },
  {
    title: "Blog",
    link: "/resources#blog",
    media: "/images/resources/anchor-cards/blog-icon.svg",
  },
  {
    title: "Newsletter",
    link: "/resources#newsletter",
    media: "/images/resources/anchor-cards/newsletter-icon.svg",
  },
  {
    title: "Press",
    link: "/resources#press",
    media: "/images/resources/anchor-cards/press-icon.svg",
  },
  {
    title: "Media Kit",
    link: "/resources#media-kit",
    media: "/images/resources/anchor-cards/media-kit-icon.svg",
  },
];

const AnchorCards = () => {
  return (
    <section className="py-16 container mx-auto px-4 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
        {anchorCards.map((card, index) => (
          <Link key={index} href={card.link}>
            <div className="group perspective">
              <div className="relative w-full transition-transform">
                <div className="bg-roadshow-reverse-border p-[1px] rounded-[20px]">
                  <div className="bg-[#0D031B] py-[22px] px-[30px] h-full rounded-[20px] flex flex-col justify-start items-start text-left hover:bg-[#1B0637] transition-colors duration-300 ease-in-out">
                    <Image src={card.media} alt="icon" width={50} height={50} />
                    <h3 className="md:text-p2 font-open-sans text-h6 md:font-montserrat md:font-regular font-medium mt-5">
                      {card.title}
                    </h3>
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
