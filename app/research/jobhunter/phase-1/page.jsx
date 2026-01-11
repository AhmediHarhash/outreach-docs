'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Server,
  Database,
  Brain,
  Globe,
  Bell,
  Code,
  FileCode,
  Folder,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Cpu,
  Zap,
  Shield,
  Clock,
  Terminal,
  Settings,
  Key,
  GitBranch,
  Package,
  Play,
  AlertCircle,
  Copy,
  Check
} from 'lucide-react';
import Navigation from '../../../../components/Navigation';
import Card from '../../../../components/Card';
import { useState } from 'react';

const backendServices = [
  {
    name: 'Claude CLI Service',
    file: 'services/claude_service.py',
    description: 'Wraps Claude CLI for all AI operations including interviews, job analysis, and CV generation. Uses your existing Claude subscription—no API costs.',
    features: [
      'Conversational user interviews',
      'Job-profile fit analysis',
      'Tailored CV content generation',
      'Interview preparation tips',
      'Cover letter drafting',
    ],
    code: `class ClaudeCLIService:
    """Wraps Claude CLI for AI operations.
    Uses subscription ($20/mo), not per-token API costs."""

    async def _call_claude(self, prompt: str, max_tokens: int = 2000) -> str:
        """Execute Claude CLI command."""
        cmd = ["claude", "-p", prompt, "--max-tokens", str(max_tokens)]
        result = await asyncio.create_subprocess_exec(
            *cmd,
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE
        )
        stdout, stderr = await result.communicate()
        if result.returncode != 0:
            raise RuntimeError(f"Claude CLI error: {stderr.decode()}")
        return stdout.decode().strip()

    async def interview_user(self, context: str, history: list) -> str:
        """Generate interview question to build user profile."""
        prompt = f"""You are conducting a professional interview to build
a comprehensive job seeker profile. Your goal is to deeply understand
their unique value proposition.

Previous conversation:
{self._format_history(history)}

Current context: {context}

Ask ONE focused, probing question that will help understand their
experience better. Be conversational but professional. Focus on:
- Specific accomplishments with measurable results
- Technical skills and proficiency levels
- Leadership and collaboration experiences
- Career goals and preferences

Return only the question, no preamble."""
        return await self._call_claude(prompt)

    async def analyze_job_fit(self, profile: dict, job: dict) -> dict:
        """Analyze how well a job matches the user's profile."""
        prompt = f"""Analyze this job match:

USER PROFILE:
{json.dumps(profile, indent=2)}

JOB LISTING:
{json.dumps(job, indent=2)}

Return a JSON object with:
{{
    "match_score": 0-100,
    "overall_assessment": "2-3 sentence summary",
    "strengths": ["strength 1", "strength 2", ...],
    "gaps": ["gap 1", "gap 2", ...],
    "talking_points": ["point 1", "point 2", ...],
    "salary_assessment": "comparison to market rate",
    "growth_potential": "career growth analysis",
    "red_flags": ["any concerns about the role"]
}}"""
        response = await self._call_claude(prompt, max_tokens=1500)
        return json.loads(response)

    async def generate_cv_content(self, profile: dict, job: dict) -> dict:
        """Generate tailored CV content for a specific job."""
        prompt = f"""Create tailored CV content for this application.

USER PROFILE:
{json.dumps(profile, indent=2)}

TARGET JOB:
{json.dumps(job, indent=2)}

Return JSON with:
{{
    "professional_summary": "3-4 sentence tailored summary",
    "key_skills": ["skill 1", "skill 2", ...],
    "experience_bullets": {{
        "job_title": ["tailored bullet 1", "bullet 2", ...]
    }},
    "keywords_to_include": ["keyword 1", "keyword 2", ...],
    "achievements_to_highlight": ["achievement 1", "achievement 2"]
}}"""
        response = await self._call_claude(prompt, max_tokens=2000)
        return json.loads(response)`,
  },
  {
    name: 'Job Aggregator Service',
    file: 'services/job_aggregator.py',
    description: 'Aggregates jobs from multiple sources (Adzuna, Jooble) and normalizes them into a consistent format for processing.',
    features: [
      'Adzuna API integration (16 countries)',
      'Jooble API integration (60+ countries)',
      'Data normalization across sources',
      'Deduplication of listings',
      'Salary standardization',
    ],
    code: `class JobAggregator:
    """Aggregates jobs from multiple sources."""

    def __init__(self):
        self.adzuna_app_id = settings.ADZUNA_APP_ID
        self.adzuna_api_key = settings.ADZUNA_API_KEY
        self.jooble_api_key = settings.JOOBLE_API_KEY

    async def search_all(
        self,
        keywords: str,
        location: str,
        page: int = 1
    ) -> List[Job]:
        """Search all job sources concurrently."""
        results = await asyncio.gather(
            self.search_adzuna(keywords, location, page),
            self.search_jooble(keywords, location),
            return_exceptions=True
        )

        all_jobs = []
        for result in results:
            if isinstance(result, list):
                all_jobs.extend(result)

        # Deduplicate by title + company
        return self._deduplicate(all_jobs)

    async def search_adzuna(
        self,
        keywords: str,
        location: str,
        page: int = 1
    ) -> List[Job]:
        """Search Adzuna API for jobs.

        Coverage: 16 countries, 1000+ sources
        Free tier: 250 calls/day
        """
        url = f"https://api.adzuna.com/v1/api/jobs/gb/search/{page}"
        params = {
            "app_id": self.adzuna_app_id,
            "app_key": self.adzuna_api_key,
            "what": keywords,
            "where": location,
            "results_per_page": 50,
            "content-type": "application/json"
        }

        async with httpx.AsyncClient() as client:
            response = await client.get(url, params=params)
            response.raise_for_status()
            data = response.json()

        return [
            self._normalize_adzuna(job)
            for job in data.get("results", [])
        ]

    async def search_jooble(
        self,
        keywords: str,
        location: str
    ) -> List[Job]:
        """Search Jooble API for jobs.

        Coverage: 60+ countries, 140k job boards
        Free tier: Unlimited (affiliate model)
        """
        url = f"https://jooble.org/api/{self.jooble_api_key}"
        payload = {
            "keywords": keywords,
            "location": location,
            "page": 1
        }

        async with httpx.AsyncClient() as client:
            response = await client.post(url, json=payload)
            response.raise_for_status()
            data = response.json()

        return [
            self._normalize_jooble(job)
            for job in data.get("jobs", [])
        ]

    def _normalize_adzuna(self, job: dict) -> Job:
        """Normalize Adzuna job to standard format."""
        return Job(
            id=f"adzuna_{job['id']}",
            title=job.get('title', ''),
            company=job.get('company', {}).get('display_name', 'Unknown'),
            location=job.get('location', {}).get('display_name', ''),
            description=job.get('description', ''),
            salary_min=job.get('salary_min'),
            salary_max=job.get('salary_max'),
            url=job.get('redirect_url', ''),
            posted_date=job.get('created'),
            source='adzuna'
        )

    def _normalize_jooble(self, job: dict) -> Job:
        """Normalize Jooble job to standard format."""
        return Job(
            id=f"jooble_{job.get('id', '')}",
            title=job.get('title', ''),
            company=job.get('company', 'Unknown'),
            location=job.get('location', ''),
            description=job.get('snippet', ''),
            salary_min=self._parse_salary(job.get('salary')),
            salary_max=self._parse_salary(job.get('salary')),
            url=job.get('link', ''),
            posted_date=job.get('updated'),
            source='jooble'
        )`,
  },
  {
    name: 'Embedding Service',
    file: 'services/embedding_service.py',
    description: 'Uses OpenAI text-embedding-3-large (3072 dimensions) for semantic job matching. Captures meaning, not just keywords.',
    features: [
      '3072-dimensional embeddings',
      'Profile embedding generation',
      'Job listing embedding',
      'Cosine similarity ranking',
      'Batch processing support',
    ],
    code: `class EmbeddingService:
    """OpenAI embeddings for semantic job matching.

    Model: text-embedding-3-large
    Dimensions: 3072 (highest quality)
    Cost: $0.13 per 1M tokens
    """

    def __init__(self):
        self.client = OpenAI(api_key=settings.OPENAI_API_KEY)
        self.model = "text-embedding-3-large"
        self.dimensions = 3072

    def embed_text(self, text: str) -> List[float]:
        """Generate embedding for text."""
        response = self.client.embeddings.create(
            input=text,
            model=self.model,
            dimensions=self.dimensions
        )
        return response.data[0].embedding

    def embed_profile(self, profile: Profile) -> List[float]:
        """Create embedding from user profile.

        Combines all relevant profile information into
        a single semantic representation.
        """
        text = f"""
        Target Role: {profile.target_title}
        Experience Level: {profile.experience_years} years

        Skills: {', '.join(profile.skills)}

        Experience Summary:
        {profile.experience_summary}

        Key Achievements:
        {chr(10).join(f'- {a}' for a in profile.achievements)}

        Preferences:
        - Location: {profile.preferred_locations}
        - Remote: {profile.remote_preference}
        - Salary: {profile.salary_expectation}

        About Me:
        {profile.summary}
        """
        return self.embed_text(text)

    def embed_job(self, job: Job) -> List[float]:
        """Create embedding from job listing."""
        text = f"""
        Title: {job.title}
        Company: {job.company}
        Location: {job.location}

        Description:
        {job.description}

        Requirements:
        {job.requirements if job.requirements else 'Not specified'}

        Salary: {job.salary_min} - {job.salary_max}
        """
        return self.embed_text(text)

    def calculate_similarity(
        self,
        vec1: List[float],
        vec2: List[float]
    ) -> float:
        """Calculate cosine similarity between embeddings."""
        a = np.array(vec1)
        b = np.array(vec2)
        return float(np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b)))

    async def rank_jobs(
        self,
        profile_embedding: List[float],
        jobs: List[Job]
    ) -> List[Tuple[Job, float]]:
        """Rank jobs by semantic similarity to profile.

        Returns jobs sorted by match score (highest first).
        """
        scored_jobs = []

        for job in jobs:
            job_embedding = self.embed_job(job)
            score = self.calculate_similarity(
                profile_embedding,
                job_embedding
            )
            scored_jobs.append((job, score))

        return sorted(
            scored_jobs,
            key=lambda x: x[1],
            reverse=True
        )`,
  },
  {
    name: 'Discord Notifier',
    file: 'services/discord_notifier.py',
    description: 'Sends beautiful webhook notifications to Discord for high-quality job matches and application updates.',
    features: [
      'Rich embed messages',
      'Match score color coding',
      'Daily digest summaries',
      'Application status alerts',
      'Error notifications',
    ],
    code: `class DiscordNotifier:
    """Discord webhook notifications for job alerts."""

    def __init__(self):
        self.webhook_url = settings.DISCORD_WEBHOOK_URL

    async def send_job_alert(
        self,
        job: Job,
        match_score: float,
        analysis: dict
    ):
        """Send high-quality job match to Discord.

        Only sends for matches >= 85% by default.
        """
        embed = {
            "title": f"🎯 {job.title}",
            "description": f"**{match_score:.0%} Match** at {job.company}",
            "color": self._score_to_color(match_score),
            "fields": [
                {
                    "name": "📍 Location",
                    "value": job.location or "Not specified",
                    "inline": True
                },
                {
                    "name": "💰 Salary",
                    "value": self._format_salary(job),
                    "inline": True
                },
                {
                    "name": "🏢 Company",
                    "value": job.company,
                    "inline": True
                },
                {
                    "name": "✅ Your Strengths",
                    "value": "\\n".join(
                        f"• {s}" for s in analysis.get('strengths', [])[:3]
                    ) or "N/A",
                    "inline": False
                },
                {
                    "name": "📝 Talking Points",
                    "value": "\\n".join(
                        f"• {p}" for p in analysis.get('talking_points', [])[:3]
                    ) or "N/A",
                    "inline": False
                }
            ],
            "url": job.url,
            "footer": {
                "text": f"Source: {job.source} | JobHunter Pro"
            },
            "timestamp": datetime.utcnow().isoformat()
        }

        async with httpx.AsyncClient() as client:
            await client.post(
                self.webhook_url,
                json={"embeds": [embed]}
            )

    async def send_daily_digest(
        self,
        jobs: List[Tuple[Job, float, dict]]
    ):
        """Send daily summary of top job matches."""
        top_jobs = jobs[:10]  # Top 10 matches

        description = "\\n\\n".join([
            f"**{i+1}. {job.title}** at {job.company}\\n"
            f"   {score:.0%} match | {job.location}"
            for i, (job, score, _) in enumerate(top_jobs)
        ])

        embed = {
            "title": "📊 Daily Job Digest",
            "description": description,
            "color": 0x7C3AED,  # Purple
            "footer": {
                "text": f"Found {len(jobs)} matches today | JobHunter Pro"
            }
        }

        async with httpx.AsyncClient() as client:
            await client.post(
                self.webhook_url,
                json={"embeds": [embed]}
            )

    def _score_to_color(self, score: float) -> int:
        """Convert match score to Discord embed color."""
        if score >= 0.90:
            return 0x22C55E  # Green - exceptional
        if score >= 0.85:
            return 0x84CC16  # Lime - excellent
        if score >= 0.70:
            return 0xEAB308  # Yellow - good
        if score >= 0.60:
            return 0xF97316  # Orange - moderate
        return 0xEF4444  # Red - weak`,
  },
];

