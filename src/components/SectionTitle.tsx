import { motion } from "framer-motion";
import React from "react";

export function ColorizedWords({ text }: { text: string }) {
  const logoColors = [
    "text-brand-blue",
    "text-brand-red",
    "text-amber-600",
    "text-brand-green"
  ];
  const words = text.split(" ");
  return (
    <>
      {words.map((word, idx) => {
        const colorClass = logoColors[idx % logoColors.length];
        return (
          <span key={idx} className={`${colorClass} inline-block mr-[0.22em] last:mr-0`}>
            {word}
          </span>
        );
      })}
    </>
  );
}

export default function SectionTitle({ eyebrow, title, text }: { eyebrow?: string; title: React.ReactNode; text?: string }) {
  return (
    <motion.div
      className="mx-auto max-w-3xl text-center"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.75 }}
    >
      {eyebrow ? <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-brand-blue">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-heading md:text-5xl">
        {typeof title === "string" ? <ColorizedWords text={title} /> : title}
      </h2>
      {text ? <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg font-light">{text}</p> : null}
    </motion.div>
  );
}

