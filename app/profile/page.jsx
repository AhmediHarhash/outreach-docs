'use client';

import { motion } from 'framer-motion';
import {
  User,
  Briefcase,
  MapPin,
  DollarSign,
  Code,
  Star,
  Target,
  Save,
  AlertCircle,
  CheckCircle2,
  Plus,
  X
} from 'lucide-react';
import { useState } from 'react';
import Navigation from '../../components/Navigation';
import Card from '../../components/Card';

const defaultProfile = {
  name: '',
  email: '',
  linkedin: '',
  portfolio: '',
  cv: '',

  targetTitles: [
    { title: 'Full Stack Developer', weight: 10 },
    { title: 'Senior Software Engineer', weight: 10 },
    { title: 'Frontend Developer', weight: 8 },
    { title: 'Backend Developer', weight: 8 },
    { title: 'Node.js Developer', weight: 9 },
  ],

  skills: {
    expert: ['JavaScript', 'TypeScript', 'React', 'Node.js'],
    proficient: ['Python', 'PostgreSQL', 'MongoDB', 'AWS'],
    familiar: ['Go', 'Rust', 'Docker', 'Kubernetes'],
  },

  targetCountries: ['USA', 'UK', 'Germany', 'Netherlands', 'Canada'],
  remoteOnly: true,

  salaryMin: 80000,
  salaryCurrency: 'USD',

  yearsExperience: 5,

  bonusKeywords: ['startup', 'AI', 'machine learning', 'fintech', 'remote-first'],
  negativeKeywords: ['PHP', 'WordPress', 'unpaid', 'intern'],
};

