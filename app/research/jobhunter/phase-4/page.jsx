'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Rocket,
  Users,
  CreditCard,
  Shield,
  Globe,
  Zap,
  CheckCircle2,
  ArrowRight,
  Lock,
  Building,
  Star,
  Crown,
  Database,
  Cloud,
  BarChart3,
  Settings,
  Mail,
  HeadphonesIcon,
  Code
} from 'lucide-react';
import Navigation from '../../../../components/Navigation';
import Card from '../../../../components/Card';

const pricingTiers = [
  {
    name: 'Starter',
    price: 19,
    description: 'Perfect for individual job seekers',
    features: [
      '100 job matches per month',
      'Basic CV tailoring',
      'Email notifications',
      'Chrome extension access',
      '5 AI interviews',
      'Standard support',
    ],
    highlighted: false,
    color: 'blue',
  },
  {
    name: 'Professional',
    price: 39,
    description: 'For serious career advancement',
    features: [
      'Unlimited job matches',
      'Advanced CV tailoring',
      'Priority Discord alerts',
      'Chrome extension + API',
      'Unlimited AI interviews',
      'Interview prep assistance',
      'Application analytics',
      'Priority support',
    ],
    highlighted: true,
    color: 'purple',
  },
  {
    name: 'Executive',
    price: 59,
    description: 'Premium career management',
    features: [
      'Everything in Professional',
      'Dedicated account manager',
      'Custom job sourcing',
      'Executive resume writing',
      'LinkedIn optimization',
      'Salary negotiation tips',
      '1-on-1 career coaching',
      '24/7 priority support',
    ],
    highlighted: false,
    color: 'yellow',
  },
];

const enterpriseFeatures = [
  { icon: Users, title: 'Team Management', description: 'Manage multiple users with admin dashboard' },
  { icon: Lock, title: 'SSO Integration', description: 'SAML/OIDC single sign-on support' },
  { icon: Shield, title: 'SOC 2 Compliant', description: 'Enterprise-grade security certifications' },
  { icon: Database, title: 'Data Export', description: 'Full data export and API access' },
  { icon: HeadphonesIcon, title: 'Dedicated Support', description: 'Private Slack channel + SLA' },
  { icon: Settings, title: 'Custom Integrations', description: 'ATS and HRIS integrations' },
];

const saasArchitecture = `┌─────────────────────────────────────────────────────────────────────┐
│                          CLIENTS                                     │
├──────────────────┬──────────────────┬──────────────────────────────┤
│   Flutter App    │   Web Dashboard  │   Chrome Extension           │
│  (Desktop/Mobile)│    (Next.js)     │    (Manifest V3)             │
└────────┬─────────┴────────┬─────────┴─────────────┬────────────────┘
         │                  │                       │
         └──────────────────┼───────────────────────┘
                            │
                    ┌───────▼───────┐
                    │   API Gateway  │  (Rate limiting, Auth check)
                    │   (Railway)    │
                    └───────┬───────┘
                            │
         ┌──────────────────┼──────────────────┐
         │                  │                  │
    ┌────▼────┐       ┌────▼────┐       ┌────▼────┐
    │  Clerk  │       │ FastAPI │       │ Stripe  │
    │  Auth   │       │ Backend │       │ Billing │
    └─────────┘       └────┬────┘       └─────────┘
                           │
         ┌─────────────────┼─────────────────┐
         │                 │                 │
    ┌────▼────┐      ┌────▼────┐      ┌────▼────┐
    │Supabase │      │  Claude │      │ OpenAI  │
    │PostgreSQL│     │   API   │      │Embeddings│
    │ + pgvector│     │         │      │         │
    └─────────┘      └─────────┘      └─────────┘`;

const migrationChanges = [
  {
    component: 'Authentication',
    local: 'No auth (single user)',
    saas: 'Clerk authentication with OAuth providers',
  },
  {
    component: 'AI Service',
    local: 'Claude CLI (subscription-based)',
    saas: 'Claude API (per-token, passed to customer)',
  },
  {
    component: 'Database',
    local: 'Supabase Free Tier',
    saas: 'Supabase Pro with row-level security',
  },
  {
    component: 'Hosting',
    local: 'Railway Hobby ($5/mo)',
    saas: 'Railway Pro with auto-scaling',
  },
  {
    component: 'Notifications',
    local: 'Personal Discord webhook',
    saas: 'Email (SendGrid) + in-app + optional Discord',
  },
  {
    component: 'Analytics',
    local: 'None',
    saas: 'PostHog for product analytics',
  },
];

