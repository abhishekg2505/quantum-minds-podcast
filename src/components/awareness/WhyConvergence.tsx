"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ThreatCardProps {
  title: string;
  media: string;
}

const threats: ThreatCardProps[] = [
  {
    title:
      "A 2024 KPMG-BSI study found 95% of organizations see quantum computing as a major cryptographic threat.",
    media: "/images/awareness/quantum.svg",
  },
  {
    title: "Yet only 25% are addressing it in their risk strategies (KPMG, 2024).",
    media: "/images/awareness/quantum.svg",
  },
  {
    title: "In August 2024, NIST approved the first post-quantum cryptography standards.",
    media: "/images/awareness/bit.svg",
  },
  {
    title:
      "By 2030, quantum computers could break current encryption, so-called “Q-Day” (Tom’s Guide, 2024).",
    media: "/images/awareness/qday.svg",
  },
];

const WhyConvergence: React.FC = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const para1Ref = useRef(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const para2Ref = useRef(null);

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
      gsap.from(para1Ref.current, {
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

      gsap.from(para2Ref.current, {
        scrollTrigger: {
          trigger: para2Ref.current,
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
    <section ref={sectionRef} className="px-4 md:px-20 py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto text-center md:text-left">
        <h2 ref={mainTitleRef} className="text-h5 md:text-h4 font-montserrat font-bold">
          Why it matters
        </h2>
        <p
          ref={para1Ref}
          className="text-p2 font-open-sans text-gray-300 max-w-4xl mt-4 mx-auto md:mx-0"
        >
          Quantum computing holds promise, but also risk. Quantum Security Awareness Day highlights
          the urgent need to defend digital life as quantum tech threatens today&rsquo;s encryption
          and trust systems.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {threats.map((threat, index) => (
            <div
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              key={index}
              className="group perspective"
            >
              <div className="relative w-full h-[305px]">
                <div className="absolute inset-0 bg-roadshow-reverse-border p-[1px] rounded-[20px]">
                  <div className="bg-[#0D031B] p-6 h-full rounded-[20px] flex flex-col justify-start items-start text-left hover:bg-[#1B0637] transition-colors duration-300 ease-in-out">
                    <Image src={threat.media} alt="icon" width={70} height={70} />
                    <h3 className="md:text-p2 font-open-sans text-h6 md:font-montserrat md:font-regular font-medium mt-5">
                      {threat.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p
          ref={para2Ref}
          className="text-p2 font-open-sans text-gray-300 max-w-4xl mt-10 mx-auto md:mx-0"
        >
          In a world where quantum is real, we choose resilience. Conscious defense. Strategic
          readiness.
        </p>
      </div>
    </section>
  );
};

export default WhyConvergence;
