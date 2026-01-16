'use client';

import { motion } from 'framer-motion';
import {
  Box,
  Database,
  Server,
  Bell,
  Briefcase,
  TrendingUp,
  ArrowRight,
  Clock,
  Cpu,
  HardDrive,
  Layers,
  GitBranch,
  Globe,
  Cloud,
  Key,
  Zap
} from 'lucide-react';
import Navigation from '../../components/Navigation';
import Card from '../../components/Card';

const systemComponents = [
  {
    name: 'Job Ingestion Engine',
    icon: Briefcase,
    description: 'Fetches jobs from 12 sources across 3 tiers',
    details: [
      'FREE (7): RemoteOK, Himalayas, Jobicy, Arbeitnow, Remotive, WeWorkRemotely, YCombinator',
      'API Key (2): Adzuna (15 countries), Jooble (global)',
      'RapidAPI (3): JSearch, LinkedIn Scraper, Glassdoor',
      'Profile-based scoring (0-100)',
    ],
    color: 'indigo',
  },
  {
    name: 'Express.js API',
    icon: Server,
    description: 'TypeScript/Node.js backend on Railway',
    details: [
      'JWT Authentication (Supabase)',
      'Routes: jobs, applications, profile, billing, ai, auto-apply',
      'Stripe webhooks integration',
      'cron-job.org scheduled ingestion',
    ],
    color: 'purple',
  },
  {
    name: 'Supabase PostgreSQL',
    icon: Database,
    description: 'Cloud database with realtime capabilities',
    details: [
      'Tables: profiles, jobs, job_matches, applications',
      'skills, experiences, job_preferences',
      'billing_customers, stripe_events',
      'Row-level security (RLS)',
    ],
    color: 'green',
  },
  {
    name: 'Discord Notifications',
    icon: Bell,
    description: 'Real-time alerts for high-match jobs',
    details: [
      'Webhook per user profile',
      'Rich embeds with job details',
      'Score threshold alerts',
      'Match summaries',
    ],
    color: 'blue',
  },
];

const jobSources = [
  { category: 'FREE APIs (No Auth)', sources: ['RemoteOK', 'Himalayas', 'Jobicy', 'Arbeitnow', 'Remotive', 'WeWorkRemotely', 'Y Combinator'], color: 'green' },
  { category: 'API Key Required', sources: ['Adzuna (15 countries)', 'Jooble (global)'], color: 'yellow' },
  { category: 'RapidAPI Premium', sources: ['JSearch', 'LinkedIn Scraper', 'Glassdoor'], color: 'purple' },
];

const scoringFactors = [
  { factor: 'Title Match', weight: '30%', description: 'Exact match to desired job title' },
  { factor: 'Skills Match', weight: '40%', description: 'Up to 3 points per matching skill' },
  { factor: 'Job Type', weight: '10%', description: 'Full-time, part-time, contract match' },
  { factor: 'Location', weight: '10%', description: 'Remote or target location match' },
  { factor: 'Salary Range', weight: '10%', description: 'Meets minimum salary expectations' },
];

const dbSchema = [
  {
    table: 'profiles',
    fields: ['id', 'user_id', 'full_name', 'email', 'plan_tier', 'discord_webhook_url', 'created_at'],
  },
  {
    table: 'jobs',
    fields: ['id', 'external_id', 'title', 'company', 'location', 'salary', 'salary_min', 'salary_max', 'description', 'source', 'source_url', 'remote', 'tags[]', 'posted_at'],
  },
  {
    table: 'job_matches',
    fields: ['id', 'user_id', 'job_id', 'match_score', 'match_reasoning', 'strengths[]', 'gaps[]', 'talking_points[]', 'created_at'],
  },
  {
    table: 'applications',
    fields: ['id', 'user_id', 'job_id', 'status', 'applied_at', 'notes', 'resume_version', 'cover_letter'],
  },
  {
    table: 'skills',
    fields: ['id', 'profile_id', 'name', 'level', 'years'],
  },
  {
    table: 'job_preferences',
    fields: ['id', 'profile_id', 'job_types[]', 'locations[]', 'salary_range', 'desired_title'],
  },
];

