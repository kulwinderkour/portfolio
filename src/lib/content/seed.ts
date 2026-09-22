import type { SiteContent } from "./types";

/**
 * The bundled seed.
 *
 * This is the site's content until Redis is configured, and the exact payload
 * the admin writes on first run ("Copy content into the database").
 * Everything here is transcribed from the résumé — no metric, client, outcome
 * or claim has been invented. Fields that were never supplied are `null`.
 */

const PORTRAIT = {
  url: "/images/kulwinder2.webp",
  alt: "Portrait of Kulwinder kour",
  width: 1200,
  height: 1359,
};

export const seed: SiteContent = {
  live: false,

  profile: {
    name: "Kulwinder kour",
    firstName: "Kulwinder",
    lastName: "kour",
    title: "Software Engineer",
    secondary: "AI/ML · Full-Stack · Systems",
    lede: "I engineer intelligent systems that turn complex problems into practical software.",
    bio: [
      "I work across software engineering and AI, with a focus on building systems that are useful, reliable and thoughtfully engineered.",
      "From backend APIs and databases to AI workflows and user-facing products, I enjoy moving between layers of the stack — and I care about the parts that are easy to skip: validation, failure paths, the behaviour of a system when the network is bad or the input is wrong.",
      "Most of my recent work sits where AI meets real constraints: retrieval that has to stay grounded, inference that has to run on-device, interfaces that have to work for someone on a feature phone.",
    ],
    availability: "Available for opportunities",
    availabilityOpen: true,
    email: "kkour8585@gmail.com",
    phone: "+91-9999789843",
    location: "India — Remote",
    image: PORTRAIT,
  },

  settings: {
    siteTitle: "Kulwinder kour",
    seoTitle: "Kulwinder kour — Software Engineer",
    seoDescription:
      "Kulwinder kour — software engineer working across AI workflows, backend systems and the modern web. Selected work, experience and contact.",
    // Set NEXT_PUBLIC_CONTACT_FORM_URL, or edit this in Admin → Site Settings.
    contactFormUrl: "",
    contactFormHeading: "Let’s talk",
    contactFormBlurb:
      "Have a project, a role, a collaboration or an idea? Tell me about it and I’ll get back to you.",
    contactHeadline: ["Let’s build", "something useful."],
    footerText: "Software Engineer · AI · Full-Stack",
    siteUrl: "https://abhishekswami.work.gd",
  },

  socials: [
    { id: "github", label: "GitHub", url: "https://github.com/kulwinderkour", handle: "kulwinderkour", sortOrder: 1, published: true },
    { id: "linkedin", label: "LinkedIn", url: "https://linkedin.com/in/kulwinderkour", handle: "kulwinderkour", sortOrder: 2, published: true },
  ],

  projects: [
    {
      id: "smart-placement-tracker",
      slug: "smart-placement-tracker",
      number: "01",
      title: "Smart Placement Tracker",
      subtitle: "AI-Powered Placement & Recruitment Platform",
      category: "EDTECH / AI",
      year: "2026",
      period: "FEB 2026 — MAY 2026",
      summary:
        "A full-stack AI-powered placement platform that helps students discover suitable opportunities, analyze and improve their resumes, prepare for interviews, automate eligible job applications, and track their complete placement journey from one dashboard.",
      technologies: ["React.js", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Redis", "scikit-learn", "Gemini 2.5 Flash", "Docker", "Google Cloud", "Scrapy", "Node.js", "Puppeteer", "Zustand"],
      highlights: [
        "Built a full-stack AI-powered placement management platform combining student dashboards, job discovery, application tracking, resume analysis, interview preparation, and administrative workflows.",
        "Implemented AI-driven resume analysis, ATS scoring, explainable job matching, skill-gap analysis, personalized recommendations, and a Gradient Boosting job-matching model using TF-IDF-based profile features.",
        "Developed a conversational auto-apply agent that understands English, Hindi, and Hinglish instructions, searches eligible jobs, generates personalized cover letters, prevents duplicate applications, and records application execution logs.",
      ],
      problem:
        "Students often manage job discovery, resume improvement, interview preparation, applications, and placement tracking across disconnected platforms. This makes it difficult to understand which opportunities actually match their skills, identify missing skills, keep applications organized, and consistently prepare for placement processes. Smart Placement Tracker was designed to bring these workflows together into one AI-powered placement workspace.",
      approach: [
        "Developed a unified placement platform where students can manage profiles, resumes, jobs, applications, interviews, learning roadmaps, and placement progress from a single dashboard.",
        "Built an AI engine that parses resumes, extracts skills and experience, calculates ATS compatibility, identifies skill gaps, and generates explainable job-match scores.",
        "Implemented an LLM-powered conversational agent capable of understanding natural-language instructions for job discovery, profile queries, resume updates, and eligible job applications.",
        "Built automated job-collection pipelines using Scrapy, scheduled collectors, and Node.js/Puppeteer scrapers to continuously collect and process external job listings.",
        "Created a visual Kanban application tracker allowing students to manage applications across Pending, Shortlisted, Approved, and Rejected stages.",
      ],
      architecture: [
        { step: "Frontend", detail: "React 19 + TypeScript + Vite + Tailwind CSS + React Router + Zustand" },
        { step: "Core API", detail: "FastAPI + Python + SQLAlchemy for authentication, jobs, applications, profiles, interviews, and placement workflows" },
        { step: "AI Engine", detail: "Gemini 2.5 Flash + scikit-learn + TF-IDF + Gradient Boosting for resume analysis, job matching, recommendations, interview generation, and conversational automation" },
        { step: "Data & Caching", detail: "PostgreSQL for persistent application data and Redis for caching, session memory, real-time events, and agent state" },
        { step: "Job Collection", detail: "Scrapy + APScheduler + Python collectors + Node.js/Puppeteer for automated external job aggregation" },
        { step: "Infrastructure", detail: "Docker Compose + Google Cloud Storage + Google Cloud SQL + Nginx with deployment, health-check, and verification workflows" },
      ],
      details:
        "Smart Placement Tracker combines student placement management with AI-powered recruitment workflows.\n\nThe platform includes student, administration, and company-oriented workflows for job management, applicant tracking, interview coordination, placement analytics, and opportunity management.\n\nIts AI engine performs resume parsing, ATS analysis, job matching, skill-gap analysis, recommendations, interview-question generation, answer evaluation, and conversational job-search automation.\n\nThe job-matching system uses TF-IDF features and a trained GradientBoostingRegressor to generate explainable 0–100 match scores based on skill overlap, role alignment, semantic similarity, and profile characteristics.\n\nThe platform also includes an AI auto-apply workflow that can search eligible opportunities, request confirmation for broad application actions, generate personalized cover letters, prevent duplicate applications using Redis-backed application memory, submit applications through the backend, and maintain execution logs.\n\nThe application is containerized with Docker and uses PostgreSQL, Redis, Google Cloud Storage, and separate backend, AI-engine, collector, scraper, and frontend services.",
      outcomes: null,
      images: {
        thumbnail: { url: "/images/vyapariq/vyapariq1.webp", alt: "Smart Placement Tracker Dashboard", width: 2936, height: 1442 },
        hero: { url: "/images/vyapariq/vyapariq1.webp", alt: "Smart Placement Tracker Dashboard", width: 2936, height: 1442 },
        architecture: null,
        gallery: [
          { url: "/images/vyapariq/vyapariq1.webp", alt: "Smart Placement Tracker Dashboard", width: 2936, height: 1442 },
          { url: "/images/vyapariq/vyapariq2.webp", alt: "AI Job Matching & Placement Analytics", width: 2940, height: 1452 },
          { url: "/images/vyapariq/vyapariq3.webp", alt: "AI Placement Agent / Application Tracking", width: 2940, height: 1448 },
        ],
      },
      links: { github: "https://github.com/kulwinderkour/Smart-Placement-Tracker", live: null },
      diagram: null,
      featured: true,
      published: true,
      sortOrder: 1,
    },
    {
      id: "sehatconnect",
      slug: "sehatconnect",
      number: "02",
      title: "SehatConnect",
      subtitle: "Privacy-Aware Rural Healthcare Access System",
      category: "AI / Healthcare",
      year: "2026",
      period: "March 2026",
      summary:
        "A low-bandwidth healthcare system reaching patients without smartphones — IVR, offline reminders and voice support alongside a full mobile client.",
      technologies: ["React Native", "Node.js", "MongoDB", "TensorFlow Lite", "WebRTC", "SQLite", "Twilio IVR"],
      highlights: [
        "Designed a low-bandwidth healthcare system with IVR, offline reminders, WebRTC, and Node.js/MongoDB.",
        "Built accessibility-first workflows for non-smartphone users through IVR and voice support.",
        "Integrated AI workflows for prescription verification, chatbot support, and hospital/pharmacy discovery.",
      ],
      problem:
        "Rural healthcare access is constrained long before software is: intermittent connectivity, feature phones, and patients who cannot rely on an app being reachable when they need it. A conventional mobile-only product excludes the people it is meant to serve.",
      approach: [
        "Treat the phone call as a first-class interface, not a fallback — IVR and voice workflows carry the full core journey.",
        "Keep state local first. Reminders and records work offline through SQLite and sync when a connection returns.",
        "Run inference on-device with TensorFlow Lite where the network cannot be trusted.",
        "Use WebRTC for consultations so sessions degrade gracefully rather than failing outright.",
      ],
      architecture: [
        { step: "Access", detail: "Twilio IVR + React Native client" },
        { step: "Local state", detail: "SQLite — offline reminders and records" },
        { step: "Consultation", detail: "WebRTC session layer" },
        { step: "Intelligence", detail: "TensorFlow Lite on-device inference" },
        { step: "Services", detail: "Node.js API, MongoDB persistence" },
      ],
      details: null,
      outcomes: null,
      images: {
        thumbnail: { url: "/images/sehatconnect/sehat1.webp", alt: "SehatConnect Home", width: 893, height: 1761 },
        hero: { url: "/images/sehatconnect/sehat1.webp", alt: "SehatConnect Home", width: 893, height: 1761 },
        architecture: null,
        gallery: [
          { url: "/images/sehatconnect/sehat1.webp", alt: "Home Screen", width: 893, height: 1761 },
          { url: "/images/sehatconnect/sehat2.webp", alt: "Consultation Details", width: 876, height: 1795 },
          { url: "/images/sehatconnect/sehat3.webp", alt: "Doctor Selection", width: 888, height: 1771 },
          { url: "/images/sehatconnect/sehat4.webp", alt: "Appointment Booking", width: 888, height: 1771 },
          { url: "/images/sehatconnect/sehat6.webp", alt: "Prescription View", width: 888, height: 1771 },
        ],
      },
      links: { github: null, live: null },
      diagram: "sehat",
      featured: true,
      published: true,
      sortOrder: 2,
    },
    {
      id: "file-intelligence",
      slug: "file-intelligence",
      number: "03",
      title: "File Intelligence",
      subtitle: "AI-Powered File Intelligence Infrastructure",
      category: "Developer Infrastructure",
      year: "2025",
      period: "December 2025",
      summary:
        "Local-first semantic search across your own files. Embeddings and vector search run on the machine, with cloud models as an option rather than a requirement.",
      technologies: ["React.js", "FastAPI", "Python", "ChromaDB", "Ollama", "TypeScript", "Zustand"],
      highlights: [
        "Developed a privacy-aware semantic search system using embeddings and ChromaDB for local-first organization.",
        "Designed a modular FastAPI backend supporting offline/local and cloud-based LLM workflows.",
        "Built a React/TypeScript interface for file exploration, semantic search, and AI-assisted understanding.",
      ],
      problem:
        "Understanding your own files usually means uploading them somewhere. That is an unacceptable trade for anything sensitive, and an unnecessary one when the hardware to run the model is already on the desk.",
      approach: [
        "Make local the default path: Ollama for inference, ChromaDB for vectors, nothing leaves the machine unless asked.",
        "Keep the backend provider-agnostic so local and cloud LLM workflows are swappable behind one FastAPI interface.",
        "Index by meaning rather than filename — embeddings drive exploration and search.",
        "Build the client in React and TypeScript with Zustand holding search and exploration state.",
      ],
      architecture: [
        { step: "Ingest", detail: "File traversal and chunking" },
        { step: "Embed", detail: "Local embedding model" },
        { step: "Store", detail: "ChromaDB vector index" },
        { step: "Serve", detail: "Modular FastAPI — local or cloud provider" },
        { step: "Explore", detail: "React + TypeScript + Zustand client" },
      ],
      details: null,
      outcomes: null,
      images: {
        thumbnail: { url: "/images/fileint/fileint1.webp", alt: "File Intelligence Dashboard", width: 2792, height: 1670 },
        hero: { url: "/images/fileint/fileint1.webp", alt: "File Intelligence Dashboard", width: 2792, height: 1670 },
        architecture: null,
        gallery: [
          { url: "/images/fileint/fileint1.webp", alt: "File Intelligence View 1", width: 2792, height: 1670 },
          { url: "/images/fileint/fileint2.webp", alt: "File Intelligence View 2", width: 2794, height: 1674 },
          { url: "/images/fileint/fileint3.webp", alt: "File Intelligence View 3", width: 2788, height: 1688 },
          { url: "/images/fileint/fileint4.webp", alt: "File Intelligence View 4", width: 2790, height: 1676 },
        ],
      },
      links: { github: null, live: null },
      diagram: "fileint",
      featured: true,
      published: true,
      sortOrder: 3,
    },
  ],

  experiences: [
    {
      id: "iit-jammu",
      company: "INDIAN INSTITUTE OF TECHNOLOGY JAMMU",
      role: "RESEARCH INTERN",
      location: "JAMMU, INDIA",
      period: "JUN 2026 — JUL 2026",
      current: false,
      points: [
        "Deployed and optimized quantized BERT models on edge devices, optimizing models for resource-constrained environments and efficient inference.",
        "Architected and benchmarked state-of-the-art LLM compression workflows incorporating QAT, PTQ, Knowledge Distillation, LoRA and QLoRA to enable high-accuracy, parameter-efficient fine-tuning (PEFT).",
        "Engineered scalable LLM deployment pipelines by applying quantization and distillation techniques, reducing model footprint while preserving core downstream performance.",
      ],
      sortOrder: 1,
      published: true,
    },
    {
      id: "dockrack-ai",
      company: "DOCKRACK AI",
      role: "FULL STACK DEVELOPER INTERN",
      location: "REMOTE",
      period: "JUL 2025 — AUG 2025",
      current: false,
      points: [
        "Designed and developed scalable backend services and REST APIs using FastAPI, handling 10K+ monthly requests.",
        "Applied effective MongoDB data modeling in microservices, achieving 99.9% uptime.",
        "Gained hands-on expertise in production-grade backend development, microservices, database design, containerization, and automated deployment workflows.",
      ],
      sortOrder: 2,
      published: true,
    },
  ],

  services: [
    {
      id: "ai-engineering",
      number: "01",
      title: "AI & ML Engineering",
      description: "Building and deploying efficient AI systems, from deep learning models and LLM workflows to optimized inference on resource-constrained devices.",
      detail:
        "I work across deep learning, model optimization, and AI deployment, with a focus on making modern ML models more efficient and practical for real-world environments.\n\nMy work includes deploying and optimizing quantized BERT models for edge devices using techniques such as Post-Training Quantization (PTQ), Quantization-Aware Training (QAT), Knowledge Distillation, LoRA, and QLoRA for parameter-efficient fine-tuning.\n\nI also work with transformer-based architectures, model compression, inference optimization, embeddings, semantic search, RAG pipelines, and LLM-powered applications.",
      capabilities: ["RAG Pipelines", "Semantic Search", "LLM Workflows", "Model Quantization", "Edge AI", "Model Deployment"],
      sortOrder: 1,
      published: true,
    },
    {
      id: "full-stack",
      number: "02",
      title: "Full-Stack Development",
      description: "Production-ready frontend, backend, APIs, databases and deployment.",
      detail:
        "End-to-end feature work — interface through to persistence and the deploy that puts it in front of people.",
      capabilities: ["React / Next.js", "TypeScript", "Databases", "Deployment"],
      sortOrder: 2,
      published: true,
    },
    {
      id: "backend-api",
      number: "03",
      title: "Backend & API Systems",
      description: "FastAPI, Node.js, REST APIs, validation, architecture and integrations.",
      detail:
        "Services designed around clear contracts — typed boundaries, validated input, and integrations that fail loudly rather than quietly.",
      capabilities: ["FastAPI", "Node.js / Express", "REST", "Pydantic"],
      sortOrder: 3,
      published: true,
    },
    {
      id: "product-systems",
      number: "04",
      title: "Intelligent Product Systems",
      description: "Applications combining software engineering, AI and real-world workflows.",
      detail:
        "Products where the intelligence has to survive contact with reality — low bandwidth, offline states, and users who are not using the happy path.",
      capabilities: ["Offline-first", "Accessibility", "Workflow design", "On-device ML"],
      sortOrder: 4,
      published: true,
    },
  ],

  skillCategories: [
    { id: "languages", title: "Languages", skills: ["Python", "TypeScript", "JavaScript", "C/C++", "SQL", "Java"], sortOrder: 1, published: true },
    { id: "backend", title: "Backend", skills: ["FastAPI", "Node.js", "Express.js", "REST APIs", "Pydantic"], sortOrder: 2, published: true },
    { id: "ai-ml", title: "AI / ML", skills: ["TensorFlow", "Scikit-learn", "Sentence Transformers", "LangGraph", "RAG"], sortOrder: 3, published: true },
    { id: "data", title: "Data", skills: ["MongoDB", "SQLite", "ChromaDB"], sortOrder: 4, published: true },
    { id: "infrastructure", title: "Infrastructure", skills: ["Docker", "Google Cloud Platform", "AWS", "Git"], sortOrder: 5, published: true },
    { id: "frontend", title: "Frontend", skills: ["React", "React Native", "TypeScript", "HTML5", "CSS3"], sortOrder: 6, published: true },
  ],

  education: [
    {
      id: "lpu",
      institution: "Lovely Professional University",
      degree: "B.Tech",
      field: "Computer Science Engineering",
      grade: "CGPA 8.54",
      period: "Aug 2024 — Present",
      description: null,
      sortOrder: 1,
      published: true,
    },
    {
      id: "rps-12",
      institution: "RPS Public School, Dharuhera, Haryana",
      degree: "Intermediate",
      field: null,
      grade: "82%",
      period: "Apr 2023 — Mar 2024",
      description: null,
      sortOrder: 2,
      published: true,
    },
    {
      id: "rps-10",
      institution: "RPS Public School, Dharuhera, Haryana",
      degree: "Matriculation",
      field: null,
      grade: "85%",
      period: "Apr 2021 — Mar 2022",
      description: null,
      sortOrder: 3,
      published: true,
    },
  ],

  patent: {
    id: "ecospark-ev",
    title: "EcoSpark EV",
    type: "Design Patent",
    description:
      "Smart dual-axis solar tracking system with automated self-cleaning and integrated EV charging.",
    applicationNumber: "202511095417",
    status: "Published",
    year: null,
    published: true,
  },
};
