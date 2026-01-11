'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Calculator,
  PieChart,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Server,
  Brain,
  Database,
  Globe,
  Bell,
  Users,
  Zap
} from 'lucide-react';
import Navigation from '../../../../components/Navigation';
import Card from '../../../../components/Card';

const localCosts = [
  {
    service: 'Claude Pro Subscription',
    provider: 'Anthropic',
    usage: 'AI interviews, analysis, CV generation',
    monthly: 20.00,
    notes: 'Using CLI with subscription, not API',
    category: 'AI',
  },
  {
    service: 'OpenAI Embeddings',
    provider: 'OpenAI',
    usage: 'text-embedding-3-large (3072 dim)',
    monthly: 0.13,
    notes: '~1M tokens/month @ $0.13/1M',
    category: 'AI',
  },
  {
    service: 'Railway Hosting',
    provider: 'Railway',
    usage: 'Python backend hosting',
    monthly: 5.00,
    notes: 'Hobby plan with $5 credit',
    category: 'Infrastructure',
  },
  {
    service: 'Supabase',
    provider: 'Supabase',
    usage: 'PostgreSQL + pgvector',
    monthly: 0.00,
    notes: 'Free tier (500MB, 50K MAU)',
    category: 'Infrastructure',
  },
  {
    service: 'Adzuna API',
    provider: 'Adzuna',
    usage: 'Job aggregation (16 countries)',
    monthly: 0.00,
    notes: 'Free tier: 250 calls/day',
    category: 'Data',
  },
  {
    service: 'Jooble API',
    provider: 'Jooble',
    usage: 'Job aggregation (60+ countries)',
    monthly: 0.00,
    notes: 'Free (affiliate model)',
    category: 'Data',
  },
  {
    service: 'Discord Webhook',
    provider: 'Discord',
    usage: 'Job match notifications',
    monthly: 0.00,
    notes: 'Free with Discord account',
    category: 'Notifications',
  },
];

const saasCosts = [
  {
    service: 'Claude API',
    provider: 'Anthropic',
    usage: 'AI operations (per-user)',
    monthly: 0.15,
    notes: '$0.015/1K input, $0.075/1K output (Sonnet)',
    perUser: true,
    category: 'AI',
  },
  {
    service: 'OpenAI Embeddings',
    provider: 'OpenAI',
    usage: 'Semantic matching',
    monthly: 0.05,
    notes: 'Per-user embedding operations',
    perUser: true,
    category: 'AI',
  },
  {
    service: 'Railway Pro',
    provider: 'Railway',
    usage: 'Backend + Auto-scaling',
    monthly: 20.00,
    notes: 'Pro plan for production',
    perUser: false,
    category: 'Infrastructure',
  },
  {
    service: 'Supabase Pro',
    provider: 'Supabase',
    usage: 'PostgreSQL + Auth + Storage',
    monthly: 25.00,
    notes: '8GB database, 100K MAU',
    perUser: false,
    category: 'Infrastructure',
  },
  {
    service: 'Clerk',
    provider: 'Clerk',
    usage: 'Authentication',
    monthly: 0.02,
    notes: '$0.02/MAU after 10K free',
    perUser: true,
    category: 'Infrastructure',
  },
  {
    service: 'Stripe',
    provider: 'Stripe',
    usage: 'Payment processing',
    monthly: 1.17,
    notes: '2.9% + $0.30 per transaction',
    perUser: true,
    category: 'Infrastructure',
  },
  {
    service: 'SendGrid',
    provider: 'Twilio',
    usage: 'Transactional email',
    monthly: 0.00,
    notes: 'Free tier: 100 emails/day',
    perUser: false,
    category: 'Notifications',
  },
  {
    service: 'Job APIs',
    provider: 'Adzuna + Jooble',
    usage: 'Job aggregation',
    monthly: 0.00,
    notes: 'Free tiers sufficient for scale',
    perUser: false,
    category: 'Data',
  },
];

const pricingTierMargins = [
  {
    tier: 'Starter',
    price: 19,
    aiCost: 0.20,
    infraShare: 0.05,
    stripeFee: 0.85,
    totalCost: 1.10,
    profit: 17.90,
    margin: 94.2,
  },
  {
    tier: 'Professional',
    price: 39,
    aiCost: 0.50,
    infraShare: 0.10,
    stripeFee: 1.43,
    totalCost: 2.03,
    profit: 36.97,
    margin: 94.8,
  },
  {
    tier: 'Executive',
    price: 59,
    aiCost: 1.00,
    infraShare: 0.15,
    stripeFee: 2.01,
    totalCost: 3.16,
    profit: 55.84,
    margin: 94.6,
  },
];

