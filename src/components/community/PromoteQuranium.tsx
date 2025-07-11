"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ThreatCardProps {
  media: string;
  title: string;
  url: string;
}

const threats: ThreatCardProps[] = [
  {
    media: "/images/community/access.svg",
    title: "Early access to protocol updates and innovations",
    url: "#",
  },
  {
    media: "/images/community/userchecked.svg",
    title: "Brand amplification across Quranium’s global channels",
    url: "#",
  },
  {
    media: "/images/community/rewards.svg",
    title: "Monthly $QRN token rewards and performance-based USDT bonuses",
    url: "#",
  },
  {
    media: "/images/community/tshirt.svg",
    title: "Exclusive merch, global event access, and premium networking opportunities",
    url: "#",
  },
  {
    media: "/images/community/prestige.svg",
    title:
      "Quarterly recognition for top contributors, with the top 5% unlocking insider roles and ecosystem prestige",
    url: "#",
  },
];

const PromoteQuranium: React.FC = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const para1Ref = useRef(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const para2Ref = useRef(null);

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
      gsap.from(para1Ref.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      });

      gsap.from(para2Ref.current, {
        scrollTrigger: {
          trigger: para2Ref.current,
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
    <section ref={sectionRef} className="px-4 md:px-20 pb-[60px] bg-black text-white">
      <div className="max-w-7xl mx-auto text-center md:text-left">
        <h5 ref={para1Ref} className="text-h5 font-montserrat font-medium mt-20">
          Ambassadors don&rsquo;t just promote Quranium; they help build it. In return for
          meaningful contributions, they receive
        </h5>
        <div className="relative w-full">
          <Swiper
            modules={[Navigation, Autoplay, FreeMode]}
            freeMode={{
              enabled: true,
              momentum: false,
            }}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={7000}
            loop
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="my-linear-swiper overflow-hidden1 flex mt-10 "
          >
            {threats.map((threat, index) => (
              <SwiperSlide key={index}>
                <div
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  key={index}
                  className="group perspective"
                >
                  <div className="relative w-full h-[305px]">
                    <div className="absolute inset-0  rounded-[20px]">
                      <div className="bg-[#0C0318] p-6 h-full rounded-[20px] flex flex-col justify-start items-start text-left hover:bg-[#1B0637] transition-colors duration-300 ease-in-out">
                        <Image src={threat.media} alt="icon" width={70} height={70} />
                        <h6 className="text-h6 font-montserrat font-medium mt-5">{threat.title}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-6 mt-6 md:mt-0 md:block">
            {/* Left Arrow */}
            {/* <div className="swiper-prev md:absolute md:-left-7 md:top-1/2 md:transform md:-translate-y-1/2 z-10 bg-[#3C3747] hover:bg-white/20 p-2 rounded-full cursor-pointer">
              <MoveLeft className="text-white" />
            </div> */}

            {/* Right Arrow */}
            {/* <div className="swiper-next md:absolute md:-right-7 md:top-1/2 md:transform md:-translate-y-1/2 z-10 bg-[#3C3747] hover:bg-white/20 p-2 rounded-full cursor-pointer">
              <MoveRight className="text-white" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoteQuranium;
