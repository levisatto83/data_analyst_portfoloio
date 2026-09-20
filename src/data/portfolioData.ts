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
  title: "Data Analyst",
  specialization: "SQL, BigQuery, n8n & Data Pipelines",
  tagline: "Turning messy operational data into reliable pipelines, reconciled metrics, and decision-ready dashboards with 3+ years of hands-on analytics experience.",
  location: "Florianópolis, SC, Brazil",
  phone: "+48 98832-1762",
  cleanPhone: "48988321762",
  email: "levisatto@gmail.com",
  whatsappUrl: "https://wa.me/48988321762?text=Hi%20Levi,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
  languages: [
    { name: "English", level: "C2 Proficient / Native-level", badge: "C2 Native Equivalent", description: "Bilingual technical communication, architecture reviews, global team collaboration" },
    { name: "Spanish", level: "C2 Proficient", badge: "C2 Fluent", description: "Native/bilingual regional stakeholder alignment & documentation" },
    { name: "Portuguese", level: "Professional Working Proficiency", badge: "Fluent", description: "Full professional proficiency across Brazilian tech hubs (Florianópolis)" }
  ],
  stats: [
    { label: "Analytics Experience", value: "3+", highlight: "Data & Systems" },
    { label: "Primary SQL", value: "BigQuery", highlight: "Advanced Queries" },
    { label: "Workflow Automation", value: "n8n", highlight: "ETL / ELT Pipelines" },
    { label: "Reporting", value: "Tableau", highlight: "Executive KPIs" },
  ],
  summaryText: "Data Analyst and Systems Professional with over 3 years of hands-on experience in data extraction, transformation (ETL/ELT), automated pipelines, and analytics. Highly skilled in writing and optimizing complex SQL queries in BigQuery, building workflow automations with n8n, and designing actionable performance dashboards with Tableau and BI tools. Proven track record of monitoring pipeline health, ensuring strict data quality and reconciliation, and leveraging AI tools such as ChatGPT and Claude to accelerate analysis and development. Fluent in English with international project experience and a dedicated remote setup."
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "sql-data",
    title: "SQL & Data Analysis",
    iconName: "Server",
    description: "Advanced querying, reconciliation, quality checks, and analytical data modeling for reliable business reporting.",
    skills: [
      { name: "Advanced SQL", level: 96, experienceYears: "3+ yrs", highlight: true, tags: ["CTEs", "Window Functions", "Aggregations"] },
      { name: "Google BigQuery", level: 94, experienceYears: "3+ yrs", highlight: true, tags: ["Partitioning", "Clustering", "Cost Control"] },
      { name: "PostgreSQL & MySQL", level: 90, experienceYears: "4+ yrs", highlight: true, tags: ["Joins", "Indexes", "Relational Models"] },
      { name: "Data Reconciliation", level: 95, experienceYears: "3+ yrs", highlight: true, tags: ["Quality Checks", "Variance Analysis"] },
      { name: "Data Quality Assurance", level: 94, experienceYears: "3+ yrs", tags: ["Validation", "Completeness", "Accuracy"] },
      { name: "Analytical Data Modeling", level: 88, experienceYears: "3+ yrs", tags: ["Fact Tables", "Dimensions", "KPI Logic"] }
    ]
  },
  {
    id: "pipelines",
    title: "ETL, ELT & Automation",
    iconName: "Layout",
    description: "Automated extraction and transformation workflows that move trustworthy data from APIs and operational systems into reporting layers.",
    skills: [
      { name: "n8n Workflow Automation", level: 95, experienceYears: "3+ yrs", highlight: true, tags: ["Triggers", "Nodes", "Retries"] },
      { name: "Automated ETL / ELT Pipelines", level: 94, experienceYears: "3+ yrs", highlight: true, tags: ["Scheduling", "Transformations", "Monitoring"] },
      { name: "Python for Data (Pandas / NumPy)", level: 92, experienceYears: "3+ yrs", highlight: true, tags: ["Cleaning", "Feature Prep", "Batch Jobs"] },
      { name: "REST API Integrations", level: 90, experienceYears: "3+ yrs", tags: ["Pagination", "Auth", "Rate Limits"] },
      { name: "Playwright Data Extraction", level: 84, experienceYears: "2+ yrs", tags: ["Browser Automation", "Structured Capture"] }
    ]
  },
  {
    id: "visualization",
    title: "Visualization & Reporting",
    iconName: "Database",
    description: "Clear dashboards and reporting feeds that translate operational performance into metrics stakeholders can act on.",
    skills: [
      { name: "Tableau", level: 90, experienceYears: "3+ yrs", highlight: true, tags: ["Dashboards", "Filters", "Calculated Fields"] },
      { name: "Sales Performance Dashboards", level: 92, experienceYears: "3+ yrs", highlight: true, tags: ["Pipeline Metrics", "Conversion", "Targets"] },
      { name: "Operational KPI Reporting", level: 94, experienceYears: "3+ yrs", highlight: true, tags: ["Executive Metrics", "Trend Analysis"] },
      { name: "Automated Reporting Feeds", level: 90, experienceYears: "3+ yrs", tags: ["Refreshes", "Distribution", "Alerts"] },
      { name: "Data Storytelling", level: 86, experienceYears: "3+ yrs", tags: ["Context", "Prioritization", "Recommendations"] }
    ]
  },
  {
    id: "cloud-ai",
    title: "Cloud, AI & Data Governance",
    iconName: "ShieldCheck",
    description: "Cloud-based analytics foundations, versioned workflows, AI-assisted analysis, and disciplined handling of governed data.",
    skills: [
      { name: "Google Cloud Platform", level: 88, experienceYears: "3+ yrs", highlight: true, tags: ["BigQuery", "Cloud Storage", "Monitoring"] },
      { name: "AWS Lambda / SQS / SNS", level: 80, experienceYears: "2+ yrs", tags: ["Event Automation", "Queues", "Notifications"] },
      { name: "AI-Assisted Analytics", level: 93, experienceYears: "2+ yrs", highlight: true, tags: ["ChatGPT", "Claude", "OpenAI API"] },
      { name: "Prompt Engineering", level: 90, experienceYears: "2+ yrs", tags: ["Structured Outputs", "Evaluation", "Automation"] },
      { name: "Git / GitHub & Linux", level: 92, experienceYears: "4+ yrs", tags: ["Version Control", "Code Review", "CLI"] },
      { name: "Data Governance", level: 84, experienceYears: "3+ yrs", tags: ["Access Controls", "Documentation", "Traceability"] }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "npu-gestao",
    role: "Data & Backend Analyst",
    company: "NPU Gestão e Tecnologia",
    location: "Florianópolis, Brazil",
    period: "August 2023 – September 2025",
    startDate: "2023-08",
    endDate: "2025-09",
    type: "Full-time",
    summary: "Built reliable extraction, transformation, reconciliation, and reporting workflows for structured and unstructured business data.",
    achievements: [
      "Authored and optimized high-performance SQL queries and data pipelines on Google Cloud Platform (GCP) to process structured and unstructured datasets.",
      "Designed and executed automated ETL workflows using n8n and Python, integrating external service APIs and reducing manual data processing overhead.",
      "Built end-to-end monitoring routines and data reconciliation checks to identify pipeline anomalies, ensuring 99%+ data accuracy for business reporting.",
      "Leveraged ChatGPT, Claude, and the OpenAI API to automate log parsing, sentiment analysis, and text classification workflows."
    ],
    techStack: ["SQL", "BigQuery", "GCP", "n8n", "Python", "Pandas", "NumPy", "REST APIs", "Data Reconciliation", "AI Tools"],
    metrics: [
      { label: "Pipeline Accuracy", value: "99%+" },
      { label: "Primary Platform", value: "GCP / BigQuery" },
      { label: "Automation", value: "n8n + Python" }
    ]
  },
  {
    id: "ja-holding",
    role: "Systems & Data Analyst",
    company: "J&A Holding",
    location: "Florianópolis, Brazil",
    period: "March 2022 – July 2023",
    startDate: "2022-03",
    endDate: "2023-07",
    type: "Full-time",
    summary: "Maintained data health across automated extraction processes, reporting feeds, and relational repositories used by internal stakeholders.",
    achievements: [
      "Modeled relational databases and created automated extraction scripts using Playwright and Python to collect and ingest data into central repositories.",
      "Developed automated reporting feeds, data validation routines, and system architecture documentation to maintain data health across 30+ automated processes.",
      "Utilized Git and GitHub for strict version control, code reviews, and collaborative pipeline deployments."
    ],
    techStack: ["SQL", "Python", "Playwright", "PostgreSQL", "ETL", "Data Validation", "Git", "GitHub", "Reporting Feeds"],
    metrics: [
      { label: "Automated Processes", value: "30+" },
      { label: "Focus", value: "Data Health" },
      { label: "Workflow", value: "Extract → Validate" }
    ]
  },
  {
    id: "transportta",
    role: "Data & Web Developer",
    company: "Transportta",
    location: "Remote",
    period: "October 2019 – February 2022",
    startDate: "2019-10",
    endDate: "2022-02",
    type: "Remote",
    summary: "Delivered logistics analytics, data transformations, geospatial routing metrics, and KPI reporting for operational decision-making.",
    achievements: [
      "Led technical operations for logistics analytics, developing custom data pipelines and geospatial routing metrics.",
      "Created automated data transformation scripts using Python (Pandas/NumPy) and SQL, delivering operational insights and KPI reports to management."
    ],
    techStack: ["Python", "Pandas", "NumPy", "SQL", "PostgreSQL", "Here API", "Data Pipelines", "KPI Reporting"],
    metrics: [
      { label: "Domain", value: "Logistics Analytics" },
      { label: "Outputs", value: "KPI Reports" },
      { label: "Automation", value: "Python + SQL" }
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
    description: "Advanced post-graduate specialization focused on statistical modeling, Natural Language Processing pipelines, text classification, and large-scale data analysis.",
    tags: ["Natural Language Processing", "Data Analysis", "Text Classification", "Predictive Modeling", "Machine Learning"]
  },
  {
    id: "systems-analysis",
    degree: "Systems Analysis and Development",
    level: "Associate / Bachelor's Equivalent Degree",
    institution: "Cruzeiro do Sul University",
    location: "Brazil",
    completedDate: "Completed: 12/2024",
    description: "Systems-focused degree covering relational databases, data structures, software analysis, systems design, and applied technology project delivery.",
    tags: ["Relational Databases", "Systems Analysis", "Data Structures", "SQL Foundations", "Project Delivery"]
  }
];

export const ARCHITECTURE_SHOWCASE: ArchitectureHighlight[] = [
  {
    id: "analytics-engine",
    title: "BigQuery Reporting & Reconciliation Pipeline",
    category: "SQL & Data Quality",
    description: "Built analytical queries and reconciliation routines that transform source data into trusted reporting tables for financial and operational analysis.",
    impact: "Improved reporting confidence with automated variance checks and 99%+ data accuracy across business outputs.",
    techStack: ["SQL", "BigQuery", "GCP", "Data Reconciliation", "Data Quality"],
    metrics: "99%+ Accuracy | Automated Checks"
  },
  {
    id: "dashboard-platform",
    title: "Automated Tableau KPI Reporting",
    category: "Visualization & Performance",
    description: "Designed reporting feeds and performance dashboards that surface sales, operational, and executive metrics in a clear decision-making format.",
    impact: "Reduced manual reporting effort while giving stakeholders a consistent view of targets, trends, and exceptions.",
    techStack: ["Tableau", "BI Dashboards", "KPI Design", "Reporting Feeds", "SQL"],
    metrics: "Executive KPIs | Actionable Trends"
  },
  {
    id: "n8n-automation",
    title: "n8n API Ingestion & AI Enrichment",
    category: "Automation & AI-assisted Analysis",
    description: "Connected external APIs, Python transformations, and AI-assisted text workflows through automated n8n pipelines with validation and monitoring steps.",
    impact: "Reduced repetitive data processing and accelerated log parsing, sentiment analysis, and text classification tasks.",
    techStack: ["n8n", "Python", "REST APIs", "ChatGPT", "Claude", "OpenAI API"],
    metrics: "Automated Workflows | AI Enrichment"
  }
];
