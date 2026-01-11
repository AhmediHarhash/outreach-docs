'use client';

import {
  Box,
  Cpu,
  Database,
  Globe,
  Server,
  Smartphone,
  Chrome,
  Cloud,
  Zap,
  Shield,
  GitBranch,
  Layers,
  ArrowRight,
  ArrowDown,
  ArrowLeftRight,
  Network,
  HardDrive,
  Lock,
  RefreshCw,
  Activity,
  Workflow,
  Container,
  Webhook
} from 'lucide-react';

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900 py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-500/30 rounded-full px-4 py-2 mb-6">
              <Network className="w-4 h-4 text-violet-400" />
              <span className="text-violet-300 text-sm font-medium">System Architecture</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              Complete System
              <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Architecture
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A deep dive into the technical architecture, data flows, component interactions,
              and design decisions that power JobHunter Pro
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* High-Level Architecture Overview */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">High-Level Architecture Overview</h2>
          </div>

          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-bold text-white mb-6">System Components Diagram</h3>

            {/* Architecture Diagram */}
            <div className="bg-slate-900/50 rounded-xl p-8 overflow-x-auto">
              <pre className="text-sm text-slate-300 font-mono whitespace-pre">
{`┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                                    USER LAYER                                            │
│  ┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐                   │
│  │   Flutter App    │    │ Chrome Extension │    │   Discord Bot    │                   │
│  │   (Desktop UI)   │    │  (Form Filler)   │    │   (Alerts)       │                   │
│  │                  │    │                  │    │                  │                   │
│  │  • Profile Mgmt  │    │  • Form Detect   │    │  • Job Alerts    │                   │
│  │  • Job Browser   │    │  • Auto-Fill     │    │  • Match Notifs  │                   │
│  │  • CV Generator  │    │  • Preview UI    │    │  • Daily Digest  │                   │
│  │  • Applications  │    │  • Sync Profile  │    │                  │                   │
│  └────────┬─────────┘    └────────┬─────────┘    └────────┬─────────┘                   │
│           │                       │                       │                              │
└───────────┼───────────────────────┼───────────────────────┼──────────────────────────────┘
            │                       │                       │
            │         HTTPS/REST    │         HTTPS         │      Webhook
            ▼                       ▼                       ▼
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                                   API GATEWAY                                            │
│  ┌──────────────────────────────────────────────────────────────────────────────────┐   │
│  │                         FastAPI Backend (Railway)                                  │   │
│  │                                                                                    │   │
│  │   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │   │
│  │   │   Auth      │  │   Profile   │  │    Jobs     │  │   CV Gen    │             │   │
│  │   │  Middleware │  │   Router    │  │   Router    │  │   Router    │             │   │
│  │   └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘             │   │
│  │                                                                                    │   │
│  │   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │   │
│  │   │ Application │  │   Match     │  │  Interview  │  │   Webhook   │             │   │
│  │   │   Router    │  │   Router    │  │   Router    │  │   Router    │             │   │
│  │   └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘             │   │
│  │                                                                                    │   │
│  └──────────────────────────────────────────────────────────────────────────────────┘   │
│                                         │                                                │
└─────────────────────────────────────────┼────────────────────────────────────────────────┘
                                          │
            ┌─────────────────────────────┼─────────────────────────────┐
            │                             │                             │
            ▼                             ▼                             ▼
┌───────────────────────┐   ┌───────────────────────┐   ┌───────────────────────┐
│    SERVICE LAYER      │   │    SERVICE LAYER      │   │    SERVICE LAYER      │
│                       │   │                       │   │                       │
│   Claude CLI Service  │   │   Embedding Service   │   │  Job Aggregator       │
│   ┌─────────────────┐ │   │   ┌─────────────────┐ │   │  ┌─────────────────┐  │
│   │ • AI Interview  │ │   │   │ • Profile Embed │ │   │  │ • Adzuna API    │  │
│   │ • Job Analysis  │ │   │   │ • Job Embed     │ │   │  │ • Jooble API    │  │
│   │ • CV Writing    │ │   │   │ • Similarity    │ │   │  │ • Normalizer    │  │
│   │ • Cover Letter  │ │   │   │ • Ranking       │ │   │  │ • Deduplicator  │  │
│   └─────────────────┘ │   │   └─────────────────┘ │   │  └─────────────────┘  │
│          │            │   │          │            │   │          │            │
│          ▼            │   │          ▼            │   │          ▼            │
│   Claude CLI (Local)  │   │   OpenAI API         │   │   External Job APIs   │
│   (Subscription)      │   │   (text-embed-3)     │   │   (Adzuna + Jooble)   │
└───────────────────────┘   └───────────────────────┘   └───────────────────────┘
            │                             │                             │
            └─────────────────────────────┼─────────────────────────────┘
                                          │
                                          ▼
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                                   DATA LAYER                                             │
│                                                                                          │
│   ┌───────────────────────────────────────────────────────────────────────────────────┐ │
│   │                        Supabase PostgreSQL + pgvector                              │ │
│   │                                                                                    │ │
│   │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐              │ │
│   │  │   users     │  │  profiles   │  │    jobs     │  │ applications│              │ │
│   │  │             │  │             │  │             │  │             │              │ │
│   │  │  • id       │  │  • user_id  │  │  • id       │  │  • user_id  │              │ │
│   │  │  • email    │  │  • skills   │  │  • title    │  │  • job_id   │              │ │
│   │  │  • tier     │  │  • exp      │  │  • company  │  │  • status   │              │ │
│   │  │  • created  │  │  • embed    │  │  • embed    │  │  • cv_used  │              │ │
│   │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘              │ │
│   │                                                                                    │ │
│   │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                               │ │
│   │  │ job_matches │  │  cv_cache   │  │  analytics  │                               │ │
│   │  │             │  │             │  │             │                               │ │
│   │  │  • prof_id  │  │  • hash     │  │  • event    │                               │ │
│   │  │  • job_id   │  │  • content  │  │  • user_id  │                               │ │
│   │  │  • score    │  │  • created  │  │  • metadata │                               │ │
│   │  │  • reasons  │  │             │  │             │                               │ │
│   │  └─────────────┘  └─────────────┘  └─────────────┘                               │ │
│   │                                                                                    │ │
│   └───────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                          │
└─────────────────────────────────────────────────────────────────────────────────────────┘`}
              </pre>
            </div>
          </div>

          {/* Architecture Principles */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-xl p-6">
              <Shield className="w-8 h-8 text-violet-400 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Local-First Design</h4>
              <p className="text-slate-400 text-sm">
                All critical operations can run locally. Cloud services enhance but don't gatekeep core functionality.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
              <Zap className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Event-Driven</h4>
              <p className="text-slate-400 text-sm">
                Async job processing, webhook notifications, and real-time updates keep the system responsive.
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-xl p-6">
              <GitBranch className="w-8 h-8 text-emerald-400 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Modular Services</h4>
              <p className="text-slate-400 text-sm">
                Each service is independently deployable. Swap Claude for GPT, or Adzuna for Indeed - zero coupling.
              </p>
            </div>
          </div>
        </section>

        {/* Data Flow Architecture */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
              <Workflow className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Data Flow Architecture</h2>
          </div>

          {/* User Onboarding Flow */}
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-bold text-white mb-6">1. User Onboarding & Profile Building Flow</h3>

            <div className="bg-slate-900/50 rounded-xl p-6 mb-6 overflow-x-auto">
              <pre className="text-sm text-slate-300 font-mono whitespace-pre">
{`┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   User       │     │   Flutter    │     │   Backend    │     │  Claude CLI  │
│   Input      │     │   App        │     │   API        │     │  (AI Brain)  │
└──────┬───────┘     └──────┬───────┘     └──────┬───────┘     └──────┬───────┘
       │                    │                    │                    │
       │  1. Upload CV      │                    │                    │
       │ ──────────────────>│                    │                    │
       │                    │                    │                    │
       │                    │  2. POST /profile  │                    │
       │                    │    /upload-cv      │                    │
       │                    │ ──────────────────>│                    │
       │                    │                    │                    │
       │                    │                    │  3. Extract &      │
       │                    │                    │     Analyze CV     │
       │                    │                    │ ──────────────────>│
       │                    │                    │                    │
       │                    │                    │  4. Structured     │
       │                    │                    │     Profile Data   │
       │                    │                    │ <──────────────────│
       │                    │                    │                    │
       │                    │  5. Start Interview│                    │
       │                    │     Questions      │                    │
       │                    │ <──────────────────│                    │
       │                    │                    │                    │
       │  6. Show Question  │                    │                    │
       │ <──────────────────│                    │                    │
       │                    │                    │                    │
       │  7. User Answer    │                    │                    │
       │ ──────────────────>│                    │                    │
       │                    │                    │                    │
       │                    │  8. POST /profile  │                    │
       │                    │     /interview     │                    │
       │                    │ ──────────────────>│                    │
       │                    │                    │                    │
       │                    │                    │  9. Process Answer │
       │                    │                    │     + Next Q       │
       │                    │                    │ ──────────────────>│
       │                    │                    │                    │
       │                    │                    │  10. Next Question │
       │                    │                    │      or Complete   │
       │                    │                    │ <──────────────────│
       │                    │                    │                    │
       │            [Loop 6-10 until profile complete]                │
       │                    │                    │                    │
       │                    │                    │  11. Generate      │
       │                    │                    │      Embedding     │
       │                    │                    │ ─────────────────┐ │
       │                    │                    │                  │ │
       │                    │                    │ <────────────────┘ │
       │                    │                    │   (OpenAI API)     │
       │                    │                    │                    │
       │                    │  12. Profile Ready │                    │
       │                    │      + Stats       │                    │
       │                    │ <──────────────────│                    │
       │                    │                    │                    │
       │  13. Dashboard     │                    │                    │
       │ <──────────────────│                    │                    │
       │                    │                    │                    │`}
              </pre>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 rounded-xl p-6">
                <h4 className="font-semibold text-white mb-3">Key Data Points Collected</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
                    <span><strong className="text-slate-300">Personal Info:</strong> Name, email, phone, location</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
                    <span><strong className="text-slate-300">Experience:</strong> Companies, roles, achievements, duration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
                    <span><strong className="text-slate-300">Skills:</strong> Technical, soft skills, proficiency levels</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
                    <span><strong className="text-slate-300">Education:</strong> Degrees, certifications, courses</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
                    <span><strong className="text-slate-300">Preferences:</strong> Salary range, remote/hybrid, industries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
                    <span><strong className="text-slate-300">Career Goals:</strong> Target roles, growth aspirations</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-6">
                <h4 className="font-semibold text-white mb-3">Profile Embedding Schema</h4>
                <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
                  <pre className="text-slate-300">
{`{
  "profile_id": "uuid",
  "user_id": "uuid",
  "embedding": float[3072],
  "skills_hash": "sha256",
  "experience_years": 5,
  "target_titles": ["Senior Engineer"],
  "location_prefs": ["Remote", "NYC"],
  "salary_range": {
    "min": 120000,
    "max": 180000,
    "currency": "USD"
  },
  "created_at": "timestamp",
  "updated_at": "timestamp"
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Job Matching Flow */}
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-bold text-white mb-6">2. Job Aggregation & Matching Flow</h3>

            <div className="bg-slate-900/50 rounded-xl p-6 mb-6 overflow-x-auto">
              <pre className="text-sm text-slate-300 font-mono whitespace-pre">
{`┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Scheduler   │     │   Backend    │     │   Job APIs   │     │   Database   │
│  (Cron)      │     │   Worker     │     │ Adzuna/Jooble│     │   Supabase   │
└──────┬───────┘     └──────┬───────┘     └──────┬───────┘     └──────┬───────┘
       │                    │                    │                    │
       │  1. Trigger Job    │                    │                    │
       │     Fetch (hourly) │                    │                    │
       │ ──────────────────>│                    │                    │
       │                    │                    │                    │
       │                    │  2. GET /jobs      │                    │
       │                    │     ?keywords=...  │                    │
       │                    │ ──────────────────>│                    │
       │                    │                    │                    │
       │                    │  3. Raw Job List   │                    │
       │                    │     (JSON)         │                    │
       │                    │ <──────────────────│                    │
       │                    │                    │                    │
       │                    │  4. Normalize &    │                    │
       │                    │     Deduplicate    │                    │
       │                    │ ─────────────────┐ │                    │
       │                    │                  │ │                    │
       │                    │ <────────────────┘ │                    │
       │                    │                    │                    │
       │                    │  5. Generate Job   │                    │
       │                    │     Embeddings     │                    │
       │                    │ ─────────────────┐ │                    │
       │                    │  (OpenAI batch)  │ │                    │
       │                    │ <────────────────┘ │                    │
       │                    │                    │                    │
       │                    │                    │  6. Store Jobs     │
       │                    │                    │     + Embeddings   │
       │                    │                    │ ──────────────────>│
       │                    │                    │                    │
       │                    │                    │  7. Get Active     │
       │                    │                    │     Profiles       │
       │                    │                    │ <──────────────────│
       │                    │                    │                    │
       │                    │  8. Vector Search  │                    │
       │                    │     (pgvector)     │                    │
       │                    │ ──────────────────────────────────────>│
       │                    │                    │                    │
       │                    │  9. Ranked Matches │                    │
       │                    │     per Profile    │                    │
       │                    │ <──────────────────────────────────────│
       │                    │                    │                    │
       │                    │  10. Store Match   │                    │
       │                    │      Scores        │                    │
       │                    │ ──────────────────────────────────────>│
       │                    │                    │                    │
       │                    │  11. Notify High   │                    │
       │                    │      Matches >85%  │                    │
       │                    │ ─────────────────┐ │                    │
       │                    │  (Discord/Email) │ │                    │
       │                    │ <────────────────┘ │                    │
       │                    │                    │                    │`}
              </pre>
            </div>

            <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-xl p-6">
              <h4 className="font-semibold text-white mb-4">Vector Similarity Query (pgvector)</h4>
              <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-slate-300">
{`-- Find top 50 job matches for a user profile
SELECT
  j.id,
  j.title,
  j.company,
  j.location,
  j.salary_range,
  j.url,
  1 - (j.embedding <=> p.embedding) as similarity_score
FROM jobs j
CROSS JOIN profiles p
WHERE p.user_id = 'target_user_uuid'
  AND j.created_at > NOW() - INTERVAL '7 days'
  AND j.location = ANY(p.location_prefs) OR 'Remote' = ANY(p.location_prefs)
ORDER BY j.embedding <=> p.embedding
LIMIT 50;`}
                </pre>
              </div>
              <p className="text-sm text-slate-400 mt-4">
                Using pgvector's <code className="text-violet-400">&lt;=&gt;</code> operator for cosine distance.
                Index type: <code className="text-violet-400">ivfflat</code> with 100 lists for sub-100ms queries on 100K+ jobs.
              </p>
            </div>
          </div>

          {/* CV Generation Flow */}
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">3. CV Generation & Application Flow</h3>

            <div className="bg-slate-900/50 rounded-xl p-6 mb-6 overflow-x-auto">
              <pre className="text-sm text-slate-300 font-mono whitespace-pre">
{`┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   User       │     │   Flutter    │     │   Backend    │     │  Claude CLI  │
│              │     │   App        │     │   API        │     │  + Templates │
└──────┬───────┘     └──────┬───────┘     └──────┬───────┘     └──────┬───────┘
       │                    │                    │                    │
       │  1. Select Job     │                    │                    │
       │     "Generate CV"  │                    │                    │
       │ ──────────────────>│                    │                    │
       │                    │                    │                    │
       │                    │  2. POST /cv       │                    │
       │                    │     /generate      │                    │
       │                    │ ──────────────────>│                    │
       │                    │                    │                    │
       │                    │                    │  3. Check Cache    │
       │                    │                    │     (profile+job   │
       │                    │                    │      hash match?)  │
       │                    │                    │ ─────────────────┐ │
       │                    │                    │                  │ │
       │                    │                    │ <────────────────┘ │
       │                    │                    │                    │
       │                    │                    │  4a. Cache Hit:    │
       │                    │                    │      Return cached │
       │                    │                    │                    │
       │                    │                    │  4b. Cache Miss:   │
       │                    │                    │      Generate      │
       │                    │                    │ ──────────────────>│
       │                    │                    │                    │
       │                    │                    │                    │  5. Analyze
       │                    │                    │                    │     Job Req
       │                    │                    │                    │ ────────┐
       │                    │                    │                    │         │
       │                    │                    │                    │ <───────┘
       │                    │                    │                    │
       │                    │                    │                    │  6. Tailor
       │                    │                    │                    │     Content
       │                    │                    │                    │ ────────┐
       │                    │                    │                    │         │
       │                    │                    │                    │ <───────┘
       │                    │                    │                    │
       │                    │                    │  7. Tailored       │
       │                    │                    │     CV JSON        │
       │                    │                    │ <──────────────────│
       │                    │                    │                    │
       │                    │                    │  8. Render to PDF  │
       │                    │                    │     (WeasyPrint)   │
       │                    │                    │ ─────────────────┐ │
       │                    │                    │                  │ │
       │                    │                    │ <────────────────┘ │
       │                    │                    │                    │
       │                    │  9. CV PDF +       │                    │
       │                    │     Preview HTML   │                    │
       │                    │ <──────────────────│                    │
       │                    │                    │                    │
       │  10. Preview CV    │                    │                    │
       │      with changes  │                    │                    │
       │      highlighted   │                    │                    │
       │ <──────────────────│                    │                    │
       │                    │                    │                    │
       │  11. Approve &     │                    │                    │
       │      Download      │                    │                    │
       │ ──────────────────>│                    │                    │
       │                    │                    │                    │`}
              </pre>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 rounded-xl p-6">
                <h4 className="font-semibold text-white mb-3">CV Tailoring Logic</h4>
                <ol className="space-y-2 text-sm text-slate-400">
                  <li className="flex gap-2">
                    <span className="text-violet-400 font-bold">1.</span>
                    <span>Extract key requirements from job description</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-violet-400 font-bold">2.</span>
                    <span>Map user skills to job requirements</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-violet-400 font-bold">3.</span>
                    <span>Prioritize relevant experiences</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-violet-400 font-bold">4.</span>
                    <span>Reword achievements with job keywords</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-violet-400 font-bold">5.</span>
                    <span>Generate role-specific summary</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-violet-400 font-bold">6.</span>
                    <span>Optimize for ATS parsing</span>
                  </li>
                </ol>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-6">
                <h4 className="font-semibold text-white mb-3">Cache Strategy</h4>
                <div className="space-y-3 text-sm text-slate-400">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5"></div>
                    <span><strong className="text-slate-300">Key:</strong> SHA256(profile_data + job_id)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5"></div>
                    <span><strong className="text-slate-300">TTL:</strong> 30 days (jobs expire anyway)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5"></div>
                    <span><strong className="text-slate-300">Invalidation:</strong> Profile update clears all CVs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5"></div>
                    <span><strong className="text-slate-300">Storage:</strong> Supabase Storage bucket</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Component Deep Dive */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl">
              <Container className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Component Deep Dive</h2>
          </div>

          {/* Claude CLI Service */}
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <Cpu className="w-5 h-5 text-violet-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Claude CLI Service - AI Brain</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-white mb-4">Why Claude CLI over API?</h4>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-emerald-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-emerald-400 text-xs">$</span>
                    </div>
                    <span><strong className="text-slate-300">Cost:</strong> $20/month unlimited vs $3-15 per 1M tokens on API</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-emerald-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-emerald-400 text-xs">∞</span>
                    </div>
                    <span><strong className="text-slate-300">Unlimited:</strong> Heavy AI usage for interviews, analysis, CV writing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-emerald-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-emerald-400 text-xs">⚡</span>
                    </div>
                    <span><strong className="text-slate-300">No Rate Limits:</strong> Batch process hundreds of jobs without throttling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-emerald-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-emerald-400 text-xs">🔒</span>
                    </div>
                    <span><strong className="text-slate-300">Privacy:</strong> All processing happens locally on your machine</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900 rounded-xl p-4">
                <h4 className="font-semibold text-white mb-3">Implementation Pattern</h4>
                <div className="font-mono text-sm overflow-x-auto">
                  <pre className="text-slate-300">
{`class ClaudeCLIService:
    """Wraps Claude CLI for AI ops."""

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
            timeout=120
        )

        if result.returncode != 0:
            raise ClaudeError(result.stderr)

        return result.stdout.strip()`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Embedding Service */}
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Activity className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Embedding Service - Semantic Matching</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-slate-900/50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">3072</div>
                <div className="text-slate-400 text-sm">Embedding Dimensions</div>
                <div className="text-slate-500 text-xs mt-1">text-embedding-3-large</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">$0.13</div>
                <div className="text-slate-400 text-sm">Per Million Tokens</div>
                <div className="text-slate-500 text-xs mt-1">~500K job embeds = $0.65</div>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-violet-400 mb-2">&lt;50ms</div>
                <div className="text-slate-400 text-sm">Similarity Search</div>
                <div className="text-slate-500 text-xs mt-1">pgvector w/ ivfflat index</div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-xl p-4">
              <h4 className="font-semibold text-white mb-3">Profile Embedding Construction</h4>
              <div className="font-mono text-sm overflow-x-auto">
                <pre className="text-slate-300">
{`def create_profile_embedding_text(profile: Profile) -> str:
    """Create rich text representation for embedding."""
    sections = [
        f"Job Seeker Profile for {profile.target_title}",
        f"",
        f"SKILLS: {', '.join(profile.skills)}",
        f"",
        f"EXPERIENCE: {profile.years_experience} years",
        f"Industries: {', '.join(profile.industries)}",
        f"",
        f"RECENT ROLES:",
        *[f"- {exp.title} at {exp.company}: {exp.summary}"
          for exp in profile.experiences[:3]],
        f"",
        f"ACHIEVEMENTS:",
        *[f"- {ach}" for ach in profile.achievements[:5]],
        f"",
        f"PREFERENCES:",
        f"- Location: {', '.join(profile.location_prefs)}",
        f"- Salary: {profile.salary_min}-{profile.salary_max} {profile.currency}",
        f"- Work Style: {profile.work_style}",  # remote/hybrid/onsite
    ]
    return "\\n".join(sections)`}
                </pre>
              </div>
            </div>
          </div>

          {/* Job Aggregator */}
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-amber-500/20 rounded-lg">
                <Globe className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Job Aggregator - Multi-Source Collection</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-white mb-4">Adzuna API</h4>
                <div className="bg-slate-900/50 rounded-xl p-4 mb-4">
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li>• <strong className="text-slate-300">Coverage:</strong> 16 countries, 1000+ job boards</li>
                    <li>• <strong className="text-slate-300">Free Tier:</strong> 250 calls/day</li>
                    <li>• <strong className="text-slate-300">Rich Data:</strong> Salary estimates, company info</li>
                    <li>• <strong className="text-slate-300">Response Time:</strong> ~200ms average</li>
                  </ul>
                </div>
                <div className="bg-slate-900 rounded-lg p-3 font-mono text-xs">
                  <pre className="text-slate-400">
{`GET /v1/api/jobs/{country}/search/{page}
?app_id=xxx&app_key=xxx
&what=software+engineer
&where=london
&results_per_page=50`}
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4">Jooble API</h4>
                <div className="bg-slate-900/50 rounded-xl p-4 mb-4">
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li>• <strong className="text-slate-300">Coverage:</strong> 60+ countries, 140k boards</li>
                    <li>• <strong className="text-slate-300">Free Tier:</strong> Unlimited (affiliate model)</li>
                    <li>• <strong className="text-slate-300">Rich Data:</strong> Direct apply links</li>
                    <li>• <strong className="text-slate-300">Response Time:</strong> ~300ms average</li>
                  </ul>
                </div>
                <div className="bg-slate-900 rounded-lg p-3 font-mono text-xs">
                  <pre className="text-slate-400">
{`POST /api/{api_key}
Content-Type: application/json

{
  "keywords": "software engineer",
  "location": "London"
}`}
                  </pre>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-xl p-6">
              <h4 className="font-semibold text-white mb-3">Deduplication Strategy</h4>
              <div className="font-mono text-sm">
                <pre className="text-slate-300">
{`def generate_job_hash(job: dict) -> str:
    """Create unique identifier for deduplication."""
    normalized = {
        'title': normalize_title(job['title']),
        'company': normalize_company(job['company']),
        'location': normalize_location(job['location']),
    }
    content = json.dumps(normalized, sort_keys=True)
    return hashlib.sha256(content.encode()).hexdigest()[:16]`}
                </pre>
              </div>
              <p className="text-slate-400 text-sm mt-4">
                Prevents the same job from multiple sources appearing twice.
                Keeps the version with more complete data (salary, description length).
              </p>
            </div>
          </div>
        </section>

        {/* Security Architecture */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Security Architecture</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Local Mode Security</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-emerald-400 mt-0.5" />
                  <span><strong className="text-slate-300">Data at Rest:</strong> SQLite with SQLCipher encryption</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-emerald-400 mt-0.5" />
                  <span><strong className="text-slate-300">API Keys:</strong> Stored in OS keychain (Windows Credential Manager)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-emerald-400 mt-0.5" />
                  <span><strong className="text-slate-300">No Cloud:</strong> All processing local, no data leaves machine</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-emerald-400 mt-0.5" />
                  <span><strong className="text-slate-300">Extension:</strong> Only activates on application pages</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">SaaS Mode Security</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-blue-400 mt-0.5" />
                  <span><strong className="text-slate-300">Auth:</strong> Clerk with MFA, social OAuth</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-blue-400 mt-0.5" />
                  <span><strong className="text-slate-300">Data Transit:</strong> TLS 1.3, HSTS enabled</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-blue-400 mt-0.5" />
                  <span><strong className="text-slate-300">Database:</strong> Supabase RLS, row-level encryption</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-blue-400 mt-0.5" />
                  <span><strong className="text-slate-300">Compliance:</strong> GDPR data export/deletion</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">API Security Headers</h3>
            <div className="bg-slate-900 rounded-xl p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-slate-300">
{`# FastAPI Security Middleware
@app.middleware("http")
async def security_headers(request: Request, call_next):
    response = await call_next(request)
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "DENY"
    response.headers["X-XSS-Protection"] = "1; mode=block"
    response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
    response.headers["Content-Security-Policy"] = "default-src 'self'"
    response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
    return response`}
              </pre>
            </div>
          </div>
        </section>

        {/* Scalability Design */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
              <RefreshCw className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Scalability Design</h2>
          </div>

          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Horizontal Scaling Strategy</h3>

            <div className="bg-slate-900/50 rounded-xl p-6 mb-6 overflow-x-auto">
              <pre className="text-sm text-slate-300 font-mono whitespace-pre">
{`                    ┌─────────────────────────────────────────────────────┐
                    │              Load Balancer (Railway)                 │
                    │                   Round Robin                        │
                    └─────────────────────┬───────────────────────────────┘
                                          │
              ┌───────────────────────────┼───────────────────────────┐
              │                           │                           │
              ▼                           ▼                           ▼
    ┌─────────────────┐         ┌─────────────────┐         ┌─────────────────┐
    │   API Server    │         │   API Server    │         │   API Server    │
    │   Instance 1    │         │   Instance 2    │         │   Instance N    │
    │                 │         │                 │         │                 │
    │  • Stateless    │         │  • Stateless    │         │  • Stateless    │
    │  • 512MB RAM    │         │  • 512MB RAM    │         │  • 512MB RAM    │
    └────────┬────────┘         └────────┬────────┘         └────────┬────────┘
             │                           │                           │
             └───────────────────────────┼───────────────────────────┘
                                         │
                    ┌────────────────────┴────────────────────┐
                    │                                         │
                    ▼                                         ▼
          ┌─────────────────┐                       ┌─────────────────┐
          │    Supabase     │                       │   Redis Cache   │
          │   PostgreSQL    │                       │   (Upstash)     │
          │                 │                       │                 │
          │  • Connection   │                       │  • Session      │
          │    Pooling      │                       │  • Rate Limits  │
          │  • Read Replica │                       │  • Job Cache    │
          └─────────────────┘                       └─────────────────┘`}
              </pre>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-900/50 rounded-xl p-6">
                <h4 className="font-semibold text-white mb-3">100 Users</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• 1 API instance (512MB)</li>
                  <li>• Supabase Free tier</li>
                  <li>• No Redis needed</li>
                  <li>• Cost: ~$25/month</li>
                </ul>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-6">
                <h4 className="font-semibold text-white mb-3">1,000 Users</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• 2 API instances</li>
                  <li>• Supabase Pro ($25)</li>
                  <li>• Upstash Redis ($10)</li>
                  <li>• Cost: ~$75/month</li>
                </ul>
              </div>
              <div className="bg-slate-900/50 rounded-xl p-6">
                <h4 className="font-semibold text-white mb-3">10,000 Users</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• 5 API instances</li>
                  <li>• Supabase Pro + replicas</li>
                  <li>• Redis cluster</li>
                  <li>• Cost: ~$200/month</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack Summary */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl">
              <Box className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Complete Technology Stack</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Frontend */}
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-blue-400" />
                Desktop App
              </h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Flutter 3.38</li>
                <li>Dart 3.x</li>
                <li>Riverpod 2.5</li>
                <li>Go Router 14.0</li>
                <li>Dio 5.4</li>
                <li>FL Chart 0.68</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-xl p-6">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <Server className="w-5 h-5 text-emerald-400" />
                Backend
              </h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Python 3.12</li>
                <li>FastAPI 0.109</li>
                <li>Pydantic 2.x</li>
                <li>HTTPX</li>
                <li>WeasyPrint</li>
                <li>Claude CLI</li>
              </ul>
            </div>

            {/* Database */}
            <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-xl p-6">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <Database className="w-5 h-5 text-violet-400" />
                Database
              </h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Supabase</li>
                <li>PostgreSQL 15</li>
                <li>pgvector</li>
                <li>SQLite (local)</li>
                <li>Upstash Redis</li>
              </ul>
            </div>

            {/* External APIs */}
            <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-6">
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <Webhook className="w-5 h-5 text-amber-400" />
                External APIs
              </h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>OpenAI (embeddings)</li>
                <li>Adzuna (jobs)</li>
                <li>Jooble (jobs)</li>
                <li>Discord (webhooks)</li>
                <li>Clerk (auth)</li>
                <li>Stripe (billing)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-slate-700">
          <div className="flex justify-between items-center">
            <a
              href="/research/jobhunter/phase-4"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              <span>Phase IV: SaaS Launch</span>
            </a>
            <a
              href="/research/jobhunter/infrastructure"
              className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
            >
              <span>Infrastructure Details</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