const implementationSteps = [
  {
    phase: 'Authentication',
    duration: 'Week 1',
    tasks: [
      'Integrate Clerk authentication',
      'Set up OAuth providers (Google, GitHub, LinkedIn)',
      'Implement user sessions and JWT handling',
      'Add protected routes in both frontend and API',
      'Set up user onboarding flow',
    ],
  },
  {
    phase: 'Billing Integration',
    duration: 'Week 2',
    tasks: [
      'Create Stripe account and products',
      'Implement subscription checkout flow',
      'Set up webhook handlers for subscription events',
      'Build billing management UI',
      'Implement usage tracking and limits',
    ],
  },
  {
    phase: 'Multi-Tenancy',
    duration: 'Week 3',
    tasks: [
      'Add tenant_id to all database tables',
      'Implement row-level security policies',
      'Update all queries for multi-tenant access',
      'Build admin dashboard for user management',
      'Add team invitation system',
    ],
  },
  {
    phase: 'Production Infrastructure',
    duration: 'Week 4',
    tasks: [
      'Set up production environment on Railway',
      'Configure auto-scaling and monitoring',
      'Implement rate limiting per subscription tier',
      'Set up error tracking (Sentry)',
      'Configure backup and disaster recovery',
    ],
  },
];

const clerkIntegration = `// middleware.ts - Protecting routes with Clerk
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/pricing", "/api/webhooks(.*)"],
  ignoredRoutes: ["/api/health"],
});

// Backend: Verifying JWT from Clerk
from clerk_backend_api import Clerk
from fastapi import Depends, HTTPException
from fastapi.security import HTTPBearer

clerk = Clerk(api_key=settings.CLERK_SECRET_KEY)
security = HTTPBearer()

async def get_current_user(credentials = Depends(security)):
    try:
        # Verify the JWT from Clerk
        token = credentials.credentials
        session = clerk.sessions.verify_token(token)
        user = clerk.users.get(session.user_id)
        return user
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid token")

# Protected endpoint example
@app.get("/api/profile")
async def get_profile(user = Depends(get_current_user)):
    profile = await profile_repo.get_by_user_id(user.id)
    return profile`;

const stripeIntegration = `// Stripe subscription handling
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// Create checkout session
export async function createCheckoutSession(
  userId: string,
  priceId: string
) {
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: \`\${process.env.APP_URL}/dashboard?success=true\`,
    cancel_url: \`\${process.env.APP_URL}/pricing?canceled=true\`,
    client_reference_id: userId,
    metadata: { userId },
  });
  return session;
}

// Webhook handler
export async function handleWebhook(event: Stripe.Event) {
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      await activateSubscription(session.client_reference_id!, session.subscription as string);
      break;
    }
    case 'customer.subscription.updated': {
      const subscription = event.data.object as Stripe.Subscription;
      await updateSubscriptionStatus(subscription);
      break;
    }
    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription;
      await cancelSubscription(subscription.id);
      break;
    }
  }
}`;

