import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2,
  Cpu
} from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [expandedId, setExpandedId] = React.useState<string>(EXPERIENCES[0].id);

  return (
    <section id="experience" className="py-20 bg-slate-950/50 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Analytics Career Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Systems Analyst Experience & Track Record
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Delivering reliable pipelines, reconciled datasets, operational insights, and KPI reporting across data-focused roles.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative space-y-8 text-left">
          {/* Vertical Connecting Line */}
          <div className="hidden lg:block absolute left-8 top-10 bottom-10 w-[2px] bg-gradient-to-b from-sky-500 via-indigo-500 to-slate-800 pointer-events-none" />

          {EXPERIENCES.map((exp, idx) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div
                key={exp.id}
                onClick={() => setExpandedId(exp.id)}
                className={`relative rounded-2xl transition-all duration-300 cursor-pointer ${
                  isExpanded
                    ? 'glass-panel border-sky-500/40 shadow-xl shadow-sky-950/30'
                    : 'bg-slate-900/40 border border-slate-800/70 hover:border-slate-700'
                } p-6 sm:p-8 lg:ml-16`}
              >
                {/* Node marker on vertical timeline */}
                <div className="hidden lg:flex absolute -left-[4.5rem] top-8 w-9 h-9 rounded-xl bg-slate-900 border border-sky-400/50 items-center justify-center text-sky-400 shadow-md">
                  <span className="font-mono text-xs font-bold">{idx + 1}</span>
                </div>

                {/* Top Role & Company Info */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/30 font-medium">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300">
                      <div className="flex items-center gap-1.5 font-semibold text-emerald-400">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-sky-400" />
                        <span className="font-mono">{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Metrics Badges */}
                  {exp.metrics && (
                    <div className="flex flex-wrap gap-2">
                      {exp.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-right">
                          <div className="text-[10px] uppercase text-slate-400 font-semibold">{m.label}</div>
                          <div className="text-xs font-mono font-bold text-sky-400">{m.value}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Summary text */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4 font-normal">
                  {exp.summary}
                </p>

                {/* Detailed Key Deliverables & Achievements */}
                <div className="mt-5 space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Key Deliverables & Engineering Accomplishments:
                  </div>
                  <ul className="space-y-2.5">
                    {exp.achievements.map((item, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-slate-400 mr-2 flex items-center gap-1">
                    <Cpu className="w-3.5 h-3.5 text-sky-400" /> Stack:
                  </span>
                  {exp.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-800/70 text-slate-200 border border-slate-700/60 font-mono hover:border-sky-500/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
