import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const AnchorCards = () => {
  return (
    <section className="py-16 container mx-auto px-4 md:px-20">
      <h2 className="text-h4 font-montserrat font-semibold mb-[60px]">
        Through initiatives like QRNRush and our Ambassador Program, we empower every contributor to
        turn passion into impact.
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 justify-center gap-x-5 gap-y-10">
        <Link href="#">
          <div className="group perspective">
            <div className="relative w-full transition-transform">
              <div className="bg-roadshow-reverse-border p-[1px] rounded-[20px] h-[150px]">
                <div className="bg-[#0D031B] py-[22px] px-[30px] h-full rounded-[20px] flex flex-row justify-between items-center text-left hover:bg-[#1B0637] transition-colors duration-300 ease-in-out">
                  <Image src="/images/community/qrn-rush.svg" alt="icon" width={146} height={57} />
                  <div className="flex flex-col md:flex-row flex-wrap items-end justify-between">
                    <div className="md:basis-10/12"></div>

                    <MoveRight className="ml-2 w-5 h-5 text-[#ffffff] group-hover:text-[#601dff] transition-all duration-400 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href="#">
          <div className="group perspective h-[150px]">
            <div className="relative w-full h-full transition-transform">
              <div className="bg-roadshow-reverse-border p-[1px] rounded-[20px] h-[150px]">
                <div className="bg-[#0D031B] py-[22px] px-[30px] h-full rounded-[20px] flex flex-row justify-between items-center text-left hover:bg-[#1B0637] transition-colors duration-300 ease-in-out">
                  <div className="md:basis-10/12">
                    <h3 className="text-h4 font-montserrat font-semibold">
                      The Quranium <br />
                      Ambassador Program
                    </h3>
                  </div>

                  <MoveRight className="ml-2 w-5 h-5 text-[#ffffff] group-hover:text-[#601dff] transition-all duration-400 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default AnchorCards;
