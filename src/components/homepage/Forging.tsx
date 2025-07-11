import { MoveRight } from "lucide-react";
import React from "react";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";

const Forging = () => {
  return (
    <section className="py-16 md:py-[107px] container mx-auto px-4">
      <div className="relative py-20 md:py-[160px] rounded-[20px] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 bg-[url('/images/homepage/forging/bg-image-forging.webp')] bg-no-repeat bg-cover opacity-70" />

        {/* Foreground content */}
        <div className="relative z-10 max-w-[984px] mx-auto text-white">
          <h2 className="text-center text-h4 md:text-h3 font-montserrat font-semibold">
            Quantum-secure. AI-ready. Globally decentralized.
          </h2>
          <p className="pt-4 text-center text-p2 font-open-sans text-white-2">
            The Trust Fabric of the Quantum-AI Era.
            <br />
            <br />
            In a world where machines make decisions, data moves autonomously, and quantum computers
            challenge the very structure of digital trust, we need more than a{" "}
            <span className="font-semibold">blockchain</span>. We need a
            <span className="font-semibold"> Convergence Layer</span> - one that binds truth, logic,
            and security across systems that have never been unified before.
            <br />
            <br />
            <span className="font-semibold">Quranium</span> is that layer. This is the chain of
            tomorrow.
          </p>
          <div className="pt-[60px] flex flex-col md:flex-row items-center justify-center gap-2.5">
            <Link href="mailto:business@quranium.org">
              <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
                <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                  Build on Quranium
                  <MoveRight className="ml-2 w-5 h-5 text-[#ffffff] group-hover:text-[#601dff] transition-all duration-400 group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
            <Link href="https://validators.quranium.org" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="group relative overflow-hidden">
                <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#000000] transition-colors duration-500">
                  Become a Node Pioneer
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forging;
