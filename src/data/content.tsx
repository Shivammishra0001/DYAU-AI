import { AnimatePresence, motion } from "framer-motion";

/* ─────────── Types ─────────── */

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
  features: string[];
}

export interface WhyUsItem {
  title: string;
  desc: string;
  icon: string;
}

export interface IndustryItem {
  name: string;
  icon: string;
  desc: string;
  img: string;
  highlights: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface TechCategory {
  category: string;
  items: string[];
}

export interface CaseStudy {
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  results: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

/* ─────────── Data ─────────── */

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Why Us", href: "/why-us" },
];

export const stats: [string, string][] = [
  ["200+", "Projects Delivered"],
  ["50+", "Enterprise Clients"],
  ["12+", "Industries Served"],
  ["98%", "Client Retention"],
];

export const services: ServiceItem[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V11h3a3 3 0 0 1 3 3v1.5a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5V14H8v1.5A1.5 1.5 0 0 1 6.5 17h-1A1.5 1.5 0 0 1 4 15.5V14a3 3 0 0 1 3-3h3V9.5A4 4 0 0 1 12 2Z" />
        <path d="M7 21h10M9 18v3M15 18v3" />
      </svg>
    ),
    title: "AI Consulting",
    desc: "Strategic AI advisory that transforms your business operations with intelligent automation and data-driven insights.",
    features: ["AI Strategy & Roadmaps", "AI Governance & Ethics", "Generative AI Solutions", "Predictive Analytics"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Staffing Solutions",
    desc: "Access vetted, elite tech talent — from dedicated teams to contract and permanent hires for any scale.",
    features: ["Dedicated Development Teams", "Contract & Permanent Hiring", "Staff Augmentation", "Technical Screening"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8l3 3-3 3M12 14h4" />
      </svg>
    ),
    title: "Product Development",
    desc: "End-to-end custom software, SaaS, and enterprise application development built for scale and performance.",
    features: ["Custom Software Development", "SaaS Development", "Enterprise Applications", "MVP & Prototyping"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
      </svg>
    ),
    title: "Cloud & DevOps",
    desc: "Architect, migrate, and optimize your cloud infrastructure with CI/CD pipelines and infrastructure as code.",
    features: ["Cloud Architecture & Migration", "CI/CD Pipeline Setup", "Kubernetes & Containers", "Infrastructure as Code"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    title: "Data Engineering",
    desc: "Build robust data pipelines, warehouses, and real-time analytics platforms that power intelligent decisions.",
    features: ["Data Pipeline Architecture", "Data Warehousing", "Real-Time Analytics", "ETL/ELT Solutions"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8V4H8" />
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M2 12h5l3-3 4 6 3-3h5" />
      </svg>
    ),
    title: "AI Automation",
    desc: "Automate complex workflows with intelligent process automation, RPA, and AI-powered decision engines.",
    features: ["Intelligent Process Automation", "Robotic Process Automation", "Workflow Optimization", "AI Decision Engines", "AI Fullstack Development"],
  },
];

export const whyUs: WhyUsItem[] = [
  { title: "Domain Expertise", desc: "Deep specialization across AI, cloud, data, and enterprise software with 10+ years of collective experience.", icon: "🎯" },
  { title: "Proven Methodology", desc: "Agile-first approach with transparent milestones, sprint reviews, and continuous delivery that minimizes risk.", icon: "⚙️" },
  { title: "Scalable Teams", desc: "Rapidly scale from a single specialist to a full cross-functional team within days, not months.", icon: "📈" },
  { title: "End-to-End Delivery", desc: "From strategy and design through development, deployment, and ongoing support — one partner for the full lifecycle.", icon: "🔄" },
  { title: "Industry Compliance", desc: "Built-in compliance frameworks for HIPAA, SOC 2, GDPR, and industry-specific regulatory requirements.", icon: "🛡️" },
  { title: "24/7 Support", desc: "Round-the-clock monitoring, incident response, and dedicated support with guaranteed SLAs.", icon: "🌐" },
  { title: "Client-Centric Approach", desc: "We prioritize your business objectives, aligning our tech strategy to deliver maximum measurable ROI and business outcomes.", icon: "🤝" },
  { title: "Global Talent Pool", desc: "Our engineers and consultants operate globally across multiple timezones, offering seamless collaboration and delivery.", icon: "🌍" },
  { title: "Rigorous Security", desc: "State-of-the-art security practices built into all steps of the software lifecycle, from design to hosting and operations.", icon: "🔒" },
];

export const industries: IndustryItem[] = [
  {
    name: "Healthcare & Life Sciences",
    icon: "🏥",
    desc: "We build secure, HIPAA-compliant AI pipelines, predictive diagnostic software, and automated workflows to improve patient outcomes and operational efficiency.",
    img: "/images/healthcare.png",
    highlights: [
      "HIPAA-compliant data architecture and secure cloud hosting solutions.",
      "AI-assisted clinical imaging diagnostics reaching up to 96% accuracy.",
      "Automation of patient onboarding, medical billing, and administrative records.",
      "Predictive models to forecast patient admission rates and optimize staff resources."
    ]
  },
  {
    name: "Financial Services & Banking",
    icon: "🏦",
    desc: "Leverage fraud detection models, automated credit risk scoring, and real-time transaction analytics engines that run at enterprise scale.",
    img: "/images/finance.png",
    highlights: [
      "Sub-50ms fraud scoring and transaction monitoring engines.",
      "Risk calculation algorithms and predictive credit assessment models.",
      "Compliance automation matching SEC, FINRA, and global banking regulations.",
      "Custom portfolio optimization and algorithmic trading assistance toolkits."
    ]
  },
  {
    name: "Retail & E-Commerce",
    icon: "🛒",
    desc: "Deploy intelligent recommendation engines, demand forecasting models, and AI-driven inventory optimization systems that maximize sales.",
    img: "/images/retail.png",
    highlights: [
      "Holographic and personalized product recommendation systems.",
      "Time-series demand forecasting models preventing overstocks by 34%.",
      "Dynamic pricing algorithms based on competitor monitoring and user trends.",
      "Omnichannel customer service chatbots with semantic search capabilities."
    ]
  },
  {
    name: "Manufacturing & Supply Chain",
    icon: "🏭",
    desc: "Optimize factory scheduling, predictive maintenance models for equipment, and automated supply chain routing tools that prevent downtime.",
    img: "/images/manufacturing.png",
    highlights: [
      "Predictive maintenance scheduling for heavy machinery using IoT sensor data.",
      "Autonomous warehouse robot routing algorithms and inventory tracking.",
      "Computer vision defects check on assembly line.",
      "Supply chain bottleneck forecasting using predictive traffic and weather data."
    ]
  },
  {
    name: "Energy & Utilities",
    icon: "⚡",
    desc: "Analyze smart grid data, predict machinery failure, and optimize energy distribution utilizing advanced ML and optimization models.",
    img: "/images/energy.png",
    highlights: [
      "Smart grid load prediction models helping balance electricity distribution.",
      "IoT machinery failure detection for wind turbines and solar cell fields.",
      "Predictive optimization for oil & gas refinery workflow operations.",
      "Carbon footprint emission audits and compliance tracking databases."
    ]
  },
  {
    name: "Logistics & Transportation",
    icon: "🚚",
    desc: "Implement smart route optimization algorithms, real-time fleet tracking, and automated warehouse logistics solutions that reduce fuel costs.",
    img: "/images/logistics.png",
    highlights: [
      "Dynamic routing algorithms reducing fuel consumption by up to 25%.",
      "Real-time GPS fleet tracking and predictive arrival forecasting.",
      "Warehouse supply stack layout optimization for faster item retrieval.",
      "Automated custom clearance document processing using OCR and NLP."
    ]
  },
  {
    name: "Education & EdTech",
    icon: "🎓",
    desc: "Build personalized adaptive learning systems, intelligent grading assistants, and automated campus administrative workflows.",
    img: "/images/education.png",
    highlights: [
      "Adaptive learning paths tracking student progress and styling custom content.",
      "Semantic question grading systems assisting teachers in grading workloads.",
      "AI administrative assistants answering student queries on course portals.",
      "Student engagement and performance warning dashboards for teachers."
    ]
  },
  {
    name: "Government & Public Sector",
    icon: "🏛️",
    desc: "Improve public service delivery, process paperwork via secure document AI, and leverage data analytics for municipal planning.",
    img: "/images/government.png",
    highlights: [
      "Citizen help portals powered by secure AI document search and chat.",
      "Automated document scanning and archiving for city municipal records.",
      "Urban planning traffic analysis and smart city infrastructure optimization.",
      "Budget allocation auditing and anomalies detection in public records."
    ]
  }
];

export const processSteps: ProcessStep[] = [
  { step: "01", title: "Discover", desc: "Deep-dive into your business goals, challenges, and technical landscape to define the opportunity." },
  { step: "02", title: "Analyze", desc: "Assess data readiness, infrastructure maturity, and identify the highest-impact solutions." },
  { step: "03", title: "Design", desc: "Architect scalable solutions with detailed technical specifications and UX blueprints." },
  { step: "04", title: "Develop", desc: "Agile sprints with continuous integration, automated testing, and stakeholder demos." },
  { step: "05", title: "Deploy", desc: "Zero-downtime deployments with monitoring, rollback strategies, and performance validation." },
  { step: "06", title: "Scale", desc: "Continuous optimization, feature expansion, and proactive support to drive ongoing growth." },
];

export const techStack: TechCategory[] = [
  { category: "AI & Machine Learning", items: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Hugging Face", "scikit-learn"] },
  { category: "Cloud Platforms", items: ["AWS", "Google Cloud", "Azure", "DigitalOcean", "Vercel", "Cloudflare"] },
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "Flutter"] },
  { category: "Backend", items: ["Node.js", "Python", "Go", "Java", "GraphQL", "FastAPI"] },
  { category: "Data & Analytics", items: ["Snowflake", "Apache Spark", "Kafka", "PostgreSQL", "MongoDB", "Redis"] },
  { category: "DevOps & Infra", items: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins", "Datadog"] },
];

export const caseStudies: CaseStudy[] = [
  {
    industry: "Healthcare",
    title: "AI-Powered Diagnostic Platform",
    challenge: "A leading hospital network needed to reduce diagnostic wait times and improve accuracy across 200+ facilities.",
    solution: "Built a HIPAA-compliant ML pipeline processing medical imaging with 96% accuracy, integrated into their existing EHR workflow.",
    results: ["62% faster diagnostics", "96% model accuracy", "$4.2M annual savings"],
  },
  {
    industry: "Financial Services",
    title: "Real-Time Fraud Detection Engine",
    challenge: "A fintech company processing 10M+ daily transactions needed sub-100ms fraud scoring without blocking legitimate users.",
    solution: "Deployed a real-time streaming ML system on Kubernetes with adaptive model retraining, reducing false positives by 78%.",
    results: ["99.7% detection rate", "<50ms latency", "78% fewer false positives"],
  },
  {
    industry: "Retail",
    title: "Intelligent Inventory & Demand Forecasting",
    challenge: "A national retailer with 500+ stores struggled with overstock and stockouts, losing millions annually.",
    solution: "Developed a demand forecasting system using time-series ML models, integrated with their supply chain management platform.",
    results: ["34% reduced overstock", "91% forecast accuracy", "$8.7M recovered revenue"],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Dyau transformed our entire data infrastructure. Their team integrated seamlessly with ours and delivered ahead of schedule. The AI pipeline they built now processes 10x the volume at half the cost.",
    name: "Sarah Chen",
    title: "CTO",
    company: "MedVantage Health",
  },
  {
    quote: "We needed 15 senior engineers fast. Dyau staffed our team in under two weeks with talent that hit the ground running. The quality and cultural fit exceeded every expectation.",
    name: "Marcus Rivera",
    title: "VP of Engineering",
    company: "FinScale Technologies",
  },
  {
    quote: "From strategy to deployment, the Dyau team delivered a custom AI solution that automated 70% of our manual processes. Their expertise in AI governance gave our board the confidence to scale.",
    name: "Dr. Ananya Patel",
    title: "Chief Digital Officer",
    company: "GlobalRetail Corp",
  },
];

export const faqs: FaqItem[] = [
  {
    q: "What engagement models do you offer?",
    a: "We offer flexible engagement models including dedicated teams, time & material, fixed-price projects, and staff augmentation. We tailor the model to your project scope, timeline, and budget requirements.",
  },
  {
    q: "How quickly can you scale a team?",
    a: "We can onboard individual specialists within 1–2 weeks and assemble full cross-functional teams within 2–4 weeks. Our pre-vetted talent pool of 500+ engineers enables rapid deployment.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We have deep expertise across healthcare, financial services, retail, manufacturing, energy, logistics, education, and government. Each vertical has dedicated domain specialists on our team.",
  },
  {
    q: "How do you ensure data security and compliance?",
    a: "We implement SOC 2 Type II controls, HIPAA safeguards, GDPR compliance, and industry-specific frameworks from day one. All projects undergo security reviews and penetration testing.",
  },
  {
    q: "What is your typical project timeline?",
    a: "MVPs and proof-of-concepts typically take 4–8 weeks. Full enterprise solutions range from 3–9 months depending on complexity. We deliver in agile sprints with bi-weekly demos.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. We offer tiered support plans with 24/7 monitoring, incident response SLAs, proactive optimization, and ongoing feature development. Most clients engage us for long-term partnerships.",
  },
  {
    q: "Can you work with our existing tech stack?",
    a: "Absolutely. We're technology-agnostic and integrate with your existing infrastructure. Our engineers have experience across all major cloud platforms, frameworks, and enterprise systems.",
  },
];

/* ─────────── Reusable FAQ Accordion Component ─────────── */

export function FaqAccordionItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <motion.div
      className="rounded-2xl border border-slate-200 bg-white shadow-sm transition-colors duration-300 hover:border-brand-blue/30"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-base font-bold text-heading md:text-lg">{q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-brand-blue"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm leading-7 text-slate-600 md:text-base font-light">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
