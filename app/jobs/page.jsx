'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  ExternalLink,
  Clock,
  MapPin,
  DollarSign,
  Building2,
  Star,
  Filter,
  RefreshCw,
  AlertCircle,
  TrendingUp
} from 'lucide-react';
import { useState } from 'react';
import Navigation from '../../components/Navigation';
import Card from '../../components/Card';

// Demo jobs data
const demoJobs = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    company: 'TechCorp',
    location: 'Remote (USA)',
    salary: '$120k - $160k',
    score: 92,
    source: 'RemoteOK',
    tags: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    postedAt: '2 hours ago',
    h1bSponsor: true,
  },
  {
    id: 2,
    title: 'Node.js Backend Engineer',
    company: 'StartupXYZ',
    location: 'Remote (Worldwide)',
    salary: '$90k - $130k',
    score: 85,
    source: 'Himalayas',
    tags: ['Node.js', 'AWS', 'MongoDB', 'Docker'],
    postedAt: '5 hours ago',
    h1bSponsor: false,
  },
  {
    id: 3,
    title: 'Frontend Developer (React)',
    company: 'FinanceApp',
    location: 'UK (Remote)',
    salary: '£70k - £90k',
    score: 78,
    source: 'Jobicy',
    tags: ['React', 'TypeScript', 'TailwindCSS'],
    postedAt: '1 day ago',
    h1bSponsor: false,
  },
  {
    id: 4,
    title: 'Software Engineer',
    company: 'BigTech Inc',
    location: 'San Francisco, CA',
    salary: '$150k - $200k',
    score: 72,
    source: 'YC Jobs',
    tags: ['Python', 'JavaScript', 'AWS', 'Kubernetes'],
    postedAt: '2 days ago',
    h1bSponsor: true,
  },
  {
    id: 5,
    title: 'Full Stack Engineer',
    company: 'AI Startup',
    location: 'Remote (Europe)',
    salary: '€80k - €110k',
    score: 68,
    source: 'Arbeitnow',
    tags: ['React', 'Python', 'PostgreSQL', 'ML'],
    postedAt: '3 days ago',
    h1bSponsor: false,
  },
];

const jobSources = [
  { name: 'RemoteOK', status: 'active', lastScrape: '2 hours ago', jobs: 45 },
  { name: 'Himalayas', status: 'active', lastScrape: '2 hours ago', jobs: 32 },
  { name: 'Jobicy', status: 'active', lastScrape: '2 hours ago', jobs: 28 },
  { name: 'Arbeitnow', status: 'active', lastScrape: '2 hours ago', jobs: 67 },
  { name: 'WeWorkRemotely', status: 'active', lastScrape: '2 hours ago', jobs: 23 },
  { name: 'YC Jobs', status: 'active', lastScrape: '2 hours ago', jobs: 156 },
];

const getScoreColor = (score) => {
  if (score >= 80) return 'text-green-400 bg-green-500/20';
  if (score >= 60) return 'text-yellow-400 bg-yellow-500/20';
  return 'text-gray-400 bg-gray-500/20';
};

