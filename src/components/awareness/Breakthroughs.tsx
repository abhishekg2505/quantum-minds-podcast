"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Breakthroughs = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const para1Ref = useRef(null);
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

      gsap.from(para1Ref.current, {
        scrollTrigger: {
          trigger: para1Ref.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
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
        delay: 0.5,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="p-[1px] rounded-[20px]  mx-4 md:mx-20 mt-40">
      <div className="max-w-7xl mx-auto py-[50px] md:py-[0px] px-4 md:px-[60px] rounded-[20px] bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-[372px] md:h-full flex items-center justify-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-xl"
            >
              <source
                src="/videos/awareness/Quantum_awareness_security_day.webm"
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="relative z-10 -mt-16 md:mt-0 pt-0 pb-10 md:py-28">
            <h3
              ref={mainTitleRef}
              className="text-h5 md:text-h3 font-montserrat font-medium md:font-semibold"
            >
              Breakthroughs Don&rsquo;t Just Build, They Break.
            </h3>
            <p ref={para2Ref} className="pt-[10px] text-white text-p2 font-open-sans">
              Quantum and AI advances bring power, but also risk. Encryption, identity, and
              blockchain trust are under threat.
            </p>
            <p ref={para1Ref} className="pt-[10px] text-white text-p2 font-open-sans mt-5">
              <strong>April 25</strong> is <strong>Quantum Security Awareness Day.</strong> Not just
              to celebrate progress, but to face its fallout. Resilience isn&rsquo;t optional. Build
              what can&rsquo;t be broken.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breakthroughs;
