"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
gsap.registerPlugin(ScrollTrigger);

const UpcomingEvents = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const img1Ref = useRef(null);
  const heading1Ref = useRef(null);
  const para1Ref = useRef(null);
  const btn1Ref = useRef(null);
  const img2Ref = useRef(null);

  const heading2Ref = useRef(null);
  const para2Ref = useRef(null);
  const btn2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.from(img1Ref.current, {
        scrollTrigger: {
          trigger: img1Ref.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 1.5,
      });
      gsap.from(heading1Ref.current, {
        scrollTrigger: {
          trigger: img1Ref.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 1.5,
      });
      gsap.from(para1Ref.current, {
        scrollTrigger: {
          trigger: img1Ref.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 2,
      });
      gsap.from(btn1Ref.current, {
        scrollTrigger: {
          trigger: img1Ref.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 2,
      });
      gsap.from(img2Ref.current, {
        scrollTrigger: {
          trigger: img2Ref.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 2.5,
      });
      gsap.from(heading2Ref.current, {
        scrollTrigger: {
          trigger: img2Ref.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 2.5,
      });
      gsap.from(para2Ref.current, {
        scrollTrigger: {
          trigger: img2Ref.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 3,
      });
      gsap.from(btn2Ref.current, {
        scrollTrigger: {
          trigger: img2Ref.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div
        ref={sectionRef}
        className="container px-4 md:px-10 py-10 md:pt-20 md:pb-[120px] p-[1px] rounded-[20px]"
      >
        <div className="relative z-10 md:px-10 mx-auto">
          <h2 ref={mainTitleRef} className="text-white text-h4 md:text-h3 font-semibold">
            Upcoming Events
          </h2>
        </div>

        <div className="relative mt-[60px] rounded-[20px] max-w-7xl mx-auto md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-5 items-center relative z-10 mx-auto">
            <div>
              <Image
                src="/images/landl/20june-event.webp"
                alt="20 June Event"
                width={625}
                height={321}
                className="w-full md:w-[625px] md:h-[321px]"
                ref={img1Ref}
              />
              <h4
                ref={heading1Ref}
                className="text-white text-h5 md:text-h4 font-semibold mt-5 md:mt-10"
              >
                Friday, June 20
              </h4>

              <h5
                ref={para1Ref}
                className="text-h5 font-montserrat font-medium mt-[5px] mb-5 md:mb-10"
              >
                8:30 AM - 10:00 AM GMT+8
              </h5>

              <Button
                disabled
                className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]"
              >
                <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                  Registeration Closed
                </span>
              </Button>
            </div>

            <div>
              <Image
                src="/images/landl/27june-event.webp"
                alt="27 June Event"
                width={625}
                height={321}
                className="w-full max-w-full md:w-[625px] md:h-[321px]"
                ref={img2Ref}
              />
              <h4
                ref={heading2Ref}
                className="text-white text-h5 md:text-h4 font-semibold mt-5 md:mt-10"
              >
                Friday, June 27
              </h4>

              <h5
                ref={para2Ref}
                className="text-h5 font-montserrat font-medium mt-[5px] mb-5 md:mb-10"
              >
                8:30 AM - 10:00 AM GMT+8
              </h5>

              <Button
                disabled
                className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]"
              >
                <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                  Registeration Closed
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
