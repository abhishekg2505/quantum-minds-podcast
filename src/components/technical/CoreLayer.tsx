import React from "react";

const CoreLayer: React.FC = () => {
  return (
    <section className="bg-[#1B0637] text-white px-4 md:px-20  py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-h6 md:text-h4 font-montserrat font-medium mb-4">
            The Core Layer of Convergence: <br className="hidden md:block" />
            Uncrackable by Design
          </h2>
          <p className="text-p3 md:text-p2 font-open-sans text-gray-300">
            Quranium’s foundational layer blends quantum-secure Proof of Work
            with intelligent, decentralized coordination. It anchors the network
            in post-quantum cryptography, ensuring integrity at the protocol
            level while enabling AI agents to monitor, adapt, and defend the
            system in real time.
          </p>
        </div>

        <div>
          <h2 className="text-h6 md:text-h4 font-montserrat font-medium mb-4">
            Intelligent Parallel Processing
          </h2>
          <p className="text-p3 md:text-p2 font-open-sans text-gray-300">
            Traditional PoW systems slow under load. Quranium re-engineers it,
            using parallelized architecture, AI-based load balancing, and
            real-time optimization to process high transaction volumes without
            compromising decentralization or security. Speed becomes
            scale-ready, not risk-prone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreLayer;
