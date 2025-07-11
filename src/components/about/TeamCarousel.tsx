import React from "react";
import Image from "next/image";
import Carousel from "@/src/components/common/Carousel";

const images = [
  {
    src: "/images/about/team-carousel/01.webp",
  },
  {
    src: "/images/about/team-carousel/02.webp",
  },
  {
    src: "/images/about/team-carousel/03.webp",
  },
  {
    src: "/images/about/team-carousel/04.webp",
  },
  {
    src: "/images/about/team-carousel/05.webp",
  },
  {
    src: "/images/about/team-carousel/06.webp",
  },
  {
    src: "/images/about/team-carousel/07.webp",
  },
  {
    src: "/images/about/team-carousel/08.webp",
  },
  {
    src: "/images/about/team-carousel/09.webp",
  },
  {
    src: "/images/about/team-carousel/10.webp",
  },
  {
    src: "/images/about/team-carousel/11.webp",
  },
  {
    src: "/images/about/team-carousel/12.webp",
  },
  {
    src: "/images/about/team-carousel/13.webp",
  },
  {
    src: "/images/about/team-carousel/14.webp",
  },
  {
    src: "/images/about/team-carousel/15.webp",
  },
  {
    src: "/images/about/team-carousel/16.webp",
  },
  {
    src: "/images/about/team-carousel/17.webp",
  },
  {
    src: "/images/about/team-carousel/18.webp",
  },
  {
    src: "/images/about/team-carousel/19.webp",
  },
  {
    src: "/images/about/team-carousel/20.webp",
  },
];

const TeamCarousel = () => {
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

export default TeamCarousel;
