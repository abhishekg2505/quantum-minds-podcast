import React from "react";
import Image from "next/image";
import Carousel from "@/src/components/common/Carousel";
import { podcastScrollImages } from "@/src/constants/podcastScrollImage";

const RoadshowCarousel = () => {
  const [firstRow, secondRow] = [
    podcastScrollImages.slice(0, podcastScrollImages.length / 2),
    podcastScrollImages.slice(podcastScrollImages.length / 2),
  ];
  return (
    <div className="relative space-y-8 py-10">
      <Carousel direction="left" speed={100}>
        {[...firstRow, ...firstRow].map((img, i) => (
          <div
            key={i}
            className="group relative flex-shrink-0 mx-2 w-[181px] h-[185px] rounded-[20px] overflow-hidden"
          >
            <Image
              src={img.src}
              alt={`image-${i}`}
              fill
              className="transition-transform duration-500 ease-in-out group-hover:scale-110 object-cover"
            />
          </div>
        ))}
      </Carousel>
      <Carousel direction="right" speed={100}>
        {[...secondRow, ...secondRow].map((img, i) => (
          <div
            key={i}
            className="group relative flex-shrink-0 mx-2 w-[181px] h-[185px] rounded-[20px] overflow-hidden"
          >
            <Image
              src={img.src}
              alt={`image-${i}`}
              fill
              className="transition-transform duration-500 ease-in-out group-hover:scale-110 object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default RoadshowCarousel;
