'use client';

import { motion } from 'framer-motion';
import {
  CheckSquare,
  Square,
  Database,
  Key,
  Terminal,
  Bell,
  Clock,
  Play,
  AlertCircle,
  ExternalLink,
  Copy,
  Check,
  Cloud,
  Server,
  Globe,
  CreditCard
} from 'lucide-react';
import { useState } from 'react';
import Navigation from '../../components/Navigation';
import Card from '../../components/Card';

const infrastructure = [
  { name: 'Frontend', url: 'outreach.hekax.com', host: 'Vercel', status: 'live' },
  { name: 'API', url: 'outreachapi.hekax.com', host: 'Railway', status: 'live' },
  { name: 'Docs', url: 'outreach-docs-production.up.railway.app', host: 'Railway', status: 'live' },
  { name: 'Database', url: 'birknvzytmnphrlwjipq.supabase.co', host: 'Supabase', status: 'live' },
  { name: 'Cron', url: 'cron-job.org', host: 'cron-job.org', status: 'live' },
  { name: 'Payments', url: 'stripe.com', host: 'Stripe', status: 'live' },
];

const envVars = [
  { category: 'Supabase', vars: [
    { name: 'SUPABASE_URL', value: 'https://birknvzytmnphrlwjipq.supabase.co', secret: false },
    { name: 'SUPABASE_ANON_KEY', value: 'eyJ...', secret: true },
    { name: 'SUPABASE_SERVICE_ROLE_KEY', value: 'eyJ...', secret: true },
  ]},
  { category: 'Job Sources', vars: [
    { name: 'ADZUNA_APP_ID', value: 'Your Adzuna app ID', secret: true },
    { name: 'ADZUNA_API_KEY', value: 'Your Adzuna API key', secret: true },
    { name: 'JOOBLE_API_KEY', value: 'Your Jooble API key', secret: true },
    { name: 'RAPIDAPI_KEY', value: 'Your RapidAPI key (optional)', secret: true },
  ]},
  { category: 'Stripe', vars: [
    { name: 'STRIPE_SECRET_KEY', value: 'sk_live_...', secret: true },
    { name: 'STRIPE_WEBHOOK_SECRET', value: 'whsec_...', secret: true },
    { name: 'STRIPE_PRICE_PRECISION', value: 'price_...', secret: false },
    { name: 'STRIPE_PRICE_EXECUTIVE', value: 'price_...', secret: false },
  ]},
  { category: 'Other', vars: [
    { name: 'JWT_SECRET', value: 'Your JWT secret', secret: true },
    { name: 'JOB_INGEST_KEY', value: 'Secret key for cron triggers', secret: true },
    { name: 'ANTHROPIC_API_KEY', value: 'For AI features (optional)', secret: true },
  ]},
];

const cronJobs = [
  { name: 'Global Job Ingest', endpoint: '/api/ingest/jobs/global', schedule: 'Every 4 hours', method: 'POST' },
  { name: 'User Job Matching', endpoint: '/api/ingest/jobs', schedule: 'Every 4 hours', method: 'POST' },
];

