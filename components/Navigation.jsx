'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Home,
  ListTodo,
  Box,
  DollarSign,
  CheckSquare,
  User,
  Briefcase,
  TrendingUp,
  Github,
  ExternalLink,
  Rocket,
  Cpu,
  Database,
  Mail,
  Smartphone
} from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { href: '/', label: 'Dashboard', icon: Home },
  { href: '/vision', label: 'Vision & Roadmap', icon: Rocket },
  { href: '/todo', label: 'TODO List', icon: ListTodo },
  { href: '/architecture', label: 'Architecture', icon: Box },
  { href: '/costs', label: 'Cost Analysis', icon: DollarSign },
  { href: '/setup', label: 'Setup Guide', icon: CheckSquare },
  { href: '/profile', label: 'Your Profile', icon: User },
];

const projectLinks = [
  { href: '/jobs', label: 'Job Intelligence', icon: Briefcase },
  { href: '/market', label: 'Market Intelligence', icon: TrendingUp },
];

const researchLinks = [
  { href: '/research/mobile', label: 'Mobile Apps', icon: Smartphone },
  { href: '/research/backend', label: 'Backend & Infra', icon: Database },
  { href: '/research/automation', label: 'Automation', icon: Cpu },
  { href: '/research/outreach', label: 'Email & Calling', icon: Mail },
  { href: '/research/jobboards', label: 'Job Boards', icon: Briefcase },
  { href: '/research/finance', label: 'Finance & Pricing', icon: DollarSign },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-[#0d0d0d] border-r border-[#262626] flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-[#262626]">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">O</span>
          </div>
          <div>
            <h1 className="font-bold text-white">Outreach</h1>
            <p className="text-xs text-gray-500">v0.0.1</p>
          </div>
        </Link>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 overflow-y-auto py-4">
        <div className="px-3 mb-2">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3">
            Documentation
          </p>
        </div>
        <ul className="space-y-1 px-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={clsx(
                    'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200',
                    isActive
                      ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  )}
                >
                  <Icon size={18} />
                  <span className="font-medium">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="px-3 mt-6 mb-2">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3">
            Workers
          </p>
        </div>
        <ul className="space-y-1 px-3">
          {projectLinks.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={clsx(
                    'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200',
                    isActive
                      ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  )}
                >
                  <Icon size={18} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="px-3 mt-6 mb-2">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3">
            Research
          </p>
        </div>
        <ul className="space-y-1 px-3">
          {researchLinks.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href);
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
                  <Icon size={18} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
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
