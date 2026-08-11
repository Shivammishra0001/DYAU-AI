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

export default function SectionTitle({
  eyebrow,
  title,
  text,
  isPageHeader = false,
  theme = "dark",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  text?: string;
  isPageHeader?: boolean;
  theme?: "light" | "dark";
}) {
  const isLight = theme === "light";
  return (
    <motion.div
      className="mx-auto max-w-3xl text-center"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      {eyebrow ? (
        <p className={`mb-4 text-sm font-mono font-semibold uppercase tracking-[0.35em] ${isLight ? "text-brand-blue" : "text-white"} flex items-center justify-center gap-2`}>
          <span className="h-1.5 w-1.5 bg-brand-blue inline-block shrink-0 rounded-sm shadow-[0_0_6px_rgba(26,115,232,0.3)]" />
          <span>{eyebrow}</span>
          <span className="h-1.5 w-1.5 bg-brand-blue inline-block shrink-0 rounded-sm shadow-[0_0_6px_rgba(26,115,232,0.3)]" />
        </p>
      ) : null}
      {isPageHeader ? (
        <h1 className={`text-3xl font-semibold tracking-tight ${isLight ? "text-[#191919]" : "text-heading"} md:text-5xl`}>
          {title}
        </h1>
      ) : (
        <h2 className={`text-3xl font-semibold tracking-tight ${isLight ? "text-[#191919]" : "text-heading"} md:text-5xl`}>
          {title}
        </h2>
      )}
      {text ? <p className={`mt-5 text-base leading-8 ${isLight ? "text-[#5e5e6e]" : "text-slate-600"} md:text-lg font-light`}>{text}</p> : null}
    </motion.div>
  );
}

