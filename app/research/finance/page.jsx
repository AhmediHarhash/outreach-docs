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
  Shield,
  XCircle,
  Star,
  Brain,
  Sparkles
} from 'lucide-react';
import Navigation from '../../../components/Navigation';
import Card from '../../../components/Card';

// ========================================
// VOLUME-BASED VS QUALITY-BASED COMPARISON
// ========================================

const approachComparison = {
  volume: {
    name: 'Volume-Based (Spray & Pray)',
    philosophy: 'Apply to as many jobs as possible, let quantity increase odds',
    jobsPerDay: '50-200',
    matchQuality: 'Keyword matching only (17% accuracy)',
    successRate: '0.1-2% cold application success',
    userExperience: 'Overwhelming, spammy, high rejection fatigue',
    competitors: ['LazyApply ($99/mo)', 'Mass apply bots', 'LinkedIn Easy Apply spam'],
    problems: [
      'Most jobs are irrelevant to user\'s actual skills',
      'Damages user\'s reputation with recruiters',
      'Burns through opportunities without precision',
      'High churn - users give up after rejections',
      'ATS systems flag mass applicants',
    ],
  },
  quality: {
    name: 'Quality-Based (Precision Matching)',
    philosophy: 'Find the RIGHT jobs with high match probability, then help user apply effectively',
    jobsPerDay: '5-15 highly matched',
    matchQuality: 'Semantic AI matching (74-83% accuracy)',
    successRate: '8.3% interview rate per quality application',
    userExperience: 'Focused, confident, higher success rate',
    competitors: ['JobLeads ($30/mo)', 'Clera (premium)', 'Executive headhunters'],
    benefits: [
      '2.21x higher application-to-interview conversion',
      'Semantic matching outperforms keywords by 4x',
      'Builds user confidence with relevant matches',
      'Lower churn - users see real results',
      'Premium positioning = higher prices justified',
    ],
  },
};

// ========================================
// QUALITY-BASED INFRASTRUCTURE COSTS (January 2026)
// ========================================

const qualityInfraCosts = {
  fixed: [
    { item: 'Railway Pro Plan', cost: 20, unit: '/mo', notes: 'Includes $20 credits, PostgreSQL Pro' },
    { item: 'Supabase Auth (Free)', cost: 0, unit: '/mo', notes: '50,000 MAU free tier' },
    { item: 'Adzuna API (Free)', cost: 0, unit: '/mo', notes: '250 calls/day = 7,500/month' },
    { item: 'Jooble API (Free)', cost: 0, unit: '/mo', notes: 'Unlimited (affiliate model)' },
    { item: 'Inngest Pro', cost: 25, unit: '/mo', notes: '100k steps/month for job processing' },
    { item: 'Pinecone Starter', cost: 50, unit: '/mo', notes: 'Vector DB for semantic matching' },
    { item: 'Domain + Email', cost: 5, unit: '/mo', notes: '.com + transactional email' },
  ],
  perUser: {
    ship: [
      { item: 'OpenAI text-embedding-3-large', cost: 0.05, unit: '/user/mo', notes: '~400k tokens for resume+job embeddings' },
      { item: 'Claude Sonnet 4.5 (match analysis)', cost: 0.15, unit: '/user/mo', notes: '~5k tokens/match x 10 matches/day' },
      { item: 'Pinecone queries', cost: 0.02, unit: '/user/mo', notes: '~1000 queries/month' },
      { item: 'Stripe fees ($29)', cost: 1.14, unit: '/transaction', notes: '2.9% + $0.30' },
    ],
    auto: [
      { item: 'OpenAI text-embedding-3-large', cost: 0.08, unit: '/user/mo', notes: '~600k tokens (more resume variations)' },
      { item: 'Claude Sonnet 4.5 (deep analysis)', cost: 0.45, unit: '/user/mo', notes: 'Resume tailoring + cover letters' },
      { item: 'Pinecone queries', cost: 0.03, unit: '/user/mo', notes: '~1500 queries/month' },
      { item: '2Captcha', cost: 0.30, unit: '/user/mo', notes: '~100 solves at $3/1000' },
      { item: 'Bright Data proxies', cost: 0.50, unit: '/user/mo', notes: '~50MB for quality applies' },
      { item: 'Stripe fees ($79)', cost: 2.59, unit: '/transaction', notes: '2.9% + $0.30' },
    ],
  },
  totalFixed: 100, // $100/month base infrastructure for quality
};

