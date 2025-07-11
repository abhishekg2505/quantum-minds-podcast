"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Digital Infrastructure",
    description:
      "DLT and blockchain platforms, which are built using post-quantum cryptography. Quranium is the only such platform in existence today.",
  },
  {
    title: "Finance and Payments",
    description:
      "Decentralized finance (DeFi) platforms, CBDCs (central bank digital currencies), cross-border payment networks, and digital asset exchanges.",
  },
  {
    title: "Data Privacy and Security",
    description:
      "Quantum-proof solutions for encrypted data storage, secure communication channels, and decentralized identity (DID) systems.",
  },
  {
    title: "Healthcare and Biomedical Research",
    description:
      "Secure data-sharing networks for patient records, decentralized clinical trial data management, and drug discovery.",
  },
  {
    title: "IOT and Smart Cities",
    description:
      "Quantum-secure infrastructure for decentralized IoT networks, autonomous systems, and smart city management, ensuring data integrity and system resilience.",
  },
  {
    title: "Real World Assets (RWAs)",
    description:
      "Tokenization and management of real estate, commodities, and other physical assets on quantum-resistant decentralized networks.",
  },
  {
    title: "Supply Chain",
    description: "Quantum-secure tracking and management of goods across decentralized networks.",
  },
  {
    title: "Government and Public Services",
    description:
      "Decentralized systems for voting, digital citizenship, and secure public records.",
  },
  {
    title: "Media and Entertainment",
    description:
      "Secure, decentralized infrastructure for content distribution and copyright protection.",
  },
  {
    title: "Energy and Utilites",
    description:
      "Decentralized grids and peer-to-peer energy trading networks that require quantum-proof security for system stability and resilience.",
  },
  {
    title: "Autonomous Vehicles and Drones",
    description:
      "Secure, decentralized networks for communication, coordination, and data-sharing between autonomous vehicles and drones.",
  },
  {
    title: "Gaming and Metaverse",
    description:
      "Secure, decentralized networks for communication, coordination, and data-sharing between autonomous vehicles and drones.",
  },
  {
    title: "Intellectual Property and digital rights management",
    description:
      "Decentralized, quantum-proof systems for protecting digital rights, intellectual property, and content ownership.",
  },
];

export default function DequipAlliance() {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const para1Ref = useRef(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(mainTitleRef.current, {
        scrollTrigger: {
          trigger: mainTitleRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.5,
      });

      gsap.from(para1Ref.current, {
        scrollTrigger: {
          trigger: para1Ref.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 1.5,
      });
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: cardsRef.current,
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
    <div ref={sectionRef} className="relative bg-[#030712] px-5 pt-16 pb-24">
      <div className="relative max-w-7xl mx-auto px-[16px] md:px-[60px]">
        <h2 ref={mainTitleRef} className="text-h5 md:text-h4 font-montserrat font-bold">
          The DeQUIP Alliance
        </h2>
        <p
          ref={para1Ref}
          className="text-p2 font-open-sans text-gray-300 max-w-4xl mt-4 mx-auto md:mx-0"
        >
          Companies, products and brands that are decentralized and quantum-secure, or are moving
          toward it, belong in the DeQUIP (Decentralized Quantum-Uncrackable Infrastructure
          Protocol) category. Quranium invites fellow DeQUIP innovators to help establish this as a
          recognizable new market category and to define the future of secure digital
          infrastructure.
        </p>
        <div className="relative">
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
                slidesPerView: 4,
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
                  className="group perspective"
                >
                  <div className="relative w-full h-[234px] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front Side */}
                    <div className="absolute inset-0 bg-roadshow-reverse-border p-[1px] rounded-[20px] [backface-visibility:hidden]">
                      <div className="bg-[url('/images/technical/mesh-bg.svg')] bg-no-repeat bg-top bg-contain bg-[#0D031B] p-6 h-full rounded-[20px] flex flex-col items-center text-left py-16">
                        <h3 className="md:text-p2 font-open-sans text-h6 md:font-montserrat md:font-regular text-center font-medium mt-5">
                          {card.title}
                        </h3>
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 bg-roadshow-reverse-border p-[1px] rounded-[20px] [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="bg-[#1B0637] p-6 h-full rounded-[20px] flex justify-start items-start text-left">
                        <p className="text-p3 font-open-sans text-gray-300">{card.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-6 mt-6 md:mt-0 md:block">
            {/* Left Arrow */}
            <div className="swiper-prev md:absolute md:-left-7 md:top-1/2 md:transform md:-translate-y-1/2 z-10 bg-[#3C3747] hover:bg-white/20 p-2 rounded-full cursor-pointer">
              <MoveLeft className="text-white" />
            </div>

            {/* Right Arrow */}
            <div className="swiper-next md:absolute md:-right-7 md:top-1/2 md:transform md:-translate-y-1/2 z-10 bg-[#3C3747] hover:bg-white/20 p-2 rounded-full cursor-pointer">
              <MoveRight className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
