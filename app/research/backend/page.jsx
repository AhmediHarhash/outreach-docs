'use client';

import { motion } from 'framer-motion';
import {
  Database,
  Server,
  Shield,
  DollarSign,
  CheckCircle2,
  Zap,
  Cloud,
  Lock,
  Users,
  CreditCard,
  Layers,
  GitBranch
} from 'lucide-react';
import Navigation from '../../../components/Navigation';
import Card from '../../../components/Card';

const backendFrameworks = [
  {
    name: 'NestJS + Fastify',
    verdict: 'RECOMMENDED',
    score: 95,
    description: 'Enterprise TypeScript framework with modular architecture and excellent DX',
    features: [
      'TypeScript-first with decorators',
      'Fastify adapter: 2x faster than Express',
      'Built-in dependency injection',
      'Modular architecture (perfect for multi-tenant)',
      'OpenAPI/Swagger auto-generation',
      'WebSocket support built-in',
    ],
    useCase: 'Main API server, job queue management, user services',
  },
  {
    name: 'Rust (Axum)',
    verdict: 'FOR CPU-INTENSIVE',
    score: 90,
    description: 'High-performance systems language for compute-heavy workloads',
    features: [
      '10-50x faster than Node.js for CPU tasks',
      'Memory safe without garbage collection',
      'Excellent for PDF generation, scraping',
      'Low memory footprint',
      'Async with Tokio runtime',
    ],
    useCase: 'Job scraping workers, PDF resume generation, data processing',
  },
];

const databaseStack = {
  primary: {
    name: 'PostgreSQL 16',
    description: 'Production-grade relational database',
    features: [
      'JSONB for flexible schema',
      'Full-text search built-in',
      'Row-level security for multi-tenant',
      'Excellent with Prisma ORM',
    ],
  },
  orm: {
    name: 'Prisma 6.x',
    description: 'Type-safe database client',
    features: [
      'Auto-generated TypeScript types',
      'Migrations with version control',
      'Query builder + raw SQL support',
      'Connection pooling',
    ],
  },
  cache: {
    name: 'Redis 7 / Upstash',
    description: 'In-memory cache and session store',
    features: [
      'Session storage',
      'Rate limiting',
      'Job queue backend (BullMQ)',
      'Pub/Sub for real-time',
    ],
  },
};

const multiTenantStrategy = {
  approach: 'Shared Schema with tenant_id',
  description: 'All tenants share the same database with tenant_id column isolation',
  pros: [
    'Simple to implement and maintain',
    'Cost-effective (single database)',
    'Easy migrations',
    'Works great for SaaS with < 10k tenants',
  ],
  implementation: `// Prisma middleware for automatic tenant filtering
prisma.$use(async (params, next) => {
  if (params.action === 'findMany') {
    params.args.where = {
      ...params.args.where,
      tenantId: currentTenant.id,
    };
  }
  return next(params);
});`,
};

const jobQueues = [
  {
    name: 'Inngest',
    verdict: 'RECOMMENDED',
    score: 95,
    description: 'Serverless job queue with built-in multi-tenant fairness',
    features: [
      'Fair scheduling per tenant (no noisy neighbor)',
      'Automatic retries with backoff',
      'Event-driven architecture',
      'Built-in observability',
      'No infrastructure to manage',
    ],
    pricing: 'Free: 25k steps/mo | Pro: $50/mo for 100k steps',
  },
  {
    name: 'BullMQ',
    verdict: 'SELF-HOSTED',
    score: 85,
    description: 'Redis-based job queue for self-managed infrastructure',
    features: [
      'Full control over workers',
      'Rate limiting per queue',
      'Job prioritization',
      'Repeatable jobs (cron)',
    ],
    pricing: 'Free (need Redis hosting ~$10-20/mo)',
  },
];

const authSolutions = [
  {
    name: 'Clerk',
    verdict: 'RECOMMENDED FOR B2B',
    pricing: 'Free: 10k MAU | Pro: $0.02/MAU',
    features: ['SSO/SAML', 'Organizations', 'MFA', 'User management UI'],
  },
  {
    name: 'Supabase Auth',
    verdict: 'BUDGET OPTION',
    pricing: 'Free: 50k MAU',
    features: ['Social OAuth', 'Magic links', 'RLS integration'],
  },
  {
    name: 'Auth0',
    verdict: 'ENTERPRISE',
    pricing: 'Free: 7.5k MAU | Paid: $$$',
    features: ['Full SSO', 'Advanced MFA', 'Enterprise compliance'],
  },
];