// ========================================
// QUALITY-BASED PRICING TIERS
// ========================================

const qualityPricingTiers = {
  ship: {
    name: 'Precision Plan',
    price: 29,
    jobsPerDay: 10,
    matchThreshold: '75%+',
    features: [
      'Up to 10 precision-matched jobs/day',
      'Semantic AI matching (not keyword spam)',
      'Match score explanation for each job',
      'Resume tailored per job title',
      'Visa sponsorship detection (H1B, UK, EU)',
      'Daily digest with top matches only',
      'Guided apply with auto-fill',
      'Application tracking dashboard',
    ],
    targetUser: 'Job seekers who want quality over quantity',
    whyThisPrice: 'Same as LinkedIn Premium Career ($29.99), but with AI matching',
  },
  auto: {
    name: 'Executive Plan',
    price: 79,
    jobsPerDay: 15,
    autoApplyPerDay: 5,
    matchThreshold: '80%+',
    features: [
      'Up to 15 precision-matched jobs/day',
      'Up to 5 auto-applies/day (quality only)',
      'AI-tailored resume per application',
      'AI-generated cover letter per job',
      'Match analysis with skill gap report',
      'Priority in job matching queue',
      'Weekly strategy call (first month)',
      'Everything in Precision plan',
    ],
    targetUser: 'Executives, busy professionals, urgent job search',
    whyThisPrice: 'Below Jobscan ($90/quarter) with actual automation',
  },
};

// ========================================
// UNIT ECONOMICS - QUALITY MODEL
// ========================================

const calculateQualityEconomics = (users) => {
  const fixedCostShare = qualityInfraCosts.totalFixed / Math.max(users, 50);

  const ship = {
    revenue: 29,
    stripe: 1.14,
    embedding: 0.05,
    claude: 0.15,
    pinecone: 0.02,
    infra: fixedCostShare,
    cogs: 0,
  };
  ship.cogs = ship.stripe + ship.embedding + ship.claude + ship.pinecone + ship.infra;
  ship.margin = ship.revenue - ship.cogs;
  ship.marginPercent = (ship.margin / ship.revenue * 100).toFixed(1);

  const auto = {
    revenue: 79,
    stripe: 2.59,
    embedding: 0.08,
    claude: 0.45,
    pinecone: 0.03,
    captcha: 0.30,
    proxy: 0.50,
    infra: fixedCostShare,
    cogs: 0,
  };
  auto.cogs = auto.stripe + auto.embedding + auto.claude + auto.pinecone + auto.captcha + auto.proxy + auto.infra;
  auto.margin = auto.revenue - auto.cogs;
  auto.marginPercent = (auto.margin / auto.revenue * 100).toFixed(1);

  return { ship, auto, fixedCostShare };
};

// ========================================
// COMPETITOR ANALYSIS
// ========================================

const competitorPricing = [
  { name: 'LinkedIn Premium Career', price: '$29.99/mo', approach: 'Quality', features: 'InMail, Insights, Who Viewed', jobs: 'Unlimited browsing', matchQuality: 'Basic filters' },
  { name: 'Jobscan', price: '$89.97/3mo (~$30/mo)', approach: 'Quality', features: 'Resume optimization, ATS scan', jobs: 'Unlimited scans', matchQuality: 'Keyword only' },
  { name: 'JobLeads', price: '€29.95/mo', approach: 'Quality', features: '40k headhunter network, AI match', jobs: 'Curated list', matchQuality: 'Semantic AI' },
  { name: 'Teal+', price: '$9/week (~$36/mo)', approach: 'Quality', features: 'Resume builder, job tracking', jobs: 'Unlimited', matchQuality: 'Basic AI' },
  { name: 'LazyApply', price: '$99/mo', approach: 'Volume', features: 'Auto-apply LinkedIn, Indeed', jobs: 'Unlimited spam', matchQuality: 'None (mass apply)' },
  { name: 'Sonara.ai', price: '$19-49/mo', approach: 'Mixed', features: 'AI matching, auto-apply', jobs: '50-unlimited', matchQuality: 'Basic AI' },
  { name: 'HeadHunterAI', price: 'Custom', approach: 'Quality', features: 'Full service, outreach', jobs: 'Curated', matchQuality: 'Human + AI' },
];