export default function SetupPage() {
  const [copiedCommand, setCopiedCommand] = useState(null);

  const copyCommand = (command, index) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(index);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

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
            <span className="text-white">Infrastructure</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Infrastructure & Setup</h1>
          <p className="text-gray-400">
            HEKAX Outreach is fully cloud-hosted - no local setup required
          </p>
        </motion.div>

        {/* Cloud Info Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-4 mb-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
              <Cloud className="text-green-400" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-green-400">Fully Cloud-Hosted</h3>
              <p className="text-sm text-gray-400 mt-1">
                All services are deployed and running 24/7 in the cloud. No local installation or Windows Task Scheduler needed.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Live Services Grid */}
        <Card delay={0.1} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <Globe className="text-indigo-400" size={20} />
            Live Services
          </h2>

          <div className="grid grid-cols-3 gap-4">
            {infrastructure.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.05 }}
                className="p-4 bg-[#1a1a1a] rounded-lg border border-[#262626]"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-white">{service.name}</h3>
                  <span className="flex items-center gap-1 text-xs text-green-400">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Live
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-1">{service.host}</p>
                <a
                  href={`https://${service.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                >
                  {service.url}
                  <ExternalLink size={10} />
                </a>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Environment Variables */}
        <Card delay={0.2} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <Key className="text-yellow-400" size={20} />
            Environment Variables (Railway)
          </h2>

          <p className="text-sm text-gray-400 mb-4">
            These environment variables are configured in Railway for the API service:
          </p>

          <div className="space-y-6">
            {envVars.map((category, catIndex) => (
              <div key={category.category}>
                <h3 className="text-sm font-medium text-gray-400 mb-3">{category.category}</h3>
                <div className="space-y-2">
                  {category.vars.map((envVar, varIndex) => (
                    <motion.div
                      key={envVar.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + catIndex * 0.1 + varIndex * 0.03 }}
                      className="flex items-center gap-2 p-3 bg-[#1a1a1a] rounded-lg border border-[#262626] font-mono text-sm"
                    >
                      <Terminal size={14} className="text-gray-500 flex-shrink-0" />
                      <code className="text-indigo-400">{envVar.name}</code>
                      <span className="text-gray-600">=</span>
                      <code className="flex-1 text-gray-500 truncate">
                        {envVar.secret ? '••••••••' : envVar.value}
                      </code>
                      {envVar.secret && (
                        <span className="text-xs px-2 py-0.5 bg-red-500/20 text-red-400 rounded">secret</span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Cron Jobs */}
        <Card delay={0.3} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <Clock className="text-orange-400" size={20} />
            Scheduled Jobs (cron-job.org)
          </h2>

          <p className="text-sm text-gray-400 mb-4">
            Job ingestion is triggered automatically via cron-job.org HTTP requests:
          </p>

          <div className="space-y-3">
            {cronJobs.map((job, index) => (
              <motion.div
                key={job.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + index * 0.05 }}
                className="p-4 bg-[#1a1a1a] rounded-lg border border-[#262626]"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-white">{job.name}</h3>
                  <span className="text-xs text-orange-400">{job.schedule}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-0.5 bg-indigo-500/20 text-indigo-400 rounded font-mono">
                    {job.method}
                  </span>
                  <code className="text-sm text-gray-400">
                    https://outreachapi.hekax.com{job.endpoint}
                  </code>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Requires header: <code className="text-indigo-400">x-ingest-key: [JOB_INGEST_KEY]</code>
                </p>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Stripe Integration */}
        <Card delay={0.4} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <CreditCard className="text-purple-400" size={20} />
            Stripe Integration
          </h2>

          <div className="space-y-4">
            <div className="p-4 bg-[#1a1a1a] rounded-lg border border-[#262626]">
              <h3 className="font-medium text-white mb-2">Webhook Endpoint</h3>
              <code className="text-sm text-indigo-400">
                https://outreachapi.hekax.com/api/billing/webhook
              </code>
              <p className="text-xs text-gray-500 mt-2">
                Events: checkout.session.completed, customer.subscription.updated, customer.subscription.deleted
              </p>
            </div>

            <div className="p-4 bg-[#1a1a1a] rounded-lg border border-[#262626]">
              <h3 className="font-medium text-white mb-2">Pricing Tiers</h3>
              <div className="grid grid-cols-3 gap-4 mt-3">
                <div className="text-center p-3 bg-gray-500/10 rounded-lg">
                  <p className="text-lg font-bold text-white">Signal</p>
                  <p className="text-gray-400">Free</p>
                  <p className="text-xs text-gray-500 mt-1">30 matches/day</p>
                </div>
                <div className="text-center p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
                  <p className="text-lg font-bold text-indigo-400">Precision</p>
                  <p className="text-gray-400">$39/mo</p>
                  <p className="text-xs text-gray-500 mt-1">150 matches/day</p>
                </div>
                <div className="text-center p-3 bg-purple-500/10 rounded-lg border border-purple-500/30">
                  <p className="text-lg font-bold text-purple-400">Executive</p>
                  <p className="text-gray-400">$89/mo</p>
                  <p className="text-xs text-gray-500 mt-1">300 matches/day</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Local Development */}
        <Card delay={0.5}>
          <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <Terminal className="text-green-400" size={20} />
            Local Development (Optional)
          </h2>

          <p className="text-sm text-gray-400 mb-4">
            For local development, clone the repo and set up environment variables:
          </p>

          <div className="space-y-3">
            {[
              'git clone https://github.com/hekax/outreach.git',
              'cd outreach/hekax-outreach/apps/api',
              'cp .env.example .env  # Fill in your values',
              'npm install',
              'npm run dev  # Starts on localhost:3001',
            ].map((command, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55 + index * 0.05 }}
                className="flex items-center gap-2 p-3 bg-[#1a1a1a] rounded-lg border border-[#262626] font-mono text-sm"
              >
                <Terminal size={14} className="text-gray-500 flex-shrink-0" />
                <code className="flex-1 text-indigo-400">
                  {command}
                </code>
                <button
                  onClick={() => copyCommand(command, index)}
                  className="text-gray-500 hover:text-white transition-colors flex-shrink-0"
                >
                  {copiedCommand === index ? (
                    <Check size={16} className="text-green-400" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <p className="text-sm text-blue-400">
              <strong>Note:</strong> The web app (apps/web) runs on Vite and connects to the API.
              Start it with <code className="bg-blue-500/20 px-1 rounded">npm run dev</code> in the web folder.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
