"use client";
import Image from "next/image";
import Link from "next/link";
import { socialMedia } from "@/src/constants/socialMedia";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StayConnected() {
  const sectionRef = useRef(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

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
          "-=0.2"
        )
        .from(
          ".team-desc",
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
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pt-[120px] bg-background rounded-lg">
      <div className="relative px-4 md:px-12 lg:px-24 py-64 text-center">
        <div className="animation-wrapper absolute inset-0 bg-[url('/images/contact/stay-connected-bg.webp')] bg-cover bg-center opacity-60"></div>
        <div className="relative z-10">
          <h2 className="team-title text-3xl md:text-5xl font-semibold text-white">
            Stay Connected with Quranium
          </h2>
          <p className="team-desc pt-2.5 text-white font-sans tracking-normal text-base">
            You can reach us anytime via
            <br />
            <span className="team-button">
              <Link
                href="mailto:business@quranium.org"
                className="text-white hover:opacity-60 duration-300"
              >
                business@quranium.org
              </Link>
            </span>
          </p>
          <div className="pt-10 flex justify-center items-center space-x-6">
            {socialMedia.map((social, index) => (
              <div
                key={social.name}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
              >
                <Link href={social.link} key={social.name} target="_blank">
                  <Image
                    src={social.logo}
                    alt={social.name}
                    width={40}
                    height={40}
                    className="cursor-pointer hover:opacity-50 duration-300 w-6 h-6 md:w-10 md:h-10"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