const projectStructure = `backend-python/
├── main.py                      # FastAPI application entry point
├── config.py                    # Settings and environment variables
├── requirements.txt             # Python dependencies
├── Procfile                     # Railway deployment config
├── railway.json                 # Railway build settings
│
├── models/
│   ├── __init__.py
│   ├── profile.py               # User profile Pydantic models
│   ├── job.py                   # Job listing models
│   ├── application.py           # Application tracking models
│   └── interview.py             # Interview session models
│
├── services/
│   ├── __init__.py
│   ├── claude_service.py        # Claude CLI wrapper for AI ops
│   ├── job_aggregator.py        # Adzuna + Jooble integration
│   ├── embedding_service.py     # OpenAI embeddings
│   ├── discord_notifier.py      # Webhook notifications
│   └── cv_generator.py          # Dynamic CV generation
│
├── database/
│   ├── __init__.py
│   ├── supabase_client.py       # Supabase connection
│   └── repositories/
│       ├── profile_repo.py      # Profile CRUD operations
│       ├── job_repo.py          # Job CRUD operations
│       └── application_repo.py  # Application tracking
│
├── api/
│   ├── __init__.py
│   ├── routes/
│   │   ├── health.py            # Health check endpoints
│   │   ├── profile.py           # Profile management
│   │   ├── jobs.py              # Job search & matching
│   │   ├── applications.py      # Application tracking
│   │   └── extension.py         # Chrome extension API
│   └── middleware/
│       ├── auth.py              # Authentication (future)
│       └── rate_limit.py        # Rate limiting
│
└── tests/
    ├── __init__.py
    ├── test_claude_service.py
    ├── test_job_aggregator.py
    └── test_embedding_service.py`;

