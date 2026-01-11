'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Github,
  ExternalLink,
  Target,
  Layers,
  Server,
  Smartphone,
  Chrome,
  Rocket,
  DollarSign,
  Swords,
  TrendingUp,
  History,
  BookOpen,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import clsx from 'clsx';
import { useState } from 'react';

const navigationSections = [
  {
    title: 'Getting Started',
    links: [
      { href: '/research/jobhunter', label: 'Overview', icon: BookOpen },
      { href: '/research/jobhunter/history', label: 'History & Vision', icon: History },
    ]
  },
  {
    title: 'Development Phases',
    links: [
      { href: '/research/jobhunter/phase-1', label: 'Phase I: Foundation', icon: Server, badge: 'Current' },
      { href: '/research/jobhunter/phase-2', label: 'Phase II: Desktop App', icon: Smartphone, badge: 'Building' },
      { href: '/research/jobhunter/phase-3', label: 'Phase III: Extension', icon: Chrome, badge: 'Building' },
      { href: '/research/jobhunter/phase-4', label: 'Phase IV: SaaS Launch', icon: Rocket, badge: 'Planned' },
    ]
  },
  {
    title: 'Technical Deep Dive',
    links: [
      { href: '/research/jobhunter/architecture', label: 'Architecture', icon: Layers },
      { href: '/research/jobhunter/infrastructure', label: 'Infrastructure', icon: Server },
    ]
  },
  {
    title: 'Business',
    links: [
      { href: '/research/jobhunter/costs', label: 'Cost Analysis', icon: DollarSign },
      { href: '/research/jobhunter/competitors', label: 'Competitor Analysis', icon: Swords },
      { href: '/research/jobhunter/business-model', label: 'Business Model', icon: TrendingUp },
    ]
  }
];

export default function Navigation() {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState(
    navigationSections.map(() => true)
  );

  const toggleSection = (index) => {
    setExpandedSections(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <nav className="fixed left-0 top-0 h-screen w-72 bg-[#0d0d0d] border-r border-[#262626] flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-[#262626]">
        <Link href="/research/jobhunter" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <Target className="text-white" size={20} />
          </div>
          <div>
            <h1 className="font-bold text-white">JobHunter Pro</h1>
            <p className="text-xs text-gray-500">v1.0.0 Documentation</p>
          </div>
        </Link>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 overflow-y-auto py-4 scrollbar-thin scrollbar-thumb-gray-700">
        {navigationSections.map((section, sectionIndex) => (
          <div key={section.title} className="mb-4">
            <button
              onClick={() => toggleSection(sectionIndex)}
              className="w-full px-4 mb-2 flex items-center justify-between group cursor-pointer"
            >
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {section.title}
              </p>
              {expandedSections[sectionIndex] ? (
                <ChevronDown size={14} className="text-gray-600 group-hover:text-gray-400" />
              ) : (
                <ChevronRight size={14} className="text-gray-600 group-hover:text-gray-400" />
              )}
            </button>

            {expandedSections[sectionIndex] && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-1 px-3"
              >
                {section.links.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={clsx(
                          'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200',
                          isActive
                            ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        )}
                      >
                        <Icon size={16} />
                        <span className="font-medium text-sm flex-1">{item.label}</span>
                        {item.badge && (
                          <span className={clsx(
                            'text-[10px] px-1.5 py-0.5 rounded',
                            item.badge === 'Current' && 'bg-green-500/20 text-green-400',
                            item.badge === 'Building' && 'bg-yellow-500/20 text-yellow-400',
                            item.badge === 'Planned' && 'bg-blue-500/20 text-blue-400'
                          )}>
                            {item.badge}
                          </span>
                        )}
                        {isActive && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="w-1.5 h-1.5 rounded-full bg-purple-400"
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </motion.ul>
            )}
          </div>
        ))}
      </div>

      {/* Status Badge */}
      <div className="px-4 py-3 border-t border-[#262626]">
        <div className="flex items-center gap-2 px-3 py-2 bg-green-500/10 rounded-lg border border-green-500/20">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          <span className="text-xs text-green-400">Backend Live</span>
          <span className="text-xs text-gray-500 ml-auto">Railway</span>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-[#262626]">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm"
        >
          <Github size={16} />
          <span>View on GitHub</span>
          <ExternalLink size={12} className="ml-auto" />
        </a>
      </div>
    </nav>
  );
}
