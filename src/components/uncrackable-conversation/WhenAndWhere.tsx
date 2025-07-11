"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhenAndWhere = () => {
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
    <div ref={sectionRef} className="rounded-[20px] px-4 md:px-20 bg-[#000000CC]">
      <div className="max-w-7xl mx-auto py-[50px] md:py-20 px-[16px] md:px-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-center md:text-left ">
          {/* Left Side */}
          <div className="relative z-10">
            <h3
              ref={mainTitleRef}
              className="text-left text-p2 font-open-sans font-regular text-white"
            >
              <span className="font-bold">The Uncrackable Conversation</span> is our monthly virtual
              roundtable series that brings together C-suite leaders, developers, and enterprise
              innovators to unpack one of the most pressing challenges of our time: staying secure
              in the era of quantum, AI and supercomputing.
            </h3>

            {/* Inline Pill Boxes */}
            <div
              ref={headingRef}
              className="mt-6 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4"
            >
              <div className="rounded-[12px] p-[1px] bg-roadshow-reverse-border">
                <div className="flex flex-col items-start gap-3 px-4 py-4 bg-[#000000] rounded-[12px] text-white bg-[url('/images/dequip/grid.png')] bg-no-repeat bg-right bg-contain hover:bg-[#1B0637] transition-colors duration-300 ease-in-out">
                  <span className="text-h6 font-montserrat font-medium">When & where:</span>
                  <div className="flex items-center gap-5">
                    <Link
                      href="https://x.com/quranium_org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/images/uncrackable-conversation/twitter.png"
                        alt="X"
                        width={25}
                        height={25}
                      />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/events/theuncrackableconversation-virt7327580808024612864/theater/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/images/uncrackable-conversation/linkedin.png"
                        alt="LinkedIn"
                        width={25}
                        height={25}
                      />
                    </Link>
                  </div>
                  <p className="text-p3 text-white font-open-sans text-left">
                    Live at <span className="font-bold">12noon UTC</span> on the last Friday every
                    month.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Video */}
          <div
            ref={cardsRef}
            className="flex items-center justify-center mt-10 md:mt-0 relative w-full"
          >
            <Image
              src="/images/uncrackable-conversation/whenandwhere.webp"
              alt="Uncrackable Conversations"
              width={468}
              height={368}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhenAndWhere;
