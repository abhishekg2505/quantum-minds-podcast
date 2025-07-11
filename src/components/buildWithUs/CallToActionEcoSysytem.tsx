"use client";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Core Chain",
    link: "https://docs.quranium.org/",
  },
  {
    title: "QSafe Wallet",
    link: "http://docs.qsafewallet.com/",
  },
  {
    title: "QRemix",
    link: "http://docs.qremix.org",
  },
  {
    title: "QRN Scan",
    link: "http://docs.qrnscan.com/",
  },
];

const CallToActionEcoSysytem: React.FC = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const mainTitle1Ref = useRef(null);
  const mapRef = useRef(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate h2 after cards
      gsap.from(mainTitle1Ref.current, {
        scrollTrigger: {
          trigger: mainTitle1Ref.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });
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
      gsap.from(mapRef.current, {
        scrollTrigger: {
          trigger: mapRef.current,
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0C0318] text-white px-4 md:px-20 py-16">
      <div className="max-w-7xl mx-auto">
        <h2
          ref={mainTitle1Ref}
          className="text-h5 md:text-h3 font-montserrat font-bold mb-[60px] text-center"
        >
          Build with Quranium
        </h2>
        <div className="hidden md:block" ref={mapRef}>
          <Image
            src="/images/ecosystem/flowchart.svg"
            alt="flow chart"
            className="md:w-[1280px] md:h-[764px]"
            width={1280}
            height={764}
            useMap="#image-map"
          />
          <map name="image-map">
            <area
              target="_blank"
              alt="Access Qremix IDE"
              title="Access Qremix IDE"
              href="http://www.qremix.org/"
              coords="216,173,28,126"
              shape="rect"
            />
            <area
              target="_blank"
              alt="Connect QSafe Wallet"
              title="Connect QSafe Wallet"
              href="https://www.qsafewallet.com/"
              coords="19,204,225,251"
              shape="rect"
            />
            <area
              target="_blank"
              alt="Verify on QRN Scan"
              title="Verify on QRN Scan"
              href="https://qrnscan.com/"
              coords="638,669,832,717"
              shape="rect"
            />
          </map>
        </div>
        <div className="block md:hidden">
          <Image
            src="/images/ecosystem/flowchart-mobile.svg"
            alt="flow chart"
            className="w-[343px] :h-[511px] mx-auto"
            width={343}
            height={511}
            useMap="#image-map-mobile"
          />

          <map name="image-map-mobile">
            <area
              target="_blank"
              alt="Access Qremix IDE"
              title="Access Qremix IDE"
              href="http://www.qremix.org/"
              coords="10,71,101,99"
              shape="rect"
            />
            <area
              target="_blank"
              alt="Connect QSafe Wallet"
              title="Connect QSafe Wallet"
              href="https://www.qsafewallet.com/"
              coords="6,107,107,134"
              shape="rect"
            />
            <area
              target="_blank"
              alt="Verify on QRN Scan"
              title="Verify on QRN Scan"
              href="https://qrnscan.com/"
              coords="163,375,256,401"
              shape="rect"
            />
          </map>
        </div>

        <div className="mt-9 px-0 grid grid-cols-1 md:grid-cols-4 gap-6 rounded-xl p-6">
          {cards.map((card, index) => (
            <div
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              key={index}
              className="bg-roadshow-reverse-border rounded-[24px] p-[1px] md:min-h-[212px]"
            >
              <div className="bg-[url('/images/technical/mesh-bg.svg')] bg-no-repeat bg-top bg-contain bg-[#0C0318] rounded-[24px] flex flex-col justify-center items-center text-center p-6 md:pb-[40px] h-full">
                <div className="flex flex-col items-center text-center">
                  <h6 ref={mainTitleRef} className="text-h6 font-montserrat font-medium mb-5">
                    {card.title}
                  </h6>
                </div>
                <Link ref={headingRef} href={card.link} target="_blank">
                  <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
                    <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                    <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                      Read Document
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToActionEcoSysytem;