const competitorPricing = [
  { name: 'JobHunter Pro', price: '$19-59/mo', features: 'Full AI suite', margin: '~94%' },
  { name: 'Teal', price: '$29/mo', features: 'Resume + tracking', margin: '~70%' },
  { name: 'Huntr', price: '$40/mo', features: 'Kanban + resume', margin: '~75%' },
  { name: 'Jobscan', price: '$49.95/mo', features: 'ATS optimization', margin: '~80%' },
  { name: 'Careerflow', price: '$19.99/mo', features: 'LinkedIn + tracking', margin: '~65%' },
];

const scalingProjections = [
  { users: 100, fixedCosts: 45, variableCosts: 15, revenue: 3500, profit: 3440, margin: 98.3 },
  { users: 500, fixedCosts: 45, variableCosts: 75, revenue: 17500, profit: 17380, margin: 99.3 },
  { users: 1000, fixedCosts: 75, variableCosts: 150, revenue: 35000, profit: 34775, margin: 99.4 },
  { users: 5000, fixedCosts: 150, variableCosts: 750, revenue: 175000, profit: 174100, margin: 99.5 },
  { users: 10000, fixedCosts: 300, variableCosts: 1500, revenue: 350000, profit: 348200, margin: 99.5 },
];

export default function CostsPage() {
  const localTotal = localCosts.reduce((sum, c) => sum + c.monthly, 0);
  const saasFixed = saasCosts.filter(c => !c.perUser).reduce((sum, c) => sum + c.monthly, 0);
  const saasPerUser = saasCosts.filter(c => c.perUser).reduce((sum, c) => sum + c.monthly, 0);

  return (
    <div className="min-h-screen flex">
      <Navigation />

      <main className="flex-1 ml-72 p-8 bg-[#0a0a0a]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/research/jobhunter" className="hover:text-white">Documentation</Link>
            <span>/</span>
            <span className="text-purple-400">Cost Analysis</span>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <DollarSign className="text-white" size={28} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Cost Analysis</h1>
              <p className="text-gray-400 max-w-2xl">
                Complete breakdown of operational costs for both local personal use and SaaS deployment.
                All prices verified as of January 2026.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Summary Cards */}
        <div className="grid grid-cols-4 gap-4 mb-10">
          <Card delay={0.1}>
            <div className="text-center">
              <p className="text-xs text-gray-500 uppercase mb-2">Local Monthly</p>
              <p className="text-3xl font-bold text-green-400">${localTotal.toFixed(2)}</p>
              <p className="text-xs text-gray-500 mt-1">Personal use</p>
            </div>
          </Card>
          <Card delay={0.15}>
            <div className="text-center">
              <p className="text-xs text-gray-500 uppercase mb-2">SaaS Fixed</p>
              <p className="text-3xl font-bold text-blue-400">${saasFixed.toFixed(2)}</p>
              <p className="text-xs text-gray-500 mt-1">Base infrastructure</p>
            </div>
          </Card>
          <Card delay={0.2}>
            <div className="text-center">
              <p className="text-xs text-gray-500 uppercase mb-2">Per User</p>
              <p className="text-3xl font-bold text-purple-400">${saasPerUser.toFixed(2)}</p>
              <p className="text-xs text-gray-500 mt-1">Variable cost</p>
            </div>
          </Card>
          <Card delay={0.25}>
            <div className="text-center">
              <p className="text-xs text-gray-500 uppercase mb-2">Target Margin</p>
              <p className="text-3xl font-bold text-yellow-400">94%+</p>
              <p className="text-xs text-gray-500 mt-1">All tiers</p>
            </div>
          </Card>
        </div>

        {/* Phase I Local Costs */}
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Server className="text-green-400" size={24} />
          Phase I: Local Personal Use
        </h2>
        <p className="text-gray-400 mb-6">
          Minimal costs for personal job hunting. The biggest expense is the Claude Pro subscription which you likely already have.
        </p>

        <Card delay={0.3} className="mb-10">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#262626]">
                  <th className="text-left py-3 text-sm font-medium text-gray-400">Service</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-400">Provider</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-400">Usage</th>
                  <th className="text-right py-3 text-sm font-medium text-gray-400">Monthly</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-400">Notes</th>
                </tr>
              </thead>
              <tbody>
                {localCosts.map((cost) => (
                  <tr key={cost.service} className="border-b border-[#262626]/50">
                    <td className="py-3 text-sm text-white font-medium">{cost.service}</td>
                    <td className="py-3 text-sm text-gray-400">{cost.provider}</td>
                    <td className="py-3 text-sm text-gray-400">{cost.usage}</td>
                    <td className="py-3 text-sm text-right">
                      <span className={cost.monthly === 0 ? 'text-green-400' : 'text-white'}>
                        ${cost.monthly.toFixed(2)}
                      </span>
                    </td>
                    <td className="py-3 text-xs text-gray-500">{cost.notes}</td>
                  </tr>
                ))}
                <tr className="bg-green-500/10">
                  <td colSpan={3} className="py-3 text-sm font-bold text-white">Total Monthly Cost</td>
                  <td className="py-3 text-sm text-right font-bold text-green-400">${localTotal.toFixed(2)}</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Phase IV SaaS Costs */}
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Users className="text-blue-400" size={24} />
          Phase IV: SaaS Production Costs
        </h2>
        <p className="text-gray-400 mb-6">
          Costs scale with users. Fixed infrastructure costs remain low while per-user costs are minimal.
        </p>

        <Card delay={0.4} className="mb-10">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#262626]">
                  <th className="text-left py-3 text-sm font-medium text-gray-400">Service</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-400">Provider</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-400">Type</th>
                  <th className="text-right py-3 text-sm font-medium text-gray-400">Cost</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-400">Notes</th>
                </tr>
              </thead>
              <tbody>
                {saasCosts.map((cost) => (
                  <tr key={cost.service} className="border-b border-[#262626]/50">
                    <td className="py-3 text-sm text-white font-medium">{cost.service}</td>
                    <td className="py-3 text-sm text-gray-400">{cost.provider}</td>
                    <td className="py-3 text-sm">
                      <span className={`px-2 py-0.5 rounded text-xs ${
                        cost.perUser ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {cost.perUser ? 'Per User' : 'Fixed'}
                      </span>
                    </td>
                    <td className="py-3 text-sm text-right">
                      <span className={cost.monthly === 0 ? 'text-green-400' : 'text-white'}>
                        ${cost.monthly.toFixed(2)}{cost.perUser ? '/user' : '/mo'}
                      </span>
                    </td>
                    <td className="py-3 text-xs text-gray-500">{cost.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Margin Analysis */}
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <PieChart className="text-purple-400" size={24} />
          Profit Margin by Tier
        </h2>
        <p className="text-gray-400 mb-6">
          All tiers maintain 94%+ profit margins thanks to minimal per-user costs and efficient infrastructure.
        </p>

        <Card delay={0.5} className="mb-10">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#262626]">
                  <th className="text-left py-3 text-sm font-medium text-gray-400">Tier</th>
                  <th className="text-right py-3 text-sm font-medium text-gray-400">Price</th>
                  <th className="text-right py-3 text-sm font-medium text-gray-400">AI Cost</th>
                  <th className="text-right py-3 text-sm font-medium text-gray-400">Infra</th>
                  <th className="text-right py-3 text-sm font-medium text-gray-400">Stripe</th>
                  <th className="text-right py-3 text-sm font-medium text-gray-400">Total Cost</th>
                  <th className="text-right py-3 text-sm font-medium text-gray-400">Profit</th>
                  <th className="text-right py-3 text-sm font-medium text-gray-400">Margin</th>
                </tr>
              </thead>
              <tbody>
                {pricingTierMargins.map((tier) => (
                  <tr key={tier.tier} className="border-b border-[#262626]/50">
                    <td className="py-3 text-sm text-white font-medium">{tier.tier}</td>
                    <td className="py-3 text-sm text-right text-white">${tier.price}</td>
                    <td className="py-3 text-sm text-right text-gray-400">${tier.aiCost.toFixed(2)}</td>
                    <td className="py-3 text-sm text-right text-gray-400">${tier.infraShare.toFixed(2)}</td>
                    <td className="py-3 text-sm text-right text-gray-400">${tier.stripeFee.toFixed(2)}</td>
                    <td className="py-3 text-sm text-right text-red-400">${tier.totalCost.toFixed(2)}</td>
                    <td className="py-3 text-sm text-right text-green-400 font-bold">${tier.profit.toFixed(2)}</td>
                    <td className="py-3 text-sm text-right">
                      <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded font-bold">
                        {tier.margin.toFixed(1)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Scaling Projections */}
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <TrendingUp className="text-green-400" size={24} />
          Scaling Economics
        </h2>
        <p className="text-gray-400 mb-6">
          As user count grows, margins improve due to fixed cost dilution. Even at 100 users, we're highly profitable.
        </p>

        <Card delay={0.6} className="mb-10">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#262626]">
                  <th className="text-right py-3 text-sm font-medium text-gray-400">Users</th>
                  <th className="text-right py-3 text-sm font-medium text-gray-400">Fixed Costs</th>
                  <th className="text-right py-3 text-sm font-medium text-gray-400">Variable</th>
                  <th className="text-right py-3 text-sm font-medium text-gray-400">Revenue</th>
                  <th className="text-right py-3 text-sm font-medium text-gray-400">Profit</th>
                  <th className="text-right py-3 text-sm font-medium text-gray-400">Margin</th>
                </tr>
              </thead>
              <tbody>
                {scalingProjections.map((row) => (
                  <tr key={row.users} className="border-b border-[#262626]/50">
                    <td className="py-3 text-sm text-right text-white font-medium">{row.users.toLocaleString()}</td>
                    <td className="py-3 text-sm text-right text-gray-400">${row.fixedCosts}</td>
                    <td className="py-3 text-sm text-right text-gray-400">${row.variableCosts}</td>
                    <td className="py-3 text-sm text-right text-blue-400">${row.revenue.toLocaleString()}</td>
                    <td className="py-3 text-sm text-right text-green-400 font-bold">${row.profit.toLocaleString()}</td>
                    <td className="py-3 text-sm text-right">
                      <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded">
                        {row.margin.toFixed(1)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Competitor Comparison */}
        <Card delay={0.7} className="mb-10 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 border-purple-500/20">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <BarChart3 className="text-purple-400" size={20} />
            Competitor Margin Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#262626]">
                  <th className="text-left py-3 text-sm font-medium text-gray-400">Product</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-400">Price</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-400">Features</th>
                  <th className="text-right py-3 text-sm font-medium text-gray-400">Est. Margin</th>
                </tr>
              </thead>
              <tbody>
                {competitorPricing.map((comp, i) => (
                  <tr key={comp.name} className={`border-b border-[#262626]/50 ${i === 0 ? 'bg-green-500/5' : ''}`}>
                    <td className="py-3 text-sm text-white font-medium">
                      {comp.name}
                      {i === 0 && <span className="ml-2 text-xs text-green-400">(Us)</span>}
                    </td>
                    <td className="py-3 text-sm text-gray-400">{comp.price}</td>
                    <td className="py-3 text-sm text-gray-400">{comp.features}</td>
                    <td className="py-3 text-sm text-right">
                      <span className={`px-2 py-0.5 rounded ${
                        i === 0 ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {comp.margin}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Our high margins come from using Claude CLI (subscription) during local phase and minimal per-user costs in SaaS.
            Most competitors rely on more expensive AI APIs without optimization.
          </p>
        </Card>

        {/* Key Insights */}
        <Card delay={0.8} className="bg-gradient-to-r from-green-500/5 to-emerald-500/5 border-green-500/20">
          <h2 className="text-lg font-semibold text-white mb-4">Key Cost Insights</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-green-400 mb-2">Cost Advantages</h4>
              <ul className="space-y-2">
                {[
                  'Claude CLI uses subscription, not per-token API costs',
                  'Free job APIs (Adzuna, Jooble) eliminate data costs',
                  'Supabase free tier sufficient for local use',
                  'Railway\'s usage-based pricing keeps hosting minimal',
                  'No expensive ML infrastructure needed',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-blue-400 mb-2">SaaS Optimization</h4>
              <ul className="space-y-2">
                {[
                  'Per-user costs under $2 at highest tier',
                  'Fixed costs diluted across user base',
                  'Claude Sonnet for SaaS (cheaper than Opus)',
                  'Batch processing reduces API calls',
                  'Caching reduces redundant operations',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-10 pt-6 border-t border-[#262626] text-center"
        >
          <p className="text-sm text-gray-500">
            Cost Analysis | Prices verified January 10, 2026 | All figures in USD
          </p>
        </motion.div>
      </main>
    </div>
  );
}
