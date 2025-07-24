"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import RoadshowCarousel from "./Roadshow/RoadshowCarousel";

gsap.registerPlugin(ScrollTrigger);

const PublicSpeaker = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef(null);
  const headingRef = useRef(null);
  const triangleRef = useRef(null);
  // const columnRef = useRef(null);
  // const imgLargeRef = useRef(null);
  // const imgSmallRef = useRef(null);

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

      // gsap.to(imgLargeRef.current, {
      //   y: -150,
      //   scrollTrigger: {
      //     trigger: sectionRef.current,
      //     start: "top bottom",
      //     end: "bottom top",
      //     scrub: 1,
      //   },
      //   ease: "none",
      // });

      // gsap.fromTo(
      //   imgSmallRef.current,
      //   { y: -90 }, // Start above
      //   {
      //     y: 150, // End below
      //     scrollTrigger: {
      //       trigger: sectionRef.current,
      //       start: "top bottom",
      //       end: "bottom top",
      //       scrub: 1,
      //     },
      //     ease: "none",
      //   }
      // );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        id="public-speaker"
        ref={sectionRef}
        className="px-4 md:px-20 pt-[120px] overflow-hidden bg-[url('/images/know-your-host/public-speaker.webp')] bg-cover"
      >
        <div className="relative max-w-7xl mx-auto pt-0 pb-8 md:pb-0 md:pt-10 ">
          <div className="absolute top-0 left-0" ref={triangleRef}>
            <Image
              src="/images/homepage/two-traingles.png"
              alt="two-traingle"
              width={207}
              height={202}
              className="w-full mb-5 md:mb-0"
              ref={cardsRef}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 items-center md:text-left pt-[110px] pb-[125px]">
            {/* Left Side - Image (60%) */}
            <div className="relative order-2 md:order-1">
              <h2 className="text-left text-h2 font-antonio font-normal">
                <span className="bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent uppercase">
                  Public Speaker
                </span>
              </h2>
              <p
                ref={headingRef}
                className="text-p4 md:text-p2 font-open-sans font-normal text-left mt-5 mb-5"
              >
                <strong>Kapil Dhiman</strong> is a global thought leader in startup ecosystem,
                quantum security, and Web3 innovation. As the{" "}
                <strong>Co-founder of Quranium</strong> and the mind behind concepts like DeQUIP and
                Earth 2.0, he brings powerful insights into the future of technology and digital
                economies. With over a decade of experience, Kapil is a dynamic speaker who inspires
                audiences with clarity, vision, and actionable ideas. He frequently speaks on topics
                such as quantum-secure infrastructure, the evolution of Web3 and global economies,
                Earth 2.0, and leadership in deep tech.
              </p>
              <Link
                href="mailto:business@quranium.org"
                target="_blank"
                className="inline-flex items-center justify-center"
              >
                <span className="text-h4 font-antonio text-[#08C1F0]">SPEAKER ENQUIRIES</span>
                <ChevronRight className="ml-1  mt-1.5 w-9 h-9 text-[#08C1F0] transition-all duration-300 group-hover:translate-x-1 stroke-[#08C1F0]" />
              </Link>
            </div>

            {/* Right Side - Text (40%) */}
            <div className="flex  mt-10 md:mt-0 relative w-full order-1 md:order-2">
              <Image
                src="/images/know-your-host/ps-right-large.webp"
                alt="PS Right Large"
                width={614}
                height={464}
                className="max-w-full mb-5 md:mb-0 imglarge rounded-[20px]"
              />

              <div className="absolute -top-[90px] -right-[10px] md:-right-[53px] will-change-transform">
                <Image
                  src="/images/know-your-host/ps-right-small.webp"
                  alt="PS Right Small"
                  width={289}
                  height={212}
                  className="max-w-full mb-5 md:mb-0 imgsmall w-[200px] h-[150px] md:w-[289px] md:h-[212px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative pt-[40px] pb-[80px]">
        <RoadshowCarousel />
      </div>
    </>
  );
};

export default PublicSpeaker;
