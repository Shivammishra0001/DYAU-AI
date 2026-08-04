import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { services, industries } from "../data/content";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<"services" | "industries" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
  }, [location.pathname]);

  // Handle click outside to close dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-brand-navy font-sans text-white">
      <div className="mx-auto flex h-[80px] max-w-7xl items-center justify-between px-6 md:px-12" ref={dropdownRef}>
        
        {/* Left Side: Brand Logo (Anthropic-style uppercase all-caps text with backslash) */}
        <Link
          to="/"
          className="flex items-center gap-0.5 group"
          aria-label="DYAU Home"
        >
          <img
            src="/images/logo.png"
            alt="DYAU logo"
            className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <span className="text-[22px] font-semibold tracking-tight text-white select-none">
            Dyau
          </span>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {/* Direct Link: Home */}
          <Link
            id="nav-link-home"
            to="/"
            className="text-[15px] font-medium text-white border-b border-transparent hover:border-white/40 py-1 transition"
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              id="nav-btn-services"
              className={`flex items-center gap-1 py-1 text-[15px] font-medium transition duration-200 cursor-pointer border-b text-white ${
                activeDropdown === "services" ? "border-white" : "border-transparent hover:border-white/40"
              }`}
            >
              Services
              <svg
                viewBox="0 0 24 24"
                className={`h-3 w-3 transition-transform duration-200 ${
                  activeDropdown === "services" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <AnimatePresence>
              {activeDropdown === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.12 }}
                  className="absolute left-1/2 -translate-x-1/2 top-[calc(100%-8px)] w-[260px] rounded-2xl border border-white/10 bg-brand-navy p-5 shadow-[0_16px_36px_rgba(0,0,0,0.15)] z-50"
                >
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3 block select-none">
                      Capabilities
                    </span>
                    <div className="flex flex-col gap-2.5">
                      {services.map((s) => {
                        const linkId = s.title.toLowerCase().replace(/\s+/g, "-");
                        return (
                          <Link
                            key={s.title}
                            to={`/services#${linkId}`}
                            className="font-serif text-[16px] text-white hover:underline leading-tight"
                          >
                            {s.title}
                          </Link>
                        );
                      })}
                      <div className="mt-2 pt-2 border-t border-white/10">
                        <Link
                          to="/services"
                          className="font-sans text-[12px] font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-1 uppercase tracking-wider"
                        >
                          See All Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("industries")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              id="nav-btn-industries"
              className={`flex items-center gap-1 py-1 text-[15px] font-medium transition duration-200 cursor-pointer border-b text-white ${
                activeDropdown === "industries" ? "border-white" : "border-transparent hover:border-white/40"
              }`}
            >
              Industries
              <svg
                viewBox="0 0 24 24"
                className={`h-3 w-3 transition-transform duration-200 ${
                  activeDropdown === "industries" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <AnimatePresence>
              {activeDropdown === "industries" && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.12 }}
                  className="absolute left-1/2 -translate-x-1/2 top-[calc(100%-8px)] w-[260px] rounded-2xl border border-white/10 bg-brand-navy p-5 shadow-[0_16px_36px_rgba(0,0,0,0.15)] z-50"
                >
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3 block select-none">
                      Sectors
                    </span>
                    <div className="flex flex-col gap-2.5">
                      {industries.map((ind) => {
                        const linkId = ind.name.toLowerCase().replace(/\s+/g, "-");
                        return (
                          <Link
                            key={ind.name}
                            to={`/industries#${linkId}`}
                            className="font-serif text-[16px] text-white hover:underline leading-tight"
                          >
                            {ind.name}
                          </Link>
                        );
                      })}
                      <div className="mt-2 pt-2 border-t border-white/10">
                        <Link
                          to="/industries"
                          className="font-sans text-[12px] font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-1 uppercase tracking-wider"
                        >
                          See All Industries →
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Direct Link: Why Us */}
          <Link
            id="nav-link-why-us"
            to="/why-us"
            className="text-[15px] font-medium text-white border-b border-transparent hover:border-white/40 py-1 transition"
          >
            Why Us
          </Link>

          {/* Direct Link: Blog */}
          <Link
            id="nav-link-blog"
            to="/blog"
            className="text-[15px] font-medium text-white border-b border-transparent hover:border-white/40 py-1 transition"
          >
            Blog
          </Link>
        </nav>

        {/* Right Side: Simple CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link
            id="nav-btn-contact"
            to="/contact"
            className="rounded-lg bg-white px-5 py-2.5 text-[14px] font-bold text-brand-navy shadow-sm hover:bg-white/90 transition duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          id="nav-btn-mobile-toggle"
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/20 text-white hover:bg-white/10 transition lg:hidden cursor-pointer"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
            {mobileOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full border-t border-white/10 bg-brand-navy overflow-hidden lg:hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-2">
              {/* Direct Link: Home */}
              <Link
                to="/"
                className="py-3 text-base font-semibold text-white"
              >
                Home
              </Link>
              
              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="flex w-full items-center justify-between py-3 text-base font-semibold text-white"
                >
                  Services
                  <svg
                    viewBox="0 0 24 24"
                    className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 border-l border-white/10 ml-1 flex flex-col gap-1 mt-1"
                    >
                      {services.map((s) => (
                        <Link
                          key={s.title}
                          to={`/services#${s.title.toLowerCase().replace(/\s+/g, "-")}`}
                          className="py-2 text-sm text-slate-300 hover:text-white"
                        >
                          {s.title}
                        </Link>
                      ))}
                      <Link
                        to="/services"
                        className="py-2 text-sm font-bold text-slate-400 hover:text-white transition-colors"
                      >
                        See All Services →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Industries Accordion */}
              <div>
                <button
                  onClick={() => setMobileIndustriesOpen((v) => !v)}
                  className="flex w-full items-center justify-between py-3 text-base font-semibold text-white"
                >
                  Industries
                  <svg
                    viewBox="0 0 24 24"
                    className={`h-4 w-4 transition-transform duration-200 ${mobileIndustriesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <AnimatePresence>
                  {mobileIndustriesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 border-l border-white/10 ml-1 flex flex-col gap-1 mt-1"
                    >
                      {industries.map((ind) => {
                        const linkId = ind.name.toLowerCase().replace(/\s+/g, "-");
                        return (
                          <Link
                            key={ind.name}
                            to={`/industries#${linkId}`}
                            className="py-2 text-sm text-slate-300 hover:text-white"
                          >
                            {ind.name}
                          </Link>
                        );
                      })}
                      <Link
                        to="/industries"
                        className="py-2 text-sm font-bold text-slate-400 hover:text-white transition-colors"
                      >
                        See All Industries →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Direct Links */}
              <Link
                to="/why-us"
                className="py-3 text-base font-semibold text-white"
              >
                Why Us
              </Link>

              <Link
                to="/blog"
                className="py-3 text-base font-semibold text-white"
              >
                Blog
              </Link>

              {/* CTA Section */}
              <div className="mt-6 flex flex-col gap-3 pt-6 border-t border-white/10">
                <Link
                  to="/contact"
                  className="w-full rounded-lg bg-white py-3 text-center text-sm font-bold text-brand-navy hover:bg-white/90 transition"
                >
                  Contact Us
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
