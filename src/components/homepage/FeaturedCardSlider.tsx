"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";

const cards = [
  {
    title: "Quantum-native",
    description:
      "Quranium delivers post-quantum security without compromising on performance, through real-world integration with quantum hardware providers.",
    image: "/images/homepage/slider/quantum.png",
  },
  {
    title: "Blockchain Integrity",
    description:
      "Decentralized, transparent, and trustless by design. Quranium ensures data integrity, immutability, and resilience across its ecosystem.",
    image: "/images/homepage/slider/blockchain.png",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Quranium native AI agents autonomously secure and optimize the blockchain stack, handling real time threat detection, smart contract generation and auditing, seamless UX, ethical compliance, and immersive AI driven economies, powering every layer with adaptive intelligence and quantum grade security.",
    image: "/images/homepage/slider/ai-icon.png",
  },
];

export default function FeaturedCardSlider() {
  return (
    <div className="relative bg-[#030712] pt-16 pb-24">
      <div className="relative max-w-[954px] mx-auto px-4">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
          className="overflow-hidden flex"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="bg-slider-border rounded-[20px] p-[1px] md:min-h-[300px] w-full md:w-[582px] mx-auto">
                <div className="bg-[url('/images/common/bg/mesh-bg.svg')] bg-no-repeat bg-top bg-contain bg-[#0C0318] rounded-[20px] flex flex-col justify-between items-center text-center p-6 h-full">
                  <div className="flex flex-col items-center text-center">
                    <Image src={card.image} alt="Shield Icon" width={110} height={150} />
                    <h3 className="mt-5 font-medium text-h6 md:text-h5 ">{card.title}</h3>
                    <p className="text-p3 md:text-p2 font-normal font-open-sans mt-5">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="swiper-prev absolute left-0 md:left-16 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full cursor-pointer bg-[#3C3747]">
          <MoveLeft className="text-white" />
        </div>
        <div className="swiper-next absolute right-0 md:right-16 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full cursor-pointer bg-[#3C3747]">
          <MoveRight className="text-white" />
        </div>
      </div>
    </div>
  );
}
