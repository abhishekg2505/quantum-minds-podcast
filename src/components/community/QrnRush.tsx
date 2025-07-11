"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const QrnRush = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const paraRef = useRef(null);
  const para2Ref = useRef(null);
  const buttonRef = useRef(null);
  const rightCardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate h2 after cards
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
        ease: "power2.out",
        delay: 0.2,
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative px-4 md:px-20 py-10 md:py-[50px] bg-black">
      {/* Background Layer */}
      <div className="absolute inset-0">
        <Image
          src="/images/community/qrnrushbg.webp"
          alt="Background"
          fill
          priority
          className="w-full h-full"
        />
      </div>

      {/* Content Container */}
      <div className="relative px-4 md:px-10 pb-[55px] container mx-auto">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Image
            src="/images/community/qrn-rush.svg"
            alt="icon"
            width={244}
            height={96}
            className="mx-auto"
          />

          <h2 ref={mainTitleRef} className="text-white text-p2 font-thin mt-[21px]">
            <span className="font-semibold">Talk Less. Quest More,</span> Turn Your Voice Into Value
          </h2>

          <div className="max-w-[542px] mx-auto mt-[15px]">
            <p ref={paraRef} className="text-white text-p4 font-open-sans font-regular">
              Welcome to QRNRush, Quranium&rsquo;s new gamified community engine that transforms
              every tweet, tap, or task into something tangible.
            </p>
            <p ref={paraRef} className="text-white text-p4 font-open-sans font-regular mt-5">
              It&rsquo;s where everyday participation meets next-level perks.
            </p>
          </div>

          <div ref={rightCardRef} className="mt-6">
            <Link href="#" target="_self" rel="noopener noreferrer">
              <Button variant="outline" className="group relative overflow-hidden bg-transparent">
                <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                <span className="relative z-10 flex items-center bg-transparent text-[#ffffff] group-hover:text-[#000000] transition-colors duration-500">
                  Explore
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrnRush;
