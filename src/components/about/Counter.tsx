"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/src/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "50+", label: "Global Team" },
  { value: "3", label: "Global Offices" },
  { value: "150k+", label: "Global Community" },
  { value: "", label: "" },
];

function Counter() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const leftColumnRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "restart none restart none",
        },
      });
      tl.from(
        ".hero-title",
        {
          opacity: 0,
          y: 90,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.3"
      ).from(
        ".hero-button",
        {
          opacity: 0,
          y: 80,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.3"
      );
      mm.add("(min-width: 768px)", () => {
        // Pin left column on large screens
        if (leftColumnRef.current && containerRef.current) {
          ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top 48px",
            end: "bottom bottom",
            pin: leftColumnRef.current,
            pinSpacing: false,
          });
        }

        // Animate stats in right column
        itemsRef.current.forEach((item) => {
          if (item) {
            gsap.fromTo(
              item,
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                  trigger: item,
                  start: "top 80%",
                  toggleActions: "play none none reverse",
                },
                duration: 0.6,
                ease: "power2.out",
              }
            );
          }
        });
      });
    }, containerRef);

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#0f001f] text-white overflow-hidden px-4 py-24"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column (Pinned on scroll) */}
        <div ref={leftColumnRef}>
          <h2 className="text-h5 md:text-h3 font-semibold pb-14 hero-title">
            Home to the Uncrackable Digital Future
          </h2>
          <div className="hero-button">
            <Link href="/contact-us">
              <Button variant="outline" className="group relative overflow-hidden">
                <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#000000] transition-colors duration-500">
                  Contact us
                </span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column (scrollable stats) */}
        <div className="flex flex-col gap-24 pt-10 lg:pl-16 xl:pl-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) {
                  itemsRef.current[index] = el;
                }
              }}
              className="md:opacity-0 lg:min-h-48"
            >
              <div className="text-8xl md:text-[140px] leading-[100%] font-bold bg-[linear-gradient(258.27deg,#4C00FF_16.23%,#FFFFFF_134.71%)] text-transparent bg-clip-text">
                {stat.value}
              </div>
              <p className="text-p3 text-gray-300 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Counter;
