import React from "react";
import ProudlyDiverse from "../common/ProudlyDiverse";

const GlobeWithCountries = () => {
  return (
    <section className="relative bg-[#0C0318] px-4 text-white overflow-clip">
      <div className="h-full">
        <div className="flex justify-center items-center">
          <div className="relative w-[512px] h-[512px] lg:w-[1024px] lg:h-[1024px] bg-background">
            <video
              autoPlay
              muted
              loop
              playsInline
              className={`absolute inset-0 w-full h-full object-cover`}
              style={{
                clipPath: "circle(33% at 52% 47%)",
              }}
            >
              <source src="/videos/about/globe.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div className="absolute bottom-1/4 lg:bottom-1/3 left-1/2 -translate-x-1/2 -translate-y-1/4 lg:-translate-y-1/2 scale-75 md:scale-100">
        <ProudlyDiverse />
      </div>
    </section>
  );
};

export default GlobeWithCountries;
