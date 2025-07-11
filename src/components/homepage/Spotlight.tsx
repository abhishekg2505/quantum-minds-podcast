import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { MoveRight, ArrowLeft, ArrowRight, MoveLeft } from "lucide-react";
import { get } from "@/src/lib/axiosInterceptor";
import { SpotlightData } from "@/src/types/spotlight";
import Link from "next/link";
import SpotlightCarousel from "./SpotlightCarousel";

type ApiResponse = {
  data: SpotlightData[];
};

const Spotlight = async () => {
  const response = await get<ApiResponse>(`/api/spot-lights?populate=*&sort=id:desc`);
  const spotlight = response.data;

  return (
    <section className="py-16 container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-start lg:items-center">
        <div>
          <h2 className="text-h4 md:text-h3 font-montserrat font-semibold">Quranium Spotlight</h2>
          <p className="pt-2.5 text-p2 font-open-sans text-white-2 max-w-3xl">
            What&apos;s trending?
          </p>
        </div>
        <div className="hidden lg:block">
          <SpotlightCarouselButtons />
        </div>
      </div>

      <SpotlightCarousel spotlight={spotlight} />

      <div className="lg:hidden mx-auto w-max">
        <SpotlightCarouselButtonsMobile />
      </div>
    </section>
  );
};

export default Spotlight;

const SpotlightCarouselButtons = () => {
  return (
    <div className="flex items-center">
      <button
        id="scrollLeftHomeSpotlight"
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
        id="scrollRightHomeSpotlight"
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

const SpotlightCarouselButtonsMobile = () => {
  return (
    <div className="flex items-center">
      <button
        id="scrollLeftHomeSpotlightMobile"
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
        id="scrollRightHomeSpotlightMobile"
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
