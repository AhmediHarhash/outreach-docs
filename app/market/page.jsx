'use client';

import { motion } from 'framer-motion';
import {
  TrendingUp,
  TrendingDown,
  MessageSquare,
  Github,
  Youtube,
  AlertCircle,
  RefreshCw,
  ArrowUp,
  ArrowDown,
  Minus,
  ExternalLink,
  Clock,
  BarChart3
} from 'lucide-react';
import { useState } from 'react';
import Navigation from '../../components/Navigation';
import Card from '../../components/Card';

// Demo AI models data
const aiModels = [
  {
    rank: 1,
    name: 'Claude 3.5 Sonnet',
    provider: 'Anthropic',
    overallScore: 92,
    sentiment: 'very_positive',
    momentum: 'up',
    mentions: 1234,
    redditScore: 89,
    hnScore: 94,
    youtubeScore: 88,
    githubStars: '25k',
    change: '+3',
  },
  {
    rank: 2,
    name: 'GPT-4o',
    provider: 'OpenAI',
    overallScore: 90,
    sentiment: 'positive',
    momentum: 'stable',
    mentions: 2567,
    redditScore: 85,
    hnScore: 92,
    youtubeScore: 91,
    githubStars: '180k',
    change: '0',
  },
  {
    rank: 3,
    name: 'Gemini 1.5 Pro',
    provider: 'Google',
    overallScore: 85,
    sentiment: 'positive',
    momentum: 'up',
    mentions: 892,
    redditScore: 78,
    hnScore: 88,
    youtubeScore: 85,
    githubStars: '32k',
    change: '+2',
  },
  {
    rank: 4,
    name: 'Llama 3.1 405B',
    provider: 'Meta',
    overallScore: 82,
    sentiment: 'positive',
    momentum: 'up',
    mentions: 756,
    redditScore: 82,
    hnScore: 80,
    youtubeScore: 78,
    githubStars: '85k',
    change: '+5',
  },
  {
    rank: 5,
    name: 'Mistral Large 2',
    provider: 'Mistral AI',
    overallScore: 78,
    sentiment: 'positive',
    momentum: 'up',
    mentions: 423,
    redditScore: 75,
    hnScore: 82,
    youtubeScore: 72,
    githubStars: '28k',
    change: '+1',
  },
  {
    rank: 6,
    name: 'Grok-2',
    provider: 'xAI',
    overallScore: 72,
    sentiment: 'neutral',
    momentum: 'down',
    mentions: 345,
    redditScore: 70,
    hnScore: 68,
    youtubeScore: 75,
    githubStars: '5k',
    change: '-2',
  },
];

const taskRankings = [
  { task: 'Code Generation', top3: ['Claude 3.5 Sonnet', 'GPT-4o', 'Gemini 1.5 Pro'] },
  { task: 'Creative Writing', top3: ['GPT-4o', 'Claude 3.5 Sonnet', 'Gemini 1.5 Pro'] },
  { task: 'Math & Reasoning', top3: ['GPT-4o', 'Claude 3.5 Sonnet', 'Llama 3.1 405B'] },
  { task: 'Cost Efficiency', top3: ['Llama 3.1 405B', 'Mistral Large 2', 'Claude 3.5 Sonnet'] },
  { task: 'Speed', top3: ['Claude 3.5 Sonnet', 'Gemini 1.5 Pro', 'GPT-4o'] },
  { task: 'Long Context', top3: ['Gemini 1.5 Pro', 'Claude 3.5 Sonnet', 'GPT-4o'] },
];

const dataSources = [
  { name: 'Reddit', icon: MessageSquare, status: 'active', lastScan: '2 hours ago' },
  { name: 'Hacker News', icon: MessageSquare, status: 'active', lastScan: '2 hours ago' },
  { name: 'YouTube', icon: Youtube, status: 'active', lastScan: '2 hours ago' },
  { name: 'GitHub', icon: Github, status: 'active', lastScan: '2 hours ago' },
];

const getSentimentColor = (sentiment) => {
  if (sentiment === 'very_positive') return 'text-green-400';
  if (sentiment === 'positive') return 'text-emerald-400';
  if (sentiment === 'neutral') return 'text-gray-400';
  return 'text-red-400';
};

const getMomentumIcon = (momentum) => {
  if (momentum === 'up') return <ArrowUp className="text-green-400" size={16} />;
  if (momentum === 'down') return <ArrowDown className="text-red-400" size={16} />;
  return <Minus className="text-gray-400" size={16} />;
};

