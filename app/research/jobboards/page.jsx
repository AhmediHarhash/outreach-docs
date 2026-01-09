'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  Globe,
  DollarSign,
  CheckCircle2,
  XCircle,
  Zap,
  Shield,
  Database,
  Code2,
  Map,
  Building2,
  FileText
} from 'lucide-react';
import Navigation from '../../../components/Navigation';
import Card from '../../../components/Card';

const jobAPIs = [
  {
    name: 'Adzuna API',
    verdict: 'RECOMMENDED',
    score: 95,
    description: 'Aggregates jobs from 1000+ sources across 16 countries',
    coverage: ['USA', 'UK', 'Germany', 'Netherlands', 'France', 'Australia', 'Canada'],
    features: [
      'Free tier: 250 calls/day',
      'Real job board aggregation',
      'Salary estimates included',
      'Historical data available',
      'Clean REST API',
      'Good documentation',
    ],
    pricing: 'Free: 250/day | Pro: $100/mo for 10k/day',
    dataQuality: 'High - real scraped jobs, refreshed daily',
    bestFor: 'Primary job source for MVP',
  },
  {
    name: 'Jooble API',
    verdict: 'RECOMMENDED',
    score: 90,
    description: 'Aggregates from 140,000+ job boards worldwide',
    coverage: ['USA', 'UK', 'Germany', 'UAE', 'France', 'Netherlands', 'India', '60+ more'],
    features: [
      'Completely FREE for affiliates',
      'Massive global coverage',
      'Real-time job feeds',
      'XML and JSON formats',
      'No rate limits (within reason)',
    ],
    pricing: 'FREE (affiliate model)',
    dataQuality: 'High - aggregates real postings',
    bestFor: 'Secondary source + international coverage',
  },
  {
    name: 'Indeed Publisher API',
    verdict: 'LIMITED ACCESS',
    score: 75,
    description: 'Direct Indeed jobs, but restricted access',
    coverage: ['USA', 'UK', 'Canada', 'Australia', 'Germany', 'France'],
    features: [
      'Official Indeed data',
      'Affiliate revenue share',
      'High-quality listings',
    ],
    cons: [
      'Requires publisher approval',
      'Strict usage guidelines',
      'Revenue share model only',
    ],
    pricing: 'Revenue share (CPC model)',
    dataQuality: 'Highest - direct source',
    bestFor: 'If you can get approved',
  },
  {
    name: 'LinkedIn Jobs API',
    verdict: 'PARTNER ONLY',
    score: 70,
    description: 'Official LinkedIn job postings',
    coverage: ['Global'],
    features: [
      'Premium job data',
      'Company insights',
      'Applicant tracking',
    ],
    cons: [
      'Requires partnership agreement',
      'Very restrictive access',
      'High costs',
    ],
    pricing: 'Enterprise only (~$10k+/mo)',
    dataQuality: 'Highest',
    bestFor: 'Enterprise customers only',
  },
];

const scrapingStrategies = [
  {
    name: 'Bright Data (Web Scraping)',
    verdict: 'RECOMMENDED FOR CUSTOM',
    description: 'Enterprise scraping infrastructure with residential proxies',
    features: [
      'Pre-built job board scrapers',
      'Rotating residential IPs',
      'JavaScript rendering',
      'CAPTCHA solving included',
      'Legal compliance tools',
    ],
    pricing: '$10-15/GB data transfer',
    targets: ['LinkedIn', 'Glassdoor', 'Monster', 'ZipRecruiter'],
    legal: 'Review ToS of target sites',
  },
  {
    name: 'Playwright + Custom Scrapers',
    verdict: 'DIY OPTION',
    description: 'Build your own scrapers with browser automation',
    features: [
      'Full control over logic',
      'No per-request costs',
      'Custom parsing rules',
    ],
    cons: [
      'Maintenance burden',
      'Need proxy infrastructure',
      'Handle anti-bot yourself',
    ],
    pricing: 'Proxy costs only (~$10-50/mo)',
    targets: ['Any public job board'],
    legal: 'Respect robots.txt and rate limits',
  },
];