const paymentStack = {
  provider: 'Stripe',
  description: 'Industry standard for SaaS billing',
  features: [
    'Subscription management',
    'Usage-based billing support',
    'Customer portal',
    'Invoicing',
    'Tax calculation',
    'Webhooks for all events',
  ],
  pricing: '2.9% + 30c per transaction',
  implementation: [
    'Stripe Checkout for subscription signup',
    'Stripe Customer Portal for self-service',
    'Webhooks → Inngest for async processing',
    'Metered billing for usage (jobs applied)',
  ],
};

const hostingPhases = [
  {
    phase: 'MVP (0-1k users)',
    platform: 'Railway',
    cost: '$5-20/mo',
    services: [
      'API: 1 instance, 512MB',
      'PostgreSQL: Starter',
      'Redis: Upstash (free tier)',
    ],
  },
  {
    phase: 'Growth (1k-10k users)',
    platform: 'Railway + Fly.io',
    cost: '$50-150/mo',
    services: [
      'API: 2-3 instances, auto-scale',
      'Workers: Fly.io (pay per use)',
      'Database: Railway Pro',
    ],
  },
  {
    phase: 'Scale (10k+ users)',
    platform: 'AWS/GCP',
    cost: '$300-1000/mo',
    services: [
      'ECS/Cloud Run for containers',
      'RDS/Cloud SQL for database',
      'Regional deployment',
    ],
  },
];

const aiIntegration = {
  providers: [
    { name: 'OpenAI GPT-5', use: 'Resume optimization, job matching', cost: '$0.01-0.03/1k tokens' },
    { name: 'Claude Sonnet 4', use: 'Complex analysis, premium features', cost: '$3/1M input tokens' },
    { name: 'GPT-5 Nano/Mini', use: 'High-volume operations', cost: '~$0.001/1k tokens' },
  ],
  strategy: 'Route by task complexity: nano for bulk, sonnet for premium users',
};

