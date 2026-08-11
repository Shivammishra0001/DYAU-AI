import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import SEO from "../components/SEO";

const termsSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Terms of Service - Dyau AI",
  "description": "Read the terms of service governing the use of Dyau AI's website and consulting services.",
  "url": "https://dyau.ai/terms-of-service",
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
        "name": "Terms of Service",
        "item": "https://dyau.ai/terms-of-service"
      }
    ]
  }
};

export default function TermsOfService() {
  return (
    <>
      <SEO
        title="Terms of Service | Dyau AI"
        description="Read the terms of service governing the use of Dyau AI's website and consulting services."
        keywords="Dyau terms of service, consulting agreement, legal terms, deep tech terms, Singapore governing law"
        schema={termsSchema}
      />
      
      <section className="relative overflow-hidden px-5 pb-12 pt-28 md:px-8 md:pt-32 bg-brand-cream">
        <div className="mx-auto max-w-4xl">
          <SectionTitle
            eyebrow="Legal & Compliance"
            title="Terms of Service"
            text="Last updated: August 4, 2026. Please read these Terms of Service carefully before using our website or engaging Dyau AI for consulting services."
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
            className="rounded-3xl border border-slate-200 bg-slate-100/60 backdrop-blur-sm p-8 md:p-12 shadow-sm font-sans text-slate-700 font-light"
          >
            <div className="space-y-10">
              {/* Section 1 */}
              <div>
                <h2 className="text-xl font-semibold text-brand-charcoal font-serif mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="leading-relaxed">
                  By accessing or using the website, consulting platforms, and services provided by Dyau AI, you agree to be bound by these Terms of Service, all applicable laws, and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-xl font-semibold text-brand-charcoal font-serif mb-4">
                  2. Description of Services
                </h2>
                <p className="leading-relaxed">
                  Dyau AI is a premium AI consulting and automation studio. We offer research, design, advisory, and execution services in advanced fields including Artificial Intelligence, Machine Learning, Data Engineering, and Quantum Computing. All custom consulting engagements are subject to separate Statement of Work (SOW) documents detailing specific deliverables, fees, and timelines.
                </p>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-xl font-semibold text-brand-charcoal font-serif mb-4">
                  3. Intellectual Property Rights
                </h2>
                <p className="leading-relaxed mb-3">
                  All materials, text, graphics, designs, logos, software assets, and illustrations on this website are the intellectual property of Dyau AI or our licensors and are protected by international copyright and trademark laws.
                </p>
                <p className="leading-relaxed">
                  Unless explicitly permitted under a separate written agreement, you may not copy, reproduce, modify, distribute, or reverse-engineer any content or software code from our platform.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-xl font-semibold text-brand-charcoal font-serif mb-4">
                  4. Limitation of Liability
                </h2>
                <p className="leading-relaxed">
                  To the maximum extent permitted by law, Dyau AI and its suppliers shall not be liable for any direct, indirect, incidental, special, or consequential damages (including, without limitation, damages for loss of data, profit, or business interruption) arising out of the use or inability to use the materials on our website or services, even if we have been notified orally or in writing of the possibility of such damage.
                </p>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-xl font-semibold text-brand-charcoal font-serif mb-4">
                  5. Governing Law
                </h2>
                <p className="leading-relaxed">
                  These Terms of Service and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of Singapore, without regard to its conflict of law provisions. Any dispute arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Singapore.
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-xl font-semibold text-brand-charcoal font-serif mb-4">
                  6. Amendments to Terms
                </h2>
                <p className="leading-relaxed">
                  We reserve the right to revise these Terms of Service at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these Terms of Service.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
