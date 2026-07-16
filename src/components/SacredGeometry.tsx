import { motion } from "framer-motion";

export default function SacredGeometry({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`pointer-events-none absolute ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 420 420" className="h-full w-full">
        <circle cx="210" cy="210" r="132" fill="none" stroke="#1a73e8" strokeOpacity="0.15" strokeWidth="1.2" />
        <circle cx="210" cy="96" r="78" fill="none" stroke="#ea4335" strokeOpacity="0.15" strokeWidth="1" />
        <circle cx="210" cy="324" r="78" fill="none" stroke="#fbbc05" strokeOpacity="0.22" strokeWidth="1" />
        <circle cx="96" cy="210" r="78" fill="none" stroke="#34a853" strokeOpacity="0.15" strokeWidth="1" />
        <circle cx="324" cy="210" r="78" fill="none" stroke="#1a73e8" strokeOpacity="0.15" strokeWidth="1" />
        <path d="M210 40 357 295H63L210 40Z" fill="none" stroke="#ea4335" strokeOpacity="0.12" strokeWidth="1.2" />
        <path d="M210 380 63 125h294L210 380Z" fill="none" stroke="#34a853" strokeOpacity="0.12" strokeWidth="1.2" />
      </svg>
    </motion.div>
  );
}
