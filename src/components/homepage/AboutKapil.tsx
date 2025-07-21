"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AboutKapil = () => {
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
    <div ref={sectionRef} id="about-host" className="bg-black px-4 md:px-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto pt-0 pb-8 md:pb-0 md:pt-10 px-4 md:px-10 bg-black">
        <div className="absolute right-0" ref={triangleRef}>
          <Image
            src="/images/homepage/four-traingle.png"
            alt="four-traingle"
            width={207}
            height={202}
            className="w-full mb-5 md:mb-0"
            ref={cardsRef}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 items-center md:text-left">
          {/* Left Side - Image (60%) */}
          <div className="flex items-center justify-center mt-10 md:mt-0 relative w-full">
            <Image
              src="/images/homepage/kapil-dhiman.webp"
              alt="kapil-dhiman"
              width={640}
              height={640}
              className="w-full mb-5 md:mb-0"
              ref={cardsRef}
            />
          </div>

          {/* Right Side - Text (40%) */}
          <div className="relative z-10">
            <h6 className="text-h5 font-antonio font-bold  mb-2">Meet your Host,</h6>
            <h3
              ref={mainTitleRef}
              className="text-h4 text-left md:text-h2 font-antonio font-semibold"
            >
              <span className="bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
                KAPIL DHIMAN
              </span>
            </h3>
            <p ref={headingRef} className="text-p2 font-open-sans text-left mt-5 mb-5">
              Co-Founder & CEO, Quranium
            </p>

            {/* Inline Pill Box */}
            <div
              ref={lineRef}
              className="flex flex-col md:flex-row md:items-center items-start justify-center md:justify-start gap-4"
            >
              <div className="">
                <div className="flex flex-col items-start gap-3 text-white">
                  <div className="flex items-center gap-5 flex-wrap pr-5">
                    <Link
                      href="https://www.linkedin.com/in/kapil-dhiman-5a68b0138?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      className="inline-flex items-center justify-center"
                    >
                      <span className="text-h4 font-antonio text-[#08C1F0]"> ABOUT KAPIL</span>
                      <ChevronRight className="ml-1  mt-1.5 w-9 h-9 text-[#08C1F0] transition-all duration-300 group-hover:translate-x-1 stroke-[#08C1F0]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutKapil;
