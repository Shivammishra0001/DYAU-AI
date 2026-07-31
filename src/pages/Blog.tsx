import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

interface BlogPost {
  id: string;
  image: string;
  category: string;
  date: string;
  title: string;
  desc: string;
  author: string;
  readTime: string;
  content: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: "what-is-quantum-post",
    image: "/images/quantum_hero.png",
    category: "Quantum",
    date: "July 29, 2026",
    title: "What Is Quantum Computing?",
    desc: "Quantum computing, a cutting-edge realm of computer science, leverages quantum theory to revolutionize how complex computational problems are tackled.",
    author: "Dr. Marcus Vane, Quantum Consulting Lead",
    readTime: "4 min read",
    content: [
      "Quantum computing, a cutting-edge realm of computer science, leverages quantum theory to revolutionize how complex computational problems are tackled.",
      "Unlike classical computers, which use electrical impulses in a binary manner (1s and 0s) to process information, quantum computers employ quantum bits, or qubits. These qubits harness subatomic particles—like electrons or photons—to exist in multiple states simultaneously, vastly enhancing computational capabilities.",
      "This allows quantum computers to perform calculations that classical computers would find insurmountable within a feasible timeframe.",
      "To explore this revolutionary paradigm fully, we divide the subject into several foundational layers:",
      "• What Is Quantum Computing? - Harnessing qubits and quantum mechanics for computing power.",
      "• History and Foundational Concepts - Tracking theory from Richard Feynman and Paul Benioff to entanglement.",
      "• Applications and Benefits - Discovering optimizations in pharmaceutical design, finance, and logistics.",
      "• Key Features - Superposition, entanglement, and quantum interference.",
      "• Challenges and Limitations - Solving physical decoherence and absolute zero cooling challenges.",
      "• Quantum vs. Classical Computers - Contrasting sequential processing with exponential qubit state spaces."
    ]
  },
  {
    id: "sci-discovery",
    image: "/images/blog_scientific_discovery.png",
    category: "AI & Automation",
    date: "July 18, 2026",
    title: "Accelerating scientific discovery with AI-powered Empirical Research Assistance",
    desc: "Exploring how empirical research assistance accelerates complex computational model development and IT automation pipelines.",
    author: "Dr. Aris Thorne, Head of AI Research",
    readTime: "6 min read",
    content: [
      "In the landscape of modern scientific discovery, researchers are increasingly bottlenecked not by their hypotheses, but by the sheer volume of computation and data pipeline orchestration required to validate them. Empirical Research Assistance (ERA) has emerged as a cornerstone solution, blending agentic workflow automation with large language models to alleviate these operational frictions.",
      "At DYAU AI, we have pioneered the integration of AI-assisted engineering pipelines within pharmaceutical and material science labs. By automating code generation for molecular dynamics simulators and wrapping them in robust computational loops, ERA allows scientists to scale their experimental iterations from dozens per day to thousands.",
      "Key benefits of this integration include:",
      "• Automated simulation set-up and input validation, reducing mechanical errors by over 40%.",
      "• Real-time telemetry monitoring: AI-driven heuristics identify failing iterations early and dynamically reallocate compute credits.",
      "• Integrated data parsing and translation, enabling seamless ingestion into downstream machine learning models.",
      "Ultimately, we find that the combination of elite IT staffing—specifically engineers specialized in PyTorch and scientific compute stacks—and our customized ERA tooling cuts discovery timelines in half."
    ]
  },
  {
    id: "four-ways",
    image: "/images/blog_empirical_research.png",
    category: "AI & Automation",
    date: "June 29, 2026",
    title: "Four ways Google Research scientists have been using Empirical Research Assistance",
    desc: "A deep dive into the real-world applications of cognitive search pipelines and collaborative AI agents in modern enterprises.",
    author: "Elena Rostov, Principal Cloud Architect",
    readTime: "5 min read",
    content: [
      "Empirical Research Assistance is no longer a futuristic laboratory concept; it is actively shaping how leading organizations perform daily technical inquiries. Analyzing patterns across research teams yields four principal methodologies:",
      "1. Intelligent Literature Ingestion: Instead of manual keyword searches, researchers use semantic embedding models to index and map cross-disciplinary research papers, instantly identifying hidden correlations between disparate studies.",
      "2. Synthesized Code Scaffolding: AI agents parse mathematical descriptions of novel neural networks and generate syntactically correct PyTorch or JAX implementations, eliminating boilerplate setup.",
      "3. Experimental Hyperparameter Tuning: Integrating automated feedback loops that modify learn-rates and batch sizes based on real-time hardware bottlenecks.",
      "4. Automated Review Checklists: Verifying compliance with ethical guidelines and licensing requirements prior to code publication.",
      "Leveraging these methodologies, technical leaders can empower their existing software development teams to produce high-value research output with significantly less administrative overhead."
    ]
  },
  {
    id: "alpha-evolve",
    image: "/images/blog_alpha_evolve.png",
    category: "Research",
    date: "May 12, 2026",
    title: "AlphaEvolve: A Gemini-powered coding agent for designing advanced algorithms",
    desc: "Introducing new neural network architectures that evolve dynamically based on computational feedback loops and IT talent pools.",
    author: "Devon Chen, Lead AI Engineer",
    readTime: "7 min read",
    content: [
      "Coding agents have historically been limited to producing static code blocks based on immediate prompts. With the release of AlphaEvolve, we introduce an agentic architecture that iteratively mutates and selects code based on sandbox runtime performance.",
      "Built on top of Google's Gemini models, AlphaEvolve acts as a digital genetic algorithm. When tasked with writing an optimized sorting or routing routine, it generates a pool of initial code variants, runs them against a test battery, analyzes the traceback outputs, and mutates the source code to improve latency or memory usage.",
      "This process mirrors biological evolution, guided by precise, model-driven feedback. However, the system is only as strong as its guardrails. Successful deployment requires specialized IT talent to program and monitor the sandbox environments, preventing code injection and ensuring alignment with corporate standards."
    ]
  },
  {
    id: "quantum-logistics",
    image: "/images/logistics.png",
    category: "Quantum",
    date: "April 05, 2026",
    title: "Quantum-inspired Optimization: Solving Logistics Bottlenecks Today",
    desc: "How modern enterprises leverage quantum simulators and tensor networks to optimize warehouse distribution and staffing models.",
    author: "Dr. Marcus Vane, Quantum Consulting Lead",
    readTime: "8 min read",
    content: [
      "While fault-tolerant quantum computers are still on the horizon, the mathematical tools developed for quantum mechanics can solve classical problems today. Quantum-Inspired Optimization (QIO) leverages concepts like quantum tunneling (simulated classically) to escape local minima in complex optimization landscapes.",
      "In logistic networks, balancing driver staffing, delivery routes, and fuel consumption is a notoriously difficult NP-hard problem. Traditional solvers often time out or yield sub-optimal results as the number of nodes scales.",
      "By utilizing tensor networks and simulated annealing, we have helped logistic partners optimize driver routing models in real time. This quantum-classical hybrid approach has demonstrated up to a 15% reduction in total operational mileage and significantly improved driver retention through balanced schedules."
    ]
  },
  {
    id: "it-talent-bridge",
    image: "/images/finance.png",
    category: "Tech Staffing",
    date: "March 22, 2026",
    title: "The Future of IT Talent: Bridging the Quantum-Classical Divide",
    desc: "Recruiting and training the next generation of engineers who can navigate both classical software stacks and quantum computing algorithms.",
    author: "Sarah Jenkins, Managing Director of Talent",
    readTime: "4 min read",
    content: [
      "As deep tech moves from research labs into commercial production, the demand for hybrid engineers is soaring. The industry is facing a critical talent shortage: classical software developers lack training in linear algebra and quantum gates, while quantum physicists often lack experience in professional software engineering practices.",
      "To address this gap, DYAU AI's staffing model focuses on identifying and placing talent with strong foundational competencies in mathematical computation and software architecture. We emphasize hiring developers who are proficient in C++ or Python and providing them with specialized training in quantum simulators like Qiskit or Cirq.",
      "For CIOs planning their next 5 years, investing in talent that understands both compute paradigms is no longer optional—it is the key differentiator for technological readiness."
    ]
  }
];

