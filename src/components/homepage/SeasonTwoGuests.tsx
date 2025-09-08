"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "@/src/components/common/Carousel";
// import InMediaCarousel from "./InMediaCarousel";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const guests = [
  {
    name: "Yat Siu",
    role: "Chairman of the Board, Animoca Brands",
    image: "/images/homepage/s2guests/yat-siu.webp",
    companyLogo: "/images/homepage/s2guests/animocabrands.svg",
  },
  {
    name: "Humayun Sheikh",
    role: "CEO & Founder, Fetch.ai",
    image: "/images/homepage/s2guests/humayun-sheikh.webp",
    companyLogo: "/images/homepage/s2guests/fetchai.svg",
  },
  {
    name: "Sabastien Borget",
    role: "Co-Founder & COO, The Sandbox",
    image: "/images/homepage/s2guests/sabastien-borget.webp",
    companyLogo: "/images/homepage/s2guests/thesandbox.svg",
  },
  {
    name: "Raido Saar",
    role: "CEO & Co-founder | Matter-ID",
    image: "/images/homepage/s2guests/raido-saar.webp",
    companyLogo: "/images/homepage/s2guests/matterid.svg",
  },
  {
    name: "Michael Heinrich",
    role: "Co-Founder 0G Labs",
    image: "/images/homepage/s2guests/michael-heinrich.webp",
    companyLogo: "/images/homepage/s2guests/og.svg",
  },
  {
    name: "Anson Zeall",
    role: "The Zeall Show, Host | Author of Several books on Bitcoin and Leadership",
    image: "/images/homepage/s2guests/anson-zeall.webp",
    companyLogo: "",
  },
];

const SeasonTwoGuests = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate h2 after cards
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="space-y-8 py-20 bg-black">
      <h3
        ref={mainTitleRef}
        className="text-h4 md:text-h3 font-montserrat font-semibold text-center mb-10"
      >
        Some of the Guests from Season #2
      </h3>
      <Carousel direction="left" speed={100}>
        {[...guests, ...guests].map((guest, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 mx-2 w-[342px] h-[382px] rounded-[20px] overflow-hidden"
          >
            <Image src={guest.image} alt={guest.name} fill className="object-cover" />

            {/* Overlay Content */}
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 md:pr-32 text-white">
              <h4 className="text-h6 font-montserrat font-medium">{guest.name}</h4>
              <p className="text-p2 font-open-sans">{guest.role}</p>

              {/* Social Icons */}
              <div className="flex gap-3 mt-2">
                {guest.companyLogo && (
                  <Image
                    src={guest.companyLogo}
                    alt={guest.companyLogo}
                    width={150}
                    height={80}
                    className="object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      {/* <div className="max-w-7xl mx-auto px-5">
        <InMediaCarousel />
      </div> */}
    </div>
  );
};

export default SeasonTwoGuests;
