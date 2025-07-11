import React from "react";
import Marquee from "../ui/marquee";
import Link from "next/link";
import { newsLogos } from "@/src/constants/newsLogo";
import Image from "next/image";
const newsLogoImage = (logo: { src: any; alt: string; href?: string }) => (
  <Image
    src={logo.src}
    alt={logo.alt}
    className={`h-auto w-auto object-contain max-h-10 md:max-h-14 rounded-[9px]`}
    width={120}
    height={40}
    priority
  />
);

const QuraniumInTheNews = () => {
  const [firstRow, secondRow] = [
    newsLogos.slice(0, newsLogos.length / 2),
    newsLogos.slice(newsLogos.length / 2),
  ];
  return (
    <section id="quranium-in-the-news" className="py-16 container mx-auto px-4">
      <div>
        <h2 className="text-h4 lg:text-h3 text-center font-montserrat font-semibold">
          Quranium In The News
        </h2>

        <div className="pt-10">
          <div className="p-[1.1px] bg-roadshow-stats-border rounded-[30px]">
            <div className="relative flex flex-col w-full py-10 bg-background rounded-[30px] overflow-hidden">
              {/* Logo Rows */}
              <div className="flex flex-wrap justify-start gap-4 md:gap-2">
                <Marquee
                  pauseOnHover
                  className="[--duration:80s] !overflow-auto !overflow-x-visible !overflow-y-visible"
                >
                  {firstRow.map((logo) => (
                    <>
                      {!logo.href ? (
                        newsLogoImage(logo)
                      ) : (
                        <Link
                          key={logo.alt}
                          className="flex items-center justify-center h-auto max-h-16"
                          href={logo.href}
                          target="_blank"
                        >
                          {newsLogoImage(logo)}
                        </Link>
                      )}
                    </>
                  ))}
                </Marquee>
                <Marquee
                  reverse
                  pauseOnHover
                  className="[--duration:80s] !overflow-auto !overflow-x-visible !overflow-y-visible"
                >
                  {secondRow.map((logo) => (
                    <>
                      {!logo.href ? (
                        newsLogoImage(logo)
                      ) : (
                        <Link
                          key={logo.alt}
                          className="flex items-center justify-center h-auto max-h-16"
                          href={logo.href}
                          target="_blank"
                        >
                          {newsLogoImage(logo)}
                        </Link>
                      )}
                    </>
                  ))}
                </Marquee>
              </div>

              <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-transparent/80 to-transparent/0" />
              <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-transparent/80 to-transparent/0" />
            </div>
          </div>
        </div>

        {/* <div className="">
          <p className="text-center">
            For Journalists, Industry Analysts, and Influencers: Please contact our PR team for more
            information or to request materials. Claire:{" "}
            <Link href="mailto:claire@quranium.org" className="text-white-2 underline">
              claire@quranium.org
            </Link>
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default QuraniumInTheNews;
