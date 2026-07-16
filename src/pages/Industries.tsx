import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { industries, IndustryItem } from "../data/content";

export default function Industries() {
  const [activeInd, setActiveInd] = useState<IndustryItem | null>(null);

  return (
    <>
      <section className="relative overflow-hidden px-5 pb-16 pt-44 md:px-8 md:pt-52">
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
                  className="group flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-md backdrop-blur-2xl transition duration-300 hover:border-brand-blue/30"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                >
                  {/* Image header with overlaid badge */}
                  <div className="relative h-48 w-full overflow-hidden border-b border-slate-100">
                    <img
                      src={ind.img}
                      alt={ind.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-brand-blue/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-md border border-brand-blue/20">
                      <span>{ind.icon}</span>
                      <span>{ind.name.includes(" & ") ? ind.name.split(" & ")[0] : ind.name.split(" ")[0]}</span>
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <h3 className="text-xl font-semibold text-heading group-hover:text-brand-blue transition duration-300">
                      {ind.name}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-slate-600 font-light flex-1">
                      {ind.desc}
                    </p>
                    <div className="mt-6">
                      <button
                        onClick={() => setActiveInd(ind)}
                        className="cursor-pointer inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-xs font-semibold text-slate-700 transition hover:border-brand-blue hover:bg-blue-50 hover:text-brand-blue"
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
              className="relative max-h-[90vh] max-w-2xl w-full rounded-[2rem] border border-slate-200 bg-white shadow-2xl p-6 md:p-8 overflow-y-auto z-10 backdrop-blur-3xl scrollbar-none"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveInd(null)}
                className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition cursor-pointer"
                aria-label="Close modal"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Header Image */}
              <div className="relative h-48 md:h-64 w-full overflow-hidden rounded-2xl border border-slate-200 mb-6 mt-4">
                <img
                  src={activeInd.img}
                  alt={activeInd.name}
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-brand-blue px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg border border-brand-blue/20">
                  <span>{activeInd.icon}</span>
                  <span>{activeInd.name}</span>
                </span>
              </div>

              {/* Text content */}
              <h3 className="text-2xl font-semibold text-heading md:text-3xl">{activeInd.name}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-700 md:text-base font-light">{activeInd.desc}</p>

              <div className="mt-8 border-t border-slate-200 pt-6">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue mb-4">Key Capabilities & Features</h4>
                <ul className="space-y-3">
                  {activeInd.highlights.map((highlight, index) => {
                    const dotColor = [
                      "bg-brand-blue shadow-[0_0_8px_rgba(26,115,232,0.4)]",
                      "bg-brand-red shadow-[0_0_8px_rgba(234,67,53,0.4)]",
                      "bg-brand-yellow shadow-[0_0_8px_rgba(251,188,5,0.5)]",
                      "bg-brand-green shadow-[0_0_8px_rgba(52,168,83,0.4)]"
                    ][index % 4];

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
                  className="rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-800 transition cursor-pointer"
                >
                  Close
                </button>
                <Link
                  to="/contact"
                  className="rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition text-center"
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
