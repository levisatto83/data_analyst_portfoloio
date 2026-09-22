import React, { useState } from 'react';
import { ARCHITECTURE_SHOWCASE } from '../data/portfolioData';
import { 
  Cpu, 
  Database, 
  Play, 
  Clock, 
  CheckCircle2, 
  RefreshCw
} from 'lucide-react';

interface SimulatedResponse {
  endpoint: string;
  method: 'GET' | 'POST';
  status: number;
  durationMs: number;
  sqlOptimization: string;
  payload: Record<string, unknown>;
}

export const ArchitecturePlayground: React.FC = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<'reconciliation' | 'ingestion' | 'quality'>('reconciliation');
  const [isLoading, setIsLoading] = useState(false);
  const [lastExecution, setLastExecution] = useState<SimulatedResponse>({
    endpoint: 'openai://support/incident-diagnosis?ticket=latest',
    method: 'GET',
    status: 200,
    durationMs: 24.8,
    sqlOptimization: 'Log context parsed and incident evidence grouped for technical review',
    payload: {
      incident_type: "PRODUCTION_API_ERROR",
      root_cause_confidence: "HIGH",
      recommended_action: "Review timeout configuration and deploy KB guidance"
    }
  });

  const endpoints = [
    {
      id: 'reconciliation',
      title: 'AI Incident Diagnosis',
      path: 'openai://support/incident-diagnosis',
      description: 'Parse logs, analyze incident context, and generate structured root-cause guidance for technical review.',
      stack: ['OpenAI API', 'Python', 'Log Analysis', 'NLP'],
      generate: () => ({
        endpoint: 'openai://support/incident-diagnosis?ticket=latest',
        method: 'GET' as const,
        status: 200,
        durationMs: 24.8,
        sqlOptimization: 'Log context parsed and incident evidence grouped for technical review',
        payload: {
          incident_type: "PRODUCTION_API_ERROR",
          root_cause_confidence: "HIGH",
          recommended_action: "Review timeout configuration and deploy KB guidance"
        }
      })
    },
    {
      id: 'ingestion',
      title: 'Python Support Automation',
      path: 'python://rpa/support-automation',
      description: 'Run repeatable support tasks, validate system data, and reduce manual operational work with Python.',
      stack: ['Python', 'RPAs', 'SQL', 'APIs'],
      generate: () => ({
        endpoint: 'python://rpa/support-automation?run=latest',
        method: 'GET' as const,
        status: 200,
        durationMs: 38,
        sqlOptimization: 'Repeatable support tasks validated across 30+ monitored processes',
        payload: {
          workflow: "support-automation",
          records_received: 18420,
          records_loaded: 18392,
          records_rejected: 28,
          pipeline_status: "SYNCHRONIZED",
          validation_rules: ["schema", "required_fields", "duplicate_key"]
        }
      })
    },
    {
      id: 'quality',
      title: 'Support Knowledge Monitor',
      path: 'kb://support/quality-monitor',
      description: 'Monitor incident categories, documentation coverage, and escalation quality across support workflows.',
      stack: ['Knowledge Base', 'Monitoring', 'Jira', 'Documentation'],
      generate: () => ({
        endpoint: 'kb://support/quality-monitor?scope=all',
        method: 'GET' as const,
        status: 200,
        durationMs: 18.5,
        sqlOptimization: 'Documentation coverage: 94% | Escalations routed to owners',
        payload: {
          monitored_workflows: 30,
          documented_workflows: 28,
          review_required: 2,
          documentation_coverage: "94%",
          next_review: "15 minutes"
        }
      })
    }
  ];

  const handleRunSimulation = (endpointId: 'reconciliation' | 'ingestion' | 'quality') => {
    setSelectedEndpoint(endpointId);
    setIsLoading(true);

    const target = endpoints.find(e => e.id === endpointId);
    if (!target) return;

    setTimeout(() => {
      setLastExecution(target.generate());
      setIsLoading(false);
    }, 350);
  };

  return (
    <section id="architecture" className="py-20 bg-slate-950/60 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Technical Support Lab</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Live Incident, Automation & Knowledge Base Visualizer
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Inspect simulated support workflows, review incident evidence, and preview the guidance surfaced to technical teams.
          </p>
        </div>

        {/* 3 Architecture Pillar Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
          {ARCHITECTURE_SHOWCASE.map((item) => (
            <div key={item.id} className="glass-panel rounded-2xl p-6 border border-slate-800/90 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                  {item.category}
                </div>
                <h3 className="text-base font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
                <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
                  <span className="text-emerald-400 font-semibold">Impact: </span>
                  {item.impact}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-sky-400 font-semibold">{item.metrics}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Live Interactive Simulator Console */}
        <div className="glass-panel rounded-2xl border border-slate-700/80 overflow-hidden shadow-2xl text-left">
          
          {/* Console Top Bar */}
          <div className="px-6 py-4 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="font-mono text-xs sm:text-sm font-semibold text-white ml-2">
                Technical Support Console &bull; Python / OpenAI API
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" /> Pipeline Healthy
              </span>
              <span className="text-slate-500">|</span>
              <span className="text-sky-400 font-semibold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {lastExecution.durationMs}ms
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Control Column: Endpoints selector */}
            <div className="lg:col-span-4 p-5 bg-slate-950/80 border-b lg:border-b-0 lg:border-r border-slate-800 space-y-3">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Select Support Workflow:
              </div>

              {endpoints.map((ep) => {
                const isSelected = selectedEndpoint === ep.id;
                return (
                  <button
                    key={ep.id}
                    onClick={() => handleRunSimulation(ep.id as 'reconciliation' | 'ingestion' | 'quality')}
                    className={`w-full text-left p-3.5 rounded-xl transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-sky-500/15 border-sky-500/50 shadow-md shadow-sky-950/50'
                        : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-900 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-xs font-bold ${isSelected ? 'text-sky-400' : 'text-slate-200'}`}>
                        {ep.title}
                      </span>
                      <Play className={`w-3.5 h-3.5 ${isSelected ? 'text-sky-400 fill-sky-400' : 'text-slate-500'}`} />
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 truncate mb-2">
                      {ep.path}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {ep.stack.slice(0, 2).map((st, sIdx) => (
                        <span key={sIdx} className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-300 font-mono">
                          {st}
                        </span>
                      ))}
                    </div>
                  </button>
                );
              })}

              <div className="pt-3">
                <button
                  onClick={() => handleRunSimulation(selectedEndpoint)}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-xs text-slate-950 bg-gradient-to-r from-sky-400 to-emerald-400 hover:from-sky-300 hover:to-emerald-300 transition-all cursor-pointer disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
                  <span>Execute Endpoint Request</span>
                </button>
              </div>
            </div>

            {/* Right Output Column: Response JSON & Query execution plan */}
            <div className="lg:col-span-8 p-6 bg-[#060910] space-y-4">
              
              {/* Endpoint URL Bar */}
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs">
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                  {lastExecution.method}
                </span>
                <span className="text-slate-300 truncate flex-1">
                  {lastExecution.endpoint}
                </span>
                <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-400 font-semibold">
                  HTTP {lastExecution.status}
                </span>
              </div>

              {/* SQL Optimization & Latency banner */}
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 flex items-start gap-2.5 text-xs">
                <Database className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div className="space-y-0.5">
                  <div className="font-semibold text-white">Incident & Workflow Analysis:</div>
                  <div className="font-mono text-slate-300 text-[11px] leading-relaxed">
                    {lastExecution.sqlOptimization}
                  </div>
                </div>
              </div>

              {/* JSON Payload viewer */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Support Response Payload (JSON):</span>
                  <span>Content-Type: application/json</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-400 overflow-x-auto max-h-64">
                  <pre>{JSON.stringify(lastExecution.payload, null, 2)}</pre>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
