"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const cards = [
  {
    title: "Core Chain",
    link: "https://docs.quranium.org/",
  },
  {
    title: "QSafe Wallet",
    link: "http://docs.qsafewallet.com/",
  },
  {
    title: "QRemix",
    link: "http://docs.qremix.org",
  },
  {
    title: "QRN Scan",
    link: "http://docs.qrnscan.com/",
  },
];

export default function BuildWithQuranium() {
  return (
    <div id="tech-document" className="relative bg-[#030712] container mx-auto px-4 pt-16 pb-24">
      <h2 className="text-h5 md:text-h3 font-montserrat font-bold text-center mb-[60px]">
        Build with Quranium
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-center">
        {cards.map((card, index) => (
          <div key={index} className="">
            <div className="relative w-full h-[212px]">
              {/* Front Side */}
              <div className="absolute inset-0 bg-roadshow-reverse-border p-[1px] rounded-[20px]">
                <div className="bg-[url('/images/technical/mesh-bg.svg')] bg-no-repeat bg-top bg-contain bg-[#0D031B] p-6 h-full rounded-[20px] flex flex-col items-center text-left py-16">
                  <h3 className="md:text-p2 font-open-sans text-h6 md:font-montserrat md:font-regular text-center font-medium mb-7">
                    {card.title}
                  </h3>
                  <Link href={card.link}>
                    <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
                      <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                      <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                        Read Document
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
