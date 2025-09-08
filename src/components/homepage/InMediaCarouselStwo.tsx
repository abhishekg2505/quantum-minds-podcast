"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    image: "/images/homepage/s2guests/animocabrands.svg",
  },
  {
    image: "/images/homepage/s2guests/fetchai.svg",
  },
  {
    image: "/images/homepage/s2guests/thesandbox.svg",
  },
  {
    image: "/images/homepage/s2guests/matterid.svg",
  },
  {
    image: "/images/homepage/s2guests/zealshow.svg",
  },
  {
    image: "/images/homepage/s2guests/og.svg",
  },
];

export default function InMediaCarouselStwo() {
  const sectionRef = useRef(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        className="overflow-hidden flex mt-10 "
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              key={index}
              className="h-[100px] flex items-center justify-center"
            >
              <Image src={card.image} alt={card.image} width={200} height={70} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
