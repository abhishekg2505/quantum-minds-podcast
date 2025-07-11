import React from "react";
import Image from "next/image";
const Convergence = () => {
  return (
    <div className="rounded-[20px]  mx-4 md:mx-20 mt-40">
      <div className="max-w-7xl mx-auto py-[50px] md:py-[0px] px-[16px] md:px-[60px] rounded-[20px]  bg-black border border-[#141A24]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <p className="pt-[10px] text-white text-p2 font-regular">
              This convergence-first foundation doesn&rsquo;t just solve
              today&rsquo;s security threats. It sets a new bar for intelligent,
              autonomous, and uncrackable infrastructure. As quantum computers
              emerge and AI becomes operational, Quranium remains resilient by
              design, positioning itself as the layer that future systems will
              rely on.
            </p>
          </div>

          <div className="relative w-full h-64 md:h-[530px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="/videos/technical/Tech_page_Tech_animation.webm"
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Convergence;
