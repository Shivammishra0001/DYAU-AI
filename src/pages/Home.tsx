import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useInView, useScroll, useTransform } from "framer-motion";
import SectionTitle, { ColorizedWords } from "../components/SectionTitle";
import { stats, testimonials } from "../data/content";
import MagicRings from "../components/MagicRings";

function StatCounter({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  // Extract number and suffix
  const numMatch = value.match(/\d+/);
  const suffix = value.replace(/\d+/, "");
  const targetNumber = numMatch ? parseInt(numMatch[0], 10) : 0;

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1800; // 1.8 seconds animation duration
    const startTime = performance.now();

    const animateCount = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out quadratic
      const easeOutQuad = (t: number) => t * (2 - t);
      const currentCount = Math.round(easeOutQuad(progress) * targetNumber);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, targetNumber]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}


const quantumTopics = [
  {
    id: "quantum-research",
    category: "ALGORITHM DESIGN",
    title: "Quantum Computing Research & Algorithm Design",
    image: "/images/thumb_quantum_research.png",
    description: "Designing quantum algorithms that target specific computational bottlenecks, preparing enterprises for the shift toward quantum supremacy.",
    detailedExplanation: "We design quantum algorithms that target specific computational bottlenecks, preparing enterprises for the shift toward quantum supremacy. Our research focuses on developing fault-tolerant gate-level operations and optimizing quantum circuits to run efficiently on early-stage NISQ (Noisy Intermediate-Scale Quantum) physical hardware. By mapping complex logic gates to qubits and utilizing advanced error mitigation schemes, we build computational solutions that dramatically reduce the number of physical gates required, paving the way for functional quantum workflows.",
    capabilities: [
      "NISQ Algorithm Optimization",
      "Gate-Level Circuit Design",
      "Error Mitigation Stacks",
      "Qubit Mapping Protocols"
    ],
    metrics: [
      { label: "Fault Tolerance", value: "High Parity" },
      { label: "Gate Reduction", value: "Up to 40%" },
      { label: "Hardware Target", value: "NISQ Optimized" }
    ],
    logs: [
      "SYSTEM: Quantum simulator loading gate matrices...",
      "SYSTEM: Initializing 128-qubit noise-model profiling.",
      "SYSTEM: Compiling Hamiltonian circuit mapping...",
      "SUCCESS: Compile finished. Logical gate depth reduced."
    ]
  },
  {
    id: "quantum-optimization",
    category: "OPTIMIZATION",
    title: "Quantum-Inspired Optimization Solutions",
    image: "/images/thumb_quantum_opt.png",
    description: "Leveraging quantum-inspired optimization (QIO) models on classical computing hardware to solve complex combinatorial challenges.",
    detailedExplanation: "Enterprises do not need to wait for fault-tolerant hardware to unlock quantum benefits. We leverage quantum-inspired optimization (QIO) models, employing classical computing stacks to solve complex combinatorial optimization challenges. Using simulated annealing, tabu search, and tensor networks, we optimize warehouse routing, vehicle schedules, and multi-asset financial portfolios. These quantum-inspired algorithms successfully escape local minima, delivering up to 20% efficiency gains over traditional solvers.",
    capabilities: [
      "Simulated Annealing Solvers",
      "Tensor Network Optimization",
      "Combinatorial Math Modeling",
      "Multi-Asset Portfolio Routing"
    ],
    metrics: [
      { label: "Efficiency Gain", value: "Up to 20%" },
      { label: "Solver Speed", value: "10x Speedup" },
      { label: "Convergence Rate", value: "99.8%" }
    ],
    logs: [
      "SYSTEM: Simulating annealing process step 1 of 5000...",
      "SYSTEM: Convergence rate monitoring active.",
      "SYSTEM: Local minimum escape loop executed.",
      "SUCCESS: Optimization solved. 18.5% route enhancement."
    ]
  },
  {
    id: "quantum-simulation",
    category: "SIMULATION",
    title: "Quantum Simulation, Modeling & Readiness",
    image: "/images/thumb_quantum_simulation.png",
    description: "Simulating quantum environments on classical CPU/GPU clusters to help scientific teams model molecular and biochemical interactions.",
    detailedExplanation: "We help organizations build 'quantum readiness' today by simulating quantum environments on classical CPU and GPU clusters. Our simulators allow developers to prototype, test, and benchmark quantum code before deploying it to physical hardware platforms. Through molecular dynamics simulations, material science modeling, and biochemical simulations, we establish robust sandboxes that help scientific teams model complex quantum interactions with high fidelity.",
    capabilities: [
      "Molecular Dynamics Simulation",
      "GPU-Accelerated Simulators",
      "Biochemical Interaction Sandboxes",
      "Quantum Code Benchmarking"
    ],
    metrics: [
      { label: "Simulation Nodes", value: "GPU Clusters" },
      { label: "Benchmarking", value: "NISQ Simulators" },
      { label: "Accuracy", value: "High-Fidelity Matrix" }
    ],
    logs: [
      "SYSTEM: Spinning up GPU cluster simulator partitions...",
      "SYSTEM: Molecular state tensor validation running.",
      "SYSTEM: Benchmarking code output on virtual quantum cores...",
      "READY: Simulation environment sandbox online."
    ]
  },
  {
    id: "quantum-cryptography",
    category: "SECURITY",
    title: "Quantum Cryptography & Security Consulting",
    image: "/images/thumb_quantum_security.png",
    description: "Implementing post-quantum cryptography (PQC) and NIST-standardized lattice-based protocols to protect data from future decryption risks.",
    detailedExplanation: "The post-quantum cryptography (PQC) era is approaching, threatening traditional RSA and ECC encryption standards. We offer comprehensive auditing and consulting to transition systems to quantum-resistant encryption algorithms. Our security experts implement NIST-standardized lattice-based cryptographic protocols, helping protect critical data caches, state telemetry pipelines, and corporate credentials from future decryption risks.",
    capabilities: [
      "Post-Quantum Cryptography Audits",
      "Lattice-Based Encryption Stacks",
      "Data Cache Decryption Protection",
      "NIST Compliance Alignment"
    ],
    metrics: [
      { label: "Encryption", value: "NIST-Standard PQC" },
      { label: "Decryption Risk", value: "Mitigated" },
      { label: "Audit Output", value: "Full Compliance" }
    ],
    logs: [
      "SYSTEM: Commencing cryptographic rule auditing...",
      "SYSTEM: Deploying lattice-based key exchange checks.",
      "SYSTEM: Evaluating legacy RSA/ECC vulnerabilities...",
      "ALERT: High-risk telemetry nodes flagged for PQC upgrade."
    ]
  }
];