const visaSponsorshipDetection = {
  description: 'Detect visa sponsorship availability from job postings and employer data',
  sources: [
    {
      name: 'USCIS H1B Data Hub',
      type: 'Official',
      data: 'Approved H1B sponsors, LCA data, approval rates',
      url: 'uscis.gov/tools/reports-and-studies/h-1b-employer-data-hub',
      usage: 'Match employer names to known sponsors',
    },
    {
      name: 'UK GOV.UK Sponsor Register',
      type: 'Official',
      data: 'Licensed Tier 2/Skilled Worker sponsors',
      url: 'gov.uk/government/publications/register-of-licensed-sponsors-workers',
      usage: 'Check if UK employer is licensed',
    },
    {
      name: 'EU Blue Card Employers',
      type: 'Unofficial',
      data: 'Known Blue Card-friendly companies',
      usage: 'Community-maintained lists',
    },
    {
      name: 'Job Text Analysis',
      type: 'AI',
      data: 'Keywords: "visa sponsorship", "work authorization", "must be authorized"',
      usage: 'GPT analysis of job descriptions',
    },
  ],
  implementation: `// Visa sponsorship detection
async function detectVisa(job, employer) {
  // Check official databases
  const h1bSponsors = await getH1BSponsors();
  const ukSponsors = await getUKSponsors();

  const isKnownH1BSponsor = h1bSponsors.includes(employer.name);
  const isKnownUKSponsor = ukSponsors.includes(employer.name);

  // Analyze job text
  const visaKeywords = [
    'visa sponsorship available',
    'will sponsor',
    'sponsorship provided'
  ];
  const noVisaKeywords = [
    'must be authorized',
    'no sponsorship',
    'citizens only'
  ];

  const textAnalysis = await analyzeJobText(job.description, visaKeywords, noVisaKeywords);

  return {
    h1b: isKnownH1BSponsor || textAnalysis.sponsorshipMentioned,
    uk: isKnownUKSponsor,
    confidence: textAnalysis.confidence
  };
}`,
};

const regionCoverage = [
  {
    region: 'USA',
    priority: 'High',
    boards: ['Indeed', 'LinkedIn', 'Glassdoor', 'ZipRecruiter', 'Monster', 'CareerBuilder', 'Dice', 'AngelList'],
    api: 'Adzuna + Jooble',
    visaData: 'USCIS H1B Hub',
  },
  {
    region: 'UK',
    priority: 'High',
    boards: ['Indeed UK', 'Reed', 'Totaljobs', 'CV-Library', 'Guardian Jobs', 'LinkedIn'],
    api: 'Adzuna + Jooble',
    visaData: 'GOV.UK Sponsor Register',
  },
  {
    region: 'Germany',
    priority: 'Medium',
    boards: ['StepStone', 'Indeed DE', 'XING', 'Monster DE', 'Arbeitsagentur', 'LinkedIn'],
    api: 'Adzuna + Jooble',
    visaData: 'EU Blue Card eligibility',
  },
  {
    region: 'Netherlands',
    priority: 'Medium',
    boards: ['Indeed NL', 'Nationale Vacaturebank', 'Monsterboard', 'LinkedIn'],
    api: 'Adzuna + Jooble',
    visaData: 'IND Recognized Sponsors',
  },
  {
    region: 'UAE/Middle East',
    priority: 'Medium',
    boards: ['Bayt', 'GulfTalent', 'Naukri Gulf', 'Indeed AE', 'LinkedIn'],
    api: 'Jooble',
    visaData: 'Employer-sponsored (standard)',
  },
  {
    region: 'France',
    priority: 'Low',
    boards: ['Indeed FR', 'Pole Emploi', 'APEC', 'Cadremploi', 'LinkedIn'],
    api: 'Adzuna + Jooble',
    visaData: 'Talent Passport eligibility',
  },
];

const dataSchema = `// Job entity schema
interface Job {
  id: string;
  externalId: string;  // Source job ID
  source: 'adzuna' | 'jooble' | 'scraped';

  title: string;
  company: string;
  location: {
    city: string;
    country: string;
    remote: boolean;
  };

  description: string;
  requirements: string[];

  salary: {
    min?: number;
    max?: number;
    currency: string;
  };

  visa: {
    h1b: boolean;
    ukTier2: boolean;
    euBlueCard: boolean;
    confidence: number;  // 0-1
  };

  applyUrl: string;
  postedAt: Date;
  expiresAt?: Date;

  matchScore?: number;  // User-specific
  applied?: boolean;
}`;

const refreshStrategy = {
  description: 'Keep job data fresh while respecting API limits',
  schedule: [
    { frequency: 'Every 6 hours', action: 'Full refresh from APIs', volume: '~10k jobs' },
    { frequency: 'Every 24 hours', action: 'Clean expired jobs (>30 days)', volume: 'Varies' },
    { frequency: 'On user search', action: 'Real-time API call if stale', volume: 'Per request' },
  ],
  deduplication: 'Hash title + company + location for unique key',
  storage: 'PostgreSQL with full-text search (pg_trgm)',
};

