import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  CheckCircle2, 
  Database, 
  ShieldCheck, 
  Cpu, 
  Globe2, 
  Sparkles,
  Workflow
} from 'lucide-react';

export const AboutSummary: React.FC = () => {
  const pillars = [
    {
      icon: Cpu,
      title: "Full-Stack Python & React Architecture",
      description: "6+ years architecting end-to-end applications, resilient microservices with FastAPI/Django/Flask, and reactive TypeScript/React frontends built for scale.",
      color: "from-sky-500/20 to-blue-500/10",
      iconColor: "text-sky-400",
      borderColor: "border-sky-500/20"
    },
    {
      icon: Database,
      title: "Deep PostgreSQL & Data Modeling",
      description: "Heavy relational database engineering, advanced query tuning, composite indexing, and transactional/analytical schema designs for financial and operational data.",
      color: "from-emerald-500/20 to-teal-500/10",
      iconColor: "text-emerald-400",
      borderColor: "border-emerald-500/20"
    },
    {
      icon: ShieldCheck,
      title: "Quality, Testing & Refactoring",
      description: "Automated test suites with Pytest and Vitest, continuous code refactoring for high maintainability, and strict adherence to Agile/Scrum standards.",
      color: "from-purple-500/20 to-indigo-500/10",
      iconColor: "text-purple-400",
      borderColor: "border-purple-500/20"
    },
    {
      icon: Globe2,
      title: "Bilingual International Collaboration",
      description: "C2 Native-equivalent English and C2 Spanish proficiency with extensive cross-functional experience across Brazilian tech centers and global remote teams.",
      color: "from-amber-500/20 to-orange-500/10",
      iconColor: "text-amber-400",
      borderColor: "border-amber-500/20"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-950/40 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-xs font-semibold text-sky-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Professional Summary</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Architecting Resilient Systems from Data Model to User Interface
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Bridging complex backend business logic, high-volume database performance, and reactive user experiences.
          </p>
        </div>

        {/* Main Resume Summary Quote Box */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-700/70 mb-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 text-left space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
                <Workflow className="w-4 h-4" />
                <span>Executive Summary &bull; 6+ Years Industry Experience</span>
              </div>
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
                "{PERSONAL_INFO.summaryText}"
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center border-t lg:border-t-0 lg:border-l border-slate-800 pt-6 lg:pt-0 lg:pl-8 text-left">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Language Proficiencies</div>
              
              {PERSONAL_INFO.languages.map((lang, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start justify-between gap-2">
                  <div>
                    <div className="font-semibold text-white text-sm flex items-center gap-2">
                      <span>{lang.name}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/30">
                        {lang.badge}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5 leading-snug">{lang.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Core Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`glass-panel glass-panel-hover rounded-2xl p-6 border ${pillar.borderColor} flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center border border-slate-700/50`}>
                    <Icon className={`w-6 h-6 ${pillar.iconColor}`} />
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center text-[11px] font-semibold text-slate-400 gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Production Tested</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
