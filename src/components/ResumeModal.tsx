import React, { useState } from 'react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATIONS } from '../data/portfolioData';
import { X, Printer, Copy, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyMarkdown = () => {
    const md = `# Levi Satto Siedschlag
SYSTEMS ANALYST (AI AUTOMATION / TECHNICAL SUPPORT / PYTHON)

${PERSONAL_INFO.phone} | ${PERSONAL_INFO.email} | ${PERSONAL_INFO.location}
Languages: English (C2 Proficient) | Spanish (C2 Proficient)

## PROFESSIONAL SUMMARY
---
${PERSONAL_INFO.summaryText}

## CORE COMPETENCIES
---
- Artificial Intelligence & Automation: OpenAI API, GPT-4, Embeddings, Prompt Engineering, LLM Integration, NLP, AI-Assisted Debugging, Python Automation
- Troubleshooting & Data: Log Analysis, API Debugging, Advanced SQL, PostgreSQL, MySQL, ETL Pipelines, Data Validation
- Support Tools & Workflows: Jira Service Management, Zendesk, Hinc, Trello, Anydesk, Technical Knowledge Base Creation
- Systems & Infrastructure: Linux, Windows Server, Docker, MacOS, GCP, AWS, FastAPI, Django, JavaScript, React

## PROFESSIONAL EXPERIENCE
---
${EXPERIENCES.map(exp => `### ${exp.role}
${exp.company} | ${exp.period} (${exp.location})
${exp.achievements.map(a => `- ${a}`).join('\n')}
`).join('\n')}

## ACADEMIC BACKGROUND
---
${EDUCATIONS.map(edu => `- **${edu.degree}** — ${edu.level}
  ${edu.institution}, ${edu.location} | ${edu.completedDate}
`).join('\n')}
`;
    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2 text-white font-bold text-base sm:text-lg">
            <span>Levi Satto Siedschlag — Resume</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 transition-colors cursor-pointer"
            >
              {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied MD!' : 'Copy Markdown'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer ml-2"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-left bg-slate-900 text-slate-200 font-sans print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-slate-700 pb-6 space-y-2">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              Levi Satto Siedschlag
            </h1>
            <p className="text-sm font-bold text-sky-400 uppercase tracking-wide">
              SYSTEMS ANALYST (AI AUTOMATION / TECHNICAL SUPPORT / PYTHON)
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-1">
              <span>{PERSONAL_INFO.phone}</span>
              <span>&bull;</span>
              <span>{PERSONAL_INFO.email}</span>
              <span>&bull;</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <div className="text-xs text-slate-400 pt-1">
              <strong className="text-slate-300">Languages:</strong> English (C2 Proficient) | Spanish (C2 Proficient)
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-sky-400 border-b border-slate-800 pb-1">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {PERSONAL_INFO.summaryText}
            </p>
          </div>

          {/* Technical Qualifications */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-sky-400 border-b border-slate-800 pb-1">
              CORE COMPETENCIES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1">
                <div className="font-bold text-white">Artificial Intelligence & Automation</div>
                <div className="text-slate-300">OpenAI API, GPT-4, embeddings, prompt engineering, NLP, AI-assisted debugging, and Python automation</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1">
                <div className="font-bold text-white">Troubleshooting & Data</div>
                <div className="text-slate-300">Log analysis, API debugging, advanced SQL, PostgreSQL, MySQL, ETL pipelines, and data validation</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1">
                <div className="font-bold text-white">Support Tools & Workflows</div>
                <div className="text-slate-300">Jira Service Management, Zendesk, Hinc, Trello, Anydesk, and technical knowledge base creation</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1">
                <div className="font-bold text-white">Systems & Infrastructure</div>
                <div className="text-slate-300">Linux, Windows Server, Docker, MacOS, GCP, AWS, FastAPI, Django, JavaScript, and React</div>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-sky-400 border-b border-slate-800 pb-1">
              PROFESSIONAL EXPERIENCE
            </h2>

            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="font-bold text-sm text-white">{exp.role}</div>
                  <div className="text-xs font-mono text-slate-400">{exp.period}</div>
                </div>
                <div className="text-xs font-semibold text-emerald-400">
                  {exp.company} &bull; {exp.location}
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-300 pt-1">
                  {exp.achievements.map((item, iIdx) => (
                    <li key={iIdx} className="leading-relaxed pl-1">
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Certifications */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-sky-400 border-b border-slate-800 pb-1">
              EDUCATION & CERTIFICATIONS
            </h2>
            <div className="space-y-3 text-xs">
              {EDUCATIONS.map((edu) => (
                <div key={edu.id} className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <div className="font-bold text-white">{edu.degree} — <span className="text-emerald-400 font-normal">{edu.level}</span></div>
                  <div className="text-slate-400 mt-0.5">{edu.institution}, {edu.location} | <span className="font-mono text-sky-400">{edu.completedDate}</span></div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
