"use client";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Convergence = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const para1Ref = useRef(null);
  const pilbtn1Ref = useRef(null);
  const pilbtn2Ref = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(mainTitleRef.current, {
        scrollTrigger: {
          trigger: mainTitleRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.5,
      });

      gsap.from(para1Ref.current, {
        scrollTrigger: {
          trigger: para1Ref.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 1.5,
      });
      gsap.from(pilbtn1Ref.current, {
        scrollTrigger: {
          trigger: pilbtn1Ref.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 2,
      });
      gsap.from(pilbtn2Ref.current, {
        scrollTrigger: {
          trigger: pilbtn2Ref.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 2.5,
      });

      gsap.from(buttonRef.current, {
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="rounded-[20px] mx-4 md:mx-20 mt-20 md:mt-60">
      <div className="max-w-7xl mx-auto py-[50px] md:py-20 px-[16px] md:px-[60px] rounded-[20px] bg-black border border-[#141A24]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-center md:text-left ">
          {/* Left Side */}
          <div className="relative z-10">
            <h3
              ref={mainTitleRef}
              className="text-center md:text-left text-h5 md:text-h4 font-montserrat font-medium md:font-semibold text-white"
            >
              Decentralization alone isn&apos;t enough
            </h3>
            <p
              ref={para1Ref}
              className="pt-[10px] text-white text-center md:text-left text-p2 font-regular"
            >
              True resilience demands quantum-secure, uncrackable infrastructure.
            </p>

            {/* Inline Pill Boxes */}
            <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
              <div ref={pilbtn1Ref} className="rounded-[12px] p-[1px] bg-roadshow-reverse-border">
                <div className="flex items-center justify-center  rounded-[12px] px-5 py-7 text-white text-sm font-medium bg-[#000000] bg-[url('/images/dequip/grid.png')] bg-no-repeat bg-right bg-contain hover:bg-[#1B0637] transition-colors duration-300 ease-in-out">
                  Today&apos;s models fall short
                </div>
              </div>
              <div ref={pilbtn2Ref} className="rounded-[12px] p-[1px] bg-roadshow-reverse-border">
                <div className="flex items-center justify-center  rounded-[12px] px-5 py-7 text-white text-sm font-medium bg-[#000000] bg-[url('/images/dequip/grid.png')] bg-no-repeat bg-right bg-contain hover:bg-[#1B0637] transition-colors duration-300 ease-in-out">
                  It&apos;s time for a new standard
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link ref={buttonRef} href="mailto:business@quranium.org">
              <Button className="group mt-6">
                <span className="text-buttons font-montserrat font-medium">Join the Alliance</span>
                <MoveRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>

          {/* Right Side - Video */}
          <div className="flex items-center justify-center mt-10 md:mt-0 relative w-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto md:ml-auto object-cover rounded-[12px]"
            >
              <source src="/videos/dequip/Tech_page_Tech_animation.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Convergence;
