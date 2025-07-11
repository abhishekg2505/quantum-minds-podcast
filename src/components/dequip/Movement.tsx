"use client";
import { Button } from "@/src/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Movement = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
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
        delay: 1,
      });
      gsap.from(para2Ref.current, {
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
      gsap.from(buttonRef.current, {
        scrollTrigger: {
          trigger: para1Ref.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="px-4 md:px-20 py-20 p-[1px] rounded-[20px]">
      <div className="relative py-[110px] px-4 md:px-20 rounded-[20px] container mx-auto bg-[url('/images/dequip/movement-bg.webp')] bg-cover bg-right sm:bg-center">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 ref={mainTitleRef} className="text-white text-h5 md:text-h3 font-semibold">
            Get Onboard.
          </h2>
          <p ref={para1Ref} className="pt-2.5 text-white text-p3 md:text-p2 font-normal">
            Tomorrow&apos;s leaders aren&apos;t just decentralized; they&apos;re uncrackable. <br />
            DeQUIP is the new frontier for unstoppable digital infrastructure.
          </p>
          <p ref={para2Ref} className="pt-2.5 text-white text-p3 md:text-p2 font-normal mt-5">
            Shape the category. Set the standard. <br />
            Build the future only the uncrackable can claim.
          </p>
          <div ref={buttonRef} className="pt-10">
            <Link href="mailto:business@quranium.org">
              <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
                <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                  Join the DeQUIP Alliance
                  <MoveRight className="ml-2 w-5 h-5 text-[#ffffff] group-hover:text-[#601dff] transition-all duration-400 group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movement;
