import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { navItems } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 px-4 transition-all duration-500 md:px-8 lg:px-12 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <nav
        className={`mx-auto flex min-h-[76px] max-w-[1820px] items-center justify-between gap-3 rounded-[28px] border border-white/10 bg-[#07111f]/[0.82] px-5 py-3 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-500 md:px-7 ${
          scrolled ? "bg-[#07111f]/[0.9]" : ""
        }`}
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="group flex shrink-0 items-center gap-1"
          aria-label="DYAU.AI home"
        >
          <span className="leading-none">
            <span className="flex items-end gap-0 text-[24px] font-black tracking-[0.02em] text-white">
              <span>DYAU</span>
              <span className="text-cyan-300">.AI</span>
            </span>
          </span>
        </Link>

        <div className="hidden shrink-0 items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`rounded-full px-4 py-2.5 text-sm font-medium transition hover:bg-white/5 hover:text-white ${
                location.pathname === item.href ? "bg-white/5 text-white" : "text-slate-300"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <Link
            to="/contact"
            className={`rounded-full border px-5 py-3 text-sm font-medium transition ${
              location.pathname === "/contact"
                ? "border-cyan-300/40 bg-white/[0.08] text-white"
                : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-cyan-300/40 hover:bg-white/[0.08] hover:text-white"
            }`}
          >
            Contact
          </Link>
        </div>

        <button
          className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 hover:text-white lg:hidden"
          onClick={() => setMobileOpen((v: boolean) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </nav>

      <motion.div
        initial={false}
        animate={{ height: mobileOpen ? "auto" : 0, opacity: mobileOpen ? 1 : 0 }}
        className="mx-auto mt-3 max-w-[1820px] overflow-hidden lg:hidden"
      >
        <div className="rounded-[28px] border border-white/10 bg-[#08111f]/95 p-4 shadow-2xl shadow-black/30 backdrop-blur-2xl">
          <div className="grid gap-1 sm:grid-cols-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition hover:bg-white/5 hover:text-white ${
                  location.pathname === item.href ? "bg-white/5 text-white" : "text-slate-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-full border border-cyan-300/25 bg-white/[0.04] px-5 py-3 text-center text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-300/10 hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
