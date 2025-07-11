"use client";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Decentralized = () => {
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
        delay: 1.5,
      });
      gsap.from(para2Ref.current, {
        scrollTrigger: {
          trigger: para2Ref.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 2,
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
        delay: 2.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="p-[1px] rounded-[20px]  mx-4 md:mx-20 mt-40">
      <div className="max-w-7xl mx-auto py-[50px] md:py-[0px] px-4 md:px-[60px] rounded-[20px] bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full flex items-end justify-end h-full pt-10">
            <video autoPlay loop muted playsInline className="w-[300px] h-[300px]  object-cover">
              <source src="/videos/dequip/cube-motion.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative z-10 py-28">
            <h3
              ref={mainTitleRef}
              className="text-h5 md:text-h3 font-montserrat font-medium md:font-semibold"
            >
              Decentralization alone isn&apos;t enough.
            </h3>
            <p ref={para1Ref} className="pt-[10px] text-white text-p2 font-open-sans">
              A bold new market category created by Quranium, DeQUIP is built for today’s digital
              demands and tomorrow’s quantum future. It sets a new standard for unbreakable
              security, offering a foundation that is both resilient and visionary.
            </p>
            <p ref={para2Ref} className="mt-5">
              More than a concept, DeQUIP is a movement redefining security for the decentralized
              world, keeping pace with the speed of innovation.
            </p>
            <div ref={buttonRef} className="pt-10">
              <Link href="mailto:hr@quranium.org">
                <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
                  <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                  <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                    Join the Alliance
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

export default Decentralized;
