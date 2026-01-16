'use client';

import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Circle,
  AlertCircle,
  Clock,
  ArrowRight,
  Zap,
  Target,
  Calendar,
  Filter,
  Rocket,
  ExternalLink
} from 'lucide-react';
import { useState } from 'react';
import Navigation from '../../components/Navigation';
import Card from '../../components/Card';

const phases = [
  {
    id: 'infrastructure',
    name: 'Infrastructure (COMPLETED)',
    progress: 100,
    tasks: [
      { id: 1, task: 'Set up monorepo structure (apps/api, apps/web, apps/extension)', status: 'done', priority: 'high' },
      { id: 2, task: 'Deploy API to Railway (outreachapi.hekax.com)', status: 'done', priority: 'high' },
      { id: 3, task: 'Deploy Frontend to Vercel (outreach.hekax.com)', status: 'done', priority: 'high' },
      { id: 4, task: 'Set up Supabase PostgreSQL database', status: 'done', priority: 'high' },
      { id: 5, task: 'Configure cron-job.org for scheduled ingestion (every 4 hours)', status: 'done', priority: 'high' },
      { id: 6, task: 'Set up Discord webhook notifications', status: 'done', priority: 'medium' },
      { id: 7, task: 'Deploy docs site to Railway', status: 'done', priority: 'medium' },
    ],
  },
  {
    id: 'job-pipeline',
    name: 'Job Ingestion Pipeline (COMPLETED)',
    progress: 100,
    tasks: [
      { id: 8, task: 'Implement 7 FREE job sources (RemoteOK, Himalayas, Jobicy, Arbeitnow, Remotive, WeWorkRemotely, YCombinator)', status: 'done', priority: 'high' },
      { id: 9, task: 'Integrate Adzuna API (15 countries)', status: 'done', priority: 'high' },
      { id: 10, task: 'Integrate Jooble API (global)', status: 'done', priority: 'high' },
      { id: 11, task: 'Integrate RapidAPI sources (JSearch, LinkedIn, Glassdoor)', status: 'done', priority: 'medium' },
      { id: 12, task: 'Job scoring algorithm (0-100 based on profile match)', status: 'done', priority: 'high' },
      { id: 13, task: 'Job deduplication by source + external_id', status: 'done', priority: 'high' },
      { id: 14, task: 'Profile-based matching with limits per plan tier', status: 'done', priority: 'high' },
    ],
  },
  {
    id: 'auth-billing',
    name: 'Authentication & Billing (COMPLETED)',
    progress: 100,
    tasks: [
      { id: 15, task: 'Supabase JWT authentication', status: 'done', priority: 'high' },
      { id: 16, task: 'Email/password signup + OAuth (Google, LinkedIn)', status: 'done', priority: 'high' },
      { id: 17, task: 'Stripe integration (checkout, webhooks)', status: 'done', priority: 'high' },
      { id: 18, task: 'Three pricing tiers: Signal (free), Precision ($39), Executive ($89)', status: 'done', priority: 'high' },
      { id: 19, task: 'Plan-based match limits (30/150/300)', status: 'done', priority: 'medium' },
    ],
  },
  {
    id: 'web-app',
    name: 'Web App Features (IN PROGRESS)',
    progress: 70,
    tasks: [
      { id: 20, task: 'Dashboard with job match stats', status: 'done', priority: 'high' },
      { id: 21, task: 'Jobs page with search/filters', status: 'done', priority: 'high' },
      { id: 22, task: 'Applications Kanban board', status: 'done', priority: 'high' },
      { id: 23, task: 'Profile page with skills and preferences', status: 'done', priority: 'high' },
      { id: 24, task: 'Settings page', status: 'done', priority: 'medium' },
      { id: 25, task: 'Cover Letter Generator (AI)', status: 'in-progress', priority: 'high' },
      { id: 26, task: 'Resume Optimizer (AI)', status: 'in-progress', priority: 'high' },
      { id: 27, task: 'Interview Prep (AI)', status: 'pending', priority: 'medium' },
      { id: 28, task: 'Auto-Apply feature', status: 'pending', priority: 'high' },
    ],
  },
  {
    id: 'extension',
    name: 'Chrome Extension (IN PROGRESS)',
    progress: 40,
    tasks: [
      { id: 29, task: 'Manifest V3 structure', status: 'done', priority: 'high' },
      { id: 30, task: 'Job detection for LinkedIn, Indeed, Glassdoor', status: 'done', priority: 'high' },
      { id: 31, task: 'Quick apply popup UI', status: 'in-progress', priority: 'high' },
      { id: 32, task: 'Auto-fill resume/cover letter', status: 'pending', priority: 'high' },
      { id: 33, task: 'One-click application tracking', status: 'pending', priority: 'medium' },
      { id: 34, task: 'Chrome Web Store publishing', status: 'pending', priority: 'low' },
    ],
  },
  {
    id: 'polish',
    name: 'Polish & Production (PENDING)',
    progress: 20,
    tasks: [
      { id: 35, task: 'Full UX audit - ensure all buttons work', status: 'pending', priority: 'critical' },
      { id: 36, task: 'Error handling and loading states', status: 'in-progress', priority: 'high' },
      { id: 37, task: 'Mobile responsive optimization', status: 'pending', priority: 'medium' },
      { id: 38, task: 'Analytics integration', status: 'pending', priority: 'low' },
      { id: 39, task: 'End-to-end testing', status: 'pending', priority: 'medium' },
    ],
  },
];

