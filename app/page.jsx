import Link from 'next/link';
import {
  FileText, Target, DollarSign, Wrench, BarChart3, Lightbulb,
  Server, Bot, Briefcase, Globe, Layers, Clock, TrendingUp, ArrowRight,
  CheckCircle2, Zap, CreditCard, ExternalLink
} from 'lucide-react';

const quickStats = [
  { label: 'Job Sources', value: '12', icon: Globe, color: 'green' },
  { label: 'Infrastructure', value: 'Cloud', icon: Server, color: 'indigo' },
  { label: 'Status', value: 'Live', icon: CheckCircle2, color: 'emerald' },
  { label: 'Progress', value: '75%', icon: TrendingUp, color: 'purple' },
];

const liveServices = [
  { name: 'Web App', url: 'https://outreach.hekax.com', status: 'live' },
  { name: 'API', url: 'https://outreachapi.hekax.com/health', status: 'live' },
  { name: 'Docs', url: 'https://outreach-docs-production.up.railway.app', status: 'live' },
];

const sections = [
  {
    title: 'Core Documentation',
    links: [
      { href: '/architecture', label: 'Architecture', icon: Layers, description: '12 job sources, Express API, Supabase, cron-job.org' },
      { href: '/setup', label: 'Infrastructure', icon: Server, description: 'Cloud services, env vars, cron jobs, Stripe' },
      { href: '/todo', label: 'Roadmap', icon: Clock, description: 'Development progress and remaining tasks' },
    ],
  },
  {
    title: 'Features',
    links: [
      { href: '/research/jobhunter', label: 'Job Matching', icon: Briefcase, description: 'AI-powered job scoring and matching' },
      { href: '/research/automation', label: 'Auto-Apply', icon: Bot, description: 'Automated application submission' },
      { href: '/vision', label: 'Vision & Pricing', icon: Target, description: 'Product roadmap and tier pricing' },
    ],
  },
];

export default function DocsHome() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="border-b border-white/10 bg-slate-950/95 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">HEKAX Outreach</h1>
                <p className="text-xs text-slate-400">Internal Documentation</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500/20 text-green-400 rounded-full text-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                All Systems Live
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            HEKAX Outreach
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            AI-powered job matching platform with 12 job sources, automated scoring, and Stripe billing.
            Fully cloud-hosted on Railway, Vercel, and Supabase.
          </p>
          <p className="text-sm text-slate-500 mt-2">
            Last updated: January 16, 2026
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-4 mb-12">
          {quickStats.map((stat) => (
            <div
              key={stat.label}
              className={`p-4 bg-${stat.color}-500/10 border border-${stat.color}-500/20 rounded-xl`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg bg-${stat.color}-500/20 flex items-center justify-center`}>
                  <stat.icon className={`w-5 h-5 text-${stat.color}-400`} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Services */}
        <div className="p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl mb-12">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-green-400" />
            Live Deployments
          </h3>
          <div className="flex flex-wrap gap-3">
            {liveServices.map((service) => (
              <a
                key={service.name}
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 rounded-lg text-sm transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-green-400" />
                {service.name}
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            ))}
          </div>
        </div>

        {/* Tech Stack Summary */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="p-4 bg-slate-900/50 border border-white/10 rounded-xl">
            <h4 className="font-semibold text-white mb-2">Frontend</h4>
            <p className="text-sm text-slate-400">React + Vite + TypeScript</p>
            <p className="text-xs text-slate-500 mt-1">Deployed on Vercel</p>
          </div>
          <div className="p-4 bg-slate-900/50 border border-white/10 rounded-xl">
            <h4 className="font-semibold text-white mb-2">Backend</h4>
            <p className="text-sm text-slate-400">Express + TypeScript</p>
            <p className="text-xs text-slate-500 mt-1">Deployed on Railway</p>
          </div>
          <div className="p-4 bg-slate-900/50 border border-white/10 rounded-xl">
            <h4 className="font-semibold text-white mb-2">Database</h4>
            <p className="text-sm text-slate-400">PostgreSQL + JWT Auth</p>
            <p className="text-xs text-slate-500 mt-1">Hosted on Supabase</p>
          </div>
        </div>

        {/* Job Sources */}
        <div className="p-6 bg-slate-900/50 border border-white/10 rounded-2xl mb-12">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5 text-blue-400" />
            12 Job Sources
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm font-medium text-green-400 mb-2">FREE APIs (7)</p>
              <p className="text-xs text-slate-400">RemoteOK, Himalayas, Jobicy, Arbeitnow, Remotive, WeWorkRemotely, YCombinator</p>
            </div>
            <div>
              <p className="text-sm font-medium text-yellow-400 mb-2">API Key (2)</p>
              <p className="text-xs text-slate-400">Adzuna (15 countries), Jooble (global)</p>
            </div>
            <div>
              <p className="text-sm font-medium text-purple-400 mb-2">RapidAPI (3)</p>
              <p className="text-xs text-slate-400">JSearch, LinkedIn Scraper, Glassdoor</p>
            </div>
          </div>
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

        {/* Pricing */}
        <div className="mt-12 p-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-indigo-400" />
            Pricing Tiers (Stripe)
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-slate-800/50 rounded-lg">
              <p className="text-xl font-bold text-white">Signal</p>
              <p className="text-slate-400">Free</p>
              <p className="text-xs text-slate-500 mt-1">30 matches/day</p>
            </div>
            <div className="text-center p-4 bg-indigo-500/10 border border-indigo-500/30 rounded-lg">
              <p className="text-xl font-bold text-indigo-400">Precision</p>
              <p className="text-slate-400">$39/mo</p>
              <p className="text-xs text-slate-500 mt-1">150 matches/day</p>
            </div>
            <div className="text-center p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
              <p className="text-xl font-bold text-purple-400">Executive</p>
              <p className="text-slate-400">$89/mo</p>
              <p className="text-xs text-slate-500 mt-1">300 matches/day</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-500 text-sm">
          HEKAX Outreach - Internal Documentation | Updated January 16, 2026
        </div>
      </footer>
    </div>
  );
}
