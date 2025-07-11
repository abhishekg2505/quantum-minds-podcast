"use client";

import { ArrowRight, BadgeCheck, MoveRight, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const WhatIsQrnRush = () => {
  return (
    <section className="bg-[#0B0217] py-10 px-4 md:px-12">
      <div className="max-w-6xl mx-auto rounded-[20px]  p-6 md:p-10 ">
        {/* Headings Row */}
        <div className="bg-roadshow-reverse-border p-[1px] rounded-[20px]">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 bg-[#000000] p-5 rounded-[20px]">
            <div>
              <h2 className="text-h3 font-montserrat font-semibold">What&rsquo;s QRN Rush?</h2>
              <p className="text-[#EAEAEA] text-p1 font-open-sans mt-5 max-w-md">
                A dynamic quest-based platform that rewards you for showing up, speaking out, and
                building alongside Quranium.
              </p>
            </div>
            <div className=" p-4 max-w-md">
              <p className="text-[#B3B3B3]">
                QPoint rewards are transparent, trackable, and trusted. Finally, rewards that
                reflect real impact.
              </p>
              <p className="text-[#C1C1C1] italic mt-2">
                Start earning. Start building. Start leading.
              </p>
            </div>
          </div>
        </div>

        {/* Features Row */}
        <div className="mt-6 bg-[#C3C3C31A] px-4 py-3 rounded-[10px] flex flex-wrap justify-center gap-4 text-sm text-white font-medium">
          <span className="flex items-center gap-2">
            Complete community missions{" "}
            <Image
              src="/images/community/rightArrow.svg"
              alt="lock"
              width={24}
              height={24}
              priority
            />
          </span>
          <span className="flex items-center gap-2">
            <Image src="/images/community/earn.svg" alt="earn" width={24} height={24} priority />
            Earn QPoints{" "}
            <Image
              src="/images/community/rightArrow.svg"
              alt="lock"
              width={24}
              height={24}
              priority
            />
          </span>
          <span className="flex items-center gap-2 text-center">
            <Image src="/images/community/lock.svg" alt="lock" width={24} height={24} priority />
            Unlock merch, early drops, real recognition, and future utility.
          </span>
        </div>

        {/* CTA Button */}
        <div className="mt-6 text-center">
          <Link href="#">
            <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
              <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
              <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-300">
                Join QRNRush Today
                <MoveRight className="ml-2 w-5 h-5 text-[#ffffff] group-hover:text-[#601dff] transition-all duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default WhatIsQrnRush;
