import React from "react";
import Marquee from "../ui/marquee";
import Image from "next/image";
import { COUNTRY_FLAGS } from "@/src/constants/countries";

interface FlagCardProps {
  name: string;
  flag: string;
}

const FlagCard: React.FC<FlagCardProps> = ({ flag, name }) => (
  <div className="p-[1px] bg-roadshow-stats-border rounded-lg">
    <div className="flex items-center justify-center gap-2 h-[50px] px-6 py-3 rounded-lg lg:h-[42px] min-w-[100px] sm:h-[40px] bg-background">
      {flag && (
        <Image
          src={flag}
          alt={name}
          className="w-[21px] h-[15px] object-cover rounded-[2px] drop-shadow-[0px_2px_4px_rgba(0,0,0,0.2)]"
        />
      )}
      <div className="text-white-1 font-bold text-lg">{name}</div>
    </div>
  </div>
);

const renderMarquee = (
  countries: {
    name: string;
    flag: any;
  }[],
  reverse = false
) => (
  <Marquee pauseOnHover reverse={reverse} className="[--duration:200s] mt-4:first-child">
    {countries.map((country) => (
      <FlagCard key={country.name} flag={country.flag} name={country.name} />
    ))}
  </Marquee>
);

const ProudlyDiverse = () => {
  const [firstRow, secondRow] = [
    COUNTRY_FLAGS.slice(0, COUNTRY_FLAGS.length / 2),
    COUNTRY_FLAGS.slice(COUNTRY_FLAGS.length / 2),
  ];
  return (
    <section className="">
      <div className="">
        <div className="relative flex flex-col overflow-hidden w-full gap-x-2">
          {renderMarquee(firstRow)}
          {renderMarquee(secondRow, true)}
          <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-r from-transparent/50 to-transparent/0" />
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-l from-transparent/50 to-transparent/0" />
        </div>
      </div>
    </section>
  );
};

export default ProudlyDiverse;
