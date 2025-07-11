import { MoveRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const WeAreUncrackable = () => {
  return (
    <div>
      <div className="px-4 md:px-20 pb-10 md:pb-[120px] p-[1px] rounded-[20px]">
        <div className="relative p-10 px-4 md:px-10 rounded-[20px] container mx-auto bg-[url('/images/homepage/we-are-uncrackable/bg-we-are-uncrackable.png')] bg-cover bg-right sm:bg-center">
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-white text-h5 md:text-h4 font-semibold">
              We are uncrackable.
              <br className="md:hidden" /> Are you?
            </h2>

            <div className="pt-5">
              <Link href="mailto:hr@quranium.org">
                <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
                  <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                  <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                    Join the revolution
                    <MoveRight className="ml-2 w-5 h-5 text-[#ffffff] group-hover:text-[#601dff] transition-all duration-400 group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeAreUncrackable;
