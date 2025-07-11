import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { MoveRight } from "lucide-react";
import { get } from "@/src/lib/axiosInterceptor";
import { PodcastData } from "@/src/types/podcast";
import Link from "next/link";
import PodcastCarousel from "./PodcastCarousel";

export const revalidate = 1800;
type ApiResponse = {
  data: PodcastData[];
};

const Podcast = async () => {
  const response = await get<ApiResponse>(
    `${process.env.BASE_URL}/api/podcasts?populate=*&sort=id:desc`
  );
  const podcasts = response.data;

  // console.log(podcasts);

  // if (podcasts.length === 0) {
  //   return null;
  // }

  return (
    <section className="py-16 container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-start lg:items-center">
        <div>
          <h2 className="text-h4 md:text-h3 font-montserrat font-semibold">
            Our Innovation Podcast, Quantum Minds
          </h2>
          <p className="pt-[10px] text-p2 font-open-sans text-white-2 max-w-3xl">
            Stay updated with the latest breakthroughs, expert discussions, and industry recognition
            shaping the future of quantum-secure blockchain.
          </p>
        </div>
        {/* <Link
          href="https://youtube.com/playlist?list=PLy8ZPcFOAwe4NmRbRTHH9IpxhoOaX1UWv&feature=shared"
          target="_blank"
        >
          <Button className="mt-5 md:mt-0 group">
            <span className="text-buttons font-montserrat font-medium">Watch all</span>
            <MoveRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </Link> */}
        <div className="hidden lg:block">
          <PodcastCarouselButtons />
        </div>
      </div>

      <div className="pt-10 pb-5 flex overflow-x-auto gap-6 thin-scrollbar">
        <PodcastCarousel podcasts={podcasts} />
      </div>

      <div className="lg:hidden mx-auto w-max">
        <PodcastCarouselButtonsMobile />
      </div>
    </section>
  );
};

export default Podcast;

const PodcastCarouselButtons = () => {
  return (
    <div className="flex items-center">
      <button
        id="scrollLeftHomePodcast"
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
        id="scrollRightHomePodcast"
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

const PodcastCarouselButtonsMobile = () => {
  return (
    <div className="flex items-center">
      <button
        id="scrollLeftHomePodcastMobile"
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
        id="scrollRightHomePodcastMobile"
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
