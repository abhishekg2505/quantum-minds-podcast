"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

type TeamCardProps = {
  person: {
    name: string;
    designation: string;
    twitter: string;
    linkedin: string;
    img: string;
    description: string[];
  };
};

export default function TeamCard({ person }: TeamCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsFlipped(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="group [perspective:1000px]" ref={cardRef} onMouseLeave={handleMouseLeave}>
      <div
        className={`relative bg-card-border min-h-[460px] w-full rounded-[20px] transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-[1px] p-3 bg-[#0C0318] rounded-[20px] text-left shadow-lg [backface-visibility:hidden]">
          <div className="flex flex-col items-center">
            <Image
              src={person.img}
              alt={person.name}
              width={190}
              height={190}
              className="w-[190px] h-[190px] rounded-full mb-4 object-cover"
            />
            <h3 className="text-h6 font-medium">{person.name}</h3>
            <p className="pt-2.5 text-p3 md:text-p2 text-center text-white-2 mb-2">
              {person.designation}
            </p>

            <div className="flex gap-2 pt-2">
              {person.linkedin && (
                <Link href={person.linkedin} target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/social-logo/linkedin.svg"
                    alt="LinkedIn"
                    width={18}
                    height={18}
                    className=""
                  />
                </Link>
              )}

              {person.twitter && (
                <Link href={person.twitter} target="_blank" rel="noopener noreferrer">
                  <Image src="/social-logo/x.svg" alt="X" width={18} height={18} className="" />
                </Link>
              )}
            </div>

            <div className="pt-7">
              <p
                className="text-p3 md:text-p2 underline text-white-2 cursor-pointer"
                onClick={handleFlip}
              >
                Read More
              </p>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-[1px]  p-6 bg-[#0C0318] rounded-[20px] shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-y-auto flex items-center">
          <div>
            {person.description.map((desc, index) => (
              <p key={index} className={`text-p5 ${index !== 0 ? "pt-2" : ""}`}>
                {desc}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
