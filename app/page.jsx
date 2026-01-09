'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  TrendingUp,
  CheckCircle2,
  Clock,
  AlertCircle,
  ArrowRight,
  Zap,
  Database,
  Bell,
  Calendar
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Card from '../components/Card';

// Project status data
const projectStatus = {
  overall: 15, // percentage complete
  phase: 'Setup & Configuration',
  blockers: ['Your profile not configured', 'Database not connected'],
};

const stats = [
  { label: 'Job Sources', value: '6', icon: Briefcase, color: 'text-blue-400' },
  { label: 'AI Models Tracked', value: '17', icon: TrendingUp, color: 'text-purple-400' },
  { label: 'Tasks Done', value: '3/20', icon: CheckCircle2, color: 'text-green-400' },
  { label: 'Est. Monthly Cost', value: '$0', icon: Clock, color: 'text-yellow-400' },
];

const todoHighlights = [
  { task: 'Fill out your profile (CV, skills, preferences)', status: 'blocked', priority: 'high' },
  { task: 'Set up Supabase free database', status: 'pending', priority: 'high' },
  { task: 'Configure Discord webhook', status: 'pending', priority: 'medium' },
  { task: 'Run first test scrape', status: 'pending', priority: 'medium' },
  { task: 'Set up Windows Task Scheduler', status: 'pending', priority: 'low' },
];

const features = [
  {
    title: 'Job Intelligence',
    description: 'Scrapes 6 job boards every 4 hours, scores matches against your profile',
    icon: Briefcase,
    status: 'Ready (needs config)',
  },
  {
    title: 'Market Intelligence',
    description: 'Tracks AI model sentiment across Reddit, HN, YouTube, GitHub',
    icon: TrendingUp,
    status: 'Ready (needs config)',
  },
  {
    title: 'Discord Notifications',
    description: 'Real-time alerts for high-match jobs (70+ score)',
    icon: Bell,
    status: 'Needs webhook',
  },
  {
    title: 'Daily Reports',
    description: 'Morning summary of top jobs and AI model rankings',
    icon: Calendar,
    status: 'Needs webhook',
  },
];

export default function Dashboard() {
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
            <span className="text-white">Dashboard</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Project Dashboard
          </h1>
          <p className="text-gray-400">
            v0.0.1 - Job Intelligence & Market Intelligence System
          </p>
        </motion.div>

        {/* Alert Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-4 mb-8 flex items-center gap-4"
        >
          <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
            <AlertCircle className="text-amber-400" size={20} />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-amber-400">Action Required</h3>
            <p className="text-sm text-gray-400">
              Your profile is not configured. The scraper will find irrelevant jobs until you set it up.
            </p>
          </div>
          <a
            href="/profile"
            className="px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 rounded-lg font-medium text-sm transition-colors flex items-center gap-2"
          >
            Configure Profile
            <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={stat.label} delay={index * 0.1}>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${stat.color}`}>
                  <stat.icon size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Progress Section */}
          <div className="col-span-2">
            <Card delay={0.4}>
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Zap className="text-indigo-400" size={20} />
                Project Progress
              </h2>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Overall Completion</span>
                  <span className="text-sm font-semibold text-indigo-400">{projectStatus.overall}%</span>
                </div>
                <div className="h-3 bg-[#262626] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${projectStatus.overall}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                  />
                </div>
              </div>

              {/* Phase */}
              <div className="p-4 bg-[#1a1a1a] rounded-lg mb-4">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Current Phase</p>
                <p className="text-white font-medium">{projectStatus.phase}</p>
              </div>

              {/* Blockers */}
              {projectStatus.blockers.length > 0 && (
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Blockers</p>
                  <ul className="space-y-2">
                    {projectStatus.blockers.map((blocker, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="text-red-400">{blocker}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>

            {/* Features */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card key={feature.title} delay={0.5 + index * 0.1} className="relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full -translate-y-16 translate-x-16" />
                  <feature.icon className="text-indigo-400 mb-3" size={24} />
                  <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{feature.description}</p>
                  <span className="text-xs px-2 py-1 rounded bg-white/5 text-gray-500">
                    {feature.status}
                  </span>
                </Card>
              ))}
            </div>
          </div>

          {/* TODO Highlights */}
          <Card delay={0.6} className="h-fit">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="text-green-400" size={20} />
              Next Steps
            </h2>

            <ul className="space-y-3">
              {todoHighlights.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-[#1a1a1a] border border-[#262626]"
                >
                  <span
                    className={`w-2 h-2 rounded-full mt-1.5 ${
                      item.status === 'blocked'
                        ? 'bg-red-500'
                        : item.priority === 'high'
                        ? 'bg-yellow-500'
                        : 'bg-gray-500'
                    }`}
                  />
                  <div className="flex-1">
                    <p className="text-sm text-gray-300">{item.task}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className={`text-xs px-2 py-0.5 rounded ${
                          item.status === 'blocked'
                            ? 'bg-red-500/20 text-red-400'
                            : 'bg-gray-500/20 text-gray-400'
                        }`}
                      >
                        {item.status}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded ${
                          item.priority === 'high'
                            ? 'bg-yellow-500/20 text-yellow-400'
                            : item.priority === 'medium'
                            ? 'bg-blue-500/20 text-blue-400'
                            : 'bg-gray-500/20 text-gray-400'
                        }`}
                      >
                        {item.priority}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="/todo"
              className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 rounded-lg font-medium text-sm transition-colors"
            >
              View Full Roadmap
              <ArrowRight size={16} />
            </a>
          </Card>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 pt-8 border-t border-[#262626] text-center text-sm text-gray-500"
        >
          <p>Outreach v0.0.1 - Run locally, save money, get jobs</p>
        </motion.div>
      </main>
    </div>
  );
}
