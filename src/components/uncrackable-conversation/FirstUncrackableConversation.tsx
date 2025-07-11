"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EpisodeOne from "./episodes/EpisodeOne";
import EpisodeTwo from "./episodes/EpisodeTwo";
gsap.registerPlugin(ScrollTrigger);
const FirstUncrackableConversation: React.FC = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const imageRef = useRef(null);
  const episodeRef = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate h2 after cards
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.3,
      });
      gsap.from(mainTitleRef.current, {
        scrollTrigger: {
          trigger: mainTitleRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.4,
      });
      gsap.from(episodeRef.current, {
        scrollTrigger: {
          trigger: episodeRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.5,
      });

      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.6,
      });
      gsap.from(buttonRef.current, {
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      ref={sectionRef}
      className="relative px-4 md:px-20 py-16 bg-[#0D031B] text-white overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="w-[600px] h-[600px] bg-[#2D0098] rounded-full opacity-70 blur-[228px]" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-left mb-12">
          <h2
            ref={mainTitleRef}
            className="text-h4 md:text-h3 font-montserrat font-medium md:font-bold leading-tight"
          >
            The Uncrackable Conversations
          </h2>
        </div>
        <EpisodeTwo />
        <EpisodeOne />
      </div>
    </section>
  );
};

export default FirstUncrackableConversation;
