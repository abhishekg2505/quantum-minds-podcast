"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ConvergenceFuture: React.FC = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const headingRef = useRef(null);
  const heading2Ref = useRef(null);
  const heading3Ref = useRef(null);

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
      gsap.from(heading2Ref.current, {
        scrollTrigger: {
          trigger: heading2Ref.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      });
      gsap.from(heading3Ref.current, {
        scrollTrigger: {
          trigger: heading2Ref.current,
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
    <section ref={sectionRef} className="px-4 md:px-20 py-16 bg-[#0C0318] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <h2
            ref={mainTitleRef}
            className="text-h5 md:text-h3 font-montserrat font-bold leading-tight"
          >
            Convergence Is the Future
          </h2>
          <p ref={headingRef} className="text-p2 font-open-sans text-[#EAEAEA] mt-4">
            The next era isn&rsquo;t about one technology. It&rsquo;s about all of them converging.
          </p>
        </div>

        {/* Right Side */}
        <div className="bg-roadshow-reverse-border p-[1px] rounded-2xl relative overflow-hidden">
          <div className="bg-[#0D031B] p-6 rounded-2xl backdrop-blur-md relative hover:bg-[#1B0637] hover:hover-no-bg-image transition-colors duration-300 ease-in-out">
            <p ref={heading2Ref} className="text-p2 font-open-sans text-gray-300 mb-4">
              Supercomputing, quantum, blockchain and AI are colliding to reshape the digital world.
              Quranium Is built for this convergence: unbreakable security, intelligent
              infrastructure, and limitless scalability. Not patched together. Not upgraded after
              the fact. Engineered for what&rsquo;s next.
            </p>
            <p ref={heading3Ref} className="text-p2 font-open-sans text-[#EAEAEA] mt-4">
              The age of convergence has begun.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConvergenceFuture;
