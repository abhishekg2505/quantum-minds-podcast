"use client";

import { Button } from "@/src/components/ui/button";
import Convergence from "./Convergence";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[url('/images/technical/technical-hero-bg.webp')] md:bg-cover bg-auto bg-top sm:bg-center">
      <div className="relative pt-36 pb-20  md:pt-60 md:pb-28 w-full">
        <div className="h-16 absolute inset-0 bg-gradient-to-t from-black/0 via-black/40 to-black/90 z-10" />
        <div className="container mx-auto px-4 md:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between gap-10">
              {/* Left Text Section */}
              <div>
                <h1 className="text-h4 md:text-h2 font-montserrat font-bold">
                  Built to <br />
                  Be Uncrackable
                </h1>
                <div className="hidden sm:flex gap-4 mt-10 ">
                  <Link href="mailto:hr@quranium.org">
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
              <div className="flex flex-col items-start space-y-6">
                <p className="text-p1 font-open-sans max-w-md">
                  Quranium is more than just quantum-proof. It’s the world’s first infrastructure
                  designed to converge quantum security, AI intelligence, and decentralized trust.
                  While other blockchains face fragmentation and patchwork upgrades, Quranium was
                  built from the ground up to thrive at the intersection of these future-defining
                  technologies.
                </p>
                <div className="flex gap-4 mt-10 sm:hidden">
                  <Link href="mailto:hr@quranium.org">
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
        <Convergence />
      </div>
    </section>
  );
}
