'use client';

import { motion } from 'framer-motion';
import {
  Cpu,
  Bot,
  FileText,
  Shield,
  CheckCircle2,
  XCircle,
  Zap,
  AlertTriangle,
  Clock,
  Target,
  Code2,
  Layers
} from 'lucide-react';
import Navigation from '../../../components/Navigation';
import Card from '../../../components/Card';

const automationTools = [
  {
    name: 'Playwright',
    verdict: 'RECOMMENDED',
    score: 95,
    description: 'Microsoft\'s browser automation with best-in-class performance and reliability',
    features: [
      'Multi-browser: Chromium, Firefox, WebKit',
      'Auto-wait: No manual sleep/waits needed',
      'Network interception and mocking',
      'Parallel execution built-in',
      'Trace viewer for debugging',
      'Codegen: Record and replay',
    ],
    cons: [
      'Larger bundle than Puppeteer',
      'Learning curve for advanced features',
    ],
    performance: '2-3x faster than Selenium',
    language: 'TypeScript/JavaScript, Python, .NET, Java',
  },
  {
    name: 'Puppeteer',
    verdict: 'GOOD ALTERNATIVE',
    score: 85,
    description: 'Google\'s Chromium automation, mature and well-documented',
    features: [
      'Chrome DevTools Protocol direct access',
      'Lightweight and fast',
      'Excellent for PDF generation',
      'Large ecosystem',
    ],
    cons: [
      'Chrome-only (no Firefox/Safari)',
      'Manual waits often needed',
    ],
    performance: 'Fast for Chrome-only tasks',
    language: 'JavaScript/TypeScript',
  },
  {
    name: 'Selenium 4',
    verdict: 'LEGACY',
    score: 65,
    description: 'Industry standard but showing age',
    features: [
      'Cross-browser support',
      'WebDriver protocol (W3C standard)',
      'Grid for distributed testing',
    ],
    cons: [
      'Slower than modern alternatives',
      'Flaky tests common',
      'Complex setup',
    ],
    performance: 'Slowest of the three',
    language: 'Java, Python, JavaScript, C#, Ruby',
  },
];

const resumeGeneration = [
  {
    name: 'pdfmake',
    verdict: 'RECOMMENDED',
    description: 'Client/server PDF generation with declarative syntax',
    features: [
      'JSON-based document definition',
      'Tables, images, styling',
      'Works in browser and Node.js',
      'No external dependencies',
    ],
    useCase: 'Generate tailored resumes per job title',
  },
  {
    name: 'Puppeteer + HTML',
    verdict: 'ALTERNATIVE',
    description: 'Render HTML templates to PDF',
    features: [
      'Full CSS support',
      'Complex layouts possible',
      'WYSIWYG: design in browser',
    ],
    useCase: 'When you need pixel-perfect control',
  },
  {
    name: 'react-pdf',
    verdict: 'FOR REACT APPS',
    description: 'React components for PDF generation',
    features: [
      'Declarative React syntax',
      'Styled components support',
      'Streaming for large docs',
    ],
    useCase: 'When building React-based resume builder UI',
  },
];

const autoApplyStrategy = {
  tiers: [
    {
      name: 'Ship Plan ($19/mo)',
      type: 'Semi-Automated',
      flow: [
        'User clicks job from dashboard',
        'Embedded browser opens job site',
        'Navigate to Apply button (guided)',
        'Auto-fill form fields from profile',
        'User reviews and clicks Submit',
        'Log application in database',
      ],
      implementation: `// Embedded WebView approach
const webview = new Webview({
  url: jobUrl,
  preload: './autofill-script.js'
});

// Inject autofill on form detection
webview.on('form-detected', (fields) => {
  fields.forEach(f => {
    if (f.type === 'name') f.value = user.name;
    if (f.type === 'email') f.value = user.email;
    if (f.type === 'phone') f.value = user.phone;
    if (f.type === 'resume') f.uploadFile(getResume(job.title));
  });
});`,
    },
    {
      name: 'Auto Plan ($59/mo)',
      type: 'Fully Automated',
      flow: [
        'Background worker picks job from queue',
        'Playwright opens headless browser',
        'Navigate to Apply button',
        'Fill all fields automatically',
        'Handle CAPTCHA (2Captcha/hCaptcha solver)',
        'Submit application',
        'Screenshot proof + log result',
        'Daily email summary to user',
      ],
      implementation: `// Playwright automation
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

await page.goto(job.applyUrl);
await page.waitForSelector('form');

// Fill form fields
await page.fill('[name="name"]', user.name);
await page.fill('[name="email"]', user.email);
await page.setInputFiles('[type="file"]', resume.path);

// Handle CAPTCHA if present
if (await page.$('.captcha')) {
  const solution = await solveCaptcha(page);
  await page.fill('.captcha-input', solution);
}

await page.click('button[type="submit"]');
await page.screenshot({ path: \`proof-\${job.id}.png\` });`,
    },
  ],
};

