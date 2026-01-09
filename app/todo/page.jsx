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
  Filter
} from 'lucide-react';
import { useState } from 'react';
import Navigation from '../../components/Navigation';
import Card from '../../components/Card';

const phases = [
  {
    id: 'setup',
    name: 'Setup & Configuration',
    progress: 15,
    tasks: [
      { id: 1, task: 'Create project structure', status: 'done', priority: 'high' },
      { id: 2, task: 'Set up Prisma schema', status: 'done', priority: 'high' },
      { id: 3, task: 'Create job scraper worker', status: 'done', priority: 'high' },
      { id: 4, task: 'Create market scanner worker', status: 'done', priority: 'high' },
      { id: 5, task: 'Fill out your profile (CV, skills, preferences)', status: 'blocked', priority: 'critical', blocker: 'Waiting for your input' },
      { id: 6, task: 'Set up Supabase free database', status: 'pending', priority: 'high' },
      { id: 7, task: 'Configure Discord webhook', status: 'pending', priority: 'high' },
      { id: 8, task: 'Run npm install', status: 'pending', priority: 'medium' },
      { id: 9, task: 'Run prisma db push', status: 'pending', priority: 'medium' },
      { id: 10, task: 'Test first scrape', status: 'pending', priority: 'medium' },
    ],
  },
  {
    id: 'automation',
    name: 'Automation & Scheduling',
    progress: 0,
    tasks: [
      { id: 11, task: 'Set up Windows Task Scheduler', status: 'pending', priority: 'high' },
      { id: 12, task: 'Configure cron schedules', status: 'pending', priority: 'medium' },
      { id: 13, task: 'Test 4-hour job scraping cycle', status: 'pending', priority: 'medium' },
      { id: 14, task: 'Test daily report generation', status: 'pending', priority: 'medium' },
    ],
  },
  {
    id: 'enhancements',
    name: 'Enhancements',
    progress: 0,
    tasks: [
      { id: 15, task: 'Add email notifications option', status: 'pending', priority: 'low' },
      { id: 16, task: 'Create job application tracker', status: 'pending', priority: 'low' },
      { id: 17, task: 'Add LinkedIn job source', status: 'pending', priority: 'low' },
      { id: 18, task: 'Create web dashboard for viewing jobs', status: 'pending', priority: 'low' },
      { id: 19, task: 'Add cover letter generator', status: 'pending', priority: 'low' },
      { id: 20, task: 'Integrate with job application APIs', status: 'pending', priority: 'low' },
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
  const blockedTasks = phases.reduce(
    (acc, phase) => acc + phase.tasks.filter((t) => t.status === 'blocked').length,
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
            <span className="text-white">TODO & Roadmap</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Project Roadmap</h1>
          <p className="text-gray-400">
            Track progress and see what needs to be done
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
              <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                <AlertCircle className="text-red-400" size={20} />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{blockedTasks}</p>
                <p className="text-sm text-gray-500">Blocked</p>
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

        {/* Filter */}
        <Card delay={0.5} className="mb-6">
          <div className="flex items-center gap-4">
            <Filter size={18} className="text-gray-400" />
            <span className="text-sm text-gray-400">Filter:</span>
            {['all', 'pending', 'in-progress', 'done', 'blocked'].map((f) => (
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
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-sm">
                    {phaseIndex + 1}
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
                      animate={{
                        width: `${
                          (phase.tasks.filter((t) => t.status === 'done').length /
                            phase.tasks.length) *
                          100
                        }%`,
                      }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
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
                <h3 className="font-semibold text-white">Next Step</h3>
                <p className="text-sm text-gray-400">
                  Fill out your profile so the job scraper knows what to look for
                </p>
              </div>
              <a
                href="/profile"
                className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium text-sm transition-colors"
              >
                Configure Profile
              </a>
            </div>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
