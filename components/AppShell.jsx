'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Briefcase,
  ClipboardList,
  User,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Bell
} from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Jobs', href: '/jobs', icon: Briefcase },
  { name: 'Applications', href: '/applications', icon: ClipboardList },
  { name: 'Profile', href: '/profile', icon: User },
];

const bottomNavItems = [
  { name: 'Settings', href: '/settings', icon: Settings },
];

export default function AppShell({ children, user }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-ocean-900">
      {/* Sidebar */}
      <aside
        className={clsx(
          'flex flex-col bg-ocean-800 border-r border-ocean-600 transition-all duration-300',
          collapsed ? 'w-20' : 'w-64'
        )}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-ocean-600">
          {!collapsed && (
            <Link href="/dashboard" className="flex items-center gap-2">
              <span className="text-xl font-bold text-accent-500">JobHunter</span>
              <span className="text-xl font-light text-text-primary">Pro</span>
            </Link>
          )}
          {collapsed && (
            <Link href="/dashboard" className="mx-auto">
              <span className="text-2xl font-bold text-accent-500">J</span>
            </Link>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-ocean-700 transition-colors"
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'bg-accent-500/20 text-accent-400 border border-accent-500/30'
                    : 'text-text-secondary hover:text-text-primary hover:bg-ocean-700/50',
                  collapsed && 'justify-center'
                )}
                title={collapsed ? item.name : undefined}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Navigation */}
        <div className="px-3 py-2 space-y-1">
          {bottomNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'bg-accent-500/20 text-accent-400 border border-accent-500/30'
                    : 'text-text-secondary hover:text-text-primary hover:bg-ocean-700/50',
                  collapsed && 'justify-center'
                )}
                title={collapsed ? item.name : undefined}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </div>

        {/* User Section */}
        <div className="p-3 border-t border-ocean-600">
          <div className={clsx(
            'flex items-center gap-3 p-3 rounded-xl bg-ocean-700/50',
            collapsed && 'justify-center'
          )}>
            {/* Avatar */}
            <div className="h-10 w-10 rounded-full bg-accent-500/20 flex items-center justify-center text-accent-400 font-semibold flex-shrink-0">
              {user?.name?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || 'U'}
            </div>

            {!collapsed && (
              <>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-text-primary truncate">
                    {user?.name || 'User'}
                  </p>
                  <p className="text-xs text-text-muted truncate">
                    {user?.email || 'user@example.com'}
                  </p>
                </div>
                <button
                  className="p-2 text-text-muted hover:text-text-primary hover:bg-ocean-600 rounded-lg transition-colors"
                  title="Sign out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header Bar */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-ocean-600 bg-ocean-800/50">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-semibold text-text-primary">
              {navItems.find(item => pathname.startsWith(item.href))?.name || 'Dashboard'}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            {/* AI Assistant Button */}
            <button className="btn-secondary flex items-center gap-2 text-sm">
              <Sparkles className="w-4 h-4 text-accent-400" />
              <span>AI Assistant</span>
            </button>

            {/* Notifications */}
            <button className="relative p-2 text-text-muted hover:text-text-primary hover:bg-ocean-700 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent-500 rounded-full"></span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