const envVariables = [
  { name: 'SUPABASE_URL', description: 'Supabase project URL', example: 'https://xxxxx.supabase.co', required: true },
  { name: 'SUPABASE_KEY', description: 'Supabase service role key (JWT)', example: 'eyJhbGciOiJIUzI1NiIs...', required: true },
  { name: 'OPENAI_API_KEY', description: 'OpenAI API key for embeddings', example: 'sk-proj-xxxxx...', required: true },
  { name: 'ADZUNA_APP_ID', description: 'Adzuna application ID', example: '7882ce94', required: true },
  { name: 'ADZUNA_API_KEY', description: 'Adzuna API key', example: '441f96dc44f11039...', required: true },
  { name: 'JOOBLE_API_KEY', description: 'Jooble API key', example: '251bf69b-d3b0-453a...', required: true },
  { name: 'DISCORD_WEBHOOK_URL', description: 'Discord webhook for notifications', example: 'https://discord.com/api/webhooks/...', required: true },
];

const apiEndpoints = [
  { method: 'GET', path: '/health', description: 'Health check endpoint', response: '{ "status": "healthy", "version": "1.0.0" }' },
  { method: 'GET', path: '/api/extension/profile', description: 'Get profile for Chrome extension', response: 'Profile object for form filling' },
  { method: 'POST', path: '/api/profile', description: 'Create/update user profile', response: 'Updated profile object' },
  { method: 'GET', path: '/api/jobs/search', description: 'Search jobs across all sources', response: 'Array of matched jobs with scores' },
  { method: 'POST', path: '/api/jobs/match', description: 'Match jobs to profile', response: 'Ranked jobs with analysis' },
  { method: 'POST', path: '/api/interview/start', description: 'Start AI interview session', response: 'First interview question' },
  { method: 'POST', path: '/api/interview/respond', description: 'Send interview response', response: 'Next question or completion' },
  { method: 'POST', path: '/api/cv/generate', description: 'Generate tailored CV', response: 'CV content object' },
];

