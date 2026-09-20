import React, { useState, useMemo } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Server, 
  Layout, 
  Database, 
  ShieldCheck, 
  Search, 
  CheckCircle2, 
  Star, 
  Code2, 
  Zap
} from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'backend':
        return Server;
      case 'frontend':
        return Layout;
      case 'data':
        return Database;
      case 'devops-quality':
        return ShieldCheck;
      default:
        return Code2;
    }
  };

  const filteredCategories = useMemo(() => {
    return SKILL_CATEGORIES.map((cat) => {
      const matchesCategory = selectedCategory === 'all' || cat.id === selectedCategory;
      if (!matchesCategory) return null;

      const filteredSkills = cat.skills.filter((skill) => {
        if (!searchQuery.trim()) return true;
        const query = searchQuery.toLowerCase();
        return (
          skill.name.toLowerCase().includes(query) ||
          skill.tags.some((tag) => tag.toLowerCase().includes(query))
        );
      });

      if (filteredSkills.length === 0) return null;

      return {
        ...cat,
        skills: filteredSkills,
      };
    }).filter(Boolean);
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>Technical Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Data Analytics Skills & Technical Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Practical tools for extracting, validating, transforming, visualizing, and governing business data.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20'
                  : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              All Categories
            </button>
            {SKILL_CATEGORIES.map((cat) => {
              const Icon = getCategoryIcon(cat.id);
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20'
                      : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-xs text-white placeholder-slate-500 outline-none transition-all"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {filteredCategories.map((category) => {
            if (!category) return null;
            const Icon = getCategoryIcon(category.id);

            return (
              <div
                key={category.id}
                className="glass-panel rounded-2xl p-6 border border-slate-800/80 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-800/80">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{category.title}</h3>
                      <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{category.description}</p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-slate-900/50 hover:bg-slate-800/40 border border-slate-800/60 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm text-slate-100">{skill.name}</span>
                            {skill.highlight && (
                              <span className="flex items-center gap-0.5 text-[10px] px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                                <Star className="w-2.5 h-2.5 fill-amber-300" /> Core
                              </span>
                            )}
                          </div>
                          <span className="text-xs font-mono text-sky-400 font-medium">
                            {skill.experienceYears}
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-2">
                          <div
                            className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {skill.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60 font-mono"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" /> High Code Coverage
                  </span>
                  <span className="font-mono text-slate-400">{category.skills.length} competencies</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
