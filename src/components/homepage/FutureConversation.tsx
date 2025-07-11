"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import RoadshowCarousel from "./RoadshowV2/RoadshowCarousel";

gsap.registerPlugin(ScrollTrigger);

const FutureConversation = () => {
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
    <div ref={sectionRef} className="bg-black px-4 md:px-20">
      <div className="relative max-w-7xl mx-auto pt-0 pb-8 md:py-10 px-4 md:px-10 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-0 md:gap-10 items-center text-center md:text-left">
          {/* Left Side - Image (60%) */}
          <div></div>

          {/* Right Side - Text (40%) */}
          <div className="relative z-10">
            <RoadshowCarousel />
          </div>
        </div>
        <div className="md:absolute md:left-0 md:top-[130px] max-w-[550px]">
          <div className="flex flex-col items-start justify-start mt-10 md:mt-0 relative w-full z-10">
            <h3
              ref={mainTitleRef}
              className="text-h4 text-left md:text-h3 font-antonio font-semibold"
            >
              <span className="bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
                “ The Future, in Conversation.”
              </span>
            </h3>
            <p ref={headingRef} className="text-p2 font-open-sans text-left mt-5 mb-5">
              What if you could listen in as the future takes shape? Hosted by{" "}
              <strong>Kapil Dhiman</strong>, this global podcast goes beyond headlines to explore
              the ideas and breakthroughs redefining how we live, work, and think. It&rsquo;s not
              about trends, but truth. Conversations with the emerging minds driving
              tomorrow&rsquo;s technology, commerce, and culture.
            </p>
            <h6 className="text-h5 font-antonio font-normal">
              This isn&rsquo;t a podcast about the future. This is the future. One conversation at a
              time.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureConversation;
