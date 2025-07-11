"use client";
import Link from "next/link";
import Carousel from "@/src/components/common/Carousel";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const stats = [
  { id: 1, title: "50", subtitle: "Young Innovators" },
  { id: 2, title: "6", subtitle: "Months Learning" },
  { id: 3, title: "10+", subtitle: "Products Built" },
  { id: 4, title: "40%", subtitle: "Talent Absorbed" },
];

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

export default function NextGen() {
  const sectionRef = useRef(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: cardsRef.current,
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
      {/* ── TOP FRAME ── */}
      <section
        ref={sectionRef}
        className=" bg-black text-white py-8 px-4 sm:py-12 md:py-20 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 md:items-center lg:justify-between">
          {/* LEFT: Heading + Paragraph */}
          <div className="w-full lg:w-1/2">
            <h2 className="mb-1 font-montserrat font-semibold text-h5 sm:text-h4 tracking-tighter text-white-1 md:text-center lg:text-start">
              The NextGen Innovators Program
            </h2>
            <p className="font-open-sans font-normal text-p1 leading-[28px] tracking-normal text-white-2 md:text-center lg:text-start">
              The NextGen Innovators Program is Quranium&rsquo;s 6 months long global internship
              program offering hands-on experience in blockchain, quantum tech, and innovation.
              <br />
              <br />
              We have concluded <strong>Chapter 1</strong> and will be opening the entries for{" "}
              <strong>Chapter 2</strong> soon.
            </p>
          </div>

          {/* RIGHT: 2×2 Stats Grid */}
          <div className="grid grid-cols-2 gap-4 w-full sm:w-auto md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 ">
            {stats.map((s) => (
              <InfoCard key={s.id} title={s.title} subtitle={s.subtitle} />
            ))}
          </div>
        </div>
      </section>

      <section className="pt-20 pb-[120px]">
        <Carousel direction="left" speed={100}>
          {[...videos, ...videos, ...videos].map((img, i) => (
            <div
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              key={i}
            >
              <Link
                key={i}
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
      <div className="w-full h-full p-5 rounded-[24px] bg-background backdrop-blur-[184px] flex flex-col justify-center items-left hover:bg-[#1B0637] transition-colors duration-300 ease-in-out">
        <div className="text-h4 font-semibold text-white-1">{title}</div>
        <div className="mt-2.5">
          <span className="text-p2 font-open-sans text-white-4">{subtitle}</span>
        </div>
      </div>
    </div>
  );
}
