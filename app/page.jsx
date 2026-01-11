import Link from 'next/link';
import { ArrowRight, Sparkles, Target, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Matching',
    description: 'Our AI analyzes your skills and experience to find jobs that actually match what you\'re looking for.',
  },
  {
    icon: Target,
    title: 'Quality Over Quantity',
    description: 'Stop applying to hundreds of jobs. We surface the top opportunities that fit your profile.',
  },
  {
    icon: Zap,
    title: 'Smart Applications',
    description: 'Auto-fill forms, generate tailored cover letters, and track all your applications in one place.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your data stays yours. We never share your information with third parties without consent.',
  },
];

const stats = [
  { value: '94%', label: 'Average Match Accuracy' },
  { value: '3x', label: 'Faster Job Search' },
  { value: '10K+', label: 'Jobs Analyzed Daily' },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-ocean-900">
      {/* Navigation */}
      <nav className="border-b border-ocean-600">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-accent-500">JobHunter</span>
            <span className="text-xl font-light text-text-primary">Pro</span>
          </Link>

          <div className="flex items-center gap-4">
            <Link href="/login" className="text-text-secondary hover:text-text-primary transition-colors">
              Sign In
            </Link>
            <Link href="/signup" className="btn-primary">
              Get Started Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/30 mb-8">
            <Sparkles className="w-4 h-4 text-accent-400" />
            <span className="text-sm text-accent-400">AI-Powered Job Matching</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6 leading-tight">
            Find Your{' '}
            <span className="gradient-text">Dream Job</span>
            <br />
            Without the Grind
          </h1>

          <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
            Stop mass-applying to jobs that don't fit. Our AI analyzes your profile and finds
            opportunities where you'll actually succeed. Quality over quantity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="btn-primary text-lg px-8 py-3">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#features" className="btn-secondary text-lg px-8 py-3">
              See How It Works
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-accent-400">{stat.value}</p>
                <p className="text-sm text-text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-ocean-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Job Hunting, Reimagined
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              We combine AI with human insight to make your job search smarter, faster, and more effective.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="glass-card p-8">
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-accent-400" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Three Steps to Your Next Role
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Build Your Profile',
                description: 'Upload your CV or chat with our AI to create a comprehensive profile of your skills and goals.',
              },
              {
                step: '02',
                title: 'Get Matched',
                description: 'Our AI scans thousands of jobs daily and ranks them by how well they match your profile.',
              },
              {
                step: '03',
                title: 'Apply Smart',
                description: 'Use our tools to create tailored applications and track your progress through the pipeline.',
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <span className="text-6xl font-bold text-ocean-700 absolute -top-4 -left-2">{item.step}</span>
                <div className="relative pt-8">
                  <h3 className="text-xl font-semibold text-text-primary mb-2">{item.title}</h3>
                  <p className="text-text-secondary">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-ocean-800/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Ready to Find Your Perfect Job?
          </h2>
          <p className="text-text-secondary mb-8">
            Join thousands of job seekers who've found better opportunities with less effort.
          </p>
          <Link href="/signup" className="btn-primary text-lg px-8 py-3 inline-flex">
            Start Your Free Trial
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-text-muted text-sm mt-4">No credit card required • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-ocean-600">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-accent-500">JobHunter</span>
            <span className="text-xl font-light text-text-primary">Pro</span>
          </div>

          <div className="flex gap-6 text-sm text-text-muted">
            <Link href="/privacy" className="hover:text-text-primary transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-text-primary transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-text-primary transition-colors">Contact</Link>
          </div>

          <p className="text-sm text-text-muted">
            © 2026 JobHunter Pro. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
