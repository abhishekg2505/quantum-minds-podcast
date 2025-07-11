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

const PodcastList = async () => {
  const response = await get<ApiResponse>(`/api/podcasts?populate=*&sort=id:desc`);
  const podcasts = response.data;

  const firstPodcast = podcasts[0].attributes;
  const otherPodcasts = podcasts.slice(1);

  return (
    <section id="podcast" className="scroll-mt-24 py-16 container mx-auto px-4 bg-background">
      <div className="space-y-12">
        {/* Header Section */}
        <div className="grid md:grid-cols-[70%_30%] gap-6 md:gap-0 items-center px-6 pb-[60px]">
          <div>
            <h2 className="text-h4 md:text-h3 font-semibold">
              Quantum Minds Podcast: Season #2 Releasing Soon
            </h2>
            <p className="text-p2 font-open-sans text-white-2 mt-2">
              A global podcast that delves into groundbreaking ideas and disruptive innovations
              shaping the future of technology, commerce, and society with the best emerging minds
              in technology.
            </p>
          </div>
          <div className="md:text-right">
            <Link href="#">
              <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
                <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                  Watch All
                  <MoveRight className="ml-2 w-5 h-5 text-[#ffffff] group-hover:text-[#601dff] transition-all duration-400 group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Top Row */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* First Podcast Image */}
          <div className="flex-1 rounded-2xl overflow-hidden relative">
            <Image
              src={firstPodcast.cover.data.attributes.url}
              alt={firstPodcast.title}
              width={800}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* First Podcast Details */}
          <div className="flex flex-col justify-start items-start flex-1 px-4 pt-10 pb-6">
            <p className="text-h5 mb-4">{firstPodcast.title}</p>
            <Link href={firstPodcast.videoLink} target="_blank">
              <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
                <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
                <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                  Watch Now
                </span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom Carousel */}

        <div className="mx-auto w-max"></div>
      </div>
    </section>
  );
};

export default PodcastList;
