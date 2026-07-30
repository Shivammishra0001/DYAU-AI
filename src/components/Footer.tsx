import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-16 md:px-12 bg-brand-navy text-white font-sans">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="group inline-flex items-center gap-1">
              <img
                src="/images/logo.png"
                alt="DYAU AI logo"
                className="h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <span className="text-[18px] font-semibold tracking-tight text-white select-none">
                Dyau <span className="font-light text-white ml-0.5">AI</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white font-light">
              Wisdom Beyond Intelligence. We accelerate business growth through advanced AI engineering, elite tech talent, and custom automation.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">Services</p>
            <ul className="mt-5 space-y-3">
              {[
                { name: "AI Consulting", id: "ai-consulting" },
                { name: "Staffing Solutions", id: "staffing-solutions" },
                { name: "Product Development", id: "product-development" },
                { name: "Cloud & DevOps", id: "cloud-devops" },
                { name: "Data Engineering", id: "data-engineering" },
                { name: "AI Automation", id: "ai-automation" }
              ].map((s) => (
                <li key={s.name}>
                  <Link
                    to={`/services#${s.id}`}
                    className="text-[14px] text-white font-light transition hover:underline"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">Company</p>
            <ul className="mt-5 space-y-3">
              {[
                { label: "About Us", href: "/why-us" },
                { label: "Industries", href: "/industries" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-[14px] text-white font-light transition hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">Contact</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="mailto:contact@dyau.ai"
                  className="text-[14px] text-white font-light transition hover:underline"
                >
                  contact@dyau.ai
                </a>
              </li>
              <li className="text-[13px] leading-relaxed text-white font-mono">
                68 CIRCULAR ROAD, #02-01,<br />SINGAPORE 049422
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white font-light">
            © {new Date().getFullYear()} DYAU AI. All rights reserved. Wisdom Beyond Intelligence.
          </p>
          <div className="flex gap-6 text-xs text-white font-light">
            <Link to="/" className="hover:underline transition">Privacy Policy</Link>
            <Link to="/" className="hover:underline transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
