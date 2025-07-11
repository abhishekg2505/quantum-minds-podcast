"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../ui/button";

gsap.registerPlugin(ScrollTrigger);

const HowToJoin = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef(null);
  const headingRef = useRef(null);

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
          trigger: cardsRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        delay: 0.5,
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
          trigger: lineRef.current,
          start: "top 95%",
        },
        scaleX: 0,
        transformOrigin: "center center",
        duration: 1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="px-4 md:px-20 bg-[#0F0825]">
      <div className="max-w-7xl mx-auto py-[50px] md:py-20 px-[16px]">
        <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-10 items-center text-center md:text-left ">
          {/* Left Side */}
          <div
            ref={cardsRef}
            className="flex items-center justify-center mt-10 md:mt-0 relative w-full"
          >
            <Image
              src="/images/community/howtojoin.webp"
              alt="Quantum"
              width={406}
              height={459}
              className="w-full"
            />
          </div>

          {/* Right Side - Video */}
          <div className="relative z-10">
            <h3
              ref={mainTitleRef}
              className="text-left text-h3 font-montserrat font-semibold text-white mb-[15px]"
            >
              How to Join
            </h3>
            <p ref={headingRef} className="text-p2 font-open-sans mb-[15px]">
              Applications for Intake 1 are now closed. Future intakes will open throughout 2025,
              with curated onboarding to ensure quality, impact, and community integrity.{" "}
            </p>
            <div className="mt-[15px] mb-10 p-[10px] bg-[#A47FFF26] rounded-[10px] flex gap-[5px]">
              <Image src="images/community/like.svg" alt="icon" width={16} height={16} />
              <p className="text-p3 italic text-[#EAEAEA] font-open-sans leading-normal text-left">
                Follow Quranium on social to stay updated on the next round or sign-up to Pulse, our
                monthly newsletter.
              </p>
            </div>
            <Link href="mailto:business@quranium.org" target="_self" rel="noopener noreferrer">
              <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
                <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                  Contact us
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToJoin;