const aiTopics = [
  {
    id: "generative-ai",
    category: "AI AUTOMATION",
    title: "Generative AI & LLM Solution Integration",
    image: "/images/thumb_ai_llm.png",
    description: "Harnessing state-of-the-art LLMs and custom RAG (Retrieval-Augmented Generation) pipelines to build intelligent agentic systems that automate complex corporate workflows.",
    detailedExplanation: "Our Generative AI solutions unlock unmatched operational capacity by embedding customized Large Language Models (LLMs) and advanced agentic workflows into your business systems. Utilizing custom Retrieval-Augmented Generation (RAG) and semantic databases, we connect internal knowledge assets to standard pipelines, enabling automated report drafting, deep search capabilities, and self-healing workflow loops. Every deployment features strict output guardrails and validation steps to ensure data safety, zero hallucinations, and compliance with corporate policies.",
    capabilities: [
      "Custom RAG Pipeline Design",
      "Agentic Workflow Orchestration",
      "Model Fine-Tuning & Quantization",
      "Prompt Engineering & Guardrails"
    ],
    metrics: [
      { label: "Context Window", value: "200k+ tokens" },
      { label: "Orchestrator", value: "LangGraph / AutoGen" },
      { label: "Latency", value: "<1.2s TTFT" }
    ],
    logs: [
      "SYSTEM: LLM instance spin-up initialized...",
      "SYSTEM: Vector database connection established.",
      "SYSTEM: Embedding pipeline running at 145 tok/sec.",
      "READY: Agentic workflow online and listening."
    ]
  },
  {
    id: "ai-governance",
    category: "AI GOVERNANCE",
    title: "AI Governance & Compliance Consultancy",
    image: "/images/thumb_ai_governance.png",
    description: "Proactive auditing and risk mitigation to align your enterprise algorithms with global standards, ensuring full compliance with the EU AI Act, FTC guidelines, and ISO standards.",
    detailedExplanation: "Navigating the emerging regulatory landscape requires structured, auditable validation of machine learning assets. We conduct end-to-end algorithmic risk assessments to ensure alignment with international frameworks, including the EU AI Act, FTC mandates, and ISO/IEC 42001. Our consultancy designs custom explainability frameworks, establishes rigorous data provenance tracking, and constructs live dashboards to monitor feature drift and bias, shielding your organization from legal and ethical risks.",
    capabilities: [
      "Regulatory Audit (EU AI Act, FTC)",
      "Explainable AI (XAI) Frameworks",
      "Bias & Fairness Assessments",
      "Data Privacy & Lineage Mapping"
    ],
    metrics: [
      { label: "Compliance Level", value: "EU AI Act Tier-4" },
      { label: "Frameworks", value: "ISO/IEC 42001" },
      { label: "Drift Monitoring", value: "Real-time telemetry" }
    ],
    logs: [
      "SYSTEM: Compliance scanner initialized...",
      "SYSTEM: Loading EU AI Act regulatory rulebook v2.1.",
      "SYSTEM: Evaluating Model Drift parameters...",
      "ALERT: Bias validation check passed with 99.8% parity."
    ]
  },
  {
    id: "responsible-ai",
    category: "AI ADVISORY",
    title: "Responsible AI Strategy & Corporate Advisory",
    image: "/images/thumb_ai_advisory.png",
    description: "Designing moral, robust corporate policies and ethical frameworks. We work with boardrooms to align AI adoption with long-term brand equity and societal safety.",
    detailedExplanation: "Corporate AI adoption must be aligned with organizational values and trust. We help your executive leadership team establish an actionable Ethical AI Framework. Through interactive red-teaming simulations, adversarial evaluation, and multi-dimensional risk matrix mapping, we identify vulnerabilities in automated decision-making and build mitigation strategies. Our advisory ensures your brand equity is protected while enabling rapid technology integration.",
    capabilities: [
      "Ethical Framework Development",
      "Safety Alignment & Red-Teaming",
      "Corporate AI Risk Mapping",
      "Executive Education & Policy"
    ],
    metrics: [
      { label: "Audit Rate", value: "100% Traceability" },
      { label: "Risk Matrix", value: "Multi-dimensional" },
      { label: "Target", value: "Zero-Bias Inference" }
    ],
    logs: [
      "SYSTEM: Advisory framework check started...",
      "SYSTEM: Aligning safety parameters with alignment matrices.",
      "SYSTEM: Executing red-teaming simulator tests...",
      "SUCCESS: Zero compliance violations reported."
    ]
  },
  {
    id: "process-automation",
    category: "AI SCALING",
    title: "Intelligent Process Automation & Scaling",
    image: "/images/thumb_ai_automation.png",
    description: "Scaling machine learning systems from pilot projects to robust, fault-tolerant enterprise pipelines. We implement serverless inference, auto-recovery, and low-latency deployments.",
    detailedExplanation: "Moving from pilot notebooks to production pipelines requires scalable MLOps infrastructure. We construct self-healing containerized deployment topologies (using Kubernetes and Triton Inference Server) that optimize GPU/CPU allocation and reduce operational overhead. By automating data engineering loops, model registries, and live performance monitoring, we ensure your AI workflows deliver continuous, low-latency utility at scale.",
    capabilities: [
      "MLOps Pipeline Automation",
      "Elastic Scaling & GPU Optimization",
      "Failure Detection & Self-Healing",
      "Real-Time Inference Monitoring"
    ],
    metrics: [
      { label: "Scale", value: "10k+ requests/sec" },
      { label: "Deployments", value: "Kubernetes / Triton" },
      { label: "Uptime SLA", value: "99.99%" }
    ],
    logs: [
      "SYSTEM: MLOps scheduler pinged...",
      "SYSTEM: GPU cluster utilization at 68.4%.",
      "SYSTEM: Triton server loaded with model checkpoints.",
      "HEALTH: Nodes healthy, auto-scaler active."
    ]
  }
];

