import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  MapPin, 
  MessageSquare, 
  Copy, 
  CheckCircle2, 
  Send, 
  ExternalLink,
  FileText
} from 'lucide-react';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Data Analyst Opportunity / Project Collaboration',
    message: 'Hi Levi, I reviewed your experience in SQL, BigQuery, n8n, and data pipelines and would like to discuss an opportunity.'
  });
  const [sentStatus, setSentStatus] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSentStatus('Opening your default email client...');
    setTimeout(() => setSentStatus(null), 4000);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-950/40 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-xs font-semibold text-sky-400 uppercase tracking-wider">
            <Send className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Discuss Data, Reporting & Automation
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Reach out about Data Analyst roles, reporting improvements, pipeline automation, or analytics projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          
          {/* Left Column: Direct Info Cards & Quick Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Direct Card */}
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-emerald-500/30 flex items-center justify-between group cursor-pointer block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Instant Chat</div>
                  <div className="text-base font-bold text-white">WhatsApp Direct</div>
                  <div className="text-xs text-slate-400 mt-0.5">{PERSONAL_INFO.phone}</div>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
            </a>

            {/* Email Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-4 truncate">
                <div className="w-12 h-12 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="truncate">
                  <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider">Email Address</div>
                  <div className="text-base font-bold text-white truncate">{PERSONAL_INFO.email}</div>
                  <div className="text-xs text-slate-400 mt-0.5">Direct inbox response</div>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.email)}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/50 transition-colors cursor-pointer shrink-0 ml-2"
                title="Copy email"
              >
                {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location & Languages Card */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Location & Availability</div>
                  <div className="text-base font-bold text-white">{PERSONAL_INFO.location}</div>
                  <div className="text-xs text-slate-400 mt-0.5">Open to Remote / Relocation / Hybrid</div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 space-y-2">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Language Fluency</div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2.5 py-1 rounded-md bg-slate-900 text-slate-200 border border-slate-800 font-mono">
                    🇬🇧 English: C2 Native
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-slate-900 text-slate-200 border border-slate-800 font-mono">
                    🇪🇸 Spanish: C2 Fluent
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-slate-900 text-slate-200 border border-slate-800 font-mono">
                    🇧🇷 Portuguese: Professional
                  </span>
                </div>
              </div>
            </div>

            {/* Resume Action */}
            <button
              onClick={onOpenResume}
              className="w-full glass-panel p-4 rounded-xl border border-slate-800 hover:border-sky-500/50 flex items-center justify-center gap-2 text-sm font-semibold text-white transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-sky-400" />
              <span>Open Printable Resume View</span>
            </button>

          </div>

          {/* Right Column: Interactive Email Message Dispatcher */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-700/80 shadow-2xl space-y-5">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">Send a Direct Message</h3>
                <p className="text-xs text-slate-400">
                  Pre-configured to launch with your default mail app or review directly.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Connor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-sky-500 text-xs text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@techcorp.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-sky-500 text-xs text-white placeholder-slate-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-sky-500 text-xs text-white placeholder-slate-500 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Message / Role Scope</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-sky-500 text-xs text-white placeholder-slate-500 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-sky-400 to-emerald-400 hover:from-sky-300 hover:to-emerald-300 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email Client</span>
                </button>

                {sentStatus && (
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs text-center font-semibold">
                    {sentStatus}
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
