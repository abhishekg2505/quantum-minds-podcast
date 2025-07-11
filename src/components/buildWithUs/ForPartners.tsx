"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ForPartners = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const lineRef = useRef(null);
  const headingRef = useRef(null);

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
      gsap.from(lineRef.current, {
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 95%",
        },
        opacity: 0,
        y: 50,
        duration: 1.2,
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
    <div ref={sectionRef} className="bg-[#0C0318] px-4 md:px-20 py-10 rounded-[20px]">
      <div
        className="max-w-7xl mx-auto pt-[50px] pb-[0px] md:py-[0px]  rounded-[20px]"
        style={{
          background: `
        linear-gradient(133.13deg, #090716 60%, #400061 137.26%),
        linear-gradient(264.48deg, rgba(0, 0, 0, 0) 66.06%, rgba(12, 3, 24, 0.9) 92.29%)
      `,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative z-10 pb-4 pl-10">
            <h3
              ref={mainTitleRef}
              className="text-h5 md:text-h4 font-montserrat font-medium md:font-semibold"
            >
              Scaling Through Supercomputing
            </h3>
            <p ref={headingRef} className="pt-[10px] text-white text-p2 font-open-sans">
              Quranium is using high performance supercomputing nodes to validate post-quantum
              signatures and process smart contracts - laying the groundwork for seamless
              integration with quantum hardware as it matures
            </p>
          </div>
          <div ref={lineRef} className="relative w-full flex items-end justify-end h-full pt-10">
            <Image
              src="/images/ecosystem/forpartners.webp"
              alt="lense"
              width={450}
              height={450}
              className="object-contain md:object-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForPartners;