const fdeTopics = [
  {
    id: "fde-jumpstart",
    category: "ENABLEMENT",
    title: "Jumpstart Enablement",
    image: "/images/thumb_ai_advisory.png",
    description: "Accelerate your project timelines by onboarding your team with best-practice templates, key architecture frameworks, and developer enablement modules.",
    detailedExplanation: "Our Jumpstart offerings are designed to fast-track your engineering initiatives. We align your team with the latest platforms, establish secure workspaces, and implement pre-built reference architectures. By skipping the initial trial-and-error phase, you achieve faster time-to-value while establishing a rock-solid foundation for future growth.",
    capabilities: [
      "Workspace Onboarding",
      "Best-Practice Audits",
      "Reference Architecture Setup",
      "Developer Enablement Sessions"
    ],
    metrics: [
      { label: "Time-to-Value", value: "3x Faster" },
      { label: "Onboarding Time", value: "Under 5 Days" },
      { label: "Adoption Rate", value: "High Parity" }
    ],
    logs: [
      "FDE: Workspace bootstrap initialized...",
      "FDE: Checking resource groups and VPC configurations.",
      "FDE: Provisioning landing zone templates... Completed.",
      "READY: Team workspace and onboarding sandbox online."
    ]
  },
  {
    id: "fde-migration",
    category: "MIGRATION",
    title: "Migration Assurance",
    image: "/images/thumb_quantum_opt.png",
    description: "Apply structured, proven migration paths and risk mitigation strategies to seamlessly transition legacy database and AI workloads to modern environments.",
    detailedExplanation: "Transitioning legacy pipelines and warehouses can introduce operational disruption and data loss risk. Our Migration Assurance program provides structured frameworks, automated translation tools, and side-by-side verification to move your spark, SQL, or Hadoop jobs to modern clouds and lakehouses without missing a beat.",
    capabilities: [
      "Legacy Code Translation",
      "Parallel Workload Validation",
      "Data Sync & Integrity Checks",
      "Zero-Downtime Cutover Plans"
    ],
    metrics: [
      { label: "Success Rate", value: "99.9%" },
      { label: "Data Integrity", value: "100% Verified" },
      { label: "Execution Speed", value: "2.5x Speedup" }
    ],
    logs: [
      "FDE: Parsing legacy SQL scripts...",
      "FDE: Generating optimized Spark equivalents.",
      "FDE: Verification loop: legacy vs target dataset... 0 mismatch.",
      "READY: Workload migration complete."
    ]
  },
  {
    id: "fde-lakehouse",
    category: "INFRASTRUCTURE",
    title: "Lakehouse Build-out",
    image: "/images/thumb_quantum_simulation.png",
    description: "Establish a unified environment for analytics, data science, and machine learning, laying a solid foundation for your modern enterprise data strategy.",
    detailedExplanation: "Siloed data warehouses and data lakes prevent effective collaboration. We build unified, highly scalable lakehouse environments that combine the reliability of data warehouses with the flexibility of data lakes. Our implementations integrate Delta Lake/Iceberg, Unity Catalog for data governance, and automated ingestion pipelines for real-time analytics.",
    capabilities: [
      "Delta Lake & Iceberg Setup",
      "Unified Governance Catalog",
      "Automated ETL/ELT Pipelines",
      "Security & Access Controls"
    ],
    metrics: [
      { label: "Storage Efficiency", value: "Up to 50% increase" },
      { label: "Query Speedup", value: "5x - 10x Faster" },
      { label: "Access Control", value: "Role-Based" }
    ],
    logs: [
      "FDE: Designing data lakehouse structures...",
      "FDE: Setting up fine-grained catalog access control.",
      "FDE: Streaming ingestion pipeline... Active.",
      "READY: Data lakehouse environments configured."
    ]
  },
  {
    id: "fde-llms",
    category: "GENERATIVE AI",
    title: "Large Language Models (LLMs)",
    image: "/images/thumb_ai_llm.png",
    description: "Deploy specialized generative workflows, semantic search indexes, and custom knowledge-base Q&A agents tuned for your specific business domain.",
    detailedExplanation: "Unlock the power of your enterprise knowledge base. We build custom RAG (Retrieval-Augmented Generation) systems, orchestrate multi-agent autonomous loops, and fine-tune models to execute specialized domain tasks. All systems are equipped with MLOps guardrails to ensure deterministic, safe, and explainable responses.",
    capabilities: [
      "Vector Database Optimization",
      "Custom RAG Pipelines",
      "Guardrails & Safety Triggers",
      "Model Fine-Tuning & Evaluation"
    ],
    metrics: [
      { label: "Answer Accuracy", value: "97.4%" },
      { label: "Guardrail Parity", value: "Zero Violations" },
      { label: "Latency", value: "<1.0s TTFT" }
    ],
    logs: [
      "FDE: Pulling raw document chunks from storage...",
      "FDE: Generating vector embeddings for search indexing.",
      "FDE: Agent response validation check... Passed.",
      "READY: Q&A workflow deployed and listening."
    ]
  },
  {
    id: "fde-coe",
    category: "GOVERNANCE",
    title: "Center of Excellence",
    image: "/images/thumb_ai_governance.png",
    description: "Establish a sustainable internal Center of Excellence (CoE) using our battle-tested governance methodologies, coding standards, and deployment frameworks.",
    detailedExplanation: "Technology adoption is a cultural and structural change, not just a technical one. We help you design and stand up a Center of Excellence (CoE) that establishes corporate coding standards, automated CI/CD templates, data stewardship policies, and training paths, enabling self-service analytics across all business units.",
    capabilities: [
      "CI/CD & MLOps Standards",
      "Governance & Policy Frameworks",
      "Internal Training Playbooks",
      "Platform Self-Service Portals"
    ],
    metrics: [
      { label: "User Adoption", value: "+300% growth" },
      { label: "Compliance Level", value: "Fully Audited" },
      { label: "Template Coverage", value: "100%" }
    ],
    logs: [
      "FDE: Formulating developer template blueprints...",
      "FDE: Setting up automated code quality gates.",
      "FDE: Publishing internal training modules... Completed.",
      "READY: COE Framework active."
    ]
  },
  {
    id: "fde-custom",
    category: "CUSTOM ENGINEERING",
    title: "Custom Services",
    image: "/images/thumb_ai_automation.png",
    description: "Engage with us for a custom Statement of Work tailored to your unique enterprise challenges. Our engineers bring a track record of solving highly complex, targeted technical problems.",
    detailedExplanation: "Every enterprise has unique operational constraints and edge cases. We provide custom, full-lifecycle engineering engagements to solve specific, high-complexity problems. Whether it's custom compiler optimization, real-time edge computing, or specialized mathematical modeling, our engineers work alongside your staff to deliver a tailored solution.",
    capabilities: [
      "Full-Lifecycle Delivery",
      "High-Complexity Problem Solving",
      "Custom Integrations",
      "Edge-Case Optimization"
    ],
    metrics: [
      { label: "SLA Adherence", value: "100%" },
      { label: "Engineering Caliber", value: "Senior Elite" },
      { label: "Delivery Speed", value: "Agile Sprints" }
    ],
    logs: [
      "FDE: Deep architectural inspection running...",
      "FDE: Custom solver integration initialized.",
      "FDE: Tailoring execution loop for hardware target... Optimal.",
      "READY: Custom statement of work delivery ongoing."
    ]
  }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // easeOutExpo
    },
  },
};

const cardFadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1], // easeOutExpo
    },
  },
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 }
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 80 : -80,
    opacity: 0,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 }
    }
  })
};

export default function Home() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 800], [0, 240]);
  const backgroundOpacity = useTransform(scrollY, [0, 800], [0.8, 0.2]);
  const [selectedTopic, setSelectedTopic] = useState<any | null>(null);
  
  // FDE Slider State
  const [[page, direction], setPage] = useState([0, 0]);
  const activeFdeTab = page;
  const paginate = (newDirection: number) => {
    const nextPage = (page + newDirection + fdeTopics.length) % fdeTopics.length;
    setPage([nextPage, newDirection]);
  };

  // Quantum Slider State
  const [[quantumPage, quantumDirection], setQuantumPage] = useState([0, 0]);
  const activeQuantumTab = quantumPage;
  const paginateQuantum = (newDirection: number) => {
    const nextPage = (quantumPage + newDirection + quantumTopics.length) % quantumTopics.length;
    setQuantumPage([nextPage, newDirection]);
  };

  // AI Slider State
  const [[aiPage, aiDirection], setAiPage] = useState([0, 0]);
  const activeAiTab = aiPage;
  const paginateAi = (newDirection: number) => {
    const nextPage = (aiPage + newDirection + aiTopics.length) % aiTopics.length;
    setAiPage([nextPage, newDirection]);
  };

  return (
    <>
      <section className="relative flex min-h-[calc(100vh-96px)] items-center overflow-hidden px-6 py-24 md:px-12 lg:px-20 bg-slate-950 text-white">
        {/* Background Video Container */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-60 md:opacity-80"
            style={{
              y: backgroundY,
              opacity: backgroundOpacity,
            }}
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
          {/* Subtle gradient overlay to ensure centered readability */}
          <div className="absolute inset-0 bg-slate-950/45" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#020617_80%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl w-full flex flex-col items-center text-center">
          {/* Centered Content */}
          <motion.div
            className="max-w-4xl flex flex-col items-center text-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl font-bold tracking-tight md:text-7xl lg:text-8xl font-heading !text-white leading-tight"
              style={{ color: '#ffffff' }}
              variants={itemVariants}
            >
              Deep Tech Company
            </motion.h1>
            <motion.p
              className="mt-6 text-xl font-medium tracking-wide text-slate-300 md:text-2xl lg:text-3xl font-heading"
              variants={itemVariants}
            >
              Focused on AI &amp; Quantum
            </motion.p>
            <motion.p
              className="mt-6 text-base md:text-lg text-slate-400 font-light max-w-2xl leading-relaxed"
              variants={itemVariants}
            >
              We leverage future compute and cognitive systems to engineer high-impact AI models, advanced optimization algorithms, and quantum-inspired architectures for forward-looking enterprises.
            </motion.p>
            
            {/* Call to Actions */}
            <motion.div
              className="mt-10 flex flex-wrap justify-center gap-4"
              variants={itemVariants}
            >
              <Link
                to="/services"
                className="px-8 py-4 rounded-xl bg-white text-slate-950 font-medium hover:bg-slate-100 transition duration-300 shadow-lg shadow-white/5"
              >
                Explore Our Services
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-xl border border-white/20 text-white font-medium hover:bg-white/10 transition duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ───── Section 1: Quantum Computing ───── */}
      <section className="relative px-5 pt-20 pb-20 md:px-8 md:pt-28 md:pb-28 overflow-hidden bg-brand-cream border-b border-slate-100">
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-brand-charcoal font-serif md:text-4xl">Quantum Computing</h3>
            <p className="mt-4 text-sm text-slate-600 font-light leading-relaxed">
              Preparing forward-looking enterprises for the post-classical computing era. We engineer quantum-inspired optimizations, develop simulators, and design robust security protocols.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="mt-10 flex flex-wrap justify-center gap-2 border-b border-slate-200 pb-4">
            {quantumTopics.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  const dir = idx > quantumPage ? 1 : -1;
                  setQuantumPage([idx, dir]);
                }}
                className={`px-5 py-3 text-sm font-semibold rounded-xl transition cursor-pointer relative ${
                  activeQuantumTab === idx
                    ? "text-brand-navy text-bold"
                    : "text-slate-500 hover:text-brand-navy"
                }`}
              >
                {item.title}
                {activeQuantumTab === idx && (
                  <motion.div
                    layoutId="activeQuantumTabLine"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Active Details Block */}
          <div className="mt-8 bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-sm relative overflow-hidden group/slider-quantum">
            {/* Left Slide Arrow */}
            <button
              onClick={() => paginateQuantum(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-brand-navy shadow-sm transition-all duration-300 opacity-0 group-hover/slider-quantum:opacity-100 cursor-pointer"
              aria-label="Previous offering"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Slide Arrow */}
            <button
              onClick={() => paginateQuantum(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-brand-navy shadow-sm transition-all duration-300 opacity-0 group-hover/slider-quantum:opacity-100 cursor-pointer"
              aria-label="Next offering"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="overflow-hidden">
              <AnimatePresence mode="wait" custom={quantumDirection}>
                <motion.div
                  key={activeQuantumTab}
                  custom={quantumDirection}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="grid gap-12 md:grid-cols-12 items-start text-left"
                >
                  {/* Left Column: Image */}
                  <div className="md:col-span-5 flex flex-col gap-6">
                    <img
                      src={quantumTopics[activeQuantumTab].image}
                      alt={quantumTopics[activeQuantumTab].title}
                      className="w-full object-cover aspect-[1.6] rounded-2xl border border-slate-100 shadow-sm bg-slate-50"
                    />
                  </div>

                  {/* Right Column: Title, Category and Overview */}
                  <div className="md:col-span-7 flex flex-col gap-6">
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-brand-navy uppercase">
                        {quantumTopics[activeQuantumTab].category}
                      </span>
                      <h3 className="mt-2 text-3xl font-semibold tracking-tight text-brand-charcoal md:text-4xl font-serif">
                        {quantumTopics[activeQuantumTab].title}
                      </h3>
                    </div>

                    <div className="border-t border-brand-charcoal/10 pt-6">
                      <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-3.5">
                        Overview
                      </h4>
                      <p className="text-base leading-relaxed text-slate-700 font-light font-sans">
                        {quantumTopics[activeQuantumTab].detailedExplanation || quantumTopics[activeQuantumTab].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Slide Position Indicator Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {quantumTopics.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  const dir = idx > quantumPage ? 1 : -1;
                  setQuantumPage([idx, dir]);
                }}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  quantumPage === idx ? "w-6 bg-brand-navy" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ───── Section 2: Artificial Intelligence ───── */}
      <section className="relative px-5 pt-20 pb-20 md:px-8 md:pt-28 md:pb-28 overflow-hidden bg-brand-cream border-b border-slate-100">
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-brand-charcoal font-serif md:text-4xl">Artificial Intelligence</h3>
            <p className="mt-4 text-sm text-slate-600 font-light leading-relaxed">
              Empowering organizations with state-of-the-art predictive algorithms, natural language processing models, and robust governance strategies. We help build ethical, compliant, and highly automated intelligence pipelines.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="mt-10 flex flex-wrap justify-center gap-2 border-b border-slate-200 pb-4">
            {aiTopics.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  const dir = idx > aiPage ? 1 : -1;
                  setAiPage([idx, dir]);
                }}
                className={`px-5 py-3 text-sm font-semibold rounded-xl transition cursor-pointer relative ${
                  activeAiTab === idx
                    ? "text-brand-navy text-bold"
                    : "text-slate-500 hover:text-brand-navy"
                }`}
              >
                {item.title}
                {activeAiTab === idx && (
                  <motion.div
                    layoutId="activeAiTabLine"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Active Details Block */}
          <div className="mt-8 bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-sm relative overflow-hidden group/slider-ai">
            {/* Left Slide Arrow */}
            <button
              onClick={() => paginateAi(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-brand-navy shadow-sm transition-all duration-300 opacity-0 group-hover/slider-ai:opacity-100 cursor-pointer"
              aria-label="Previous offering"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Slide Arrow */}
            <button
              onClick={() => paginateAi(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-brand-navy shadow-sm transition-all duration-300 opacity-0 group-hover/slider-ai:opacity-100 cursor-pointer"
              aria-label="Next offering"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="overflow-hidden">
              <AnimatePresence mode="wait" custom={aiDirection}>
                <motion.div
                  key={activeAiTab}
                  custom={aiDirection}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="grid gap-12 md:grid-cols-12 items-start text-left"
                >
                  {/* Left Column: Image */}
                  <div className="md:col-span-5 flex flex-col gap-6">
                    <img
                      src={aiTopics[activeAiTab].image}
                      alt={aiTopics[activeAiTab].title}
                      className="w-full object-cover aspect-[1.6] rounded-2xl border border-slate-100 shadow-sm bg-slate-50"
                    />
                  </div>

                  {/* Right Column: Title, Category and Overview */}
                  <div className="md:col-span-7 flex flex-col gap-6">
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-brand-navy uppercase">
                        {aiTopics[activeAiTab].category}
                      </span>
                      <h3 className="mt-2 text-3xl font-semibold tracking-tight text-brand-charcoal md:text-4xl font-serif">
                        {aiTopics[activeAiTab].title}
                      </h3>
                    </div>

                    <div className="border-t border-brand-charcoal/10 pt-6">
                      <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-3.5">
                        Overview
                      </h4>
                      <p className="text-base leading-relaxed text-slate-700 font-light font-sans">
                        {aiTopics[activeAiTab].detailedExplanation || aiTopics[activeAiTab].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Slide Position Indicator Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {aiTopics.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  const dir = idx > aiPage ? 1 : -1;
                  setAiPage([idx, dir]);
                }}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  aiPage === idx ? "w-6 bg-brand-navy" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ───── Section 2.5: Forward Deployed Engineering ───── */}
      <section className="relative px-5 pt-20 pb-20 md:px-8 md:pt-24 md:pb-28 overflow-hidden bg-brand-cream border-t border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(176,186,153,0.06),transparent_50%)]" />
        
        <div className="mx-auto max-w-7xl relative z-10">
          {/* Interactive Offerings Section */}
          <div>
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-brand-charcoal font-serif md:text-4xl">Forward Deployed Engineering</h3>
              <p className="mt-4 text-sm text-slate-600 font-light leading-relaxed">
                Accelerating client success and advanced technology adoption through world-class technical expertise. We set the benchmark for implementation excellence, enabling your teams to build, optimize, and scale robust AI and data platforms. DYAU AI's Forward Deployed Engineering team is ready to guide you at every stage of your data and AI journey.
              </p>
            </div>

            {/* Tab Selector */}
            <div className="mt-10 flex flex-wrap justify-center gap-2 border-b border-slate-200 pb-4">
              {fdeTopics.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    const dir = idx > page ? 1 : -1;
                    setPage([idx, dir]);
                  }}
                  className={`px-5 py-3 text-sm font-semibold rounded-xl transition cursor-pointer relative ${
                    activeFdeTab === idx
                      ? "text-brand-navy text-bold"
                      : "text-slate-500 hover:text-brand-navy"
                  }`}
                >
                  {item.title}
                  {activeFdeTab === idx && (
                    <motion.div
                      layoutId="activeFdeTabLine"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Active Details Block (rendered exactly like the screenshot, full width) */}
            <div className="mt-8 bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-sm relative overflow-hidden group/slider">
              {/* Left Slide Arrow */}
              <button
                onClick={() => paginate(-1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-brand-navy shadow-sm transition-all duration-300 opacity-0 group-hover/slider:opacity-100 cursor-pointer"
                aria-label="Previous offering"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Right Slide Arrow */}
              <button
                onClick={() => paginate(1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-brand-navy shadow-sm transition-all duration-300 opacity-0 group-hover/slider:opacity-100 cursor-pointer"
                aria-label="Next offering"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div className="overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={activeFdeTab}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="grid gap-12 md:grid-cols-12 items-start text-left"
                  >
                    {/* Left Column: Image */}
                    <div className="md:col-span-5 flex flex-col gap-6">
                      <img
                        src={fdeTopics[activeFdeTab].image}
                        alt={fdeTopics[activeFdeTab].title}
                        className="w-full object-cover aspect-[1.6] rounded-2xl border border-slate-100 shadow-sm bg-slate-50"
                      />
                    </div>

                    {/* Right Column: Title, Category and Overview */}
                    <div className="md:col-span-7 flex flex-col gap-6">
                      <div>
                        <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-brand-navy uppercase">
                          {fdeTopics[activeFdeTab].category}
                        </span>
                        <h3 className="mt-2 text-3xl font-semibold tracking-tight text-brand-charcoal md:text-4xl font-serif">
                          {fdeTopics[activeFdeTab].title}
                        </h3>
                      </div>

                      <div className="border-t border-brand-charcoal/10 pt-6">
                        <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-3.5">
                          Overview
                        </h4>
                        <p className="text-base leading-relaxed text-slate-700 font-light font-sans">
                          {fdeTopics[activeFdeTab].detailedExplanation || fdeTopics[activeFdeTab].description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Slide Position Indicator Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {fdeTopics.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    const dir = idx > page ? 1 : -1;
                    setPage([idx, dir]);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    page === idx ? "w-6 bg-brand-navy" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>


        </div>
      </section>

      {/* ───── Section 3: Latest Insights (Blog) ───── */}
      <section className="relative px-5 py-20 md:px-8 md:py-28 overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Insights & Research"
            title="Latest Insights"
            text="Stay updated with our latest articles, insights, and research posts on advanced engineering and AI staffing."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                image: "/images/blog_scientific_discovery.png",
                category: "BLOG",
                date: "July 18, 2026",
                title: "Accelerating scientific discovery with AI-powered Empirical Research Assistance",
                desc: "Exploring how empirical research assistance accelerates complex computational model development and IT automation pipelines."
              },
              {
                image: "/images/blog_empirical_research.png",
                category: "BLOG",
                date: "June 29, 2026",
                title: "Four ways Google Research scientists have been using Empirical Research Assistance",
                desc: "A deep dive into the real-world applications of cognitive search pipelines and collaborative AI agents in modern enterprises."
              },
              {
                image: "/images/blog_alpha_evolve.png",
                category: "RESEARCH",
                date: "May 12, 2026",
                title: "AlphaEvolve: A Gemini-powered coding agent for designing advanced algorithms",
                desc: "Introducing new neural network architectures that evolve dynamically based on computational feedback loops and IT talent pools."
              }
            ].map((post, idx) => (
              <motion.div
                key={idx}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:shadow-md hover:border-brand-blue/30 text-brand-charcoal"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {/* Blog Image */}
                <div className="relative h-56 w-full overflow-hidden rounded-t-2xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-t-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                </div>

                {/* Blog Content */}
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

                  <div className="mt-6 pt-5 border-t border-brand-charcoal/10 mt-auto">
                    <Link
                      to="/blog"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-charcoal hover:underline transition duration-200"
                    >
                      Read Article <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Testimonials ───── */}
      <section className="relative scroll-mt-28 px-5 pt-12 pb-24 md:px-8 md:pt-16 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Testimonials"
            title="Trusted by Industry Leaders"
            text="Hear from the executives and engineering leaders who partner with us."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:border-slate-300 hover:shadow-md md:p-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                <svg viewBox="0 0 24 24" className="mb-4 h-8 w-8 text-slate-200" fill="currentColor">
                  <path d="M11.3 2.5c-1.7.6-3.1 1.5-4.2 2.8-1.6 1.8-2.4 4-2.4 6.5 0 1.6.4 3 1.1 4.2.7 1.2 1.6 2.1 2.7 2.8l1-1.7c-.7-.5-1.3-1.1-1.7-1.9-.4-.8-.6-1.6-.6-2.5h2.7c.5 0 .9-.2 1.2-.5.3-.3.5-.7.5-1.2V6c0-.5-.2-.9-.5-1.2-.3-.3-.7-.5-1.2-.5H7.7c.3-.7.8-1.2 1.4-1.7.6-.4 1.3-.7 2.2-.8V2.5zm8 0c-1.7.6-3.1 1.5-4.2 2.8-1.6 1.8-2.4 4-2.4 6.5 0 1.6.4 3 1.1 4.2.7 1.2 1.6 2.1 2.7 2.8l1-1.7c-.7-.5-1.3-1.1-1.7-1.9-.4-.8-.6-1.6-.6-2.5h2.7c.5 0 .9-.2 1.2-.5.3-.3.5-.7.5-1.2V6c0-.5-.2-.9-.5-1.2-.3-.3-.7-.5-1.2-.5h-2.2c.3-.7.8-1.2 1.4-1.7.6-.4 1.3-.7 2.2-.8V2.5z" />
                </svg>
                <p className="flex-1 text-base leading-relaxed text-brand-charcoal font-serif italic font-light">"{t.quote}"</p>
                <div className="mt-6 border-t border-brand-charcoal/10 pt-5">
                  <p className="text-xs text-brand-charcoal/80 font-bold uppercase tracking-wider font-sans">
                    {t.title} <span className="text-slate-400 font-normal mx-1">•</span> {t.industry}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Detail Modal overlay */}
      <AnimatePresence>
        {selectedTopic && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTopic(null)}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-md cursor-pointer"
            />

            {/* Modal content pane */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-slate-100 bg-white/95 text-slate-800 shadow-2xl p-6 md:p-8 max-h-[85vh] overflow-y-auto backdrop-blur-xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedTopic(null)}
                className="absolute right-6 top-6 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>

              <div className="flex flex-col gap-6">
                {/* Heading */}
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-brand-blue uppercase">
                    {selectedTopic.category}
                  </span>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-brand-charcoal md:text-3xl font-serif pr-10">
                    {selectedTopic.title}
                  </h3>
                </div>

                {/* Main Content */}
                <div className="grid gap-6 md:grid-cols-2 items-start">
                  {/* Left Column: Image and Capabilities */}
                  <div className="flex flex-col gap-5">
                    <img
                      src={selectedTopic.image}
                      alt={selectedTopic.title}
                      className="w-full object-cover aspect-[1.6] rounded-xl border border-slate-100 shadow-sm bg-slate-50"
                    />
                    
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                        Core Capabilities
                      </h4>
                      <ul className="space-y-2">
                        {selectedTopic.capabilities.map((cap: string, i: number) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-slate-600 font-light">
                            <span className="h-1.5 w-1.5 bg-brand-blue shrink-0 rounded-full" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Detailed Explanation & Metrics */}
                  <div className="flex flex-col gap-5">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                        Overview
                      </h4>
                      <p className="text-sm leading-relaxed text-slate-600 font-light">
                        {selectedTopic.detailedExplanation || selectedTopic.description}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

