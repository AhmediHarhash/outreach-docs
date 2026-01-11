import Link from 'next/link';
import {
  FileText, Target, DollarSign, Wrench, BarChart3, Lightbulb,
  Smartphone, Server, Bot, Mail, Briefcase, Calculator,
  Layers, Clock, Users, TrendingUp, ArrowRight
} from 'lucide-react';

const sections = [
  {
    title: 'Project Overview',
    links: [
      { href: '/vision', label: 'Vision & Roadmap', icon: Target, description: 'Product vision, pricing tiers, and development phases' },
      { href: '/architecture', label: 'Architecture', icon: Layers, description: 'System architecture and technical stack' },
      { href: '/costs', label: 'Cost Analysis', icon: DollarSign, description: 'Infrastructure and operational costs' },
      { href: '/setup', label: 'Setup Guide', icon: Wrench, description: 'Development environment setup' },
      { href: '/todo', label: 'Todo List', icon: Clock, description: 'Current tasks and progress' },
    ],
  },
  {
    title: 'Market Research',
    links: [
      { href: '/market', label: 'Market Analysis', icon: BarChart3, description: 'Job market insights and trends' },
      { href: '/research/jobboards', label: 'Job Boards', icon: Briefcase, description: 'Analysis of major job platforms' },
      { href: '/research/finance', label: 'Financial Model', icon: Calculator, description: 'Revenue projections and pricing' },
      { href: '/research/outreach', label: 'Outreach Strategy', icon: Mail, description: 'User acquisition and engagement' },
    ],
  },
  {
    title: 'Technical Research',
    links: [
      { href: '/research/backend', label: 'Backend', icon: Server, description: 'API and database architecture' },
      { href: '/research/automation', label: 'Automation', icon: Bot, description: 'Job scraping and auto-apply' },
      { href: '/research/mobile', label: 'Mobile', icon: Smartphone, description: 'Mobile app development plans' },
    ],
  },
  {
    title: 'JobHunter Deep Dive',
    links: [
      { href: '/research/jobhunter', label: 'Overview', icon: Lightbulb, description: 'Core product features' },
      { href: '/research/jobhunter/phase-1', label: 'Phase 1', icon: TrendingUp, description: 'MVP development' },
      { href: '/research/jobhunter/phase-2', label: 'Phase 2', icon: TrendingUp, description: 'Extension & matching' },
      { href: '/research/jobhunter/phase-3', label: 'Phase 3', icon: TrendingUp, description: 'Automation features' },
      { href: '/research/jobhunter/phase-4', label: 'Phase 4', icon: TrendingUp, description: 'Scale & optimize' },
      { href: '/research/jobhunter/architecture', label: 'Architecture', icon: Layers, description: 'Technical architecture' },
      { href: '/research/jobhunter/costs', label: 'Costs', icon: DollarSign, description: 'Development costs' },
      { href: '/research/jobhunter/competitors', label: 'Competitors', icon: Users, description: 'Competitive analysis' },
      { href: '/research/jobhunter/business-model', label: 'Business Model', icon: Calculator, description: 'Revenue strategy' },
      { href: '/research/jobhunter/infrastructure', label: 'Infrastructure', icon: Server, description: 'Hosting & services' },
      { href: '/research/jobhunter/history', label: 'History', icon: Clock, description: 'Project timeline' },
    ],
  },
];

export default function DocsHome() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="border-b border-white/10 bg-slate-950/95 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">HEKAX Outreach</h1>
              <p className="text-xs text-slate-400">Internal Documentation</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Project Documentation
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Research, architecture, roadmaps, and planning documents for HEKAX Outreach -
            the AI-powered job matching platform.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
                {section.title}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group p-5 bg-slate-900/50 border border-white/10 rounded-xl hover:border-blue-500/50 hover:bg-slate-800/50 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                        <link.icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                            {link.label}
                          </h3>
                          <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-sm text-slate-400 mt-1">{link.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-16 p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://outreach.hekax.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm hover:bg-slate-700 hover:text-white transition-colors"
            >
              Live App
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm hover:bg-slate-700 hover:text-white transition-colors"
            >
              GitHub Repo
            </a>
            <a
              href="https://supabase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm hover:bg-slate-700 hover:text-white transition-colors"
            >
              Supabase Dashboard
            </a>
            <a
              href="https://railway.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm hover:bg-slate-700 hover:text-white transition-colors"
            >
              Railway Dashboard
            </a>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm hover:bg-slate-700 hover:text-white transition-colors"
            >
              Vercel Dashboard
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-500 text-sm">
          HEKAX Outreach - Internal Documentation
        </div>
      </footer>
    </div>
  );
}
