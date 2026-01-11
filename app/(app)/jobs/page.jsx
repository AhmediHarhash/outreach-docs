'use client';

import { useState } from 'react';
import { Search, Filter, MapPin, Building2, Clock, Bookmark, ExternalLink, ChevronDown } from 'lucide-react';

// Mock data - will be replaced with API calls
const mockJobs = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'TechCorp',
    location: 'London, UK',
    remote: true,
    salary: '£80,000 - £100,000',
    match: 94,
    posted: '2 days ago',
    skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    description: 'We are looking for a senior engineer to join our platform team...',
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    location: 'Manchester, UK',
    remote: true,
    salary: '£65,000 - £80,000',
    match: 89,
    posted: '1 day ago',
    skills: ['Vue.js', 'Python', 'AWS', 'Docker'],
    description: 'Join our fast-growing team building innovative fintech solutions...',
  },
  {
    id: 3,
    title: 'Backend Engineer',
    company: 'DataFlow',
    location: 'Remote',
    remote: true,
    salary: '£70,000 - £90,000',
    match: 85,
    posted: '3 days ago',
    skills: ['Python', 'FastAPI', 'Kubernetes', 'Redis'],
    description: 'Help us scale our data pipeline infrastructure...',
  },
  {
    id: 4,
    title: 'Frontend Developer',
    company: 'DesignStudio',
    location: 'Birmingham, UK',
    remote: false,
    salary: '£55,000 - £70,000',
    match: 78,
    posted: '5 days ago',
    skills: ['React', 'Next.js', 'Tailwind', 'Figma'],
    description: 'Create beautiful user experiences for our enterprise clients...',
  },
];

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJob, setSelectedJob] = useState(mockJobs[0]);
  const [filters, setFilters] = useState({
    remote: false,
    minMatch: 0,
  });

  const filteredJobs = mockJobs.filter(job => {
    if (filters.remote && !job.remote) return false;
    if (job.match < filters.minMatch) return false;
    if (searchQuery && !job.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="flex h-full">
      {/* Job List Panel */}
      <div className="w-96 border-r border-ocean-600 flex flex-col">
        {/* Search & Filters */}
        <div className="p-4 border-b border-ocean-600 space-y-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input pl-10"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilters(f => ({ ...f, remote: !f.remote }))}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                filters.remote
                  ? 'bg-accent-500/20 text-accent-400 border border-accent-500/30'
                  : 'bg-ocean-700 text-text-secondary border border-ocean-600 hover:border-ocean-500'
              }`}
            >
              Remote Only
            </button>
            <button
              onClick={() => setFilters(f => ({ ...f, minMatch: f.minMatch === 80 ? 0 : 80 }))}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                filters.minMatch === 80
                  ? 'bg-accent-500/20 text-accent-400 border border-accent-500/30'
                  : 'bg-ocean-700 text-text-secondary border border-ocean-600 hover:border-ocean-500'
              }`}
            >
              80%+ Match
            </button>
            <button className="px-3 py-1.5 rounded-lg text-sm font-medium bg-ocean-700 text-text-secondary border border-ocean-600 hover:border-ocean-500 flex items-center gap-1">
              <Filter className="w-4 h-4" />
              More
            </button>
          </div>
        </div>

        {/* Job List */}
        <div className="flex-1 overflow-auto">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              onClick={() => setSelectedJob(job)}
              className={`p-4 border-b border-ocean-600 cursor-pointer transition-colors ${
                selectedJob?.id === job.id
                  ? 'bg-ocean-700/50 border-l-2 border-l-accent-500'
                  : 'hover:bg-ocean-800/50'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-medium text-text-primary">{job.title}</h3>
                  <p className="text-sm text-text-secondary">{job.company}</p>
                </div>
                <span className={`match-badge ${
                  job.match >= 90 ? 'match-excellent' : job.match >= 80 ? 'match-good' : 'match-fair'
                }`}>
                  {job.match}%
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs text-text-muted">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {job.posted}
                </span>
              </div>

              <div className="flex flex-wrap gap-1 mt-2">
                {job.skills.slice(0, 3).map((skill) => (
                  <span key={skill} className="px-2 py-0.5 bg-ocean-700 rounded text-xs text-text-secondary">
                    {skill}
                  </span>
                ))}
                {job.skills.length > 3 && (
                  <span className="px-2 py-0.5 bg-ocean-700 rounded text-xs text-text-muted">
                    +{job.skills.length - 3}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Results Count */}
        <div className="p-3 border-t border-ocean-600 text-sm text-text-muted">
          {filteredJobs.length} jobs found
        </div>
      </div>

      {/* Job Detail Panel */}
      {selectedJob && (
        <div className="flex-1 overflow-auto p-6">
          <div className="max-w-3xl">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-xl bg-ocean-700 flex items-center justify-center text-2xl font-bold text-accent-400">
                  {selectedJob.company[0]}
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-text-primary">{selectedJob.title}</h1>
                  <p className="text-text-secondary">{selectedJob.company}</p>
                  <div className="flex items-center gap-3 mt-2 text-sm text-text-muted">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {selectedJob.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      {selectedJob.salary}
                    </span>
                  </div>
                </div>
              </div>

              <span className={`match-badge text-lg ${
                selectedJob.match >= 90 ? 'match-excellent' : selectedJob.match >= 80 ? 'match-good' : 'match-fair'
              }`}>
                {selectedJob.match}% match
              </span>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mb-8">
              <button className="btn-primary flex-1">
                Apply Now
              </button>
              <button className="btn-secondary">
                <Bookmark className="w-5 h-5" />
              </button>
              <button className="btn-secondary">
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>

            {/* Match Analysis */}
            <div className="glass-card p-6 mb-6">
              <h2 className="text-lg font-semibold text-text-primary mb-4">Match Analysis</h2>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-text-secondary">Skills Match</span>
                    <span className="text-success-400">85%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '85%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-text-secondary">Experience Match</span>
                    <span className="text-success-400">92%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '92%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-text-secondary">Location Preference</span>
                    <span className="text-success-400">100%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '100%' }} />
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-ocean-600">
                <h3 className="text-sm font-medium text-text-primary mb-2">Strengths</h3>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-success-500" />
                    Strong React and TypeScript experience
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-success-500" />
                    Backend experience with Node.js matches requirements
                  </li>
                </ul>
              </div>
            </div>

            {/* Skills Required */}
            <div className="glass-card p-6 mb-6">
              <h2 className="text-lg font-semibold text-text-primary mb-4">Required Skills</h2>
              <div className="flex flex-wrap gap-2">
                {selectedJob.skills.map((skill) => (
                  <span key={skill} className="badge badge-accent">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="glass-card p-6">
              <h2 className="text-lg font-semibold text-text-primary mb-4">Job Description</h2>
              <p className="text-text-secondary leading-relaxed">
                {selectedJob.description}
              </p>
              <p className="text-text-secondary leading-relaxed mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
