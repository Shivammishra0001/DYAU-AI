import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { faqs, FaqAccordionItem } from "../data/content";

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    // ─────────────────────────────────────────────────────────
    // IMPORTANT: REPLACE THE 'entry.XXXXXXX' STRINGS WITH YOUR 
    // SPECIFIC GOOGLE FORM FIELD ENTRY IDs.
    // ─────────────────────────────────────────────────────────
    const fieldMappings = {
      name: "entry.2056680082",      // Google Form Name entry ID
      email: "entry.1718533733",     // Google Form Email entry ID
      phone: "entry.176786075",      // Google Form Phone entry ID
      company: "entry.2037782880",   // Google Form Company entry ID
      service: "entry.371820082",    // Google Form Service entry ID
      message: "entry.561998179"     // Google Form Message entry ID
    };

    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfr0NW-wNH5noLq8K32zQKJ4AkOPl7MuVA5Nvep1ruE0ZpMWw/formResponse";
    const isConfigured = Object.values(fieldMappings).every((id) =>
      typeof id === "string" && id.startsWith("entry.") && !id.includes("XXXXXXX")
    );

    if (!isConfigured) {
      setStatus("error");
      setErrorMessage("Google Form is not fully configured yet. Please contact us directly at contact@dyau.ai.");
      return;
    }

    // Map website service dropdown options to Google Form's allowed dropdown values to prevent 400 validation errors
    const serviceMapping: { [key: string]: string } = {
      "AI Consulting": "Consulting Services",
      "Staffing Solutions": "Other",
      "Product Development": "Web Design & Development",
      "Cloud & DevOps": "Other",
      "Data Engineering": "Other",
      "AI Automation": "Other",
      "Other": "Other"
    };

    const googleFormService = serviceMapping[formData.service] || "Other";
    const finalMessage = `[Selected Service: ${formData.service || "Not Specified"}]\n\n${formData.message}`;

    const data = new URLSearchParams();
    data.append(fieldMappings.name, formData.name);
    data.append(fieldMappings.email, formData.email);
    data.append(fieldMappings.phone, formData.phone);
    data.append(fieldMappings.company, formData.company);
    data.append(fieldMappings.service, googleFormService);
    data.append(fieldMappings.message, finalMessage);

    try {
      await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors", // 'no-cors' allows submission despite Google not returning CORS headers
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: data.toString()
      });
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      setErrorMessage("Something went wrong. Please check your connection or try again.");
    }
  };

  return (
    <>
      {/* ───── Contact CTA ───── */}
      <section className="relative overflow-hidden px-5 pb-24 pt-44 md:px-8 md:pb-32 md:pt-52">
        <div className="absolute left-1/3 top-1/4 h-[400px] w-[400px] rounded-full bg-violet-500/8 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.75 }}>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-cyan-300/80">Get Started</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">Let's Build Something Extraordinary</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Whether you need AI strategy, a dedicated engineering team, or a custom product built from scratch — we're ready to help you move faster and smarter.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:contact@dyau.ai"
                  className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/[0.08] px-5 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/50 hover:bg-cyan-300/[0.12]"
                >
                  <span className="font-semibold">Email:</span>
                  <span>contact@dyau.ai</span>
                </a>
              </div>
              
              <div className="flex flex-col gap-1.5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-slate-300 max-w-sm">
                <span className="font-semibold text-cyan-300 uppercase tracking-wider text-xs">Office Address</span>
                <span className="leading-relaxed mt-1 text-slate-300">
                  68 CIRCULAR ROAD, #02-01,<br />SINGAPORE 049422
                </span>
              </div>

              <p className="text-sm text-slate-400">We typically reply within 1–2 business days.</p>
            </div>
          </motion.div>

          {status === "success" ? (
            <motion.div 
              className="rounded-[2rem] border border-cyan-500/20 bg-cyan-950/5 p-8 text-center backdrop-blur-2xl md:p-12 flex flex-col items-center justify-center min-h-[420px]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-300 text-3xl mb-6 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
              <p className="text-slate-300 max-w-md leading-relaxed text-sm">
                Thank you for reaching out. Your message has been sent successfully to our system. We will review your request and get back to you within 1-2 business days.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 rounded-full border border-white/10 bg-white/[0.04] px-6 py-2.5 text-sm font-medium text-slate-300 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.08] hover:text-white cursor-pointer"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <motion.form
              className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-2xl md:p-8"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              onSubmit={handleSubmit}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="sr-only">Name</span>
                  <input
                    type="text"
                    required
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-2xl border border-white/10 bg-[#050816]/55 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:bg-[#050816]/80"
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Email</span>
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-2xl border border-white/10 bg-[#050816]/55 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:bg-[#050816]/80"
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Phone</span>
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-2xl border border-white/10 bg-[#050816]/55 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:bg-[#050816]/80"
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Company</span>
                  <input
                    type="text"
                    placeholder="Company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full rounded-2xl border border-white/10 bg-[#050816]/55 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:bg-[#050816]/80"
                  />
                </label>
              </div>
              <label className="mt-4 block">
                <span className="sr-only">How can we help?</span>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full rounded-2xl border border-white/10 bg-[#050816]/55 px-4 py-4 text-slate-400 outline-none transition focus:border-cyan-300/60 focus:bg-[#050816]/80 [&:has(option:checked:not([value='']))]:text-white"
                >
                  <option value="">Select a service</option>
                  <option>AI Consulting</option>
                  <option>Staffing Solutions</option>
                  <option>Product Development</option>
                  <option>Cloud & DevOps</option>
                  <option>Data Engineering</option>
                  <option>AI Automation</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="mt-4 block">
                <span className="sr-only">Message</span>
                <textarea
                  required
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none rounded-2xl border border-white/10 bg-[#050816]/55 px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:bg-[#050816]/80"
                />
              </label>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="rounded-full bg-white px-6 py-3.5 text-center text-sm font-semibold text-[#050816] transition hover:bg-cyan-100 disabled:opacity-50 cursor-pointer"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </div>
              {status === "error" && (
                <p className="mt-4 text-sm text-red-400">
                  {errorMessage || "Something went wrong. Please check your connection or try again."}
                </p>
              )}
            </motion.form>
          )}
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className="relative scroll-mt-28 px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-3xl">
          <SectionTitle
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            text="Everything you need to know about working with us."
          />
          <div className="mt-12 space-y-3">
            {faqs.map((faq, i) => (
              <FaqAccordionItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
