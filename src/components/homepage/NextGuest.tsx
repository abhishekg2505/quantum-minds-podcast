"use client";
import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const NextGuest = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const paraRef = useRef(null);
  const para2Ref = useRef(null);
  const buttonRef = useRef(null);
  const rightCardRef = useRef(null);
  const triangleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entry animations
      gsap.from(mainTitleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(paraRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      });

      gsap.from(para2Ref.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      });

      gsap.from(buttonRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.4,
        ease: "power2.out",
      });

      gsap.from(rightCardRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.5,
        ease: "power2.out",
      });

      // 🔄 Triangle up-down animation
      gsap.to(triangleRef.current, {
        y: -10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div
        id="be-a-guest"
        ref={sectionRef}
        className="relative px-4 md:px-20 bg-[url('/images/homepage/nextguest-bg.webp')] md:bg-cover bg-center md:bg-top"
      >
        <div
          className="absolute right-10 -top-10 bg-gradient-to-b from-transparent to-black"
          ref={triangleRef}
        >
          <Image
            src="/images/homepage/two-traingles.png"
            alt="two-traingle"
            width={207}
            height={202}
            className="w-full mb-5 md:mb-0"
          />
        </div>
        <div className="relative px-4 md:px-10 py-10 md:pt-[395px] md:pb-[265px] container mx-auto">
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h3
              ref={mainTitleRef}
              className="text-h4 md:text-h3 font-antonio font-semibold text-center mb-10"
            >
              Want to be our next{" "}
              <span className="bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
                podcast guest?
              </span>
            </h3>
            <div ref={rightCardRef} className="mt-6">
              <Link
                href="mailto:business@quranium.org"
                target="_self"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap"
              >
                <span className="text-h4 font-antonio text-[#08C1F0]">JOIN THE WAITLIST</span>
                <ChevronRight className="ml-2 w-5 h-5 text-[#08C1F0] transition-all duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGuest;
