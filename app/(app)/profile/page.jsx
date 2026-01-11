'use client';

import { useState } from 'react';
import { User, Mail, Phone, Linkedin, Github, Globe, Briefcase, GraduationCap, Target, Plus, X, Edit2, Save } from 'lucide-react';

// Mock data - will be replaced with Supabase data
const mockProfile = {
  name: 'John Developer',
  email: 'john@example.com',
  phone: '+44 7700 900000',
  linkedin: 'linkedin.com/in/johndeveloper',
  github: 'github.com/johndeveloper',
  portfolio: 'johndev.io',
  currentTitle: 'Senior Software Engineer',
  yearsExperience: 8,
  skills: [
    { name: 'React', level: 'expert' },
    { name: 'TypeScript', level: 'expert' },
    { name: 'Node.js', level: 'advanced' },
    { name: 'Python', level: 'intermediate' },
    { name: 'PostgreSQL', level: 'advanced' },
    { name: 'AWS', level: 'intermediate' },
  ],
  preferences: {
    salaryMin: 80000,
    salaryMax: 120000,
    remote: true,
    locations: ['London', 'Remote'],
    jobTypes: ['Full-time'],
  },
};

export default function ProfilePage() {
  const [profile, setProfile] = useState(mockProfile);
  const [editing, setEditing] = useState(null);

  const Section = ({ title, icon: Icon, children, onEdit }) => (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-accent-400" />
          <h2 className="text-lg font-semibold text-text-primary">{title}</h2>
        </div>
        {onEdit && (
          <button
            onClick={onEdit}
            className="p-2 text-text-muted hover:text-text-primary hover:bg-ocean-700 rounded-lg transition-colors"
          >
            <Edit2 className="w-4 h-4" />
          </button>
        )}
      </div>
      {children}
    </div>
  );

  const InputField = ({ label, value, icon: Icon, type = 'text' }) => (
    <div>
      <label className="block text-sm text-text-muted mb-1">{label}</label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
        )}
        <input
          type={type}
          value={value}
          readOnly
          className={`input ${Icon ? 'pl-10' : ''} bg-ocean-700/50`}
        />
      </div>
    </div>
  );

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Profile</h1>
          <p className="text-text-secondary mt-1">Manage your profile and job preferences</p>
        </div>
        <button className="btn-primary">
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>

      {/* Profile Header Card */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-accent-500/20 flex items-center justify-center text-accent-400 text-3xl font-bold">
            {profile.name[0]}
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-text-primary">{profile.name}</h2>
            <p className="text-text-secondary">{profile.currentTitle}</p>
            <p className="text-text-muted text-sm mt-1">{profile.yearsExperience} years experience</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-text-muted">Profile Completeness</div>
            <div className="text-2xl font-bold text-accent-400 mt-1">85%</div>
            <div className="w-32 h-2 bg-ocean-700 rounded-full mt-2">
              <div className="h-full w-[85%] bg-accent-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Basic Info */}
      <Section title="Contact Information" icon={User} onEdit={() => setEditing('contact')}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="Full Name" value={profile.name} icon={User} />
          <InputField label="Email" value={profile.email} icon={Mail} type="email" />
          <InputField label="Phone" value={profile.phone} icon={Phone} />
          <InputField label="Current Title" value={profile.currentTitle} icon={Briefcase} />
        </div>
      </Section>

      {/* Links */}
      <Section title="Links & Profiles" icon={Globe} onEdit={() => setEditing('links')}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InputField label="LinkedIn" value={profile.linkedin} icon={Linkedin} />
          <InputField label="GitHub" value={profile.github} icon={Github} />
          <InputField label="Portfolio" value={profile.portfolio} icon={Globe} />
        </div>
      </Section>

      {/* Skills */}
      <Section title="Skills" icon={GraduationCap} onEdit={() => setEditing('skills')}>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <span
              key={skill.name}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                skill.level === 'expert'
                  ? 'bg-accent-500/20 text-accent-400 border border-accent-500/30'
                  : skill.level === 'advanced'
                  ? 'bg-success-500/20 text-success-400 border border-success-500/30'
                  : 'bg-ocean-700 text-text-secondary border border-ocean-600'
              }`}
            >
              {skill.name}
              <span className="ml-1 text-xs opacity-70">({skill.level})</span>
            </span>
          ))}
          <button className="px-3 py-1.5 rounded-lg text-sm font-medium bg-ocean-700 text-text-muted border border-dashed border-ocean-500 hover:border-accent-500 hover:text-accent-400 transition-colors flex items-center gap-1">
            <Plus className="w-4 h-4" />
            Add Skill
          </button>
        </div>
      </Section>

      {/* Job Preferences */}
      <Section title="Job Preferences" icon={Target} onEdit={() => setEditing('preferences')}>
        <div className="space-y-4">
          {/* Salary Range */}
          <div>
            <label className="block text-sm text-text-muted mb-2">Target Salary Range</label>
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">£</span>
                <input
                  type="text"
                  value={profile.preferences.salaryMin.toLocaleString()}
                  readOnly
                  className="input pl-7 bg-ocean-700/50"
                />
              </div>
              <span className="text-text-muted">to</span>
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">£</span>
                <input
                  type="text"
                  value={profile.preferences.salaryMax.toLocaleString()}
                  readOnly
                  className="input pl-7 bg-ocean-700/50"
                />
              </div>
            </div>
          </div>

          {/* Remote Preference */}
          <div>
            <label className="block text-sm text-text-muted mb-2">Work Arrangement</label>
            <div className="flex gap-2">
              {['Remote', 'Hybrid', 'On-site'].map((option) => (
                <button
                  key={option}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    (option === 'Remote' && profile.preferences.remote)
                      ? 'bg-accent-500/20 text-accent-400 border border-accent-500/30'
                      : 'bg-ocean-700 text-text-secondary border border-ocean-600 hover:border-ocean-500'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Preferred Locations */}
          <div>
            <label className="block text-sm text-text-muted mb-2">Preferred Locations</label>
            <div className="flex flex-wrap gap-2">
              {profile.preferences.locations.map((location) => (
                <span
                  key={location}
                  className="px-3 py-1.5 rounded-lg text-sm bg-ocean-700 text-text-primary border border-ocean-600 flex items-center gap-2"
                >
                  {location}
                  <button className="text-text-muted hover:text-accent-400">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
              <button className="px-3 py-1.5 rounded-lg text-sm text-text-muted border border-dashed border-ocean-500 hover:border-accent-500 hover:text-accent-400 transition-colors flex items-center gap-1">
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
