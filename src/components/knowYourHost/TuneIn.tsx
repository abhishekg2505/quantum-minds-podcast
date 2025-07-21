"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import RoadshowCarousel from "./RoadshowV2/RoadshowCarousel";
import { ChevronRight } from "lucide-react";
import MpSection from "./MpSection";

gsap.registerPlugin(ScrollTrigger);

const TuneIn = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef(null);
  const headingRef = useRef(null);
  const triangleRef = useRef(null);

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

      // Animate gradient line
      gsap.from(lineRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 1,
        ease: "power2.out",
      });
      gsap.to(triangleRef.current, {
        y: -10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="quantum-minds-podcast"
      className="scroll-mt-24 bg-black px-4 md:px-20"
    >
      <div className="relative max-w-7xl mx-auto pt-0 pb-8 md:py-10 md:px-10 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-0 md:gap-10 items-center text-center md:text-left">
          <div className="relative z-10">
            <div className="flex flex-col items-center justify-start mt-10 md:mt-0 relative max-w-[894px] mx-auto">
              <Image
                ref={mainTitleRef}
                src="/logo.svg"
                alt="Quranium Logo"
                width={212}
                height={69}
                priority
              />

              <p ref={headingRef} className="text-p2 font-open-sans text-center mt-5 mb-5">
                Hosted by <strong>Kapil Dhiman</strong>, this global podcast goes beyond headlines
                to explore the ideas and breakthroughs redefining how we live, work, and
                think.It&rsquo;s not about trends, but truth. Conversations with the emerging minds
                driving tomorrow&rsquo;s technology, commerce, and culture.
              </p>
              <Link href="#" target="_blank" className="inline-flex items-center justify-center">
                <span className="text-h4 font-antonio text-[#08C1F0]"> TUNE IN</span>
                <ChevronRight className="ml-1  mt-1.5 w-9 h-9 text-[#08C1F0] transition-all duration-300 group-hover:translate-x-1 stroke-[#08C1F0]" />
              </Link>
            </div>
            <RoadshowCarousel />
            <MpSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuneIn;
