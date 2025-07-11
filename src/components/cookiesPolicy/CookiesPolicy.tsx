import Link from "next/link";

const CookiesPolicy = () => {
  return (
    <div className="no-bg pt-32 pb-[120px]">
      <div className="p-6 max-w-3xl mx-auto text-gray-800">
        <h1 className="text-h3 font-montserrat font-semibold text-white mb-10">Cookies Policy</h1>
        <p className="mb-5 text-p2 font-open-sans">Last Updated: 1 July 2025</p>
        <p className="mb-5 text-p2 font-open-sans">
          Welcome to <strong>Quranium.</strong> This Cookies Policy explains how we use cookies and
          similar technologies when you visit our website. It is intended to be read alongside our
          Privacy Policy. By using our website, you consent to our use of cookies in accordance with
          this policy, unless you disable them via your browser or our cookie settings tool.
        </p>

        <div className="pointers mt-10">
          <h2 className="text-h4 font-montserrat font-semibold">1. What Are Cookies?</h2>
          <p className="mb-5 text-p2 font-open-sans">
            Cookies are small data files placed on your device when you visit a website. They help
            us operate the site, remember your preferences, and understand how users interact with
            our content.
          </p>
          <p className="mb-5 text-p2 font-open-sans">
            Cookies may be &rsquo;first-party&rsquo; (set by us) or &rsquo;third-party&rsquo; (set
            by others such as analytics or social media providers).
          </p>
        </div>

        <div className="pointers mt-10">
          <h2 className="text-h4 font-montserrat font-semibold">
            2. Legal Basis for Using Cookies
          </h2>
          <p className="mb-5 text-p2 font-open-sans">
            For users located in the <strong>European Economic Area (EEA)</strong>,{" "}
            <strong>United Kingdom</strong>, and <strong>United Arab Emirates</strong>, we rely on:
          </p>
          <ul className="list-outside  list-disc ml-6 my-2">
            <li>
              <strong>Consent</strong> for all non-essential cookies (e.g., analytics,
              personalization, marketing).
            </li>
            <li>
              <strong>Legitimate interest or contractual necessity</strong> for essential cookies
              that enable core functionality (e.g., security, login access).
            </li>
          </ul>
          <p className="mb-5 text-p2 font-open-sans">
            You may withdraw or manage your consent at any time via our cookie management tool or
            your browser settings.
          </p>
        </div>

        <div className="pointers mt-10">
          <h2 className="text-h4 font-montserrat font-semibold">3. Types of Cookies We Use</h2>
          <div className="overflow-x-auto mt-5">
            <table className="min-w-full border border-gray-700 text-left text-sm">
              <thead className="bg-[rgba(255,255,255,0.2)]">
                <tr>
                  <th className="px-4 py-2 border-b border-gray-700 font-medium">Type</th>
                  <th className="px-4 py-2 border-b border-gray-700 font-medium">Purpose</th>
                  <th className="px-4 py-2 border-b border-gray-700 font-medium">
                    Retention Period
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="px-4 py-2">Essential Cookies</td>
                  <td className="px-4 py-2">
                    Enable core site functionality such as page navigation and access control.
                  </td>
                  <td className="px-4 py-2">Session only</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-4 py-2">Performance Cookies</td>
                  <td className="px-4 py-2">
                    Collect anonymous data on how visitors use the site to improve usability.
                  </td>
                  <td className="px-4 py-2">6 months</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-4 py-2">Functionality Cookies</td>
                  <td className="px-4 py-2">
                    Remember user settings and enhance personalized features.
                  </td>
                  <td className="px-4 py-2">12 months</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="px-4 py-2">Targeting Cookies</td>
                  <td className="px-4 py-2">
                    Deliver relevant ads or track marketing performance (if applicable).
                  </td>
                  <td className="px-4 py-2">6–12 months</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Third-Party Cookies</td>
                  <td className="px-4 py-2">
                    Embedded content (e.g., videos, social plugins) may set their own cookies.
                  </td>
                  <td className="px-4 py-2">As defined by third-party provider.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="pointers mt-10">
          <h2 className="text-h4 font-montserrat font-semibold">4. How to Control Cookies</h2>
          <p className="mb-5 text-p2 font-open-sans">
            You can manage cookies in the following ways:
          </p>
          <ul className="list-outside  list-disc ml-6 my-2">
            <li>
              Use the <strong>cookie consent banner</strong> that appears on your first visit to our
              site.
            </li>
            <li>
              Adjust settings in your <strong>browser</strong> (instructions vary by browser).
            </li>
            <li>
              Use <strong>&rsquo;Do Not Track&rsquo;</strong> settings, though not all services
              honor this.
            </li>
          </ul>
          <p className="mb-5 text-p2 font-open-sans">
            Please note that disabling cookies may affect your ability to use certain features of
            the site.
          </p>
        </div>

        <div className="pointers mt-10">
          <h2 className="text-h4 font-montserrat font-semibold">5. Children&rsquo;s Privacy</h2>
          <p className="mb-5 text-p2 font-open-sans">
            Our website is <strong>not intended for children under the age of 13</strong>. We do not
            knowingly collect, store, or use personal data from children without verifiable parental
            consent, in compliance with:
          </p>
          <ul className="list-outside  list-disc ml-6 my-2">
            <li>
              The <strong>Children&rsquo;s Online Privacy Protection Act (COPPA)</strong> in the
              U.S.
            </li>
            <li>
              <strong>Article 8 of the GDPR</strong> for users in the EU and UK.
            </li>
          </ul>
          <p>
            If you are a parent or guardian and believe your child has provided us with personal
            data without your consent, please contact us at{" "}
            <Link href="mailto:business@quranium.org">
              <strong>business@quranium.org.</strong>
            </Link>
          </p>
        </div>
        <div className="pointers mt-10">
          <h2 className="text-h4 font-montserrat font-semibold">6. Cookie Audit and Review</h2>
          <p className="mb-5 text-p2 font-open-sans">
            To maintain transparency and legal compliance, we conduct{" "}
            <strong>regular cookie audits</strong>:
          </p>
          <ul className="list-outside  list-disc ml-6 my-2">
            <li>Audits occur as needed based on regulatory changes or new technologies.</li>
            <li>We review all first- and third-party cookies in use.</li>
            <li>
              Our audits ensure the accuracy of this policy and that all cookies used remain
              necessary, lawful, and proportionate.
            </li>
          </ul>
          <p className="mb-5 text-p2 font-open-sans">
            This clause supports our accountability obligations under GDPR Article 5(2) and similar
            regulatory frameworks.
          </p>
        </div>
        <div className="pointers mt-10">
          <h2 className="text-h4 font-montserrat font-semibold">
            7. Data Sharing with Third Parties
          </h2>
          <p className="mb-5 text-p2 font-open-sans">
            We may share cookie-derived data with trusted third-party service providers to support:
          </p>
          <ul className="list-outside  list-disc ml-6 my-2">
            <li>Analytics and website optimization (e.g., Google Analytics)</li>
            <li>Embedded media or plugins (e.g., YouTube, Twitter)</li>
            <li>Advertising or retargeting partners (where applicable)</li>
          </ul>
          <p className="mb-5 text-p2 font-open-sans">
            All third-party providers are contractually required to comply with relevant data
            protection laws, including the GDPR and CCPA. We only share data necessary for the
            purposes described and do not sell personal data derived from cookies.
          </p>
          <p className="mb-5 text-p2 font-open-sans">
            For a list of third-party providers and their privacy policies, please visit our
            [Third-Party Providers Page] (insert link if available).
          </p>
        </div>
        <div className="pointers mt-10">
          <h2 className="text-h4 font-montserrat font-semibold">
            8. International Users & Jurisdictional Compliance
          </h2>
          <p className="mb-5 text-p2 font-open-sans">
            We comply with applicable data protection laws across jurisdictions, including:
          </p>
          <ul className="list-outside  list-disc ml-6 my-2">
            <li>
              <strong>General Data Protection Regulation (GDPR)</strong> in the EU and UK.
            </li>
            <li>
              <strong>UAE Personal Data Protection Law (PDPL)</strong>.
            </li>
            <li>Other applicable local privacy regulations in jurisdictions where we operate.</li>
          </ul>
          <p className="mb-5 text-p2 font-open-sans">We ensure that:</p>
          <ul className="list-outside  list-disc ml-6 my-2">
            <li>Your data is processed lawfully, transparently, and fairly.</li>
            <li>
              You can access, rectify, or delete your cookie data in accordance with applicable
              rights.
            </li>
            <li>
              International data transfers comply with standard contractual clauses or other
              recognized safeguards.
            </li>
          </ul>
        </div>
        <div className="pointers mt-10">
          <h2 className="text-h4 font-montserrat font-semibold">9. Updates to This Policy</h2>
          <p className="mb-5 text-p2 font-open-sans">
            We may update this Cookies Policy from time to time to reflect changes in law,
            technology, or our practices. Any updates will be posted here, and the “Effective Date”
            will be revised accordingly.
          </p>
        </div>
        <div className="pointers mt-10">
          <h2 className="text-h4 font-montserrat font-semibold">10. Contact Us</h2>
          <p className="text-p2 font-open-sans">
            If you have questions or requests regarding our cookie practices or this policy, please
            contact us:
          </p>
          <p className="text-p2 font-open-sans">
            <Link href="mailto:business@quranium.org">
              <strong>business@quranium.org.</strong>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;
