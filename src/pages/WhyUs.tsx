import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { whyUs } from "../data/content";

export default function WhyUs() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-16 pt-44 md:px-8 md:pt-52">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Why Dyau"
            title="The Partner You Can Trust"
            text="We combine deep technical expertise with a proven delivery framework to ensure every engagement drives real business value."
          />
        </div>
      </section>

      {/* ───── Differentiator Cards ───── */}
      <section className="relative px-5 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item, i) => {
              const headingColorClass = [
                "text-brand-blue",
                "text-brand-red",
                "text-amber-600",
                "text-brand-green"
              ][i % 4];

              return (
                <motion.div
                  key={item.title}
                  className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-md backdrop-blur-2xl transition duration-300 hover:border-brand-blue/30 hover:bg-blue-50/20 md:p-8"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-2xl transition group-hover:border-brand-blue/30 group-hover:bg-blue-50">
                    {item.icon}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-heading">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 font-light">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
