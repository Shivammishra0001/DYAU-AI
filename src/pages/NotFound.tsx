import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SacredGeometry from "../components/SacredGeometry";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 pt-44 md:px-8 md:pt-52">
      <SacredGeometry className="left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      <motion.div
        className="relative mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
      >
        <p className="text-8xl font-bold text-cyan-300/30 md:text-9xl">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-white md:text-5xl">Page Not Found</h1>
        <p className="mt-4 text-base leading-7 text-slate-400 md:text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#050816] transition hover:bg-cyan-100"
        >
          Back to Home
        </Link>
      </motion.div>
    </section>
  );
}
