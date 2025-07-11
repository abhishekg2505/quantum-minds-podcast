"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import gsap from "gsap";

const HybridArchitecture: React.FC = () => {
  const [openSection, setOpenSection] = useState<"hybrid" | "synergy" | null>(
    null
  );

  // Refs for animation
  const hybridRef = useRef<HTMLDivElement>(null);
  const synergyRef = useRef<HTMLDivElement>(null);

  // GSAP Animation
  useEffect(() => {
    const refs = [hybridRef, synergyRef];

    refs.forEach((ref, index) => {
      if (ref.current) {
        gsap.set(ref.current, { height: 0, overflow: "hidden" });
      }
    });
  }, []);

  useEffect(() => {
    const refs = {
      hybrid: hybridRef,
      synergy: synergyRef,
    };

    Object.entries(refs).forEach(([key, ref]) => {
      if (!ref.current) return;

      if (key === openSection) {
        gsap.to(ref.current, {
          height: "auto",
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        gsap.to(ref.current, {
          height: 0,
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    });
  }, [openSection]);

  const toggleSection = (section: "hybrid" | "synergy") => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <section className="bg-black text-white px-4 md:px-[60px] py-16 md:pt-[80px] md:pb-[60px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Hybrid Architecture */}
        <div className="space-y-4">
          <div
            className="cursor-pointer bg-roadshow-reverse-border rounded-[20px] p-[1px]"
            onClick={() => toggleSection("hybrid")}
          >
            <div className="bg-[#0D031B] rounded-[20px] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-h5 font-montserrat font-semibold">
                    Quranium&rsquo;s Hybrid Architecture
                  </h2>
                  <p className="text-p2 font-open-sans mt-1">
                    Engineered for the Convergence Era
                  </p>
                </div>
                {openSection === "hybrid" ? (
                  <ChevronUp className="text-white" />
                ) : (
                  <ChevronDown className="text-white" />
                )}
              </div>

              {/* Content */}
              <div ref={hybridRef} className="overflow-hidden">
                <div className="space-y-6 pt-4">
                  <p className="text-p2 font-open-sans text-gray-300">
                    By fusing quantum-secure consensus, BlockDAG scalability,
                    and AI-native orchestration, Quranium&rsquo;s hybrid system
                    is built for the demands of a new digital reality.
                  </p>

                  <div className="space-y-5">
                    {/* Item 1 */}
                    <div className="flex gap-4 items-start">
                      <Image
                        src="/images/technical/dual.svg"
                        alt="dual"
                        width={40}
                        height={40}
                        className="-mt-[10px]"
                      />
                      <div>
                        <p className="text-h6 font-montserrat font-medium">
                          Converged Dual Architecture:
                        </p>
                        <p className="text-p2 font-open-sans text-gray-300">
                          PoW ensures quantum resistance, while BlockDAG and AI
                          coordination deliver scalability and adaptability.
                        </p>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex gap-4 items-start">
                      <Image
                        src="/images/technical/blockpool.svg"
                        alt="blockpool"
                        width={40}
                        height={40}
                        className="-mt-[10px]"
                      />
                      <div>
                        <p className="text-h6 font-montserrat font-medium">
                          BlockPool Optimization:
                        </p>
                        <p className="text-p2 font-open-sans text-gray-300">
                          A next-gen parallel DAG system tuned by predictive AI
                          agents for peak throughput and latency control.
                        </p>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex gap-4 items-start">
                      <Image
                        src="/images/technical/por.svg"
                        alt="por"
                        width={40}
                        height={40}
                        className="-mt-[10px]"
                      />
                      <div>
                        <p className="text-h6 font-montserrat font-medium">
                          Proof of Respect (PoR):
                        </p>
                        <p className="text-p2 font-open-sans text-gray-300">
                          A fair, reputation-based consensus aligned with
                          decentralized ethics and AI governance integrity.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-p2 font-open-sans text-gray-300">
                    Quranium&rsquo;s architecture doesn&rsquo;t choose between
                    trust, performance, and intelligence; it merges them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Synergy Between Layers */}
        <div className="space-y-4">
          <div
            className="cursor-pointer bg-roadshow-reverse-border rounded-[20px] p-[1px]"
            onClick={() => toggleSection("synergy")}
          >
            <div className="bg-[#0D031B] rounded-[20px] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-h5 font-montserrat font-semibold">
                    Synergy Between Layers
                  </h2>
                  <p className="text-p2 font-open-sans mt-1">
                    The Point of Convergence
                  </p>
                </div>
                {openSection === "synergy" ? (
                  <ChevronUp className="text-white" />
                ) : (
                  <ChevronDown className="text-white" />
                )}
              </div>

              {/* Content */}
              <div ref={synergyRef} className="overflow-hidden">
                <div className="space-y-6 pt-4">
                  <p className="text-p2 font-open-sans text-gray-300">
                    Quranium&rsquo;s &ldquo;Point of Trust&rdquo; mechanism
                    represents more than block finality; it&rsquo;s the
                    cryptographic handshake between intelligent agents,
                    decentralized nodes, and quantum-secure infrastructure.
                  </p>

                  {/* Item 1 */}
                  <div className="flex gap-4 items-start">
                    <Image
                      src="/images/technical/ai.png"
                      alt="ai"
                      width={40}
                      height={40}
                      className="-mt-[10px]"
                    />
                    <p className="text-p2 font-open-sans text-gray-300">
                      AI-coordinated “Point of Trust” blocks anchor consensus
                      every 30 minutes, sealing BlockDAG activity into the
                      immutable quantum-secure core.
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div className="flex gap-4 items-start">
                    <Image
                      src="/images/technical/synergy.png"
                      alt="synergy"
                      width={40}
                      height={40}
                      className="-mt-[10px]"
                    />
                    <p className="text-p2 font-open-sans text-gray-300">
                      This synergy not only defends against attacks but also
                      creates a system that learns, scales, and self-audits
                      across time.
                    </p>
                  </div>

                  <p className="text-p2 font-open-sans text-gray-300">
                    It&rsquo;s not just blockchain; it&rsquo;s convergence
                    infrastructure. Quranium is where integrity becomes
                    intelligent, and resilience becomes default.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HybridArchitecture;
