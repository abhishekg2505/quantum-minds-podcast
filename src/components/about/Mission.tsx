"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "restart none restart none",
        },
      });
      tl.from(".animation-wrapper", {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "expoScale(0.5, 1, power1.in)",
      })
        .from(
          ".mission-title",
          {
            opacity: 0,
            y: 90,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .from(
          ".mission-text",
          {
            opacity: 0,
            y: 80,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="py-16 container mx-auto px-4">
      <div className="animation-wrapper p-[1px] rounded-[20px] bg-roadshow-border mx-4 md:mx-20">
        <div className="relative py-[50px] px-[16px] md:px-[60px] rounded-[20px] bg-background hover:bg-[#1B0637] hover:hover-no-bg-image transition-colors duration-300 ease-in-out">
          <div className="relative z-10">
            <h2 className="mission-title text-white text-h5 md:text-h3 font-medium">Our Mission</h2>
            <p className="mission-text pt-10 text-white text-p2 font-normal">
              To create a digital era that&rsquo;s <strong>Secure, Fast, and Intelligent.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
