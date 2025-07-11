"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Calendars = () => {
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
      <div ref={sectionRef} className="px-4 md:px-20 py-10 md:py-20 p-[1px] rounded-[20px]">
        <div className="p-[1px] rounded-[20px] bg-roadshow-stats-border">
          <div className="relative p-10 px-4 md:px-10 rounded-[20px] container mx-auto bg-[url('/images/awareness/calendars.webp')] bg-cover bg-center md:bg-right">
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h2 ref={mainTitleRef} className="text-white text-h5 md:text-h4 font-semibold">
                The Future Won&rsquo;t Wait
              </h2>
              <h3 ref={paraRef} className="text-white text-h4 md:text-h5 font-medium">
                Rallying the World for Quantum Security
              </h3>

              <div className="pt-5">
                <p ref={para2Ref} className="text-p2 font-open-sans">
                  Quantum threats are accelerating. Our security must evolve faster.
                  <br />
                  <strong>Quantum Security Awareness Day</strong> was just the start. By 2026, the
                  risks will be louder and more real. <br />
                  Now is the time to act. Shape the global agenda. <br />
                  Build quantum-proof resilience. Defend the digital frontier.
                </p>
                <p ref={buttonRef} className="text-p2 font-open-sans">
                  Shape the global security agenda. Build quantum-proof resilience. Help defend the
                  digital frontier.
                </p>
              </div>
              <div ref={rightCardRef} className="mt-6">
                <Link href="mailto:business@quranium.org" target="_self" rel="noopener noreferrer">
                  <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
                    <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                    <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                      Partner with Quranium
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendars;
