import React from "react";
import Image from "next/image";
import { mpLogos } from "@/src/constants/mp";
import Link from "next/link";

const MpGrid = () => {
  return (
    <div id="media-partners" className="px-4 md:px-10 pt-20 pb-20 bg-black">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-h4 md:text-h3 font-antonio font-semibold text-center mb-10">
          Global{" "}
          <span className="bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
            Media Partners
          </span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-10 gap-y-[30px] items-center">
          {mpLogos.map((logo, idx) => {
            const imageElement = (
              <Image
                src={logo.src}
                alt={logo.alt}
                className="h-full w-full object-contain"
                width={224}
                height={50}
                priority
              />
            );

            return logo.url ? (
              <Link
                href={logo.url}
                target="_blank"
                key={idx}
                className="flex justify-center items-center"
              >
                <div className="h-[60px] w-full flex items-center justify-center">
                  {imageElement}
                </div>
              </Link>
            ) : (
              <div key={idx} className="flex justify-center items-center">
                <div className="h-[60px] w-full flex items-center justify-center">
                  {imageElement}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MpGrid;