const antiDetection = [
  {
    technique: 'Browser Fingerprint Rotation',
    description: 'Randomize user-agent, viewport, WebGL renderer',
    tool: 'playwright-extra + stealth plugin',
  },
  {
    technique: 'Residential Proxies',
    description: 'Use real residential IPs to avoid datacenter blocks',
    tool: 'Bright Data, Smartproxy (~$10-15/GB)',
  },
  {
    technique: 'Human-like Delays',
    description: 'Random delays between actions (100-500ms)',
    tool: 'Custom timing functions',
  },
  {
    technique: 'Session Persistence',
    description: 'Maintain cookies/localStorage across runs',
    tool: 'Playwright contexts',
  },
  {
    technique: 'CAPTCHA Solving',
    description: 'Automated CAPTCHA solving service',
    tool: '2Captcha ($2.99/1000), hCaptcha solver',
  },
];

const challenges = [
  {
    challenge: 'CAPTCHA Protection',
    solution: 'Use 2Captcha or hCaptcha solver APIs ($2-3/1000 solves)',
    difficulty: 'Medium',
  },
  {
    challenge: 'Rate Limiting',
    solution: 'Distribute across proxy pool, respect robots.txt delays',
    difficulty: 'Medium',
  },
  {
    challenge: 'Dynamic Forms',
    solution: 'AI-powered field detection with GPT vision or DOM analysis',
    difficulty: 'Hard',
  },
  {
    challenge: 'Login Walls',
    solution: 'Store session cookies, re-authenticate when expired',
    difficulty: 'Medium',
  },
  {
    challenge: 'Job Site Layout Changes',
    solution: 'Selector versioning + automated testing + fallback selectors',
    difficulty: 'Hard',
  },
];

const ethicsCompliance = [
  {
    rule: 'Respect robots.txt',
    description: 'Always check and honor crawl delays',
  },
  {
    rule: 'Rate Limit Requests',
    description: 'Max 1 request per 2-5 seconds per domain',
  },
  {
    rule: 'User Consent',
    description: 'User explicitly opts into auto-apply',
  },
  {
    rule: 'Data Privacy',
    description: 'Encrypt stored credentials, GDPR compliant',
  },
  {
    rule: 'Terms of Service',
    description: 'Inform users about potential ToS violations on some sites',
  },
];