export default function JobsPage() {
  const [filter, setFilter] = useState('all');
  const [minScore, setMinScore] = useState(0);

  const filteredJobs = demoJobs.filter((job) => {
    if (minScore > 0 && job.score < minScore) return false;
    if (filter === 'h1b' && !job.h1bSponsor) return false;
    if (filter === 'remote' && !job.location.toLowerCase().includes('remote')) return false;
    return true;
  });

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
            <span className="text-white">Job Intelligence</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Job Intelligence</h1>
          <p className="text-gray-400">
            Scraped jobs from 6 sources, scored against your profile
          </p>
        </motion.div>

        {/* Demo Alert */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-4 mb-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="text-blue-400" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-blue-400">Demo Data</h3>
              <p className="text-sm text-gray-400 mt-1">
                These are example jobs to show how the interface will look.
                Configure your profile and run <code className="text-indigo-400">npm start</code> to see real jobs.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <Card delay={0.1}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                <Briefcase className="text-indigo-400" size={20} />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{demoJobs.length}</p>
                <p className="text-sm text-gray-500">Total Jobs</p>
              </div>
            </div>
          </Card>

          <Card delay={0.2}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                <Star className="text-green-400" size={20} />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  {demoJobs.filter((j) => j.score >= 80).length}
                </p>
                <p className="text-sm text-gray-500">High Match (80+)</p>
              </div>
            </div>
          </Card>

          <Card delay={0.3}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <Building2 className="text-purple-400" size={20} />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  {demoJobs.filter((j) => j.h1bSponsor).length}
                </p>
                <p className="text-sm text-gray-500">H1B Sponsors</p>
              </div>
            </div>
          </Card>

          <Card delay={0.4}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <Clock className="text-blue-400" size={20} />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">2h ago</p>
                <p className="text-sm text-gray-500">Last Scrape</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Job List */}
          <div className="col-span-2">
            {/* Filters */}
            <Card delay={0.5} className="mb-4">
              <div className="flex items-center gap-4">
                <Filter size={18} className="text-gray-400" />
                <span className="text-sm text-gray-400">Filter:</span>
                {['all', 'remote', 'h1b'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      filter === f
                        ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {f === 'all' ? 'All Jobs' : f === 'remote' ? 'Remote Only' : 'H1B Sponsors'}
                  </button>
                ))}

                <div className="ml-auto flex items-center gap-2">
                  <span className="text-sm text-gray-400">Min Score:</span>
                  <input
                    type="number"
                    value={minScore}
                    onChange={(e) => setMinScore(parseInt(e.target.value) || 0)}
                    className="w-16 px-2 py-1 bg-[#1a1a1a] border border-[#262626] rounded text-white text-sm"
                    min="0"
                    max="100"
                  />
                </div>
              </div>
            </Card>

            {/* Jobs */}
            <div className="space-y-4">
              {filteredJobs.map((job, index) => (
                <Card key={job.id} delay={0.6 + index * 0.05}>
                  <div className="flex items-start gap-4">
                    {/* Score */}
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-bold text-lg ${getScoreColor(job.score)}`}>
                      {job.score}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-white">{job.title}</h3>
                          <p className="text-sm text-gray-400">{job.company}</p>
                        </div>
                        <a
                          href="#"
                          className="text-indigo-400 hover:text-indigo-300"
                        >
                          <ExternalLink size={18} />
                        </a>
                      </div>

                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign size={14} />
                          {job.salary}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {job.postedAt}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mt-3">
                        {job.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-[#1a1a1a] border border-[#262626] rounded text-xs text-gray-400"
                          >
                            {tag}
                          </span>
                        ))}
                        {job.h1bSponsor && (
                          <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded text-xs">
                            H1B Sponsor
                          </span>
                        )}
                        <span className="ml-auto text-xs text-gray-600">
                          via {job.source}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sources */}
          <div>
            <Card delay={0.8}>
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="text-green-400" size={20} />
                Job Sources
              </h2>

              <div className="space-y-3">
                {jobSources.map((source) => (
                  <div
                    key={source.name}
                    className="flex items-center justify-between p-3 bg-[#1a1a1a] rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-white">{source.name}</p>
                      <p className="text-xs text-gray-500">Last: {source.lastScrape}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-indigo-400">{source.jobs}</p>
                      <p className="text-xs text-gray-500">jobs</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="mt-4 w-full flex items-center justify-center gap-2 py-2 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-400 rounded-lg text-sm font-medium transition-colors"
              >
                <RefreshCw size={16} />
                Scrape Now
              </button>
            </Card>

            {/* Scoring Info */}
            <Card delay={0.9} className="mt-4">
              <h3 className="font-semibold text-white mb-3">Score Legend</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-6 rounded bg-green-500/20 text-green-400 text-center text-xs leading-6">
                    80+
                  </span>
                  <span className="text-gray-400">Excellent match</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-8 h-6 rounded bg-yellow-500/20 text-yellow-400 text-center text-xs leading-6">
                    60+
                  </span>
                  <span className="text-gray-400">Good match</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-8 h-6 rounded bg-gray-500/20 text-gray-400 text-center text-xs leading-6">
                    &lt;60
                  </span>
                  <span className="text-gray-400">Low match</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
