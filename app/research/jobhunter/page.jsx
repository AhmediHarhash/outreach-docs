'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Target,
  Brain,
  Search,
  FileText,
  Chrome,
  Bell,
  Cpu,
  Database,
  DollarSign,
  CheckCircle2,
  Zap,
  Users,
  TrendingUp,
  Sparkles,
  Server,
  Smartphone,
  Code,
  Globe,
  MessageSquare,
  ArrowRight,
  Layers,
  Rocket,
  Shield,
  Clock,
  BarChart3,
  CircleDollarSign,
  Award,
  Briefcase,
  Heart,
  Star,
  ExternalLink
} from 'lucide-react';
import Navigation from '../../../components/Navigation';
import Card from '../../../components/Card';

const quickStats = [
  { label: 'Development Phase', value: 'Phase I', color: 'green' },
  { label: 'Backend Status', value: 'Live', color: 'green' },
  { label: 'Monthly Cost', value: '$25.10', color: 'blue' },
  { label: 'Job Sources', value: '141K+', color: 'purple' },
];

const coreComponents = [
  {
    name: 'Python Backend',
    icon: Server,
    description: 'FastAPI server orchestrating AI operations, job aggregation, and semantic matching',
    tech: 'FastAPI + Claude CLI + OpenAI',
    status: 'Live on Railway',
    statusColor: 'green',
    link: '/research/jobhunter/phase-1',
  },
  {
    name: 'Flutter Desktop App',
    icon: Smartphone,
    description: 'Cross-platform desktop application for profile management and job tracking',
    tech: 'Flutter 3.38 + Riverpod',
    status: 'In Development',
    statusColor: 'yellow',
    link: '/research/jobhunter/phase-2',
  },
  {
    name: 'Chrome Extension',
    icon: Chrome,
    description: 'Smart form detection and auto-fill with user preview before submission',
    tech: 'Manifest V3',
    status: 'In Development',
    statusColor: 'yellow',
    link: '/research/jobhunter/phase-3',
  },
  {
    name: 'SaaS Platform',
    icon: Rocket,
    description: 'Multi-user cloud platform with subscription tiers and team features',
    tech: 'Clerk + Stripe + PostgreSQL',
    status: 'Planned',
    statusColor: 'blue',
    link: '/research/jobhunter/phase-4',
  },
];

const keyFeatures = [
  {
    icon: Brain,
    title: 'AI-Powered Interviews',
    description: 'Claude conducts personalized interviews to deeply understand your skills, experience, and career goals. No more generic questionnaires.',
  },
  {
    icon: Target,
    title: 'Semantic Job Matching',
    description: 'OpenAI text-embedding-3-large creates 3072-dimensional vectors capturing true meaning. "ML Engineer" properly matches "Machine Learning Developer".',
  },
  {
    icon: FileText,
    title: 'Dynamic CV Generation',
    description: 'Each application gets a tailored CV highlighting relevant experience and incorporating exact keywords from the job description.',
  },
  {
    icon: BarChart3,
    title: 'Match Score Analysis',
    description: 'Every job gets a detailed analysis: match percentage, your strengths, potential gaps, and suggested talking points for interviews.',
  },
];

const philosophyPoints = [
  {
    icon: Heart,
    title: 'Quality Over Quantity',
    description: 'Apply to 10 perfectly-matched jobs instead of 100 generic ones. Higher success rate, less burnout.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your data stays local in Phase I. No cloud uploads, no third-party data sharing. Your career, your control.',
  },
  {
    icon: Zap,
    title: 'AI That Works For You',
    description: 'Claude CLI uses your existing subscription—no per-token costs. Unlimited AI interactions at a fixed monthly rate.',
  },
];

const roadmapPhases = [
  {
    phase: 'Phase I',
    title: 'Foundation',
    status: 'Current',
    timeline: 'January 2026',
    description: 'Local personal use with Python backend, job aggregation, and AI matching',
    highlights: ['FastAPI Backend', 'Claude CLI Integration', 'OpenAI Embeddings', 'Supabase Database', 'Discord Alerts'],
  },
  {
    phase: 'Phase II',
    title: 'Desktop App',
    status: 'Building',
    timeline: 'Q1 2026',
    description: 'Flutter cross-platform desktop app with beautiful UI and seamless experience',
    highlights: ['Profile Management', 'Job Browser', 'Application Tracker', 'CV Preview', 'Interview Prep'],
  },
  {
    phase: 'Phase III',
    title: 'Chrome Extension',
    status: 'Building',
    timeline: 'Q1 2026',
    description: 'Smart form filling with preview mode—never submit without reviewing',
    highlights: ['Form Detection', 'Field Mapping', 'Preview Mode', 'One-Click Fill', 'Application Logging'],
  },
  {
    phase: 'Phase IV',
    title: 'SaaS Launch',
    status: 'Planned',
    timeline: 'Q2-Q3 2026',
    description: 'Multi-user cloud platform with subscription tiers for public launch',
    highlights: ['Clerk Auth', 'Stripe Billing', 'Team Features', '$19-$59/mo Tiers', 'Enterprise Plans'],
  },
];

