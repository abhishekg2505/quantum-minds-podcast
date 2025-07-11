"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const UncrackableConversations: React.FC = () => {
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
    <section
      ref={sectionRef}
      className="relative px-4 md:px-20 md:py-16 bg-[#0D031B] text-white overflow-hidden"
    >
      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-10 p-[1px] bg-roadshow-stats-border rounded-[20px]">
        <div className="flex flex-col-reverse md:flex-row gap-10 items-start bg-[#0D031B] p-5 rounded-[20px]">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <div>
              <p ref={mainTitleRef} className="text-p2 font-open-sans">
                We also premiered Episode 1 of The Uncrackable Conversation, our new virtual
                roundtable series.
              </p>
              <p ref={paraRef} className="text-p2 font-open-sans">
                Featuring four leading experts, the discussion tackled critical topics including:
              </p>
              <ul
                ref={para2Ref}
                className="list-disc list-outside ml-4 space-y-2 text-p2 text-gray-300 leading-none"
              >
                <li>Post-Quantum Cryptography </li>
                <li>Enterprise security gaps </li>
                <li>“Harvest now, decrypt later” risks</li>
                <li>The global race to build uncrackable infrastructure</li>
              </ul>
            </div>
            {/* Watch Button */}
            <div ref={buttonRef} className="mt-6">
              <Link
                href="https://www.linkedin.com/events/theuncrackableconversation-virt7320791200100155392/theater/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
                  <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                  <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                    Watch Episode #1
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}

          <div ref={rightCardRef} className="rounded-3xl overflow-hidden">
            <Image
              src="/images/awareness/meet.webp"
              alt="Uncrackable Conversations"
              width={686}
              height={386}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UncrackableConversations;
