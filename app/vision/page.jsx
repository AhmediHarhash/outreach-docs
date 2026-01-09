'use client';

import { motion } from 'framer-motion';
import {
  Rocket,
  Target,
  Layers,
  Globe,
  Smartphone,
  Monitor,
  Mail,
  Phone,
  DollarSign,
  Users,
  Zap,
  Shield,
  TrendingUp,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import Navigation from '../../components/Navigation';
import Card from '../../components/Card';

const phases = [
  {
    id: 1,
    name: 'Phase 1: Job Intelligence Platform',
    status: 'current',
    description: 'Automated job discovery, matching, and application system',
    features: [
      'Multi-country job aggregation (USA, Europe, Middle East)',
      'AI-powered profile matching and scoring',
      'Smart resume templates per job title',
      'One-click apply with auto-fill',
      'Daily job digest notifications',
      'Visa sponsorship detection (H1B, UK, EU Blue Card)',
    ],
    tiers: [
      { name: 'Free Trial', price: '$0', features: '5 jobs/day for 4 days (20 total)' },
      { name: 'Ship Plan', price: '$19/mo', features: 'Unlimited jobs, manual apply, guided navigation' },
      { name: 'Auto Plan', price: '$59/mo', features: 'Full automation, auto-apply, daily summaries' },
    ],
  },
  {
    id: 2,
    name: 'Phase 2: Email Outreach',
    status: 'planned',
    description: 'Personalized cold email campaigns for job seekers, sales, and marketing',
    features: [
      'AI-powered email personalization',
      'Recruiter/hiring manager discovery',
      'Email warmup and deliverability',
      'Response tracking and analytics',
      'A/B testing for messages',
      'CRM integration',
    ],
  },
  {
    id: 3,
    name: 'Phase 3: AI Cold Calling',
    status: 'future',
    description: 'Voice AI for automated outreach calls',
    features: [
      'ElevenLabs/OpenAI voice synthesis',
      'Natural conversation handling',
      'Call scheduling and follow-ups',
      'Compliance (TCPA, GDPR)',
      'Call recording and transcripts',
      'Integration with CRM',
    ],
  },
  {
    id: 4,
    name: 'Phase 4: Global Scale',
    status: 'future',
    description: 'Multi-language, multi-region deployment',
    features: [
      'Kubernetes regional clusters',
      'Language localization',
      'Regional job board integrations',
      'Low-latency voice AI per region',
      'Enterprise features',
      'White-label solutions',
    ],
  },
];

const platforms = [
  { name: 'Web App', icon: Monitor, tech: 'Next.js 15 + React 19', status: 'Phase 1' },
  { name: 'Desktop App', icon: Monitor, tech: 'Tauri 2 + Rust + React', status: 'Phase 1' },
  { name: 'Mobile App', icon: Smartphone, tech: 'React Native / Flutter', status: 'Phase 1' },
];

const targetMarkets = [
  { region: 'USA', sites: '20+ job boards', priority: 'High' },
  { region: 'UK', sites: '15+ job boards', priority: 'High' },
  { region: 'Germany', sites: '10+ job boards', priority: 'Medium' },
  { region: 'Netherlands', sites: '8+ job boards', priority: 'Medium' },
  { region: 'UAE/Middle East', sites: '10+ job boards', priority: 'Medium' },
  { region: 'France', sites: '8+ job boards', priority: 'Low' },
];

export default function VisionPage() {
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
            <span className="text-white">Vision & Roadmap</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Outreach Platform Vision
          </h1>
          <p className="text-gray-400">
            The billion-dollar job automation platform - Phase 1 roadmap
          </p>
        </motion.div>

        {/* Mission Statement */}
        <Card delay={0.1} className="mb-8 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-indigo-500/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
              <Rocket className="text-indigo-400" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-2">The Mission</h2>
              <p className="text-gray-300">
                Stop people from wasting time scrolling through dozens of job sites, logging in everywhere,
                and manually applying to hundreds of positions. <strong className="text-indigo-400">Everything in one platform.</strong>
              </p>
              <p className="text-gray-400 mt-2">
                Click a job → Website opens inside our app → Navigate to Apply → One click upload with the right template.
                Or pay more, and we do it all automatically.
              </p>
            </div>
          </div>
        </Card>

        {/* Platforms */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {platforms.map((platform, index) => (
            <Card key={platform.name} delay={0.2 + index * 0.1}>
              <div className="flex items-center gap-3 mb-3">
                <platform.icon className="text-indigo-400" size={24} />
                <h3 className="font-semibold text-white">{platform.name}</h3>
              </div>
              <p className="text-sm text-gray-400 mb-2">{platform.tech}</p>
              <span className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-400">
                {platform.status}
              </span>
            </Card>
          ))}
        </div>

        {/* Phases */}
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Layers className="text-purple-400" size={24} />
          Development Phases
        </h2>

        <div className="space-y-6 mb-8">
          {phases.map((phase, index) => (
            <Card
              key={phase.id}
              delay={0.3 + index * 0.1}
              className={phase.status === 'current' ? 'ring-2 ring-indigo-500/50' : ''}
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
                  phase.status === 'current' ? 'bg-indigo-500 text-white' :
                  phase.status === 'planned' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-gray-500/20 text-gray-400'
                }`}>
                  {phase.id}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-white">{phase.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${
                      phase.status === 'current' ? 'bg-indigo-500/20 text-indigo-400' :
                      phase.status === 'planned' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {phase.status}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{phase.description}</p>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-300 mb-2">Features</h4>
                      <ul className="space-y-1">
                        {phase.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                            <CheckCircle2 size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {phase.tiers && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-300 mb-2">Pricing Tiers</h4>
                        <div className="space-y-2">
                          {phase.tiers.map((tier) => (
                            <div key={tier.name} className="p-3 bg-[#1a1a1a] rounded-lg">
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-medium text-white">{tier.name}</span>
                                <span className="text-indigo-400 font-bold">{tier.price}</span>
                              </div>
                              <p className="text-xs text-gray-500">{tier.features}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Target Markets */}
        <Card delay={0.7}>
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Globe className="text-blue-400" size={20} />
            Target Markets (Phase 1)
          </h2>

          <div className="grid grid-cols-3 gap-4">
            {targetMarkets.map((market, index) => (
              <motion.div
                key={market.region}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.05 }}
                className="p-4 bg-[#1a1a1a] rounded-lg border border-[#262626]"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-white">{market.region}</h4>
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    market.priority === 'High' ? 'bg-green-500/20 text-green-400' :
                    market.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {market.priority}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{market.sites}</p>
              </motion.div>
            ))}
          </div>
        </Card>

        {/* Revenue Projection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8"
        >
          <Card className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <TrendingUp className="text-green-400" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">Revenue Model</h3>
                <p className="text-sm text-gray-400">
                  1000 users × $19/mo = <strong className="text-green-400">$19,000/mo</strong> |
                  1000 users × $59/mo = <strong className="text-green-400">$59,000/mo</strong>
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Target: 10,000 users in Year 1 → $190K-$590K ARR
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
