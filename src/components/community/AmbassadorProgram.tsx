"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ThreatCardProps {
  media: string;
  title: string;
  desc: string;
}

const threats: ThreatCardProps[] = [
  {
    media: "/images/community/prize.svg",
    title: "Quantum Champions (QChamp)",
    desc: "Public-facing experts and creators who drive global conversations on AI, cybersecurity, and quantum-safe blockchain through content, events, and thought leadership.",
  },
  {
    media: "/images/community/crown.svg",
    title: "Convergence Leaders (QSquad)",
    desc: "Educators, content creators, and community catalysts who make complex topics accessible, sparking engagement across workshops, communities, and digital platforms.",
  },
  {
    media: "/images/community/globe.svg",
    title: "Ecosystem Builders (QBuilder)",
    desc: "Developers, moderators, and technical contributors helping to shape Quranium’s core infrastructure, integrations, and user experience.",
  },
];

const AmbassadorProgram: React.FC = () => {
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
        <h2 ref={mainTitleRef} className="text-h5 md:text-h3 font-montserrat font-semibold">
          The Quranium Ambassador Program
        </h2>
        <h5 ref={para1Ref} className="text-h5 font-montserrat font-medium">
          Real Voices. Real Impact.
        </h5>
        <p ref={para1Ref} className="text-p2 font-open-sans mt-[15px]">
          The Quranium Ambassador Program is where talent meets purpose; a global initiative that
          empowers individuals to actively shape the future of quantum-secure infrastructure.
          Whether you&rsquo;re a public thought leader, a community educator, or a hands-on builder,
          there&rsquo;s a place for you here.
        </p>
        <h5 ref={para1Ref} className="text-h5 font-montserrat font-medium mt-20">
          Structured into three dynamic categories, the program is designed to harness a wide range
          of skills
        </h5>
        <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {threats.map((threat, index) => (
            <div
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              key={index}
              className="group perspective"
            >
              <div className="relative w-full h-[305px]">
                <div className="absolute inset-0 rounded-[20px]">
                  <div className="bg-[#0C0318] p-6 h-full rounded-[20px] flex flex-col justify-start items-start text-left hover:bg-[#1B0637] transition-colors duration-300 ease-in-out">
                    <Image src={threat.media} alt="icon" width={70} height={70} />
                    <h3 className="text-h4 font-montserrat font-semibold mt-5">{threat.title}</h3>
                    <h6 className="text-h6 font-montserrat font-medium mt-5">{threat.desc}</h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmbassadorProgram;
