export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  type: 'Full-time' | 'Remote' | 'Hybrid';
  summary: string;
  achievements: string[];
  techStack: string[];
  metrics?: { label: string; value: string }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  level: string;
  institution: string;
  location: string;
  completedDate: string;
  description: string;
  tags: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: number; // 1-100
    experienceYears: string;
    highlight?: boolean;
    tags: string[];
  }[];
}

export interface ArchitectureHighlight {
  id: string;
  title: string;
  category: string;
  description: string;
  impact: string;
  techStack: string[];
  metrics: string;
}

export const PERSONAL_INFO = {
  name: "Levi Satto Siedschlag",
  shortName: "Levi Satto",
  title: "Senior Full-Stack Software Analyst",
  specialization: "Python (FastAPI, Django) & ReactJS (TypeScript) Specialist",
  tagline: "Architecting resilient microservices, high-throughput data access layers, and responsive data visualization systems with 6+ years of production experience.",
  location: "Ciudad del Este, Paraguay",
  phone: "+595 971-759369",
  cleanPhone: "595971759369",
  email: "levisatto@gmail.com",
  whatsappUrl: "https://wa.me/595971759369?text=Hi%20Levi,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
  languages: [
    { name: "English", level: "C2 Proficient / Native-level", badge: "C2 Native Equivalent", description: "Bilingual technical communication, architecture reviews, global team collaboration" },
    { name: "Spanish", level: "C2 Proficient", badge: "C2 Fluent", description: "Native/bilingual regional stakeholder alignment & documentation" },
    { name: "Portuguese", level: "Professional Working Proficiency", badge: "Fluent", description: "Full professional proficiency across Brazilian tech hubs (Florianópolis)" }
  ],
  stats: [
    { label: "Years Experience", value: "6+", highlight: "Enterprise & Scale" },
    { label: "Core Backend", value: "Python", highlight: "FastAPI, Django, Flask" },
    { label: "Core Frontend", value: "ReactJS", highlight: "TypeScript" },
    { label: "Database Mastery", value: "PostgreSQL", highlight: "ORM" },
  ],
  summaryText: "Full-Stack Software Analyst with 6+ years of experience architecting, testing, and shipping end-to-end web applications and complex service-oriented server logic. Expert in Python (FastAPI, Django, Flask) and modern JavaScript/TypeScript utilizing ReactJS for scalable, interactive interfaces and data visualization dashboards. Strong background in relational database architecture (PostgreSQL), high-volume data-access models, and financial/operational reporting systems. Experienced in Agile environments, refactoring legacy software for performance and maintainability, and collaborating with cross-functional product and data engineering teams."
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend Engineering",
    iconName: "Server",
    description: "Robust service-oriented architectures, RESTful microservices, and asynchronous business pipelines built for fault tolerance and sub-second latencies.",
    skills: [
      { name: "Python", level: 98, experienceYears: "5+ yrs", highlight: true, tags: ["AsyncIO", "Typing", "Architecture"] },
      { name: "FastAPI", level: 96, experienceYears: "4+ yrs", highlight: true, tags: ["Pydantic", "OpenAPI", "High-Throughput"] },
      { name: "Django & DRF", level: 88, experienceYears: "4+ yrs", highlight: true, tags: ["Enterprise", "ORM", "Auth"] },
      { name: "Flask", level: 70, experienceYears: "2+ yrs", tags: ["Microservices", "Lightweight APIs"] },
      { name: "Service-Oriented Architecture (SOA)", level: 94, experienceYears: "2+ yrs", highlight: true, tags: ["Microservices", "Event-Driven"] },
      { name: "RESTful API Design", level: 88, experienceYears: "4+ yrs", highlight: true, tags: ["Standards", "Versioning", "Security"] },
      { name: "Complex Business Logic", level: 95, experienceYears: "6+ yrs", tags: ["Domain-Driven", "Data Processing"] }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    iconName: "Layout",
    description: "Modern, responsive, dynamic interfaces and high-density financial/operational analytical dashboards optimized for performance and accessibility.",
    skills: [
      { name: "ReactJS", level: 80, experienceYears: "4+ yrs", highlight: true, tags: ["Hooks", "Custom Architecture", "Performance"] },
      { name: "TypeScript", level: 70, experienceYears: "4+ yrs", highlight: true, tags: ["Strict Typing", "Interfaces", "Generics"] },
      { name: "Modern JavaScript (ES6+)", level: 75, experienceYears: "4+ yrs", highlight: true, tags: ["Async/Await", "Event Loop"] },
      { name: "Data Visualization Components", level: 80, experienceYears: "3+ yrs", highlight: true, tags: ["Analytics Dashboards", "Charts", "Real-Time"] },
      { name: "HTML5 / Modern CSS3 / Tailwind", level: 90, experienceYears: "5+ yrs", tags: ["Responsive UI", "CSS Modules", "Tailwind"] }
    ]
  },
  {
    id: "data",
    title: "Data Access & Storage",
    iconName: "Database",
    description: "Architecting high-scale relational database schemas, complex SQL query execution plans, indexing strategies, and reliable transactional integrity.",
    skills: [
      { name: "PostgreSQL (Heavy Relational)", level: 90, experienceYears: "5+ yrs", highlight: true, tags: ["Indexing", "EXPLAIN ANALYZE", "Partitioning"] },
      { name: "SQLAlchemy & ORM Layering", level: 94, experienceYears: "4+ yrs", highlight: true, tags: ["Session Management", "Query Compilation"] },
      { name: "Query Optimization", level: 85, experienceYears: "3+ yrs", highlight: true, tags: ["Execution Plans", "Composite Indexes"] },
      { name: "Advanced Data-Access Models", level: 86, experienceYears: "5+ yrs", tags: ["Repository Pattern", "CQRS", "Unit of Work"] },
      { name: "MySQL & Relational Storage", level: 90, experienceYears: "5+ yrs", tags: ["ACID Compliance", "Schema Migrations"] },
      { name: "Analytical & Financial Schemas", level: 88, experienceYears: "3+ yrs", highlight: true, tags: ["Aggregations", "Reporting Pipelines"] }
    ]
  },
  {
    id: "devops-quality",
    title: "Quality, Agile & DevOps",
    iconName: "ShieldCheck",
    description: "Disciplined automated testing, CI/CD safety nets, containerized deployment workflows, and rigorous Agile engineering practices.",
    skills: [
      { name: "Automated Testing (Pytest, Vitest)", level: 80, experienceYears: "3+ yrs", highlight: true, tags: ["TDD", "Integration Tests", "Mocking"] },
      { name: "Continuous Refactoring", level: 80, experienceYears: "3+ yrs", highlight: true, tags: ["Clean Code", "Design Patterns", "Maintainability"] },
      { name: "Docker & Containerization", level: 88, experienceYears: "4+ yrs", tags: ["Docker Compose", "Multi-stage Builds"] },
      { name: "GCP & AWS Cloud Basics", level: 86, experienceYears: "2+ yrs", tags: ["Cloud Storage", "Deployments", "Serverless"] },
      { name: "Git & GitHub CI Workflows", level: 95, experienceYears: "6+ yrs", tags: ["Branching", "Code Review", "Workflows"] },
      { name: "Agile / Scrum & Jira", level: 95, experienceYears: "6+ yrs", tags: ["Sprint Planning", "Backlog Refinement", "Retros"] }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "npu-gestao",
    role: "Senior Full-Stack Developer & Data Software Analyst",
    company: "NPU Gestão e Tecnologia",
    location: "Florianópolis, Brazil",
    period: "August 2023 – September 2025",
    startDate: "2023-08",
    endDate: "2025-09",
    type: "Full-time",
    summary: "Architected resilient full-stack analytics platforms and high-throughput Python REST services powering complex financial and operational reporting systems.",
    achievements: [
      "Architected and delivered full-stack web applications and complex reporting solutions using ReactJS for interactive frontend user interfaces and FastAPI/Django for resilient backend logic.",
      "Engineered high-performance RESTful microservices and service-oriented server logic to parse, process, and serve complex analytics and financial reports with minimal latency.",
      "Designed and optimized relational database schemas on PostgreSQL, implementing advanced data-access models and query tuning to ensure low latency and continuous data consistency.",
      "Partnered closely with product managers and data engineering teams to safely extract, parse, and serve high-value operational and analytical datasets.",
      "Continuously refactored core backend and frontend codebases in an Agile environment to improve system maintainability, execution speed, and test coverage using Pytest and Vitest."
    ],
    techStack: ["Python", "FastAPI", "Django", "ReactJS", "TypeScript", "PostgreSQL", "SQLAlchemy", "Pytest", "Vitest", "Docker", "Agile / Scrum"],
    metrics: [
      { label: "Core Tech", value: "FastAPI + React" },
      { label: "Data Scale", value: "High-Volume PostgreSQL" },
      { label: "Quality Standard", value: "Pytest & Vitest CI" }
    ]
  },
  {
    id: "ja-holding",
    role: "Systems Analyst & Backend Developer",
    company: "J&A Holding",
    location: "Florianópolis, Brazil",
    period: "March 2022 – July 2023",
    startDate: "2022-03",
    endDate: "2023-07",
    type: "Full-time",
    summary: "Engineered service-oriented backend applications, automated financial extraction pipelines, and compliance-driven database infrastructures.",
    achievements: [
      "Designed, built, and maintained service-oriented backend applications using Python (Django, FastAPI, Flask) and automated data extraction pipelines serving internal financial stakeholders.",
      "Developed interactive web components and interface integrations for web portals using JavaScript and ReactJS.",
      "Executed heavy relational database engineering on PostgreSQL, optimizing complex SQL queries, indexing strategies, and data protection controls compliant with LGPD/GDPR.",
      "Maintained technical architecture documentation and collaborated with cross-functional engineering teams to ensure fault-tolerant data distribution."
    ],
    techStack: ["Python", "Django", "FastAPI", "Flask", "ReactJS", "JavaScript", "PostgreSQL", "Query Optimization", "LGPD/GDPR", "ETL Pipelines"],
    metrics: [
      { label: "Frameworks", value: "Django / FastAPI / Flask" },
      { label: "Data Integrity", value: "LGPD/GDPR Regulated" },
      { label: "Database Layer", value: "Advanced PostgreSQL" }
    ]
  },
  {
    id: "transportta",
    role: "Full-Stack & Data Developer",
    company: "Transportta",
    location: "Remote",
    period: "October 2019 – February 2022",
    startDate: "2019-10",
    endDate: "2022-02",
    type: "Remote",
    summary: "Built end-to-end logistics web features, geospatial routing algorithms, and automated SQL transformations supporting critical fleet operations.",
    achievements: [
      "Built end-to-end web features, reporting dashboards, and geospatial routing algorithms integrating third-party APIs (Here API) for web applications.",
      "Developed data transformation routines and advanced SQL queries on PostgreSQL to support logistics analytics and business reporting needs.",
      "Participated actively in Agile sprints, utilizing Jira for task management, bug tracking, continuous refactoring, and code reviews."
    ],
    techStack: ["Python", "ReactJS", "PostgreSQL", "Here API (Geospatial)", "SQL Transformations", "Logistics Analytics", "Jira", "Agile"],
    metrics: [
      { label: "API Integration", value: "Here API Geospatial" },
      { label: "Domain", value: "Logistics Analytics" },
      { label: "Methodology", value: "Agile Sprints & Jira" }
    ]
  }
];

export const EDUCATIONS: EducationItem[] = [
  {
    id: "mba-nlp",
    degree: "MBA in Data Analysis and Natural Language Processing (NLP)",
    level: "Post-graduate Degree",
    institution: "Anhanguera University",
    location: "Florianópolis, SC, Brazil",
    completedDate: "Completed: 01/2026",
    description: "Advanced post-graduate specialization focusing on statistical modeling, Natural Language Processing pipelines, automated sentiment/text classification, large-scale data analytics, and predictive computational models.",
    tags: ["Natural Language Processing", "Data Analysis", "Predictive Modeling", "Big Data", "Machine Learning"]
  },
  {
    id: "systems-analysis",
    degree: "Systems Analysis and Development",
    level: "Associate / Bachelor's Equivalent Degree",
    institution: "Cruzeiro do Sul University",
    location: "Brazil",
    completedDate: "Completed: 12/2024",
    description: "Comprehensive software engineering curriculum covering Object-Oriented Analysis, Relational Database Engineering, Distributed Systems, Software Design Patterns, and Agile Project Management.",
    tags: ["Software Architecture", "Relational Databases", "Systems Design", "Algorithms", "Agile Methodologies"]
  }
];

export const ARCHITECTURE_SHOWCASE: ArchitectureHighlight[] = [
  {
    id: "analytics-engine",
    title: "High-Throughput Analytics & Financial Reporting Service",
    category: "Backend & Data Pipeline",
    description: "Engineered asynchronous FastAPI microservices that ingest, normalize, and aggregate multi-tenant financial datasets into PostgreSQL analytical schemas with sub-50ms response times.",
    impact: "Reduced reporting query overhead by over 60% through custom composite indexing and SQLAlchemy session optimization.",
    techStack: ["FastAPI", "Python AsyncIO", "PostgreSQL", "SQLAlchemy", "Pytest"],
    metrics: "<50ms API Latency | 100% Type-Safe"
  },
  {
    id: "dashboard-platform",
    title: "Interactive ReactJS & TypeScript Operational Dashboard",
    category: "Frontend & Data Visualization",
    description: "Designed responsive, high-density analytics interfaces with custom interactive chart widgets, real-time data filtering, and modular component architecture.",
    impact: "Enabled non-technical stakeholders to analyze operational KPIs and export custom audit logs seamlessly.",
    techStack: ["ReactJS", "TypeScript", "Tailwind CSS", "Data Visualization", "Vitest"],
    metrics: "Modular Design | Zero-Lag Filtering"
  },
  {
    id: "geospatial-engine",
    title: "Geospatial Routing & Logistics Transformation Pipeline",
    category: "Data Processing & API Integration",
    description: "Integrated Here API telemetry and geospatial route calculation algorithms into automated PostgreSQL data transformation routines for real-time fleet analytics.",
    impact: "Streamlined logistics dispatch schedules and dynamic ETA accuracy across regional supply routes.",
    techStack: ["Python", "PostgreSQL", "Here API", "Geospatial Algorithms", "Agile/Jira"],
    metrics: "Real-time Telemetry | Optimized Routes"
  }
];
