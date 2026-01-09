'use client';

import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Mic,
  Shield,
  CheckCircle2,
  DollarSign,
  Zap,
  AlertTriangle,
  Users,
  MessageSquare,
  BarChart3,
  Clock
} from 'lucide-react';
import Navigation from '../../../components/Navigation';
import Card from '../../../components/Card';

const emailProviders = [
  {
    name: 'Mailgun',
    verdict: 'RECOMMENDED FOR MVP',
    score: 90,
    description: 'Developer-friendly transactional email with excellent deliverability',
    features: [
      'Email validation API',
      'Webhooks for tracking',
      'Templates + personalization',
      'Detailed analytics',
      'Good deliverability tools',
    ],
    pricing: 'Free: 100 emails/day | Flex: $0.80/1000 emails',
    deliverability: '95%+ inbox rate',
  },
  {
    name: 'Amazon SES',
    verdict: 'BEST FOR SCALE',
    score: 88,
    description: 'Cheapest at scale, requires more setup',
    features: [
      'Lowest cost per email',
      'AWS integration',
      'Dedicated IPs available',
      'Configurable bounce handling',
    ],
    pricing: '$0.10/1000 emails (after free tier)',
    deliverability: '90-95% with proper setup',
  },
  {
    name: 'SendGrid',
    verdict: 'ENTERPRISE',
    score: 85,
    description: 'Full-featured but more expensive',
    features: [
      'Advanced analytics',
      'Email design tools',
      'Marketing automation',
      'IP warming included',
    ],
    pricing: 'Free: 100/day | Pro: $19.95/mo for 50k',
    deliverability: '96%+ with reputation management',
  },
  {
    name: 'Resend',
    verdict: 'MODERN DX',
    score: 85,
    description: 'React Email + modern API, newer player',
    features: [
      'React Email components',
      'Beautiful default templates',
      'Simple API',
      'Built by Vercel alumni',
    ],
    pricing: 'Free: 100/day | Pro: $20/mo for 50k',
    deliverability: '93%+',
  },
];

const voiceAIProviders = [
  {
    name: 'Vapi.ai',
    verdict: 'RECOMMENDED',
    score: 95,
    description: 'Purpose-built for AI phone calls with low latency',
    features: [
      'Sub-500ms response latency',
      'Built-in STT/TTS pipeline',
      'Call transfer to humans',
      'Webhook integrations',
      'Conversation analytics',
      'Multi-turn conversations',
    ],
    pricing: '$0.05/minute (includes everything)',
    languages: '50+ languages supported',
    compliance: 'TCPA, GDPR compliant infrastructure',
  },
  {
    name: 'Bland.ai',
    verdict: 'GOOD ALTERNATIVE',
    score: 88,
    description: 'High-quality voice AI with enterprise focus',
    features: [
      'Natural voice synthesis',
      'Custom voice cloning',
      'CRM integrations',
      'Call recording',
    ],
    pricing: '$0.09/minute',
    languages: '30+ languages',
    compliance: 'SOC 2, HIPAA compliant',
  },
  {
    name: 'Retell.ai',
    verdict: 'DEVELOPER FRIENDLY',
    score: 85,
    description: 'Simple API for building voice agents',
    features: [
      'Easy SDK integration',
      'Custom LLM support',
      'Real-time transcription',
      'WebSocket streaming',
    ],
    pricing: '$0.07/minute',
    languages: '20+ languages',
    compliance: 'GDPR compliant',
  },
];

const voiceSynthesis = [
  {
    name: 'ElevenLabs',
    quality: 'Best',
    description: 'Industry-leading voice quality and emotion',
    pricing: 'Free: 10k chars | $5/mo: 30k chars | $22/mo: 100k chars',
    latency: '~300ms',
    features: ['Voice cloning', 'Emotion control', '29 languages'],
  },
  {
    name: 'OpenAI TTS',
    quality: 'Great',
    description: 'Consistent quality, easy integration',
    pricing: '$15/1M characters',
    latency: '~200ms',
    features: ['6 voices', 'Real-time streaming', 'HD quality'],
  },
  {
    name: 'Play.ht',
    quality: 'Good',
    description: 'Many voices, good for variety',
    pricing: '$39/mo unlimited',
    latency: '~400ms',
    features: ['900+ voices', 'Voice cloning', 'SSML support'],
  },
];

