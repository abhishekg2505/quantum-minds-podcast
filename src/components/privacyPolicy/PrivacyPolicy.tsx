import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="no-bg pt-32 pb-[120px]">
      <div className="p-6 max-w-3xl mx-auto text-gray-800">
        <h1 className="text-h3 font-montserrat font-semibold text-white mb-10">Privacy Policy</h1>
        <p className="mb-5 text-p2 font-open-sans">Last Updated: 1 July 2025</p>
        <p className="mb-5 text-p2 font-open-sans">
          Welcome to <strong>Quranium</strong>. This Privacy Policy explains how we collect, use,
          disclose, and protect your information when you visit our website and use our services
          (the &rsquo;Services&rsquo;).
        </p>
        <p className="mb-5 text-p2 font-open-sans">
          By accessing or using our Services, you acknowledge that you have read, understood, and
          agree to the collection, use, and disclosure of your information in accordance with this
          Privacy Policy.
        </p>

        <div className="pointers mt-10">
          <h2 className="text-h4 font-montserrat font-semibold">1. Information We Collect</h2>
          <p className="mb-5 text-p2 font-open-sans">
            We may collect the following types of information:
          </p>
          <ul className="list-outside  list-disc ml-6 my-2">
            <li>
              <strong>Personal Information:</strong>
              <span>
                &nbsp;such as your name, email address, and any other information you voluntarily
                provide to us.
              </span>
            </li>
            <li>
              <strong>Usage Data:</strong>
              <span>
                &nbsp;including information about your device, browser type, IP address, pages you
                visit, time spent on pages, and other analytical data.
              </span>
            </li>
            <li>
              <strong>Cookies and Tracking Technologies:</strong>
              <span>
                &nbsp;to enhance your experience, understand usage patterns, and improve our
                Services.
              </span>
            </li>
          </ul>
        </div>

        <div className="pointers mt-10">
          <h2 className="text-h4 font-montserrat font-semibold">2. How We Use Your Information</h2>
          <p className="mb-5 text-p2 font-open-sans">We use the information we collect to:</p>
          <ul className="list-outside  list-disc ml-6 my-2">
            <li>Provide, maintain, and improve our Services.</li>
            <li>Communicate with you, including responding to inquiries and sending updates.</li>
            <li>Analyze usage and trends to better understand how our Services are used.</li>
            <li>Ensure the security and integrity of our Services.</li>
            <li>Comply with legal obligations and enforce our Terms of Service.</li>
          </ul>
        </div>

        <div className="pointers mt-10">
          <h2 className="text-h4 font-montserrat font-semibold">
            3. How We Share Your Information
          </h2>
          <p className="mb-5 text-p2 font-open-sans">We may share your information with:</p>
          <ul className="list-outside  list-disc ml-6 my-2">
            <li>
              <strong>Service Providers:</strong>
              <span>&nbsp;who help us operate, maintain, and improve our Services.</span>
            </li>
            <li>
              <strong>Legal Authorities:</strong>
              <span>
                &nbsp;if required to comply with applicable laws, regulations, or legal processes.
              </span>
            </li>
            <li>
              <strong>Business Transfers:</strong>
              <span>
                &nbsp;in connection with a merger, sale, or asset transfer, your information may be
                transferred as part of that transaction.
              </span>
            </li>
            <li>
              <strong>With Your Consent:</strong>
              <span>&nbsp;in cases where you have given explicit permission.</span>
            </li>
          </ul>
        </div>

        <div className="pointers mt-10">
          <h2 className="text-h4 font-montserrat font-semibold">4. Your Rights and Choices</h2>
          <p className="mb-5 text-p2 font-open-sans">
            Depending on your location, you may have certain rights regarding your personal
            information, including the right to access, correct, delete, or restrict its use. To
            exercise any of these rights, or if you have any questions, please contact us at{" "}
            <Link href="mailto:business@quranium.org">
              <strong>business@quranium.org</strong>
            </Link>
            .
          </p>
        </div>

        <div className="pointers mt-10">
          <h2 className="text-h4 font-montserrat font-semibold">5. Data Security</h2>
          <p className="mb-5 text-p2 font-open-sans">
            We implement robust technical, administrative, and organizational measures to protect
            your personal information against unauthorized access, loss, misuse, or alteration. We
            continuously monitor and improve our practices to mitigate risks and safeguard your
            data.
          </p>
        </div>
        <div className="pointers mt-10">
          <h2 className="text-h4 font-montserrat font-semibold">6. Data Retention</h2>
          <p className="mb-5 text-p2 font-open-sans">
            We retain your personal data only for as long as necessary to fulfill the purposes
            outlined in this Privacy Policy, including providing the Services, complying with legal
            obligations, resolving disputes, and enforcing our agreements. For example:
          </p>
          <ul className="list-outside  list-disc ml-6 my-2">
            <li>
              <strong>Account Information:</strong>
              <span>&nbsp;Retained for up to 5 years after account termination.</span>
            </li>
            <li>
              <strong>Communications:</strong>
              <span>&nbsp;Retained for 2 years unless you request earlier deletion.</span>
            </li>
            <li>
              <strong>Analytical Data:</strong>
              <span>&nbsp;Retained for up to 2 years in anonymized form.</span>
            </li>
          </ul>
          <p className="mb-5 text-p2 font-open-sans">
            You may request early deletion of your data by contacting us at business@quranium.org,
            and we will comply where legally permitted.
          </p>
        </div>
        <div className="pointers mt-10">
          <h2 className="text-h4 font-montserrat font-semibold">7. International Data Transfers</h2>
          <p className="mb-5 text-p2 font-open-sans">
            We may transfer and process your personal data to countries outside of your
            jurisdiction, including countries that may not provide the same level of data protection
            as your home jurisdiction. When we do so, we use legal mechanisms such as:
          </p>
          <ul className="list-outside  list-disc ml-6 my-2">
            <li>Standard Contractual Clauses (SCCs) approved by the European Commission.</li>
            <li>
              Adequacy decisions for countries deemed to provide adequate protection by the EU.
            </li>
            <li>Binding Corporate Rules or other recognized safeguards under applicable law.</li>
          </ul>
          <p className="mb-5 text-p2 font-open-sans">
            By using our Services, you consent to the transfer of your data to these jurisdictions.
          </p>
        </div>
        <div className="pointers mt-10">
          <h2 className="text-h4 font-montserrat font-semibold">8. Data Breach Notification</h2>
          <p className="mb-5 text-p2 font-open-sans">
            In the event of a data breach that affects your personal information, we will notify you
            promptly and in accordance with applicable laws. Notification may be provided via:
          </p>
          <ul className="list-outside  list-disc ml-6 my-2">
            <li>Email (if we have your email address).</li>
            <li>A prominent notice on our website.</li>
            <li>Other means as appropriate.</li>
          </ul>
          <p className="mb-5 text-p2 font-open-sans">
            We will also notify relevant regulatory authorities within 72 hours where legally
            required.
          </p>
        </div>
        <div className="pointers mt-10">
          <h2 className="text-h4 font-montserrat font-semibold">9. Children&rsquo;s Privacy</h2>
          <p className="mb-5 text-p2 font-open-sans">
            Our Services are not directed to children under the age of 13 (or under 16 in certain
            jurisdictions such as the EU), and we do not knowingly collect personal information from
            them. If we become aware that we have collected data from a child without verified
            parental consent, we will delete it immediately.
          </p>

          <p className="mb-5 text-p2 font-open-sans">
            If you believe we have mistakenly collected such information, please contact us at&nbsp;
            <Link href="mailto:business@quranium.org">
              <strong>business@quranium.org.</strong>
            </Link>
          </p>
        </div>
        <div className="pointers mt-10">
          <h2 className="text-h4 font-montserrat font-semibold">10. Third-Party Links</h2>
          <p className="mb-5 text-p2 font-open-sans">
            Our Services may contain links to third-party websites. We are not responsible for the
            privacy practices of such websites and encourage you to read their privacy policies.
          </p>
        </div>
        <div className="pointers mt-10">
          <h2 className="text-h4 font-montserrat font-semibold">
            11. Changes to This Privacy Policy
          </h2>
          <p className="mb-5 text-p2 font-open-sans">
            We may update this Privacy Policy from time to time. When we do, we will revise the
            &rsquo;Effective Date&rsquo; at the top of this page.
          </p>
          <p className="mb-5 text-p2 font-open-sans">
            Your continued use of the Services after any update constitutes your acceptance of the
            new Privacy Policy.
          </p>
        </div>
        <div className="pointers mt-10">
          <h2 className="text-h4 font-montserrat font-semibold">12. Contact Us</h2>
          <p className="text-p2 font-open-sans">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>

          <p className="mb-5 text-p2 font-open-sans">
            <Link href="mailto:business@quranium.org">
              <strong>business@quranium.org.</strong>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
