"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/src/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const UncrackableTeam = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".animation-wrapper", {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power2.out",
      })
        .from(
          ".team-title",
          {
            opacity: 0,
            y: 90,
            duration: 1.2,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .from(
          ".team-desc",
          {
            opacity: 0,
            y: 80,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .from(
          ".team-button",
          {
            opacity: 0,
            y: 70,
            duration: 1,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="px-4 md:px-20 pb-20 p-[1px] rounded-[20px] -mt-[130px] md:-mt-[250px] "
    >
      <div className="animation-wrapper relative py-20 px-4 md:px-20 rounded-[20px] container mx-auto bg-[url('/images/common/bg/call-to-action-bg.webp')] bg-cover bg-right sm:bg-center">
        <div className="relative z-10 mx-auto text-center">
          <h2 className="team-title text-white text-h5 md:text-h3 font-medium">
            Become part of our uncrackable team
          </h2>
          <p className="team-desc pt-2.5 text-white text-p3 md:text-p2 font-normal">
            Only If you are curious and hungry.
          </p>
          <div className="team-button pt-10">
            <Link href="/careers">
              <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
                <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-300">
                  Join the revolution
                  <MoveRight className="ml-2 w-5 h-5 text-[#ffffff] group-hover:text-[#601dff] transition-all duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UncrackableTeam;
