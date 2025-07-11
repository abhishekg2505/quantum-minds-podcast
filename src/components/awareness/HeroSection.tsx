"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/src/components/ui/button";
import Breakthroughs from "./Breakthroughs";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const containerRef = useRef(null);

  const splitWords = (el: HTMLElement, spanClass: string) => {
    const wrapWords = (node: Node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent || "";
        const words = text.split(/(\s+)/);
        return words.map((part) => {
          if (part.trim().length === 0) return document.createTextNode(part);
          const span = document.createElement("span");
          span.className = `${spanClass} inline-block opacity-0`;
          span.textContent = part;
          return span;
        });
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as HTMLElement;
        const clone = element.cloneNode(false) as HTMLElement;
        Array.from(node.childNodes).forEach((child) => {
          wrapWords(child).forEach((wrappedChild) => {
            clone.appendChild(wrappedChild);
          });
        });
        return [clone];
      } else {
        return [node];
      }
    };

    const newChildren = Array.from(el.childNodes).flatMap((node) => wrapWords(node));
    el.innerHTML = "";
    newChildren.forEach((n) => el.appendChild(n));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const title = document.querySelector(".hero-title") as HTMLElement;
      const subtext = document.querySelector(".hero-subtext") as HTMLElement;

      if (title) splitWords(title, "word");
      if (subtext) splitWords(subtext, "subword");

      gsap.set(".hero-title .word", { y: 100, opacity: 0 });
      gsap.set(".hero-subtext .subword", { y: 20, opacity: 0 });

      gsap.to(".hero-overlay", {
        opacity: 0,
        duration: 1.6,
        ease: "power2.out",
        delay: 0.2,
        onComplete: () => {
          const el = document.querySelector(".hero-overlay");
          if (el) el.remove();
        },
      });

      gsap.from(".hero-logo", {
        opacity: 0,
        y: 100,
        duration: 0.7,
        ease: "power2.out",
        delay: 0.5,
      });
      gsap.to(".hero-title .word", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.1,
      });

      gsap.to(".hero-subtext .subword", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "expo.out",
        stagger: 0.01,
        delay: 1,
      });

      const isMobile = window.innerWidth < 640;
      const buttonClass = isMobile ? ".hero-button" : ".sm-hero-button";
      gsap.from(buttonClass, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        delay: 1.8,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[url('/images/awareness/awareness-hero-bg.webp')] bg-cover bg-right sm:bg-center"
    >
      <div className="absolute inset-0 bg-black z-20 hero-overlay" />
      <div className="relative pt-36 pb-10 md:pt-60 md:pb-20 w-full">
        <div className="h-16 absolute inset-0 bg-gradient-to-t from-black/0 via-black/40 to-black/90 z-10" />
        <div className="container mx-auto px-8 md:px-20">
          <div className="mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-10 text-center md:text-left">
              {/* Left Text Section */}
              <div>
                <Image
                  src="/images/awareness/awareness-logo.svg"
                  alt="Uncrackable Conversations"
                  width={426}
                  height={147}
                  className="mx-auto md:mx-0 w-[211px] h-[95px] md:w-[426px] md:h-[147px] hero-logo"
                />
                <h2 className="text-h4 md:text-h3 font-montserrat font-regular mt-5 hero-title">
                  25 April
                  <p className="text-h5 md:text-h4 font-montserrat font-bold">
                    Empowering the Future with Resilience
                  </p>
                </h2>
                <div className="hidden sm:flex gap-4 mt-5 sm-hero-button">
                  <Link
                    href="https://www.linkedin.com/events/theuncrackableconversation-virt7320791200100155392/theater/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="group relative overflow-hidden">
                      <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                      <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#000000] transition-colors duration-500">
                        Episode 1
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Content Section */}
              <div className="flex flex-col items-start space-y-6">
                <p className="text-p1 font-open-sans max-w-md hero-subtext">
                  Quranium launched its first <em>The Uncrackable Conversation</em> virtual
                  roundtable on{" "}
                  <strong className="font-bold">
                    Quantum Security Awareness Day 2025 (25 April).
                  </strong>
                </p>
                <div className="flex gap-4 mt-10 sm:hidden w-full justify-center md:justify-start hero-button">
                  <Link
                    href="https://www.linkedin.com/events/theuncrackableconversation-virt7320791200100155392/theater/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="group relative overflow-hidden">
                      <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                      <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#000000] transition-colors duration-500">
                        Episode 1
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Breakthroughs />
      </div>
    </section>
  );
}
