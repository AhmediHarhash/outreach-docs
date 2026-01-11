'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  TrendingUp,
  DollarSign,
  Users,
  BarChart3,
  PieChart,
  Target,
  Rocket,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Wallet,
  CreditCard,
  Building,
  Star,
  Zap
} from 'lucide-react';
import Navigation from '../../../../components/Navigation';
import Card from '../../../../components/Card';

const revenueStreams = [
  {
    name: 'Starter Subscriptions',
    price: 19,
    targetUsers: 500,
    monthlyRevenue: 9500,
    annualRevenue: 114000,
    description: 'Individual job seekers, basic features',
  },
  {
    name: 'Professional Subscriptions',
    price: 39,
    targetUsers: 350,
    monthlyRevenue: 13650,
    annualRevenue: 163800,
    description: 'Serious job hunters, full features',
  },
  {
    name: 'Executive Subscriptions',
    price: 59,
    targetUsers: 100,
    monthlyRevenue: 5900,
    annualRevenue: 70800,
    description: 'Premium career management',
  },
  {
    name: 'Enterprise Contracts',
    price: 200,
    targetUsers: 50,
    monthlyRevenue: 10000,
    annualRevenue: 120000,
    description: 'Organizations with teams',
  },
];

const yearlyProjections = [
  { year: 'Year 1', users: 1000, revenue: 420000, costs: 25000, profit: 395000, margin: 94 },
  { year: 'Year 2', users: 5000, revenue: 2100000, costs: 100000, profit: 2000000, margin: 95 },
  { year: 'Year 3', users: 15000, revenue: 6300000, costs: 250000, profit: 6050000, margin: 96 },
  { year: 'Year 5', users: 50000, revenue: 21000000, costs: 750000, profit: 20250000, margin: 96 },
];

const quarterlyMilestones = [
  {
    quarter: 'Q1 2026',
    milestone: 'Beta Launch',
    targets: ['Complete Phase I-III', '100 beta users', 'Gather feedback', 'Iterate on AI interview'],
    revenue: 0,
  },
  {
    quarter: 'Q2 2026',
    milestone: 'Public Launch',
    targets: ['Launch SaaS platform', 'First 500 paying users', 'Press coverage', '$15K MRR'],
    revenue: 15000,
  },
  {
    quarter: 'Q3 2026',
    milestone: 'Growth Phase',
    targets: ['1000 users', 'Enterprise tier', 'Team features', '$35K MRR'],
    revenue: 35000,
  },
  {
    quarter: 'Q4 2026',
    milestone: 'Scale',
    targets: ['2000 users', 'Mobile app launch', 'API partnerships', '$70K MRR'],
    revenue: 70000,
  },
];

const pricingStrategy = [
  {
    aspect: 'Value-Based Pricing',
    description: 'Priced based on value delivered (better jobs, higher salaries) not cost',
    rationale: 'A $39/month tool that helps land a $10K higher salary is incredible ROI',
  },
  {
    aspect: 'Tiered Structure',
    description: 'Three clear tiers with logical feature progression',
    rationale: 'Captures different customer segments without leaving money on table',
  },
  {
    aspect: 'Annual Discount',
    description: '20% discount for annual billing ($152 vs $190 for Starter)',
    rationale: 'Improves cash flow, reduces churn, increases LTV',
  },
  {
    aspect: 'Free Trial',
    description: '7-day free trial with full Professional features',
    rationale: 'Let product speak for itself; AI interview creates strong first impression',
  },
];

const unitEconomics = {
  cac: 50,  // Customer acquisition cost
  ltv: 468, // Lifetime value (13 months avg * $36 ARPU)
  ltvCacRatio: 9.36,
  monthlyChurn: 5,
  avgLifespan: 13,
  arpu: 36,
  paybackPeriod: 1.4,
};

const growthChannels = [
  { channel: 'Content Marketing', cost: 'Low', potential: 'High', description: 'SEO, blog posts on job hunting tips' },
  { channel: 'Social Media', cost: 'Low', potential: 'Medium', description: 'LinkedIn, Twitter, Reddit r/jobs' },
  { channel: 'Product Hunt', cost: 'Free', potential: 'High', description: 'Launch day spike, early adopters' },
  { channel: 'Referral Program', cost: 'Medium', potential: 'High', description: '1 month free for referrer and referee' },
  { channel: 'Affiliate Partners', cost: 'Medium', potential: 'Medium', description: 'Career coaches, resume writers' },
  { channel: 'Google Ads', cost: 'High', potential: 'Medium', description: 'Target "job search tool" keywords' },
];

