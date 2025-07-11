"use client";
import { useEffect, useRef } from "react";
import { Button } from "@/src/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PodcastGuest = () => {
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
          ".team-button",
          {
            opacity: 0,
            y: 70,
            duration: 1,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div ref={sectionRef} className="px-4 md:px-20 pb-10 md:pb-[120px] p-[1px] rounded-[20px]">
        <div className="animation-wrapper relative pt-[53px] pb-[73px] px-4 md:px-10 rounded-[20px] container mx-auto bg-[url('/images/quantum-minds-podcast/cta.webp')] bg-cover bg-right sm:bg-right">
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="team-title text-white text-h5 md:text-h4 font-semibold">
              Want to be our next podcast guest?
            </h2>

            <div className="team-button pt-5">
              <Link href="mailto:business@quranium.org">
                <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
                  <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                  <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                    Join the waitlist
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

export default PodcastGuest;
