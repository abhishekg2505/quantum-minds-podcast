// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const titles = ["EVM-Compatible", "AI-Native", "Quantum-Secure"];

// const Uncrackable = () => {
//   const sectionRef = useRef(null);
//   const titleRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       titleRefs.current.forEach((section, index) => {
//         // Create a ScrollTrigger to pin each section
//         ScrollTrigger.create({
//           trigger: section,
//           start: "top top",
//           end: `+=${window.innerHeight * (titles.length - index + 1)}`,
//           pin: true,
//           pinSpacing: false,
//         });

//         // Add entrance animation for each section
//         gsap.from(section, {
//           scrollTrigger: {
//             trigger: section,
//             start: "top bottom",
//             end: "top top",
//             scrub: true,
//           },
//           y: 100,
//           opacity: 0,
//         });
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={sectionRef} className="container mx-auto px-4">
//       <div>
//         {titles.map((title, index) => {
//           return (
//             <div
//               key={index}
//               ref={(el) => {
//                 titleRefs.current[index] = el;
//               }}
//               className="h-[70vh] md:h-[100dvh] flex items-center justify-between bg-background1"
//             >
//               <div className="relative w-max mx-auto">
//                 <h2 className="md:px-3 text-center text-h4 md:text-h2 font-montserrat font-bold bg-gradient-to-r from-white-1 to-[#B18FFF] bg-clip-text text-transparent">
//                   {title}
//                 </h2>
//                 <div className="absolute left-0 top-0 w-full h-10 rotate-[89.07deg] opacity-50 bg-violet-900 blur-[114.27px]" />
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Uncrackable;

// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const titles = ["EVM-Compatible", "AI-Native", "Quantum-Secure"];

// const Uncrackable = () => {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const sectionRef = useRef(null);
//   const titleRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Pin the container
//       ScrollTrigger.create({
//         trigger: containerRef.current,
//         start: "top top",
//         end: `+=${window.innerHeight * titles.length}`,
//         scrub: true,
//         pin: true,
//         anticipatePin: 1,
//         // markers: true,
//       });

//       // Animate each title on scroll
//       titleRefs.current.forEach((section, index) => {
//         if (!section) return;

//         const triggerStart = window.innerHeight * index;
//         const triggerEnd = window.innerHeight * (index + 1);

//         gsap.fromTo(
//           section,
//           {
//             opacity: 0.2,
//             scale: 0.85,
//             filter: "blur(10px)",
//           },
//           {
//             opacity: 1,
//             scale: 1,
//             filter: "blur(0px)",
//             scrollTrigger: {
//               trigger: containerRef.current,
//               start: triggerStart,
//               end: triggerEnd,
//               scrub: true,
//               markers: false,
//             },
//             ease: "back.out",
//           }
//         );
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={sectionRef} className="relative">
//       <div ref={containerRef} className="h-[100vh] overflow-hidden relative bg-background">
//         <div className="bg-background" style={{ height: `${titles.length * 100}vh` }}>
//           {titles.map((title, index) => (
//             <div
//               key={index}
//               ref={(el) => {
//                 titleRefs.current[index] = el;
//               }}
//               className="bg-background h-screen flex items-center justify-center absolute top-0 left-0 w-full"
//               style={{ transform: "translateZ(0)", backfaceVisibility: "hidden" }}
//             >
//               <div className="relative w-max mx-auto will-change-transform transform-gpu">
//                 <h2 className="md:px-3 text-center text-h4 md:text-h2 font-montserrat font-bold bg-gradient-to-r from-white-1 to-[#B18FFF] bg-clip-text text-transparent">
//                   {title}
//                 </h2>
//                 <div className="absolute left-0 top-0 w-full h-10 rotate-[89.07deg] opacity-50 bg-violet-900 blur-[114.27px]" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Uncrackable;
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const titles = ["EVM-Compatible", "AI-Native", "Quantum-Secure"];

const Uncrackable = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const titleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      titleRefs.current.forEach((el) => {
        if (!el) return;

        gsap.fromTo(
          el,
          {
            opacity: 0,
            scale: 0.85,
            filter: "blur(12px)",
            y: 50,
          },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 50%", // when element enters viewport
              end: "top 50%", // ends earlier
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, titleRefs.current);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-background px-4 md:px-10">
      {titles.map((title, index) => (
        <div
          key={index}
          ref={(el) => {
            titleRefs.current[index] = el;
          }}
          className="flex items-center justify-center will-change-transform transform-gpu h-[100vh]"
        >
          <h2 className="text-center text-h3 md:text-h2  font-montserrat font-bold bg-gradient-to-r from-white-1 to-[#B18FFF] bg-clip-text text-transparent">
            {title}
          </h2>
        </div>
      ))}
    </section>
  );
};

export default Uncrackable;
