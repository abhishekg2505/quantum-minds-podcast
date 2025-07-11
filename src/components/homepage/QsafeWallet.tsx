"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

const QsafeWallet = () => {
  return (
    <section className="md:pt-[100px] mt-6 md:mt-14 container mx-auto px-4">
      <div className="relative container  mx-auto px-0 rounded-[20px]">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 rounded-[20px]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/homepage/qsafe-herovideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="px-0 rounded-[20px]  flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="max-w-2xl md:pl-[50px] pt-[62px] md:pb-[80px] relative z-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white rounded-full p-2">
                <Image
                  src="/images/homepage/qsafe-wallet/QSafe-logo.svg"
                  alt="QSafe Logo"
                  width={228}
                  height={71}
                />
              </div>
            </div>

            <h1 className="text-white text-h4 md:text-h3 font-montserrat font-semibold mb-5">
              Multi-chain, <br />
              quantum-secure wallet.
            </h1>
            <p className="text-p1 font-open-sans mb-10">Built for the next generation.</p>

            <div className="flex flex-col sm:flex-row gap-4 relative z-1">
              <Link href="https://www.qsafewallet.com/" target="_blank">
                <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
                  <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                  <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                    Explore Features
                    <MoveRight className="ml-2 w-5 h-5 text-[#ffffff] group-hover:text-[#601dff] transition-all duration-400 group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
              <Link href="https://www.qsafewallet.com/#download" target="_blank">
                <Button variant="outline" className="group relative overflow-hidden">
                  <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                  <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#000000] transition-colors duration-500">
                    Download QSafe Wallet
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-[300px] md:w-[400px] xl:w-[555px] md:absolute md:right-0 md:bottom-0 z-[1]">
            <Image
              src="/images/homepage/qsafe-wallet/captainQ.webp"
              alt="QSafe Robot"
              width={555}
              height={618}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QsafeWallet;
