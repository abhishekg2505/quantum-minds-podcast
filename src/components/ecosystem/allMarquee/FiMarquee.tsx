import React from "react";
import Image from "next/image";
import { fiLogos } from "@/src/constants/fi";
import Marquee from "@/src/components/ui/marquee";

const mpLogoImage = (logo: { src: any; alt: string; href?: string }) => (
  <Image
    src={logo.src}
    alt={logo.alt}
    className={`h-auto w-auto object-contain max-h-10 md:max-h-14 rounded-[9px]`}
    width={224}
    height={50}
    priority
  />
);

const FiMarquee = () => {
  const [firstRow, secondRow] = [
    fiLogos.slice(0, fiLogos.length / 2),
    fiLogos.slice(fiLogos.length / 2),
  ];

  return (
    <div className="w-full mx-auto">
      <div className="relative flex flex-col max-w-7xl mx-auto overflow-hidden">
        {/* Logo Rows */}
        <div className="flex flex-wrap justify-start gap-4 md:gap-2">
          <Marquee
            pauseOnHover
            className="[--duration:80s] !overflow-auto !overflow-x-visible !overflow-y-visible"
          >
            {firstRow.map((logo) => (
              <>{mpLogoImage(logo)}</>
            ))}
          </Marquee>
          <Marquee
            reverse
            pauseOnHover
            className="[--duration:80s] !overflow-auto !overflow-x-visible !overflow-y-visible"
          >
            {secondRow.map((logo) => (
              <>{mpLogoImage(logo)}</>
            ))}
          </Marquee>
        </div>

        <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-[rgba(12,3,24,1)] to-transparent/0" />
        <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-[rgba(12,3,24,1)] to-transparent/0" />
      </div>
    </div>
  );
};

export default FiMarquee;
