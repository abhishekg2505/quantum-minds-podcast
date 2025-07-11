"use client";
import React from "react";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface ThreatCardProps {
  title: string;
  description: string;
}

const threats: ThreatCardProps[] = [
  {
    title: "50",
    description: "Young Innovators ",
  },
  {
    title: "6",
    description: "Months Learning",
  },
  {
    title: "10+",
    description: "Products Build",
  },
  {
    title: "40%",
    description: "Talent Absorbed ",
  },
];

const NextgenProgram: React.FC = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const paraRef = useRef(null);
  const boxRef = useRef(null);
  const para2Ref = useRef(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

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
        delay: 0.5,
      });
      gsap.from(paraRef.current, {
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.7,
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
        ease: "power2.out",
        delay: 0.8,
      });
      gsap.from(boxRef.current, {
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        delay: 1,
      });
      gsap.from(para2Ref.current, {
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        delay: 1.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-black text-white px-4 md:px-20 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2
          ref={mainTitleRef}
          className="text-h5 md:text-h4 font-montserrat font-bold text-left md:text-center"
        >
          The NextGen Innovators Program
        </h2>

        <p
          ref={paraRef}
          className="text-p2 font-open-sans text-gray-300 mt-4 text-left md:text-center"
        >
          The NextGen Innovators Program is Quranium&rsquo;s 6-month global internship program,
          offering
          <br /> hands-on experience in blockchain, quantum tech, and innovation.
        </p>
        <div className="px-0 grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-6 rounded-xl p-6">
          {threats.map((threat, index) => (
            <div
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              key={index}
              className="bg-roadshow-reverse-border rounded-[20px] p-[1px] md:min-h-[300px]"
            >
              <div className="bg-[url('/images/technical/mesh-bg.svg')] bg-no-repeat bg-right-top bg-contain bg-[#0C0318] rounded-[20px] flex flex-col justify-start md:justify-center items-start md:items-center text-center p-6 md:pb-[40px] h-full hover:bg-[#1B0637] transition-colors duration-300 ease-in-out">
                <div className="flex flex-col justify-start md:justify-center items-start md:items-center text-left md:text-center">
                  <h3
                    className="text-h2 md:text-[100px] font-montserrat font-normal text-transparent bg-clip-text leading-none text-left md:text-center"
                    style={{
                      backgroundImage:
                        "linear-gradient(258.27deg, #FFFFFF 16.23%, #4C00FF 134.71%)",
                    }}
                  >
                    {threat.title}
                  </h3>

                  <h5 className="text-p2 md:text-h5 font-open-sans md:font-montserrat font-regular md:font-medium mt-5 text-[#999999]">
                    {threat.description}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div ref={boxRef} className="mt-[60px] rounded-[20px]">
          <div className="relative py-[80px] px-4 md:px-10 rounded-[20px] container mx-auto bg-[url('/images/next-gen-innovators/callout1.webp')] bg-cover bg-right sm:bg-center">
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 ref={para2Ref} className="text-white text-h5 md:text-h4 font-semibold">
                We have concluded Chapter 1 and will be opening the entries for Chapter 2 soon.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextgenProgram;
