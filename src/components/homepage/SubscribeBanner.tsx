// components/SubscribeBanner.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const SubscribeBanner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#08C1F0] via-[#8C8BFF] to-[#B560FF] py-14 px-4 md:px-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
        <h2 className="text-black text-h3 md:text-h2 font-antonio font-normal text-center md:text-left">
          SUBSCRIBE NOW ON YOUR FAVORITE PLATFORM
        </h2>
        <div className="flex items-center gap-5 mt-2 md:mt-0">
          <Link href="https://www.youtube.com/@QuantumMindsPodcast" target="_blank">
            <Image
              src="/images/homepage/youtube.svg"
              alt="YouTube"
              width={65}
              height={45}
              className="hover:scale-110 transition-transform"
            />
          </Link>
          <Link href="https://open.spotify.com/show/06rLwUrcFHqh0Xibaf1tMC" target="_blank">
            <Image
              src="/images/homepage/spotify.svg"
              alt="Spotify"
              width={58}
              height={58}
              className="hover:scale-110 transition-transform"
            />
          </Link>
          <Link
            href="https://podcasts.apple.com/us/podcast/quantum-minds-podcast/id1805899701"
            target="_blank"
          >
            <Image
              src="/images/homepage/applemusic.svg"
              alt="Apple Podcasts"
              width={51}
              height={51}
              className="hover:scale-110 transition-transform"
            />
          </Link>
          <Link
            href="https://music.amazon.com/podcasts/be3e12aa-2e28-45a0-8bce-ddc642ccc23c/quantum-minds-podcast"
            target="_blank"
          >
            <Image
              src="/images/homepage/amazonmusic.svg"
              alt="Amazon Music"
              width={51}
              height={51}
              className="hover:scale-110 transition-transform"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubscribeBanner;