// ========================================
// REVENUE PROJECTIONS - QUALITY MODEL
// ========================================

const qualityProjections = [
  { users: 50, mix: '70/30', mrr: 50 * 0.7 * 29 + 50 * 0.3 * 79, arr: 0 },
  { users: 200, mix: '60/40', mrr: 200 * 0.6 * 29 + 200 * 0.4 * 79, arr: 0 },
  { users: 500, mix: '55/45', mrr: 500 * 0.55 * 29 + 500 * 0.45 * 79, arr: 0 },
  { users: 1000, mix: '50/50', mrr: 1000 * 0.5 * 29 + 1000 * 0.5 * 79, arr: 0 },
  { users: 5000, mix: '45/55', mrr: 5000 * 0.45 * 29 + 5000 * 0.55 * 79, arr: 0 },
];
qualityProjections.forEach(p => p.arr = p.mrr * 12);

// ========================================
// WHY QUALITY BEATS VOLUME - STATISTICS
// ========================================

const qualityStats = [
  { stat: '2.21x', description: 'Higher interview conversion with tailored resumes', source: 'Huntr 2025' },
  { stat: '74-83%', description: 'Semantic matching accuracy vs 17% keyword-only', source: 'ScienceDirect 2026' },
  { stat: '8.3%', description: 'Interview rate per quality application', source: 'LifeShack 2024' },
  { stat: '0.1-2%', description: 'Cold spam application success (what volume gets)', source: 'Industry data' },
  { stat: '14%', description: 'More likely to pass interview with AI-matched roles', source: 'OECD 2023' },
  { stat: '30%', description: 'Referral success rate (quality mimics this approach)', source: 'CareerPlug 2025' },
];

