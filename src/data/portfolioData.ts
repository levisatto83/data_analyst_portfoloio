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
  skills: { name: string; level: number; experienceYears: string; highlight?: boolean; tags: string[] }[];
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
  title: "Systems Analyst",
  specialization: "AI Automation, Technical Support & Systems Maintenance",
  tagline: "Solving complex systems problems, automating technical workflows, and turning difficult incidents into reliable operations.",
  location: "Ciudad del Este, Paraguay",
  phone: "+595 (971) 759369",
  cleanPhone: "595971759369",
  email: "levisatto@gmail.com",
  whatsappUrl: "https://wa.me/595971759369?text=Hi%20Levi,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
  languages: [
    { name: "English", level: "C2 Proficient", badge: "C2", description: "Technical communication, documentation, training, and support" },
    { name: "Spanish", level: "C2 Proficient", badge: "C2", description: "Customer support, user onboarding, and intercultural communication" }
  ],
  stats: [
    { label: "Technical Experience", value: "6 yrs", highlight: "Systems & Support" },
    { label: "Automation", value: "Python", highlight: "RPAs / Scripting" },
    { label: "Cloud", value: "GCP / AWS", highlight: "Production Systems" },
    { label: "AI Workflows", value: "LLMs", highlight: "OpenAI API / NLP" }
  ],
  summaryText: "Systems Analyst with 6 years of technical experience, specializing in complex troubleshooting, systems maintenance, specialized technical support, and AI-driven automation. Deep proficiency in Python, SQL (PostgreSQL/MySQL), cloud environments (GCP/AWS), and integrating Large Language Models to streamline workflows. Experienced with customer and user support, Jira, Zendesk, Hinc, and generative AI tools including ChatGPT, Claude, and the OpenAI API."
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  { id: "ai-automation", title: "AI & Automation", iconName: "Sparkles", description: "LLM-powered workflows and Python automation that reduce repetitive support work and accelerate technical investigation.", skills: [
    { name: "OpenAI API", level: 94, experienceYears: "3+ yrs", highlight: true, tags: ["GPT-4", "Embeddings", "API Integration"] },
    { name: "Prompt Engineering", level: 92, experienceYears: "3+ yrs", highlight: true, tags: ["Structured Output", "Evaluation", "Workflow Design"] },
    { name: "Python Automation", level: 95, experienceYears: "6+ yrs", highlight: true, tags: ["RPAs", "Scripting", "Task Automation"] },
    { name: "NLP & Log Parsing", level: 88, experienceYears: "3+ yrs", tags: ["Classification", "Sentiment Analysis", "Diagnostics"] }
  ] },
  { id: "troubleshooting-data", title: "Troubleshooting & Data", iconName: "Search", description: "Evidence-driven incident diagnosis, API debugging, database operations, and reliable data validation.", skills: [
    { name: "Log Analysis", level: 96, experienceYears: "6+ yrs", highlight: true, tags: ["Root Cause", "Monitoring", "Incident Response"] },
    { name: "Advanced SQL", level: 91, experienceYears: "6+ yrs", highlight: true, tags: ["T-SQL", "PostgreSQL", "MySQL"] },
    { name: "API Debugging", level: 92, experienceYears: "4+ yrs", tags: ["REST", "FastAPI", "Integrations"] },
    { name: "ETL & Data Validation", level: 86, experienceYears: "4+ yrs", tags: ["Pipelines", "Quality Checks", "Data Operations"] }
  ] },
  { id: "support-workflows", title: "Support & Workflows", iconName: "Ticket", description: "Structured technical support, ticket management, documentation, training, and clear communication with users and teams.", skills: [
    { name: "Jira Service Management", level: 94, experienceYears: "6+ yrs", highlight: true, tags: ["Tickets", "SLAs", "Incident Management"] },
    { name: "Zendesk & Hinc", level: 90, experienceYears: "4+ yrs", tags: ["Customer Support", "Queues", "Escalation"] },
    { name: "Technical Documentation", level: 94, experienceYears: "6+ yrs", highlight: true, tags: ["Knowledge Bases", "Troubleshooting Guides", "Manuals"] },
    { name: "Technical Training", level: 95, experienceYears: "9+ yrs", tags: ["Onboarding", "Instruction", "User Enablement"] }
  ] },
  { id: "systems-infrastructure", title: "Systems & Infrastructure", iconName: "Server", description: "Hands-on maintenance and support across operating systems, containers, cloud environments, and modern web applications.", skills: [
    { name: "Linux / Bash", level: 90, experienceYears: "6+ yrs", highlight: true, tags: ["Terminal", "Scripting", "Operations"] },
    { name: "GCP & AWS", level: 84, experienceYears: "4+ yrs", tags: ["Cloud Monitoring", "Services", "Deployments"] },
    { name: "FastAPI & Django", level: 86, experienceYears: "4+ yrs", highlight: true, tags: ["Python", "APIs", "Web Systems"] },
    { name: "Docker & Windows Server", level: 82, experienceYears: "4+ yrs", tags: ["Containers", "Maintenance", "Administration"] },
    { name: "JavaScript & React", level: 78, experienceYears: "3+ yrs", tags: ["Front-end Support", "Debugging", "UI Systems"] }
  ] }
];

const experience = (id: string, role: string, company: string, period: string, startDate: string, endDate: string, summary: string, achievements: string[], techStack: string[], metrics: { label: string; value: string }[]): ExperienceItem => ({ id, role, company, location: "Paraguay", period, startDate, endDate, type: "Full-time", summary, achievements, techStack, metrics });

