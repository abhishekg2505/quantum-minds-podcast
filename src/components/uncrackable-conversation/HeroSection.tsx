"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
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

      if (title) splitWords(title, "word");

      gsap.set(".hero-title .word", { y: 20, opacity: 0 });

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
      className="relative w-full bg-[url('/images/uncrackable-conversation/uncrackable-conversation-banner.webp')] bg-cover bg-right sm:bg-center"
    >
      <div className="absolute inset-0 bg-black z-20 hero-overlay" />
      <div className="relative pt-36 pb-[267px] md:pt-60 md:pb-80 w-full">
        <div className="h-16 absolute inset-0 bg-gradient-to-t from-black/0 via-black/40 to-black/90 z-10" />
        <div className="container mx-auto px-8 md:px-20">
          <div className="w-full text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
              {/* Left Text Section */}
              <div>
                <Image
                  src="/images/uncrackable-conversation/uncrackable-conversation-logo.svg"
                  alt="Uncrackable Conversations"
                  width={354}
                  height={126}
                  className="hero-logo mx-auto w-[211px] h-[95px] md:w-[354px] md:h-[126px]"
                />
              </div>

              {/* Right Content Section */}
              <div className="flex flex-col items-start space-y-6">
                <h1 className="hero-title text-h5 md:text-h4 font-montserrat font-medium md:font-semibold text-white  text-center md:text-left max-w-md">
                  Our monthly virtual webinar, featuring world experts in digital innovation
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
