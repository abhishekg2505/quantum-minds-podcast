import RoadshowBanner from "@/src/components/common/RoadshowBanner";
import RoadshowCarousel from "./RoadshowCarousel";

const Roadshow = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      {/* <div className="container mx-auto"> */}
      {/* <div className="px-0 md:px-10 lg:px-16 xl:px-20"> */}
      <div className="py-16 container mx-auto px-0">
        <RoadshowBanner />
      </div>
      <RoadshowCarousel />
    </section>
  );
};

export default Roadshow;
