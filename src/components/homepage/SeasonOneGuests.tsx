"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "@/src/components/common/Carousel";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InMediaCarousel from "./InMediaCarousel";
gsap.registerPlugin(ScrollTrigger);
const guests = [
  {
    name: "Mayur Relekar",
    role: "Founder at Arcana Network",
    image: "/images/homepage/guest/mayur-relekar.webp",
    socials: {
      linkedin: "https://www.linkedin.com/in/mayurrelekar/",
      x: "https://x.com/mayurrelekar",
    },
  },
  {
    name: "Christian Spahr",
    role: "Founder & CIO at Blockspirit AG",
    image: "/images/homepage/guest/christian-spahr.webp",
    socials: {
      linkedin: "https://www.linkedin.com/in/christian-spahr/",
    },
  },
  {
    name: "Chin Tah Ang",
    role: "General Manager Singapore, Crypto.com",
    image: "/images/homepage/guest/chin-tah-ang.webp",
    socials: {
      linkedin: "https://www.linkedin.com/in/chintahang/?originalSubdomain=sg",
    },
  },
  {
    name: "Robin Joffe",
    role: "Partner & MD, Frost & Sullivan (Middle East, Africa & South East Asia)",
    image: "/images/homepage/guest/robin-joffe.webp",
    socials: {
      linkedin: "https://www.linkedin.com/in/robinjoffe/",
    },
  },
  {
    name: "Mark Turrell",
    role: "Founder, unDavos | CTO, Fresh Solutions AI | Founder, Orcasci",
    image: "/images/homepage/guest/mark-turrell.webp",
    socials: {
      linkedin: "https://www.linkedin.com/in/markturrell/",
      x: "https://x.com/mark_turrell",
    },
  },
];

const SeasonOneGuests = () => {
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
    <div ref={sectionRef} className="space-y-8 py-10 bg-black">
      <h3
        ref={mainTitleRef}
        className="text-h4 md:text-h3 font-antonio font-semibold text-center mb-10"
      >
        Guests from{" "}
        <span className="bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
          Season #1
        </span>
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
                {guest.socials.x && (
                  <Link href={guest.socials.x} target="_blank">
                    <Image
                      src="/images/homepage/guest/twitter.svg"
                      alt="twitter"
                      width={18}
                      height={18}
                    />
                  </Link>
                )}
                {guest.socials.linkedin && (
                  <Link href={guest.socials.linkedin} target="_blank">
                    <Image
                      src="/images/homepage/guest/linkedin.svg"
                      alt="linkedin"
                      width={18}
                      height={18}
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="max-w-7xl mx-auto px-5">
        <InMediaCarousel />
      </div>
    </div>
  );
};

export default SeasonOneGuests;
