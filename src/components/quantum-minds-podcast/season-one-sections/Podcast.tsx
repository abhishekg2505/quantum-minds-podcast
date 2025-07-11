import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import PodcastCarousel from "./PodcastCarousel";
import { PodcastData } from "@/src/types/podcast";
import { get } from "@/src/lib/axiosInterceptor";
import { MoveRight } from "lucide-react";

export const revalidate = 1800;

type ApiResponse = {
  data: PodcastData[];
};

const Podcast = async () => {
  const response = await get<ApiResponse>(`/api/podcasts?populate=*&sort=id:desc`);
  const podcasts = response.data;

  const firstPodcast = podcasts[0].attributes;
  const otherPodcasts = podcasts.slice(1);

  return (
    <section id="podcast" className="scroll-mt-24 container mx-auto px-4 bg-background">
      <div className="pb-[120px]">
        {/* Header */}
        <div className="lg:max-w-[790px]"></div>

        {/* Top Row */}

        {/* Bottom Slider */}
        <PodcastCarousel podcasts={otherPodcasts.map((podcast) => podcast.attributes)} />

        <div className="mx-auto w-max">
          <PodcastCarouselButtonsMobile />
        </div>
      </div>
    </section>
  );
};

export default Podcast;

const PodcastCarouselButtonsMobile = () => {
  return (
    <div className="flex items-center">
      <button
        id="scrollLeftResourcesPodcastMobile"
        className="w-[46px] h-[46px] flex items-center justify-center rounded-full duration-300 bg-[#EADCFF]/20 hover:bg-[#EADCFF]/30 disabled:opacity-50"
        disabled
      >
        <Image
          src="/icons/arrow-left-carousel.svg"
          alt="arrow-left"
          className="shrink-0"
          width={21}
          height={15}
        />
      </button>
      <button
        id="scrollRightResourcesPodcastMobile"
        className="ml-4 w-[46px] h-[46px] flex items-center justify-center rounded-full duration-300 bg-[#EADCFF]/20 hover:bg-[#EADCFF]/30 disabled:opacity-50"
      >
        <Image
          src="/icons/arrow-left-carousel.svg"
          alt="arrow-right"
          className="shrink-0 rotate-180"
          width={21}
          height={15}
        />
      </button>
    </div>
  );
};
