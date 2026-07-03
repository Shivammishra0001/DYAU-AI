import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { whyUs } from "../data/content";

export default function WhyUs() {
  return (
    <>
      {/* ───── Page Header ───── */}
      <section className="relative overflow-hidden px-5 pb-16 pt-44 md:px-8 md:pt-52">
        <div className="absolute left-1/4 top-1/3 h-[380px] w-[380px] rounded-full bg-violet-500/8 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Why DYAU.AI"
            title="The Partner You Can Trust"
            text="We combine deep technical expertise with a proven delivery framework to ensure every engagement drives real business value."
          />
        </div>
      </section>

      {/* ───── Differentiator Cards ───── */}
      <section className="relative px-5 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl transition duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/[0.05] md:p-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-2xl transition group-hover:border-cyan-300/30 group-hover:bg-cyan-300/[0.08]">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
