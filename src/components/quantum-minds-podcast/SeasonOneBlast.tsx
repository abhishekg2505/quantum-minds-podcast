import React from "react";
import Podcast from "@/src/components/quantum-minds-podcast/season-one-sections/Podcast";
import SeasonOneBlastSub from "./season-one-sections/seasonOneBlastSub";

const SeasonOneBlast = () => {
  return (
    <div className="rounded-[20px] mt-20 px-4 md:px-20">
      <div className="max-w-7xl mx-auto  rounded-[20px]">
        <SeasonOneBlastSub />
        <Podcast />
      </div>
    </div>
  );
};

export default SeasonOneBlast;
