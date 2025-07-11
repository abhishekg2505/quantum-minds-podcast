import React from "react";
import Image from "next/image";
import Carousel from "../common/Carousel";
import { mpLogos } from "@/src/constants/mp";
import Link from "next/link";
import Marquee from "@/src/components/ui/marquee";

const mpLogoImage = (logo: { src: any; alt: string; href?: string }) => (
  <Image
    src={logo.src}
    alt={logo.alt}
    className={`h-auto w-auto object-contain max-h-10 md:max-h-14 rounded-[9px]`}
    width={120}
    height={40}
    priority
  />
);

const MediaPartner = () => {
  const [firstRow, secondRow] = [
    mpLogos.slice(0, mpLogos.length / 2),
    mpLogos.slice(mpLogos.length / 2),
  ];

  return (
    <section className="px-4 md:px-20 mt-20 container">
      <div>
        <div className="pt-10">
          <div className="p-[1.1px] bg-roadshow-stats-border rounded-[30px]">
            <div className="relative flex flex-col max-w-7xl mx-auto py-10 bg-black rounded-[30px] overflow-hidden">
              <h2 className="text-white font-semibold text-h4 font-montserrat text-center mb-2">
                Media Partners
              </h2>

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

              <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-transparent/80 to-transparent/0" />
              <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-transparent/80 to-transparent/0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaPartner;
