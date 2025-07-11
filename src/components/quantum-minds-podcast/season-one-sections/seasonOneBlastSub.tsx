"use client";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import React from "react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WatchCounter from "./WatchCounter";
import { Button } from "../../ui/button";
gsap.registerPlugin(ScrollTrigger);

const SeasonOneBlastSub = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);
  const button2Ref = useRef(null);
  const season1imageRef = useRef(null);
  const thumbnailTitleRef = useRef(null);

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
      gsap.from(buttonRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.5,
        ease: "power2.out",
      });

      // Animate gradient line
      gsap.from(season1imageRef.current, {
        scrollTrigger: {
          trigger: season1imageRef.current,
          start: "top 95%",
        },
        opacity: 0,
        y: 30,
        duration: 0.3,
        ease: "power2.out",
        delay: 1,
      });
      gsap.from(thumbnailTitleRef.current, {
        scrollTrigger: {
          trigger: thumbnailTitleRef.current,
          start: "top 95%",
        },
        opacity: 0,
        y: 30,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.from(button2Ref.current, {
        scrollTrigger: {
          trigger: button2Ref.current,
          start: "top 95%",
        },
        opacity: 0,
        y: 30,
        duration: 0.5,
        delay: 1.2,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={sectionRef}
        className="grid md:grid-cols-[70%_30%] gap-6 items-center px-6 pb-[60px]"
      >
        <div>
          <h2 ref={mainTitleRef} className="text-h5 md:text-h3 font-semibold">
            Season #1 was a huge success. Watch it here.
          </h2>
          <p ref={headingRef} className="text-p3 md:text-p2 font-open-sans text-white-2 mt-2">
            Series #1 - The Numbers
          </p>
        </div>
        <div ref={buttonRef} className="md:text-right">
          <Link href="https://www.youtube.com/@Quranium" target="_blank">
            <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
              <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
              <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                Watch All
                <MoveRight className="ml-2 w-5 h-5 text-[#ffffff] group-hover:text-[#601dff] transition-all duration-400 group-hover:translate-x-1" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
      <WatchCounter />
      <div className="grid grid-cols-1 md:[grid-template-columns:3fr_2fr] gap-0 md:gap-10 text-center md:text-left pb-[30px]">
        {/* Left Side - Image (60%) */}
        <div
          ref={season1imageRef}
          className="flex items-center justify-center mt-10 md:mt-0 relative w-full"
        >
          <Image
            src="/images/quantum-minds-podcast/season1.webp"
            alt="Quantum Minds Podcast"
            width={687}
            height={386}
            className="w-full hidden sm:block"
          />
        </div>

        {/* Right Side - Text (40%) */}
        <div className="relative z-10">
          <h5
            ref={thumbnailTitleRef}
            className="text-h5 font-montserrat font-medium text-left my-5"
          >
            Season #1 Wrap-up Episode l Quantum Minds Podcast with Kapil Dhiman & Olivia Karlsson
          </h5>

          {/* Inline Pill Box */}
          <div
            ref={button2Ref}
            className="mt-6 flex flex-col md:flex-row items-left md:items-center justify-center md:justify-start gap-4"
          >
            <div className="rounded-[12px] p-[1px] bg-roadshow-reverse-border">
              <div className="flex flex-col items-start gap-3 px-4 py-4 bg-[#000000] rounded-[12px] text-white bg-[url('/images/dequip/grid.png')] bg-no-repeat bg-right bg-contain">
                <span className="text-h6 font-montserrat font-medium">Available on</span>
                <div className="flex items-center gap-5 flex-wrap pr-5">
                  <Link
                    href="https://www.youtube.com/watch?v=XWYRQ7a0PP8&list=PLy8ZPcFOAwe4NmRbRTHH9IpxhoOaX1UWv"
                    target="_blank"
                  >
                    <Image
                      src="/images/quantum-minds-podcast/youtube.svg"
                      alt="YouTube"
                      width={35}
                      height={35}
                    />
                  </Link>
                  <Link
                    href="https://open.spotify.com/show/06rLwUrcFHqh0Xibaf1tMC?si=8c2505d2d29d498c"
                    target="_blank"
                  >
                    <Image
                      src="/images/quantum-minds-podcast/spotify.svg"
                      alt="spotify"
                      width={35}
                      height={35}
                    />
                  </Link>
                  <Link
                    href="https://podcasts.apple.com/us/podcast/quantum-minds-podcast/id1805899701"
                    target="_blank"
                  >
                    <Image
                      src="/images/quantum-minds-podcast/music.svg"
                      alt="Apple Music"
                      width={35}
                      height={35}
                    />
                  </Link>
                  <Link
                    href="https://music.amazon.com/podcasts/be3e12aa-2e28-45a0-8bce-ddc642ccc23c/quantum-minds-podcast"
                    target="_blank"
                  >
                    <Image
                      src="/images/quantum-minds-podcast/amazonmusic.svg"
                      alt="Amazon Music"
                      width={35}
                      height={35}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeasonOneBlastSub;