export const EXPERIENCES: ExperienceItem[] = [
  experience("npu-gestao", "Systems Analyst / Tier 3 Support", "NPU Gestão e Tecnologia", "August 2023 – September 2025", "2023-08", "2025-09", "Advanced technical support and maintenance for web applications and APIs, combining Python troubleshooting with AI-driven automation.", ["Provided advanced technical support and maintenance for web applications and APIs, using OpenAI API and generative AI tools to automate log parsing, sentiment analysis, and incident root-cause diagnosis.", "Diagnosed and resolved complex production bugs using FastAPI, Python, and cloud monitoring tools.", "Developed Python scripts (RPAs) and AI-powered workflow automations to reduce repetitive support tasks and significantly lower resolution times.", "Authored technical documentation and AI-assisted troubleshooting guides for the internal Knowledge Base (KB)."], ["Python", "FastAPI", "OpenAI API", "LLMs", "Log Analysis", "Cloud Monitoring", "Knowledge Base"], [{ label: "Support Level", value: "Tier 3" }, { label: "Focus", value: "Production Systems" }, { label: "Automation", value: "Python + AI" }]),
  experience("ja-holding", "Systems Analyst / Tier 3 Support", "J&A Holding", "March 2022 – July 2023", "2022-03", "2023-07", "Maintained mission-critical RPAs, web crawlers, automated workflows, and the data operations behind them.", ["Monitored and maintained over 30 mission-critical RPAs, web crawlers, and automated data workflows.", "Provided specialized technical support for systems integration, data pipelines, and database operations.", "Leveraged automated scripts and advanced SQL optimizations to eliminate operational bottlenecks and improve cost efficiency.", "Developed internal applications to monitor, analyze, and control system cost efficiency."], ["Python", "SQL", "PostgreSQL", "MySQL", "RPAs", "Web Crawlers", "Data Pipelines"], [{ label: "Automated Systems", value: "30+" }, { label: "Support Level", value: "Tier 3" }, { label: "Focus", value: "Cost Efficiency" }]),
  experience("transportta", "Systems Analyst / Tier 1 Customer Support", "Transportta", "October 2019 – February 2022", "2019-10", "2022-02", "Managed user incidents and served as the technical bridge between customers and development teams for logistics systems.", ["Managed tickets and incidents directly via the Jira platform, ensuring strict SLA compliance.", "Acted as the primary technical liaison between end-users and the development team.", "Provided specialized support for web systems, routing tools, and geospatial API integrations.", "Conducted user onboarding, training sessions, and authored comprehensive system manuals."], ["Jira", "Customer Support", "Web Systems", "Routing Tools", "Geospatial APIs", "Technical Training"], [{ label: "Support Level", value: "Tier 1" }, { label: "Workflow", value: "Jira + SLA" }, { label: "Role", value: "Technical Liaison" }]),
  experience("wizard", "Coordinator / Language Instructor", "Wizard Language School", "January 2010 – December 2018", "2010-01", "2018-12", "Combined language instruction, academic coordination, progress evaluation, and faculty development.", ["Taught English and Spanish across all age groups and proficiency levels.", "Managed academic schedules, conducted progress evaluations, and led faculty training."], ["English", "Spanish", "Instruction", "Coordination", "Faculty Training"], [{ label: "Focus", value: "Training & Communication" }]),
  experience("vipal", "Polymers and Pressure Vessels Technician", "Vipal - AR", "January 2005 – December 2009", "2005-01", "2009-12", "Supported customers through technical after-sales follow-up, inspections, and product handling instruction.", ["Provided technical after-sales follow-up and inspections for rubber-based products.", "Conducted on-site product handling and usage training."], ["Technical Inspection", "After-sales Support", "Product Training"], [{ label: "Focus", value: "Technical Support" }])
];

export const EDUCATIONS: EducationItem[] = [
  { id: "mba-nlp", degree: "MBA in Data Analysis and Natural Language Processing (NLP)", level: "Post-Graduate Degree", institution: "Anhanguera University", location: "Brazil", completedDate: "Completion: 01/2026", description: "Post-graduate studies focused on data analysis and Natural Language Processing.", tags: ["Data Analysis", "NLP", "Natural Language Processing"] },
  { id: "systems-analysis", degree: "Associate Degree in Systems Analysis and Development", level: "Associate Degree", institution: "Cruzeiro do Sul University", location: "Brazil", completedDate: "Completion: 12/2024", description: "Systems analysis and development degree covering software, databases, and technology delivery.", tags: ["Systems Analysis", "Software Development", "Databases"] }
];

export const ARCHITECTURE_SHOWCASE: ArchitectureHighlight[] = [
  { id: "ai-support", title: "AI-Assisted Incident Diagnosis", category: "AI & Technical Support", description: "Applied OpenAI API, generative AI, and structured prompts to parse logs, analyze sentiment, and support root-cause diagnosis.", impact: "Accelerated investigation of complex incidents and reduced repetitive support work.", techStack: ["OpenAI API", "Python", "Log Analysis", "NLP", "Prompt Engineering"], metrics: "Automated Diagnosis | Faster Resolution" },
  { id: "rpa-operations", title: "Mission-Critical RPA Operations", category: "Systems & Automation", description: "Monitored and maintained more than 30 RPAs, web crawlers, and automated data workflows while supporting integrations and databases.", impact: "Improved operational continuity and exposed opportunities for cost-efficient automation.", techStack: ["Python", "RPAs", "SQL", "Web Crawlers", "Data Pipelines"], metrics: "30+ Systems | Operational Reliability" },
  { id: "support-knowledge-base", title: "Technical Support Knowledge Base", category: "Documentation & Enablement", description: "Created troubleshooting guides, system manuals, and training materials that turn complex technical knowledge into repeatable support workflows.", impact: "Improved user onboarding, escalation quality, and cross-team technical communication.", techStack: ["Jira", "Zendesk", "Hinc", "Documentation", "Training"], metrics: "Clearer Escalations | Better Onboarding" }
];