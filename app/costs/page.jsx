'use client';

import { motion } from 'framer-motion';
import {
  DollarSign,
  Server,
  Database,
  Cpu,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Zap,
  TrendingDown
} from 'lucide-react';
import Navigation from '../../components/Navigation';
import Card from '../../components/Card';

const deploymentOptions = [
  {
    name: 'Railway Full Deploy',
    monthlyCost: '$12-15',
    setup: 'Easy',
    recommended: false,
    pros: [
      'Always running',
      'No local setup needed',
      'Professional hosting',
    ],
    cons: [
      'PostgreSQL alone is $5/month',
      'Workers add $7-10/month',
      'Exceeds budget',
    ],
    breakdown: [
      { item: 'PostgreSQL', cost: '$5' },
      { item: 'Job Worker', cost: '$3-5' },
      { item: 'Market Worker', cost: '$3-5' },
      { item: 'Docs Site', cost: '$0 (hobby)' },
    ],
  },
  {
    name: 'Hybrid (Recommended)',
    monthlyCost: '$0',
    setup: 'Medium',
    recommended: true,
    pros: [
      'Completely free',
      'More aggressive scraping',
      'Full control',
      'Can run whenever PC is on',
    ],
    cons: [
      'Needs PC to be on',
      'Initial setup required',
      'Manual scheduling',
    ],
    breakdown: [
      { item: 'Supabase DB', cost: 'Free (500MB)' },
      { item: 'Workers (local)', cost: '$0' },
      { item: 'Discord Webhook', cost: 'Free' },
      { item: 'Docs Site', cost: 'Free (Vercel/Railway hobby)' },
    ],
  },
  {
    name: 'Supabase + Railway Workers',
    monthlyCost: '$7-10',
    setup: 'Medium',
    recommended: false,
    pros: [
      'Free database',
      'Always running workers',
    ],
    cons: [
      'Still costs $7-10/month',
      'Over budget',
    ],
    breakdown: [
      { item: 'Supabase DB', cost: 'Free' },
      { item: 'Job Worker', cost: '$3-5' },
      { item: 'Market Worker', cost: '$3-5' },
    ],
  },
];

const freeServices = [
  { service: 'Supabase', what: 'PostgreSQL database', limit: '500MB storage, 2GB bandwidth' },
  { service: 'Discord Webhook', what: 'Notifications', limit: 'Unlimited messages' },
  { service: 'RemoteOK API', what: 'Job listings', limit: 'No rate limit documented' },
  { service: 'Himalayas API', what: 'Job listings', limit: 'Free tier available' },
  { service: 'Jobicy API', what: 'Job listings', limit: 'Free public API' },
  { service: 'Arbeitnow API', what: 'Job listings', limit: 'Free public API' },
  { service: 'Reddit Arctic Shift', what: 'Reddit archives', limit: 'Free academic API' },
  { service: 'HN Algolia', what: 'Hacker News search', limit: '10K requests/hour' },
  { service: 'GitHub API', what: 'Repo stats', limit: '60 requests/hour (no auth)' },
];

const budgetComparison = [
  { scenario: 'Your Budget', amount: '$5/month', notes: 'Current Railway plan' },
  { scenario: 'Railway Full', amount: '$12-15/month', notes: '2-3x over budget' },
  { scenario: 'Hybrid (Local)', amount: '$0/month', notes: 'Saves $5/month' },
];

export default function CostsPage() {
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
            <span className="text-white">Cost Analysis</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Cost Analysis</h1>
          <p className="text-gray-400">
            Why running locally saves money and gives you more control
          </p>
        </motion.div>

        {/* Budget Alert */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-4 mb-8 flex items-center gap-4"
        >
          <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
            <TrendingDown className="text-green-400" size={20} />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-green-400">Recommended: Run Locally</h3>
            <p className="text-sm text-gray-400">
              With a $5/month budget, running workers on your PC saves $7-15/month and allows more aggressive scraping.
            </p>
          </div>
          <span className="text-2xl font-bold text-green-400">$0/mo</span>
        </motion.div>

        {/* Deployment Options */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {deploymentOptions.map((option, index) => (
            <Card
              key={option.name}
              delay={0.1 + index * 0.1}
              className={option.recommended ? 'ring-2 ring-green-500/50' : ''}
            >
              {option.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                  Recommended
                </div>
              )}

              <div className="text-center mb-4">
                <h3 className="font-semibold text-white mb-2">{option.name}</h3>
                <p className="text-3xl font-bold text-white">{option.monthlyCost}</p>
                <p className="text-sm text-gray-500">per month</p>
              </div>

              <div className="mb-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Setup Difficulty</p>
                <span className={`text-sm px-2 py-1 rounded ${
                  option.setup === 'Easy' ? 'bg-green-500/20 text-green-400' :
                  option.setup === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {option.setup}
                </span>
              </div>

              <div className="mb-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Pros</p>
                <ul className="space-y-1">
                  {option.pros.map((pro, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle2 size={14} className="text-green-400" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Cons</p>
                <ul className="space-y-1">
                  {option.cons.map((con, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                      <XCircle size={14} className="text-red-400" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#262626]">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Cost Breakdown</p>
                <ul className="space-y-1">
                  {option.breakdown.map((item, i) => (
                    <li key={i} className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">{item.item}</span>
                      <span className="text-white font-mono">{item.cost}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Budget Comparison */}
        <Card delay={0.4} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <DollarSign className="text-yellow-400" size={20} />
            Budget Comparison
          </h2>

          <div className="overflow-hidden rounded-lg border border-[#262626]">
            <table className="w-full">
              <thead className="bg-[#1a1a1a]">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Scenario</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Monthly Cost</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Notes</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#262626]">
                {budgetComparison.map((row, index) => (
                  <tr key={row.scenario} className="bg-[#141414]">
                    <td className="px-4 py-3 text-sm text-white">{row.scenario}</td>
                    <td className="px-4 py-3 text-sm font-mono text-white">{row.amount}</td>
                    <td className="px-4 py-3 text-sm text-gray-400">{row.notes}</td>
                    <td className="px-4 py-3">
                      {index === 0 ? (
                        <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-400">Current</span>
                      ) : index === 1 ? (
                        <span className="text-xs px-2 py-1 rounded bg-red-500/20 text-red-400">Over Budget</span>
                      ) : (
                        <span className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-400">Saves Money</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Free Services */}
        <Card delay={0.5}>
          <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <Zap className="text-purple-400" size={20} />
            Free Services We Use
          </h2>

          <div className="grid grid-cols-3 gap-4">
            {freeServices.map((service, index) => (
              <motion.div
                key={service.service}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.03 }}
                className="p-4 bg-[#1a1a1a] rounded-lg border border-[#262626]"
              >
                <h4 className="font-medium text-white mb-1">{service.service}</h4>
                <p className="text-sm text-gray-400 mb-2">{service.what}</p>
                <span className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-400">
                  {service.limit}
                </span>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 p-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl"
        >
          <h3 className="font-semibold text-white mb-2">Bottom Line</h3>
          <p className="text-gray-400">
            Running the workers on your PC costs <strong className="text-green-400">$0/month</strong> and lets you scrape more aggressively without worrying about Railway usage limits.
            The only cloud service you need is <strong className="text-indigo-400">Supabase</strong> (free tier: 500MB) for the database.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