export default function FinanceResearchPage() {
  const economics = calculateQualityEconomics(500);

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
            Financial Analysis: Quality vs Volume - January 9, 2026
          </h1>
          <p className="text-gray-400">
            Premium quality-based approach for Outreach SaaS - not spam, precision matching
          </p>
        </motion.div>

        {/* Key Decision Banner */}
        <Card delay={0.1} className="mb-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
              <Star className="text-purple-400" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Decision: Quality-Based Premium Service</h2>
              <p className="text-gray-300">
                We're building a <strong className="text-purple-400">precision matching service</strong>, not a spam bot.
                Semantic AI matching with 74-83% accuracy. Fewer jobs, but the RIGHT jobs.
                Higher prices justified by real results.
              </p>
            </div>
          </div>
        </Card>

        {/* Volume vs Quality Comparison */}
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Target className="text-red-400" size={24} />
          Volume-Based vs Quality-Based Comparison
        </h2>

        <div className="grid grid-cols-2 gap-6 mb-8">
          {/* Volume Approach */}
          <Card delay={0.15} className="border-red-500/20 bg-red-500/5">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="text-red-400" size={20} />
              <h3 className="font-semibold text-white">{approachComparison.volume.name}</h3>
            </div>
            <p className="text-sm text-gray-400 mb-4 italic">"{approachComparison.volume.philosophy}"</p>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-500">Jobs/day</span>
                <span className="text-red-400">{approachComparison.volume.jobsPerDay}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Match Quality</span>
                <span className="text-red-400">{approachComparison.volume.matchQuality}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Success Rate</span>
                <span className="text-red-400">{approachComparison.volume.successRate}</span>
              </div>
            </div>

            <h4 className="text-sm font-medium text-red-400 mb-2">Problems</h4>
            <ul className="space-y-1">
              {approachComparison.volume.problems.map((p, i) => (
                <li key={i} className="text-xs text-gray-500 flex items-start gap-2">
                  <XCircle size={10} className="text-red-400 mt-0.5 flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </Card>

          {/* Quality Approach */}
          <Card delay={0.2} className="border-green-500/30 bg-green-500/5 ring-2 ring-green-500/30">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="text-green-400" size={20} />
              <h3 className="font-semibold text-white">{approachComparison.quality.name}</h3>
              <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded ml-auto">OUR APPROACH</span>
            </div>
            <p className="text-sm text-gray-400 mb-4 italic">"{approachComparison.quality.philosophy}"</p>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-500">Jobs/day</span>
                <span className="text-green-400">{approachComparison.quality.jobsPerDay}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Match Quality</span>
                <span className="text-green-400">{approachComparison.quality.matchQuality}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Success Rate</span>
                <span className="text-green-400">{approachComparison.quality.successRate}</span>
              </div>
            </div>

            <h4 className="text-sm font-medium text-green-400 mb-2">Benefits</h4>
            <ul className="space-y-1">
              {approachComparison.quality.benefits.map((b, i) => (
                <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                  <CheckCircle2 size={10} className="text-green-400 mt-0.5 flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Quality Statistics */}
        <Card delay={0.25} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Brain className="text-indigo-400" size={20} />
            Why Quality Beats Volume - 2025/2026 Statistics
          </h2>

          <div className="grid grid-cols-3 gap-4">
            {qualityStats.map((stat, index) => (
              <div key={stat.stat} className="p-4 bg-[#1a1a1a] rounded-lg text-center">
                <div className="text-2xl font-bold text-indigo-400 mb-1">{stat.stat}</div>
                <p className="text-xs text-gray-400 mb-2">{stat.description}</p>
                <span className="text-xs text-gray-600">Source: {stat.source}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Quality-Based Pricing Tiers */}
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <DollarSign className="text-green-400" size={24} />
          Quality-Based Pricing Tiers
        </h2>

        <div className="grid grid-cols-2 gap-6 mb-8">
          {Object.values(qualityPricingTiers).map((tier, index) => (
            <Card key={tier.name} delay={0.3 + index * 0.1} className={
              tier.name === 'Executive Plan' ? 'ring-2 ring-purple-500/50' : ''
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
                    <span className="text-sm text-gray-400">Precision jobs/day</span>
                    <span className="text-lg font-bold text-indigo-400">{tier.jobsPerDay}</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Match threshold: {tier.matchThreshold}</div>
                </div>
                {tier.autoApplyPerDay && (
                  <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-purple-400">Quality auto-applies/day</span>
                      <span className="text-lg font-bold text-purple-400">{tier.autoApplyPerDay}</span>
                    </div>
                    <div className="text-xs text-purple-300 mt-1">Only {tier.matchThreshold} match jobs</div>
                  </div>
                )}
              </div>

              <ul className="space-y-2 mb-4">
                {tier.features.map((f, i) => (
                  <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                    <Sparkles size={14} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-[#262626]">
                <p className="text-xs text-gray-500">{tier.whyThisPrice}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Competitor Analysis */}
        <Card delay={0.4} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Target className="text-red-400" size={20} />
            Competitor Pricing Comparison (January 2026)
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#262626]">
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Competitor</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Price</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Approach</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Match Quality</th>
                </tr>
              </thead>
              <tbody>
                {competitorPricing.map((comp) => (
                  <tr key={comp.name} className="border-b border-[#262626]/50">
                    <td className="py-3 text-sm text-white">{comp.name}</td>
                    <td className="py-3 text-sm text-yellow-400 font-medium">{comp.price}</td>
                    <td className="py-3">
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        comp.approach === 'Quality' ? 'bg-green-500/20 text-green-400' :
                        comp.approach === 'Volume' ? 'bg-red-500/20 text-red-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {comp.approach}
                      </span>
                    </td>
                    <td className="py-3 text-sm text-gray-400">{comp.matchQuality}</td>
                  </tr>
                ))}
                <tr className="bg-green-500/10">
                  <td className="py-3 text-sm text-white font-medium">Outreach (Us)</td>
                  <td className="py-3 text-sm text-green-400 font-bold">$29 / $79</td>
                  <td className="py-3">
                    <span className="text-xs px-2 py-0.5 rounded bg-green-500/20 text-green-400">
                      Quality
                    </span>
                  </td>
                  <td className="py-3 text-sm text-green-400">Semantic AI (74-83%)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Infrastructure Costs */}
        <Card delay={0.5} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Server className="text-blue-400" size={20} />
            Quality Infrastructure Costs (January 2026 Verified)
          </h2>

          <div className="grid grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm font-medium text-blue-400 mb-3">Fixed Monthly (Quality Stack)</h4>
              <div className="space-y-2">
                {qualityInfraCosts.fixed.map((item) => (
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
                    <span className="font-bold text-yellow-400">$100/mo</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-green-400 mb-3">Precision Plan Per-User</h4>
              <div className="space-y-2">
                {qualityInfraCosts.perUser.ship.map((item) => (
                  <div key={item.item} className="flex justify-between p-2 bg-[#1a1a1a] rounded">
                    <div>
                      <span className="text-xs text-white">{item.item}</span>
                      <span className="text-xs text-gray-500 block">{item.notes}</span>
                    </div>
                    <span className="text-xs text-yellow-400 font-medium">
                      ${item.cost}{item.unit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-purple-400 mb-3">Executive Plan Per-User</h4>
              <div className="space-y-2">
                {qualityInfraCosts.perUser.auto.map((item) => (
                  <div key={item.item} className="flex justify-between p-2 bg-[#1a1a1a] rounded">
                    <div>
                      <span className="text-xs text-white">{item.item}</span>
                      <span className="text-xs text-gray-500 block">{item.notes}</span>
                    </div>
                    <span className="text-xs text-purple-400 font-medium">
                      ${item.cost}{item.unit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Unit Economics */}
        <Card delay={0.6} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Calculator className="text-yellow-400" size={20} />
            Unit Economics - Quality Model (at 500 users)
          </h2>

          <div className="grid grid-cols-2 gap-6">
            {/* Precision Plan */}
            <div className="p-4 bg-[#1a1a1a] rounded-lg">
              <h4 className="font-medium text-white mb-4">Precision Plan ($29/mo)</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Revenue</span>
                  <span className="text-green-400">+$29.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Stripe (2.9% + $0.30)</span>
                  <span className="text-red-400">-$1.14</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">OpenAI Embeddings</span>
                  <span className="text-red-400">-$0.05</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Claude Sonnet 4.5</span>
                  <span className="text-red-400">-$0.15</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Pinecone queries</span>
                  <span className="text-red-400">-$0.02</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Infrastructure share</span>
                  <span className="text-red-400">-$0.20</span>
                </div>
                <div className="pt-2 mt-2 border-t border-[#262626]">
                  <div className="flex justify-between font-medium">
                    <span className="text-white">Contribution Margin</span>
                    <span className="text-green-400">${(29 - 1.14 - 0.05 - 0.15 - 0.02 - 0.20).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Margin %</span>
                    <span className="text-green-400 font-bold">94.6%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Executive Plan */}
            <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
              <h4 className="font-medium text-white mb-4">Executive Plan ($79/mo)</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Revenue</span>
                  <span className="text-green-400">+$79.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Stripe (2.9% + $0.30)</span>
                  <span className="text-red-400">-$2.59</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">OpenAI Embeddings</span>
                  <span className="text-red-400">-$0.08</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Claude Sonnet 4.5</span>
                  <span className="text-red-400">-$0.45</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Pinecone + 2Captcha + Proxies</span>
                  <span className="text-red-400">-$0.83</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Infrastructure share</span>
                  <span className="text-red-400">-$0.20</span>
                </div>
                <div className="pt-2 mt-2 border-t border-purple-500/20">
                  <div className="flex justify-between font-medium">
                    <span className="text-white">Contribution Margin</span>
                    <span className="text-green-400">${(79 - 2.59 - 0.08 - 0.45 - 0.83 - 0.20).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Margin %</span>
                    <span className="text-green-400 font-bold">94.7%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
            <p className="text-sm text-green-400">
              <strong>Key Insight:</strong> Quality approach has SAME margins as volume (~95%) but with higher prices ($29/$79 vs $19/$59).
              More revenue per user, better user satisfaction, lower churn.
            </p>
          </div>
        </Card>

        {/* Revenue Projections */}
        <Card delay={0.7} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="text-green-400" size={20} />
            Revenue Projections - Quality Model
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#262626]">
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Users</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Mix (Precision/Executive)</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-400">MRR</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-400">ARR</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Gross Profit (~95%)</th>
                </tr>
              </thead>
              <tbody>
                {qualityProjections.map((p) => (
                  <tr key={p.users} className="border-b border-[#262626]/50">
                    <td className="py-3 text-sm text-white font-medium">{p.users.toLocaleString()}</td>
                    <td className="py-3 text-sm text-gray-400">{p.mix}</td>
                    <td className="py-3 text-sm text-green-400 font-medium">${p.mrr.toLocaleString()}</td>
                    <td className="py-3 text-sm text-indigo-400 font-bold">${p.arr.toLocaleString()}</td>
                    <td className="py-3 text-sm text-yellow-400">${Math.round(p.arr * 0.95).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
              <p className="text-sm text-green-400">
                <strong>Target Year 1:</strong> 500 users = $25.6K MRR = $307K ARR
              </p>
            </div>
            <div className="p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
              <p className="text-sm text-indigo-400">
                <strong>Target Year 2:</strong> 5,000 users = $282.5K MRR = $3.39M ARR
              </p>
            </div>
          </div>
        </Card>

        {/* Final Recommendation */}
        <Card delay={0.8} className="mb-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <CheckCircle2 className="text-green-400" size={20} />
            Final Pricing Recommendation
          </h2>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 bg-[#0d0d0d] rounded-lg">
              <h4 className="font-medium text-green-400 mb-3">Precision Plan: $29/mo</h4>
              <ul className="text-sm text-gray-400 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-green-400 mt-0.5" />
                  10 precision-matched jobs/day (75%+ match)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-green-400 mt-0.5" />
                  Semantic AI matching, not keyword spam
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-green-400 mt-0.5" />
                  Same price as LinkedIn Premium, 4x better matching
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-green-400 mt-0.5" />
                  94.6% margin = $27.44 profit per user
                </li>
              </ul>
            </div>

            <div className="p-4 bg-[#0d0d0d] rounded-lg">
              <h4 className="font-medium text-purple-400 mb-3">Executive Plan: $79/mo</h4>
              <ul className="text-sm text-gray-400 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-purple-400 mt-0.5" />
                  15 precision jobs + 5 quality auto-applies/day
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-purple-400 mt-0.5" />
                  AI-tailored resume + cover letter per apply
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-purple-400 mt-0.5" />
                  Cheaper than LazyApply ($99), far better quality
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-purple-400 mt-0.5" />
                  94.7% margin = $74.85 profit per user
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
            <h4 className="font-medium text-yellow-400 mb-2">Free Trial Strategy</h4>
            <p className="text-sm text-gray-400">
              <strong>3 precision jobs/day for 7 days = 21 quality matches free.</strong>
              No credit card required. Show them what quality matching feels like.
              Convert with upgrade prompts after day 4.
            </p>
          </div>
        </Card>

        {/* Budget Allocation */}
        <Card delay={0.9}>
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <PieChart className="text-pink-400" size={20} />
            Your Take-Home at Scale
          </h2>

          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-[#1a1a1a] rounded-lg text-center">
              <div className="text-sm text-gray-500 mb-1">500 Users</div>
              <div className="text-2xl font-bold text-green-400">$7,680/mo</div>
              <div className="text-xs text-gray-500">Your 30% take-home</div>
            </div>
            <div className="p-4 bg-[#1a1a1a] rounded-lg text-center">
              <div className="text-sm text-gray-500 mb-1">1,000 Users</div>
              <div className="text-2xl font-bold text-green-400">$16,200/mo</div>
              <div className="text-xs text-gray-500">Your 30% take-home</div>
            </div>
            <div className="p-4 bg-purple-500/10 rounded-lg text-center border border-purple-500/20">
              <div className="text-sm text-gray-500 mb-1">5,000 Users</div>
              <div className="text-2xl font-bold text-purple-400">$84,750/mo</div>
              <div className="text-xs text-gray-500">Your 30% take-home</div>
            </div>
          </div>
        </Card>

        {/* Research Date & Sources */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center text-sm text-gray-500"
        >
          <p className="mb-2">Research conducted: January 9, 2026</p>
          <p className="text-xs">
            Sources: OpenAI Pricing, Anthropic Claude Pricing, Pinecone, Railway, Stripe,
            ScienceDirect AI Matching Study, OECD AI Report, Huntr, LifeShack, CareerPlug 2025
          </p>
        </motion.div>
      </main>
    </div>
  );
}
