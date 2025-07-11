"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Convergence from "./Convergence";

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
      className="relative w-full bg-[url('/images/awareness/awareness-hero-bg.webp')] bg-cover bg-right sm:bg-center"
    >
      <div className="absolute inset-0 bg-black z-20 hero-overlay" />
      <div className="relative pt-36 pb-10 md:pt-60 md:pb-20 w-full">
        <div className="h-16 absolute inset-0 bg-gradient-to-t from-black/0 via-black/40 to-black/90 z-10" />

        <div className="container mx-auto px-4 md:px-20">
          <div className="max-w-7xl mx-auto">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Left Column */}
              <div>
                <h1 className="text-h4 md:text-h2 font-montserrat font-bold text-white hero-title">
                  DeQUIP
                </h1>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <p className="text-p2 font-open-sans font-regular md:text-h4 md:font-montserrat md:font-semibold text-white hero-subtext">
                  Decentralized Quantum-Uncrackable Infrastructure Protocol
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Section */}
        <Convergence />
      </div>
    </section>
  );
}
