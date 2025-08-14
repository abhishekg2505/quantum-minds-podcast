"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MoveRight } from "lucide-react";
import { PodcastData } from "@/src/types/podcast";
import { getPodcasts } from "@/src/lib/getPodcasts";
import { Button } from "@/src/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState<PodcastData[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const sectionRef = useRef(null);
  const triangleRef = useRef(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPodcasts();
      setPodcasts(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(triangleRef.current, {
        y: -10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section
      ref={sectionRef}
      id="podcast"
      className="relative scroll-mt-24 py-16 container mx-auto px-4 bg-black"
    >
      <div className="absolute right-0 bottom-0" ref={triangleRef}>
        <Image
          src="/images/homepage/three-triangles.png"
          alt="three-traingle"
          width={207}
          height={202}
          className="w-full mb-5 md:mb-0"
        />
      </div>
      <h3 className="px-6 text-h4 md:text-h3 font-antonio font-semibold text-left mb-10">
        <span className="bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent">
          Season #1
        </span>{" "}
        was a huge success.
      </h3>
      {podcasts.slice(1, visibleCount).map((podcast, i) => (
        <div key={i} className="grid md:grid-cols-[40%_60%] gap-6 items-start px-6 py-[15px]">
          <Link
            href={podcast.attributes.videoLink}
            target="_blank"
            className="group flex-1 rounded-2xl relative overflow-hidden"
          >
            <Image
              src={podcast.attributes.cover.data.attributes.url}
              alt={podcast.attributes.title}
              width={800}
              height={500}
              className="w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110 object-cover"
            />
          </Link>

          <div className="flex flex-col justify-start items-start flex-1 px-4 pt-10 pb-6">
            <p className="text-h4 font-antonio mb-4">{podcast.attributes.title}</p>

            <Link href={podcast.attributes.videoLink} target="_blank" rel="noopener noreferrer">
              <span className="text-h4 font-antonio text-[#08C1F0]">WATCH EPISODE</span>
            </Link>
          </div>
        </div>
      ))}

      {/* Load More Button */}
      {visibleCount < podcasts.length && (
        <div className="text-left mt-10">
          <Button
            onClick={handleLoadMore}
            className="text-h4 font-antonio font-normal uppercase text-[#08C1F0] bg-transparent hover:bg-transparent"
          >
            SEE MORE
            <ChevronRight className="ml-1  mt-1.5 w-9 h-9 text-[#08C1F0] transition-all duration-300 group-hover:translate-x-1 stroke-[#08C1F0] hover:stroke-[#08C1F0]" />
          </Button>
        </div>
      )}
    </section>
  );
};

export default PodcastList;
