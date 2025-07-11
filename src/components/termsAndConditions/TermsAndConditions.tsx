import Link from "next/link";

const TermsAndConditions = () => {
  return (
    <div className="no-bg pt-32 pb-[120px]">
      <div className="p-6 text-gray-800 max-w-3xl mx-auto">
        <h1 className="text-h3 font-montserrat font-semibold mb-2">Terms and Conditions</h1>
        <p className="mb-4">Effective Date: 1 Juy 2025</p>
        <p className="mb-6 text-p2 font-open-sans">
          These Terms and Conditions (&rsquo;Terms&rsquo;) govern your use of the website (the
          &rsquo;Website&rsquo;) operated by Quranium SA (&rsquo;we&rsquo;, &rsquo;us&rsquo;, or
          &rsquo;our&rsquo;), a company incorporated under the laws of Switzerland. By accessing or
          using the Website, you (&rsquo;User&rsquo;, &rsquo;you&rsquo;, or &rsquo;your&rsquo;)
          agree to be bound by these Terms. If you do not agree to these Terms, you must immediately
          cease using the Website.
        </p>

        <h3 className="text-h4 font-montserrat font-semibold mt-8 mb-2">
          1. Introduction and Governing Law
        </h3>
        <ol className="list-disc list-outside ml-6 space-y-2">
          <li>
            <strong>Purpose and Scope</strong>
            <br />
            The Website provides quantum-proof cryptographic solutions, tools, and infrastructure
            for secure blockchain systems and communication networks. These services may include
            algorithmic resources, blockchain analytics, and other functionalities offered via the
            Website.
          </li>
          <li>
            <strong>Legal Basis</strong>
            <br />
            These Terms are governed by and construed in accordance with the substantive laws of
            Switzerland, including the Swiss Code of Obligations (Art. 1 et seq.).
          </li>
          <li>
            <strong>Modification of Terms</strong>
            <br />
            We reserve the right to amend these Terms at any time. Updates will take effect upon
            publication on the Website. Your continued use of the Website after such updates
            constitutes your acceptance of the revised Terms.
          </li>
        </ol>

        <h3 className="text-h4 font-montserrat font-semibold mt-8 mb-2">2. Eligibility</h3>
        <ol className="list-disc list-outside ml-6 space-y-2">
          <li>
            <strong>User Requirements</strong>
            <br />
            The Website is intended for individuals and entities with the legal capacity to enter
            into binding agreements under Swiss law. You must be at least 18 years old or meet the
            age of majority in your jurisdiction.
          </li>
          <li>
            <strong>Global Restrictions</strong>
            <br />
            Access to the Website may be restricted in jurisdictions where use violates local laws.
            Users are responsible for ensuring compliance with all applicable laws in their country.
          </li>
        </ol>

        <h3 className="text-h4 font-montserrat font-semibold mt-8 mb-2">3. Services Provided</h3>
        <ol className="list-disc list-outside ml-6 space-y-2" start={6}>
          <li>
            <strong>Description of Services</strong>
            <br />
            We provide a platform and tools for quantum-secure cryptographic protocols, including
            blockchain-based infrastructure for enhanced security against quantum threats.
          </li>
          <li>
            <strong>Service Limitations</strong>
            <br />
            The Website and its services are provided &rsquo;as is&rsquo; and are subject to
            updates, suspensions, or discontinuations without prior notice. We do not guarantee
            compatibility, uninterrupted availability, or error-free operation.
          </li>
          <li>
            <strong>Third-Party Dependencies</strong>
            <br />
            Certain aspects of the Website may rely on third-party technologies, APIs, platforms, or
            services. We disclaim all liability for the performance, availability, or failures of
            such third-party services. Users acknowledge that reliance on third-party systems is at
            their own risk.
          </li>
        </ol>

        <h3 className="text-h4 font-montserrat font-semibold mt-8 mb-2">
          4. User Obligations and Acceptable Use
        </h3>
        <ol className="list-disc list-outside ml-6 space-y-2">
          <li>
            <strong>Prohibited Activities</strong>
            <p>By using the Website, you agree not to:</p>
            <ul className="list-disc list-outside ml-6 pl-6 space-y-1">
              <li>
                Use the Website for unlawful purposes, including violating Swiss or international
                laws, such as anti-money laundering (AML) or sanctions regulations under the Swiss
                Anti-Money Laundering Ordinance (AMLO);
              </li>
              <li>
                Exploit encryption vulnerabilities or attempt to compromise the quantum-proof
                infrastructure;
              </li>
              <li>
                Interfere with or damage blockchain networks, cryptographic systems, or Website
                functionality through reverse engineering, hacking, or introducing malicious code
                (e.g., viruses, malware);
              </li>
              <li>
                Use the Website for fraudulent, deceptive, or illegal transactions involving
                cryptocurrencies;{" "}
              </li>
              <li>
                Copy, reproduce, or distribute proprietary technologies without authorization.{" "}
              </li>
            </ul>
          </li>
          <li>
            <strong>Data and Key Security</strong>
            <br />
            You are responsible for ensuring the confidentiality and security of private keys,
            passwords, or login credentials for interacting with blockchain services. We disclaim
            liability for losses arising from unauthorized access due to user negligence.
          </li>
          <li>
            <strong>Acknowledgment of Quantum Risks</strong>
            <br />
            You acknowledge that quantum-proof cryptographic technologies are experimental and
            subject to rapid advancements in quantum computing. While we strive to mitigate risks,
            no system is entirely invulnerable. You agree to maintain adequate backups and secondary
            protections for your data and assets.
          </li>
        </ol>

        <h3 className="text-h4 font-montserrat font-semibold mt-8 mb-2">
          5. Compliance with Swiss and Global Regulatory Standards
        </h3>
        <ol className="list-disc list-outside ml-6 space-y-2" start={12}>
          <li>
            <strong>Swiss Regulatory Compliance</strong>
            <br />
            We operate in accordance with Swiss Financial Market Supervisory Authority (FINMA)
            regulations, including the Distributed Ledger Technology (DLT) regulatory framework.
            Users acknowledge that engaging with blockchain infrastructure may involve inherent
            risks subject to FINMA oversight.
          </li>
          <li>
            <strong>Global Privacy and Data Protection Compliance</strong>
            <br />
            In addition to compliance with the Swiss Federal Act on Data Protection (FADP) and the
            General Data Protection Regulation (GDPR), we voluntarily align with major global
            privacy standards, including the California Consumer Privacy Act (CCPA) and other
            emerging regulations where applicable.
          </li>
        </ol>

        <h3 className="text-h4 font-montserrat font-semibold mt-8 mb-2">
          6. Intellectual Property Rights
        </h3>
        <ol className="list-disc list-outside ml-6 space-y-2" start={14}>
          <li>
            <strong>Ownership and License</strong>
            <br />
            <p>
              All content, algorithms, tools, and materials available on the Website are the
              intellectual property of Quranium Global or its licensors. This includes quantum-proof
              cryptographic designs, trademarks, graphics, source code, and system architecture.
            </p>
            <p>
              We grant you a non-exclusive, limited, revocable license to use the Website solely for
              its intended purposes as outlined in these Terms. Any unauthorized modification,
              reproduction, or reverse engineering of our intellectual property is strictly
              prohibited.
            </p>
          </li>
          <li>
            <strong>Reservation of Rights</strong>
            <br />
            <p>
              Except for the limited rights expressly granted to you, all rights, title, and
              interest in and to the Website and its tools remain exclusively with Quranium Global.
            </p>
          </li>
        </ol>

        <h3 className="text-h4 font-montserrat font-semibold mt-8 mb-2">
          7. Data Protection and Privacy
        </h3>
        <ol className="list-disc list-outside ml-6 space-y-2" start={16}>
          <li>
            <strong>Privacy Policy</strong>
            <p>
              Our Privacy Policy governs how we collect, use, and retain data. Users are encouraged
              to review this document to understand their rights and obligations when using the
              Website.
            </p>
          </li>
          <li>
            <strong>Transparency in Data Handling</strong>
            <p>
              Users acknowledge that blockchain technology inherently involves transparency and
              immutability. While we prioritize privacy, certain blockchain activities may require
              pseudonymized interaction visible within public ledgers.
            </p>
          </li>
        </ol>

        <h3 className="text-h4 font-montserrat font-semibold mt-8 mb-2">
          8. Limitation of Liability
        </h3>
        <ol className="list-disc list-outside ml-6 space-y-2">
          <li>
            <strong>Quantum-Specific Disclaimer</strong>
            <p>
              While our cryptographic technologies are designed to mitigate quantum-related risks,
              no system is entirely invulnerable to advances in decryption methods. Users
              acknowledge these inherent limitations.
            </p>
          </li>
          <li>
            <strong>General Disclaimer</strong>
            <p>
              To the extent permitted by Swiss law, we disclaim all warranties, including implied
              warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </li>
          <li>
            <strong>Liability Exclusion</strong>
            <p>We are not liable for damages arising from: </p>
            <ul className="list-disc list-outside ml-6 pl-6 space-y-1">
              <li>
                Failures in quantum-proof technologies due to unforeseen advancements in quantum
                decryption.
              </li>
              <li>
                Loss or theft of private keys, cryptocurrencies, or other blockchain-related assets.
              </li>
              <li>Third-party service failures or outages. </li>
            </ul>
          </li>
          <li>
            <strong>Limitation of Remedies</strong>
            <p>
              In jurisdictions where liability exclusions are restricted, our total liability for
              damages shall not exceed CHF 1000.
            </p>
          </li>
        </ol>

        <h3 className="text-h4 font-montserrat font-semibold mt-8 mb-2">
          9. Dispute Resolution and Governing Law
        </h3>
        <ol className="list-disc list-outside ml-6 space-y-2">
          <li>
            <strong>Jurisdiction</strong>
            <p>These Terms are governed by the substantive laws of Switzerland.</p>
          </li>
          <li>
            <strong>Dispute Resolution</strong>
            <p>
              Any dispute arising under these Terms shall be resolved exclusively through
              arbitration administered by the Swiss Arbitration Centre under the Swiss Arbitration
              Rules. The seat of arbitration shall be Zurich, Switzerland, and the language of
              arbitration shall be English.
            </p>
          </li>
          <li>
            <strong>Mediation Option</strong>
            <p>
              Before initiating arbitration, parties agree to attempt resolution through good-faith
              mediation. If mediation fails, arbitration will proceed as outlined above.
            </p>
          </li>
          <li>
            <strong>Scope of Relief</strong>
            <p>
              Both parties retain the right to seek injunctive relief for intellectual property
              breaches in a competent Swiss court.
            </p>
          </li>
        </ol>

        <h3 className="text-h4 font-montserrat font-semibold mt-8 mb-2">
          10. Miscellaneous Provisions
        </h3>
        <ol className="list-disc list-outside ml-6 space-y-2">
          <li>
            <strong>Entire Agreement</strong>
            <p>
              These Terms constitute the entire agreement between you and Quranium SA regarding the
              use of the Website.
            </p>
          </li>
          <li>
            <strong>Severability</strong>
            <p>
              If any provision is deemed invalid or unenforceable, the remaining provisions shall
              remain in full force.
            </p>
          </li>
          <li>
            <strong>Force Majeure</strong>
            <p>
              We will not be liable for failure to perform due to reasons beyond our control,
              including natural disasters, cyberattacks, or acts of government.
            </p>
          </li>
          <li>
            <strong>No Waiver</strong>
            <p>
              Failure to enforce any part of these Terms does not constitute a waiver of our right
              to enforce them later.
            </p>
          </li>
        </ol>

        <h3 className="text-h4 font-montserrat font-semibold mt-8 mb-2">11. Contact Information</h3>
        <p className="mb-4">
          If you have questions, contact us at{" "}
          <a href="mailto:business@quranium.org" className="underline">
            business@quranium.org
          </a>
        </p>
        <p className="font-semibold">
          By accessing or using the Website, you confirm your acknowledgment and agreement to these
          Terms.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
