import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Quantum-Native",
    description:
      "Be Uncrackable. Perform at Speed. Quranium delivers post-quantum security without compromising on performance, through real-world integration with quantum hardware providers.",
    video: "/videos/homepage/quantum-native.webm",
    scale: 1.7,
  },
  {
    title: "AI-Native",
    description:
      "Autonomous. Auditable. Aligned. AI needs infrastructure - a secure, verifiable, decentralized substrate that allows agents to act, coordinate, and transact with integrity. Quranium is that substrate.",
    video: "/videos/homepage/ai-native.webm",
    scale: 1.25,
  },
];

const QuantumReady = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="mb-16 max-w-3xl mx-auto text-center">
        <h2 className="text-h4 md:text-h3 font-montserrat font-semibold">Quantum-native</h2>
        <p className="text-p2 font-open-sans text-white-2 mt-4">
          Quranium delivers post-quantum security without compromising on performance, through
          real-world integration with quantum hardware providers.
        </p>
        <div className="mt-8">
          <Link href="https://www.quranium.org/technology">
            <Button className="group relative overflow-hidden text-[#ffffff] hover:text-[#601dff]">
              <span className="absolute inset-0 z-0 bg-[#FFFFFF] transform -translate-x-[101%] transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
              <span className="relative z-10 flex items-center text-[#ffffff] group-hover:text-[#601dff] transition-colors duration-500">
                Explore our tech
                <MoveRight className="ml-2 w-5 h-5 text-[#ffffff] group-hover:text-[#601dff] transition-all duration-400 group-hover:translate-x-1" />
              </span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Feature grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-[24px] border border-white/10 bg-[#0C0318] overflow-hidden"
          >
            <div className="p-4 md:p-6 h-full flex flex-col">
              <div className="relative mb-6 h-[280px] overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={`absolute inset-0 w-full h-full object-cover transform scale-${feature.scale}`}
                >
                  <source src={feature.video} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <h3 className="text-h5 font-montserrat font-medium">{feature.title}</h3>
              <p className="text-p2 font-open-sans text-white-2 mt-2">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuantumReady;
