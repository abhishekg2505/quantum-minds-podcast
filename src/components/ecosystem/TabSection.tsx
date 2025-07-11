"use client";
import Tabs from "@/src/components/common/Tabs";
import MpMarquee from "./allMarquee/MpMarquee";
import FiMarquee from "./allMarquee/FiMarquee";
import PncMarquee from "./allMarquee/PncMarquee";
import PncGrid from "./allgrid/PncGrid";
import MpGrid from "./allgrid/MpGrid";
import FiGrid from "./allgrid/FiGrid";
import useIsMobile from "@/src/hooks/useIsMobile";

export default function TabSection() {
  const isMobile = useIsMobile();
  const tabs = [
    {
      label: "Partners and Collaborators",
      content: isMobile ? <PncMarquee /> : <PncGrid />,
    },
    {
      label: "Media Partners",
      content: isMobile ? <MpMarquee /> : <MpGrid />,
    },
    {
      label: "Featured In",
      content: isMobile ? <FiMarquee /> : <FiGrid />,
    },
  ];

  return (
    <div className="px-4 md:px-20 container mx-auto mt-10">
      <Tabs tabs={tabs} />
    </div>
  );
}
