"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const JoinQEcosystem = () => {
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
    <div>
      <div
        ref={sectionRef}
        className="mt-10 md:mt-40 px-4 md:px-20 py-10 md:py-40 p-[1px] bg-[url('/images/ecosystem-new/join-q.webp')] md:bg-cover bg-center md:bg-right"
      >
        <div className="relative px-4 md:px-10 container mx-auto">
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 ref={mainTitleRef} className="text-white text-h5 md:text-h3 font-semibold">
              Join the Quranium Ecosystem
            </h2>
            <div className="max-w-[722px] mx-auto mt-[15px]">
              <h3
                ref={paraRef}
                className="text-white text-p2 font-open-sans font-thin md:font-semibold"
              >
                We believe true security is a collective effort, and the future will be built by
                those bold enough to converge across disciplines, technologies, and industries.
              </h3>
            </div>

            <div className="mt-[15px] mb-10 p-[10px] bg-[#A47FFF26] rounded-[10px] max-w-[576px] mx-auto flex gap-[14px]">
              <Image
                src="images/ecosystem-new/hand.svg"
                alt="icon"
                width={24}
                height={24}
                className="-mt-3"
              />
              <p
                ref={buttonRef}
                className="text-p3 italic text-[#EAEAEA] font-open-sans leading-normal text-left"
              >
                If you&rsquo;re a potential partner, collaborator, or media outlet aligned with our
                mission to build an uncrackable digital world, we&rsquo;d love to hear from you.
              </p>
            </div>
            <div ref={rightCardRef} className="mt-6">
              <Link href="#" target="_self" rel="noopener noreferrer">
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
    </div>
  );
};

export default JoinQEcosystem;
