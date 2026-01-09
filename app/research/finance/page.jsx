'use client';

import { motion } from 'framer-motion';
import {
  DollarSign,
  TrendingUp,
  Calculator,
  PieChart,
  Users,
  Briefcase,
  CheckCircle2,
  AlertTriangle,
  Target,
  Zap,
  Server,
  Shield
} from 'lucide-react';
import Navigation from '../../../components/Navigation';
import Card from '../../../components/Card';

// All costs verified January 2026
const infrastructureCosts = {
  fixed: [
    { item: 'Railway Hobby Plan', cost: 5, unit: '/mo', notes: 'Includes $5 credits, PostgreSQL, basic hosting' },
    { item: 'Supabase Auth (Free)', cost: 0, unit: '/mo', notes: '50,000 MAU free tier' },
    { item: 'Adzuna API (Free)', cost: 0, unit: '/mo', notes: '250 calls/day = 7,500/month' },
    { item: 'Jooble API (Free)', cost: 0, unit: '/mo', notes: 'Unlimited (affiliate model)' },
    { item: 'Inngest (Free)', cost: 0, unit: '/mo', notes: '25,000 steps/month free' },
    { item: 'Domain', cost: 1, unit: '/mo', notes: '~$12/year for .com' },
  ],
  perUser: [
    { item: 'GPT-4o Mini (job matching)', cost: 0.002, unit: '/user/mo', notes: '~2,000 tokens/user/day' },
    { item: 'Stripe fees on $19 plan', cost: 0.85, unit: '/transaction', notes: '2.9% + $0.30' },
    { item: 'Stripe fees on $59 plan', cost: 2.01, unit: '/transaction', notes: '2.9% + $0.30' },
  ],
  autoTier: [
    { item: '2Captcha (Auto tier only)', cost: 0.003, unit: '/captcha', notes: '$3/1000 reCAPTCHA solves' },
    { item: 'Bright Data proxies', cost: 0.01, unit: '/job apply', notes: '~10MB per application = $0.05-0.10' },
  ],
};

const competitorPricing = [
  { name: 'LinkedIn Premium Career', price: '$29.99/mo', features: 'InMail, Who Viewed, Insights', jobs: 'Unlimited browsing' },
  { name: 'Jobscan', price: '$89.97/quarter (~$30/mo)', features: 'Resume optimization, ATS scan', jobs: 'Unlimited scans' },
  { name: 'Teal+', price: '$9/week (~$36/mo)', features: 'Resume builder, job tracking', jobs: 'Unlimited' },
  { name: 'LazyApply', price: '$99/mo', features: 'Auto-apply LinkedIn, Indeed', jobs: 'Unlimited auto-apply' },
  { name: 'Sonara.ai', price: '$19-49/mo', features: 'AI job matching, auto-apply', jobs: '50-unlimited' },
];

const pricingTiers = {
  ship: {
    name: 'Ship Plan',
    price: 19,
    jobsPerDay: 25,
    features: [
      'Up to 25 matched jobs/day',
      'Daily email digest',
      'Resume template per job title',
      'Guided apply (embedded browser)',
      'Auto-fill form fields',
      'Application tracking',
      'Visa sponsorship detection',
    ],
    targetUser: 'Job seekers who want control',
  },
  auto: {
    name: 'Auto Plan',
    price: 59,
    jobsPerDay: 50,
    autoApplyPerDay: 15,
    features: [
      'Up to 50 matched jobs/day',
      'Up to 15 auto-applies/day',
      'Daily summary email with screenshots',
      'Priority job matching',
      'Advanced resume tailoring',
      'Follow-up reminders',
      'Everything in Ship plan',
    ],
    targetUser: 'Busy professionals, urgent job search',
  },
};

