"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TucSection = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef(null);
  const headingRef = useRef(null);
  const triangleRef = useRef(null);

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
      });
      // Animate cards
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

      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      });

      // Animate gradient line
      gsap.from(lineRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 1,
        ease: "power2.out",
      });
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
    <>
      <div
        ref={sectionRef}
        id="the-uncrackable-conversation"
        className="px-4 md:px-20 pt-[120px] overflow-hidden bg-[url('/images/know-your-host/tucbg.webp')] bg-cover"
      >
        <div className="relative max-w-7xl mx-auto pt-0 pb-8 md:pb-0 md:pt-10 px-4 md:px-10 ">
          <div className="absolute top-0 right-0" ref={triangleRef}>
            <Image
              src="/images/homepage/four-traingle.png"
              alt="four-traingle"
              width={207}
              height={202}
              className="w-full mb-5 md:mb-0"
              ref={cardsRef}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 items-center md:text-left pt-[110px] pb-[125px]">
            {/* Left Side - Image (60%) */}
            <div className="flex  mt-10 md:mt-0 relative w-full">
              <Image
                src="/images/know-your-host/tuc-logo.svg"
                alt="TUC Logo"
                width={278}
                height={100}
                className="mb-5 md:mb-0"
                ref={cardsRef}
              />
            </div>

            {/* Right Side - Text (40%) */}
            <div className="relative z-10">
              <p ref={headingRef} className="text-p2 font-open-sans text-left mt-5 mb-5">
                <strong>The Uncrackable Conversation</strong> is our monthly virtual roundtable
                series
                <strong> hosted by Kapil Dhiman,</strong> that brings together C-suite leaders,
                developers, and enterprise innovators to unpack one of the most pressing challenges
                of our time: staying secure in the era of quantum, AI and supercomputing.
              </p>
              <Link href="#" target="_blank" className="inline-flex items-center justify-center">
                <span className="text-h4 font-antonio text-[#08C1F0]">WATCH NOW</span>
                <ChevronRight className="ml-1  mt-1.5 w-9 h-9 text-[#08C1F0] transition-all duration-300 group-hover:translate-x-1 stroke-[#08C1F0]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-6 bg-gradient-to-r from-sky-500 to-purple-500"></div>
    </>
  );
};

export default TucSection;
