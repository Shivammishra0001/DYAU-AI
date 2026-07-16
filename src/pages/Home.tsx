import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionTitle, { ColorizedWords } from "../components/SectionTitle";
import { stats, testimonials } from "../data/content";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden px-5 pb-24 pt-44 md:px-8 md:pt-52">
        <motion.div
          className="relative mx-auto max-w-5xl text-center"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="mx-auto max-w-4xl text-3xl font-semibold tracking-tight drop-shadow-sm md:text-5xl lg:text-6xl leading-tight">
            <ColorizedWords text='"True intelligence emerges when technology serves wisdom."' />
          </h1>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-[1.5px] w-12 bg-brand-blue/20 md:w-24" />
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue shadow-[0_0_8px_rgba(26,115,232,0.4)]" />
            <span className="text-lg font-medium tracking-wide md:text-2xl">
              <span className="text-brand-blue font-semibold">Deep</span>{" "}
              <span className="text-brand-red font-semibold">Tech</span>{" "}
              <span className="text-brand-green font-semibold">Company</span>
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue shadow-[0_0_8px_rgba(26,115,232,0.4)]" />
            <div className="h-[1.5px] w-12 bg-brand-blue/20 md:w-24" />
          </div>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.4em] text-slate-500 md:text-sm">
            Focused On <span className="text-brand-blue">AI</span> &amp; <span className="text-brand-red">Quantum</span>
          </p>
        </motion.div>
      </section>

      {/* ───── Stats Bar ───── */}
      <section className="relative px-5 pb-20 md:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="grid grid-cols-2 gap-4 rounded-[2rem] border border-blue-100 bg-white p-6 shadow-[0_12px_40px_rgba(26,115,232,0.05)] backdrop-blur-2xl md:grid-cols-4 md:p-8"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75 }}
          >
            {stats.map(([value, label], idx) => {
              const numberColorClass = [
                "text-brand-blue",
                "text-brand-red",
                "text-amber-500",
                "text-brand-green"
              ][idx % 4];

              return (
                <div key={label} className="text-center">
                  <p className={`text-3xl font-extrabold md:text-4xl ${numberColorClass}`}>{value}</p>
                  <p className="mt-2 text-sm text-slate-500">{label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="relative px-5 pt-16 pb-12 md:px-8 md:pt-24 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Innovating the Future"
            title="AI & Quantum Computing"
            text="Positioning your enterprise at the forefront of the technological frontier with next-generation compute paradigms."
          />
          
          <div className="relative mt-16 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40 backdrop-blur-2xl md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(26,115,232,0.04),transparent_30%),radial-gradient(circle_at_bottom,rgba(52,168,83,0.02),transparent_22%)]" />
            <div className="relative grid gap-10 lg:grid-cols-2">
              {/* AI Pillar */}
              <div className="relative border-b border-slate-200 pb-10 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
                <h3 className="text-sm font-semibold uppercase tracking-[0.32em] text-heading">Artificial Intelligence</h3>
                <div className="mt-6 space-y-4">
                  {[
                    "AI Governance & Compliance Consultancy",
                    "Responsible AI Strategy & Corporate Advisory",
                    "Intelligent Process Automation & Scaling",
                    "Generative AI & LLM Solution Integration"
                  ].map((item, idx) => {
                    const dotClass = [
                      "bg-brand-blue shadow-[0_0_8px_rgba(26,115,232,0.45)]",
                      "bg-brand-red shadow-[0_0_8px_rgba(234,67,53,0.45)]",
                      "bg-brand-yellow shadow-[0_0_8px_rgba(251,188,5,0.5)]",
                      "bg-brand-green shadow-[0_0_8px_rgba(52,168,83,0.45)]"
                    ][idx % 4];

                    const hoverClass = [
                      "hover:border-brand-blue/30 hover:bg-blue-50/20",
                      "hover:border-brand-red/30 hover:bg-red-50/20",
                      "hover:border-amber-400/30 hover:bg-amber-50/20",
                      "hover:border-brand-green/30 hover:bg-green-50/20"
                    ][idx % 4];

                    return (
                      <motion.div
                        key={item}
                        className={`group flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/50 p-4 transition duration-300 ${hoverClass}`}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.45, delay: idx * 0.05 }}
                      >
                        <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${dotClass}`} />
                        <p className="text-sm leading-7 text-slate-700">{item}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              {/* Quantum Pillar */}
              <div className="relative lg:pl-10">
                <h3 className="text-sm font-semibold uppercase tracking-[0.32em] text-heading">Quantum Computing</h3>
                <div className="mt-6 space-y-4">
                  {[
                    "Quantum Computing Research & Algorithm Design",
                    "Quantum-Inspired Optimization Solutions",
                    "Quantum Simulation, Modeling & Readiness",
                    "Quantum Cryptography & Security Consulting"
                  ].map((item, idx) => {
                    const dotClass = [
                      "bg-brand-blue shadow-[0_0_8px_rgba(26,115,232,0.45)]",
                      "bg-brand-red shadow-[0_0_8px_rgba(234,67,53,0.45)]",
                      "bg-brand-yellow shadow-[0_0_8px_rgba(251,188,5,0.5)]",
                      "bg-brand-green shadow-[0_0_8px_rgba(52,168,83,0.45)]"
                    ][idx % 4];

                    const hoverClass = [
                      "hover:border-brand-blue/30 hover:bg-blue-50/20",
                      "hover:border-brand-red/30 hover:bg-red-50/20",
                      "hover:border-amber-400/30 hover:bg-amber-50/20",
                      "hover:border-brand-green/30 hover:bg-green-50/20"
                    ][idx % 4];

                    return (
                      <motion.div
                        key={item}
                        className={`group flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/50 p-4 transition duration-300 ${hoverClass}`}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.45, delay: idx * 0.05 }}
                      >
                        <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${dotClass}`} />
                        <p className="text-sm leading-7 text-slate-700">{item}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Testimonials ───── */}
      <section className="relative scroll-mt-28 px-5 pt-12 pb-24 md:px-8 md:pt-16 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Testimonials"
            title="Trusted by Industry Leaders"
            text="Hear from the executives and engineering leaders who partner with us."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="flex flex-col rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm backdrop-blur-2xl transition duration-300 hover:border-brand-blue/30 hover:bg-blue-50/20 md:p-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                <svg viewBox="0 0 24 24" className="mb-4 h-8 w-8 text-brand-blue/20" fill="currentColor">
                  <path d="M11.3 2.5c-1.7.6-3.1 1.5-4.2 2.8-1.6 1.8-2.4 4-2.4 6.5 0 1.6.4 3 1.1 4.2.7 1.2 1.6 2.1 2.7 2.8l1-1.7c-.7-.5-1.3-1.1-1.7-1.9-.4-.8-.6-1.6-.6-2.5h2.7c.5 0 .9-.2 1.2-.5.3-.3.5-.7.5-1.2V6c0-.5-.2-.9-.5-1.2-.3-.3-.7-.5-1.2-.5H7.7c.3-.7.8-1.2 1.4-1.7.6-.4 1.3-.7 2.2-.8V2.5zm8 0c-1.7.6-3.1 1.5-4.2 2.8-1.6 1.8-2.4 4-2.4 6.5 0 1.6.4 3 1.1 4.2.7 1.2 1.6 2.1 2.7 2.8l1-1.7c-.7-.5-1.3-1.1-1.7-1.9-.4-.8-.6-1.6-.6-2.5h2.7c.5 0 .9-.2 1.2-.5.3-.3.5-.7.5-1.2V6c0-.5-.2-.9-.5-1.2-.3-.3-.7-.5-1.2-.5h-2.2c.3-.7.8-1.2 1.4-1.7.6-.4 1.3-.7 2.2-.8V2.5z" />
                </svg>
                <p className="flex-1 text-sm leading-7 text-slate-600 italic">"{t.quote}"</p>
                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="text-base font-bold text-brand-blue">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.title}, {t.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
