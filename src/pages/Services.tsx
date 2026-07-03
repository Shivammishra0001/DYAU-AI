import { motion } from "framer-motion";
import SacredGeometry from "../components/SacredGeometry";
import SectionTitle from "../components/SectionTitle";
import { services } from "../data/content";

export default function Services() {
  return (
    <>
      {/* ───── Page Header ───── */}
      <section className="relative overflow-hidden px-5 pb-16 pt-44 md:px-8 md:pt-52">
        <SacredGeometry className="-right-44 top-20 h-[420px] w-[420px] opacity-40" />
        <div className="absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-violet-500/8 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="What We Do"
            title="Comprehensive Technology Services"
            text="End-to-end solutions spanning AI consulting, talent acquisition, and product engineering — designed to accelerate your digital transformation."
          />
        </div>
      </section>

      {/* ───── Service Cards ───── */}
      <section className="relative px-5 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl transition duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/[0.05] md:p-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.08] text-cyan-300 transition group-hover:border-cyan-300/40 group-hover:bg-cyan-300/[0.12] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                  {s.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{s.desc}</p>
                <ul className="mt-5 space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
