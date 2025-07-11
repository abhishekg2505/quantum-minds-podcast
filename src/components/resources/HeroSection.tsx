"use client";

import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    // <section className="relative w-full bg-[url('/images/resources/herosection-bg.png')] bg-cover bg-right sm:bg-center">
    <section className="relative w-full ">
      <div className="absolute inset-0 w-full h-full bg-[url('/images/resources/herosection-bg.png')] bg-cover bg-right sm:bg-center opacity-50" />
      <div className="relative pt-36 pb-40 md:pt-60 md:pb-60 w-full">
        <div className="h-16 absolute inset-0 bg-gradient-to-t from-black/0 via-black/40 to-black/90 z-10" />
        <div className="container mx-auto px-4 md:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row lg:items-center justify-between">
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10"> */}
              {/* Left Text Section */}
              <div className="lg:w-1/2">
                <h1 className="text-h4 md:text-h2 font-montserrat font-bold">
                  Enjoy a wealth of interviews, insights & inspiration.
                </h1>
                <div className="hidden sm:flex gap-4 mt-5 ">
                  <Link href="/contact-us">
                    <Button variant="outline" className="group relative overflow-hidden">
                      <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                      <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#000000] transition-colors duration-500">
                        Contact us
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Content Section */}
              <div className="lg:w-1/2">
                <div className="flex flex-col items-start lg:items-end space-y-6">
                  <p className="text-lg font-normal max-w-md">
                    Insights, stories, and conversations shaping the future of convergence.
                  </p>
                  <div className="flex gap-4 mt-5 sm:hidden">
                    <Link href="/contact-us">
                      <Button variant="outline" className="group relative overflow-hidden">
                        <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                        <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#000000] transition-colors duration-500">
                          Contact us
                        </span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