export default function ProfilePage() {
  const [profile, setProfile] = useState(defaultProfile);
  const [saved, setSaved] = useState(false);
  const [newSkill, setNewSkill] = useState({ level: 'proficient', skill: '' });
  const [newTitle, setNewTitle] = useState({ title: '', weight: 8 });
  const [newCountry, setNewCountry] = useState('');
  const [newKeyword, setNewKeyword] = useState({ type: 'bonus', keyword: '' });

  const handleSave = () => {
    // In a real app, this would save to localStorage or database
    console.log('Saving profile:', profile);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const addSkill = () => {
    if (newSkill.skill) {
      setProfile((prev) => ({
        ...prev,
        skills: {
          ...prev.skills,
          [newSkill.level]: [...prev.skills[newSkill.level], newSkill.skill],
        },
      }));
      setNewSkill({ ...newSkill, skill: '' });
    }
  };

  const removeSkill = (level, skill) => {
    setProfile((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        [level]: prev.skills[level].filter((s) => s !== skill),
      },
    }));
  };

  const addTitle = () => {
    if (newTitle.title) {
      setProfile((prev) => ({
        ...prev,
        targetTitles: [...prev.targetTitles, newTitle],
      }));
      setNewTitle({ title: '', weight: 8 });
    }
  };

  const removeTitle = (index) => {
    setProfile((prev) => ({
      ...prev,
      targetTitles: prev.targetTitles.filter((_, i) => i !== index),
    }));
  };

  const addCountry = () => {
    if (newCountry && !profile.targetCountries.includes(newCountry)) {
      setProfile((prev) => ({
        ...prev,
        targetCountries: [...prev.targetCountries, newCountry],
      }));
      setNewCountry('');
    }
  };

  const removeCountry = (country) => {
    setProfile((prev) => ({
      ...prev,
      targetCountries: prev.targetCountries.filter((c) => c !== country),
    }));
  };

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
            <span className="text-white">Your Profile</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Your Profile</h1>
          <p className="text-gray-400">
            Configure your job preferences so the scraper knows what to look for
          </p>
        </motion.div>

        {/* Alert */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-4 mb-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="text-amber-400" size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-amber-400">This is a Demo</h3>
              <p className="text-sm text-gray-400 mt-1">
                This form shows what configuration is needed. In v1.0, you'll edit the <code className="text-indigo-400">src/config/job-profile.config.js</code> file directly.
                Future versions will have a proper form that saves to database.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          {/* Personal Info */}
          <Card delay={0.1}>
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <User className="text-indigo-400" size={20} />
              Personal Info
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Full Name</label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-3 py-2 bg-[#1a1a1a] border border-[#262626] rounded-lg text-white placeholder-gray-600 focus:border-indigo-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-3 py-2 bg-[#1a1a1a] border border-[#262626] rounded-lg text-white placeholder-gray-600 focus:border-indigo-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">LinkedIn URL</label>
                <input
                  type="url"
                  value={profile.linkedin}
                  onChange={(e) => setProfile({ ...profile, linkedin: e.target.value })}
                  placeholder="https://linkedin.com/in/johndoe"
                  className="w-full px-3 py-2 bg-[#1a1a1a] border border-[#262626] rounded-lg text-white placeholder-gray-600 focus:border-indigo-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Years of Experience</label>
                <input
                  type="number"
                  value={profile.yearsExperience}
                  onChange={(e) => setProfile({ ...profile, yearsExperience: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 bg-[#1a1a1a] border border-[#262626] rounded-lg text-white focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>
          </Card>

          {/* Salary Expectations */}
          <Card delay={0.2}>
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <DollarSign className="text-green-400" size={20} />
              Salary Expectations
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Minimum Salary</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={profile.salaryMin}
                    onChange={(e) => setProfile({ ...profile, salaryMin: parseInt(e.target.value) })}
                    className="flex-1 px-3 py-2 bg-[#1a1a1a] border border-[#262626] rounded-lg text-white focus:border-indigo-500 focus:outline-none"
                  />
                  <select
                    value={profile.salaryCurrency}
                    onChange={(e) => setProfile({ ...profile, salaryCurrency: e.target.value })}
                    className="px-3 py-2 bg-[#1a1a1a] border border-[#262626] rounded-lg text-white focus:border-indigo-500 focus:outline-none"
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                  </select>
                </div>
              </div>

              <div className="p-4 bg-[#1a1a1a] rounded-lg">
                <p className="text-sm text-gray-400">
                  Jobs below this salary will be scored lower. Jobs that don't list salary won't be penalized.
                </p>
              </div>
            </div>
          </Card>

          {/* Target Job Titles */}
          <Card delay={0.3}>
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Briefcase className="text-purple-400" size={20} />
              Target Job Titles
            </h2>

            <div className="space-y-2 mb-4">
              {profile.targetTitles.map((item, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-[#1a1a1a] rounded-lg">
                  <span className="flex-1 text-gray-300">{item.title}</span>
                  <span className="text-xs px-2 py-1 bg-indigo-500/20 text-indigo-400 rounded">
                    Weight: {item.weight}
                  </span>
                  <button
                    onClick={() => removeTitle(index)}
                    className="text-gray-500 hover:text-red-400"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={newTitle.title}
                onChange={(e) => setNewTitle({ ...newTitle, title: e.target.value })}
                placeholder="Add job title..."
                className="flex-1 px-3 py-2 bg-[#1a1a1a] border border-[#262626] rounded-lg text-white placeholder-gray-600 focus:border-indigo-500 focus:outline-none"
              />
              <input
                type="number"
                value={newTitle.weight}
                onChange={(e) => setNewTitle({ ...newTitle, weight: parseInt(e.target.value) })}
                className="w-20 px-3 py-2 bg-[#1a1a1a] border border-[#262626] rounded-lg text-white focus:border-indigo-500 focus:outline-none"
                min="1"
                max="10"
              />
              <button
                onClick={addTitle}
                className="px-3 py-2 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-400 rounded-lg"
              >
                <Plus size={20} />
              </button>
            </div>
          </Card>

          {/* Target Countries */}
          <Card delay={0.4}>
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <MapPin className="text-red-400" size={20} />
              Target Countries
            </h2>

            <div className="flex flex-wrap gap-2 mb-4">
              {profile.targetCountries.map((country) => (
                <span
                  key={country}
                  className="flex items-center gap-1 px-3 py-1 bg-[#1a1a1a] border border-[#262626] rounded-full text-sm text-gray-300"
                >
                  {country}
                  <button
                    onClick={() => removeCountry(country)}
                    className="text-gray-500 hover:text-red-400"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={newCountry}
                onChange={(e) => setNewCountry(e.target.value)}
                placeholder="Add country..."
                className="flex-1 px-3 py-2 bg-[#1a1a1a] border border-[#262626] rounded-lg text-white placeholder-gray-600 focus:border-indigo-500 focus:outline-none"
              />
              <button
                onClick={addCountry}
                className="px-3 py-2 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-400 rounded-lg"
              >
                <Plus size={20} />
              </button>
            </div>

            <label className="flex items-center gap-2 mt-4 text-sm text-gray-400">
              <input
                type="checkbox"
                checked={profile.remoteOnly}
                onChange={(e) => setProfile({ ...profile, remoteOnly: e.target.checked })}
                className="w-4 h-4 rounded bg-[#1a1a1a] border-[#262626] text-indigo-500 focus:ring-indigo-500"
              />
              Remote only (strongly prefer remote jobs)
            </label>
          </Card>

          {/* Skills */}
          <Card delay={0.5} className="col-span-2">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Code className="text-cyan-400" size={20} />
              Skills
            </h2>

            <div className="grid grid-cols-3 gap-4 mb-4">
              {/* Expert */}
              <div>
                <h4 className="text-sm font-medium text-green-400 mb-2 flex items-center gap-1">
                  <Star size={14} /> Expert
                </h4>
                <div className="space-y-1">
                  {profile.skills.expert.map((skill) => (
                    <div key={skill} className="flex items-center justify-between p-2 bg-green-500/10 rounded">
                      <span className="text-sm text-gray-300">{skill}</span>
                      <button onClick={() => removeSkill('expert', skill)} className="text-gray-500 hover:text-red-400">
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Proficient */}
              <div>
                <h4 className="text-sm font-medium text-blue-400 mb-2">Proficient</h4>
                <div className="space-y-1">
                  {profile.skills.proficient.map((skill) => (
                    <div key={skill} className="flex items-center justify-between p-2 bg-blue-500/10 rounded">
                      <span className="text-sm text-gray-300">{skill}</span>
                      <button onClick={() => removeSkill('proficient', skill)} className="text-gray-500 hover:text-red-400">
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Familiar */}
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-2">Familiar</h4>
                <div className="space-y-1">
                  {profile.skills.familiar.map((skill) => (
                    <div key={skill} className="flex items-center justify-between p-2 bg-gray-500/10 rounded">
                      <span className="text-sm text-gray-300">{skill}</span>
                      <button onClick={() => removeSkill('familiar', skill)} className="text-gray-500 hover:text-red-400">
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Add Skill */}
            <div className="flex gap-2">
              <select
                value={newSkill.level}
                onChange={(e) => setNewSkill({ ...newSkill, level: e.target.value })}
                className="px-3 py-2 bg-[#1a1a1a] border border-[#262626] rounded-lg text-white focus:border-indigo-500 focus:outline-none"
              >
                <option value="expert">Expert</option>
                <option value="proficient">Proficient</option>
                <option value="familiar">Familiar</option>
              </select>
              <input
                type="text"
                value={newSkill.skill}
                onChange={(e) => setNewSkill({ ...newSkill, skill: e.target.value })}
                placeholder="Add skill..."
                className="flex-1 px-3 py-2 bg-[#1a1a1a] border border-[#262626] rounded-lg text-white placeholder-gray-600 focus:border-indigo-500 focus:outline-none"
              />
              <button
                onClick={addSkill}
                className="px-3 py-2 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-400 rounded-lg"
              >
                <Plus size={20} />
              </button>
            </div>
          </Card>
        </div>

        {/* Save Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex items-center justify-between"
        >
          <p className="text-sm text-gray-500">
            Note: In v0.0.1, edit <code className="text-indigo-400">src/config/job-profile.config.js</code> directly
          </p>
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium transition-colors"
          >
            {saved ? (
              <>
                <CheckCircle2 size={20} />
                Saved!
              </>
            ) : (
              <>
                <Save size={20} />
                Save Profile
              </>
            )}
          </button>
        </motion.div>
      </main>
    </div>
  );
}
