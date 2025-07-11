"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Cutting-Edge Experience",
    description:
      "Quranium offers Talents the opportunity to work on innovative projects in the Emerging Technologies, providing invaluable hands-on experience.",
    position: "lg:col-start-1 lg:row-start-1",
  },
  {
    title: "Exceptional Mentorship",
    description:
      "Interns receive guidance from industry experts and leaders, significantly accelerating their learning curve and career growth.",
    position: "lg:col-start-1 lg:row-start-2",
  },
  {
    title: "Job Opportunity",
    description:
      "Top performers in the program will get a permanent job opportunity by the end of the six months internship program.",
    center: true,
    image: "/images/your-image-path.png",
    position: "lg:col-start-2 lg:row-span-2 lg:row-start-1",
  },
  {
    title: "Comprehensive Development",
    description:
      "Our internship program offers a well-rounded experience covering technical skills, business acumen, and personal development, preparing talents for future success with an opportunity to get placed.",
    position: "lg:col-start-3 lg:row-start-1",
  },
  {
    title: "Global Exposure",
    description:
      "With the truly global team at Quranium , the interns will have a global exposure while working with various departments.",
    position: "lg:col-start-3 lg:row-start-2",
  },
];

export default function WhyLeadersJoin() {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate h2 after cards
      gsap.from(mainTitleRef.current, {
        scrollTrigger: {
          trigger: mainTitleRef.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.5,
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
        ease: "power2.out",
        delay: 0.8,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative bg-[#0c0318] px-5 pt-16 pb-24">
      <div className="relative max-w-6xl mx-auto px-4 text-center">
        <h2
          ref={mainTitleRef}
          className="text-h5 md:text-h3 font-montserrat font-bold mb-14 text-white"
        >
          Why should young leaders join?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-5">
          {cards.map((item, i) => (
            <div
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              key={i}
              className={`group perspective ${item.position}`}
            >
              <div
                className={`relative w-full h-[160px] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] rounded-[20px] ${
                  item.center ? "w-full h-[360px] md:h-[380px] row-span-2" : "md:h-[180px]"
                }`}
              >
                {/* Front Side */}
                <div className="absolute inset-0 bg-roadshow-reverse-border p-[1px] rounded-[20px] [backface-visibility:hidden]">
                  <div
                    className=" bg-[#0C0318] p-6 h-full rounded-[20px] flex flex-col justify-center items-center text-center hover:bg-[#1B0637]  transition-colors duration-300 ease-in-out"
                    style={
                      item.center
                        ? {
                            backgroundImage: `url('/images/technical/mesh-bg.svg'), url('/images/next-gen-innovators/leaders-join.webp')`,
                            backgroundRepeat: "no-repeat, no-repeat",
                            backgroundPosition: "top right, bottom left",
                            backgroundSize: "contain, contain",
                          }
                        : {
                            backgroundImage: `url('/images/technical/mesh-bg.svg')`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "top right",
                            backgroundSize: "contain",
                          }
                    }
                  >
                    <h3
                      className={`text-white font-montserrat font-medium ${
                        item.center ? "text-h4" : "text-h6"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 bg-roadshow-reverse-border p-[1px] rounded-[20px] [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="bg-[url('/images/technical/mesh-bg.svg')] bg-no-repeat bg-right-top bg-contain bg-[#1B0637] p-6 h-full rounded-[20px] flex justify-center items-center text-center">
                    <p
                      className={`text-white font-open-sans ${item.center ? "text-p1" : "text-p3"}`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
