import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  ArrowRight, 
  FileText, 
  CheckCircle2, 
  Copy, 
  MessageSquare,
  Database,
  Code2,
  Cpu
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState<'bigquery' | 'n8n' | 'tableau'>('bigquery');

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] glow-ambient-1 rounded-full pointer-events-none blur-3xl opacity-60 animate-pulse-glow" />
      <div className="absolute top-1/3 left-10 w-[400px] h-[350px] glow-ambient-2 rounded-full pointer-events-none blur-3xl opacity-40" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[350px] glow-ambient-3 rounded-full pointer-events-none blur-3xl opacity-35" />

      {/* Grid background texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Core Pitch */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-medium text-slate-300 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-semibold">Available for Data Analyst Roles</span>
              <span className="text-slate-500">&bull;</span>
              <span className="text-slate-300">Remote / Hybrid / Relocation</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Levi Satto <span className="gradient-text-cyan-indigo block sm:inline">Siedschlag</span>
              </h1>
              
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-lg sm:text-xl font-bold text-sky-400 tracking-wide font-mono">
                  DATA ANALYST
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 text-xs font-semibold">
                  SQL & BigQuery
                </span>
              </div>
            </div>

            {/* Short value proposition */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Building reliable <strong className="text-sky-400 font-medium">SQL and BigQuery</strong> analysis, automated <strong className="text-cyan-300 font-medium">n8n and Python data pipelines</strong>, and actionable <strong className="text-emerald-400 font-medium">Tableau / BI dashboards</strong> with 3+ years of hands-on analytics delivery.
            </p>

            {/* Location, Contact & Bilingual Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="truncate">{PERSONAL_INFO.location}</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-2 truncate">
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </div>
                <button
                  onClick={copyEmailToClipboard}
                  className="p-1 text-slate-400 hover:text-sky-400 hover:bg-slate-800 rounded transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-mono">{PERSONAL_INFO.phone}</span>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <Globe className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="truncate">English (C2 Native) & Spanish (C2)</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 hover:from-emerald-300 hover:to-sky-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all text-sm cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Connect on WhatsApp</span>
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-sky-500/50 shadow-md transition-all text-sm cursor-pointer"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>View Full Resume</span>
              </button>

              <a
                href="#experience"
                className="flex items-center gap-1.5 px-4 py-3.5 text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                <span>Explore Track Record</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </a>
            </div>

            {/* Quick stats counter bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60">
                  <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-300 mt-0.5">{stat.label}</div>
                  <div className="text-[11px] text-sky-400/90 truncate">{stat.highlight}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Code & Architecture Preview Terminal */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl shadow-sky-950/40">
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">levi-stack://production-ready</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-mono text-emerald-400">99.9% Healthy</span>
                </div>
              </div>

              {/* Tab Selector */}
              <div className="flex border-b border-slate-800 bg-slate-950/60 p-1.5 gap-1 text-xs">
                <button
                  onClick={() => setActiveTab('bigquery')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono transition-colors ${
                    activeTab === 'bigquery'
                      ? 'bg-sky-500/20 text-sky-400 border border-sky-500/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>BigQuery.sql</span>
                </button>
                <button
                  onClick={() => setActiveTab('n8n')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono transition-colors ${
                    activeTab === 'n8n'
                      ? 'bg-sky-500/20 text-sky-400 border border-sky-500/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>n8n.workflow</span>
                </button>
                <button
                  onClick={() => setActiveTab('tableau')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono transition-colors ${
                    activeTab === 'tableau'
                      ? 'bg-sky-500/20 text-sky-400 border border-sky-500/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Database className="w-3.5 h-3.5" />
                  <span>Tableau.kpi</span>
                </button>
              </div>

              {/* Code Panel */}
              <div className="p-4 font-mono text-xs text-left bg-[#070b12] overflow-x-auto min-h-[320px]">
                {activeTab === 'bigquery' && (
                  <div className="space-y-1.5 text-slate-300">
                    <div className="text-slate-500">-- BigQuery reporting and reconciliation query</div>
                    <div><span className="text-purple-400">WITH</span> source_totals <span className="text-purple-400">AS</span> (</div>
                    <div className="pl-4"><span className="text-purple-400">SELECT</span> account_id, <span className="text-purple-400">SUM</span>(amount) <span className="text-purple-400">AS</span> source_total</div>
                    <div className="pl-4"><span className="text-purple-400">FROM</span> `<span className="text-amber-300">analytics.raw_transactions</span>`</div>
                    <div className="pl-4"><span className="text-purple-400">WHERE</span> event_date <span className="text-purple-400">BETWEEN</span> <span className="text-amber-300">'2025-08-01'</span> <span className="text-purple-400">AND</span> <span className="text-amber-300">'2025-08-31'</span></div>
                    <div className="pl-4"><span className="text-purple-400">GROUP BY</span> account_id</div>
                    <div>), reconciled <span className="text-purple-400">AS</span> (</div>
                    <div className="pl-4"><span className="text-purple-400">SELECT</span> account_id, source_total, ledger_total,</div>
                    <div className="pl-4">ABS(source_total - ledger_total) <span className="text-purple-400">AS</span> variance</div>
                    <div className="pl-4"><span className="text-purple-400">FROM</span> `analytics.reconciliation_view`</div>
                    <div>) <span className="text-purple-400">SELECT</span> * <span className="text-purple-400">FROM</span> reconciled <span className="text-purple-400">WHERE</span> variance &gt; <span className="text-teal-400">0.01</span>;</div>
                  </div>
                )}

                {activeTab === 'n8n' && (
                  <div className="space-y-1.5 text-slate-300">
                    <div className="text-slate-500">// n8n ingestion workflow: API → transform → validate</div>
                    <div><span className="text-purple-400">TRIGGER</span> Schedule: every <span className="text-teal-400">15 minutes</span></div>
                    <div><span className="text-purple-400">NODE</span> HTTP Request: fetch CRM transactions</div>
                    <div><span className="text-purple-400">NODE</span> Python: normalize dates and currencies</div>
                    <div><span className="text-purple-400">NODE</span> BigQuery: append staging records</div>
                    <div><span className="text-purple-400">NODE</span> Data Quality: reconcile source totals</div>
                    <div><span className="text-purple-400">NODE</span> OpenAI: classify exception notes</div>
                    <div><span className="text-purple-400">NODE</span> Slack: notify owner when variance &gt; 1%</div>
                    <div className="pt-2 text-emerald-400">Workflow status: healthy &bull; 30+ automated processes monitored</div>
                  </div>
                )}

                {activeTab === 'tableau' && (
                  <div className="space-y-1.5 text-slate-300">
                    <div className="text-slate-500">// Tableau executive KPI view</div>
                    <div><span className="text-purple-400">DASHBOARD</span> Sales & Operational Performance</div>
                    <div><span className="text-purple-400">FILTER</span> Reporting period: current quarter</div>
                    <div><span className="text-purple-400">KPI</span> Revenue: <span className="text-emerald-400">+12.8%</span> vs prior period</div>
                    <div><span className="text-purple-400">KPI</span> Pipeline conversion: <span className="text-teal-400">24.6%</span></div>
                    <div><span className="text-purple-400">KPI</span> Data freshness: <span className="text-emerald-400">99.4%</span></div>
                    <div><span className="text-purple-400">ALERT</span> 3 accounts require reconciliation review</div>
                    <div className="pt-2 text-slate-500">Report refresh completed from validated BigQuery tables.</div>
                  </div>
                )}
              </div>

              {/* Status bar */}
              <div className="px-4 py-2 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Data checks: 99%+ accuracy
                </span>
                <span className="text-slate-400">3+ Years Analytics Track</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