// Unit economics calculation
const calculateUnitEconomics = (users) => {
  const ship = {
    revenue: 19,
    stripe: 0.85,
    ai: 0.06, // 30 days * $0.002
    infra: 6 / Math.max(users, 100), // Fixed costs spread
    cogs: 0,
  };
  ship.cogs = ship.stripe + ship.ai + ship.infra;
  ship.margin = ship.revenue - ship.cogs;
  ship.marginPercent = (ship.margin / ship.revenue * 100).toFixed(1);

  const auto = {
    revenue: 59,
    stripe: 2.01,
    ai: 0.12, // More AI for resume tailoring
    captcha: 0.45, // 15 applies/day * 30 days * $0.003 / 3 (not all need captcha)
    proxy: 1.50, // 15 applies/day * 30 days * $0.003 avg
    infra: 6 / Math.max(users, 100),
    cogs: 0,
  };
  auto.cogs = auto.stripe + auto.ai + auto.captcha + auto.proxy + auto.infra;
  auto.margin = auto.revenue - auto.cogs;
  auto.marginPercent = (auto.margin / auto.revenue * 100).toFixed(1);

  return { ship, auto };
};

const projections = [
  { users: 100, mix: '70/30', mrr: 100 * 0.7 * 19 + 100 * 0.3 * 59, arr: 0 },
  { users: 500, mix: '70/30', mrr: 500 * 0.7 * 19 + 500 * 0.3 * 59, arr: 0 },
  { users: 1000, mix: '60/40', mrr: 1000 * 0.6 * 19 + 1000 * 0.4 * 59, arr: 0 },
  { users: 5000, mix: '50/50', mrr: 5000 * 0.5 * 19 + 5000 * 0.5 * 59, arr: 0 },
  { users: 10000, mix: '50/50', mrr: 10000 * 0.5 * 19 + 10000 * 0.5 * 59, arr: 0 },
];
projections.forEach(p => p.arr = p.mrr * 12);

const scalingCosts = [
  { phase: '0-500 users', hosting: 5, db: 0, workers: 0, total: 5, notes: 'Railway free tier' },
  { phase: '500-2k users', hosting: 20, db: 10, workers: 25, total: 55, notes: 'Railway Pro, Inngest Pro' },
  { phase: '2k-5k users', hosting: 50, db: 25, workers: 50, total: 125, notes: 'Multiple instances' },
  { phase: '5k-10k users', hosting: 100, db: 50, workers: 100, total: 250, notes: 'Dedicated resources' },
  { phase: '10k+ users', hosting: 300, db: 100, workers: 200, total: 600, notes: 'AWS/GCP migration' },
];

const breakEvenAnalysis = {
  fixedCosts: 6, // Railway $5 + Domain $1
  shipContribution: 17.09, // After Stripe + AI
  autoContribution: 54.92, // After all variable costs
  breakEvenUsers: 1, // Just 1 paying user covers fixed costs!
};

