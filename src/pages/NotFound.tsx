import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ColorizedWords } from "../components/SectionTitle";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 pt-44 md:px-8 md:pt-52">
      <motion.div
        className="relative mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
      >
        <p className="text-8xl font-bold text-slate-200 md:text-9xl">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-heading md:text-5xl">
          <ColorizedWords text="Page Not Found" />
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg font-light">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-full bg-brand-blue px-8 py-4 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </motion.div>
    </section>
  );
}
