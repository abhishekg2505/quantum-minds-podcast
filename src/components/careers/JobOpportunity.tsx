import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";

const anchorCards = [
  {
    title: "AI LLM Specialist",
    link: "https://www.careers-page.com/quranium/job/L55V45Y3",
  },
  {
    title: "Full Stack Developer",
    link: "https://www.careers-page.com/quranium/job/L55VY795",
  },
  {
    title: "Technical Writer - Blockchain & Developer Docs",
    link: "https://www.careers-page.com/quranium/job/L9YR5WWY",
  },
];

const JobOpportunity = () => {
  return (
    <section className="mt-[240px] mx-auto">
      <div className="max-w-4xl">
        <h2 className="mb-1 font-montserrat font-semibold text-h5 sm:text-h4 tracking-tighter text-white-1 md:text-center lg:text-start">
          Current Openings
        </h2>
        <p className="font-open-sans font-normal text-p2 text-white-2 md:text-center lg:text-start mb-10">
          Explore the roles we&rsquo;re actively hiring for below, and if you don&rsquo;t see a fit
          but believe you&rsquo;re uncrackable, let&rsquo;s start a conversation. We&rsquo;re
          building a future that needs strong, visionary minds, yours might be the next we welcome
          to Quranium.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-5 gap-y-10">
        {anchorCards.map((card, index) => (
          <div key={index} className="">
            <div className="relative w-full">
              <div className="bg-roadshow-reverse-border p-[1px] rounded-[20px]">
                <div className="bg-[#0D031B] py-[22px] px-[30px] h-full rounded-[20px] flex flex-col justify-start items-start text-left hover:bg-[#1B0637] transition-colors duration-300 ease-in-out">
                  <h3 className="md:text-p2 font-open-sans text-h5 md:font-montserrat md:font-regular font-medium mb-5">
                    {card.title}
                  </h3>
                  <Link href={card.link} target="_blank">
                    <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
                      <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                      <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                        Apply
                        <MoveRight className="ml-2 w-5 h-5 text-[#ffffff] group-hover:text-[#601dff] transition-all duration-400 group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobOpportunity;
