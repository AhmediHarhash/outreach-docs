'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Swords,
  Target,
  CheckCircle2,
  XCircle,
  Star,
  TrendingUp,
  Zap,
  Brain,
  Shield,
  DollarSign,
  Users,
  Award,
  ArrowRight,
  ExternalLink,
  Crown
} from 'lucide-react';
import Navigation from '../../../../components/Navigation';
import Card from '../../../../components/Card';

const competitors = [
  {
    name: 'Teal',
    price: '$29/month',
    rating: 4.2,
    users: '500K+',
    strengths: [
      'Good resume builder with templates',
      'Job tracking with browser extension',
      'LinkedIn profile analysis',
      'Cover letter generation',
    ],
    weaknesses: [
      'No semantic job matching',
      'Generic AI recommendations',
      'Limited job sourcing (LinkedIn only)',
      'No interview preparation',
    ],
    ourAdvantage: 'Our AI interview builds deeper profiles; semantic matching finds jobs Teal misses',
  },
  {
    name: 'Huntr',
    price: '$40/month',
    rating: 4.0,
    users: '200K+',
    strengths: [
      'Beautiful Kanban job tracker',
      'Resume builder included',
      'Contact management',
      'Job search portal aggregation',
    ],
    weaknesses: [
      'No AI functionality at all',
      'No intelligent matching',
      'Manual data entry required',
      'Expensive for what you get',
    ],
    ourAdvantage: 'Full AI suite at lower price; automatic profile building vs manual entry',
  },
  {
    name: 'Jobscan',
    price: '$49.95/month',
    rating: 4.3,
    users: '1M+',
    strengths: [
      'Industry-leading ATS optimization',
      'Detailed resume scoring',
      'LinkedIn optimization tools',
      'Large user base and data',
    ],
    weaknesses: [
      'Focused only on resume optimization',
      'No job discovery or matching',
      'No application tracking',
      'High price point',
    ],
    ourAdvantage: 'End-to-end solution vs single feature; AI tailors each application automatically',
  },
  {
    name: 'Careerflow',
    price: '$19.99/month',
    rating: 4.1,
    users: '100K+',
    strengths: [
      'LinkedIn optimization focus',
      'Auto-apply feature',
      'Job tracking dashboard',
      'Affordable pricing',
    ],
    weaknesses: [
      'LinkedIn-centric only',
      'Auto-apply quality concerns',
      'Basic AI capabilities',
      'Limited customization',
    ],
    ourAdvantage: 'Quality over quantity approach; deep AI interviews vs shallow questionnaires',
  },
  {
    name: 'Scale.jobs',
    price: '$199-399 one-time',
    rating: 3.8,
    users: '50K+',
    strengths: [
      'Human-assisted applications',
      'Done-for-you service',
      'One-time payment model',
      'High volume applications',
    ],
    weaknesses: [
      'Spray-and-pray approach',
      'No profile personalization',
      'Quality control issues',
      'No ongoing support',
    ],
    ourAdvantage: 'AI-powered quality applications vs human mass-apply; ongoing relationship',
  },
];

const featureComparison = [
  { feature: 'AI Profile Interview', us: true, teal: false, huntr: false, jobscan: false, careerflow: false },
  { feature: 'Semantic Job Matching', us: true, teal: false, huntr: false, jobscan: false, careerflow: false },
  { feature: 'Dynamic CV Generation', us: true, teal: true, huntr: true, jobscan: true, careerflow: false },
  { feature: 'Multi-Source Job Aggregation', us: true, teal: false, huntr: true, jobscan: false, careerflow: false },
  { feature: 'Application Tracking', us: true, teal: true, huntr: true, jobscan: false, careerflow: true },
  { feature: 'Chrome Extension', us: true, teal: true, huntr: true, jobscan: true, careerflow: true },
  { feature: 'Match Score Analysis', us: true, teal: false, huntr: false, jobscan: true, careerflow: false },
  { feature: 'Interview Preparation', us: true, teal: false, huntr: false, jobscan: false, careerflow: false },
  { feature: 'Discord Alerts', us: true, teal: false, huntr: false, jobscan: false, careerflow: false },
  { feature: 'OpenAI Embeddings', us: true, teal: false, huntr: false, jobscan: false, careerflow: false },
];

