'use client';

import { TrendingUp, Briefcase, CheckCircle, Clock, ArrowUpRight, Sparkles } from 'lucide-react';

// Mock data - will be replaced with API calls
const stats = [
  { label: 'Match Score', value: '87%', change: '+5%', trend: 'up', icon: TrendingUp },
  { label: 'Jobs Found', value: '24', change: '+8', trend: 'up', icon: Briefcase },
  { label: 'Applications', value: '12', change: '+3', trend: 'up', icon: CheckCircle },
  { label: 'Interviews', value: '4', change: '+1', trend: 'up', icon: Clock },
];

const topJobs = [
  { id: 1, title: 'Senior Software Engineer', company: 'TechCorp', match: 94, location: 'Remote' },
  { id: 2, title: 'Full Stack Developer', company: 'StartupXYZ', match: 89, location: 'London' },
  { id: 3, title: 'Backend Engineer', company: 'DataFlow', match: 85, location: 'Remote' },
];

const recentActivity = [
  { id: 1, type: 'application', message: 'Applied to Senior Developer at TechCorp', time: '2 hours ago' },
  { id: 2, type: 'match', message: 'New 94% match found: Full Stack at StartupXYZ', time: '5 hours ago' },
  { id: 3, type: 'interview', message: 'Interview scheduled with DataFlow', time: '1 day ago' },
];

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Welcome back!</h1>
          <p className="text-text-secondary mt-1">Here's what's happening with your job search</p>
        </div>
        <button className="btn-primary">
          <Sparkles className="w-4 h-4" />
          Find New Jobs
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-lg bg-accent-500/10">
                <stat.icon className="w-5 h-5 text-accent-400" />
              </div>
              <span className={`stat-change ${stat.trend === 'up' ? 'stat-change-up' : 'stat-change-down'}`}>
                {stat.change}
              </span>
            </div>
            <div className="mt-4">
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Job Matches */}
        <div className="lg:col-span-2 glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-text-primary">Top Job Matches</h2>
            <a href="/jobs" className="text-sm text-accent-400 hover:text-accent-300 flex items-center gap-1">
              View all <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="space-y-4">
            {topJobs.map((job) => (
              <div key={job.id} className="card p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-ocean-700 flex items-center justify-center text-lg font-bold text-accent-400">
                    {job.company[0]}
                  </div>
                  <div>
                    <h3 className="font-medium text-text-primary">{job.title}</h3>
                    <p className="text-sm text-text-secondary">{job.company} • {job.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`match-badge ${job.match >= 90 ? 'match-excellent' : job.match >= 80 ? 'match-good' : 'match-fair'}`}>
                    {job.match}% match
                  </span>
                  <button className="btn-ghost text-sm">View</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="glass-card p-6">
          <h2 className="text-lg font-semibold text-text-primary mb-6">Recent Activity</h2>

          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex gap-3">
                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                  activity.type === 'application' ? 'bg-accent-500' :
                  activity.type === 'match' ? 'bg-success-500' :
                  'bg-warning-500'
                }`} />
                <div>
                  <p className="text-sm text-text-primary">{activity.message}</p>
                  <p className="text-xs text-text-muted mt-0.5">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Pipeline Preview */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-text-primary">Application Pipeline</h2>
          <a href="/applications" className="text-sm text-accent-400 hover:text-accent-300 flex items-center gap-1">
            View Kanban <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {[
            { stage: 'Saved', count: 8, color: 'bg-ocean-600' },
            { stage: 'Applied', count: 12, color: 'bg-accent-500/50' },
            { stage: 'Screening', count: 3, color: 'bg-warning-500/50' },
            { stage: 'Interview', count: 4, color: 'bg-success-500/50' },
            { stage: 'Offer', count: 1, color: 'bg-success-500' },
          ].map((stage) => (
            <div key={stage.stage} className="text-center">
              <div className={`h-2 ${stage.color} rounded-full mb-2`} />
              <p className="text-2xl font-bold text-text-primary">{stage.count}</p>
              <p className="text-xs text-text-muted">{stage.stage}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