export default function Phase4Page() {
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
            <span className="text-purple-400">Phase IV: SaaS Launch</span>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
              <Rocket className="text-white" size={28} />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-white">Phase IV: SaaS Launch</h1>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Planned</span>
              </div>
              <p className="text-gray-400 max-w-2xl">
                Transform JobHunter Pro into a multi-user SaaS platform with Clerk authentication,
                Stripe billing, and subscription-based pricing tiers.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Target Launch */}
        <Card delay={0.1} className="mb-8 bg-gradient-to-r from-purple-500/5 to-pink-500/5 border-purple-500/20">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-white mb-2">Target Launch</h3>
              <p className="text-gray-400">Q2-Q3 2026</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center px-4">
                <p className="text-2xl font-bold text-purple-400">$19-59</p>
                <p className="text-xs text-gray-500">Monthly tiers</p>
              </div>
              <div className="text-center px-4 border-l border-[#262626]">
                <p className="text-2xl font-bold text-green-400">85%+</p>
                <p className="text-xs text-gray-500">Target margin</p>
              </div>
              <div className="text-center px-4 border-l border-[#262626]">
                <p className="text-2xl font-bold text-blue-400">1000</p>
                <p className="text-xs text-gray-500">Year 1 target</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Pricing Tiers */}
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <CreditCard className="text-green-400" size={24} />
          Pricing Tiers
        </h2>
        <p className="text-gray-400 mb-6">
          Three subscription tiers designed to maximize value at each price point while maintaining healthy margins.
        </p>

        <div className="grid grid-cols-3 gap-4 mb-10">
          {pricingTiers.map((tier, index) => (
            <Card
              key={tier.name}
              delay={0.2 + index * 0.1}
              className={tier.highlighted ? 'border-purple-500/50 bg-gradient-to-b from-purple-500/10 to-transparent' : ''}
            >
              {tier.highlighted && (
                <div className="flex items-center gap-2 mb-4">
                  <Star className="text-purple-400" size={16} />
                  <span className="text-xs text-purple-400">Most Popular</span>
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
              <p className="text-sm text-gray-400 mb-4">{tier.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">${tier.price}</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-2">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 size={16} className={`text-${tier.color}-400 mt-0.5 flex-shrink-0`} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Enterprise */}
        <Card delay={0.5} className="mb-10 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 border-yellow-500/20">
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-xl bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
              <Building className="text-yellow-400" size={24} />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Enterprise</h3>
                  <p className="text-gray-400">Custom solutions for organizations</p>
                </div>
                <span className="text-2xl font-bold text-yellow-400">Custom Pricing</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {enterpriseFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.title} className="flex items-start gap-3">
                      <Icon className="text-yellow-400 mt-0.5" size={16} />
                      <div>
                        <p className="text-sm font-medium text-white">{feature.title}</p>
                        <p className="text-xs text-gray-500">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Card>

        {/* Architecture */}
        <Card delay={0.6} className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Cloud className="text-blue-400" size={20} />
            SaaS Architecture
          </h2>
          <pre className="bg-[#0a0a0a] p-4 rounded-lg text-xs text-gray-300 overflow-x-auto font-mono">
            {saasArchitecture}
          </pre>
        </Card>

        {/* Local vs SaaS */}
        <Card delay={0.7} className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <ArrowRight className="text-purple-400" size={20} />
            Local → SaaS Migration
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#262626]">
                  <th className="text-left py-3 text-sm font-medium text-gray-400">Component</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-400">Phase I (Local)</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-400">Phase IV (SaaS)</th>
                </tr>
              </thead>
              <tbody>
                {migrationChanges.map((change) => (
                  <tr key={change.component} className="border-b border-[#262626]/50">
                    <td className="py-3 text-sm text-white font-medium">{change.component}</td>
                    <td className="py-3 text-sm text-gray-400">{change.local}</td>
                    <td className="py-3 text-sm text-green-400">{change.saas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Implementation Steps */}
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Code className="text-cyan-400" size={24} />
          Implementation Roadmap
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-10">
          {implementationSteps.map((step, index) => (
            <Card key={step.phase} delay={0.8 + index * 0.1}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-white">{step.phase}</h3>
                <span className="text-xs px-2 py-1 bg-[#1a1a1a] text-gray-400 rounded">{step.duration}</span>
              </div>
              <ul className="space-y-2">
                {step.tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 size={14} className="text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">{task}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Code Examples */}
        <Card delay={1.0} className="mb-6">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Lock className="text-green-400" size={20} />
            Clerk Authentication Integration
          </h2>
          <pre className="bg-[#0a0a0a] p-4 rounded-lg text-xs text-gray-300 overflow-x-auto">
            <code>{clerkIntegration}</code>
          </pre>
        </Card>

        <Card delay={1.1} className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <CreditCard className="text-blue-400" size={20} />
            Stripe Subscription Integration
          </h2>
          <pre className="bg-[#0a0a0a] p-4 rounded-lg text-xs text-gray-300 overflow-x-auto">
            <code>{stripeIntegration}</code>
          </pre>
        </Card>

        {/* Revenue Projections */}
        <Card delay={1.2} className="mb-10 bg-gradient-to-r from-green-500/5 to-emerald-500/5 border-green-500/20">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <BarChart3 className="text-green-400" size={20} />
            Revenue Projections (Year 1)
          </h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="p-4 bg-[#1a1a1a] rounded-lg text-center">
              <p className="text-2xl font-bold text-green-400">$50K</p>
              <p className="text-xs text-gray-500">Q1 (100 users)</p>
            </div>
            <div className="p-4 bg-[#1a1a1a] rounded-lg text-center">
              <p className="text-2xl font-bold text-green-400">$100K</p>
              <p className="text-xs text-gray-500">Q2 (300 users)</p>
            </div>
            <div className="p-4 bg-[#1a1a1a] rounded-lg text-center">
              <p className="text-2xl font-bold text-green-400">$180K</p>
              <p className="text-xs text-gray-500">Q3 (600 users)</p>
            </div>
            <div className="p-4 bg-[#1a1a1a] rounded-lg text-center">
              <p className="text-2xl font-bold text-green-400">$300K</p>
              <p className="text-xs text-gray-500">Q4 (1000 users)</p>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Based on average revenue per user of $35/month and conservative growth estimates.
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
            Phase IV Documentation | Last updated: January 10, 2026
          </p>
        </motion.div>
      </main>
    </div>
  );
}
