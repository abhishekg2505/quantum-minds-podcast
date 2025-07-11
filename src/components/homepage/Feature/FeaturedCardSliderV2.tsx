"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";

const cards = [
  {
    title: "Quantum-Secure",
    description: (
      <span>
        Secured with NIST approved post-quantum cryptography.
        <br className="hidden lg:block" /> Scaled using high-performance supercomputing nodes.
      </span>
    ),
    image: "/images/homepage/slider/quantum.png",
  },
  {
    title: "Blockchain Integrity",
    description: <span>Decentralized, transparent, and trustless by design.</span>,
    image: "/images/homepage/slider/blockchain.png",
  },
  {
    title: "Artificial Intelligence",
    description: (
      <span>
        Quranium native AI agents can build, audit, govern,
        <br className="hidden lg:block" /> and transact entirely on-chain.
      </span>
    ),
    image: "/images/homepage/slider/ai-icon.png",
  },
];

export default function FeaturedCardSlider() {
  return (
    <div className="relative md:pt-[60px] pb-[30px]">
      <div className="relative px-4">
        <Swiper
          modules={[Navigation, Autoplay, EffectCoverflow]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          initialSlide={1}
          loop
          coverflowEffect={{
            rotate: 0,
            stretch: 100,
            depth: 500,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          className="overflow-visible blur-effect-swiper"
          spaceBetween={-200}
        >
          {Array.from({ length: 10 }).flatMap((_, repeatIndex) =>
            cards.map((card, index) => (
              <SwiperSlide
                key={`${repeatIndex}-${index}`}
                className="md:!w-[700px] h-[350px] md:h-[493px]"
              >
                <div className="bg-slider-border rounded-[20px] p-[1px] w-full mx-auto h-full">
                  <div className="bg-[url('/images/common/bg/mesh-bg.svg')] !min-h-[350px] md:!min-h-[380px] bg-no-repeat bg-top bg-contain bg-[#0C0318] rounded-[20px] flex flex-col justify-between items-center text-center p-6 h-full">
                    <div className="flex flex-col items-center text-center h-full">
                      <Image
                        src={card.image}
                        alt="Shield Icon"
                        width={185}
                        height={256}
                        className="flex-shrink-0 w-[110px] h-[150px] md:w-[185px] md:h-[256px]"
                      />
                      <h3 className="mt-5 font-medium text-h6 md:text-h5">{card.title}</h3>
                      <p className="text-p3 md:text-p2 font-normal font-open-sans mt-5 flex-grow">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="swiper-prev absolute left-0  top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full cursor-pointer bg-[#3C3747]">
          <MoveLeft className="text-white" />
        </div>
        <div className="swiper-next absolute right-0  top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full cursor-pointer bg-[#3C3747]">
          <MoveRight className="text-white" />
        </div>
      </div>
    </div>
  );
}
