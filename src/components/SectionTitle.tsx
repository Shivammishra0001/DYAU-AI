import { motion } from "framer-motion";

export default function SectionTitle({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <motion.div
      className="mx-auto max-w-3xl text-center"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.75 }}
    >
      {eyebrow ? <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-cyan-300/80">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">{text}</p> : null}
    </motion.div>
  );
}
