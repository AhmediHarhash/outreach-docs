'use client';

import { Bell, Shield, CreditCard, Palette, Globe, Trash2 } from 'lucide-react';

export default function SettingsPage() {
  const Section = ({ title, description, icon: Icon, children }) => (
    <div className="glass-card p-6">
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-ocean-700">
          <Icon className="w-5 h-5 text-accent-400" />
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-text-primary">{title}</h2>
          <p className="text-sm text-text-muted mt-1">{description}</p>
          <div className="mt-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );

  const Toggle = ({ label, description, defaultChecked = false }) => (
    <label className="flex items-center justify-between py-3 border-b border-ocean-600 last:border-0 cursor-pointer">
      <div>
        <p className="text-sm font-medium text-text-primary">{label}</p>
        {description && <p className="text-xs text-text-muted mt-0.5">{description}</p>}
      </div>
      <div className="relative">
        <input
          type="checkbox"
          defaultChecked={defaultChecked}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-ocean-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-text-secondary after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-500 peer-checked:after:bg-white"></div>
      </div>
    </label>
  );

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-text-primary">Settings</h1>
        <p className="text-text-secondary mt-1">Manage your account and preferences</p>
      </div>

      {/* Notifications */}
      <Section
        title="Notifications"
        description="Choose what updates you want to receive"
        icon={Bell}
      >
        <Toggle
          label="New job matches"
          description="Get notified when we find high-match jobs"
          defaultChecked={true}
        />
        <Toggle
          label="Application updates"
          description="Receive updates on your application status"
          defaultChecked={true}
        />
        <Toggle
          label="Weekly digest"
          description="Summary of your job search progress"
          defaultChecked={false}
        />
        <Toggle
          label="Discord notifications"
          description="Send alerts to your Discord channel"
          defaultChecked={false}
        />
      </Section>

      {/* Privacy */}
      <Section
        title="Privacy & Security"
        description="Manage your data and account security"
        icon={Shield}
      >
        <Toggle
          label="Profile visible to recruiters"
          description="Allow recruiters to view your profile"
          defaultChecked={true}
        />
        <Toggle
          label="Two-factor authentication"
          description="Add an extra layer of security"
          defaultChecked={false}
        />
        <div className="pt-3">
          <button className="btn-secondary text-sm">
            Change Password
          </button>
        </div>
      </Section>

      {/* Appearance */}
      <Section
        title="Appearance"
        description="Customize how JobHunter looks"
        icon={Palette}
      >
        <div className="space-y-3">
          <div>
            <label className="block text-sm text-text-secondary mb-2">Theme</label>
            <div className="flex gap-2">
              {['Dark', 'Light', 'System'].map((theme) => (
                <button
                  key={theme}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    theme === 'Dark'
                      ? 'bg-accent-500/20 text-accent-400 border border-accent-500/30'
                      : 'bg-ocean-700 text-text-secondary border border-ocean-600 hover:border-ocean-500'
                  }`}
                >
                  {theme}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Language */}
      <Section
        title="Language & Region"
        description="Set your preferred language and location"
        icon={Globe}
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-text-muted mb-1">Language</label>
            <select className="input bg-ocean-700/50">
              <option>English (UK)</option>
              <option>English (US)</option>
              <option>German</option>
              <option>French</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-text-muted mb-1">Currency</label>
            <select className="input bg-ocean-700/50">
              <option>GBP (£)</option>
              <option>EUR (€)</option>
              <option>USD ($)</option>
            </select>
          </div>
        </div>
      </Section>

      {/* Subscription */}
      <Section
        title="Subscription"
        description="Manage your plan and billing"
        icon={CreditCard}
      >
        <div className="p-4 bg-ocean-700/50 rounded-xl border border-ocean-600 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-text-primary">Pro Plan</p>
              <p className="text-sm text-text-muted">£19/month • Renews Jan 15, 2026</p>
            </div>
            <span className="badge badge-success">Active</span>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="btn-secondary text-sm">Upgrade Plan</button>
          <button className="btn-ghost text-sm">Manage Billing</button>
        </div>
      </Section>

      {/* Danger Zone */}
      <Section
        title="Danger Zone"
        description="Irreversible actions"
        icon={Trash2}
      >
        <div className="p-4 bg-error-500/10 border border-error-500/30 rounded-xl">
          <p className="text-sm text-error-400 mb-3">
            Deleting your account will remove all your data permanently. This action cannot be undone.
          </p>
          <button className="px-4 py-2 bg-error-500/20 text-error-400 border border-error-500/30 rounded-lg text-sm font-medium hover:bg-error-500/30 transition-colors">
            Delete Account
          </button>
        </div>
      </Section>
    </div>
  );
}
