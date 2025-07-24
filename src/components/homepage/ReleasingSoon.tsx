"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const ReleasingSoon = () => {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="pt-10 rounded-[20px] px-4 md:px-20 bg-black">
      <div className="max-w-7xl mx-auto pt-0 pb-8 md:py-10 px-4 md:px-10 bg-black rounded-[20px]">
        <div className=" grid grid-cols-1 md:grid-cols-[60%_40%] gap-0 md:gap-10 items-start text-left">
          {/* Left Side - Image (60%) */}
          <Link
            href="https://youtu.be/WphsdXWPfMs?si=3pPlJiHhIldzyA1O"
            target="_blank"
            className="block w-full h-full overflow-hidden rounded-[20px]"
          >
            <div className="group block w-full h-full overflow-hidden rounded-[20px] ">
              <Image
                src="/images/homepage/s2ep1.webp"
                alt="Quantum Minds Podcast"
                width={687}
                height={386}
                className="w-full h-full rounded-[20px] transition-transform duration-500 ease-in-out hover:scale-110 object-cover"
                ref={cardsRef}
              />
            </div>
          </Link>

          {/* Right Side - Text (40%) */}
          <div className="relative z-10">
            <h6 className="text-h6 font-antonio font-bold text-[#08C1F0] tracking-[3.06px] mb-2">
              LATEST RELEASE
            </h6>
            <h3
              ref={mainTitleRef}
              className="text-h4 text-left md:text-h3 font-antonio font-semibold text-white "
            >
              Season 2 EP 1| Kapil Dhiman in conversation with Animoca Brand&rsquo;s Yat Siu
            </h3>
            <p ref={headingRef} className="text-h6 font-montserrat text-left font-medium mt-5 mb-5">
              Season 2 Released | Quantum Minds Podcast
            </p>

            {/* Inline Pill Box */}
            <div
              ref={lineRef}
              className="flex flex-col md:flex-row md:items-center items-start justify-center md:justify-start gap-4"
            >
              <div className="">
                <div className="flex flex-col items-start gap-3 text-white">
                  <div className="flex items-center gap-5 flex-wrap pr-5">
                    <Link href="https://youtu.be/WphsdXWPfMs?si=3pPlJiHhIldzyA1O" target="_blank">
                      <span className="text-h4 font-antonio text-[#08C1F0]"> WATCH EPISODE</span>
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

export default ReleasingSoon;