const complianceRules = [
  {
    regulation: 'TCPA (USA)',
    rules: [
      'Prior express consent required for auto-dialers',
      'Honor Do-Not-Call registry',
      'Identify caller at start of call',
      'Provide opt-out mechanism',
      'No calls before 8am or after 9pm local time',
    ],
    penalty: 'Up to $1,500 per violation',
  },
  {
    regulation: 'GDPR (EU)',
    rules: [
      'Explicit consent for marketing',
      'Right to be forgotten',
      'Data processing transparency',
      'Record of consent required',
    ],
    penalty: 'Up to 4% of annual revenue',
  },
  {
    regulation: 'CAN-SPAM (Email)',
    rules: [
      'Clear sender identification',
      'Honest subject lines',
      'Physical address required',
      'Easy unsubscribe mechanism',
      'Honor opt-outs within 10 days',
    ],
    penalty: '$50,000+ per violation',
  },
];

const emailWarmupStrategy = {
  description: 'Gradually increase sending volume to build sender reputation',
  phases: [
    { week: 'Week 1-2', volume: '10-20 emails/day', action: 'Send to engaged contacts only' },
    { week: 'Week 3-4', volume: '50-100 emails/day', action: 'Expand to warm leads' },
    { week: 'Week 5-6', volume: '200-500 emails/day', action: 'Add cold outreach' },
    { week: 'Week 7+', volume: '1000+ emails/day', action: 'Full volume, monitor bounces' },
  ],
  tools: [
    { name: 'Warmup Inbox', description: 'Automated email warmup', pricing: '$15/mo per inbox' },
    { name: 'Lemwarm', description: 'Part of Lemlist suite', pricing: 'Included with Lemlist' },
    { name: 'Mailwarm', description: 'Simple warmup service', pricing: '$79/mo' },
  ],
};

const outreachFlow = {
  email: [
    { step: 1, action: 'Find recruiter/hiring manager email', tool: 'Hunter.io, Apollo.io' },
    { step: 2, action: 'Personalize message with job + company details', tool: 'GPT-5 nano' },
    { step: 3, action: 'Send initial outreach email', tool: 'Mailgun' },
    { step: 4, action: 'Track opens and clicks', tool: 'Webhooks' },
    { step: 5, action: 'Automated follow-up (3-5 days later)', tool: 'Inngest scheduled job' },
    { step: 6, action: 'Log response in CRM', tool: 'HubSpot/Pipedrive API' },
  ],
  voice: [
    { step: 1, action: 'Queue call in scheduler', tool: 'Inngest' },
    { step: 2, action: 'Initiate AI call', tool: 'Vapi.ai' },
    { step: 3, action: 'AI introduces self and purpose', tool: 'Custom prompt' },
    { step: 4, action: 'Handle objections/questions', tool: 'LLM + knowledge base' },
    { step: 5, action: 'Transfer to human or schedule callback', tool: 'Vapi transfer' },
    { step: 6, action: 'Log call outcome + transcript', tool: 'Webhook → Database' },
  ],
};

const costs = {
  email: [
    { item: 'Mailgun (MVP)', volume: '10k emails/mo', cost: '$35/mo' },
    { item: 'Hunter.io (email finding)', volume: '500 searches/mo', cost: 'Free tier' },
    { item: 'Email warmup', volume: '1 inbox', cost: '$15/mo' },
  ],
  voice: [
    { item: 'Vapi.ai', volume: '1000 min/mo', cost: '$50/mo' },
    { item: 'Phone number', volume: '1 number', cost: '$1/mo' },
    { item: 'Twilio backup', volume: 'Pay per use', cost: '$0.013/min' },
  ],
};

