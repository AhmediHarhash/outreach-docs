'use client';

import { motion } from 'framer-motion';
import {
  Smartphone,
  Zap,
  Shield,
  DollarSign,
  CheckCircle2,
  XCircle,
  Star,
  Cpu,
  Layers,
  Package,
  Code2,
  Palette
} from 'lucide-react';
import Navigation from '../../../components/Navigation';
import Card from '../../../components/Card';

const frameworks = [
  {
    name: 'Flutter 3.38',
    verdict: 'RECOMMENDED',
    score: 95,
    description: 'Google\'s UI toolkit with Impeller rendering engine for buttery-smooth 120fps animations',
    pros: [
      'Impeller engine: 120fps animations, no jank',
      'Single codebase for iOS, Android, Web, Desktop',
      'Dart 3.8: macros, pattern matching, records',
      'Hot reload: instant UI changes',
      'Rich widget ecosystem (20k+ packages)',
      'Strong enterprise adoption (Google Pay, BMW, eBay)',
    ],
    cons: [
      'App size ~15-20MB minimum',
      'Dart learning curve if coming from JS',
      'Some native features need platform channels',
    ],
    bestFor: 'Cross-platform apps with complex UI and animations',
    cost: 'FREE (MIT License)',
    stateManagement: 'Riverpod 2.x (recommended) or Bloc',
    architecture: 'Clean Architecture + MVI pattern',
  },
  {
    name: 'React Native 0.79',
    verdict: 'GOOD ALTERNATIVE',
    score: 85,
    description: 'Meta\'s framework with New Architecture (Fabric + TurboModules) for near-native performance',
    pros: [
      'New Architecture: JSI for direct native calls',
      'Fabric renderer: concurrent rendering',
      'Leverage existing React/TypeScript skills',
      'Expo SDK 53: easy builds and OTA updates',
      'Large community and ecosystem',
    ],
    cons: [
      'Bridge overhead (though reduced with New Arch)',
      'Complex native module integration',
      'Slower than Flutter for heavy animations',
    ],
    bestFor: 'Teams with React expertise, simpler UIs',
    cost: 'FREE (MIT License)',
    stateManagement: 'Zustand or Jotai (modern), Redux Toolkit',
    architecture: 'Feature-based modular architecture',
  },
  {
    name: 'Kotlin Multiplatform (KMP)',
    verdict: 'NATIVE FIRST',
    score: 80,
    description: 'JetBrains\' solution for sharing business logic while keeping native UI',
    pros: [
      'Share 70-80% of code (business logic)',
      'Native UI performance (SwiftUI/Jetpack Compose)',
      'Strong type safety',
      'Official JetBrains support',
    ],
    cons: [
      'Need iOS + Android UI expertise',
      'Smaller ecosystem than Flutter/RN',
      'More complex setup',
    ],
    bestFor: 'Apps requiring 100% native UI fidelity',
    cost: 'FREE',
    stateManagement: 'Native (StateFlow/Combine)',
    architecture: 'Clean Architecture + MVVM',
  },
];

const recommendedStack = {
  framework: 'Flutter 3.38 + Dart 3.8',
  stateManagement: 'Riverpod 2.x',
  architecture: 'Clean Architecture + MVI',
  networking: 'Dio 5.x + Retrofit',
  storage: 'Hive 4.x (offline) + SharedPreferences',
  auth: 'Firebase Auth or Clerk Flutter SDK',
  push: 'Firebase Cloud Messaging (FCM)',
  analytics: 'Firebase Analytics + Mixpanel',
  testing: 'Flutter Test + Mockito + Integration Tests',
  ci_cd: 'Codemagic or GitHub Actions + Fastlane',
};

const projectStructure = `lib/
├── core/
│   ├── constants/
│   ├── errors/
│   ├── network/
│   └── utils/
├── features/
│   ├── auth/
│   │   ├── data/
│   │   ├── domain/
│   │   └── presentation/
│   ├── jobs/
│   │   ├── data/
│   │   │   ├── datasources/
│   │   │   ├── models/
│   │   │   └── repositories/
│   │   ├── domain/
│   │   │   ├── entities/
│   │   │   ├── repositories/
│   │   │   └── usecases/
│   │   └── presentation/
│   │       ├── providers/
│   │       ├── screens/
│   │       └── widgets/
│   └── profile/
├── shared/
│   ├── widgets/
│   └── providers/
└── main.dart`;