const exitStrategies = [
  {
    type: 'Acquisition',
    timeline: '3-5 years',
    valuation: '$50M - $150M',
    buyers: 'LinkedIn, Indeed, ZipRecruiter, HR tech companies',
    probability: 'High',
  },
  {
    type: 'Private Equity',
    timeline: '4-6 years',
    valuation: '$30M - $80M',
    buyers: 'SaaS-focused PE firms',
    probability: 'Medium',
  },
  {
    type: 'IPO',
    timeline: '7-10 years',
    valuation: '$200M+',
    buyers: 'Public markets',
    probability: 'Low',
  },
  {
    type: 'Lifestyle Business',
    timeline: 'Ongoing',
    valuation: 'N/A',
    buyers: 'N/A - keep operating',
    probability: 'Fallback',
  },
];

export default function BusinessModelPage() {
  const totalMonthlyRevenue = revenueStreams.reduce((sum, s) => sum + s.monthlyRevenue, 0);
  const totalAnnualRevenue = revenueStreams.reduce((sum, s) => sum + s.annualRevenue, 0);

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
            <span className="text-purple-400">Business Model</span>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
              <TrendingUp className="text-white" size={28} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Business Model</h1>
              <p className="text-gray-400 max-w-2xl">
                Complete business model analysis including revenue projections, unit economics,
                growth strategy, and exit opportunities.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid grid-cols-4 gap-4 mb-10">
          {[
            { label: 'Target Y1 Revenue', value: '$420K', color: 'green' },
            { label: 'Gross Margin', value: '94%+', color: 'purple' },
            { label: 'LTV:CAC Ratio', value: '9.4x', color: 'blue' },
            { label: 'Payback Period', value: '1.4 mo', color: 'yellow' },
          ].map((metric, i) => (
            <Card key={metric.label} delay={0.1 + i * 0.05}>
              <div className="text-center">
                <p className="text-xs text-gray-500 uppercase mb-2">{metric.label}</p>
                <p className={`text-3xl font-bold text-${metric.color}-400`}>{metric.value}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Revenue Streams */}
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Wallet className="text-green-400" size={24} />
          Revenue Streams (Year 1 Target)
        </h2>

        <Card delay={0.2} className="mb-10">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#262626]">
                  <th className="text-left py-3 text-sm font-medium text-gray-400">Tier</th>
                  <th className="text-right py-3 text-sm font-medium text-gray-400">Price</th>
                  <th className="text-right py-3 text-sm font-medium text-gray-400">Target Users</th>
                  <th className="text-right py-3 text-sm font-medium text-gray-400">Monthly</th>
                  <th className="text-right py-3 text-sm font-medium text-gray-400">Annual</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-400">Description</th>
                </tr>
              </thead>
              <tbody>
                {revenueStreams.map((stream) => (
                  <tr key={stream.name} className="border-b border-[#262626]/50">
                    <td className="py-3 text-sm text-white font-medium">{stream.name}</td>
                    <td className="py-3 text-sm text-right text-gray-400">${stream.price}/mo</td>
                    <td className="py-3 text-sm text-right text-blue-400">{stream.targetUsers}</td>
                    <td className="py-3 text-sm text-right text-gray-400">${stream.monthlyRevenue.toLocaleString()}</td>
                    <td className="py-3 text-sm text-right text-green-400">${stream.annualRevenue.toLocaleString()}</td>
                    <td className="py-3 text-xs text-gray-500">{stream.description}</td>
                  </tr>
                ))}
                <tr className="bg-green-500/10">
                  <td className="py-3 text-sm font-bold text-white">Total</td>
                  <td></td>
                  <td className="py-3 text-sm text-right font-bold text-blue-400">1,000</td>
                  <td className="py-3 text-sm text-right font-bold text-white">${totalMonthlyRevenue.toLocaleString()}</td>
                  <td className="py-3 text-sm text-right font-bold text-green-400">${totalAnnualRevenue.toLocaleString()}</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Multi-Year Projections */}
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <BarChart3 className="text-blue-400" size={24} />
          Multi-Year Projections
        </h2>

        <Card delay={0.3} className="mb-10">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#262626]">
                  <th className="text-left py-3 text-sm font-medium text-gray-400">Year</th>
                  <th className="text-right py-3 text-sm font-medium text-gray-400">Users</th>
                  <th className="text-right py-3 text-sm font-medium text-gray-400">Revenue</th>
                  <th className="text-right py-3 text-sm font-medium text-gray-400">Costs</th>
                  <th className="text-right py-3 text-sm font-medium text-gray-400">Profit</th>
                  <th className="text-right py-3 text-sm font-medium text-gray-400">Margin</th>
                </tr>
              </thead>
              <tbody>
                {yearlyProjections.map((year) => (
                  <tr key={year.year} className="border-b border-[#262626]/50">
                    <td className="py-3 text-sm text-white font-medium">{year.year}</td>
                    <td className="py-3 text-sm text-right text-blue-400">{year.users.toLocaleString()}</td>
                    <td className="py-3 text-sm text-right text-white">${(year.revenue / 1000000).toFixed(1)}M</td>
                    <td className="py-3 text-sm text-right text-red-400">${(year.costs / 1000).toFixed(0)}K</td>
                    <td className="py-3 text-sm text-right text-green-400 font-bold">${(year.profit / 1000000).toFixed(1)}M</td>
                    <td className="py-3 text-sm text-right">
                      <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded">{year.margin}%</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Quarterly Milestones */}
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Calendar className="text-purple-400" size={24} />
          2026 Quarterly Milestones
        </h2>

        <div className="grid grid-cols-4 gap-4 mb-10">
          {quarterlyMilestones.map((q, index) => (
            <Card key={q.quarter} delay={0.4 + index * 0.1}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-purple-400 font-medium">{q.quarter}</span>
                <span className="text-xs text-gray-500">${q.revenue.toLocaleString()} MRR</span>
              </div>
              <h3 className="font-semibold text-white mb-3">{q.milestone}</h3>
              <ul className="space-y-1.5">
                {q.targets.map((target, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs">
                    <CheckCircle2 size={12} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">{target}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Unit Economics */}
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <PieChart className="text-yellow-400" size={24} />
          Unit Economics
        </h2>

        <Card delay={0.6} className="mb-10 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 border-yellow-500/20">
          <div className="grid grid-cols-6 gap-6">
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-1">CAC</p>
              <p className="text-2xl font-bold text-white">${unitEconomics.cac}</p>
              <p className="text-xs text-gray-500">Acquisition cost</p>
            </div>
            <div className="text-center border-l border-[#262626] pl-6">
              <p className="text-xs text-gray-500 mb-1">LTV</p>
              <p className="text-2xl font-bold text-green-400">${unitEconomics.ltv}</p>
              <p className="text-xs text-gray-500">Lifetime value</p>
            </div>
            <div className="text-center border-l border-[#262626] pl-6">
              <p className="text-xs text-gray-500 mb-1">LTV:CAC</p>
              <p className="text-2xl font-bold text-purple-400">{unitEconomics.ltvCacRatio}x</p>
              <p className="text-xs text-gray-500">Ratio (3x+ good)</p>
            </div>
            <div className="text-center border-l border-[#262626] pl-6">
              <p className="text-xs text-gray-500 mb-1">Churn</p>
              <p className="text-2xl font-bold text-orange-400">{unitEconomics.monthlyChurn}%</p>
              <p className="text-xs text-gray-500">Monthly rate</p>
            </div>
            <div className="text-center border-l border-[#262626] pl-6">
              <p className="text-xs text-gray-500 mb-1">ARPU</p>
              <p className="text-2xl font-bold text-blue-400">${unitEconomics.arpu}</p>
              <p className="text-xs text-gray-500">Avg revenue/user</p>
            </div>
            <div className="text-center border-l border-[#262626] pl-6">
              <p className="text-xs text-gray-500 mb-1">Payback</p>
              <p className="text-2xl font-bold text-cyan-400">{unitEconomics.paybackPeriod}</p>
              <p className="text-xs text-gray-500">Months</p>
            </div>
          </div>
        </Card>

        {/* Pricing Strategy */}
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <CreditCard className="text-green-400" size={24} />
          Pricing Strategy
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-10">
          {pricingStrategy.map((strategy, index) => (
            <Card key={strategy.aspect} delay={0.7 + index * 0.1}>
              <h3 className="font-semibold text-white mb-2">{strategy.aspect}</h3>
              <p className="text-sm text-gray-400 mb-2">{strategy.description}</p>
              <p className="text-xs text-green-400">Why: {strategy.rationale}</p>
            </Card>
          ))}
        </div>

        {/* Growth Channels */}
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Rocket className="text-blue-400" size={24} />
          Growth Channels
        </h2>

        <Card delay={0.9} className="mb-10">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#262626]">
                  <th className="text-left py-3 text-sm font-medium text-gray-400">Channel</th>
                  <th className="text-center py-3 text-sm font-medium text-gray-400">Cost</th>
                  <th className="text-center py-3 text-sm font-medium text-gray-400">Potential</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-400">Description</th>
                </tr>
              </thead>
              <tbody>
                {growthChannels.map((channel) => (
                  <tr key={channel.channel} className="border-b border-[#262626]/50">
                    <td className="py-3 text-sm text-white font-medium">{channel.channel}</td>
                    <td className="py-3 text-sm text-center">
                      <span className={`px-2 py-0.5 rounded text-xs ${
                        channel.cost === 'Low' ? 'bg-green-500/20 text-green-400' :
                        channel.cost === 'Free' ? 'bg-blue-500/20 text-blue-400' :
                        channel.cost === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {channel.cost}
                      </span>
                    </td>
                    <td className="py-3 text-sm text-center">
                      <span className={`px-2 py-0.5 rounded text-xs ${
                        channel.potential === 'High' ? 'bg-green-500/20 text-green-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {channel.potential}
                      </span>
                    </td>
                    <td className="py-3 text-xs text-gray-500">{channel.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Exit Strategies */}
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <ArrowUpRight className="text-purple-400" size={24} />
          Exit Strategies
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-10">
          {exitStrategies.map((exit, index) => (
            <Card key={exit.type} delay={1.0 + index * 0.1}>
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-white">{exit.type}</h3>
                <span className={`text-xs px-2 py-0.5 rounded ${
                  exit.probability === 'High' ? 'bg-green-500/20 text-green-400' :
                  exit.probability === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                  exit.probability === 'Low' ? 'bg-red-500/20 text-red-400' :
                  'bg-gray-500/20 text-gray-400'
                }`}>
                  {exit.probability}
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Timeline:</span>
                  <span className="text-gray-300">{exit.timeline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Valuation:</span>
                  <span className="text-green-400 font-medium">{exit.valuation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Potential Buyers:</span>
                  <span className="text-gray-300 text-xs">{exit.buyers}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Summary */}
        <Card delay={1.2} className="bg-gradient-to-r from-green-500/5 to-emerald-500/5 border-green-500/20">
          <h2 className="text-lg font-semibold text-white mb-4">Business Model Summary</h2>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-green-400 mb-2">Why This Works</h4>
              <ul className="space-y-1">
                {[
                  '94%+ gross margins',
                  'Low customer acquisition cost',
                  'High lifetime value',
                  'Subscription recurring revenue',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle2 size={12} className="text-green-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Metrics to Hit</h4>
              <ul className="space-y-1">
                {[
                  '1000 users by end of Y1',
                  '5% monthly churn or less',
                  '$36+ ARPU',
                  '$50 CAC target',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                    <Target size={12} className="text-blue-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-purple-400 mb-2">Success Factors</h4>
              <ul className="space-y-1">
                {[
                  'Product-market fit',
                  'Word of mouth growth',
                  'High NPS score',
                  'Low support burden',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                    <Star size={12} className="text-purple-400" />
                    {item}
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
          transition={{ delay: 1.3 }}
          className="mt-10 pt-6 border-t border-[#262626] text-center"
        >
          <p className="text-sm text-gray-500">
            Business Model | Last updated: January 10, 2026
          </p>
        </motion.div>
      </main>
    </div>
  );
}
