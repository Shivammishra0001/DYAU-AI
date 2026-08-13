import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import SEO from "../components/SEO";
import { services, ServiceItem } from "../data/content";

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "AI Consulting, Quantum Computing, and Quantum AI Optimization Services",
  "provider": {
    "@type": "Organization",
    "name": "Dyau",
    "url": "https://dyau.ai"
  },
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Dyau Technology Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Consulting & Integration",
          "description": "State-of-the-art predictive algorithms, natural language processing models, and robust governance strategies."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Quantum Computing Research & Optimization",
          "description": "Preparing forward-looking enterprises for the post-classical computing era with quantum-inspired optimization solutions."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Forward Deployed Engineering",
          "description": "Elite technical talent deploying production-grade MLOps pipelines and scaling complex datasets."
        }
      }
    ]
  }
};

export default function Services() {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const hashId = location.hash.replace("#", "");
      const found = services.find(
        (s) => s.title.toLowerCase().replace(/\s+/g, "-") === hashId
      );
      if (found) {
        setActiveService(found);
      }
    }
  }, [location.hash]);

  const seoTitle = activeService
    ? `${activeService.title} | Dyau Services`
    : "Comprehensive Technology Services | Dyau AI Consulting | Quantum Computing Singapore";
  const seoDesc = activeService
    ? activeService.desc
    : "Explore Dyau's end-to-end cognitive solutions spanning AI strategy, quantum computing, quantum AI, specialized IT staffing, and elite product engineering.";
  const seoKeywords = activeService
    ? `${activeService.title.toLowerCase()}, AI services, deep tech consulting, Dyau`
    : "AI consulting, quantum computing, quantum AI, Singapore quantum consulting, quantum optimization, machine learning engineering, MLOps automation, IT staffing, deep tech solutions";
  const activeServiceSchema = activeService
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": activeService.title,
        "description": activeService.desc,
        "provider": {
          "@type": "Organization",
          "name": "Dyau",
          "url": "https://dyau.ai"
        }
      }
    : servicesSchema;

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDesc}
        keywords={seoKeywords}
        schema={activeServiceSchema}
      />
      <section className="relative overflow-hidden px-5 pb-16 pt-28 md:px-8 md:pt-32 bg-brand-cream">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Capabilities & Studio"
            title="AI & Quantum Services"
            text="End-to-end quantum computing, quantum AI, and AI consulting solutions built to transform enterprises in Singapore and worldwide."
            isPageHeader={true}
          />
        </div>
      </section>

      {/* ───── Service Cards Section (styled exactly like Anthropic announcement cards) ───── */}
      <section className="relative px-5 pb-24 md:px-8 md:pb-32 bg-brand-cream">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              return (
                <motion.div
                  key={s.title}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-100 p-8 shadow-sm transition duration-300 hover:shadow-lg hover:shadow-brand-blue/5 hover:-translate-y-1 text-brand-charcoal min-h-[480px] card-gradient-border-hover"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                >
                  {/* Card Content Top */}
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500/80 block select-none">
                      Capabilities
                    </span>
                    <h3 className="mt-4 text-2xl font-extrabold tracking-tight font-sans text-brand-charcoal">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[15.5px] font-serif leading-relaxed text-brand-charcoal/85">
                      {s.desc}
                    </p>
                    <button
                      id={`service-card-${s.title.toLowerCase().replace(/\s+/g, "-")}-details-btn`}
                      onClick={() => setActiveService(s)}
                      className="mt-4 inline-flex items-center text-xs font-semibold text-brand-charcoal hover:underline cursor-pointer"
                    >
                      Service details →
                    </button>
                    
                    {/* Core Capabilities Points list in card blank space */}
                    <ul className="mt-6 space-y-2.5 border-t border-brand-charcoal/10 pt-4">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-[14px] text-brand-charcoal/80 font-sans font-light">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Content Bottom */}
                  <div className="mt-8">
                    <button
                      id={`service-card-${s.title.toLowerCase().replace(/\s+/g, "-")}-explore-btn`}
                      onClick={() => setActiveService(s)}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-brand px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition duration-200 cursor-pointer"
                    >
                      Explore service →
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── Service Modal Popup (styled exactly like Anthropic product detail view) ───── */}
      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveService(null)}
              className="absolute inset-0 bg-[#191919]/35 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 24 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="relative max-h-[90vh] max-w-3xl w-full rounded-[2.5rem] border border-brand-cream-border bg-brand-cream shadow-2xl p-8 md:p-12 overflow-y-auto z-10 scrollbar-none"
            >
              {/* Close Button */}
              <button
                id="service-modal-close-btn"
                onClick={() => setActiveService(null)}
                className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-brand-cream-border bg-slate-100 text-brand-charcoal hover:bg-slate-200 transition cursor-pointer"
                aria-label="Close details"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Detail Content (Matching screenshot 2) */}
              <div className="flex flex-col items-center text-center mt-4">
                {/* DYAU AI Brand Logo Mark */}
                <span className="text-[22px] font-extrabold tracking-[0.06em] text-brand-charcoal uppercase select-none mb-6 block">
                  DYAU AI
                </span>

                {/* Main Title */}
                <h2 className="text-3xl md:text-5xl font-medium tracking-tight font-serif text-brand-charcoal">
                  {activeService.title}
                </h2>

                {/* Sub-headline description sentence */}
                <p className="mt-6 text-lg md:text-xl lg:text-2xl font-serif text-brand-charcoal/90 leading-relaxed max-w-2xl">
                  {activeService.headline}
                </p>

                {/* Action Buttons */}
                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="rounded-lg bg-gradient-brand px-6 py-3 text-sm font-bold text-white hover:opacity-90 transition duration-200 text-center inline-block hover:scale-[1.02] shadow-md shadow-brand-purple/10"
                  >
                    Consult an Expert
                  </Link>
                </div>
              </div>

              {/* Detailed Context Paragraphs & Capabilities Table */}
              <div className="mt-12 border-t border-brand-cream-border pt-8 text-left">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 mb-6 block select-none">
                  Overview &amp; Offerings
                </h3>
                
                {/* Paragraphs */}
                <div className="space-y-6 text-sm md:text-base leading-relaxed text-slate-700 font-light font-sans">
                  {activeService.longDesc.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {/* Key Features Bullet List */}
                <div className="mt-8 pt-6 border-t border-brand-cream-border">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 select-none">
                    Core Capabilities
                  </h4>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {activeService.features.map((f, index) => {
                      return (
                        <li key={index} className="flex items-center gap-3 text-sm text-slate-700 font-sans font-light">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                          <span>{f}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* Footer Close Actions */}
              <div className="mt-12 pt-6 border-t border-brand-cream-border flex justify-end gap-3">
                <button
                  onClick={() => setActiveService(null)}
                  className="rounded-lg border border-brand-cream-border bg-slate-100 px-5 py-2.5 text-xs font-semibold text-slate-400 hover:bg-slate-200 hover:text-brand-charcoal transition cursor-pointer"
                >
                  Close Detail
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
