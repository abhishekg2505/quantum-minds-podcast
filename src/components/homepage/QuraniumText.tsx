import React from "react";

const QuraniumText = () => {
  return (
    <div className="origin-bottom scale-[0.3] md:scale-[0.5] xl:scale-100">
      <div className="origin-bottom translate-y-10 relative w-full h-[100px] md:h-[150px] xl:h-[250px]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-max mx-auto text-[372px] font-staatliches !bg-clip-text text-transparent bg-quranium-text-gradient tracking-[-0.04em] leading-[0.8] opacity-20">
          QURANIUM
        </div>
        <div className="absolute bottom-0 left-1/2 transform translate-y-14 -translate-x-1/2 w-[1085px] h-36 rotate-[-1deg] opacity-90 bg-violet-1 blur-[200px]" />
      </div>
    </div>
  );
};

export default QuraniumText;
