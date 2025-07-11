"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const QuantumMindsPodcast = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef(null);
  const headingRef = useRef(null);

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="rounded-[20px] mt-[75px] md:mt-40 px-4 md:px-20">
      <div className="max-w-7xl mx-auto pt-0 pb-8 md:py-10 px-4 md:px-10 bg-black rounded-[20px]">
        <div className="grid grid-cols-1 md:[grid-template-columns:3fr_2fr] gap-0 md:gap-10 items-center text-center md:text-left">
          {/* Left Side - Image (60%) */}
          <div className="flex items-center justify-center mt-10 md:mt-0 relative w-full">
            <Image
              src="/images/quantum-minds-podcast/s2e1.webp"
              alt="Quantum Minds Podcast"
              width={687}
              height={386}
              className="w-full mb-5 md:mb-0 rounded-[20px]"
              ref={cardsRef}
            />
          </div>

          {/* Right Side - Text (40%) */}
          <div className="relative z-10">
            <h3
              ref={mainTitleRef}
              className="text-h4 text-left md:text-h3 font-open-sans font-semibold text-white"
            >
              Quantum Minds Podcast: Season #2 Releasing Soon
            </h3>
            <p ref={headingRef} className="text-h6 font-montserrat text-left font-medium mt-5 mb-2">
              Season 2 EP 1 Trailer | Kapil Dhiman in Conversation with Animoca Brand&rsquo;s Yat
              Siu
            </p>

            {/* Inline Pill Box */}
            <div
              ref={lineRef}
              className="flex flex-col md:flex-row md:items-center items-start justify-center md:justify-start gap-4"
            >
              <div className="">
                <div className="flex flex-col items-start gap-3  py-2  text-white">
                  <div className="flex items-center gap-5 flex-wrap pr-5">
                    <Link href="https://youtu.be/yamvBZuSCGg?si=3RaILgVRG0W5QtIY" target="_blank">
                      <Image
                        src="/images/quantum-minds-podcast/youtube.svg"
                        alt="YouTube"
                        width={35}
                        height={35}
                      />
                    </Link>
                    {/* <Link
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
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumMindsPodcast;