export default function AutomationResearchPage() {
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
            <span className="text-white">Automation</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Job Auto-Apply Automation Research - 2026
          </h1>
          <p className="text-gray-400">
            Browser automation, resume generation, and auto-fill strategies
          </p>
        </motion.div>

        {/* Recommendation */}
        <Card delay={0.1} className="mb-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
              <Bot className="text-purple-400" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Recommendation: Playwright + pdfmake</h2>
              <p className="text-gray-300">
                <strong className="text-purple-400">Playwright</strong> provides the most reliable browser automation
                with auto-wait, multi-browser support, and excellent debugging tools.
                Combined with <strong className="text-purple-400">pdfmake</strong> for dynamic resume generation,
                this stack handles both Ship (semi-auto) and Auto (full-auto) tiers effectively.
              </p>
            </div>
          </div>
        </Card>

        {/* Automation Tools */}
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Cpu className="text-blue-400" size={24} />
          Browser Automation Tools
        </h2>

        <div className="space-y-4 mb-8">
          {automationTools.map((tool, index) => (
            <Card key={tool.name} delay={0.2 + index * 0.1}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-white">{tool.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${
                      tool.verdict === 'RECOMMENDED'
                        ? 'bg-green-500/20 text-green-400'
                        : tool.verdict === 'GOOD ALTERNATIVE'
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-gray-500/20 text-gray-400'
                    }`}>
                      {tool.verdict}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{tool.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-indigo-400">{tool.score}</div>
                  <div className="text-xs text-gray-500">Score</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-green-400 mb-2">Features</h4>
                  <ul className="space-y-1">
                    {tool.features.map((f, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-green-400 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-red-400 mb-2">Limitations</h4>
                  <ul className="space-y-1">
                    {tool.cons.map((c, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                        <XCircle size={14} className="text-red-400 mt-0.5" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-[#262626] flex gap-6">
                <div>
                  <span className="text-xs text-gray-500">Performance: </span>
                  <span className="text-xs text-yellow-400">{tool.performance}</span>
                </div>
                <div>
                  <span className="text-xs text-gray-500">Languages: </span>
                  <span className="text-xs text-gray-300">{tool.language}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Resume Generation */}
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <FileText className="text-green-400" size={24} />
          Resume Generation
        </h2>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {resumeGeneration.map((tool, index) => (
            <Card key={tool.name} delay={0.4 + index * 0.1}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-white">{tool.name}</h3>
                <span className={`text-xs px-2 py-1 rounded ${
                  tool.verdict === 'RECOMMENDED'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {tool.verdict}
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-3">{tool.description}</p>
              <ul className="space-y-1 mb-3">
                {tool.features.map((f, i) => (
                  <li key={i} className="text-xs text-gray-500 flex items-center gap-2">
                    <Zap size={10} className="text-yellow-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-[#262626]">
                <span className="text-xs text-gray-500">Use Case: </span>
                <span className="text-xs text-indigo-400">{tool.useCase}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Auto-Apply Strategy */}
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Target className="text-orange-400" size={24} />
          Auto-Apply Strategy by Tier
        </h2>

        <div className="space-y-6 mb-8">
          {autoApplyStrategy.tiers.map((tier, index) => (
            <Card key={tier.name} delay={0.5 + index * 0.1} className={
              tier.type === 'Fully Automated'
                ? 'ring-2 ring-purple-500/50'
                : ''
            }>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
                <span className={`text-xs px-2 py-1 rounded ${
                  tier.type === 'Fully Automated'
                    ? 'bg-purple-500/20 text-purple-400'
                    : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {tier.type}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Flow</h4>
                  <ol className="space-y-2">
                    {tier.flow.map((step, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 text-xs flex items-center justify-center flex-shrink-0">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Implementation</h4>
                  <pre className="bg-[#0a0a0a] p-3 rounded text-xs text-gray-300 overflow-x-auto max-h-64">
                    {tier.implementation}
                  </pre>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Anti-Detection */}
        <Card delay={0.7} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Shield className="text-red-400" size={20} />
            Anti-Detection Techniques
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {antiDetection.map((tech, index) => (
              <div key={tech.technique} className="p-3 bg-[#1a1a1a] rounded-lg">
                <h4 className="font-medium text-white mb-1">{tech.technique}</h4>
                <p className="text-xs text-gray-500 mb-2">{tech.description}</p>
                <span className="text-xs text-indigo-400">Tool: {tech.tool}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Challenges */}
        <Card delay={0.8} className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <AlertTriangle className="text-yellow-400" size={20} />
            Challenges & Solutions
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#262626]">
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Challenge</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Solution</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-400">Difficulty</th>
                </tr>
              </thead>
              <tbody>
                {challenges.map((item) => (
                  <tr key={item.challenge} className="border-b border-[#262626]/50">
                    <td className="py-3 text-sm text-white">{item.challenge}</td>
                    <td className="py-3 text-sm text-gray-400">{item.solution}</td>
                    <td className="py-3">
                      <span className={`text-xs px-2 py-1 rounded ${
                        item.difficulty === 'Hard'
                          ? 'bg-red-500/20 text-red-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {item.difficulty}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Ethics & Compliance */}
        <Card delay={0.9}>
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Shield className="text-green-400" size={20} />
            Ethics & Compliance Guidelines
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {ethicsCompliance.map((rule) => (
              <div key={rule.rule} className="p-3 bg-[#1a1a1a] rounded-lg border-l-2 border-green-500">
                <h4 className="font-medium text-white mb-1">{rule.rule}</h4>
                <p className="text-xs text-gray-500">{rule.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Research Date */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center text-sm text-gray-500"
        >
          Research conducted: January 2026 | Sources: Playwright docs, 2Captcha, Bright Data
        </motion.div>
      </main>
    </div>
  );
}
