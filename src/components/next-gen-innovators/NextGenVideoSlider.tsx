"use client";
import Link from "next/link";
import Carousel from "@/src/components/common/Carousel";
import Image from "next/image";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const videos = [
  {
    id: 1,
    img: "/images/careers/next-gen/img1.webp",
    link: "https://www.youtube.com/watch?v=gB89gAQaH_0",
  },
  // {
  //   id: 2,
  //   img: "/images/careers/next-gen/img2.png ",
  //   link: "https://www.youtube.com/watch?v=MS8WOYv81Kk&t",
  // },
  {
    id: 3,
    img: "/images/careers/next-gen/img3.webp",
    link: "https://www.youtube.com/watch?v=QIJRfBIHjx0",
  },
  {
    id: 4,
    img: "/images/careers/next-gen/img4.webp",
    link: "https://www.youtube.com/watch?v=NVzLmDQR4VU",
  },
  {
    id: 5,
    img: "/images/careers/next-gen/img5.webp",
    link: "https://www.youtube.com/watch?v=nZxvYT0U5GY",
  },
];

export default function NextGenVideoSlider() {
  const sectionRef = useRef(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        delay: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={sectionRef} className="pt-20 pb-[120px]">
        <div className="max-w-7xl mx-auto relative mb-[60px]">
          <h2 className="text-h5 md:text-h4 font-montserrat font-bold text-left md:text-center">
            Meet some of our interns from Class #1
          </h2>
        </div>
        <Carousel direction="left" speed={100}>
          {[...videos, ...videos, ...videos].map((img, i) => (
            <div
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              key={i}
            >
              <Link
                href={img.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`py-10 relative flex-shrink-0 mx-[12px] w-[302px] h-[428px] rounded-[20px] overflow-hidden block ${
                  i % 2 == 0 ? "translate-y-4 my-10" : ""
                }`}
              >
                <Image
                  src={img.img}
                  alt={`video-${i}`}
                  fill
                  className="object-cover"
                  quality={100}
                />
                <div className="absolute bottom-6 left-6">
                  <Image src="icons/play.svg" alt="Play Icon" width={58} height={58} />
                </div>
              </Link>
            </div>
          ))}
        </Carousel>
      </section>
    </>
  );
}

function InfoCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="p-[1px] rounded-[24px] bg-roadshow-stats-border w-full sm:w-[229px]">
      <div className="w-full h-full p-5 rounded-[24px] bg-background backdrop-blur-[184px] flex flex-col justify-center items-left">
        <div className="text-h4 font-semibold text-white-1">{title}</div>
        <div className="mt-2.5">
          <span className="text-p2 font-open-sans text-white-4">{subtitle}</span>
        </div>
      </div>
    </div>
  );
}