const competitiveAdvantages = [
  {
    icon: Brain,
    title: 'Deep AI Understanding',
    description: 'Claude conducts real conversations to understand your unique value proposition. Competitors use shallow questionnaires or no profile building at all.',
    impact: 'Higher quality job matches, better CV tailoring',
  },
  {
    icon: Target,
    title: 'Semantic Matching',
    description: '3072-dimensional OpenAI embeddings capture meaning, not keywords. "ML Engineer" matches "Machine Learning Developer" and related roles.',
    impact: 'Discover jobs competitors miss entirely',
  },
  {
    icon: Shield,
    title: 'Quality Over Quantity',
    description: 'Our philosophy rejects spray-and-pray. We help you apply to 10 perfect jobs instead of 100 generic ones.',
    impact: 'Higher success rate, less application fatigue',
  },
  {
    icon: DollarSign,
    title: 'Cost Efficiency',
    description: 'Claude CLI uses subscription (not API). Free job APIs. Minimal infrastructure. Full features at $19-59/month.',
    impact: '94%+ margins enable sustainable growth',
  },
  {
    icon: Zap,
    title: 'End-to-End Solution',
    description: 'From profile building to job discovery to application to tracking—all integrated. No juggling multiple tools.',
    impact: 'Streamlined workflow, single source of truth',
  },
  {
    icon: Crown,
    title: 'Modern Tech Stack',
    description: 'Latest Flutter, FastAPI, Claude CLI, OpenAI text-embedding-3-large. Built in 2026 with 2026 technology.',
    impact: 'Better performance, easier maintenance',
  },
];

const marketGaps = [
  {
    gap: 'No one does AI interviews',
    opportunity: 'First to offer conversational profile building with Claude',
    impact: 'Creates profiles 10x more detailed than competitors',
  },
  {
    gap: 'Keyword matching only',
    opportunity: 'Semantic matching with embeddings finds hidden opportunities',
    impact: 'Users discover jobs they would have missed',
  },
  {
    gap: 'Generic recommendations',
    opportunity: 'Each CV and cover letter tailored to specific job',
    impact: 'Higher response rates from employers',
  },
  {
    gap: 'Fragmented tools',
    opportunity: 'Unified platform: profile → search → apply → track',
    impact: 'Single workflow reduces cognitive load',
  },
  {
    gap: 'Mass application focus',
    opportunity: 'Quality-first approach with deep analysis',
    impact: 'Better jobs, not just more applications',
  },
];

