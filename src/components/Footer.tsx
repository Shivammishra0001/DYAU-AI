import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative border-t border-blue-100 px-5 py-12 md:px-8 bg-[#e8f0fe]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block">
              <span className="leading-none text-[25px] font-semibold tracking-[-0.04em] font-sans">
                <span className="text-[#4285f4]">D</span>
                <span className="text-[#ea4335]">y</span>
                <span className="text-[#fbbc05]">a</span>
                <span className="text-[#34a853]">u</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Wisdom Beyond Intelligence. We accelerate business growth through AI, elite talent, and custom software.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-heading">Services</p>
            <ul className="mt-4 space-y-2.5">
              {["AI Consulting", "Staffing Solutions", "Product Development", "Cloud & DevOps", "Data Engineering", "AI Automation"].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-slate-600 transition hover:text-brand-blue">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-heading">Company</p>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: "About Us", href: "/why-us" },
                { label: "Industries", href: "/industries" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm text-slate-600 transition hover:text-brand-blue">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-heading">Contact</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="mailto:contact@dyau.ai" className="text-sm text-slate-600 transition hover:text-brand-blue">contact@dyau.ai</a>
              </li>
              <li className="text-xs leading-relaxed text-slate-500">
                68 CIRCULAR ROAD, #02-01,<br />SINGAPORE 049422
              </li>
            </ul>
            {/* Social links removed */}
          </div>
        </div>

        <div className="mt-12 border-t border-blue-200/40 pt-8 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Dyau — All rights reserved. Wisdom Beyond Intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
}
