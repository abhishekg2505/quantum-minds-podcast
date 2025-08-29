"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { PodcastAttributes } from "@/src/types/podcast";

gsap.registerPlugin(ScrollTrigger);

interface ReleasingSoonSectionProps {
  firstPodcast: PodcastAttributes; // ✅ single object, not array
}

const ReleasingSoonSection: React.FC<ReleasingSoonSectionProps> = ({ firstPodcast }) => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const mainTitle2Ref = useRef(null);
  const lineRef = useRef(null);
  const line2Ref = useRef(null);
  const cardsRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(mainTitleRef.current, {
        scrollTrigger: { trigger: mainTitleRef.current, start: "top 90%" },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });
      gsap.from(mainTitle2Ref.current, {
        scrollTrigger: { trigger: mainTitleRef.current, start: "top 90%" },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(cardsRef.current, {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      });

      gsap.from(headingRef.current, {
        scrollTrigger: { trigger: headingRef.current, start: "top 90%" },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      });

      gsap.from(lineRef.current, {
        scrollTrigger: { trigger: headingRef.current, start: "top 90%" },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 1,
        ease: "power2.out",
      });
      gsap.from(line2Ref.current, {
        scrollTrigger: { trigger: headingRef.current, start: "top 90%" },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="pt-10 rounded-[20px] px-4 md:px-20 bg-black">
      <div className="max-w-7xl mx-auto pt-0 pb-8 md:py-10 px-4 md:px-10 bg-black rounded-[20px]">
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-0 md:gap-10 items-start text-left">
          {/* Left Side */}
          <Link
            href={firstPodcast.videoLink} // use dynamic field if available
            target="_blank"
            className="flex items-start w-full h-full"
            ref={cardsRef}
          >
            <div className="group block w-full h-full overflow-hidden rounded-[20px]">
              <Image
                src={firstPodcast.cover.data.attributes.url} // use API image
                alt={firstPodcast.title}
                width={687}
                height={386}
                className="rounded-[20px] transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          </Link>

          {/* Right Side */}
          <div className="relative z-10">
            <h6 className="text-h6 font-antonio font-bold text-[#08C1F0] tracking-[3.06px] mb-2">
              LATEST RELEASE
            </h6>
            <h3
              ref={mainTitleRef}
              className="text-h4 md:text-h3 font-antonio font-semibold text-white mb-5"
            >
              {firstPodcast.title}
            </h3>
            {/* <p ref={headingRef} className="text-h6 font-montserrat font-medium mt-5 mb-5">
              {firstPodcast.description}
            </p> */}

            <div
              ref={lineRef}
              className="flex flex-col md:flex-row md:items-center items-start justify-center md:justify-start gap-4"
            >
              <div className="flex flex-col items-start gap-3 text-white">
                <div className="flex items-center gap-5 flex-wrap pr-5">
                  <Link href={firstPodcast.videoLink} target="_blank">
                    <span className="text-h4 font-antonio text-[#08C1F0]">WATCH EPISODE</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-0 md:gap-10 items-start text-left mt-[70px]">
          {/* Left Side */}
          <Link
            href="https://www.youtube.com/watch?v=tL2H-tu4nfs&t=14s" // use dynamic field if available
            target="_blank"
            className="flex items-start w-full h-full"
            ref={cardsRef}
          >
            <div className="group block w-full h-full overflow-hidden rounded-[20px]">
              <Image
                src="/images/homepage/s2ep2.webp" // use API image
                alt="S2 Ep1"
                width={425}
                height={239}
                className="rounded-[20px] transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          </Link>

          {/* Right Side */}
          <div className="relative z-10">
            <h3 ref={mainTitle2Ref} className="text-h4 font-antonio font-semibold text-white mb-5">
              Season 2 EP 2 | Kapil Dhiman in Conversation with Fetch.ai&rsquo;s Humayun Sheikh
            </h3>

            <div
              ref={line2Ref}
              className="flex flex-col md:flex-row md:items-center items-start justify-center md:justify-start gap-4"
            >
              <div className="flex flex-col items-start gap-3 text-white">
                <div className="flex items-center gap-5 flex-wrap pr-5">
                  <Link href="https://www.youtube.com/watch?v=tL2H-tu4nfs&t=14s" target="_blank">
                    <span className="text-h4 font-antonio text-[#08C1F0]">WATCH EPISODE</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-0 md:gap-10 items-start text-left mt-[70px]">
          {/* Left Side */}
          <Link
            href="https://www.youtube.com/watch?v=WphsdXWPfMs&t=655s" // use dynamic field if available
            target="_blank"
            className="flex items-start w-full h-full"
            ref={cardsRef}
          >
            <div className="group block w-full h-full overflow-hidden rounded-[20px]">
              <Image
                src="/images/homepage/s2ep1.webp" // use API image
                alt="S2 Ep1"
                width={425}
                height={239}
                className="rounded-[20px] transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          </Link>

          {/* Right Side */}
          <div className="relative z-10">
            <h3 ref={mainTitle2Ref} className="text-h4 font-antonio font-semibold text-white mb-5">
              Season 2 EP1 l Quantum Minds Podcast with Kapil Dhiman & Olivia Karlsson
            </h3>

            <div
              ref={line2Ref}
              className="flex flex-col md:flex-row md:items-center items-start justify-center md:justify-start gap-4"
            >
              <div className="flex flex-col items-start gap-3 text-white">
                <div className="flex items-center gap-5 flex-wrap pr-5">
                  <Link href="https://www.youtube.com/watch?v=WphsdXWPfMs&t=655s" target="_blank">
                    <span className="text-h4 font-antonio text-[#08C1F0]">WATCH EPISODE</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReleasingSoonSection;
