"use client";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const QuantumThreat: React.FC = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const mainTitle2Ref = useRef(null);
  const para1Ref = useRef(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const rightCardRef = useRef(null);
  const rightParaRef = useRef(null);
  const rightButtonRef = useRef(null);

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
      gsap.from(mainTitle2Ref.current, {
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

      gsap.from(para1Ref.current, {
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
      gsap.from(rightCardRef.current, {
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
      gsap.from(rightParaRef.current, {
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
      gsap.from(rightButtonRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.6,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-4 md:px-20 py-16 bg-[#0D031B] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <h2
            ref={mainTitleRef}
            className="text-h5 md:text-h4 font-montserrat font-semibold leading-tight"
          >
            Quantum Security Awareness Day 2025
          </h2>
          <h2 ref={mainTitle2Ref} className="text-h5 md:text-h4 font-montserrat font-normal">
            Launching a Movement, Not Just a Moment
          </h2>
          <p ref={para1Ref} className="text-p2 font-open-sans text-[#EAEAEA] mt-4">
            In 2025, Quranium sparked a global call to action with the first-ever Quantum Security
            Awareness Day—highlighting the urgent need to protect digital infrastructure against the
            rising wave of quantum and supercomputing threats.
          </p>
        </div>

        {/* Right Side */}
        <div
          ref={rightCardRef}
          className="bg-roadshow-reverse-border p-[1px] rounded-2xl relative overflow-hidden"
        >
          <div className="bg-[#0D031B] p-6 rounded-2xl backdrop-blur-md relative hover:bg-[#1B0637] transition-colors duration-300 ease-in-out">
            <p ref={rightParaRef} className="text-p2 font-open-sans text-gray-300">
              We debuted our Enterprise Quantum Readiness Survey, uncovering a vital insight: 75% of
              enterprise tech leaders recognize quantum&rsquo;s disruptive power, but 60% have yet
              to take action.
            </p>
            <div ref={rightCardRef} className="mt-5">
              <Link
                href="https://quranium-org.medium.com/the-quantum-threat-is-here-where-are-we-598fd5f05b72"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
                  <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                  <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                    Explore the Survey Findings
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

export default QuantumThreat;
