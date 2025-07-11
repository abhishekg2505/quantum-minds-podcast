import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="px-4 max-w-4xl mx-auto pt-[100px] md:pt-[150px] pb-[120px]">
      <h1 className="text-4xl mb-10">Sitemap</h1>
      <ul className="flex flex-col flex-center gap-5 flex-wrap">
        <li>
          <Link
            href="https://quranium.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl mb-20"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="https://quranium.org/about-us"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl mb-20"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="https://quranium.org/quantum-minds-podcast"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl mb-20"
          >
            Quantum Minds Podcast
          </Link>
        </li>
        <li>
          <Link
            href="https://quranium.org/the-uncrackable-conversation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl mb-20"
          >
            The Uncrackable Conversation
          </Link>
        </li>
        <li>
          <Link
            href="https://quranium.org/ecosystem"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl mb-20"
          >
            Build with us
          </Link>
        </li>
        <li>
          <Link
            href="https://quranium.org/quantum-security-awareness-day"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl mb-20"
          >
            Quantum Security Awareness Day
          </Link>
        </li>
        <li>
          <Link
            href="https://quranium.org/resources"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl mb-20"
          >
            Resources
          </Link>
        </li>
        <li>
          <Link
            href="https://quranium.org/dequip"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl mb-20"
          >
            Dequip
          </Link>
        </li>
        <li>
          <Link
            href="https://quranium.org/careers"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl mb-20"
          >
            Careers
          </Link>
        </li>
        <li>
          <Link
            href="https://quranium.org/layers-and-lattes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl mb-20"
          >
            Layers & Lattes
          </Link>
        </li>
        <li>
          <Link
            href="https://quranium.org/contact-us"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl mb-20"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default page;