const infrastructure = [
  { name: 'Frontend', tech: 'React + Vite + TypeScript', host: 'Vercel', url: 'outreach.hekax.com' },
  { name: 'API', tech: 'Express + TypeScript', host: 'Railway', url: 'outreachapi.hekax.com' },
  { name: 'Docs', tech: 'Next.js', host: 'Railway', url: 'outreach-docs-production.up.railway.app' },
  { name: 'Database', tech: 'PostgreSQL', host: 'Supabase', url: 'birknvzytmnphrlwjipq.supabase.co' },
  { name: 'Cron Jobs', tech: 'HTTP triggers', host: 'cron-job.org', url: 'Every 4 hours' },
  { name: 'Payments', tech: 'Stripe', host: 'Stripe', url: 'Webhooks + Checkout' },
];

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen flex">
      <Navigation />

      <main className="flex-1 ml-64 p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <span>Outreach</span>
            <span>/</span>
            <span className="text-white">Architecture</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">System Architecture</h1>
          <p className="text-gray-400">
            HEKAX Outreach - AI-powered job matching platform (as of January 16, 2026)
          </p>
        </motion.div>

        {/* System Overview */}
        <Card delay={0.1} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <Layers className="text-indigo-400" size={20} />
            System Overview
          </h2>

          <div className="relative">
            {/* Diagram */}
            <div className="flex items-center justify-between gap-4 p-6 bg-[#1a1a1a] rounded-xl">
              {/* Cron Job */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-xl bg-orange-500/20 flex items-center justify-center">
                  <Clock className="text-orange-400" size={32} />
                </div>
                <span className="text-sm text-gray-400">cron-job.org</span>
                <span className="text-xs text-gray-600">Every 4 hours</span>
              </div>

              <ArrowRight className="text-gray-600" size={24} />

              {/* Job APIs */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <Globe className="text-green-400" size={32} />
                </div>
                <span className="text-sm text-gray-400">12 Job Sources</span>
                <span className="text-xs text-gray-600">FREE + API + RapidAPI</span>
              </div>

              <ArrowRight className="text-gray-600" size={24} />

              {/* Railway API */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                  <Server className="text-indigo-400" size={32} />
                </div>
                <span className="text-sm text-gray-400">Railway API</span>
                <span className="text-xs text-gray-600">Express + TypeScript</span>
              </div>

              <ArrowRight className="text-gray-600" size={24} />

              {/* Database */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <Database className="text-purple-400" size={32} />
                </div>
                <span className="text-sm text-gray-400">Supabase</span>
                <span className="text-xs text-gray-600">PostgreSQL</span>
              </div>

              <ArrowRight className="text-gray-600" size={24} />

              {/* Discord */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <Bell className="text-blue-400" size={32} />
                </div>
                <span className="text-sm text-gray-400">Discord</span>
                <span className="text-xs text-gray-600">Notifications</span>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-4 flex items-center gap-2 justify-center text-sm text-gray-500">
              <Cloud size={14} />
              <span>Fully cloud-hosted: Railway (API + Docs) | Vercel (Frontend) | Supabase (DB) | cron-job.org (Scheduler)</span>
            </div>
          </div>
        </Card>

        {/* Job Sources Grid */}
        <Card delay={0.15} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <Globe className="text-green-400" size={20} />
            12 Job Sources (3 Tiers)
          </h2>

          <div className="grid grid-cols-3 gap-4">
            {jobSources.map((tier, index) => (
              <motion.div
                key={tier.category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`p-4 bg-[#1a1a1a] rounded-lg border border-${tier.color}-500/30`}
              >
                <h3 className={`font-medium text-${tier.color}-400 mb-3 flex items-center gap-2`}>
                  {tier.category === 'FREE APIs (No Auth)' && <Zap size={16} />}
                  {tier.category === 'API Key Required' && <Key size={16} />}
                  {tier.category === 'RapidAPI Premium' && <TrendingUp size={16} />}
                  {tier.category}
                </h3>
                <ul className="space-y-1">
                  {tier.sources.map((source) => (
                    <li key={source} className="flex items-center gap-2 text-xs text-gray-400">
                      <span className={`w-1.5 h-1.5 rounded-full bg-${tier.color}-500`} />
                      {source}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Components Grid */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {systemComponents.map((component, index) => (
            <Card key={component.name} delay={0.2 + index * 0.1}>
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-${component.color}-500/20 flex items-center justify-center flex-shrink-0`}>
                  <component.icon className={`text-${component.color}-400`} size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-1">{component.name}</h3>
                  <p className="text-sm text-gray-400 mb-3">{component.description}</p>
                  <ul className="space-y-1">
                    {component.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
                        <span className={`w-1.5 h-1.5 rounded-full bg-${component.color}-500`} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Infrastructure */}
        <Card delay={0.5} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <Cloud className="text-blue-400" size={20} />
            Infrastructure (Cloud)
          </h2>

          <div className="grid grid-cols-3 gap-4">
            {infrastructure.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + index * 0.05 }}
                className="p-4 bg-[#1a1a1a] rounded-lg border border-[#262626]"
              >
                <div className="font-medium text-white mb-1">{item.name}</div>
                <div className="text-xs text-indigo-400 mb-2">{item.tech}</div>
                <div className="text-xs text-gray-500">{item.host}</div>
                <div className="text-xs text-gray-600 mt-1 truncate">{item.url}</div>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Scoring Algorithm */}
        <Card delay={0.6} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <GitBranch className="text-purple-400" size={20} />
            Job Scoring Algorithm
          </h2>

          <p className="text-gray-400 mb-4">
            Each job is scored 0-100 based on how well it matches user profile (minimum threshold: 45):
          </p>

          <div className="grid grid-cols-2 gap-4">
            {scoringFactors.map((factor, index) => (
              <motion.div
                key={factor.factor}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.05 }}
                className="p-4 bg-[#1a1a1a] rounded-lg border border-[#262626]"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-white">{factor.factor}</span>
                  <span className="text-indigo-400 font-mono text-sm">{factor.weight}</span>
                </div>
                <p className="text-sm text-gray-500">{factor.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
            <p className="text-sm text-indigo-400">
              <strong>Match Limits by Plan:</strong> Signal: 30 | Precision: 150 | Executive: 300 | Dev: 1000
            </p>
          </div>
        </Card>

        {/* Database Schema */}
        <Card delay={0.8}>
          <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <HardDrive className="text-green-400" size={20} />
            Database Schema (Supabase PostgreSQL)
          </h2>

          <div className="space-y-4">
            {dbSchema.map((table, index) => (
              <motion.div
                key={table.table}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.05 }}
                className="p-4 bg-[#1a1a1a] rounded-lg border border-[#262626]"
              >
                <h4 className="font-mono text-indigo-400 mb-2">{table.table}</h4>
                <div className="flex flex-wrap gap-2">
                  {table.fields.map((field) => (
                    <span
                      key={field}
                      className="px-2 py-1 bg-[#262626] rounded text-xs text-gray-400 font-mono"
                    >
                      {field}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  );
}
