import React from 'react';
import { EDUCATIONS } from '../data/portfolioData';
import { 
  GraduationCap, 
  Calendar, 
  MapPin
} from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Advanced Specializations
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Rigorous foundations in computer systems, relational models, large-scale data analysis, and Natural Language Processing.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {EDUCATIONS.map((edu) => (
            <div
              key={edu.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Degree & Level Badge */}
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-emerald-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800/80 text-emerald-400 border border-emerald-500/30">
                    {edu.level}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white leading-snug">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-semibold text-sky-400 mt-1">
                    {edu.institution}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    <span>{edu.completedDate}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                  {edu.description}
                </p>
              </div>

              {/* Subject Tags */}
              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <div className="text-[11px] font-semibold uppercase text-slate-400 mb-2">
                  Specialization Focus:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {edu.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-700/60 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
