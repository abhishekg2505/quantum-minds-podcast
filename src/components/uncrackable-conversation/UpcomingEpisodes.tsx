"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);
const UpcomingEpisodes = () => {
  const sectionRef = useRef(null);
  const mainTitleRef = useRef(null);
  const heading1Ref = useRef(null);
  const para1Ref = useRef(null);
  const heading2Ref = useRef(null);
  const para2Ref = useRef(null);

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

      gsap.from(heading1Ref.current, {
        scrollTrigger: {
          trigger: heading1Ref.current,
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
          trigger: para1Ref.current,
          start: "top 90%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        delay: 2,
      });
      gsap.from(heading2Ref.current, {
        scrollTrigger: {
          trigger: heading2Ref.current,
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
          trigger: para2Ref.current,
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
      <div ref={sectionRef} className="px-4 md:px-20 py-10 md:py-20 p-[1px] rounded-[20px]">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 ref={mainTitleRef} className="text-white text-h4 md:text-h3 font-semibold">
            Upcoming Episodes - Save The Dates
          </h2>
        </div>
        {/* <div className="relative mt-10 p-10 px-4 md:px-10 rounded-[20px] container mx-auto bg-[url('/images/uncrackable-conversation/Uncralable2.webp')] bg-cover bg-center md:bg-right">
          <div className="relative z-10 mx-auto text-center">
            <Link
              href="https://www.linkedin.com/events/theuncrackableconversation-virt7327580808024612864/theater/"
              target="_blank"
            >
              <h4 ref={heading1Ref} className="text-white text-h5 md:text-h4 font-semibold">
                30 May, 12noon UTC. The Uncrackable Conversation, Episode #2.
              </h4>

              <div className="pt-5">
                <p ref={para1Ref} className="text-h6 font-open-sans">
                  Theme & speakers to be announced soon.
                </p>
              </div>
            </Link>
          </div>
        </div> */}
        <div className="relative mt-5 p-10 px-4 md:px-10 rounded-[20px] container mx-auto bg-[url('/images/uncrackable-conversation/Uncralable1.webp')] bg-cover bg-center md:bg-right">
          <div className="relative z-10 mx-auto text-center">
            <Link
              href="https://www.linkedin.com/events/theuncrackableconversation-virt7327585256180469760/theater/"
              target="_blank"
            >
              <h4 ref={heading2Ref} className="text-white text-h5 md:text-h4 font-semibold">
                25 July, 12noon UTC, The Uncrackable Conversation, Episode #3.
              </h4>

              <div className="pt-5">
                <p ref={para2Ref} className="text-h6 font-open-sans">
                  Theme & speakers to be announced soon.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEpisodes;
