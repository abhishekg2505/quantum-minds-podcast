"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import QuantumMindsPodcast from "./QuantumMindsPodcast";
import MediaPartner from "./MediaPartner";

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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[url('/images/quantum-minds-podcast/qmp-hero.webp')] bg-contain bg-no-repeat bg-top"
    >
      <div className="absolute inset-0 bg-black z-20 hero-overlay" />
      <div className="relative pt-36 pb-10 md:pt-60 md:pb-[120px] w-full">
        <div className="h-16 absolute inset-0 bg-gradient-to-t from-black/0 via-black/40 to-black/90 z-10" />
        <div className="container mx-auto px-8 md:px-20">
          <div className="w-full text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
              {/* Left Text Section */}
              <div>
                <Image
                  src="/images/quantum-minds-podcast/quantum-minds-podcast-logo.png"
                  alt="Uncrackable Conversations"
                  width={354}
                  height={126}
                  className="mx-auto w-[214px] h-[70px] md:w-[354px] md:h-[126px] hero-logo"
                />
              </div>

              {/* Right Content Section */}
              <div className="flex flex-col md:items-start space-y-6">
                <p className="text-p3 md:text-p2 font-open-sans text-white max-w-md text-center md:text-left hero-subtext">
                  A global podcast hosted by Kapil Dhiman that delves into groundbreaking ideas and
                  disruptive innovations shaping the future of technology, commerce, and society
                  with the best emerging minds in technology.
                </p>
                <h1 className="hero-title mt-7 text-h4 font-montserrat font-bold text-white  text-center md:text-left max-w-md">
                  Season #2 is releasing soon
                </h1>
              </div>
            </div>
          </div>
        </div>
        <QuantumMindsPodcast />
        <MediaPartner />
      </div>
    </section>
  );
}
