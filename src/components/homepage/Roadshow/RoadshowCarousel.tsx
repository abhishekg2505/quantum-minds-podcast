import React from "react";
import Image from "next/image";
import Carousel from "@/src/components/common/Carousel";

const images = [
  {
    src: "/images/homepage/roadshow-carousel/roadshow-image-1.webp",
  },
  {
    src: "/images/homepage/roadshow-carousel/roadshow-image-2.webp",
  },
  {
    src: "/images/homepage/roadshow-carousel/roadshow-image-3.webp",
  },
  {
    src: "/images/homepage/roadshow-carousel/roadshow-image-4.webp",
  },
  {
    src: "/images/homepage/roadshow-carousel/roadshow-image-5.webp",
  },
  {
    src: "/images/homepage/roadshow-carousel/roadshow-image-6.webp",
  },
  // {
  //   src: "/images/homepage/roadshow-carousel/roadshow-image-7.webp",
  // },
  {
    src: "/images/homepage/roadshow-carousel/roadshow-image-8.webp",
  },
  {
    src: "/images/homepage/roadshow-carousel/roadshow-image-9.webp",
  },
  {
    src: "/images/homepage/roadshow-carousel/roadshow-image-10.webp",
  },
];

const RoadshowCarousel = () => {
  return (
    <div className="space-y-8 py-10">
      <Carousel direction="left" speed={100}>
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className="group relative flex-shrink-0 mx-2 w-[342px] h-[183px] rounded-[20px] overflow-hidden"
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
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className="group relative flex-shrink-0 mx-2 w-[342px] h-[183px] rounded-[20px] overflow-hidden"
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