export default function MarketPage() {
  const [selectedModel, setSelectedModel] = useState(null);

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
            <span className="text-white">Market Intelligence</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Market Intelligence</h1>
          <p className="text-gray-400">
            AI model rankings based on sentiment analysis across Reddit, HN, YouTube, and GitHub
          </p>
        </motion.div>

        {/* Demo Alert */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-4 mb-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="text-purple-400" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-purple-400">Demo Data</h3>
              <p className="text-sm text-gray-400 mt-1">
                These are example rankings to show how the interface will look.
                Run <code className="text-indigo-400">npm start</code> to begin collecting real market data.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <Card delay={0.1}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                <BarChart3 className="text-indigo-400" size={20} />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">17</p>
                <p className="text-sm text-gray-500">Models Tracked</p>
              </div>
            </div>
          </Card>

          <Card delay={0.2}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                <TrendingUp className="text-green-400" size={20} />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">4</p>
                <p className="text-sm text-gray-500">Trending Up</p>
              </div>
            </div>
          </Card>

          <Card delay={0.3}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <MessageSquare className="text-purple-400" size={20} />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">6.2k</p>
                <p className="text-sm text-gray-500">Mentions Today</p>
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
                <p className="text-sm text-gray-500">Last Scan</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Rankings Table */}
          <div className="col-span-2">
            <Card delay={0.5}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                  <TrendingUp className="text-green-400" size={20} />
                  AI Model Rankings
                </h2>
                <span className="text-sm text-gray-500">Updated 2 hours ago</span>
              </div>

              <div className="overflow-hidden rounded-lg border border-[#262626]">
                <table className="w-full">
                  <thead className="bg-[#1a1a1a]">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">#</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Model</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Score</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Sentiment</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Trend</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Mentions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#262626]">
                    {aiModels.map((model) => (
                      <motion.tr
                        key={model.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-[#141414] hover:bg-[#1a1a1a] cursor-pointer transition-colors"
                        onClick={() => setSelectedModel(model)}
                      >
                        <td className="px-4 py-3">
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                            model.rank === 1 ? 'bg-yellow-500/20 text-yellow-400' :
                            model.rank === 2 ? 'bg-gray-400/20 text-gray-300' :
                            model.rank === 3 ? 'bg-orange-500/20 text-orange-400' :
                            'bg-[#262626] text-gray-500'
                          }`}>
                            {model.rank}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div>
                            <p className="font-medium text-white">{model.name}</p>
                            <p className="text-xs text-gray-500">{model.provider}</p>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className="font-bold text-indigo-400">{model.overallScore}</span>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`text-sm ${getSentimentColor(model.sentiment)}`}>
                            {model.sentiment.replace('_', ' ')}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1">
                            {getMomentumIcon(model.momentum)}
                            <span className={`text-sm ${
                              model.change.startsWith('+') ? 'text-green-400' :
                              model.change.startsWith('-') ? 'text-red-400' :
                              'text-gray-400'
                            }`}>
                              {model.change}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-400">
                          {model.mentions.toLocaleString()}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Task Rankings */}
            <Card delay={0.7} className="mt-6">
              <h2 className="text-lg font-semibold text-white mb-4">Best Models by Task</h2>
              <div className="grid grid-cols-2 gap-4">
                {taskRankings.map((task, index) => (
                  <motion.div
                    key={task.task}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.05 }}
                    className="p-4 bg-[#1a1a1a] rounded-lg border border-[#262626]"
                  >
                    <h4 className="font-medium text-white mb-2">{task.task}</h4>
                    <ol className="space-y-1">
                      {task.top3.map((model, i) => (
                        <li key={model} className="flex items-center gap-2 text-sm">
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                            i === 0 ? 'bg-yellow-500/20 text-yellow-400' :
                            i === 1 ? 'bg-gray-400/20 text-gray-300' :
                            'bg-orange-500/20 text-orange-400'
                          }`}>
                            {i + 1}
                          </span>
                          <span className="text-gray-400">{model}</span>
                        </li>
                      ))}
                    </ol>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div>
            {/* Data Sources */}
            <Card delay={0.6}>
              <h2 className="text-lg font-semibold text-white mb-4">Data Sources</h2>
              <div className="space-y-3">
                {dataSources.map((source) => (
                  <div
                    key={source.name}
                    className="flex items-center justify-between p-3 bg-[#1a1a1a] rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <source.icon className="text-indigo-400" size={18} />
                      <span className="text-white">{source.name}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs px-2 py-0.5 rounded bg-green-500/20 text-green-400">
                        {source.status}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">{source.lastScan}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-4 w-full flex items-center justify-center gap-2 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 rounded-lg text-sm font-medium transition-colors">
                <RefreshCw size={16} />
                Scan Now
              </button>
            </Card>

            {/* Selected Model Details */}
            {selectedModel && (
              <Card delay={0} className="mt-4">
                <h2 className="text-lg font-semibold text-white mb-4">
                  {selectedModel.name}
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Provider</span>
                    <span className="text-white">{selectedModel.provider}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Reddit Score</span>
                    <span className="text-white">{selectedModel.redditScore}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">HN Score</span>
                    <span className="text-white">{selectedModel.hnScore}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">YouTube Score</span>
                    <span className="text-white">{selectedModel.youtubeScore}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">GitHub Stars</span>
                    <span className="text-white">{selectedModel.githubStars}</span>
                  </div>
                </div>
              </Card>
            )}

            {/* Methodology */}
            <Card delay={0.9} className="mt-4">
              <h3 className="font-semibold text-white mb-3">Scoring Methodology</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5" />
                  <span>Sentiment analysis on 1000+ daily posts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5" />
                  <span>Weighted by platform (HN 40%, Reddit 30%, GitHub 20%, YouTube 10%)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5" />
                  <span>7-day rolling average for stability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5" />
                  <span>Task-specific benchmarks included</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
