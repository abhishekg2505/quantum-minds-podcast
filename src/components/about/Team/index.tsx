"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { leadership, advisors, executives } from "@/src/constants/team";
import TeamCard from "./TeamCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { MoveLeft, MoveRight } from "lucide-react";
import "swiper/css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Team() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate .hero-title1 when "Leadership" section comes into view
      gsap.from(".hero-title1", {
        scrollTrigger: {
          trigger: ".hero-title1",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 90,
        duration: 1,
        ease: "power2.out",
      });

      // Animate .hero-title2 when "Advisors" section comes into view
      gsap.from(".hero-title2", {
        scrollTrigger: {
          trigger: ".hero-title2",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power2.out",
      });

      // Animate .hero-title3 when "Executive Team" section comes into view
      gsap.from(".hero-title3", {
        scrollTrigger: {
          trigger: ".hero-title3",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="team"
      className="bg-[#0C0318] py-16 px-4 text-white scroll-mt-20 overflow-clip"
    >
      <div>
        {/* Leadership Section */}
        <div className="relative">
          <h2 className="text-h5 md:text-h3 font-semibold mb-12 text-center hero-title1">
            Leadership
          </h2>
          <div className="max-w-4xl mx-auto relative">
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              speed={600}
              autoplay={{ delay: 3000, disableOnInteraction: true, pauseOnMouseEnter: true }}
              navigation={{
                prevEl: ".swiper-prev",
                nextEl: ".swiper-next",
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="leadersSlider pb-3"
            >
              {leadership.map((person, index) => (
                <SwiperSlide key={index}>
                  <TeamCard person={person} />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* {leadership.length > 2 && ( */}
            <div className="flex justify-center gap-6 mt-6 md:mt-0 sm:hidden">
              {/* Left Arrow */}
              <div className="swiper-prev md:absolute md:-left-0 md:top-1/2 md:transform md:-translate-y-1/2 z-10 bg-[#3C3747] hover:bg-white/20 p-2 rounded-full cursor-pointer">
                <MoveLeft className="text-white" />
              </div>

              {/* Right Arrow */}
              <div className="swiper-next md:absolute md:-right-0 md:top-1/2 md:transform md:-translate-y-1/2 z-10 bg-[#3C3747] hover:bg-white/20 p-2 rounded-full cursor-pointer">
                <MoveRight className="text-white" />
              </div>
            </div>
            {/* )} */}
          </div>
        </div>

        {/* Advisors Section */}
        <div className="pt-12">
          <h2 className="text-h5 md:text-h3 font-semibold mt-12 mb-8 text-center hero-title2">
            Advisors
          </h2>
          <div className="relative">
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              speed={600}
              autoplay={{ delay: 3000, disableOnInteraction: true, pauseOnMouseEnter: true }}
              navigation={{
                prevEl: ".swiper-prev2",
                nextEl: ".swiper-next2",
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              className="pb-3"
            >
              {advisors.map((person, index) => (
                <SwiperSlide key={index}>
                  <TeamCard person={person} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex justify-center gap-6 mt-6 md:mt-0 md:block">
              {/* Left Arrow */}
              <div className="swiper-prev2 md:absolute md:-left-0 md:top-1/2 md:transform md:-translate-y-1/2 z-10 bg-[#3C3747] hover:bg-white/20 p-2 rounded-full cursor-pointer">
                <MoveLeft className="text-white" />
              </div>

              {/* Right Arrow */}
              <div className="swiper-next2 md:absolute md:-right-0 md:top-1/2 md:transform md:-translate-y-1/2 z-10 bg-[#3C3747] hover:bg-white/20 p-2 rounded-full cursor-pointer">
                <MoveRight className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Executive Team Section */}
        <div className="pt-12">
          <h2 className="text-h5 md:text-h3 font-semibold mt-12 mb-8 text-center  hero-title3">
            Executive Team
          </h2>
          <div className="relative">
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              speed={600}
              autoplay={{ delay: 5000, disableOnInteraction: true, pauseOnMouseEnter: true }}
              navigation={{
                prevEl: ".swiper-prev3",
                nextEl: ".swiper-next3",
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              className="pb-3"
            >
              {executives.map((person, index) => (
                <SwiperSlide key={index}>
                  <TeamCard person={person} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex justify-center gap-6 mt-6 md:mt-0 md:block">
              {/* Left Arrow */}
              <div className="swiper-prev3 md:absolute md:-left-0 md:top-1/2 md:transform md:-translate-y-1/2 z-10 bg-[#3C3747] hover:bg-white/20 p-2 rounded-full cursor-pointer">
                <MoveLeft className="text-white" />
              </div>

              {/* Right Arrow */}
              <div className="swiper-next3 md:absolute md:-right-0 md:top-1/2 md:transform md:-translate-y-1/2 z-10 bg-[#3C3747] hover:bg-white/20 p-2 rounded-full cursor-pointer">
                <MoveRight className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
