import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import SEO from "../components/SEO";

const privacySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Privacy Policy - Dyau AI",
  "description": "Learn about how Dyau AI collects, uses, and protects your personal and enterprise data.",
  "url": "https://dyau.ai/privacy-policy",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dyau.ai"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Privacy Policy",
        "item": "https://dyau.ai/privacy-policy"
      }
    ]
  }
};

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Dyau AI"
        description="Learn about how Dyau AI collects, uses, and protects your personal and enterprise data."
        keywords="Dyau privacy policy, data privacy, AI data compliance, data governance, security policies"
        schema={privacySchema}
      />
      
      <section className="relative overflow-hidden px-5 pb-12 pt-28 md:px-8 md:pt-32 bg-brand-cream">
        <div className="mx-auto max-w-4xl">
          <SectionTitle
            eyebrow="Legal & Compliance"
            title="Privacy Policy"
            text="Last updated: August 4, 2026. At Dyau AI, your privacy and data security are our top priorities. This policy describes how we collect, process, and protect your information."
            isPageHeader={true}
          />
        </div>
      </section>

      <section className="relative px-5 pb-24 md:px-8 md:pb-32 bg-brand-cream">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm font-sans text-slate-700 font-light"
          >
            <div className="space-y-10">
              {/* Section 1 */}
              <div>
                <h2 className="text-xl font-semibold text-brand-charcoal font-serif mb-4">
                  1. Information We Collect
                </h2>
                <p className="leading-relaxed mb-3">
                  We collect information to provide better services to all our clients. The types of information we collect include:
                </p>
                <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                  <li><strong>Personal Identification Details:</strong> Name, business email address, phone number, and company name when you fill out our contact or consulting inquiry forms.</li>
                  <li><strong>Technical Usage Data:</strong> IP address, browser type, operating system, and navigation patterns through Google Analytics and cookie-based identifiers.</li>
                  <li><strong>Client Project Files:</strong> Any data, specifications, or documents shared with us during pre-sale discussions or active consulting engagements, subject to appropriate Non-Disclosure Agreements (NDAs).</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-xl font-semibold text-brand-charcoal font-serif mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="leading-relaxed mb-3">
                  Dyau AI uses the collected data for the following essential business operations:
                </p>
                <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                  <li>To provide, maintain, and optimize our deep tech, quantum optimization, and AI consulting services.</li>
                  <li>To communicate with you, respond to inquiries, send service updates, and manage relationship logistics.</li>
                  <li>To ensure safety, compliance, and legal integrity, including verifying identity under corporate policies.</li>
                  <li>To analyze site usage and behavior trends to improve website performance, user experience, and SEO strategies.</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-xl font-semibold text-brand-charcoal font-serif mb-4">
                  3. Data Protection and Security
                </h2>
                <p className="leading-relaxed">
                  We employ industry-leading security practices, including cryptographic protocols (TLS/SSL) and access control matrices, to safeguard your information. Our team undergoes regular security training to ensure compliance with global data privacy frameworks (e.g., GDPR, CCPA).
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-xl font-semibold text-brand-charcoal font-serif mb-4">
                  4. Sharing of Information
                </h2>
                <p className="leading-relaxed">
                  We do not sell, rent, or trade your personal data to third parties. We may share information with trusted subcontractors and cloud providers under strict confidentiality agreements, solely for the purpose of executing consulting services or maintaining operations. We may also disclose data if legally required by law enforcement or regulatory authorities.
                </p>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-xl font-semibold text-brand-charcoal font-serif mb-4">
                  5. Cookies and Tracking
                </h2>
                <p className="leading-relaxed">
                  We use cookie identifiers to capture user session activity and configuration properties. You can control cookie preferences in your browser settings. Opting out of cookies may disable specific interactive features on our website.
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-xl font-semibold text-brand-charcoal font-serif mb-4">
                  6. Contact Information
                </h2>
                <p className="leading-relaxed">
                  If you have any questions or feedback regarding this Privacy Policy, please contact our Data Protection Officer (DPO) at:
                </p>
                <div className="mt-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 font-mono text-sm text-slate-800">
                  Email: <a href="mailto:privacy@dyau.ai" className="text-brand-blue hover:underline">privacy@dyau.ai</a><br />
                  Office: 68 CIRCULAR ROAD, #02-01, SINGAPORE 049422
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
