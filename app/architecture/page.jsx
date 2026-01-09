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
  GitBranch
} from 'lucide-react';
import Navigation from '../../components/Navigation';
import Card from '../../components/Card';

const systemComponents = [
  {
    name: 'Job Scraper Worker',
    icon: Briefcase,
    description: 'Fetches jobs from 6 free APIs every 4 hours',
    details: [
      'RemoteOK, Himalayas, Jobicy',
      'Arbeitnow, WeWorkRemotely, YC Jobs',
      'Profile-based scoring (0-100)',
      'Deduplication by URL',
    ],
    color: 'indigo',
  },
  {
    name: 'Market Scanner Worker',
    icon: TrendingUp,
    description: 'Tracks AI model sentiment across platforms',
    details: [
      'Reddit (Arctic Shift API)',
      'Hacker News (Algolia API)',
      'YouTube (Invidious API)',
      'GitHub (stars, commits)',
    ],
    color: 'purple',
  },
  {
    name: 'PostgreSQL Database',
    icon: Database,
    description: 'Stores jobs, scores, and market data',
    details: [
      'Supabase free tier (500MB)',
      'Prisma ORM for queries',
      'JobListing, ModelRanking tables',
      'ScrapeHistory for tracking',
    ],
    color: 'green',
  },
  {
    name: 'Discord Notifications',
    icon: Bell,
    description: 'Real-time alerts for high-match jobs',
    details: [
      'Webhook integration',
      'Rich embeds with job details',
      '70+ score triggers alert',
      'Daily summary reports',
    ],
    color: 'blue',
  },
];

const dataFlow = [
  { from: 'Job APIs', to: 'Job Scraper', label: 'Fetch every 4h' },
  { from: 'Job Scraper', to: 'Database', label: 'Store & dedupe' },
  { from: 'Database', to: 'Scoring Engine', label: 'Profile match' },
  { from: 'Scoring Engine', to: 'Discord', label: 'Alert if 70+' },
];

const scoringFactors = [
  { factor: 'Title Match', weight: '25%', description: 'Exact match to target job titles' },
  { factor: 'Required Skills', weight: '30%', description: 'Skills you marked as "expert" or "proficient"' },
  { factor: 'Location', weight: '15%', description: 'Remote or in your target countries' },
  { factor: 'Salary Range', weight: '15%', description: 'Meets your minimum expectations' },
  { factor: 'H1B Sponsor', weight: '10%', description: 'Company is known H1B sponsor' },
  { factor: 'Keywords', weight: '5%', description: 'Bonus keywords in description' },
];

const dbSchema = [
  {
    table: 'JobListing',
    fields: ['id', 'title', 'company', 'location', 'salary', 'url', 'score', 'source', 'tags[]', 'createdAt'],
  },
  {
    table: 'JobContact',
    fields: ['id', 'jobId', 'name', 'email', 'linkedin', 'role'],
  },
  {
    table: 'ScrapeHistory',
    fields: ['id', 'source', 'jobsFound', 'newJobs', 'timestamp', 'errors[]'],
  },
  {
    table: 'ModelRanking',
    fields: ['id', 'modelName', 'overallScore', 'sentimentScore', 'momentumScore', 'date'],
  },
  {
    table: 'MarketIntelligence',
    fields: ['id', 'modelName', 'source', 'sentiment', 'mentions', 'timestamp'],
  },
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
            How the job intelligence and market scanning systems work
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
              {/* Your PC */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                  <Cpu className="text-indigo-400" size={32} />
                </div>
                <span className="text-sm text-gray-400">Your PC</span>
                <span className="text-xs text-gray-600">Node.js Workers</span>
              </div>

              <ArrowRight className="text-gray-600" size={24} />

              {/* Job APIs */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <Server className="text-green-400" size={32} />
                </div>
                <span className="text-sm text-gray-400">Job APIs</span>
                <span className="text-xs text-gray-600">6 Free Sources</span>
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
              <Clock size={14} />
              <span>Runs every 4 hours via Windows Task Scheduler</span>
            </div>
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

        {/* Scoring Algorithm */}
        <Card delay={0.6} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <GitBranch className="text-purple-400" size={20} />
            Job Scoring Algorithm
          </h2>

          <p className="text-gray-400 mb-4">
            Each job is scored 0-100 based on how well it matches your profile:
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
              <strong>Discord Alert Threshold:</strong> Jobs scoring 70+ are sent as notifications
            </p>
          </div>
        </Card>

        {/* Database Schema */}
        <Card delay={0.8}>
          <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <HardDrive className="text-green-400" size={20} />
            Database Schema
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
