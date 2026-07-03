import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SacredGeometry from "../components/SacredGeometry";
import SectionTitle from "../components/SectionTitle";
import { stats, testimonials } from "../data/content";

export default function Home() {
  return (
    <>
      {/* ───── Hero Section ───── */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-5 pb-24 pt-44 md:px-8 md:pt-52">
        <SacredGeometry className="left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 opacity-80" />
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />
        <motion.div
          className="relative mx-auto max-w-5xl text-center"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-[0_0_46px_rgba(6,182,212,0.35)] md:text-6xl lg:text-7xl">
            ॐ <span className="text-white">द्यौः</span> शान्तिः
          </h1>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-[1.5px] w-12 bg-cyan-500/30 md:w-24" />
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <span className="text-lg font-medium tracking-wide text-cyan-200 md:text-2xl">
              Deep Tech Company
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <div className="h-[1.5px] w-12 bg-cyan-500/30 md:w-24" />
          </div>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.4em] text-cyan-300 md:text-sm">
            Focused On AI & Quantum
          </p>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-slate-200 md:text-2xl lg:text-3xl font-light">
            "True intelligence emerges when technology serves wisdom."
          </p>
        </motion.div>
      </section>

      {/* ───── Stats Bar ───── */}
      <section className="relative px-5 pb-20 md:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="grid grid-cols-2 gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl md:grid-cols-4 md:p-8"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75 }}
          >
            {stats.map(([value, label]) => (
              <div key={label} className="text-center">
                <p className="text-3xl font-bold text-white md:text-4xl">{value}</p>
                <p className="mt-1 text-sm text-slate-400">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───── AI & Quantum Computing Section ───── */}
      <section className="relative px-5 pt-16 pb-12 md:px-8 md:pt-24 md:pb-16">
        <SacredGeometry className="-right-32 top-10 h-[450px] w-[450px] opacity-35" />
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Innovating the Future"
            title="AI & Quantum Computing"
            text="Positioning your enterprise at the forefront of the technological frontier with next-generation compute paradigms."
          />
          
          <div className="relative mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-indigo-950/20 backdrop-blur-2xl md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.08),transparent_30%),radial-gradient(circle_at_bottom,rgba(139,92,246,0.06),transparent_22%)]" />
            <div className="relative grid gap-10 lg:grid-cols-2">
              {/* AI Pillar */}
              <div className="relative border-b border-white/10 pb-10 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
                <h3 className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">Artificial Intelligence</h3>
                <div className="mt-6 space-y-4">
                  {[
                    "AI Governance & Compliance Consultancy",
                    "Responsible AI Strategy & Corporate Advisory",
                    "Intelligent Process Automation & Scaling",
                    "Generative AI & LLM Solution Integration"
                  ].map((item, idx) => (
                    <motion.div
                      key={item}
                      className="group flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/[0.05]"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.45, delay: idx * 0.05 }}
                    >
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                      <p className="text-sm leading-7 text-slate-300">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              {/* Quantum Pillar */}
              <div className="relative lg:pl-10">
                <h3 className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">Quantum Computing</h3>
                <div className="mt-6 space-y-4">
                  {[
                    "Quantum Computing Research & Algorithm Design",
                    "Quantum-Inspired Optimization Solutions",
                    "Quantum Simulation, Modeling & Readiness",
                    "Quantum Cryptography & Security Consulting"
                  ].map((item, idx) => (
                    <motion.div
                      key={item}
                      className="group flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/[0.05]"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.45, delay: idx * 0.05 }}
                    >
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                      <p className="text-sm leading-7 text-slate-300">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Testimonials ───── */}
      <section className="relative scroll-mt-28 px-5 pt-12 pb-24 md:px-8 md:pt-16 md:pb-32">
        <SacredGeometry className="-left-36 top-20 h-[350px] w-[350px] opacity-25" />
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
                className="flex flex-col rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl transition duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/[0.05] md:p-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                <svg viewBox="0 0 24 24" className="mb-4 h-8 w-8 text-cyan-300/40" fill="currentColor">
                  <path d="M11.3 2.5c-1.7.6-3.1 1.5-4.2 2.8-1.6 1.8-2.4 4-2.4 6.5 0 1.6.4 3 1.1 4.2.7 1.2 1.6 2.1 2.7 2.8l1-1.7c-.7-.5-1.3-1.1-1.7-1.9-.4-.8-.6-1.6-.6-2.5h2.7c.5 0 .9-.2 1.2-.5.3-.3.5-.7.5-1.2V6c0-.5-.2-.9-.5-1.2-.3-.3-.7-.5-1.2-.5H7.7c.3-.7.8-1.2 1.4-1.7.6-.4 1.3-.7 2.2-.8V2.5zm8 0c-1.7.6-3.1 1.5-4.2 2.8-1.6 1.8-2.4 4-2.4 6.5 0 1.6.4 3 1.1 4.2.7 1.2 1.6 2.1 2.7 2.8l1-1.7c-.7-.5-1.3-1.1-1.7-1.9-.4-.8-.6-1.6-.6-2.5h2.7c.5 0 .9-.2 1.2-.5.3-.3.5-.7.5-1.2V6c0-.5-.2-.9-.5-1.2-.3-.3-.7-.5-1.2-.5h-2.2c.3-.7.8-1.2 1.4-1.7.6-.4 1.3-.7 2.2-.8V2.5z" />
                </svg>
                <p className="flex-1 text-sm leading-7 text-slate-300 italic">"{t.quote}"</p>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-base font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-slate-400">{t.title}, {t.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
