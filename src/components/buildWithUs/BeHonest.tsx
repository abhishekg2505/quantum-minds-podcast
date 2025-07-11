"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Blockchain isn’t secure",
    description: "It's still running on 40-year-old cryptography that Quantum will break - ECDSA.",
  },
  {
    title: "AI in crypto is a gimmick",
    description: "Most projects slap AI on a whitepaper with no infrastructure to support it.",
  },
  {
    title: "Quantum is a threat",
    description: "But also the biggest opportunity of the next decade.",
  },
  {
    title: "Adoption is stagnant",
    description:
      "Because blockchain isn't developer-friendly, user-friendly, or even enterprise ready.",
  },
];

export default function BeHonest() {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
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
    <div ref={sectionRef} className="relative bg-[#0c0318] px-5 pt-16 pb-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-[16px] md:px-[60px]">
        <h2
          ref={mainTitleRef}
          className="text-h5 md:text-h3 font-montserrat font-bold mb-[60px] text-center"
        >
          Let&rsquo;s Be Honest. Web3 Is Not Ready.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group perspective"
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
            >
              <div className="relative w-full h-[190px] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div className="absolute inset-0 bg-roadshow-reverse-border p-[1px] rounded-[20px] [backface-visibility:hidden]">
                  <div className="bg-[url('/images/technical/mesh-bg.svg')] bg-no-repeat bg-top bg-contain bg-[#0D031B] p-6 h-full rounded-[20px] flex flex-col justify-center items-center text-left">
                    <h3 className="md:text-p2 font-open-sans text-h6 md:font-montserrat md:font-regular text-center font-medium">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 bg-roadshow-reverse-border p-[1px] rounded-[20px] [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="bg-[#1B0637] p-6 h-full rounded-[20px] flex justify-center items-center text-left">
                    <p className="text-p3 font-open-sans text-gray-300 text-center">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h4
          ref={headingRef}
          className="text-h5 md:text-h4 font-montserrat font-bold mt-10 text-center"
        >
          The stack is broken.
        </h4>
        <div
          ref={lineRef}
          className="w-[300px] mt-5 md:w-[441px] mx-auto h-[1px] bg-gradient-to-r from-[#FFFFFF00] via-white-1 to-[#FFFFFF00]"
        />
      </div>
    </div>
  );
}
