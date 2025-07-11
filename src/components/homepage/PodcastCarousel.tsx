"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { PodcastData } from "@/src/types/podcast";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Image from "next/image";

// Register the GSAP plugin

gsap.registerPlugin(ScrollToPlugin);

interface PodcastCarouselProps {
  podcasts: PodcastData[];
}

const PodcastCarousel: React.FC<PodcastCarouselProps> = ({ podcasts }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const cardWidth = 320; // Card width (80) + padding (20) + border (1) + spacing (24)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const scrollLeftButton = document.getElementById("scrollLeftHomePodcast") as HTMLButtonElement;
    const scrollRightButton = document.getElementById(
      "scrollRightHomePodcast"
    ) as HTMLButtonElement;
    const scrollLeftButtonMobile = document.getElementById(
      "scrollLeftHomePodcastMobile"
    ) as HTMLButtonElement;
    const scrollRightButtonMobile = document.getElementById(
      "scrollRightHomePodcastMobile"
    ) as HTMLButtonElement;

    const updateButtonState = () => {
      if (scrollContainer) {
        // console.log("Scroll Left:", scrollContainer.scrollLeft);
        // console.log("Client Width:", scrollContainer.clientWidth);
        // console.log("Scroll Width:", scrollContainer.scrollWidth);
        // console.log("Left Button:", scrollLeftButton);
        // console.log("Right Button:", scrollRightButton);
        // console.log("Left Button Mobile:", scrollLeftButtonMobile);
        // console.log("Right Button Mobile:", scrollRightButtonMobile);

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
    <div ref={scrollContainerRef} className="pt-10 pb-5 flex overflow-x-auto gap-6 hide-scrollbar">
      {podcasts.map((podcast, i) => (
        <div key={i}>
          <Link href={podcast.attributes.videoLink} target="_blank">
            <div className="group h-full shrink-0 w-80 rounded-[20px] p-[1px] bg-card-border">
              <div className="relative bg-[#0D0C14] rounded-[20px] overflow-hidden flex flex-col h-full">
                <div className="relative aspect-video">
                  <Image
                    src={podcast.attributes.cover.data.attributes.url}
                    alt={podcast.attributes.title || "Podcast Cover"}
                    fill
                    className="transition-transform duration-500 ease-in-out group-hover:scale-110 object-cover"
                  />
                </div>
                <div className="px-5 pt-4 pb-10">
                  <p className="text-h6 font-montserrat font-medium line-clamp-3">
                    {podcast.attributes.title || "Podcast Title"}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PodcastCarousel;