const costs = [
  { item: 'Flutter SDK', cost: 'FREE', notes: 'MIT License' },
  { item: 'Apple Developer Account', cost: '$99/year', notes: 'Required for iOS App Store' },
  { item: 'Google Play Console', cost: '$25 one-time', notes: 'Required for Play Store' },
  { item: 'Firebase (Spark Plan)', cost: 'FREE', notes: 'Auth, FCM, Analytics - generous limits' },
  { item: 'Codemagic CI/CD', cost: 'FREE tier', notes: '500 build minutes/month free' },
  { item: 'RevenueCat (IAP)', cost: 'FREE < $2.5k MRR', notes: 'In-app purchases management' },
];

export default function MobileResearchPage() {
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
            <span className="text-white">Mobile Apps</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Mobile App Framework Research - 2026
          </h1>
          <p className="text-gray-400">
            Comprehensive analysis of cross-platform mobile frameworks for Outreach
          </p>
        </motion.div>

        {/* Recommendation Banner */}
        <Card delay={0.1} className="mb-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
              <Star className="text-green-400" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Recommendation: Flutter 3.38</h2>
              <p className="text-gray-300">
                For Outreach's job automation platform, <strong className="text-green-400">Flutter</strong> is the clear winner.
                The Impeller rendering engine provides 120fps animations, Dart 3.8 offers modern language features,
                and the single codebase approach maximizes development efficiency on a tight budget.
              </p>
            </div>
          </div>
        </Card>

        {/* Framework Comparison */}
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Smartphone className="text-indigo-400" size={24} />
          Framework Comparison
        </h2>

        <div className="space-y-6 mb-8">
          {frameworks.map((framework, index) => (
            <Card key={framework.name} delay={0.2 + index * 0.1}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-white">{framework.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded font-medium ${
                      framework.verdict === 'RECOMMENDED'
                        ? 'bg-green-500/20 text-green-400'
                        : framework.verdict === 'GOOD ALTERNATIVE'
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {framework.verdict}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{framework.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-indigo-400">{framework.score}</div>
                  <div className="text-xs text-gray-500">Score</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-green-400 mb-2 flex items-center gap-2">
                    <CheckCircle2 size={14} />
                    Pros
                  </h4>
                  <ul className="space-y-1">
                    {framework.pros.map((pro, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-green-400 mt-1">+</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-red-400 mb-2 flex items-center gap-2">
                    <XCircle size={14} />
                    Cons
                  </h4>
                  <ul className="space-y-1">
                    {framework.cons.map((con, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-red-400 mt-1">-</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-[#262626] grid grid-cols-4 gap-4">
                <div>
                  <div className="text-xs text-gray-500">Best For</div>
                  <div className="text-sm text-gray-300">{framework.bestFor}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Cost</div>
                  <div className="text-sm text-green-400">{framework.cost}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">State Management</div>
                  <div className="text-sm text-gray-300">{framework.stateManagement}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Architecture</div>
                  <div className="text-sm text-gray-300">{framework.architecture}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Recommended Stack */}
        <Card delay={0.5} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Package className="text-purple-400" size={20} />
            Recommended Flutter Stack for Outreach
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {Object.entries(recommendedStack).map(([key, value]) => (
              <div key={key} className="p-3 bg-[#1a1a1a] rounded-lg">
                <div className="text-xs text-gray-500 capitalize mb-1">
                  {key.replace(/_/g, ' ')}
                </div>
                <div className="text-sm text-indigo-400 font-medium">{value}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Project Structure */}
        <Card delay={0.6} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Layers className="text-blue-400" size={20} />
            Clean Architecture Project Structure
          </h2>
          <pre className="bg-[#0a0a0a] p-4 rounded-lg text-sm text-gray-300 overflow-x-auto font-mono">
            {projectStructure}
          </pre>
        </Card>

        {/* Costs */}
        <Card delay={0.7}>
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <DollarSign className="text-green-400" size={20} />
            Development Costs
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#262626]">
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Item</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Cost</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Notes</th>
                </tr>
              </thead>
              <tbody>
                {costs.map((item) => (
                  <tr key={item.item} className="border-b border-[#262626]/50">
                    <td className="py-3 text-sm text-white">{item.item}</td>
                    <td className="py-3 text-sm text-green-400 font-medium">{item.cost}</td>
                    <td className="py-3 text-sm text-gray-500">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
            <p className="text-sm text-green-400">
              <strong>Total Year 1 Cost:</strong> ~$124 (Apple $99 + Google $25) + optional CI/CD if exceeding free tier
            </p>
          </div>
        </Card>

        {/* Research Date */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center text-sm text-gray-500"
        >
          Research conducted: January 2026 | Sources: Flutter.dev, React Native docs, JetBrains KMP
        </motion.div>
      </main>
    </div>
  );
}
