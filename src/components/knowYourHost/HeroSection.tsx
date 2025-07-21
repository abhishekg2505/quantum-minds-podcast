"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
const socialIcons = [
  {
    name: "X",
    src: "/images/know-your-host/x.svg",
    link: "#",
  },
  {
    name: "LinkedIn",
    src: "/images/know-your-host/linkedin.svg",
    link: "#",
  },
  {
    name: "Medium",
    src: "/images/know-your-host/medium.svg",
    link: "#",
  },
  {
    name: "Instagram",
    src: "/images/know-your-host/instagram.svg",
    link: "#",
  },
];
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
          span.className = `${spanClass} inline-block opacity-0 bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent`;
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
      const title2 = document.querySelector(".hero-title2") as HTMLElement;
      const subtext = document.querySelector(".hero-subtext") as HTMLElement;

      if (title) splitWords(title, "word");
      if (title2) splitWords(title2, "word");
      if (subtext) splitWords(subtext, "subword");

      gsap.set(".hero-title .word", { y: 100, opacity: 0 });
      gsap.set(".hero-title2 .word", { y: 100, opacity: 0 });
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
      gsap.to(".hero-title2 .word", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.1,
        delay: 0.7,
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
    <>
      <section ref={containerRef} className="relative w-full">
        <div className="absolute left-0 top-0 px-4 md:px-20 pt-[30px]">
          <Image
            src="/logo.svg"
            alt="four-traingle"
            width={128}
            height={42}
            className="w-full mb-5 md:mb-0"
          />
        </div>
        <div className="absolute inset-0 bg-black z-20 hero-overlay" />
        <div className="relative pt-[350px] md:pt-24 w-full">
          <div className="h-16 absolute inset-0  z-10" />
          <div className="relative container mx-auto px-4 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-0 md:gap-10 items-center md:text-left">
              {/* Left Side - Image (60%) */}
              <div className="pb-[100px]">
                <h6 className="text-h5 font-antonio font-bold  mb-2">About,</h6>
                <h1 className="text-h4 text-left md:text-h2 font-antonio font-semibold">
                  <span className="bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
                    KAPIL DHIMAN
                  </span>
                </h1>
                <p className="text-p2 font-open-sans text-left mt-[10px] mb-[10px]">
                  <strong>Kapil Dhiman</strong> is a globally recognized business leader and
                  strategist with over a decade of experience across emerging technologies and
                  entrepreneurship. As CEO and Co-founder of <strong>Quranium</strong>, he is
                  building quantum-secure, decentralized infrastructure at the intersection of
                  <strong> blockchain, cybersecurity, and AI</strong> to power the future of digital
                  economies.
                </p>
                <p className="text-p2 font-open-sans text-left mb-[10px]">
                  His career spans the full innovation spectrum, from advising multi-billion-dollar
                  enterprises and regulators to backing more than <strong>35+ startups</strong>{" "}
                  across strategy, product, and go-to-market. Formerly the{" "}
                  <strong>Web3 Business Leader at PwC India,</strong> Kapil led major initiatives
                  bridging legacy industries with decentralized tech. His last startup was named
                  Metaverse Startup of the Year in 2023, and he is a{" "}
                  <strong>founding member of the DavosWeb3 Roundtable.</strong>
                </p>
                <p className="text-p2 font-open-sans text-left mb-[10px]">
                  Beyond tech, Kapil is deeply interested in human psychology and social behavior.
                  He created the{" "}
                  <Link href="https://trustperhuman.com/" target="blank" className="underline">
                    <strong>&rsquo;Trust Per Human&rsquo; (TPH)</strong>
                  </Link>{" "}
                  framework to redefine how we measure trust in digital interactions. As an author
                  and active writer, he shares reflections on life, mindset, and growth, blending
                  systems thinking with soul for those pursuing bold visions in the world and within
                  themselves.
                </p>

                <div className="flex gap-4 bg-black">
                  {socialIcons.map((icon, idx) => (
                    <a
                      key={idx}
                      href={icon.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center rounded-full hover:scale-110 transition-transform"
                    >
                      <Image
                        src={icon.src}
                        alt={icon.name}
                        width={37}
                        height={37}
                        className="object-contain"
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Side - Text (40%) */}
              <div className="flex items-end h-full">
                <Image
                  src="/images/know-your-host/kyh-banner.webp"
                  alt="kapil-dhiman"
                  width={760}
                  height={640}
                  className="w-full mb-5 md:mb-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
