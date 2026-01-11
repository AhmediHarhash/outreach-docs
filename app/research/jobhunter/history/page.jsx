'use client';

import {
  History,
  Lightbulb,
  Target,
  Rocket,
  Star,
  TrendingUp,
  Users,
  Globe,
  Zap,
  Heart,
  CheckCircle2,
  ArrowRight,
  Clock,
  Flag,
  Award,
  Eye,
  Brain,
  Sparkles,
  Mountain,
  Compass,
  Map,
  Shield
} from 'lucide-react';

export default function HistoryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-amber-900/30 to-slate-900 py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
              <History className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm font-medium">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              History &
              <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Vision
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The journey from frustration to innovation - how a broken job hunting experience
              inspired a revolution in career management
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* The Problem */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">The Problem We Saw</h2>
          </div>

          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">The Modern Job Hunt is Broken</h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">😫</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Spray and Pray</h4>
                      <p className="text-slate-400 text-sm">
                        Job seekers send 100+ applications hoping something sticks.
                        Average response rate? Under 2%.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📄</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">One-Size-Fits-All CVs</h4>
                      <p className="text-slate-400 text-sm">
                        The same generic resume sent everywhere. ATS systems reject 75%
                        before human eyes ever see them.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">⏰</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Hours of Wasted Effort</h4>
                      <p className="text-slate-400 text-sm">
                        Filling out the same forms, copying the same info, answering
                        the same questions. 40 hours/week just applying.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🎲</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">No Strategy, Just Luck</h4>
                      <p className="text-slate-400 text-sm">
                        Which jobs actually match? Is this role right? Are you qualified?
                        Guesswork replaces strategy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-2xl p-6">
                <h4 className="font-bold text-white mb-6">The Numbers Tell the Story</h4>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-slate-400 text-sm">Average Applications to Get 1 Interview</span>
                      <span className="text-red-400 font-bold text-2xl">118</span>
                    </div>
                    <div className="h-3 bg-slate-700 rounded-full">
                      <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-slate-400 text-sm">CVs Never Seen by Humans</span>
                      <span className="text-red-400 font-bold text-2xl">75%</span>
                    </div>
                    <div className="h-3 bg-slate-700 rounded-full">
                      <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-slate-400 text-sm">Time Spent on Bad-Fit Jobs</span>
                      <span className="text-red-400 font-bold text-2xl">60%</span>
                    </div>
                    <div className="h-3 bg-slate-700 rounded-full">
                      <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-slate-400 text-sm">Job Seekers Reporting Burnout</span>
                      <span className="text-red-400 font-bold text-2xl">89%</span>
                    </div>
                    <div className="h-3 bg-slate-700 rounded-full">
                      <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full" style={{width: '89%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-500/20 rounded-xl">
                <Lightbulb className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">The Realization</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  "What if the problem isn't the job market - it's the approach? What if instead
                  of applying to MORE jobs, we applied to the RIGHT jobs? What if AI could
                  understand not just keywords, but the semantic meaning of a career?"
                </p>
                <p className="text-amber-400 mt-4 font-medium">
                  — The founding question of JobHunter Pro
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Vision */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Our Vision</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Quality Over Quantity</h3>
              <p className="text-slate-300 mb-6">
                We believe the future of job hunting isn't about sending more applications -
                it's about sending smarter ones. Every application should be:
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-white">Semantically matched to your experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-white">Tailored specifically to that role</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-white">Optimized for both ATS and humans</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-white">Worth your time and energy</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">AI as Your Career Partner</h3>
              <p className="text-slate-300 mb-6">
                Not AI that replaces you, but AI that understands you. Through deep interviews
                and semantic analysis, we build a true representation of your career:
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-violet-400" />
                  <span className="text-white">Understands your skills in context</span>
                </div>
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-violet-400" />
                  <span className="text-white">Knows your career aspirations</span>
                </div>
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-violet-400" />
                  <span className="text-white">Remembers your achievements</span>
                </div>
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-violet-400" />
                  <span className="text-white">Advocates for your worth</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-pink-500/10 border border-violet-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">The JobHunter Pro Promise</h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-violet-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-violet-400" />
                </div>
                <h4 className="font-bold text-white mb-2">Precision Matching</h4>
                <p className="text-slate-400 text-sm">
                  Every job recommendation is 85%+ semantically aligned with your profile
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="font-bold text-white mb-2">10x Efficiency</h4>
                <p className="text-slate-400 text-sm">
                  Apply to 10 perfect jobs in the time it takes to apply to 1 manually
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-pink-400" />
                </div>
                <h4 className="font-bold text-white mb-2">Human-First</h4>
                <p className="text-slate-400 text-sm">
                  AI assists and suggests, you review and decide. Always in control.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Development Timeline</h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-blue-500 to-emerald-500"></div>

            <div className="space-y-12">
              {/* Phase 0 */}
              <div className="relative flex gap-8">
                <div className="w-16 h-16 bg-slate-800 border-4 border-violet-500 rounded-2xl flex items-center justify-center z-10">
                  <Lightbulb className="w-6 h-6 text-violet-400" />
                </div>
                <div className="flex-1 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-violet-500/20 text-violet-400 text-sm rounded-full">Ideation</span>
                    <span className="text-slate-500 text-sm">Q4 2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">The Spark</h3>
                  <p className="text-slate-400">
                    After experiencing the frustration of modern job hunting firsthand,
                    the idea for a smarter, AI-powered approach was born. Research into
                    semantic matching, embedding models, and the job API landscape began.
                  </p>
                </div>
              </div>

              {/* Phase 1 */}
              <div className="relative flex gap-8">
                <div className="w-16 h-16 bg-slate-800 border-4 border-blue-500 rounded-2xl flex items-center justify-center z-10">
                  <Flag className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">Phase I</span>
                    <span className="text-slate-500 text-sm">January 2026</span>
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">Current</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Foundation</h3>
                  <p className="text-slate-400 mb-4">
                    Building the core infrastructure: Python backend with FastAPI,
                    Claude CLI integration for AI operations, job aggregation from Adzuna and Jooble,
                    OpenAI embeddings for semantic matching, and Discord notifications.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">FastAPI</span>
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">Claude CLI</span>
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">OpenAI</span>
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">Supabase</span>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative flex gap-8">
                <div className="w-16 h-16 bg-slate-800 border-4 border-cyan-500 rounded-2xl flex items-center justify-center z-10">
                  <Sparkles className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">Phase II</span>
                    <span className="text-slate-500 text-sm">Q1 2026</span>
                    <span className="px-2 py-1 bg-amber-500/20 text-amber-400 text-xs rounded-full">Building</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Desktop Experience</h3>
                  <p className="text-slate-400 mb-4">
                    Flutter desktop application with beautiful UI, AI-powered onboarding interviews,
                    job dashboard with match scores, profile management, and CV generation preview.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">Flutter 3.38</span>
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">Riverpod</span>
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">Desktop</span>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative flex gap-8">
                <div className="w-16 h-16 bg-slate-800 border-4 border-emerald-500 rounded-2xl flex items-center justify-center z-10">
                  <Zap className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="flex-1 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm rounded-full">Phase III</span>
                    <span className="text-slate-500 text-sm">Q2 2026</span>
                    <span className="px-2 py-1 bg-amber-500/20 text-amber-400 text-xs rounded-full">Building</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Chrome Extension</h3>
                  <p className="text-slate-400 mb-4">
                    Smart form detection on job application pages, preview before auto-fill,
                    intelligent field mapping, and seamless profile synchronization.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">Manifest V3</span>
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">Content Scripts</span>
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">Service Worker</span>
                  </div>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="relative flex gap-8">
                <div className="w-16 h-16 bg-slate-800 border-4 border-amber-500 rounded-2xl flex items-center justify-center z-10">
                  <Rocket className="w-6 h-6 text-amber-400" />
                </div>
                <div className="flex-1 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-sm rounded-full">Phase IV</span>
                    <span className="text-slate-500 text-sm">Q3 2026</span>
                    <span className="px-2 py-1 bg-slate-600 text-slate-300 text-xs rounded-full">Planned</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">SaaS Launch</h3>
                  <p className="text-slate-400 mb-4">
                    Multi-user platform with Clerk authentication, Stripe subscriptions,
                    tiered pricing ($19/$39/$59), team features, and enterprise offerings.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">Clerk</span>
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">Stripe</span>
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">Multi-tenant</span>
                  </div>
                </div>
              </div>

              {/* Future */}
              <div className="relative flex gap-8">
                <div className="w-16 h-16 bg-slate-800 border-4 border-pink-500 rounded-2xl flex items-center justify-center z-10">
                  <Globe className="w-6 h-6 text-pink-400" />
                </div>
                <div className="flex-1 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-pink-500/20 text-pink-400 text-sm rounded-full">Future</span>
                    <span className="text-slate-500 text-sm">2027+</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Global Expansion</h3>
                  <p className="text-slate-400 mb-4">
                    Mobile apps (iOS/Android), additional job sources, international markets,
                    AI interview coaching, salary negotiation tools, and recruiter marketplace.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">Mobile</span>
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">Global</span>
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">Enterprise</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Edge */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Why We'll Win</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Technical Superiority</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">True Semantic Matching</h4>
                    <p className="text-slate-400 text-sm">
                      While competitors use keyword matching, we use 3072-dimension embeddings
                      that understand context, synonyms, and career trajectories.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Brain className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Claude-Powered Intelligence</h4>
                    <p className="text-slate-400 text-sm">
                      Using Claude CLI gives us unlimited AI operations at fixed cost.
                      Competitors either limit AI features or charge per-use.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Multi-Source Aggregation</h4>
                    <p className="text-slate-400 text-sm">
                      We aggregate from Adzuna (16 countries) AND Jooble (60+ countries).
                      More jobs = better matches = happier users.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Business Advantages</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-violet-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">94%+ Profit Margins</h4>
                    <p className="text-slate-400 text-sm">
                      Our cost structure is incredibly efficient. At $39/user, we spend
                      only ~$2.50 in variable costs. Pure margin.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-violet-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Local-First = Privacy-First</h4>
                    <p className="text-slate-400 text-sm">
                      Users can run entirely local, never sending data to the cloud.
                      In a privacy-conscious world, this is a killer feature.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-violet-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Modern Tech Stack</h4>
                    <p className="text-slate-400 text-sm">
                      Built on 2026's best: Flutter 3.38, FastAPI, pgvector, Claude CLI.
                      No legacy code, no technical debt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Long-term Vision */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">The Long-term Vision</h2>
          </div>

          <div className="bg-gradient-to-br from-slate-800/80 via-violet-900/20 to-slate-800/80 backdrop-blur border border-violet-500/20 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Where We're Going</h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="text-3xl">🎯</div>
                    <div>
                      <h4 className="font-bold text-white">The Career Companion</h4>
                      <p className="text-slate-400 text-sm mt-1">
                        Not just job hunting - career management. From first job to executive
                        role, JobHunter Pro grows with you.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-3xl">🌍</div>
                    <div>
                      <h4 className="font-bold text-white">Global Reach</h4>
                      <p className="text-slate-400 text-sm mt-1">
                        Supporting job seekers in every country, every language, every industry.
                        Work knows no borders.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-3xl">🤝</div>
                    <div>
                      <h4 className="font-bold text-white">Two-Sided Marketplace</h4>
                      <p className="text-slate-400 text-sm mt-1">
                        Eventually, recruiters pay to access our high-quality, pre-matched
                        candidate pool. Revenue from both sides.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="text-3xl">🧠</div>
                    <div>
                      <h4 className="font-bold text-white">Career Intelligence</h4>
                      <p className="text-slate-400 text-sm mt-1">
                        Salary insights, skill gap analysis, career path predictions,
                        market timing - powered by aggregate data.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Revenue Goals</h3>

                <div className="space-y-4">
                  <div className="bg-slate-900/50 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-400">Year 1 (2026)</span>
                      <span className="text-emerald-400 font-bold text-xl">$420K ARR</span>
                    </div>
                    <div className="text-sm text-slate-500">1,000 users × $35 avg/mo</div>
                  </div>

                  <div className="bg-slate-900/50 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-400">Year 2 (2027)</span>
                      <span className="text-emerald-400 font-bold text-xl">$2.1M ARR</span>
                    </div>
                    <div className="text-sm text-slate-500">5,000 users × $35 avg/mo</div>
                  </div>

                  <div className="bg-slate-900/50 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-400">Year 3 (2028)</span>
                      <span className="text-emerald-400 font-bold text-xl">$8.4M ARR</span>
                    </div>
                    <div className="text-sm text-slate-500">20,000 users × $35 avg/mo</div>
                  </div>

                  <div className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-xl p-4 border border-violet-500/30">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-violet-300">Year 5 (2030)</span>
                      <span className="text-violet-400 font-bold text-xl">$21M+ ARR</span>
                    </div>
                    <div className="text-sm text-slate-400">50,000 users + Enterprise + Recruiter side</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Our Core Values</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-violet-400" />
              </div>
              <h3 className="font-bold text-white mb-2">Quality First</h3>
              <p className="text-slate-400 text-sm">
                10 perfect applications beat 100 generic ones. We optimize for outcomes, not volume.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="font-bold text-white mb-2">User Empowerment</h3>
              <p className="text-slate-400 text-sm">
                AI suggests, humans decide. We enhance your capabilities, never replace your agency.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="font-bold text-white mb-2">Privacy Respect</h3>
              <p className="text-slate-400 text-sm">
                Your career data is yours. Local-first architecture means your info never leaves your control.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="font-bold text-white mb-2">Continuous Innovation</h3>
              <p className="text-slate-400 text-sm">
                The job market evolves. We evolve faster. Latest AI, best practices, cutting-edge tech.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-slate-700">
          <div className="flex justify-between items-center">
            <a
              href="/research/jobhunter"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              <span>Overview</span>
            </a>
            <a
              href="/research/jobhunter/phase-1"
              className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
            >
              <span>Start Building: Phase I</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
