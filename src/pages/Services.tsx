import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { services } from "../data/content";

export default function Services() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-16 pt-44 md:px-8 md:pt-52">
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
            {services.map((s, i) => {
              const dotColorClass = [
                "bg-brand-blue shadow-[0_0_8px_rgba(26,115,232,0.4)]",
                "bg-brand-red shadow-[0_0_8px_rgba(234,67,53,0.4)]",
                "bg-brand-yellow shadow-[0_0_8px_rgba(251,188,5,0.5)]",
                "bg-brand-green shadow-[0_0_8px_rgba(52,168,83,0.4)]"
              ][i % 4];

              const iconColorClass = [
                "border-brand-blue/20 bg-blue-50 text-brand-blue group-hover:bg-blue-100/70 group-hover:border-brand-blue/40 group-hover:shadow-[0_0_20px_rgba(26,115,232,0.15)]",
                "border-brand-red/20 bg-red-50 text-brand-red group-hover:bg-red-100/70 group-hover:border-brand-red/40 group-hover:shadow-[0_0_20px_rgba(234,67,53,0.15)]",
                "border-brand-yellow/20 bg-yellow-50 text-brand-yellow group-hover:bg-yellow-100/70 group-hover:border-brand-yellow/40 group-hover:shadow-[0_0_20px_rgba(251,188,5,0.15)]",
                "border-brand-green/20 bg-green-50 text-brand-green group-hover:bg-green-100/70 group-hover:border-brand-green/40 group-hover:shadow-[0_0_20px_rgba(52,168,83,0.15)]"
              ][i % 4];

              const headingColorClass = [
                "text-brand-blue",
                "text-brand-red",
                "text-amber-600",
                "text-brand-green"
              ][i % 4];

              return (
                <motion.div
                  key={s.title}
                  className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-md shadow-slate-200/40 backdrop-blur-2xl transition duration-300 hover:border-brand-blue/30 hover:bg-blue-50/10 md:p-8"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition ${iconColorClass}`}>
                    {s.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-heading">{s.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 font-light">{s.desc}</p>
                  <ul className="mt-5 space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-slate-700">
                        <span className={`h-1.5 w-1.5 rounded-full ${dotColorClass}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