export default function CompetitorsPage() {
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
            <span className="text-purple-400">Competitor Analysis</span>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center">
              <Swords className="text-white" size={28} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Competitor Analysis</h1>
              <p className="text-gray-400 max-w-2xl">
                Deep dive into the job hunting tool market. Understanding competitors helps us
                identify gaps and position JobHunter Pro as the superior solution.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Market Position Banner */}
        <Card delay={0.1} className="mb-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-white mb-2">Our Market Position</h3>
              <p className="text-gray-400 text-sm">
                The only job hunting tool with AI interviews + semantic matching + end-to-end workflow
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-400">First</p>
                <p className="text-xs text-gray-500">AI Interview Tool</p>
              </div>
              <div className="text-center border-l border-[#262626] pl-6">
                <p className="text-2xl font-bold text-purple-400">Only</p>
                <p className="text-xs text-gray-500">Semantic Matching</p>
              </div>
              <div className="text-center border-l border-[#262626] pl-6">
                <p className="text-2xl font-bold text-blue-400">94%+</p>
                <p className="text-xs text-gray-500">Profit Margin</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Competitor Deep Dives */}
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Target className="text-red-400" size={24} />
          Competitor Deep Dive
        </h2>

        <div className="space-y-4 mb-10">
          {competitors.map((comp, index) => (
            <Card key={comp.name} delay={0.2 + index * 0.1}>
              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-white">{comp.name}</h3>
                    <span className="px-2 py-0.5 bg-[#1a1a1a] text-gray-400 rounded text-sm">{comp.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-400" size={14} />
                      <span className="text-sm text-gray-400">{comp.rating}</span>
                    </div>
                    <span className="text-xs text-gray-500">{comp.users} users</span>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-green-400 mb-2">Strengths</h4>
                      <ul className="space-y-1">
                        {comp.strengths.map((s, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-400">{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-red-400 mb-2">Weaknesses</h4>
                      <ul className="space-y-1">
                        {comp.weaknesses.map((w, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <XCircle size={14} className="text-red-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-400">{w}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-64 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Our Advantage</h4>
                  <p className="text-sm text-gray-300">{comp.ourAdvantage}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Feature Comparison Matrix */}
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Award className="text-yellow-400" size={24} />
          Feature Comparison Matrix
        </h2>

        <Card delay={0.7} className="mb-10">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#262626]">
                  <th className="text-left py-3 text-sm font-medium text-gray-400">Feature</th>
                  <th className="text-center py-3 text-sm font-medium text-purple-400">JobHunter Pro</th>
                  <th className="text-center py-3 text-sm font-medium text-gray-400">Teal</th>
                  <th className="text-center py-3 text-sm font-medium text-gray-400">Huntr</th>
                  <th className="text-center py-3 text-sm font-medium text-gray-400">Jobscan</th>
                  <th className="text-center py-3 text-sm font-medium text-gray-400">Careerflow</th>
                </tr>
              </thead>
              <tbody>
                {featureComparison.map((row) => (
                  <tr key={row.feature} className="border-b border-[#262626]/50">
                    <td className="py-3 text-sm text-white">{row.feature}</td>
                    <td className="py-3 text-center">
                      {row.us ? (
                        <CheckCircle2 className="inline text-green-400" size={18} />
                      ) : (
                        <XCircle className="inline text-gray-600" size={18} />
                      )}
                    </td>
                    <td className="py-3 text-center">
                      {row.teal ? (
                        <CheckCircle2 className="inline text-gray-400" size={18} />
                      ) : (
                        <XCircle className="inline text-gray-600" size={18} />
                      )}
                    </td>
                    <td className="py-3 text-center">
                      {row.huntr ? (
                        <CheckCircle2 className="inline text-gray-400" size={18} />
                      ) : (
                        <XCircle className="inline text-gray-600" size={18} />
                      )}
                    </td>
                    <td className="py-3 text-center">
                      {row.jobscan ? (
                        <CheckCircle2 className="inline text-gray-400" size={18} />
                      ) : (
                        <XCircle className="inline text-gray-600" size={18} />
                      )}
                    </td>
                    <td className="py-3 text-center">
                      {row.careerflow ? (
                        <CheckCircle2 className="inline text-gray-400" size={18} />
                      ) : (
                        <XCircle className="inline text-gray-600" size={18} />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Competitive Advantages */}
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Crown className="text-yellow-400" size={24} />
          Our Competitive Advantages
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-10">
          {competitiveAdvantages.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <Card key={adv.title} delay={0.8 + index * 0.1}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-purple-400" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{adv.title}</h3>
                    <p className="text-sm text-gray-400 mb-2">{adv.description}</p>
                    <p className="text-xs text-green-400">Impact: {adv.impact}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Market Gaps */}
        <Card delay={1.1} className="mb-10 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border-blue-500/20">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="text-blue-400" size={20} />
            Market Gaps We're Exploiting
          </h2>
          <div className="space-y-4">
            {marketGaps.map((gap, i) => (
              <div key={i} className="p-4 bg-[#1a1a1a] rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs px-2 py-0.5 bg-red-500/20 text-red-400 rounded">Gap</span>
                  <span className="text-sm text-white font-medium">{gap.gap}</span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">Our Solution</span>
                  <span className="text-sm text-gray-300">{gap.opportunity}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded">Impact</span>
                  <span className="text-sm text-gray-400">{gap.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Conclusion */}
        <Card delay={1.2} className="bg-gradient-to-r from-green-500/5 to-emerald-500/5 border-green-500/20">
          <h2 className="text-lg font-semibold text-white mb-4">Why We Win</h2>
          <p className="text-gray-300 mb-4">
            JobHunter Pro isn't just another job hunting tool—it's the first to combine:
          </p>
          <div className="grid grid-cols-4 gap-4">
            {[
              'AI-powered profile building',
              'Semantic job matching',
              'Dynamic CV generation',
              'End-to-end workflow',
            ].map((item, i) => (
              <div key={i} className="p-3 bg-[#1a1a1a] rounded-lg text-center">
                <CheckCircle2 className="text-green-400 mx-auto mb-2" size={20} />
                <p className="text-sm text-white">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-4">
            No competitor offers all four. Most don't even offer one. This is our opportunity to dominate the market.
          </p>
        </Card>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-10 pt-6 border-t border-[#262626] text-center"
        >
          <p className="text-sm text-gray-500">
            Competitor Analysis | Research conducted January 2026
          </p>
        </motion.div>
      </main>
    </div>
  );
}