export default function OutreachResearchPage() {
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
            <span className="text-white">Email & Calling</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Email & AI Cold Calling Research - 2026
          </h1>
          <p className="text-gray-400">
            Outreach automation strategies for job seekers, sales, and marketing
          </p>
        </motion.div>

        {/* Recommendation */}
        <Card delay={0.1} className="mb-8 bg-gradient-to-r from-orange-500/10 to-red-500/10 border-orange-500/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
              <MessageSquare className="text-orange-400" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Recommended Stack</h2>
              <p className="text-gray-300">
                <strong className="text-orange-400">Email:</strong> Mailgun (MVP) → Amazon SES (scale) |
                <strong className="text-orange-400 ml-2">Voice:</strong> Vapi.ai ($0.05/min) + ElevenLabs voices |
                <strong className="text-orange-400 ml-2">Email Finding:</strong> Hunter.io (free tier)
              </p>
            </div>
          </div>
        </Card>

        {/* Email Providers */}
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Mail className="text-blue-400" size={24} />
          Email Service Providers
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {emailProviders.map((provider, index) => (
            <Card key={provider.name} delay={0.2 + index * 0.05}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-white">{provider.name}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      provider.verdict.includes('RECOMMENDED')
                        ? 'bg-green-500/20 text-green-400'
                        : provider.verdict.includes('SCALE')
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-gray-500/20 text-gray-400'
                    }`}>
                      {provider.verdict}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">{provider.description}</p>
                </div>
                <div className="text-xl font-bold text-indigo-400">{provider.score}</div>
              </div>

              <ul className="space-y-1 mb-3">
                {provider.features.slice(0, 4).map((f, i) => (
                  <li key={i} className="text-xs text-gray-400 flex items-center gap-2">
                    <CheckCircle2 size={10} className="text-green-400" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-[#262626] grid grid-cols-2 gap-2">
                <div>
                  <span className="text-xs text-gray-500">Pricing: </span>
                  <span className="text-xs text-green-400">{provider.pricing}</span>
                </div>
                <div>
                  <span className="text-xs text-gray-500">Inbox Rate: </span>
                  <span className="text-xs text-yellow-400">{provider.deliverability}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Voice AI Providers */}
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Phone className="text-green-400" size={24} />
          Voice AI Providers
        </h2>

        <div className="space-y-4 mb-8">
          {voiceAIProviders.map((provider, index) => (
            <Card key={provider.name} delay={0.3 + index * 0.1}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-white">{provider.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${
                      provider.verdict === 'RECOMMENDED'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {provider.verdict}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{provider.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-indigo-400">{provider.score}</div>
                  <div className="text-xs text-gray-500">Score</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Features</h4>
                  <ul className="space-y-1">
                    {provider.features.map((f, i) => (
                      <li key={i} className="text-xs text-gray-400 flex items-center gap-2">
                        <Zap size={10} className="text-yellow-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="p-2 bg-[#1a1a1a] rounded">
                    <span className="text-xs text-gray-500">Pricing: </span>
                    <span className="text-sm text-green-400 font-medium">{provider.pricing}</span>
                  </div>
                  <div className="p-2 bg-[#1a1a1a] rounded">
                    <span className="text-xs text-gray-500">Languages: </span>
                    <span className="text-xs text-blue-400">{provider.languages}</span>
                  </div>
                  <div className="p-2 bg-[#1a1a1a] rounded">
                    <span className="text-xs text-gray-500">Compliance: </span>
                    <span className="text-xs text-purple-400">{provider.compliance}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Voice Synthesis */}
        <Card delay={0.5} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Mic className="text-purple-400" size={20} />
            Voice Synthesis Providers
          </h2>

          <div className="grid grid-cols-3 gap-4">
            {voiceSynthesis.map((voice) => (
              <div key={voice.name} className="p-4 bg-[#1a1a1a] rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-white">{voice.name}</h4>
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    voice.quality === 'Best'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {voice.quality}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-2">{voice.description}</p>
                <div className="space-y-1 text-xs">
                  <div><span className="text-gray-500">Price: </span><span className="text-green-400">{voice.pricing}</span></div>
                  <div><span className="text-gray-500">Latency: </span><span className="text-yellow-400">{voice.latency}</span></div>
                </div>
                <div className="mt-2 pt-2 border-t border-[#262626]">
                  {voice.features.map((f, i) => (
                    <span key={i} className="inline-block text-xs bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded mr-1 mb-1">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Email Warmup */}
        <Card delay={0.6} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Clock className="text-yellow-400" size={20} />
            Email Warmup Strategy
          </h2>

          <p className="text-gray-400 text-sm mb-4">{emailWarmupStrategy.description}</p>

          <div className="grid grid-cols-4 gap-3 mb-4">
            {emailWarmupStrategy.phases.map((phase, index) => (
              <div key={phase.week} className={`p-3 rounded-lg border ${
                index === 0 ? 'bg-green-500/10 border-green-500/20' :
                index === 1 ? 'bg-yellow-500/10 border-yellow-500/20' :
                index === 2 ? 'bg-orange-500/10 border-orange-500/20' :
                'bg-red-500/10 border-red-500/20'
              }`}>
                <h4 className="font-medium text-white text-sm">{phase.week}</h4>
                <p className="text-lg font-bold text-indigo-400">{phase.volume}</p>
                <p className="text-xs text-gray-500">{phase.action}</p>
              </div>
            ))}
          </div>

          <h4 className="text-sm font-medium text-gray-400 mb-2">Warmup Tools</h4>
          <div className="grid grid-cols-3 gap-3">
            {emailWarmupStrategy.tools.map((tool) => (
              <div key={tool.name} className="p-2 bg-[#1a1a1a] rounded">
                <span className="text-sm text-white">{tool.name}</span>
                <span className="text-xs text-green-400 ml-2">{tool.pricing}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Compliance */}
        <Card delay={0.7} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Shield className="text-red-400" size={20} />
            Compliance Requirements
          </h2>

          <div className="space-y-4">
            {complianceRules.map((reg) => (
              <div key={reg.regulation} className="p-4 bg-[#1a1a1a] rounded-lg border-l-2 border-red-500">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-white">{reg.regulation}</h4>
                  <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">
                    Penalty: {reg.penalty}
                  </span>
                </div>
                <ul className="grid grid-cols-2 gap-1">
                  {reg.rules.map((rule, i) => (
                    <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                      <AlertTriangle size={10} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        {/* Outreach Flow */}
        <Card delay={0.8} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <BarChart3 className="text-blue-400" size={20} />
            Outreach Automation Flows
          </h2>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-blue-400 mb-3 flex items-center gap-2">
                <Mail size={16} />
                Email Flow
              </h4>
              <ol className="space-y-2">
                {outreachFlow.email.map((item) => (
                  <li key={item.step} className="flex items-start gap-3 text-sm">
                    <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 text-xs flex items-center justify-center flex-shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <span className="text-gray-300">{item.action}</span>
                      <span className="text-xs text-gray-500 block">{item.tool}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h4 className="text-sm font-medium text-green-400 mb-3 flex items-center gap-2">
                <Phone size={16} />
                Voice AI Flow
              </h4>
              <ol className="space-y-2">
                {outreachFlow.voice.map((item) => (
                  <li key={item.step} className="flex items-start gap-3 text-sm">
                    <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 text-xs flex items-center justify-center flex-shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <span className="text-gray-300">{item.action}</span>
                      <span className="text-xs text-gray-500 block">{item.tool}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Card>

        {/* Costs */}
        <Card delay={0.9}>
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <DollarSign className="text-green-400" size={20} />
            Monthly Cost Estimates
          </h2>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-blue-400 mb-2">Email Outreach</h4>
              <div className="space-y-2">
                {costs.email.map((item) => (
                  <div key={item.item} className="flex justify-between p-2 bg-[#1a1a1a] rounded">
                    <div>
                      <span className="text-sm text-white">{item.item}</span>
                      <span className="text-xs text-gray-500 block">{item.volume}</span>
                    </div>
                    <span className="text-sm text-green-400 font-medium">{item.cost}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-green-400 mb-2">Voice AI</h4>
              <div className="space-y-2">
                {costs.voice.map((item) => (
                  <div key={item.item} className="flex justify-between p-2 bg-[#1a1a1a] rounded">
                    <div>
                      <span className="text-sm text-white">{item.item}</span>
                      <span className="text-xs text-gray-500 block">{item.volume}</span>
                    </div>
                    <span className="text-sm text-green-400 font-medium">{item.cost}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
            <p className="text-sm text-green-400">
              <strong>Total MVP Cost:</strong> ~$100-150/month for email + voice AI outreach capabilities
            </p>
          </div>
        </Card>

        {/* Research Date */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center text-sm text-gray-500"
        >
          Research conducted: January 2026 | Sources: Vapi.ai, Mailgun, ElevenLabs, FTC.gov, GDPR.eu
        </motion.div>
      </main>
    </div>
  );
}