export default function BackendResearchPage() {
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
            <span className="text-white">Backend & Infrastructure</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Backend Infrastructure Research - 2026
          </h1>
          <p className="text-gray-400">
            Scalable SaaS architecture for multi-tenant job automation platform
          </p>
        </motion.div>

        {/* Architecture Overview */}
        <Card delay={0.1} className="mb-8 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-indigo-500/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
              <Layers className="text-indigo-400" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Recommended Architecture</h2>
              <p className="text-gray-300 mb-3">
                <strong className="text-indigo-400">NestJS + PostgreSQL + Inngest + Stripe</strong> provides
                the optimal balance of developer productivity, scalability, and cost-effectiveness.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">NestJS API</span>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">PostgreSQL + Prisma</span>
                <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">Inngest Jobs</span>
                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">Stripe Billing</span>
                <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs">Redis Cache</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Backend Frameworks */}
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Server className="text-blue-400" size={24} />
          Backend Frameworks
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {backendFrameworks.map((framework, index) => (
            <Card key={framework.name} delay={0.2 + index * 0.1}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-white">{framework.name}</h3>
                <span className={`text-xs px-2 py-1 rounded ${
                  framework.verdict === 'RECOMMENDED'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {framework.verdict}
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-3">{framework.description}</p>
              <ul className="space-y-1 mb-3">
                {framework.features.map((feature, i) => (
                  <li key={i} className="text-xs text-gray-500 flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-green-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-[#262626]">
                <span className="text-xs text-gray-500">Use Case: </span>
                <span className="text-xs text-indigo-400">{framework.useCase}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Database Stack */}
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Database className="text-green-400" size={24} />
          Database Stack
        </h2>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {Object.entries(databaseStack).map(([key, db], index) => (
            <Card key={key} delay={0.3 + index * 0.1}>
              <h3 className="font-semibold text-white mb-1">{db.name}</h3>
              <p className="text-xs text-gray-500 mb-3">{db.description}</p>
              <ul className="space-y-1">
                {db.features.map((feature, i) => (
                  <li key={i} className="text-xs text-gray-400 flex items-center gap-2">
                    <Zap size={10} className="text-yellow-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Multi-Tenant Strategy */}
        <Card delay={0.4} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Users className="text-purple-400" size={20} />
            Multi-Tenant Strategy: {multiTenantStrategy.approach}
          </h2>
          <p className="text-gray-400 text-sm mb-4">{multiTenantStrategy.description}</p>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-green-400 mb-2">Advantages</h4>
              <ul className="space-y-1">
                {multiTenantStrategy.pros.map((pro, i) => (
                  <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-green-400 mt-0.5" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-400 mb-2">Implementation</h4>
              <pre className="bg-[#0a0a0a] p-3 rounded text-xs text-gray-300 overflow-x-auto">
                {multiTenantStrategy.implementation}
              </pre>
            </div>
          </div>
        </Card>

        {/* Job Queue */}
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <GitBranch className="text-orange-400" size={24} />
          Job Queue Solutions
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {jobQueues.map((queue, index) => (
            <Card key={queue.name} delay={0.5 + index * 0.1}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-white">{queue.name}</h3>
                <span className={`text-xs px-2 py-1 rounded ${
                  queue.verdict === 'RECOMMENDED'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {queue.verdict}
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-3">{queue.description}</p>
              <ul className="space-y-1 mb-3">
                {queue.features.map((feature, i) => (
                  <li key={i} className="text-xs text-gray-500 flex items-center gap-2">
                    <Zap size={10} className="text-yellow-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-[#262626]">
                <span className="text-xs text-gray-500">Pricing: </span>
                <span className="text-xs text-green-400">{queue.pricing}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Authentication */}
        <Card delay={0.6} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Lock className="text-red-400" size={20} />
            Authentication Solutions
          </h2>

          <div className="grid grid-cols-3 gap-4">
            {authSolutions.map((auth) => (
              <div key={auth.name} className="p-4 bg-[#1a1a1a] rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-white">{auth.name}</h4>
                  <span className="text-xs px-2 py-0.5 bg-indigo-500/20 text-indigo-400 rounded">
                    {auth.verdict}
                  </span>
                </div>
                <p className="text-xs text-green-400 mb-2">{auth.pricing}</p>
                <ul className="space-y-1">
                  {auth.features.map((f, i) => (
                    <li key={i} className="text-xs text-gray-500">{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        {/* Payments */}
        <Card delay={0.7} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <CreditCard className="text-green-400" size={20} />
            Payment Stack: {paymentStack.provider}
          </h2>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-gray-400 mb-2">Features</h4>
              <ul className="space-y-1">
                {paymentStack.features.map((f, i) => (
                  <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-green-400" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-400 mb-2">Implementation</h4>
              <ul className="space-y-1">
                {paymentStack.implementation.map((step, i) => (
                  <li key={i} className="text-sm text-gray-500">
                    {i + 1}. {step}
                  </li>
                ))}
              </ul>
              <div className="mt-3 p-2 bg-yellow-500/10 rounded border border-yellow-500/20">
                <span className="text-xs text-yellow-400">Cost: {paymentStack.pricing}</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Hosting Phases */}
        <Card delay={0.8} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Cloud className="text-blue-400" size={20} />
            Hosting Strategy by Phase
          </h2>

          <div className="grid grid-cols-3 gap-4">
            {hostingPhases.map((phase, index) => (
              <div key={phase.phase} className={`p-4 rounded-lg border ${
                index === 0
                  ? 'bg-green-500/10 border-green-500/20'
                  : index === 1
                  ? 'bg-yellow-500/10 border-yellow-500/20'
                  : 'bg-blue-500/10 border-blue-500/20'
              }`}>
                <h4 className="font-medium text-white mb-1">{phase.phase}</h4>
                <p className="text-sm text-indigo-400 mb-2">{phase.platform}</p>
                <p className="text-lg font-bold text-green-400 mb-2">{phase.cost}</p>
                <ul className="space-y-1">
                  {phase.services.map((s, i) => (
                    <li key={i} className="text-xs text-gray-500">{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        {/* AI Integration */}
        <Card delay={0.9}>
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Zap className="text-yellow-400" size={20} />
            AI Integration Strategy
          </h2>

          <div className="overflow-x-auto mb-4">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#262626]">
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Provider</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Use Case</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Cost</th>
                </tr>
              </thead>
              <tbody>
                {aiIntegration.providers.map((provider) => (
                  <tr key={provider.name} className="border-b border-[#262626]/50">
                    <td className="py-3 text-sm text-white">{provider.name}</td>
                    <td className="py-3 text-sm text-gray-400">{provider.use}</td>
                    <td className="py-3 text-sm text-green-400">{provider.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
            <p className="text-sm text-indigo-400">
              <strong>Strategy:</strong> {aiIntegration.strategy}
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
          Research conducted: January 2026 | Sources: NestJS docs, Prisma, Stripe, Inngest, Railway
        </motion.div>
      </main>
    </div>
  );
}
