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
        className={`mx-auto flex min-h-[76px] max-w-[1820px] items-center justify-between gap-3 rounded-[28px] border border-slate-200/80 bg-white/[0.82] px-5 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur-2xl transition-all duration-500 md:px-7 ${
          scrolled ? "bg-white/[0.92]" : ""
        }`}
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="group flex shrink-0 items-center gap-1.5"
          aria-label="Dyau home"
        >
          <img
            src="/images/logo.png"
            alt="Dyau logo"
            className="h-12 w-12 object-cover"
          />
          <span className="leading-none text-[25px] font-semibold tracking-[-0.04em] font-sans">
            <span className="text-[#4285f4]">D</span>
            <span className="text-[#ea4335]">y</span>
            <span className="text-[#fbbc05]">a</span>
            <span className="text-[#34a853]">u</span>
          </span>
        </Link>

        <div className="hidden shrink-0 items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`rounded-full px-4 py-2.5 text-sm font-medium transition hover:bg-slate-100 hover:text-slate-900 ${
                location.pathname === item.href ? "bg-blue-50 text-brand-blue" : "text-slate-600"
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
                ? "border-brand-blue/30 bg-blue-50 text-brand-blue"
                : "border-slate-200 bg-white text-slate-700 hover:border-brand-blue/40 hover:bg-blue-50/50 hover:text-brand-blue"
            }`}
          >
            Contact
          </Link>
        </div>

        <button
          className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 hover:text-slate-900 lg:hidden"
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
        <div className="rounded-[28px] border border-slate-200 bg-white/95 p-4 shadow-xl shadow-slate-200/50 backdrop-blur-2xl">
          <div className="grid gap-1 sm:grid-cols-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition hover:bg-slate-100 hover:text-slate-900 ${
                  location.pathname === item.href ? "bg-blue-50 text-brand-blue" : "text-slate-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-full border border-brand-blue/30 bg-blue-50 px-5 py-3 text-center text-sm font-semibold text-brand-blue transition hover:border-brand-blue/60 hover:bg-brand-blue hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