const databaseSchema = `-- Supabase PostgreSQL Schema

-- User profiles
CREATE TABLE profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id TEXT UNIQUE,  -- For future auth

    -- Basic info
    full_name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    location TEXT,
    linkedin_url TEXT,
    github_url TEXT,
    portfolio_url TEXT,

    -- Professional info
    target_title TEXT,
    experience_years INTEGER,
    skills TEXT[],  -- Array of skills
    experience_summary TEXT,
    achievements TEXT[],
    education JSONB,  -- Structured education data

    -- Preferences
    preferred_locations TEXT[],
    remote_preference TEXT,  -- 'remote', 'hybrid', 'onsite', 'any'
    salary_expectation INTEGER,

    -- AI-generated
    professional_summary TEXT,
    embedding VECTOR(3072),  -- OpenAI embedding

    -- Metadata
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Job listings
CREATE TABLE jobs (
    id TEXT PRIMARY KEY,  -- e.g., 'adzuna_123456'

    -- Basic info
    title TEXT NOT NULL,
    company TEXT NOT NULL,
    location TEXT,
    description TEXT,
    requirements TEXT,

    -- Compensation
    salary_min INTEGER,
    salary_max INTEGER,
    salary_currency TEXT DEFAULT 'GBP',

    -- Source info
    source TEXT NOT NULL,  -- 'adzuna', 'jooble'
    source_url TEXT,
    posted_date TIMESTAMPTZ,

    -- AI-generated
    embedding VECTOR(3072),

    -- Metadata
    created_at TIMESTAMPTZ DEFAULT NOW(),
    last_seen TIMESTAMPTZ DEFAULT NOW()
);

-- Job matches (profile <-> job)
CREATE TABLE job_matches (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    profile_id UUID REFERENCES profiles(id),
    job_id TEXT REFERENCES jobs(id),

    -- Match data
    match_score FLOAT NOT NULL,
    analysis JSONB,  -- Full AI analysis

    -- Status
    status TEXT DEFAULT 'new',  -- 'new', 'viewed', 'saved', 'applied', 'hidden'

    -- Metadata
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),

    UNIQUE(profile_id, job_id)
);

-- Applications
CREATE TABLE applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    profile_id UUID REFERENCES profiles(id),
    job_id TEXT REFERENCES jobs(id),

    -- Application details
    status TEXT DEFAULT 'applied',
    -- 'applied', 'screening', 'interview', 'offer', 'rejected', 'withdrawn'
    applied_date TIMESTAMPTZ DEFAULT NOW(),

    -- Documents used
    cv_version JSONB,  -- Snapshot of generated CV
    cover_letter TEXT,

    -- Notes
    notes TEXT,
    next_action TEXT,
    next_action_date TIMESTAMPTZ,

    -- Interview tracking
    interviews JSONB[],  -- Array of interview records

    -- Metadata
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Interview sessions (AI interview)
CREATE TABLE interview_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    profile_id UUID REFERENCES profiles(id),

    -- Session data
    status TEXT DEFAULT 'in_progress',  -- 'in_progress', 'completed'
    questions_asked INTEGER DEFAULT 0,

    -- Conversation history
    history JSONB[],  -- Array of {role, content, timestamp}

    -- Extracted data
    extracted_data JSONB,  -- Parsed profile info

    -- Metadata
    started_at TIMESTAMPTZ DEFAULT NOW(),
    completed_at TIMESTAMPTZ
);

-- Create indexes for performance
CREATE INDEX idx_profiles_embedding ON profiles
    USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);
CREATE INDEX idx_jobs_embedding ON jobs
    USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);
CREATE INDEX idx_job_matches_profile ON job_matches(profile_id);
CREATE INDEX idx_job_matches_score ON job_matches(match_score DESC);
CREATE INDEX idx_applications_profile ON applications(profile_id);
CREATE INDEX idx_applications_status ON applications(status);`;

