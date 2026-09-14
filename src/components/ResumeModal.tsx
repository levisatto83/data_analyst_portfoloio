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
SENIOR FULL-STACK SOFTWARE ANALYST (PYTHON & REACTJS)

${PERSONAL_INFO.phone} | ${PERSONAL_INFO.email} | ${PERSONAL_INFO.location}
Languages: English (C2 Proficient / Native-level) | Spanish (C2 Proficient)

## PROFESSIONAL SUMMARY
---
${PERSONAL_INFO.summaryText}

## TECHNICAL QUALIFICATIONS
---
- Backend Engineering: Python (5+ years: Flask, FastAPI, Django), Service-Oriented Architecture (SOA), Microservices, REST APIs, Complex Business Logic
- Frontend Engineering: Modern JavaScript (ES6+), TypeScript, ReactJS, Interactive Web Applications, Data Visualization Components, HTML5/CSS3
- Data Access & Storage: Relational Databases (Heavy PostgreSQL, MySQL), Advanced Data-Access Models, SQLAlchemy, Query Optimization, Transactional & Analytical Schemas
- Quality, Agile & DevOps: Automated Testing (Pytest, Vitest), Continuous Refactoring, Agile/Scrum Methodologies, GCP, AWS, Docker, Git/GitHub, Jira

## PROFESSIONAL EXPERIENCE
---
${EXPERIENCES.map(exp => `### ${exp.role}
${exp.company} | ${exp.period} (${exp.location})
${exp.achievements.map(a => `- ${a}`).join('\n')}
`).join('\n')}

## EDUCATION & CERTIFICATIONS
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
              SENIOR FULL-STACK SOFTWARE ANALYST (PYTHON & REACTJS)
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-1">
              <span>{PERSONAL_INFO.phone}</span>
              <span>&bull;</span>
              <span>{PERSONAL_INFO.email}</span>
              <span>&bull;</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <div className="text-xs text-slate-400 pt-1">
              <strong className="text-slate-300">Languages:</strong> English (C2 Proficient / Native-level) | Spanish (C2 Proficient) | Portuguese (Professional)
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
              TECHNICAL QUALIFICATIONS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1">
                <div className="font-bold text-white">Backend Engineering</div>
                <div className="text-slate-300">Python (5+ years: Flask, FastAPI, Django), Service-Oriented Architecture (SOA), Microservices, REST APIs, Complex Business Logic</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1">
                <div className="font-bold text-white">Frontend Engineering</div>
                <div className="text-slate-300">Modern JavaScript (ES6+), TypeScript, ReactJS, Interactive Web Applications, Data Visualization Components, HTML5/CSS3</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1">
                <div className="font-bold text-white">Data Access & Storage</div>
                <div className="text-slate-300">Relational Databases (Heavy PostgreSQL, MySQL), Advanced Data-Access Models, SQLAlchemy, Query Optimization, Transactional & Analytical Schemas</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1">
                <div className="font-bold text-white">Quality, Agile & DevOps</div>
                <div className="text-slate-300">Automated Testing (Pytest, Vitest), Continuous Refactoring, Agile/Scrum Methodologies, GCP, AWS, Docker, Git/GitHub, Jira</div>
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
