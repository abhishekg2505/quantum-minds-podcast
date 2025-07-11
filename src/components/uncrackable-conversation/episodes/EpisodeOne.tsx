"use client";

import Image from "next/image";
import { Button } from "../../ui/button";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const EpisodeOne: React.FC = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Image */}
          <div ref={imageRef} className="rounded-3xl overflow-hidden">
            <Image
              src="/images/awareness/meet.webp"
              alt="Uncrackable Conversations"
              width={686}
              height={386}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center">
            <div ref={episodeRef}>
              <h3 className="text-h6 md:text-h5 font-bold mb-2">
                Episode 1<br />
                <span className="font-medium">
                  Aired live on 25 April, 2025 on Quantum Security Awareness Day
                </span>
              </h3>

              {/* Collapsible Text Section */}
              <div
                ref={episodeRef}
                className="readmore-section overflow-hidden transition-all duration-700 ease-in-out"
              >
                <p className="text-p2 font-open-sans text-gray-300">
                  The live event aired on 25 April at 12 Noon UTC
                  {!isExpanded && <>... </>}
                  {!isExpanded && (
                    <button
                      onClick={() => setIsExpanded(true)}
                      className="text-white font-semibold underline"
                    >
                      Read More
                    </button>
                  )}
                  {isExpanded && <>,&nbsp;streamed virtually on LinkedIn.</>}
                </p>

                {/* Hidden / Expandable Content */}
                <div
                  className={clsx(
                    "transition-all duration-700 ease-in-out",
                    isExpanded ? "max-h-[2000px] opacity-100 mt-4" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="text-p2 font-bold text-gray-300">
                    Quantum computing is reshaping the world, fast.
                  </p>
                  <p className="text-p2 text-gray-300">
                    While it accelerates breakthroughs in AI and drug discovery, it also cracks the
                    foundations of today&rsquo;s digital security.
                  </p>
                  <p className="text-p2 text-gray-300">
                    Quantum Security Awareness Day marked a call to action: to build resilience
                    through{" "}
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2 text-p2 text-gray-300">
                    <li>Post-Quantum Cryptography </li>
                    <li>Quantum Key Distribution </li>
                    <li>Decentralized quantum-secure infrastructure (DeQUIP) </li>
                  </ul>
                  <p className="text-p2 text-gray-300 mt-2">
                    The future is uncrackable, and it&rsquo;s already begun.
                  </p>
                </div>
              </div>
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
                    Missed the live showing? Watch it here.
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EpisodeOne;