function CodeBlock({ code, language = 'python' }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <button
        onClick={copyToClipboard}
        className="absolute top-3 right-3 p-2 bg-[#262626] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-gray-400" />}
      </button>
      <pre className="bg-[#0a0a0a] p-4 rounded-lg text-xs text-gray-300 overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function Phase1Page() {
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
            <span className="text-purple-400">Phase I: Foundation</span>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <Server className="text-white" size={28} />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-white">Phase I: Foundation</h1>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Current Phase</span>
              </div>
              <p className="text-gray-400 max-w-2xl">
                The complete Python backend infrastructure powering JobHunter Pro. FastAPI server with Claude CLI integration,
                job aggregation from multiple sources, OpenAI embeddings for semantic matching, and Discord notifications.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Live Status */}
        <Card delay={0.1} className="mb-8 bg-gradient-to-r from-green-500/5 to-emerald-500/5 border-green-500/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
              <div>
                <h3 className="font-semibold text-white">Backend is Live</h3>
                <p className="text-sm text-gray-400">Deployed on Railway and serving requests</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://jobhunter-api-production.up.railway.app/health"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#1a1a1a] rounded-lg text-sm text-gray-300 hover:text-white flex items-center gap-2"
              >
                Health Check <ExternalLink size={14} />
              </a>
              <a
                href="https://jobhunter-api-production.up.railway.app/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-500/20 rounded-lg text-sm text-green-400 hover:bg-green-500/30 flex items-center gap-2"
              >
                API Docs <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </Card>

        {/* What's Included */}
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Package className="text-blue-400" size={24} />
          What's Included in Phase I
        </h2>

        <div className="grid grid-cols-4 gap-4 mb-10">
          {[
            { icon: Brain, label: 'Claude CLI', desc: 'AI Interview & Analysis', color: 'purple' },
            { icon: Database, label: 'Supabase', desc: 'PostgreSQL + Vector', color: 'green' },
            { icon: Globe, label: 'Job APIs', desc: 'Adzuna + Jooble', color: 'blue' },
            { icon: Bell, label: 'Discord', desc: 'Webhook Alerts', color: 'yellow' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <Card key={item.label} delay={0.2 + i * 0.05}>
                <div className={`w-10 h-10 rounded-lg bg-${item.color}-500/20 flex items-center justify-center mb-3`}>
                  <Icon className={`text-${item.color}-400`} size={20} />
                </div>
                <h3 className="font-semibold text-white text-sm">{item.label}</h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </Card>
            );
          })}
        </div>

        {/* Project Structure */}
        <Card delay={0.3} className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <Folder className="text-yellow-400" size={20} />
              Project Structure
            </h2>
            <span className="text-xs text-gray-500">backend-python/</span>
          </div>
          <CodeBlock code={projectStructure} language="text" />
        </Card>

        {/* Backend Services */}
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Code className="text-cyan-400" size={24} />
          Backend Services (In-Depth)
        </h2>
        <p className="text-gray-400 mb-6">
          Each service is designed for a specific responsibility. Here's the complete implementation with detailed explanations.
        </p>

        {backendServices.map((service, index) => (
          <Card key={service.name} delay={0.4 + index * 0.1} className="mb-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{service.name}</h3>
                <p className="text-xs text-gray-500 font-mono">{service.file}</p>
              </div>
              <FileCode className="text-purple-400" size={20} />
            </div>

            <p className="text-sm text-gray-300 mb-4">{service.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {service.features.map((feature, i) => (
                <span key={i} className="text-xs px-2 py-1 bg-[#1a1a1a] text-gray-400 rounded">
                  {feature}
                </span>
              ))}
            </div>

            <CodeBlock code={service.code} />
          </Card>
        ))}

        {/* Database Schema */}
        <Card delay={0.8} className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <Database className="text-green-400" size={20} />
              Database Schema (Supabase PostgreSQL)
            </h2>
            <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded">schema.sql</span>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            Complete database schema with vector embeddings support, relationship tables, and performance indexes.
          </p>
          <CodeBlock code={databaseSchema} language="sql" />
        </Card>

        {/* API Endpoints */}
        <Card delay={0.9} className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Terminal className="text-orange-400" size={20} />
            API Endpoints
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#262626]">
                  <th className="text-left py-3 text-sm font-medium text-gray-400">Method</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-400">Endpoint</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-400">Description</th>
                </tr>
              </thead>
              <tbody>
                {apiEndpoints.map((endpoint) => (
                  <tr key={endpoint.path} className="border-b border-[#262626]/50">
                    <td className="py-3">
                      <span className={`text-xs px-2 py-1 rounded font-mono ${
                        endpoint.method === 'GET' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {endpoint.method}
                      </span>
                    </td>
                    <td className="py-3 font-mono text-sm text-white">{endpoint.path}</td>
                    <td className="py-3 text-sm text-gray-400">{endpoint.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Environment Variables */}
        <Card delay={1.0} className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Key className="text-red-400" size={20} />
            Environment Variables
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            All required environment variables for the backend. These are configured in Railway for production.
          </p>
          <div className="space-y-3">
            {envVariables.map((env) => (
              <div key={env.name} className="p-3 bg-[#1a1a1a] rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <code className="text-sm text-yellow-400 font-mono">{env.name}</code>
                  {env.required && (
                    <span className="text-[10px] px-1.5 py-0.5 bg-red-500/20 text-red-400 rounded">Required</span>
                  )}
                </div>
                <p className="text-xs text-gray-400 mb-1">{env.description}</p>
                <code className="text-xs text-gray-600">{env.example}</code>
              </div>
            ))}
          </div>
        </Card>

        {/* Deployment */}
        <Card delay={1.1} className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Play className="text-green-400" size={20} />
            Deployment (Railway)
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Procfile</h4>
              <CodeBlock code={`web: uvicorn main:app --host 0.0.0.0 --port $PORT`} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">railway.json</h4>
              <CodeBlock code={`{
  "$schema": "https://railway.com/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "numReplicas": 1,
    "startCommand": "uvicorn main:app --host 0.0.0.0 --port $PORT",
    "healthcheckPath": "/health",
    "healthcheckTimeout": 100,
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}`} />
            </div>
          </div>
          <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
            <h4 className="text-sm font-semibold text-blue-400 mb-2">Deployment Commands</h4>
            <CodeBlock code={`# Link to Railway project
railway link

# Set environment variables
railway variables set SUPABASE_URL="https://xxxxx.supabase.co"
railway variables set SUPABASE_KEY="eyJhbG..."
# ... set all other variables

# Deploy
railway up

# Check logs
railway logs --tail 100`} />
          </div>
        </Card>

        {/* Next Steps */}
        <Card delay={1.2} className="bg-gradient-to-r from-purple-500/5 to-indigo-500/5 border-purple-500/20">
          <h2 className="text-lg font-semibold text-white mb-4">Next: Phase II - Desktop App</h2>
          <p className="text-sm text-gray-400 mb-4">
            With the backend complete and live, Phase II focuses on building the Flutter desktop application
            that provides a beautiful interface for profile management, job browsing, and application tracking.
          </p>
          <Link
            href="/research/jobhunter/phase-2"
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors"
          >
            Continue to Phase II <ArrowRight size={16} />
          </Link>
        </Card>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-10 pt-6 border-t border-[#262626] text-center"
        >
          <p className="text-sm text-gray-500">
            Phase I Documentation | Last updated: January 10, 2026
          </p>
        </motion.div>
      </main>
    </div>
  );
}
