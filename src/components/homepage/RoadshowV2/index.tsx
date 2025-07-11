import RoadshowBannerV2 from "@/src/components/common/RoadshowBannerV2";
import RoadshowCarousel from "./RoadshowCarousel";

const RoadshowV2 = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="pt-5 md:pt-16 pb-16 container mx-auto px-0">
        <RoadshowBannerV2 />
      </div>
      <RoadshowCarousel />
    </section>
  );
};

export default RoadshowV2;
