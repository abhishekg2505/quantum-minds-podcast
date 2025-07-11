"use client";
import { useEffect, useRef } from "react";
import { Button } from "@/src/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CampusProgram = () => {
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
      <div
        ref={sectionRef}
        className="px-4 md:px-20 pb-10 md:pb-[80px] p-[1px] rounded-[20px] bg-black"
      >
        <div className="animation-wrapper relative  py-[40px] px-4 md:px-20 rounded-[20px] container mx-auto bg-[url('/images/community/ctabg.webp')] bg-cover bg-right sm:bg-right">
          <div className="flex flex-col md:flex-row md:justify-between items-center relative z-10 max-w-7xl mx-auto">
            <div className="max-w-[553px]">
              <h2 className="team-title text-white text-h5 md:text-h4 font-normal">
                A dedicated <span className="font-semibold">Campus Ambassador Program,</span>{" "}
                designed to activate <span className="font-semibold">Gen-Z leaders</span> through{" "}
                <span className="font-semibold">on-campus blockchain</span> and{" "}
                <span className="font-semibold">quantum education campaigns.</span>
              </h2>
            </div>

            <div className="team-button pt-5">
              <Link href="https://docs.qsafewallet.com/all-features/swapping" target="_blank">
                <Button variant="outline" className="group relative overflow-hidden">
                  <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                  <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#000000] transition-colors duration-500">
                    Coming Soon
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

export default CampusProgram;