const techStackCategories = [
  {
    category: 'AI & Intelligence',
    items: [
      { name: 'Claude CLI', purpose: 'AI interviews, analysis, CV generation', cost: '$20/mo subscription' },
      { name: 'OpenAI Embeddings', purpose: 'Semantic job matching', cost: '~$0.10/mo' },
    ],
  },
  {
    category: 'Backend & Database',
    items: [
      { name: 'FastAPI', purpose: 'High-performance Python API', cost: 'Open source' },
      { name: 'Supabase', purpose: 'PostgreSQL database + Auth', cost: 'Free → $25/mo' },
      { name: 'Railway', purpose: 'Backend hosting', cost: '$5-20/mo' },
    ],
  },
  {
    category: 'Job Data',
    items: [
      { name: 'Adzuna API', purpose: '16 countries, 1000+ sources', cost: 'Free tier' },
      { name: 'Jooble API', purpose: '60+ countries, 140k boards', cost: 'Free (affiliate)' },
    ],
  },
  {
    category: 'Frontend & Apps',
    items: [
      { name: 'Flutter', purpose: 'Desktop & mobile apps', cost: 'Open source' },
      { name: 'Next.js', purpose: 'Documentation site', cost: 'Open source' },
      { name: 'Chrome Extension', purpose: 'Form auto-fill', cost: 'Free to publish' },
    ],
  },
];

