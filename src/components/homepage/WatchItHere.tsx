"use client";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
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
    title: "35+",
    description: "Watched from Countries",
  },
  {
    title: "20M+",
    description: "Reach",
  },
];

const WatchItHere: React.FC = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="px-4 md:px-20 pt-10 bg-black">
        <h3 className="text-h4 md:text-h3 font-antonio font-semibold text-left mb-10">
          <span className="bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
            Season #1
          </span>{" "}
          was a huge success. Watch it here.
        </h3>
      </div>
      <div
        ref={sectionRef}
        className="px-0 grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-6 rounded-xl md:px-6 pt-0 pb-[30px] bg-black"
      >
        {threats.map((threat, index) => (
          <div
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            key={index}
            className="bg-roadshow-reverse-border rounded-[20px] p-[1px] md:min-h-[329px]"
          >
            <div className=" bg-[#0D0D0D] rounded-[20px] flex flex-col justify-center items-center text-center p-6 md:pb-[40px] h-full hover:bg-[#1B0637] transition-colors duration-300 ease-in-out">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-[102px] font-antonio font-bold text-transparent bg-clip-text leading-none">
                  <span className="bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
                    {threat.title}
                  </span>
                </h3>

                <h5 className="text-h5 font-montserrat font-medium mt-5">{threat.description}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WatchItHere;
