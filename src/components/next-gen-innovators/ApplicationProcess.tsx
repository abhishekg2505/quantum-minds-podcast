"use client";
import { MoveRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ApplicationProcess = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const boxRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(boxRef.current, {
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.5,
      });
      gsap.from(mainTitleRef.current, {
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.7,
      });

      gsap.from(buttonRef.current, {
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        delay: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div ref={sectionRef} className="px-4 md:px-20 pb-10 md:pb-[120px] p-[1px] rounded-[20px]">
        <div
          ref={boxRef}
          className="relative pt-[53px] pb-[73px] px-4 md:px-10 rounded-[20px] container mx-auto bg-[url('/images/homepage/we-are-uncrackable/bg-we-are-uncrackable.png')] bg-cover bg-center sm:bg-center"
        >
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 ref={sectionRef} className="text-white text-h5 md:text-h4 font-semibold">
              The application process for Chapter 2 starts soon!
            </h2>

            <div ref={buttonRef} className="pt-5">
              <Link href="mailto:hr@quranium.org">
                <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
                  <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                  <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                    Submit CV
                    <MoveRight className="ml-2 w-5 h-5 text-[#ffffff] group-hover:text-[#601dff] transition-all duration-400 group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationProcess;
