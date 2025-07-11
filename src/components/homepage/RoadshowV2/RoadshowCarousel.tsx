import React from "react";
import Image from "next/image";
import Carousel from "@/src/components/common/Carousel";

const images = [
  {
    src: "/images/common/roadshow/01.webp",
  },
  {
    src: "/images/common/roadshow/02.webp",
  },
  {
    src: "/images/common/roadshow/03.webp",
  },
  {
    src: "/images/common/roadshow/04.webp",
  },
  {
    src: "/images/common/roadshow/05.webp",
  },
  {
    src: "/images/common/roadshow/06.webp",
  },
  {
    src: "/images/common/roadshow/07.webp",
  },
  {
    src: "/images/common/roadshow/08.webp",
  },
  {
    src: "/images/common/roadshow/09.webp",
  },
  {
    src: "/images/common/roadshow/10.webp",
  },
  {
    src: "/images/common/roadshow/11.webp",
  },
  {
    src: "/images/common/roadshow/12.webp",
  },
  {
    src: "/images/common/roadshow/13.webp",
  },
  {
    src: "/images/common/roadshow/14.webp",
  },
  {
    src: "/images/common/roadshow/15.webp",
  },
  {
    src: "/images/common/roadshow/16.webp",
  },
  {
    src: "/images/common/roadshow/17.webp",
  },
  {
    src: "/images/common/roadshow/18.webp",
  },
  {
    src: "/images/common/roadshow/19.webp",
  },
  {
    src: "/images/common/roadshow/20.webp",
  },
  {
    src: "/images/common/roadshow/21.webp",
  },
  {
    src: "/images/common/roadshow/22.webp",
  },
];

const RoadshowCarousel = () => {
  const [firstRow, secondRow] = [
    images.slice(0, images.length / 2),
    images.slice(images.length / 2),
  ];
  return (
    <div className="space-y-8 py-10">
      <Carousel direction="left" speed={100}>
        {[...firstRow, ...firstRow].map((img, i) => (
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
        {[...secondRow, ...secondRow].map((img, i) => (
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
