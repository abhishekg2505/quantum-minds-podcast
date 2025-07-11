"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LayersLattes = () => {
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
    <div ref={sectionRef} className="rounded-[20px] py-[50px] md:py-20 px-4 md:px-20 bg-[#0F0825]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-center md:text-left ">
          {/* Left Side */}
          <div className="relative z-10 md:pr-20">
            <h3
              ref={mainTitleRef}
              className="text-h3 font-montserrat font-semibold mb-5 md:text-left text-center"
            >
              Layers & Lattes
            </h3>
            <h3
              ref={headingRef}
              className="md:text-left text-center text-p1 font-open-sans font-normal text-white"
            >
              The Convergence Breakfast Series is a bi-monthly meetup for ecosystem players across
              AI, blockchain, and quamtum. Designed to spark meaningful conversations over breakfast
              and coffee, the series brings togethers founders and funders to policymakers and
              researchers, exploring how disruptive technologies are shaping tomorrow&rsquo;s
              infrastructure.
            </h3>
          </div>

          {/* Right Side - Video */}
          <div
            ref={cardsRef}
            className="flex items-center justify-center mt-10 md:mt-0 relative w-full"
          >
            <Image
              src="/images/landl/landl.webp"
              alt="Uncrackable Conversations"
              width={468}
              height={368}
              className="w-full md:w-[468px] md:h-[368px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayersLattes;
