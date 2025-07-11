// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// interface TextRevealProps {
//   text: string;
// }

// const TextReveal: React.FC<TextRevealProps> = ({ text }) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const wordRefs = useRef<HTMLDivElement[]>([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           end: "bottom bottom", // 👈 enough scroll distance to animate slowly
//           scrub: true,
//           pin: true, // 👈 pin until animation finishes
//         },
//       });

//       wordRefs.current.forEach((wordEl, wordIndex) => {
//         const mask = wordEl.querySelector(".line-mask") as HTMLDivElement;
//         const letters = wordEl.querySelectorAll("span.letter");

//         if (!mask || letters.length === 0) return;

//         tl.to(
//           mask,
//           {
//             xPercent: 100,
//             ease: "power2.out",
//             duration: 150 + letters.length * 4,
//           },
//           `+=${wordIndex * 8}`
//         );
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="container mx-auto px-4 md:px-10 py-60 md:py-40 flex flex-wrap gap-x-3 gap-y-4 text-h5 md:text-h2 font-montserrat font-semibold"
//     >
//       {text.split(" ").map((word, wordIndex) => (
//         <div
//           key={wordIndex}
//           ref={(el) => {
//             if (el) wordRefs.current[wordIndex] = el;
//           }}
//           className="relative inline-block overflow-hidden"
//         >
//           <div className="relative z-0 flex">
//             {word.split("").map((letter, letterIndex) => (
//               <span
//                 key={letterIndex}
//                 className="letter text-[#EAEAEA] inline-block text-[38px] md:text-h2 font-montserrat font-semibold md:leading-[74px]"
//               >
//                 {letter}
//               </span>
//             ))}
//           </div>
//           <div className="line-mask absolute top-0 left-0 h-full w-full bg-[#0C0318] opacity-90 z-10 pointer-events-none" />
//         </div>
//       ))}
//     </section>
//   );
// };

// export default TextReveal;

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextReveal = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let SplitType: any;
    let splitInstance: any;

    const load = async () => {
      const SplitTypeModule = await import("split-type");
      SplitType = SplitTypeModule.default;

      // Split the text into words
      splitInstance = new SplitType(textRef.current!, {
        types: "lines, words",
      });

      // Add mask to each word
      const words = textRef.current?.querySelectorAll(".word");
      words?.forEach((word) => {
        const mask = document.createElement("div");
        mask.classList.add("line-mask");
        word.appendChild(mask);
      });

      // Collect all masks
      const masks = textRef.current?.querySelectorAll(".line-mask");

      // Animation
      if (masks && masks.length > 0) {
        gsap.to(Array.from(masks), {
          width: "0%",
          duration: 1,
          stagger: 0.5,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            //pin: true,
          },
        });
      }
    };

    load();

    return () => {
      splitInstance?.revert?.(); // cleanup
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="container mx-auto px-4 pb-16">
      <div
        ref={textRef}
        className="split-word text-[38px] leading-[43px] md:text-h2 font-montserrat font-semibold md:leading-[74px] text-white px-4 md:px-10 py-10"
      >
        In a world where machines make decisions, data moves autonomously, and quantum computers
        challenge the very structure of digital trust, we need more than a Blockchain.
      </div>
    </div>
  );
};

export default TextReveal;
