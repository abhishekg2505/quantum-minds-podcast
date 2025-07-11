import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
const MediaKit = () => {
  return (
    <section
      id="media-kit"
      className="scroll-mt-24 bg-[#0C0318] text-white px-4 py-16 container mx-auto"
    >
      <div className="bg-roadshow-reverse-border rounded-[20px] p-[1px] md:min-h-[300px]">
        <div className="bg-[url('/images/technical/mesh-bg.svg')] bg-no-repeat bg-top bg-contain bg-[#0C0318] rounded-[20px] flex flex-col justify-between items-center text-center p-6 md:pb-[40px] h-full">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/resources/media-kit-icon.png"
              alt="media-kit-icon"
              width={135}
              height={135}
            />
            <h6 className="text-h6 font-montserrat font-medium mt-5">Media Kit</h6>
            <p className="text-p2 font-open-sans text-white-4 max-w-[686px]">
              Access Quranium&rsquo;s official Media Kit with brand assets, company info, leadership
              bios, and press materials. Everything you need to cover our mission to secure the
              decentralized future.
            </p>
          </div>
          <Link
            href="https://drive.google.com/drive/folders/1YJtJEUIhaVR7U3EfXrWx0kAPhvSK_Fx0"
            target="_blank"
          >
            <Button className="group  mt-5 relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
              <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
              <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                Download Media Kit
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MediaKit;
