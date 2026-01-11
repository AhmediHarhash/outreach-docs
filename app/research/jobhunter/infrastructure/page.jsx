'use client';

import {
  Server,
  Database,
  Cloud,
  Globe,
  Zap,
  Shield,
  Webhook,
  HardDrive,
  Cpu,
  Network,
  ArrowRight,
  Terminal,
  Settings,
  Key,
  Clock,
  Activity,
  BarChart3,
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  FileCode,
  Layers
} from 'lucide-react';

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
              <Server className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 text-sm font-medium">Infrastructure</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Complete
              <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Infrastructure
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Every service, API, database, and hosting provider that powers JobHunter Pro -
              with exact configurations, endpoints, and pricing
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Infrastructure Overview */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl">
              <Network className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Infrastructure Overview</h2>
          </div>

          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-bold text-white mb-6">Complete Service Map</h3>

            <div className="bg-slate-900/50 rounded-xl p-8 overflow-x-auto">
              <pre className="text-sm text-slate-300 font-mono whitespace-pre">
{`┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                              JOBHUNTER PRO INFRASTRUCTURE                                │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                          │
│   ┌─────────────────────────────────────────────────────────────────────────────────┐   │
│   │                           HOSTING & DEPLOYMENT                                   │   │
│   │                                                                                  │   │
│   │   ┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐              │   │
│   │   │    Railway      │   │    Vercel       │   │   Supabase      │              │   │
│   │   │                 │   │   (Optional)    │   │                 │              │   │
│   │   │  Python Backend │   │   Docs Site     │   │   PostgreSQL    │              │   │
│   │   │  $5-20/month    │   │   $0 (hobby)    │   │   $0-25/month   │              │   │
│   │   └─────────────────┘   └─────────────────┘   └─────────────────┘              │   │
│   │                                                                                  │   │
│   └─────────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                          │
│   ┌─────────────────────────────────────────────────────────────────────────────────┐   │
│   │                              AI SERVICES                                         │   │
│   │                                                                                  │   │
│   │   ┌─────────────────┐   ┌─────────────────┐                                     │   │
│   │   │   Claude CLI    │   │   OpenAI API    │                                     │   │
│   │   │                 │   │                 │                                     │   │
│   │   │  AI Operations  │   │   Embeddings    │                                     │   │
│   │   │  $20/month sub  │   │   $0.13/1M tok  │                                     │   │
│   │   └─────────────────┘   └─────────────────┘                                     │   │
│   │                                                                                  │   │
│   └─────────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                          │
│   ┌─────────────────────────────────────────────────────────────────────────────────┐   │
│   │                              JOB DATA APIs                                       │   │
│   │                                                                                  │   │
│   │   ┌─────────────────┐   ┌─────────────────┐                                     │   │
│   │   │   Adzuna API    │   │   Jooble API    │                                     │   │
│   │   │                 │   │                 │                                     │   │
│   │   │  16 countries   │   │  60+ countries  │                                     │   │
│   │   │  250 calls/day  │   │  Unlimited      │                                     │   │
│   │   │  FREE           │   │  FREE           │                                     │   │
│   │   └─────────────────┘   └─────────────────┘                                     │   │
│   │                                                                                  │   │
│   └─────────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                          │
│   ┌─────────────────────────────────────────────────────────────────────────────────┐   │
│   │                         SAAS ADDITIONS (Phase 4)                                 │   │
│   │                                                                                  │   │
│   │   ┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐              │   │
│   │   │     Clerk       │   │     Stripe      │   │    Upstash      │              │   │
│   │   │                 │   │                 │   │                 │              │   │
│   │   │  Auth + Users   │   │   Payments      │   │   Redis Cache   │              │   │
│   │   │  $0-25/month    │   │   2.9% + 30¢    │   │   $0-10/month   │              │   │
│   │   └─────────────────┘   └─────────────────┘   └─────────────────┘              │   │
│   │                                                                                  │   │
│   └─────────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                          │
└─────────────────────────────────────────────────────────────────────────────────────────┘`}
              </pre>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">~$25</div>
              <div className="text-slate-400 text-sm">Local Mode/Month</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">~$45</div>
              <div className="text-slate-400 text-sm">SaaS Base/Month</div>
            </div>
            <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-violet-400 mb-2">8</div>
              <div className="text-slate-400 text-sm">External Services</div>
            </div>
            <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">99.9%</div>
              <div className="text-slate-400 text-sm">Target Uptime</div>
            </div>
          </div>
        </section>

        {/* Railway - Backend Hosting */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl">
              <Cloud className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Railway - Backend Hosting</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Service Configuration</h3>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm rounded-full">Active</span>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-900/50 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-400">Service Name</span>
                    <span className="text-white font-mono">jobhunter-api</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-400">Runtime</span>
                    <span className="text-white">Python 3.12</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-400">Region</span>
                    <span className="text-white">US East (Virginia)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Memory</span>
                    <span className="text-white">512MB - 2GB (auto-scale)</span>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-4">
                  <h4 className="font-semibold text-white mb-3">Deployment</h4>
                  <div className="font-mono text-sm space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400">URL</span>
                      <span className="text-violet-400">jobhunter-api-production.up.railway.app</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Build</span>
                      <span className="text-slate-300">nixpacks (auto-detect)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Start Command</span>
                      <span className="text-slate-300">uvicorn main:app --host 0.0.0.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Pricing Tiers</h3>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-xl p-4 border border-slate-600">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-white">Hobby Plan</h4>
                    <span className="text-emerald-400 font-bold">$5/month</span>
                  </div>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li>• 512MB RAM, shared vCPU</li>
                    <li>• 100GB bandwidth</li>
                    <li>• Custom domains</li>
                    <li>• ✓ Perfect for local/dev use</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-xl p-4 border border-violet-500/30">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-white">Pro Plan</h4>
                    <span className="text-violet-400 font-bold">$20/month</span>
                  </div>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li>• 8GB RAM, dedicated vCPU</li>
                    <li>• Unlimited bandwidth</li>
                    <li>• Auto-scaling replicas</li>
                    <li>• ✓ Required for SaaS production</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                <div className="flex items-center gap-2 text-amber-400 mb-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span className="font-semibold">Resource Usage</span>
                </div>
                <p className="text-sm text-slate-400">
                  Usage-based billing applies beyond tier limits. Estimated $0.000231/minute
                  of compute. A typical month runs ~$8-15 on hobby tier.
                </p>
              </div>
            </div>
          </div>

          {/* Railway Configuration Files */}
          <div className="mt-8 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Configuration Files</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FileCode className="w-4 h-4 text-violet-400" />
                  <span className="font-mono text-white">railway.json</span>
                </div>
                <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm">
                  <pre className="text-slate-300">
{`{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "numReplicas": 1,
    "sleepApplication": false,
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}`}
                  </pre>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FileCode className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono text-white">Procfile</span>
                </div>
                <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm">
                  <pre className="text-slate-300">
{`web: uvicorn main:app --host 0.0.0.0 --port $PORT`}
                  </pre>
                </div>

                <div className="flex items-center gap-2 mb-3 mt-6">
                  <FileCode className="w-4 h-4 text-blue-400" />
                  <span className="font-mono text-white">requirements.txt</span>
                </div>
                <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm">
                  <pre className="text-slate-300">
{`fastapi==0.109.0
uvicorn[standard]==0.27.0
pydantic==2.5.0
httpx==0.26.0
openai==1.10.0
python-multipart==0.0.6
weasyprint==60.0`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supabase - Database */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl">
              <Database className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Supabase - Database & Storage</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Database Configuration</h3>

              <div className="space-y-4">
                <div className="bg-slate-900/50 rounded-xl p-4">
                  <h4 className="font-semibold text-white mb-3">PostgreSQL 15 + pgvector</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Version</span>
                      <span className="text-white">15.1.0.117</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Region</span>
                      <span className="text-white">US East (N. Virginia)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Extensions</span>
                      <span className="text-emerald-400">pgvector, uuid-ossp</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Connection Pooling</span>
                      <span className="text-white">PgBouncer (Transaction mode)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-4">
                  <h4 className="font-semibold text-white mb-3">Connection Strings</h4>
                  <div className="font-mono text-xs space-y-2">
                    <div>
                      <span className="text-slate-400">Direct:</span>
                      <div className="text-slate-300 break-all mt-1">
                        postgresql://postgres.[project]:[password]@aws-0-us-east-1.pooler.supabase.com:5432/postgres
                      </div>
                    </div>
                    <div className="mt-3">
                      <span className="text-slate-400">Pooler (recommended):</span>
                      <div className="text-slate-300 break-all mt-1">
                        postgresql://postgres.[project]:[password]@aws-0-us-east-1.pooler.supabase.com:6543/postgres
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Pricing</h3>

              <div className="space-y-4">
                <div className="bg-slate-700/50 rounded-xl p-4 border border-slate-600">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-white">Free Tier</h4>
                    <span className="text-emerald-400 font-bold">$0/month</span>
                  </div>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li>• 500MB database</li>
                    <li>• 1GB file storage</li>
                    <li>• 2GB bandwidth</li>
                    <li>• 50K monthly active users</li>
                    <li>• ✓ Perfect for local use</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-xl p-4 border border-emerald-500/30">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-white">Pro Tier</h4>
                    <span className="text-emerald-400 font-bold">$25/month</span>
                  </div>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li>• 8GB database</li>
                    <li>• 100GB file storage</li>
                    <li>• 250GB bandwidth</li>
                    <li>• Unlimited users</li>
                    <li>• Daily backups</li>
                    <li>• ✓ Required for SaaS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Database Schema */}
          <div className="mt-8 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Complete Database Schema</h3>

            <div className="bg-slate-900 rounded-xl p-6 font-mono text-sm overflow-x-auto">
              <pre className="text-slate-300">
{`-- Enable pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- Users table (SaaS mode with Clerk)
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    clerk_id VARCHAR(255) UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    tier VARCHAR(50) DEFAULT 'free',
    stripe_customer_id VARCHAR(255),
    stripe_subscription_id VARCHAR(255),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- User profiles with embeddings
CREATE TABLE profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    full_name VARCHAR(255),
    target_title VARCHAR(255),
    skills TEXT[],
    experience_years INTEGER,
    experience_summary TEXT,
    education JSONB,
    location_preferences TEXT[],
    salary_min INTEGER,
    salary_max INTEGER,
    work_style VARCHAR(50), -- remote, hybrid, onsite
    linkedin_url VARCHAR(500),
    github_url VARCHAR(500),
    embedding VECTOR(3072), -- OpenAI text-embedding-3-large
    raw_cv_text TEXT,
    interview_complete BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Jobs from aggregators
CREATE TABLE jobs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    external_id VARCHAR(255),
    source VARCHAR(50), -- 'adzuna', 'jooble'
    title VARCHAR(500) NOT NULL,
    company VARCHAR(255),
    location VARCHAR(255),
    salary_min INTEGER,
    salary_max INTEGER,
    salary_currency VARCHAR(10) DEFAULT 'USD',
    description TEXT,
    requirements TEXT,
    url VARCHAR(1000),
    embedding VECTOR(3072),
    job_hash VARCHAR(32) UNIQUE, -- For deduplication
    posted_at TIMESTAMPTZ,
    expires_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Job matches (profile <-> job scores)
CREATE TABLE job_matches (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    job_id UUID REFERENCES jobs(id) ON DELETE CASCADE,
    similarity_score FLOAT NOT NULL,
    match_reasons JSONB,
    viewed BOOLEAN DEFAULT FALSE,
    saved BOOLEAN DEFAULT FALSE,
    applied BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(profile_id, job_id)
);

-- Applications tracking
CREATE TABLE applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    job_id UUID REFERENCES jobs(id) ON DELETE SET NULL,
    job_title VARCHAR(500),
    company VARCHAR(255),
    status VARCHAR(50) DEFAULT 'applied', -- applied, interviewing, offered, rejected, accepted
    cv_version_id UUID,
    cover_letter TEXT,
    notes TEXT,
    applied_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Generated CVs cache
CREATE TABLE cv_cache (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    content_hash VARCHAR(64) UNIQUE, -- SHA256(profile + job)
    profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    job_id UUID REFERENCES jobs(id) ON DELETE SET NULL,
    cv_json JSONB,
    cv_pdf_url VARCHAR(500),
    cv_html TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Analytics events
CREATE TABLE analytics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    event_type VARCHAR(100),
    event_data JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_profiles_user_id ON profiles(user_id);
CREATE INDEX idx_profiles_embedding ON profiles USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);
CREATE INDEX idx_jobs_embedding ON jobs USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);
CREATE INDEX idx_jobs_created_at ON jobs(created_at DESC);
CREATE INDEX idx_jobs_location ON jobs(location);
CREATE INDEX idx_job_matches_profile_id ON job_matches(profile_id);
CREATE INDEX idx_job_matches_score ON job_matches(similarity_score DESC);
CREATE INDEX idx_applications_user_id ON applications(user_id);
CREATE INDEX idx_applications_status ON applications(status);

-- Row Level Security (SaaS mode)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE cv_cache ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can only access own data" ON users
    FOR ALL USING (auth.uid()::text = clerk_id);

CREATE POLICY "Users can only access own profiles" ON profiles
    FOR ALL USING (user_id IN (SELECT id FROM users WHERE clerk_id = auth.uid()::text));`}
              </pre>
            </div>
          </div>
        </section>

        {/* OpenAI API */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">OpenAI API - Embeddings</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Model Configuration</h3>

              <div className="space-y-4">
                <div className="bg-slate-900/50 rounded-xl p-4">
                  <h4 className="font-semibold text-white mb-3">text-embedding-3-large</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Dimensions</span>
                      <span className="text-cyan-400 font-bold">3072</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Max Input</span>
                      <span className="text-white">8191 tokens</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Pricing</span>
                      <span className="text-emerald-400">$0.13 / 1M tokens</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Performance</span>
                      <span className="text-white">MTEB: 64.6%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-4">
                  <h4 className="font-semibold text-white mb-2">Why text-embedding-3-large?</h4>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li>• Best semantic understanding for job matching</li>
                    <li>• 3072 dimensions capture nuanced skill relationships</li>
                    <li>• Cost-effective: ~$0.65 for 500K job embeddings</li>
                    <li>• pgvector optimized for high-dim vectors</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">API Integration</h3>

              <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-slate-300">
{`import openai
from typing import List

class EmbeddingService:
    def __init__(self, api_key: str):
        self.client = openai.OpenAI(api_key=api_key)
        self.model = "text-embedding-3-large"

    def embed_text(self, text: str) -> List[float]:
        """Generate embedding for text."""
        response = self.client.embeddings.create(
            input=text,
            model=self.model,
            dimensions=3072  # Full dimensions
        )
        return response.data[0].embedding

    def embed_batch(
        self,
        texts: List[str]
    ) -> List[List[float]]:
        """Batch embed multiple texts."""
        response = self.client.embeddings.create(
            input=texts,
            model=self.model,
            dimensions=3072
        )
        return [item.embedding for item in response.data]`}
                </pre>
              </div>

              <div className="mt-4 p-4 bg-slate-900/50 rounded-xl">
                <h4 className="font-semibold text-white mb-2">Cost Estimation</h4>
                <div className="text-sm text-slate-400 space-y-1">
                  <div className="flex justify-between">
                    <span>1 profile embed (~500 tokens)</span>
                    <span className="text-slate-300">$0.000065</span>
                  </div>
                  <div className="flex justify-between">
                    <span>1 job embed (~1000 tokens)</span>
                    <span className="text-slate-300">$0.00013</span>
                  </div>
                  <div className="flex justify-between">
                    <span>1000 users + 10K jobs/month</span>
                    <span className="text-emerald-400 font-bold">~$1.40</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job APIs */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Job Data APIs</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Adzuna */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <img src="https://www.adzuna.co.uk/favicon.ico" alt="Adzuna" className="w-8 h-8 rounded" />
                <div>
                  <h3 className="text-xl font-bold text-white">Adzuna API</h3>
                  <a href="https://developer.adzuna.com/" target="_blank" rel="noopener noreferrer"
                     className="text-amber-400 text-sm hover:underline flex items-center gap-1">
                    developer.adzuna.com <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-900/50 rounded-xl p-4">
                  <h4 className="font-semibold text-white mb-3">Coverage</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-slate-400">Countries</div>
                    <div className="text-white">16 (US, UK, AU, DE, FR...)</div>
                    <div className="text-slate-400">Job Boards</div>
                    <div className="text-white">1000+ sources</div>
                    <div className="text-slate-400">Daily Jobs</div>
                    <div className="text-white">~100K new listings</div>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-4">
                  <h4 className="font-semibold text-white mb-3">Rate Limits</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Free Tier</span>
                      <span className="text-emerald-400">250 calls/day</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Results/Call</span>
                      <span className="text-white">50 max</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Total/Day</span>
                      <span className="text-white">12,500 jobs</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 rounded-xl p-4 font-mono text-xs">
                  <pre className="text-slate-300 overflow-x-auto">
{`GET https://api.adzuna.com/v1/api/jobs/gb/search/1
?app_id={APP_ID}
&app_key={API_KEY}
&what=software%20engineer
&where=london
&results_per_page=50
&content-type=application/json`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Jooble */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <img src="https://jooble.org/favicon.ico" alt="Jooble" className="w-8 h-8 rounded" />
                <div>
                  <h3 className="text-xl font-bold text-white">Jooble API</h3>
                  <a href="https://jooble.org/api/about" target="_blank" rel="noopener noreferrer"
                     className="text-amber-400 text-sm hover:underline flex items-center gap-1">
                    jooble.org/api/about <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-900/50 rounded-xl p-4">
                  <h4 className="font-semibold text-white mb-3">Coverage</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-slate-400">Countries</div>
                    <div className="text-white">60+ worldwide</div>
                    <div className="text-slate-400">Job Boards</div>
                    <div className="text-white">140,000+ sources</div>
                    <div className="text-slate-400">Daily Jobs</div>
                    <div className="text-white">~500K new listings</div>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-4">
                  <h4 className="font-semibold text-white mb-3">Rate Limits</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Free Tier</span>
                      <span className="text-emerald-400">Unlimited (affiliate)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Results/Call</span>
                      <span className="text-white">500 max</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Model</span>
                      <span className="text-white">Affiliate links</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 rounded-xl p-4 font-mono text-xs">
                  <pre className="text-slate-300 overflow-x-auto">
{`POST https://jooble.org/api/{API_KEY}
Content-Type: application/json

{
  "keywords": "software engineer",
  "location": "London",
  "radius": 25,
  "salary": 50000,
  "page": 1
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Claude CLI */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl">
              <Terminal className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Claude CLI - AI Operations</h2>
          </div>

          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Subscription Model</h3>

                <div className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-xl p-6 border border-violet-500/30 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold text-white text-lg">Claude Pro</h4>
                    <span className="text-violet-400 font-bold text-2xl">$20/month</span>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Unlimited Claude CLI usage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>No per-token costs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>No rate limiting for our use case</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Local processing (privacy)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-4">
                  <h4 className="font-semibold text-white mb-3">Use Cases in JobHunter</h4>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li>• AI-powered profile interviews</li>
                    <li>• Job-profile fit analysis</li>
                    <li>• CV content tailoring</li>
                    <li>• Cover letter generation</li>
                    <li>• Interview preparation</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-6">Integration Code</h3>

                <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-slate-300">
{`import subprocess
import json
from typing import Optional

class ClaudeCLIService:
    """
    Claude CLI wrapper - uses subscription,
    not API tokens. Runs locally.
    """

    async def _call_claude(
        self,
        prompt: str,
        max_tokens: int = 2000,
        json_output: bool = False
    ) -> str:
        cmd = ['claude', '-p', prompt]
        cmd.extend(['--max-tokens', str(max_tokens)])

        if json_output:
            cmd.append('--json')

        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            timeout=120  # 2 min timeout
        )

        if result.returncode != 0:
            raise ClaudeError(result.stderr)

        return result.stdout.strip()

    async def interview_question(
        self,
        context: str
    ) -> str:
        prompt = f"""You are conducting a
professional interview to build a job
seeker profile.

Current context: {context}

Ask ONE focused question to understand
their experience better. Be conversational
but professional."""

        return await self._call_claude(prompt)

    async def analyze_job_fit(
        self,
        profile: dict,
        job: dict
    ) -> dict:
        prompt = f"""Analyze this job match:

Profile: {json.dumps(profile)}
Job: {json.dumps(job)}

Return JSON with:
- match_score (0-100)
- strengths (list)
- gaps (list)
- talking_points (list)"""

        result = await self._call_claude(
            prompt,
            json_output=True
        )
        return json.loads(result)`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SaaS Services */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">SaaS Services (Phase 4)</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Clerk */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-violet-500/20 rounded-lg">
                  <Shield className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Clerk</h3>
              </div>
              <p className="text-slate-400 text-sm mb-4">Authentication & User Management</p>

              <div className="space-y-3">
                <div className="bg-slate-900/50 rounded-lg p-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Free Tier</span>
                    <span className="text-emerald-400">10K MAU</span>
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Pro Tier</span>
                    <span className="text-slate-300">$25/mo + $0.02/MAU</span>
                  </div>
                </div>
                <div className="text-xs text-slate-500">
                  Features: Social OAuth, MFA, Session management, Webhooks
                </div>
              </div>
            </div>

            {/* Stripe */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Stripe</h3>
              </div>
              <p className="text-slate-400 text-sm mb-4">Payments & Subscriptions</p>

              <div className="space-y-3">
                <div className="bg-slate-900/50 rounded-lg p-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Transaction Fee</span>
                    <span className="text-slate-300">2.9% + $0.30</span>
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Monthly Fee</span>
                    <span className="text-emerald-400">$0</span>
                  </div>
                </div>
                <div className="text-xs text-slate-500">
                  Features: Subscriptions, Customer Portal, Invoices, Tax
                </div>
              </div>
            </div>

            {/* Upstash */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <Activity className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Upstash</h3>
              </div>
              <p className="text-slate-400 text-sm mb-4">Redis Cache & Rate Limiting</p>

              <div className="space-y-3">
                <div className="bg-slate-900/50 rounded-lg p-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Free Tier</span>
                    <span className="text-emerald-400">10K cmd/day</span>
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Pay-as-you-go</span>
                    <span className="text-slate-300">$0.2/100K cmd</span>
                  </div>
                </div>
                <div className="text-xs text-slate-500">
                  Features: Global replication, REST API, Durable storage
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Discord Webhooks */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl">
              <Webhook className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Discord Webhooks - Notifications</h2>
          </div>

          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Webhook Configuration</h3>

                <div className="space-y-4">
                  <div className="bg-slate-900/50 rounded-xl p-4">
                    <h4 className="font-semibold text-white mb-2">Setup</h4>
                    <ol className="space-y-2 text-sm text-slate-400">
                      <li>1. Create Discord server or use existing</li>
                      <li>2. Create #job-alerts channel</li>
                      <li>3. Channel Settings → Integrations → Webhooks</li>
                      <li>4. Create webhook, copy URL</li>
                      <li>5. Add to .env as DISCORD_WEBHOOK_URL</li>
                    </ol>
                  </div>

                  <div className="bg-slate-900/50 rounded-xl p-4">
                    <h4 className="font-semibold text-white mb-2">Cost</h4>
                    <div className="text-3xl font-bold text-emerald-400">FREE</div>
                    <p className="text-sm text-slate-400 mt-1">
                      Discord webhooks have no cost. Rate limit: 30 messages/minute per webhook.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-4">Implementation</h3>

                <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-slate-300">
{`import httpx

class DiscordNotifier:
    def __init__(self, webhook_url: str):
        self.webhook_url = webhook_url

    async def send_job_alert(
        self,
        job: dict,
        match_score: float
    ):
        embed = {
            "title": f"🎯 {job['title']}",
            "description": f"**{match_score:.0%} Match**",
            "color": self._score_to_color(match_score),
            "fields": [
                {
                    "name": "Company",
                    "value": job.get('company', 'N/A'),
                    "inline": True
                },
                {
                    "name": "Location",
                    "value": job.get('location', 'Remote'),
                    "inline": True
                },
                {
                    "name": "Salary",
                    "value": job.get('salary', 'Not specified'),
                    "inline": True
                }
            ],
            "url": job.get('url', '')
        }

        async with httpx.AsyncClient() as client:
            await client.post(
                self.webhook_url,
                json={"embeds": [embed]}
            )

    def _score_to_color(self, score: float) -> int:
        if score >= 0.90:
            return 0x00FF00  # Green
        if score >= 0.80:
            return 0xFFFF00  # Yellow
        return 0xFFA500  # Orange`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Environment Variables */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-slate-500 to-gray-600 rounded-xl">
              <Key className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Environment Variables</h2>
          </div>

          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-white mb-6">Complete .env Configuration</h3>

            <div className="bg-slate-900 rounded-xl p-6 font-mono text-sm overflow-x-auto">
              <pre className="text-slate-300">
{`# ============================================
# JOBHUNTER PRO - ENVIRONMENT CONFIGURATION
# ============================================

# ----- Core Settings -----
ENVIRONMENT=development  # development | staging | production
DEBUG=true
SECRET_KEY=your-256-bit-secret-key-here

# ----- Database (Supabase) -----
DATABASE_URL=postgresql://postgres.[project]:[password]@aws-0-us-east-1.pooler.supabase.com:6543/postgres
SUPABASE_URL=https://[project].supabase.co
SUPABASE_ANON_KEY=eyJ...your-anon-key
SUPABASE_SERVICE_KEY=eyJ...your-service-key

# ----- OpenAI (Embeddings) -----
OPENAI_API_KEY=sk-...your-openai-key
OPENAI_EMBEDDING_MODEL=text-embedding-3-large
OPENAI_EMBEDDING_DIMENSIONS=3072

# ----- Job APIs -----
ADZUNA_APP_ID=your-adzuna-app-id
ADZUNA_API_KEY=your-adzuna-api-key
JOOBLE_API_KEY=your-jooble-api-key

# ----- Discord Notifications -----
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/...

# ----- SaaS Mode (Phase 4) -----
# Clerk Authentication
CLERK_SECRET_KEY=sk_live_...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_...
CLERK_WEBHOOK_SECRET=whsec_...

# Stripe Payments
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PRICE_STARTER=price_...
STRIPE_PRICE_PROFESSIONAL=price_...
STRIPE_PRICE_EXECUTIVE=price_...

# Upstash Redis (optional)
UPSTASH_REDIS_REST_URL=https://...upstash.io
UPSTASH_REDIS_REST_TOKEN=...

# ----- Feature Flags -----
ENABLE_DISCORD_ALERTS=true
ENABLE_CV_GENERATION=true
ENABLE_INTERVIEW_MODE=true
MIN_MATCH_SCORE_ALERT=0.85  # Only alert on 85%+ matches`}
              </pre>
            </div>

            <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
              <div className="flex items-center gap-2 text-amber-400 mb-2">
                <AlertTriangle className="w-4 h-4" />
                <span className="font-semibold">Security Note</span>
              </div>
              <p className="text-sm text-slate-400">
                Never commit .env files to version control. Use Railway's environment variable
                management for production. Keep separate .env files for development, staging, and production.
              </p>
            </div>
          </div>
        </section>

        {/* Monitoring & Observability */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Monitoring & Observability</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Railway Metrics</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• CPU & Memory usage graphs</li>
                <li>• Request count & latency</li>
                <li>• Deployment history</li>
                <li>• Real-time logs</li>
              </ul>
              <div className="mt-4 text-xs text-emerald-400">Included in all plans</div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Supabase Dashboard</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• Query performance</li>
                <li>• Database size</li>
                <li>• Active connections</li>
                <li>• RLS policy logs</li>
              </ul>
              <div className="mt-4 text-xs text-emerald-400">Included in all plans</div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Custom Analytics</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• Jobs fetched per hour</li>
                <li>• Match score distribution</li>
                <li>• CV generations</li>
                <li>• User engagement</li>
              </ul>
              <div className="mt-4 text-xs text-slate-500">Stored in analytics table</div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-slate-700">
          <div className="flex justify-between items-center">
            <a
              href="/research/jobhunter/architecture"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              <span>Architecture</span>
            </a>
            <a
              href="/research/jobhunter/costs"
              className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>Cost Analysis</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