export default function JobHunterOverviewPage() {
  return (
    <div className="min-h-screen flex">
      <Navigation />

      <main className="flex-1 ml-72 p-8 bg-[#0a0a0a]">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <span>Documentation</span>
            <span>/</span>
            <span className="text-purple-400">Overview</span>
          </div>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-3 flex items-center gap-4">
                JobHunter Pro
                <span className="text-sm font-normal px-3 py-1 bg-green-500/20 text-green-400 rounded-full">
                  v1.0.0
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl">
                AI-powered job hunting that prioritizes <span className="text-purple-400 font-semibold">quality over quantity</span>.
                Find fewer, better-matched opportunities instead of spray-and-pray applications.
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-4 mt-8">
            {quickStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="bg-[#141414] border border-[#262626] rounded-xl p-4"
              >
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{stat.label}</p>
                <p className={`text-2xl font-bold text-${stat.color}-400`}>{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy Section */}
        <Card delay={0.2} className="mb-8 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 border-purple-500/20">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
              <Target className="text-white" size={28} />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-3">The Philosophy</h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Traditional job hunting is fundamentally broken. You apply to 100+ positions, hear back from 5,
                and the process is exhausting. <strong className="text-purple-400">JobHunter Pro inverts this model</strong> with
                AI-powered profile building, semantic matching, and tailored applications. The result? Apply to fewer jobs
                with dramatically higher success rates.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {philosophyPoints.map((point) => {
                  const Icon = point.icon;
                  return (
                    <div key={point.title} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="text-purple-400" size={18} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm mb-1">{point.title}</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">{point.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Card>

        {/* Core Components Grid */}
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Layers className="text-blue-400" size={28} />
          System Components
        </h2>
        <p className="text-gray-400 mb-6 max-w-3xl">
          JobHunter Pro is built as a modular system with four main components, each serving a specific purpose
          in the job hunting workflow.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-10">
          {coreComponents.map((component, index) => {
            const Icon = component.icon;
            return (
              <Link href={component.link} key={component.name}>
                <Card delay={0.3 + index * 0.1} className="h-full group cursor-pointer hover:border-purple-500/50">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                      <Icon className="text-purple-400" size={24} />
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full bg-${component.statusColor}-500/20 text-${component.statusColor}-400`}>
                      {component.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {component.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">{component.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-2 py-1 bg-[#1a1a1a] text-gray-300 rounded">{component.tech}</span>
                    <ArrowRight className="text-gray-600 group-hover:text-purple-400 transition-colors" size={16} />
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Key Features */}
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Sparkles className="text-yellow-400" size={28} />
          AI-Powered Features
        </h2>
        <p className="text-gray-400 mb-6 max-w-3xl">
          Every feature is designed around AI intelligence. From understanding who you are to finding the perfect job match.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-10">
          {keyFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} delay={0.4 + index * 0.1}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-yellow-400" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Roadmap Timeline */}
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <TrendingUp className="text-green-400" size={28} />
          Development Roadmap
        </h2>
        <p className="text-gray-400 mb-6 max-w-3xl">
          Four phases taking JobHunter Pro from a personal tool to a full-featured SaaS platform serving thousands.
        </p>

        <div className="grid grid-cols-4 gap-4 mb-10">
          {roadmapPhases.map((phase, index) => (
            <Card key={phase.phase} delay={0.5 + index * 0.1} className="relative overflow-hidden">
              {phase.status === 'Current' && (
                <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              )}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-purple-400">{phase.phase}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                  phase.status === 'Current' ? 'bg-green-500/20 text-green-400' :
                  phase.status === 'Building' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {phase.status}
                </span>
              </div>
              <h3 className="font-semibold text-white mb-1">{phase.title}</h3>
              <p className="text-xs text-gray-500 mb-3">{phase.timeline}</p>
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">{phase.description}</p>
              <div className="space-y-1.5">
                {phase.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs">
                    <CheckCircle2 size={12} className="text-indigo-400 flex-shrink-0" />
                    <span className="text-gray-300">{highlight}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tech Stack Overview */}
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Code className="text-cyan-400" size={28} />
          Technology Stack
        </h2>
        <p className="text-gray-400 mb-6 max-w-3xl">
          Built with modern, production-ready technologies optimized for performance and cost-efficiency.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-10">
          {techStackCategories.map((category, catIndex) => (
            <Card key={category.category} delay={0.6 + catIndex * 0.1}>
              <h3 className="font-semibold text-white mb-4 pb-2 border-b border-[#262626]">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-white">{item.name}</p>
                      <p className="text-xs text-gray-500">{item.purpose}</p>
                    </div>
                    <span className="text-xs px-2 py-1 bg-[#1a1a1a] text-green-400 rounded">
                      {item.cost}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Links */}
        <Card delay={0.8} className="bg-gradient-to-r from-indigo-500/5 to-purple-500/5 border-indigo-500/20">
          <h2 className="text-lg font-semibold text-white mb-4">Quick Navigation</h2>
          <div className="grid grid-cols-4 gap-4">
            <Link href="/research/jobhunter/phase-1" className="group">
              <div className="p-4 bg-[#1a1a1a] rounded-lg border border-[#262626] hover:border-purple-500/50 transition-all">
                <Server className="text-green-400 mb-2" size={20} />
                <p className="text-sm font-medium text-white group-hover:text-purple-400">Phase I Docs</p>
                <p className="text-xs text-gray-500">Backend & APIs</p>
              </div>
            </Link>
            <Link href="/research/jobhunter/architecture" className="group">
              <div className="p-4 bg-[#1a1a1a] rounded-lg border border-[#262626] hover:border-purple-500/50 transition-all">
                <Layers className="text-blue-400 mb-2" size={20} />
                <p className="text-sm font-medium text-white group-hover:text-purple-400">Architecture</p>
                <p className="text-xs text-gray-500">System Design</p>
              </div>
            </Link>
            <Link href="/research/jobhunter/costs" className="group">
              <div className="p-4 bg-[#1a1a1a] rounded-lg border border-[#262626] hover:border-purple-500/50 transition-all">
                <DollarSign className="text-green-400 mb-2" size={20} />
                <p className="text-sm font-medium text-white group-hover:text-purple-400">Cost Analysis</p>
                <p className="text-xs text-gray-500">Pricing & Margins</p>
              </div>
            </Link>
            <Link href="/research/jobhunter/business-model" className="group">
              <div className="p-4 bg-[#1a1a1a] rounded-lg border border-[#262626] hover:border-purple-500/50 transition-all">
                <TrendingUp className="text-purple-400 mb-2" size={20} />
                <p className="text-sm font-medium text-white group-hover:text-purple-400">Business Model</p>
                <p className="text-xs text-gray-500">Revenue & Growth</p>
              </div>
            </Link>
          </div>
        </Card>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="mt-10 pt-6 border-t border-[#262626] text-center"
        >
          <p className="text-sm text-gray-500">
            Last updated: January 10, 2026 | Built with Next.js, FastAPI, Flutter, and Claude AI
          </p>
          <div className="flex items-center justify-center gap-4 mt-3">
            <a
              href="https://jobhunter-api-production.up.railway.app/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1"
            >
              API Documentation <ExternalLink size={10} />
            </a>
            <span className="text-gray-700">•</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1"
            >
              GitHub Repository <ExternalLink size={10} />
            </a>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