const categories = ["All", "AI & Automation", "Quantum", "Tech Staffing", "Research"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* ───── Page Header ───── */}
      <section className="relative overflow-hidden px-5 pb-12 pt-28 md:px-8 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Insights & Research"
            title="Our Blog & Articles"
            text="Explore deep dives, research papers, and technical analyses written by our software developers, AI consultants, and talent acquisition teams."
          />
        </div>
      </section>

      {/* ───── Category Filter ───── */}
      <section className="px-5 pb-10 md:px-8">
        <div className="mx-auto max-w-7xl flex flex-wrap justify-center gap-3">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-lg px-6 py-2.5 text-xs font-bold tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? "bg-brand-navy border-brand-navy text-brand-cream"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* ───── Blog Grid ───── */}
      <section className="px-5 pb-24 md:px-8 md:pb-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, idx) => (
                <motion.div
                  layout
                  key={post.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:shadow-md hover:border-brand-blue/30 text-brand-charcoal"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  {/* Image */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100 rounded-t-2xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-t-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold tracking-wider text-slate-600 uppercase">
                        {post.category}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-brand-charcoal/20" />
                      <span className="text-xs text-slate-700 font-light">{post.date}</span>
                    </div>

                    <h3 className="mt-4 text-base font-bold text-brand-charcoal leading-snug line-clamp-2 transition duration-200">
                      {post.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-700 font-light line-clamp-3">
                      {post.desc}
                    </p>

                    <div className="mt-6 pt-5 border-t border-brand-charcoal/10 mt-auto flex items-center justify-between">
                      <button
                        onClick={() => setActivePost(post)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-charcoal hover:underline transition duration-200 cursor-pointer"
                      >
                        Read Article <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </button>
                      <span className="text-[11px] text-slate-700 font-light">{post.readTime}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ───── Full Reading Modal ───── */}
      <AnimatePresence>
        {activePost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePost(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-h-[90vh] max-w-3xl w-full rounded-[2.5rem] border border-brand-cream-border bg-brand-cream shadow-2xl overflow-y-auto z-10 scrollbar-none flex flex-col"
            >
              {/* Top Cover Image */}
              <div className="relative h-64 md:h-80 w-full overflow-hidden shrink-0">
                <img
                  src={activePost.image}
                  alt={activePost.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent" />

                {/* Close Button */}
                <button
                  onClick={() => setActivePost(null)}
                  className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white hover:bg-black/65 transition cursor-pointer"
                  aria-label="Close article"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>

                {/* Title inside Header */}
                <div className="absolute bottom-6 left-6 right-6 text-white" style={{ color: 'white' }}>
                  <span className="text-xs font-mono font-bold tracking-widest text-brand-blue uppercase">
                    {activePost.category}
                  </span>
                  <h2 
                    className="mt-2 text-2xl font-medium tracking-tight font-serif md:text-4xl leading-tight text-white"
                    style={{ color: 'white' }}
                  >
                    {activePost.title}
                  </h2>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-10 pb-16 md:pb-20">
                {/* Author Info */}
                <div className="flex items-center justify-between text-xs text-slate-700 pb-6 border-b border-brand-cream-border">
                  <div>
                    By <span className="font-semibold text-brand-charcoal">{activePost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>{activePost.date}</span>
                    <span>•</span>
                    <span>{activePost.readTime}</span>
                  </div>
                </div>

                {/* Article Content - Matching Services Modal Typography */}
                <div className="mt-8 space-y-6 text-sm md:text-base leading-relaxed text-slate-700 font-light font-sans">
                  {activePost.content.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {/* Footer Close */}
                <div className="mt-12 pt-6 border-t border-brand-cream-border flex justify-end">
                  <button
                    onClick={() => setActivePost(null)}
                    className="rounded-lg bg-brand-navy px-6 py-2.5 text-xs font-bold text-brand-cream hover:bg-[#003875] transition cursor-pointer"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
