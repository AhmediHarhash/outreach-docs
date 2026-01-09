'use client';

import { motion } from 'framer-motion';
import {
  CheckSquare,
  Square,
  Database,
  Key,
  Terminal,
  Bell,
  Clock,
  Play,
  AlertCircle,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { useState } from 'react';
import Navigation from '../../components/Navigation';
import Card from '../../components/Card';

const setupSteps = [
  {
    id: 'profile',
    title: 'Configure Your Profile',
    description: 'Tell the scraper what jobs to look for',
    status: 'required',
    steps: [
      'Go to the Profile page',
      'Fill in your job titles, skills, and preferences',
      'Set your target countries and salary expectations',
      'Save your configuration',
    ],
    link: '/profile',
    linkText: 'Go to Profile',
  },
  {
    id: 'supabase',
    title: 'Set Up Supabase Database',
    description: 'Free PostgreSQL database in the cloud',
    status: 'required',
    steps: [
      'Go to supabase.com and create free account',
      'Create a new project (any region)',
      'Go to Settings → Database → Connection String',
      'Copy the URI (starts with postgres://)',
      'Add to your .env file as DATABASE_URL',
    ],
    commands: [
      'DATABASE_URL="postgres://postgres:[PASSWORD]@db.[PROJECT].supabase.co:5432/postgres"',
    ],
    externalLink: 'https://supabase.com',
  },
  {
    id: 'discord',
    title: 'Create Discord Webhook',
    description: 'Get notifications when high-match jobs are found',
    status: 'required',
    steps: [
      'Open Discord and go to your server',
      'Edit a channel → Integrations → Webhooks',
      'Click "New Webhook" and copy the URL',
      'Add to your .env file as DISCORD_WEBHOOK_URL',
    ],
    commands: [
      'DISCORD_WEBHOOK_URL="https://discord.com/api/webhooks/..."',
    ],
  },
  {
    id: 'install',
    title: 'Install Dependencies',
    description: 'Download required packages',
    status: 'required',
    steps: [
      'Open terminal in the outreach folder',
      'Run npm install',
      'Wait for packages to download',
    ],
    commands: [
      'cd C:\\Users\\PC\\Desktop\\side-projects\\outreach',
      'npm install',
    ],
  },
  {
    id: 'prisma',
    title: 'Initialize Database',
    description: 'Create the database tables',
    status: 'required',
    steps: [
      'Make sure DATABASE_URL is set in .env',
      'Run prisma db push to create tables',
    ],
    commands: [
      'npx prisma db push',
    ],
  },
  {
    id: 'test',
    title: 'Run Test Scrape',
    description: 'Verify everything works',
    status: 'required',
    steps: [
      'Run the test script',
      'Check for errors in output',
      'Verify jobs appear in database',
    ],
    commands: [
      'npm run test:jobs',
      'npm run test:market',
    ],
  },
  {
    id: 'scheduler',
    title: 'Set Up Windows Task Scheduler',
    description: 'Run automatically every 4 hours',
    status: 'optional',
    steps: [
      'Open Task Scheduler (search in Windows)',
      'Click "Create Basic Task"',
      'Name it "Outreach Job Scraper"',
      'Trigger: Daily, repeat every 4 hours',
      'Action: Start a program',
      'Program: node',
      'Arguments: src/index.js',
      'Start in: C:\\Users\\PC\\Desktop\\side-projects\\outreach',
    ],
  },
];

export default function SetupPage() {
  const [completedSteps, setCompletedSteps] = useState([]);
  const [copiedCommand, setCopiedCommand] = useState(null);

  const toggleStep = (stepId) => {
    setCompletedSteps((prev) =>
      prev.includes(stepId)
        ? prev.filter((id) => id !== stepId)
        : [...prev, stepId]
    );
  };

  const copyCommand = (command, index) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(index);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const requiredSteps = setupSteps.filter((s) => s.status === 'required');
  const optionalSteps = setupSteps.filter((s) => s.status === 'optional');
  const progress = Math.round(
    (completedSteps.filter((id) => requiredSteps.find((s) => s.id === id)).length /
      requiredSteps.length) *
      100
  );

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
            <span className="text-white">Setup Guide</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Setup Guide</h1>
          <p className="text-gray-400">
            Step-by-step guide to get Outreach running on your PC
          </p>
        </motion.div>

        {/* Progress */}
        <Card delay={0.1} className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">Setup Progress</h2>
            <span className="text-indigo-400 font-bold">{progress}%</span>
          </div>
          <div className="h-3 bg-[#262626] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            {completedSteps.length} of {requiredSteps.length} required steps completed
          </p>
        </Card>

        {/* Requirements Alert */}
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
              <h3 className="font-semibold text-blue-400">Prerequisites</h3>
              <ul className="mt-2 space-y-1 text-sm text-gray-400">
                <li>• Node.js 18+ installed</li>
                <li>• npm (comes with Node.js)</li>
                <li>• Discord account (for notifications)</li>
                <li>• 10 minutes of setup time</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Required Steps */}
        <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <CheckSquare className="text-green-400" size={20} />
          Required Steps
        </h2>

        <div className="space-y-4 mb-8">
          {requiredSteps.map((step, index) => (
            <Card key={step.id} delay={0.2 + index * 0.05}>
              <div className="flex items-start gap-4">
                <button
                  onClick={() => toggleStep(step.id)}
                  className="flex-shrink-0 mt-1"
                >
                  {completedSteps.includes(step.id) ? (
                    <CheckSquare className="text-green-400" size={24} />
                  ) : (
                    <Square className="text-gray-600" size={24} />
                  )}
                </button>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm font-bold">
                      {index + 1}
                    </span>
                    <h3 className={`font-semibold ${
                      completedSteps.includes(step.id) ? 'text-gray-500 line-through' : 'text-white'
                    }`}>
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-400 mb-4">{step.description}</p>

                  <ol className="space-y-2 mb-4">
                    {step.steps.map((substep, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-gray-600">{i + 1}.</span>
                        {substep}
                      </li>
                    ))}
                  </ol>

                  {step.commands && (
                    <div className="space-y-2">
                      {step.commands.map((command, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 p-3 bg-[#1a1a1a] rounded-lg border border-[#262626] font-mono text-sm"
                        >
                          <Terminal size={14} className="text-gray-500 flex-shrink-0" />
                          <code className="flex-1 text-indigo-400 overflow-x-auto">
                            {command}
                          </code>
                          <button
                            onClick={() => copyCommand(command, `${step.id}-${i}`)}
                            className="text-gray-500 hover:text-white transition-colors flex-shrink-0"
                          >
                            {copiedCommand === `${step.id}-${i}` ? (
                              <Check size={16} className="text-green-400" />
                            ) : (
                              <Copy size={16} />
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {step.link && (
                    <a
                      href={step.link}
                      className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-400 rounded-lg text-sm font-medium transition-colors"
                    >
                      {step.linkText}
                    </a>
                  )}

                  {step.externalLink && (
                    <a
                      href={step.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-400 rounded-lg text-sm font-medium transition-colors"
                    >
                      Open {step.externalLink.replace('https://', '')}
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Optional Steps */}
        <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Clock className="text-yellow-400" size={20} />
          Optional Steps
        </h2>

        <div className="space-y-4">
          {optionalSteps.map((step, index) => (
            <Card key={step.id} delay={0.5 + index * 0.05}>
              <div className="flex items-start gap-4">
                <button
                  onClick={() => toggleStep(step.id)}
                  className="flex-shrink-0 mt-1"
                >
                  {completedSteps.includes(step.id) ? (
                    <CheckSquare className="text-green-400" size={24} />
                  ) : (
                    <Square className="text-gray-600" size={24} />
                  )}
                </button>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs rounded">
                      Optional
                    </span>
                    <h3 className={`font-semibold ${
                      completedSteps.includes(step.id) ? 'text-gray-500 line-through' : 'text-white'
                    }`}>
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-400 mb-4">{step.description}</p>

                  <ol className="space-y-2">
                    {step.steps.map((substep, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-gray-600">{i + 1}.</span>
                        {substep}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Ready Banner */}
        {progress === 100 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <Play className="text-green-400" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-green-400">Ready to Go!</h3>
                <p className="text-sm text-gray-400">
                  All required steps are complete. Run <code className="text-indigo-400">npm start</code> to begin scraping.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
