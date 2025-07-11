import React from "react";
import Image from "next/image";
import { pncLogos } from "@/src/constants/pnc";
import Link from "next/link";

const PncGrid = () => {
  return (
    <div className="px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-10 gap-y-[60px] items-center">
          {pncLogos.map((logo, idx) => (
            <Link
              href={logo.url}
              target="_blank"
              key={idx}
              className="flex justify-center items-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                className="h-auto w-auto max-h-10 md:max-h-14 object-contain"
                width={224}
                height={50}
                priority
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PncGrid;
