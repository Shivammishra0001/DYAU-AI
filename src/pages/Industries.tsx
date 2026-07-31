import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { industries, IndustryItem } from "../data/content";

export default function Industries() {
  const [activeInd, setActiveInd] = useState<IndustryItem | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const hashId = location.hash.replace("#", "");
      const found = industries.find(
        (ind) => ind.name.toLowerCase().replace(/\s+/g, "-") === hashId
      );
      if (found) {
        setActiveInd(found);
      }
    }
  }, [location.hash]);

  return (
    <>
      <section className="relative overflow-hidden px-5 pb-16 pt-28 md:px-8 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Industries"
            title="Industries We Serve"
            text="Deep domain expertise across verticals that demand precision, compliance, and innovation."
          />
        </div>
      </section>

      {/* ───── Industry Grid ───── */}
      <section className="relative px-5 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => {
              const headingColorClass = [
                "text-brand-blue group-hover:text-brand-red",
                "text-brand-red group-hover:text-brand-blue",
                "text-amber-600 group-hover:text-brand-blue",
                "text-brand-green group-hover:text-brand-blue"
              ][i % 4];

              return (
                <motion.div
                  key={ind.name}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:shadow-md hover:border-brand-blue/30 text-brand-charcoal"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                >
                  {/* Image header with overlaid badge */}
                  <div className="relative h-48 w-full overflow-hidden border-b border-slate-100 rounded-t-2xl">
                    <img
                      src={ind.img}
                      alt={ind.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105 rounded-t-2xl"
                    />
                    <span className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-lg bg-brand-blue px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-charcoal border-none">
                      <span>{ind.icon}</span>
                      <span>{ind.name.includes(" & ") ? ind.name.split(" & ")[0] : ind.name.split(" ")[0]}</span>
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <h3 className="text-xl font-bold tracking-tight font-sans text-brand-charcoal group-hover:text-slate-800 transition duration-300">
                      {ind.name}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-slate-600 font-light flex-1">
                      {ind.desc}
                    </p>
                    <div className="mt-6">
                      <button
                        onClick={() => setActiveInd(ind)}
                        className="cursor-pointer inline-flex items-center gap-1 rounded-lg bg-brand-navy px-5 py-2.5 text-xs font-bold text-brand-cream hover:bg-[#003875] transition duration-200"
                      >
                        Read More →
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── Industry Modal Popup ───── */}
      <AnimatePresence>
        {activeInd && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveInd(null)}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[90vh] max-w-2xl w-full rounded-[2.5rem] border border-brand-cream-border bg-brand-cream shadow-2xl p-8 overflow-y-auto z-10 scrollbar-none"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveInd(null)}
                className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-brand-cream-border bg-brand-cream text-brand-charcoal hover:bg-slate-100 transition cursor-pointer"
                aria-label="Close modal"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Header Image */}
              <div className="relative h-48 md:h-64 w-full overflow-hidden rounded-2xl border border-brand-cream-border mb-6 mt-4">
                <img
                  src={activeInd.img}
                  alt={activeInd.name}
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-lg bg-brand-blue px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-charcoal border-none">
                  <span>{activeInd.icon}</span>
                  <span>{activeInd.name}</span>
                </span>
              </div>

              {/* Text content */}
              <h3 className="text-2xl font-medium tracking-tight font-serif text-brand-charcoal md:text-3xl">{activeInd.name}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base font-light font-sans">{activeInd.desc}</p>

              <div className="mt-8 border-t border-brand-cream-border pt-6">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 select-none">Key Capabilities &amp; Features</h4>
                <ul className="space-y-3">
                  {activeInd.highlights.map((highlight, index) => {
                    const dotColor = "bg-brand-blue";

                    return (
                      <li key={index} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                        <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dotColor}`} />
                        <span>{highlight}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="mt-8 flex justify-end gap-3 border-t border-slate-200 pt-6">
                <button
                  onClick={() => setActiveInd(null)}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-800 transition cursor-pointer"
                >
                  Close
                </button>
                <Link
                  to="/contact"
                  className="rounded-lg bg-brand-navy px-6 py-3 text-sm font-bold text-brand-cream hover:bg-[#003875] transition text-center"
                >
                  Consult an Expert
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
