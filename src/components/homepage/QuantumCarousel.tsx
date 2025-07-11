"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Quantum Native",
    description:
      "Quranium delivers post-quantum security without compromising on performance - through real-world integration with quantum hardware providers.",
    icon: "/images/icons/quantum.svg",
  },
  {
    id: 1,
    title: "Quantum Native",
    description:
      "Quranium delivers post-quantum security without compromising on performance - through real-world integration with quantum hardware providers.",
    icon: "/images/icons/quantum.svg",
  },
  {
    id: 1,
    title: "Quantum Native",
    description:
      "Quranium delivers post-quantum security without compromising on performance - through real-world integration with quantum hardware providers.",
    icon: "/images/icons/quantum.svg",
  },
  {
    id: 1,
    title: "Quantum Native",
    description:
      "Quranium delivers post-quantum security without compromising on performance - through real-world integration with quantum hardware providers.",
    icon: "/images/icons/quantum.svg",
  },
  {
    id: 1,
    title: "Quantum Native",
    description:
      "Quranium delivers post-quantum security without compromising on performance - through real-world integration with quantum hardware providers.",
    icon: "/images/icons/quantum.svg",
  },
  {
    id: 1,
    title: "Quantum Native",
    description:
      "Quranium delivers post-quantum security without compromising on performance - through real-world integration with quantum hardware providers.",
    icon: "/images/icons/quantum.svg",
  },
  // {
  //   id: 2,
  //   title: "Quantum Secure",
  //   description:
  //     "Next-gen encryption that prepares you for a quantum-empowered future. Seamless transition, zero compromise.",
  //   icon: "/images/icons/secure.svg",
  // },
  // {
  //   id: 3,
  //   title: "Quantum Network",
  //   description:
  //     "Powerful distributed systems built for the post-quantum era with unmatched resilience and privacy.",
  //   icon: "/images/icons/network.svg",
  // },
  // Add more slides as needed
];

export default function QuantumCarousel() {
  return (
    <div className="relative py-16 px-4 md:px-16 overflow-hidden">
      {/* Gradient mask edges */}
      <div className="pointer-events-none absolute inset-0 z-10 flex justify-between">
        <div className="h-full w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="h-full w-24 bg-gradient-to-l from-background to-transparent" />
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2">
        <button className="swiper-button-prev">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2">
        <button className="swiper-button-next">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      <div className="">
        <Swiper
          // modules={[EffectCoverflow, Navigation]}
          // loop
          // centeredSlides
          // slidesPerView="auto"
          // slidesPerView={3}
          // effect="coverflow"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          // coverflowEffect={{
          //   rotate: 0,
          //   stretch: 60,
          //   depth: 180,
          //   modifier: 1,
          //   slideShadows: false,
          // }}
          // className="!overflow-visible"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="!w-[300px] md:!w-[340px] mx-4 flex flex-col justify-center items-center px-6 py-8 bg-[#0C0318] rounded-2xl shadow-xl border border-white/10 text-center transition-all duration-300 ease-in-out backdrop-blur-md"
            >
              <Image src={slide.icon} alt={slide.title} width={80} height={80} className="mb-4" />
              <h3 className="text-white text-xl font-semibold mb-2">{slide.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{slide.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
