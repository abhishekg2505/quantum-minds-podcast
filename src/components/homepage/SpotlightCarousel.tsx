"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { SpotlightData } from "@/src/types/spotlight";
import SpotlightCard from "./SpotlightCard";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

interface SpotlightCarouselProps {
  spotlight: SpotlightData[];
}

const SpotlightCarousel: React.FC<SpotlightCarouselProps> = ({ spotlight }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const cardWidth = 320; // Card width (80) + padding (20) + border (1) + spacing (24)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const scrollLeftButton = document.getElementById(
      "scrollLeftHomeSpotlight"
    ) as HTMLButtonElement;
    const scrollRightButton = document.getElementById(
      "scrollRightHomeSpotlight"
    ) as HTMLButtonElement;
    const scrollLeftButtonMobile = document.getElementById(
      "scrollLeftHomeSpotlightMobile"
    ) as HTMLButtonElement;
    const scrollRightButtonMobile = document.getElementById(
      "scrollRightHomeSpotlightMobile"
    ) as HTMLButtonElement;

    const updateButtonState = () => {
      if (scrollContainer) {
        scrollLeftButton.disabled = scrollContainer.scrollLeft === 0;
        scrollRightButton.disabled =
          scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth;
        scrollLeftButtonMobile.disabled = scrollContainer.scrollLeft === 0;
        scrollRightButtonMobile.disabled =
          scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth;
      }
    };

    const scrollLeft = () => {
      if (scrollContainer) {
        const newScrollLeft = Math.max(scrollContainer.scrollLeft - (cardWidth + 23), 0);
        gsap.to(scrollContainer, {
          scrollTo: {
            x: gsap.utils.snap(cardWidth + 23, newScrollLeft),
            autoKill: false,
          },
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    const scrollRight = () => {
      if (scrollContainer) {
        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const remainingScroll = maxScrollLeft - scrollContainer.scrollLeft;
        const scrollAmount = Math.min(cardWidth + 23, remainingScroll);
        gsap.to(scrollContainer, {
          scrollTo: {
            x: gsap.utils.snap(cardWidth + 23, scrollContainer.scrollLeft + scrollAmount),
            autoKill: false,
          },
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    if (scrollContainer) {
      scrollLeftButton.addEventListener("click", scrollLeft);
      scrollRightButton.addEventListener("click", scrollRight);
      scrollLeftButtonMobile.addEventListener("click", scrollLeft);
      scrollRightButtonMobile.addEventListener("click", scrollRight);
      scrollContainer.addEventListener("scroll", updateButtonState);
    }

    updateButtonState();

    return () => {
      if (scrollContainer) {
        scrollLeftButton.removeEventListener("click", scrollLeft);
        scrollRightButton.removeEventListener("click", scrollRight);
        scrollLeftButtonMobile.removeEventListener("click", scrollLeft);
        scrollRightButtonMobile.removeEventListener("click", scrollRight);
        scrollContainer.removeEventListener("scroll", updateButtonState);
      }
    };
  }, []);

  return (
    <div>
      <div
        ref={scrollContainerRef}
        // className="pt-10 pb-5 flex overflow-x-auto gap-6 thin-scrollbar"
        className="pt-10 pb-5 flex overflow-x-auto gap-6 hide-scrollbar"
      >
        {spotlight.map((spotlight, i) => (
          <div key={i}>
            {spotlight.attributes.link ? (
              <Link href={spotlight.attributes.link} target={spotlight.attributes.target}>
                <SpotlightCard spotlight={spotlight} />
              </Link>
            ) : (
              <SpotlightCard spotlight={spotlight} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpotlightCarousel;
