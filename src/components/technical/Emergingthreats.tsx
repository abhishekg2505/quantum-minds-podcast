import React from "react";

interface ThreatCardProps {
  title: string;
  description: string;
}

const threats: ThreatCardProps[] = [
  {
    title: "Breaking RSA  Encryption",
    description:
      "Shor’s Algorithm makes traditional encryption obsolete. Quranium uses NIST-approved post-quantum cryptography, validated off-chain by quantum hardware, to remain secure by default.",
  },
  {
    title: "Compromising Hash Functions",
    description:
      "Quantum attacks can unravel legacy cryptographic hashes. Quranium’s adaptive cryptographic framework and AI-audited protocols are designed to withstand evolving threats without central intervention.",
  },
  {
    title: "Attacking Elliptic Curve Cryptography (ECC)",
    description:
      "Grover’s Algorithm weakens ECC-based systems. Quranium replaces outdated standards with quantum-secure alternatives and distributes validation to specialized nodes,",
  },
];

const EmergingThreats: React.FC = () => {
  return (
    <section className="px-4 md:px-20 py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto text-left">
        <h2 className="text-h5 md:text-h4 font-montserrat font-medium">
          Emerging Threats to Blockchain & Distributed Infrastructure
        </h2>
        <p className="mt-4 text-p3 md:text-p2 font-open-sans text-gray-300 max-w-4xl mx-auto md:mx-0">
          The blockchain industry faces existential risks, not only from quantum
          breakthroughs but from the inability to evolve in sync with AI and
          compute advancements. Quranium’s architecture addresses these head-on
          by fusing cryptographic innovation, decentralized logic, and
          autonomous intelligence. Here’s what threatens the current
          infrastructure, and why Quranium is built differently:
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {threats.map((threat, index) => (
            <div
              key={index}
              className="bg-roadshow-reverse-border rounded-[20px] p-[1px]"
            >
              <div className="bg-[#0D031B] p-6 h-full rounded-[20px]">
                <h3 className="text-h6 md:text-h5 font-montserrat font-medium mb-2">
                  {threat.title}
                </h3>
                <p className="text-p3 md:text-p2 font-open-sans text-gray-300">
                  {threat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmergingThreats;