export default function FinanceResearchPage() {
  const economics = calculateUnitEconomics(1000);

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
            <span>Research</span>
            <span>/</span>
            <span className="text-white">Finance & Pricing</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Financial Analysis & Pricing Strategy - January 2026
          </h1>
          <p className="text-gray-400">
            Unit economics, profit margins, and optimal pricing for Outreach SaaS
          </p>
        </motion.div>

        {/* Key Metrics Banner */}
        <Card delay={0.1} className="mb-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20">
          <div className="grid grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">{economics.ship.marginPercent}%</div>
              <div className="text-sm text-gray-400">Ship Margin</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">{economics.auto.marginPercent}%</div>
              <div className="text-sm text-gray-400">Auto Margin</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400">$6</div>
              <div className="text-sm text-gray-400">Fixed Costs/mo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">1</div>
              <div className="text-sm text-gray-400">Break-even Users</div>
            </div>
          </div>
        </Card>

        {/* Competitor Analysis */}
        <Card delay={0.15} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Target className="text-red-400" size={20} />
            Competitor Pricing (January 2026)
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#262626]">
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Competitor</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Price</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Features</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Jobs</th>
                </tr>
              </thead>
              <tbody>
                {competitorPricing.map((comp) => (
                  <tr key={comp.name} className="border-b border-[#262626]/50">
                    <td className="py-3 text-sm text-white">{comp.name}</td>
                    <td className="py-3 text-sm text-yellow-400 font-medium">{comp.price}</td>
                    <td className="py-3 text-sm text-gray-400">{comp.features}</td>
                    <td className="py-3 text-sm text-gray-500">{comp.jobs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
            <p className="text-sm text-indigo-400">
              <strong>Our Position:</strong> $19 Ship (below LazyApply/Sonara) and $59 Auto (competitive with full automation)
              offers strong value while maintaining healthy margins.
            </p>
          </div>
        </Card>

        {/* Recommended Pricing Tiers */}
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <DollarSign className="text-green-400" size={24} />
          Recommended Pricing Tiers
        </h2>

        <div className="grid grid-cols-2 gap-6 mb-8">
          {Object.values(pricingTiers).map((tier, index) => (
            <Card key={tier.name} delay={0.2 + index * 0.1} className={
              tier.name === 'Auto Plan' ? 'ring-2 ring-purple-500/50' : ''
            }>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
                  <p className="text-xs text-gray-500">{tier.targetUser}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-400">${tier.price}</div>
                  <div className="text-xs text-gray-500">/month</div>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="p-3 bg-[#1a1a1a] rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Jobs delivered/day</span>
                    <span className="text-lg font-bold text-indigo-400">{tier.jobsPerDay}</span>
                  </div>
                </div>
                {tier.autoApplyPerDay && (
                  <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-purple-400">Auto-applies/day</span>
                      <span className="text-lg font-bold text-purple-400">{tier.autoApplyPerDay}</span>
                    </div>
                  </div>
                )}
              </div>

              <ul className="space-y-2">
                {tier.features.map((f, i) => (
                  <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Infrastructure Costs */}
        <Card delay={0.3} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Server className="text-blue-400" size={20} />
            Infrastructure Costs (January 2026 Verified)
          </h2>

          <div className="grid grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm font-medium text-green-400 mb-3">Fixed Monthly Costs</h4>
              <div className="space-y-2">
                {infrastructureCosts.fixed.map((item) => (
                  <div key={item.item} className="flex justify-between p-2 bg-[#1a1a1a] rounded">
                    <div>
                      <span className="text-sm text-white">{item.item}</span>
                      <span className="text-xs text-gray-500 block">{item.notes}</span>
                    </div>
                    <span className={`text-sm font-medium ${item.cost === 0 ? 'text-green-400' : 'text-yellow-400'}`}>
                      {item.cost === 0 ? 'FREE' : `$${item.cost}${item.unit}`}
                    </span>
                  </div>
                ))}
                <div className="pt-2 border-t border-[#262626]">
                  <div className="flex justify-between">
                    <span className="font-medium text-white">Total Fixed</span>
                    <span className="font-bold text-green-400">$6/mo</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-yellow-400 mb-3">Per-User Variable Costs</h4>
              <div className="space-y-2">
                {infrastructureCosts.perUser.map((item) => (
                  <div key={item.item} className="flex justify-between p-2 bg-[#1a1a1a] rounded">
                    <div>
                      <span className="text-sm text-white">{item.item}</span>
                      <span className="text-xs text-gray-500 block">{item.notes}</span>
                    </div>
                    <span className="text-sm text-yellow-400 font-medium">
                      ${item.cost}{item.unit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-purple-400 mb-3">Auto Tier Only</h4>
              <div className="space-y-2">
                {infrastructureCosts.autoTier.map((item) => (
                  <div key={item.item} className="flex justify-between p-2 bg-[#1a1a1a] rounded">
                    <div>
                      <span className="text-sm text-white">{item.item}</span>
                      <span className="text-xs text-gray-500 block">{item.notes}</span>
                    </div>
                    <span className="text-sm text-purple-400 font-medium">
                      ${item.cost}{item.unit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Unit Economics */}
        <Card delay={0.4} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Calculator className="text-yellow-400" size={20} />
            Unit Economics per User (at 1,000 users)
          </h2>

          <div className="grid grid-cols-2 gap-6">
            {/* Ship Plan */}
            <div className="p-4 bg-[#1a1a1a] rounded-lg">
              <h4 className="font-medium text-white mb-4">Ship Plan ($19/mo)</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Revenue</span>
                  <span className="text-green-400">+$19.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Stripe (2.9% + $0.30)</span>
                  <span className="text-red-400">-$0.85</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">AI (GPT-4o mini)</span>
                  <span className="text-red-400">-$0.06</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Infrastructure share</span>
                  <span className="text-red-400">-$0.01</span>
                </div>
                <div className="pt-2 mt-2 border-t border-[#262626]">
                  <div className="flex justify-between font-medium">
                    <span className="text-white">Contribution Margin</span>
                    <span className="text-green-400">${economics.ship.margin.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Margin %</span>
                    <span className="text-green-400 font-bold">{economics.ship.marginPercent}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Auto Plan */}
            <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
              <h4 className="font-medium text-white mb-4">Auto Plan ($59/mo)</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Revenue</span>
                  <span className="text-green-400">+$59.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Stripe (2.9% + $0.30)</span>
                  <span className="text-red-400">-$2.01</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">AI (enhanced)</span>
                  <span className="text-red-400">-$0.12</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">2Captcha (~150/mo)</span>
                  <span className="text-red-400">-$0.45</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Proxies (~450 applies)</span>
                  <span className="text-red-400">-$1.50</span>
                </div>
                <div className="pt-2 mt-2 border-t border-purple-500/20">
                  <div className="flex justify-between font-medium">
                    <span className="text-white">Contribution Margin</span>
                    <span className="text-green-400">${economics.auto.margin.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Margin %</span>
                    <span className="text-green-400 font-bold">{economics.auto.marginPercent}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Revenue Projections */}
        <Card delay={0.5} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="text-green-400" size={20} />
            Revenue Projections
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#262626]">
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Users</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Mix (Ship/Auto)</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-400">MRR</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-400">ARR</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Gross Profit (~90%)</th>
                </tr>
              </thead>
              <tbody>
                {projections.map((p) => (
                  <tr key={p.users} className="border-b border-[#262626]/50">
                    <td className="py-3 text-sm text-white font-medium">{p.users.toLocaleString()}</td>
                    <td className="py-3 text-sm text-gray-400">{p.mix}</td>
                    <td className="py-3 text-sm text-green-400 font-medium">${p.mrr.toLocaleString()}</td>
                    <td className="py-3 text-sm text-indigo-400 font-bold">${p.arr.toLocaleString()}</td>
                    <td className="py-3 text-sm text-yellow-400">${Math.round(p.arr * 0.9).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
              <p className="text-sm text-green-400">
                <strong>Target Year 1:</strong> 1,000 users = $35K MRR = $420K ARR
              </p>
            </div>
            <div className="p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
              <p className="text-sm text-indigo-400">
                <strong>Target Year 2:</strong> 10,000 users = $390K MRR = $4.68M ARR
              </p>
            </div>
          </div>
        </Card>

        {/* Scaling Costs */}
        <Card delay={0.6} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Server className="text-blue-400" size={20} />
            Infrastructure Scaling Costs
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#262626]">
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Phase</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Hosting</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Database</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Workers</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Total/mo</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Notes</th>
                </tr>
              </thead>
              <tbody>
                {scalingCosts.map((s, index) => (
                  <tr key={s.phase} className={`border-b border-[#262626]/50 ${index === 0 ? 'bg-green-500/5' : ''}`}>
                    <td className="py-3 text-sm text-white font-medium">{s.phase}</td>
                    <td className="py-3 text-sm text-gray-400">${s.hosting}</td>
                    <td className="py-3 text-sm text-gray-400">${s.db}</td>
                    <td className="py-3 text-sm text-gray-400">${s.workers}</td>
                    <td className="py-3 text-sm text-yellow-400 font-medium">${s.total}</td>
                    <td className="py-3 text-xs text-gray-500">{s.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Recommendations */}
        <Card delay={0.7} className="mb-8 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/20">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <AlertTriangle className="text-yellow-400" size={20} />
            Pricing Recommendations
          </h2>

          <div className="space-y-4">
            <div className="p-4 bg-[#0d0d0d] rounded-lg">
              <h4 className="font-medium text-green-400 mb-2">Ship Plan: $19/mo with 25 jobs/day</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>Undercuts LinkedIn Premium ($30) and Jobscan ($30) significantly</li>
                <li>25 jobs/day = 750 jobs/month - more than enough for active job seekers</li>
                <li>~95% margin makes this highly profitable even at low volume</li>
                <li>Price anchors well against the Auto tier</li>
              </ul>
            </div>

            <div className="p-4 bg-[#0d0d0d] rounded-lg">
              <h4 className="font-medium text-purple-400 mb-2">Auto Plan: $59/mo with 50 jobs + 15 auto-applies/day</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>Cheaper than LazyApply ($99) with similar automation</li>
                <li>15 auto-applies/day = 450/month - reasonable for most job seekers</li>
                <li>~93% margin even with CAPTCHA + proxy costs</li>
                <li>Higher value users, lower churn expected</li>
              </ul>
            </div>

            <div className="p-4 bg-[#0d0d0d] rounded-lg">
              <h4 className="font-medium text-blue-400 mb-2">Free Trial Strategy</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>Offer 5 jobs/day for 4 days = 20 total jobs free</li>
                <li>Shows value without significant cost (APIs are free)</li>
                <li>No credit card required - reduce friction</li>
                <li>Convert to paid within the trial with upgrade prompts</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Marketing Budget */}
        <Card delay={0.8}>
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <PieChart className="text-pink-400" size={20} />
            Recommended Budget Allocation
          </h2>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-gray-400 mb-3">Revenue Allocation (per $100 revenue)</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span className="text-sm text-gray-400">Gross Profit: $90-93</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded"></div>
                  <span className="text-sm text-gray-400">COGS (Stripe, AI, Proxies): $7-10</span>
                </div>
              </div>

              <h4 className="text-sm font-medium text-gray-400 mt-4 mb-3">Suggested Gross Profit Split</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-pink-500 rounded"></div>
                  <span className="text-sm text-gray-400">Marketing: 30% ($27-28)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span className="text-sm text-gray-400">R&D/Operations: 20% ($18-19)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                  <span className="text-sm text-gray-400">Reserve/Runway: 20% ($18-19)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span className="text-sm text-gray-400">Your Profit: 30% ($27-28)</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-400 mb-3">At 1,000 Users (~$35K MRR)</h4>
              <div className="space-y-2 p-4 bg-[#1a1a1a] rounded-lg">
                <div className="flex justify-between">
                  <span className="text-gray-400">Gross Profit</span>
                  <span className="text-green-400 font-medium">~$31,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Marketing Budget</span>
                  <span className="text-pink-400">$9,450/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Operations</span>
                  <span className="text-blue-400">$6,300/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Reserve</span>
                  <span className="text-yellow-400">$6,300/mo</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#262626]">
                  <span className="text-white font-medium">Your Take-Home</span>
                  <span className="text-green-400 font-bold">$9,450/mo</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Research Date */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-8 text-center text-sm text-gray-500"
        >
          Research conducted: January 9, 2026 | Sources: Railway, Stripe, OpenAI, 2Captcha, Bright Data, Inngest pricing pages
        </motion.div>
      </main>
    </div>
  );
}