const costs = [
  { item: 'Adzuna API (Free Tier)', volume: '7,500 calls/month', cost: 'FREE' },
  { item: 'Jooble API', volume: 'Unlimited (affiliate)', cost: 'FREE' },
  { item: 'Bright Data (if needed)', volume: '~5GB/month', cost: '$50-75/mo' },
  { item: 'Proxy rotation (DIY)', volume: '1000 requests/day', cost: '$10-20/mo' },
  { item: 'PostgreSQL (Railway)', volume: '1GB database', cost: 'Included in $5/mo' },
];

export default function JobBoardsResearchPage() {
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
            <span className="text-white">Job Boards</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Job Board APIs & Scraping Research - 2026
          </h1>
          <p className="text-gray-400">
            Multi-country job aggregation strategies and visa sponsorship detection
          </p>
        </motion.div>

        {/* Recommendation */}
        <Card delay={0.1} className="mb-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
              <Briefcase className="text-blue-400" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Recommended Strategy</h2>
              <p className="text-gray-300">
                Use <strong className="text-blue-400">Adzuna API</strong> (primary, 250 free calls/day) +
                <strong className="text-blue-400"> Jooble API</strong> (secondary, free unlimited) for MVP.
                This combination covers USA, UK, EU, and Middle East without any API costs.
                Add <strong className="text-blue-400">Bright Data</strong> scraping only if you need LinkedIn/Glassdoor direct access.
              </p>
            </div>
          </div>
        </Card>

        {/* Job APIs */}
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Database className="text-green-400" size={24} />
          Job Board APIs
        </h2>

        <div className="space-y-4 mb-8">
          {jobAPIs.map((api, index) => (
            <Card key={api.name} delay={0.2 + index * 0.1}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-white">{api.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${
                      api.verdict === 'RECOMMENDED'
                        ? 'bg-green-500/20 text-green-400'
                        : api.verdict.includes('LIMITED') || api.verdict.includes('PARTNER')
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-gray-500/20 text-gray-400'
                    }`}>
                      {api.verdict}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{api.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-indigo-400">{api.score}</div>
                  <div className="text-xs text-gray-500">Score</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Features</h4>
                  <ul className="space-y-1">
                    {api.features.map((f, i) => (
                      <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                        <CheckCircle2 size={10} className="text-green-400 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Coverage</h4>
                  <div className="flex flex-wrap gap-1">
                    {api.coverage.map((country) => (
                      <span key={country} className="text-xs bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded">
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="p-2 bg-[#1a1a1a] rounded">
                    <span className="text-xs text-gray-500">Pricing: </span>
                    <span className="text-xs text-green-400">{api.pricing}</span>
                  </div>
                  <div className="p-2 bg-[#1a1a1a] rounded">
                    <span className="text-xs text-gray-500">Data Quality: </span>
                    <span className="text-xs text-yellow-400">{api.dataQuality}</span>
                  </div>
                  <div className="p-2 bg-[#1a1a1a] rounded">
                    <span className="text-xs text-gray-500">Best For: </span>
                    <span className="text-xs text-blue-400">{api.bestFor}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Scraping Strategies */}
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Code2 className="text-purple-400" size={24} />
          Scraping Strategies (If APIs Not Enough)
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {scrapingStrategies.map((strategy, index) => (
            <Card key={strategy.name} delay={0.4 + index * 0.1}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-white">{strategy.name}</h3>
                <span className={`text-xs px-2 py-1 rounded ${
                  strategy.verdict.includes('RECOMMENDED')
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {strategy.verdict}
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-3">{strategy.description}</p>

              <div className="space-y-2 mb-3">
                {strategy.features.map((f, i) => (
                  <div key={i} className="text-xs text-gray-400 flex items-center gap-2">
                    <Zap size={10} className="text-yellow-400" />
                    {f}
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-[#262626] space-y-1">
                <div className="text-xs">
                  <span className="text-gray-500">Pricing: </span>
                  <span className="text-green-400">{strategy.pricing}</span>
                </div>
                <div className="text-xs">
                  <span className="text-gray-500">Targets: </span>
                  <span className="text-indigo-400">{strategy.targets.join(', ')}</span>
                </div>
                <div className="text-xs">
                  <span className="text-gray-500">Legal: </span>
                  <span className="text-yellow-400">{strategy.legal}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Visa Sponsorship */}
        <Card delay={0.5} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <FileText className="text-yellow-400" size={20} />
            Visa Sponsorship Detection
          </h2>

          <p className="text-gray-400 text-sm mb-4">{visaSponsorshipDetection.description}</p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <h4 className="text-sm font-medium text-gray-400 mb-2">Data Sources</h4>
              <div className="space-y-2">
                {visaSponsorshipDetection.sources.map((source) => (
                  <div key={source.name} className="p-3 bg-[#1a1a1a] rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-white">{source.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        source.type === 'Official'
                          ? 'bg-green-500/20 text-green-400'
                          : source.type === 'AI'
                          ? 'bg-purple-500/20 text-purple-400'
                          : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {source.type}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-1">{source.data}</p>
                    <p className="text-xs text-indigo-400">{source.usage}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-400 mb-2">Implementation</h4>
              <pre className="bg-[#0a0a0a] p-3 rounded text-xs text-gray-300 overflow-x-auto max-h-80">
                {visaSponsorshipDetection.implementation}
              </pre>
            </div>
          </div>
        </Card>

        {/* Region Coverage */}
        <Card delay={0.6} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Map className="text-blue-400" size={20} />
            Region Coverage
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#262626]">
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Region</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Priority</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Job Boards</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-400">API</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Visa Data</th>
                </tr>
              </thead>
              <tbody>
                {regionCoverage.map((region) => (
                  <tr key={region.region} className="border-b border-[#262626]/50">
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <Globe size={14} className="text-indigo-400" />
                        <span className="text-sm text-white">{region.region}</span>
                      </div>
                    </td>
                    <td className="py-3">
                      <span className={`text-xs px-2 py-1 rounded ${
                        region.priority === 'High'
                          ? 'bg-green-500/20 text-green-400'
                          : region.priority === 'Medium'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {region.priority}
                      </span>
                    </td>
                    <td className="py-3">
                      <div className="flex flex-wrap gap-1 max-w-xs">
                        {region.boards.slice(0, 4).map((board) => (
                          <span key={board} className="text-xs bg-[#1a1a1a] text-gray-400 px-2 py-0.5 rounded">
                            {board}
                          </span>
                        ))}
                        {region.boards.length > 4 && (
                          <span className="text-xs text-gray-500">+{region.boards.length - 4} more</span>
                        )}
                      </div>
                    </td>
                    <td className="py-3 text-sm text-blue-400">{region.api}</td>
                    <td className="py-3 text-sm text-purple-400">{region.visaData}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Data Schema */}
        <Card delay={0.7} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Database className="text-green-400" size={20} />
            Job Data Schema
          </h2>
          <pre className="bg-[#0a0a0a] p-4 rounded text-xs text-gray-300 overflow-x-auto">
            {dataSchema}
          </pre>
        </Card>

        {/* Refresh Strategy */}
        <Card delay={0.8} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Zap className="text-yellow-400" size={20} />
            Data Refresh Strategy
          </h2>

          <p className="text-gray-400 text-sm mb-4">{refreshStrategy.description}</p>

          <div className="grid grid-cols-3 gap-4 mb-4">
            {refreshStrategy.schedule.map((item, index) => (
              <div key={item.frequency} className={`p-3 rounded-lg border ${
                index === 0 ? 'bg-green-500/10 border-green-500/20' :
                index === 1 ? 'bg-yellow-500/10 border-yellow-500/20' :
                'bg-blue-500/10 border-blue-500/20'
              }`}>
                <h4 className="font-medium text-white text-sm mb-1">{item.frequency}</h4>
                <p className="text-xs text-gray-400 mb-1">{item.action}</p>
                <span className="text-xs text-indigo-400">{item.volume}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-[#1a1a1a] rounded">
              <span className="text-xs text-gray-500">Deduplication: </span>
              <span className="text-xs text-gray-300">{refreshStrategy.deduplication}</span>
            </div>
            <div className="p-3 bg-[#1a1a1a] rounded">
              <span className="text-xs text-gray-500">Storage: </span>
              <span className="text-xs text-gray-300">{refreshStrategy.storage}</span>
            </div>
          </div>
        </Card>

        {/* Costs */}
        <Card delay={0.9}>
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <DollarSign className="text-green-400" size={20} />
            Monthly Cost Estimates
          </h2>

          <div className="overflow-x-auto mb-4">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#262626]">
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Item</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Volume</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Cost</th>
                </tr>
              </thead>
              <tbody>
                {costs.map((item) => (
                  <tr key={item.item} className="border-b border-[#262626]/50">
                    <td className="py-3 text-sm text-white">{item.item}</td>
                    <td className="py-3 text-sm text-gray-400">{item.volume}</td>
                    <td className="py-3 text-sm text-green-400 font-medium">{item.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
            <p className="text-sm text-green-400">
              <strong>MVP Total:</strong> $0/month using Adzuna + Jooble free tiers!
              Only add Bright Data ($50-75/mo) if you need LinkedIn/Glassdoor scraping.
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
          Research conducted: January 2026 | Sources: Adzuna API docs, Jooble, USCIS H1B Hub, GOV.UK
        </motion.div>
      </main>
    </div>
  );
}