const statusConfig = {
  done: { icon: CheckCircle2, color: 'text-green-400', bg: 'bg-green-500/20' },
  'in-progress': { icon: Clock, color: 'text-blue-400', bg: 'bg-blue-500/20' },
  pending: { icon: Circle, color: 'text-gray-500', bg: 'bg-gray-500/20' },
  blocked: { icon: AlertCircle, color: 'text-red-400', bg: 'bg-red-500/20' },
};

const priorityConfig = {
  critical: { color: 'text-red-400', bg: 'bg-red-500/20', label: 'Critical' },
  high: { color: 'text-yellow-400', bg: 'bg-yellow-500/20', label: 'High' },
  medium: { color: 'text-blue-400', bg: 'bg-blue-500/20', label: 'Medium' },
  low: { color: 'text-gray-400', bg: 'bg-gray-500/20', label: 'Low' },
};

export default function TodoPage() {
  const [filter, setFilter] = useState('all');

  const totalTasks = phases.reduce((acc, phase) => acc + phase.tasks.length, 0);
  const completedTasks = phases.reduce(
    (acc, phase) => acc + phase.tasks.filter((t) => t.status === 'done').length,
    0
  );
  const inProgressTasks = phases.reduce(
    (acc, phase) => acc + phase.tasks.filter((t) => t.status === 'in-progress').length,
    0
  );

  const filteredPhases = phases.map((phase) => ({
    ...phase,
    tasks: phase.tasks.filter((task) => {
      if (filter === 'all') return true;
      return task.status === filter;
    }),
  }));

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
            <span className="text-white">Roadmap</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Project Roadmap</h1>
          <p className="text-gray-400">
            HEKAX Outreach development status as of January 16, 2026
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <Card delay={0.1}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                <Target className="text-indigo-400" size={20} />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{totalTasks}</p>
                <p className="text-sm text-gray-500">Total Tasks</p>
              </div>
            </div>
          </Card>

          <Card delay={0.2}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                <CheckCircle2 className="text-green-400" size={20} />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{completedTasks}</p>
                <p className="text-sm text-gray-500">Completed</p>
              </div>
            </div>
          </Card>

          <Card delay={0.3}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <Clock className="text-blue-400" size={20} />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{inProgressTasks}</p>
                <p className="text-sm text-gray-500">In Progress</p>
              </div>
            </div>
          </Card>

          <Card delay={0.4}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <Zap className="text-purple-400" size={20} />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  {Math.round((completedTasks / totalTasks) * 100)}%
                </p>
                <p className="text-sm text-gray-500">Progress</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Live Links */}
        <Card delay={0.45} className="mb-6">
          <h3 className="text-sm font-medium text-gray-400 mb-3 flex items-center gap-2">
            <Rocket size={16} /> Live Deployments
          </h3>
          <div className="flex flex-wrap gap-3">
            <a href="https://outreach.hekax.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 bg-green-500/20 text-green-400 rounded-lg text-sm hover:bg-green-500/30 transition-colors">
              <ExternalLink size={14} /> Web App
            </a>
            <a href="https://outreachapi.hekax.com/health" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 bg-indigo-500/20 text-indigo-400 rounded-lg text-sm hover:bg-indigo-500/30 transition-colors">
              <ExternalLink size={14} /> API Health
            </a>
            <a href="https://outreach-docs-production.up.railway.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 bg-purple-500/20 text-purple-400 rounded-lg text-sm hover:bg-purple-500/30 transition-colors">
              <ExternalLink size={14} /> Docs
            </a>
          </div>
        </Card>

        {/* Filter */}
        <Card delay={0.5} className="mb-6">
          <div className="flex items-center gap-4">
            <Filter size={18} className="text-gray-400" />
            <span className="text-sm text-gray-400">Filter:</span>
            {['all', 'pending', 'in-progress', 'done'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  filter === f
                    ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>
        </Card>

        {/* Phases */}
        <div className="space-y-6">
          {filteredPhases.map((phase, phaseIndex) => (
            <Card key={phase.id} delay={0.6 + phaseIndex * 0.1}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                    phase.progress === 100 ? 'bg-green-500/20 text-green-400' :
                    phase.progress > 0 ? 'bg-blue-500/20 text-blue-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {phase.progress === 100 ? '✓' : phaseIndex + 1}
                  </div>
                  <h2 className="text-lg font-semibold text-white">{phase.name}</h2>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-400">
                    {phase.tasks.filter((t) => t.status === 'done').length}/{phase.tasks.length}
                  </span>
                  <div className="w-24 h-2 bg-[#262626] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${phase.progress}%` }}
                      className={`h-full ${
                        phase.progress === 100 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                        'bg-gradient-to-r from-indigo-500 to-purple-500'
                      }`}
                    />
                  </div>
                </div>
              </div>

              {phase.tasks.length > 0 ? (
                <ul className="space-y-2">
                  {phase.tasks.map((task, taskIndex) => {
                    const StatusIcon = statusConfig[task.status].icon;
                    return (
                      <motion.li
                        key={task.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + taskIndex * 0.05 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-[#1a1a1a] border border-[#262626]"
                      >
                        <StatusIcon
                          size={18}
                          className={statusConfig[task.status].color}
                        />
                        <span
                          className={`flex-1 ${
                            task.status === 'done'
                              ? 'text-gray-500 line-through'
                              : 'text-gray-300'
                          }`}
                        >
                          {task.task}
                        </span>
                        {task.blocker && (
                          <span className="text-xs px-2 py-1 rounded bg-red-500/20 text-red-400">
                            {task.blocker}
                          </span>
                        )}
                        <span
                          className={`text-xs px-2 py-1 rounded ${priorityConfig[task.priority].bg} ${priorityConfig[task.priority].color}`}
                        >
                          {priorityConfig[task.priority].label}
                        </span>
                      </motion.li>
                    );
                  })}
                </ul>
              ) : (
                <p className="text-gray-500 text-sm py-4 text-center">
                  No tasks match the current filter
                </p>
              )}
            </Card>
          ))}
        </div>

        {/* Next Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8"
        >
          <Card className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-indigo-500/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                <ArrowRight className="text-indigo-400" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">Next Priority</h3>
                <p className="text-sm text-gray-400">
                  Complete UX audit to ensure all buttons and features work correctly before production launch
                </p>
              </div>
              <a
                href="https://outreach.hekax.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium text-sm transition-colors"
              >
                Open Web App
              </a>
            </div>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
