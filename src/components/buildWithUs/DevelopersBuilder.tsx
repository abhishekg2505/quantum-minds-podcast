"use client";
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
    title: "Quantum Security",
    description: "Built on NIST approved post-quantum cryptography",
  },
  {
    title: "AI-Native Architecture",
    description: "Autonomous agents build, audit, govern, and optimize",
  },
  {
    title: "EVM Compatibility",
    description: "Full support for Ethereum dev tools & smart contracts",
  },
];

const DevelopersBuilder: React.FC = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
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
          trigger: sectionRef.current,
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-4 md:px-20 pt-16 pb-0 bg-[#0C0318] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 ref={mainTitleRef} className="text-h5 md:text-h4 font-montserrat font-bold">
          Meet Quranium - The Convergence Layer
        </h2>
        <p ref={headingRef} className="text-h5 font-montserrat font-medium text-gray-300 mt-4">
          The first Layer 1 infrastructure that combines:
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {threats.map((threat, index) => (
            <div
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              key={index}
              className="bg-roadshow-reverse-border rounded-[20px] p-[1px]"
            >
              <div className="bg-[#0D031B] p-6 h-full rounded-[20px] hover:bg-[#1B0637] hover:hover-no-bg-image transition-colors duration-300 ease-in-out">
                <h3 className="text-p2 font-open-sans md:text-h6 md:font-montserrat md:font-regular font-medium my-3 text-left">
                  {threat.title}
                </h3>
                <p className="text-p3 font-open-sans text-gray-300 text-left">
                  {threat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopersBuilder;
