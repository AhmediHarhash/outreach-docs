'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Chrome,
  Eye,
  FormInput,
  CheckCircle2,
  ArrowRight,
  Code,
  Shield,
  Zap,
  AlertTriangle,
  FileCode,
  Settings,
  Puzzle,
  Layers,
  MousePointer,
  Send,
  XCircle
} from 'lucide-react';
import Navigation from '../../../../components/Navigation';
import Card from '../../../../components/Card';

const extensionFeatures = [
  {
    icon: Eye,
    title: 'Form Detection',
    description: 'Automatically detects job application forms on any website using intelligent field pattern matching.',
  },
  {
    icon: FormInput,
    title: 'Smart Field Mapping',
    description: 'Maps detected form fields to your profile data using label analysis, placeholder text, and field names.',
  },
  {
    icon: Shield,
    title: 'Preview Before Fill',
    description: 'Always shows what will be filled before any action. Review and approve each field individually.',
  },
  {
    icon: Zap,
    title: 'One-Click Fill',
    description: 'After approval, fills all selected fields instantly with proper event dispatching for reactive forms.',
  },
];

const manifestJson = `{
  "manifest_version": 3,
  "name": "JobHunter Pro",
  "version": "1.0.0",
  "description": "Smart job application form filler with preview",

  "permissions": [
    "storage",        // Store user preferences
    "activeTab"       // Access current tab for form filling
  ],

  "host_permissions": [
    "https://jobhunter-api-production.up.railway.app/*"
  ],

  "background": {
    "service_worker": "background.js"
  },

  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content.js"],
      "css": ["styles.css"]
    }
  ],

  "action": {
    "default_popup": "popup/popup.html",
    "default_icon": {
      "16": "icons/icon16.png",
      "48": "icons/icon48.png",
      "128": "icons/icon128.png"
    }
  },

  "icons": {
    "16": "icons/icon16.png",
    "48": "icons/icon48.png",
    "128": "icons/icon128.png"
  }
}`;

const backgroundJs = `/**
 * JobHunter Pro - Background Service Worker
 * Handles communication with backend API
 */

const BACKEND_URL = 'https://jobhunter-api-production.up.railway.app';

/**
 * Get user profile from backend for form filling
 */
async function getProfile() {
  try {
    const response = await fetch(\`\${BACKEND_URL}/api/extension/profile\`);
    if (response.ok) {
      return await response.json();
    }
    throw new Error('Failed to fetch profile');
  } catch (error) {
    console.error('Profile fetch error:', error);
    return null;
  }
}

/**
 * Check if backend is online
 */
async function checkHealth() {
  try {
    const response = await fetch(\`\${BACKEND_URL}/health\`);
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Log application for tracking
 */
async function logApplication(jobData) {
  try {
    await fetch(\`\${BACKEND_URL}/api/applications\`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jobData)
    });
  } catch (error) {
    console.error('Failed to log application:', error);
  }
}

/**
 * Handle messages from content script and popup
 */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.action) {
    case 'getProfile':
      getProfile().then(profile => sendResponse({ profile }));
      return true; // Keep channel open for async

    case 'checkHealth':
      checkHealth().then(online => sendResponse({ online }));
      return true;

    case 'logApplication':
      logApplication(request.data).then(() => sendResponse({ success: true }));
      return true;

    case 'getBackendUrl':
      sendResponse({ url: BACKEND_URL });
      return false;
  }
});

/**
 * Update extension badge based on backend status
 */
async function updateBadge() {
  const online = await checkHealth();

  if (online) {
    chrome.action.setBadgeText({ text: '' });
    chrome.action.setTitle({ title: 'JobHunter Pro - Ready' });
  } else {
    chrome.action.setBadgeText({ text: '!' });
    chrome.action.setBadgeBackgroundColor({ color: '#EF4444' });
    chrome.action.setTitle({ title: 'JobHunter Pro - Backend Offline' });
  }
}

// Check status on startup and periodically
updateBadge();
setInterval(updateBadge, 30000);`;

const contentJs = `/**
 * JobHunter Pro - Content Script
 * Detects and fills job application forms
 */

class FormFiller {
  constructor() {
    this.profile = null;
    this.detectedFields = [];
    this.previewModal = null;
  }

  /**
   * Field detection patterns for common job application fields
   */
  static FIELD_PATTERNS = {
    firstName: /first.?name|given.?name|fname/i,
    lastName: /last.?name|surname|family.?name|lname/i,
    fullName: /^name$|full.?name|your.?name/i,
    email: /email|e-mail/i,
    phone: /phone|mobile|tel|contact.?number/i,
    linkedin: /linkedin/i,
    github: /github/i,
    portfolio: /portfolio|website|personal.?site/i,
    address: /address|street/i,
    city: /city|town/i,
    state: /state|province|region/i,
    zip: /zip|postal|postcode/i,
    country: /country/i,
    currentTitle: /current.?title|job.?title|position/i,
    currentCompany: /current.?company|employer|organization/i,
    experience: /experience|years/i,
    salary: /salary|compensation|expected/i,
    startDate: /start.?date|available|availability/i,
    coverLetter: /cover.?letter/i,
    resume: /resume|cv|upload/i,
  };

  /**
   * Detect all fillable fields on the page
   */
  detectFields() {
    const inputs = document.querySelectorAll('input, textarea, select');
    this.detectedFields = [];

    inputs.forEach(input => {
      // Skip hidden, submit, or already processed fields
      if (
        input.type === 'hidden' ||
        input.type === 'submit' ||
        input.type === 'button' ||
        input.dataset.jobhunterProcessed
      ) {
        return;
      }

      const fieldInfo = this.identifyField(input);
      if (fieldInfo) {
        this.detectedFields.push({
          element: input,
          fieldType: fieldInfo.type,
          label: fieldInfo.label,
          currentValue: input.value,
          suggestedValue: null, // Filled after profile load
        });
        input.dataset.jobhunterProcessed = 'true';
      }
    });

    return this.detectedFields;
  }

  /**
   * Identify what type of field this is
   */
  identifyField(input) {
    // Get all possible identifiers
    const label = this.findLabel(input);
    const placeholder = input.placeholder || '';
    const name = input.name || '';
    const id = input.id || '';
    const ariaLabel = input.getAttribute('aria-label') || '';

    const searchText = \`\${label} \${placeholder} \${name} \${id} \${ariaLabel}\`;

    // Check against patterns
    for (const [fieldType, pattern] of Object.entries(FormFiller.FIELD_PATTERNS)) {
      if (pattern.test(searchText)) {
        return { type: fieldType, label: label || placeholder || name };
      }
    }

    return null;
  }

  /**
   * Find the label associated with an input
   */
  findLabel(input) {
    // Check for explicit label
    if (input.id) {
      const label = document.querySelector(\`label[for="\${input.id}"]\`);
      if (label) return label.textContent.trim();
    }

    // Check for parent label
    const parentLabel = input.closest('label');
    if (parentLabel) {
      return parentLabel.textContent.replace(input.value, '').trim();
    }

    // Check for nearby text
    const parent = input.parentElement;
    if (parent) {
      const text = parent.textContent.replace(input.value, '').trim();
      if (text.length < 100) return text;
    }

    return '';
  }

  /**
   * Load profile and map to detected fields
   */
  async loadProfile() {
    return new Promise((resolve) => {
      chrome.runtime.sendMessage({ action: 'getProfile' }, (response) => {
        if (response?.profile) {
          this.profile = response.profile;
          this.mapProfileToFields();
        }
        resolve(this.profile);
      });
    });
  }

  /**
   * Map profile data to detected fields
   */
  mapProfileToFields() {
    const mapping = {
      firstName: this.profile.first_name,
      lastName: this.profile.last_name,
      fullName: this.profile.full_name,
      email: this.profile.email,
      phone: this.profile.phone,
      linkedin: this.profile.linkedin_url,
      github: this.profile.github_url,
      portfolio: this.profile.portfolio_url,
      address: this.profile.address,
      city: this.profile.city,
      state: this.profile.state,
      zip: this.profile.zip,
      country: this.profile.country,
      currentTitle: this.profile.current_title,
      currentCompany: this.profile.current_company,
      experience: this.profile.experience_years?.toString(),
      salary: this.profile.salary_expectation?.toString(),
    };

    this.detectedFields.forEach(field => {
      field.suggestedValue = mapping[field.fieldType] || '';
    });
  }

  /**
   * Show preview modal before filling
   */
  showPreview() {
    // Remove existing modal if any
    this.hidePreview();

    const modal = document.createElement('div');
    modal.id = 'jobhunter-preview-modal';
    modal.innerHTML = \`
      <div class="jh-modal-backdrop">
        <div class="jh-modal">
          <div class="jh-modal-header">
            <h2>🎯 JobHunter Pro</h2>
            <p>Review the fields to be filled</p>
          </div>
          <div class="jh-modal-body">
            \${this.renderFieldPreviews()}
          </div>
          <div class="jh-modal-footer">
            <button class="jh-btn jh-btn-secondary" id="jh-cancel">Cancel</button>
            <button class="jh-btn jh-btn-primary" id="jh-fill">Fill Selected Fields</button>
          </div>
        </div>
      </div>
    \`;

    document.body.appendChild(modal);
    this.previewModal = modal;

    // Event listeners
    modal.querySelector('#jh-cancel').addEventListener('click', () => this.hidePreview());
    modal.querySelector('#jh-fill').addEventListener('click', () => this.fillApprovedFields());
  }

  /**
   * Render field preview rows
   */
  renderFieldPreviews() {
    return this.detectedFields
      .filter(f => f.suggestedValue)
      .map((field, index) => \`
        <div class="jh-field-row">
          <input type="checkbox" id="jh-field-\${index}" checked>
          <label for="jh-field-\${index}">
            <span class="jh-field-label">\${field.label}</span>
            <span class="jh-field-value">\${field.suggestedValue}</span>
          </label>
        </div>
      \`)
      .join('');
  }

  /**
   * Fill only the fields user approved
   */
  fillApprovedFields() {
    const checkboxes = this.previewModal.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked) {
        const field = this.detectedFields.filter(f => f.suggestedValue)[index];
        if (field && field.element) {
          // Set value
          field.element.value = field.suggestedValue;

          // Dispatch events for reactive frameworks
          field.element.dispatchEvent(new Event('input', { bubbles: true }));
          field.element.dispatchEvent(new Event('change', { bubbles: true }));
          field.element.dispatchEvent(new Event('blur', { bubbles: true }));

          // Highlight filled field
          field.element.style.outline = '2px solid #8B5CF6';
          setTimeout(() => {
            field.element.style.outline = '';
          }, 2000);
        }
      }
    });

    this.hidePreview();
  }

  /**
   * Hide preview modal
   */
  hidePreview() {
    const modal = document.getElementById('jobhunter-preview-modal');
    if (modal) {
      modal.remove();
    }
    this.previewModal = null;
  }
}

// Initialize form filler
const formFiller = new FormFiller();

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'detectForms') {
    const fields = formFiller.detectFields();
    sendResponse({ fieldCount: fields.length });
  }

  if (request.action === 'fillForms') {
    formFiller.loadProfile().then(() => {
      formFiller.showPreview();
      sendResponse({ success: true });
    });
    return true;
  }
});`;

const popupHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JobHunter Pro</title>
  <link rel="stylesheet" href="popup.css">
</head>
<body>
  <div class="container">
    <header>
      <div class="logo">
        <span class="logo-icon">🎯</span>
        <h1>JobHunter Pro</h1>
      </div>
      <div id="status-indicator" class="status"></div>
    </header>

    <main id="content">
      <div class="loading">
        <div class="spinner"></div>
        <p>Checking page...</p>
      </div>
    </main>

    <footer>
      <a href="https://jobhunter-api-production.up.railway.app/docs" target="_blank" class="dashboard-link">
        Open Dashboard →
      </a>
    </footer>
  </div>
  <script src="popup.js"></script>
</body>
</html>`;

const extensionStructure = `chrome-extension/
├── manifest.json              # Extension configuration
├── background.js              # Service worker (API communication)
├── content.js                 # Injected script (form detection/filling)
├── styles.css                 # Injected styles for preview modal
│
├── popup/
│   ├── popup.html             # Extension popup UI
│   ├── popup.js               # Popup logic
│   └── popup.css              # Popup styles
│
└── icons/
    ├── icon16.png             # Toolbar icon
    ├── icon48.png             # Extension page icon
    └── icon128.png            # Chrome Web Store icon`;

export default function Phase3Page() {
  return (
    <div className="min-h-screen flex">
      <Navigation />

      <main className="flex-1 ml-72 p-8 bg-[#0a0a0a]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/research/jobhunter" className="hover:text-white">Documentation</Link>
            <span>/</span>
            <span className="text-purple-400">Phase III: Chrome Extension</span>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
              <Chrome className="text-white" size={28} />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-white">Phase III: Chrome Extension</h1>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">In Development</span>
              </div>
              <p className="text-gray-400 max-w-2xl">
                Manifest V3 Chrome extension for intelligent form detection and auto-filling.
                Always shows a preview before filling—never submits or modifies without explicit user approval.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Key Features */}
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Puzzle className="text-yellow-400" size={24} />
          Key Features
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-10">
          {extensionFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} delay={0.1 + index * 0.1}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-yellow-400" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* How It Works */}
        <Card delay={0.3} className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <MousePointer className="text-purple-400" size={20} />
            How Form Filling Works
          </h2>
          <div className="grid grid-cols-4 gap-4">
            {[
              { step: '1', title: 'Detect', desc: 'Extension scans page for form fields matching job application patterns', icon: Eye },
              { step: '2', title: 'Match', desc: 'Fields are mapped to your profile data using intelligent pattern matching', icon: Layers },
              { step: '3', title: 'Preview', desc: 'Modal shows exactly what will be filled—approve or reject each field', icon: Shield },
              { step: '4', title: 'Fill', desc: 'Only approved fields are filled with proper event handling for all frameworks', icon: Send },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-3">
                    <Icon className="text-purple-400" size={20} />
                  </div>
                  <div className="text-xs text-purple-400 mb-1">Step {item.step}</div>
                  <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Project Structure */}
        <Card delay={0.4} className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Layers className="text-yellow-400" size={20} />
            Extension Structure
          </h2>
          <pre className="bg-[#0a0a0a] p-4 rounded-lg text-xs text-gray-300 overflow-x-auto">
            <code>{extensionStructure}</code>
          </pre>
        </Card>

        {/* Code: manifest.json */}
        <Card delay={0.5} className="mb-6">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <FileCode className="text-green-400" size={20} />
            manifest.json
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            Manifest V3 configuration with minimal permissions—only storage and activeTab required.
          </p>
          <pre className="bg-[#0a0a0a] p-4 rounded-lg text-xs text-gray-300 overflow-x-auto">
            <code>{manifestJson}</code>
          </pre>
        </Card>

        {/* Code: background.js */}
        <Card delay={0.6} className="mb-6">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <FileCode className="text-blue-400" size={20} />
            background.js (Service Worker)
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            Handles communication with the backend API—fetching profiles, checking health, and logging applications.
          </p>
          <pre className="bg-[#0a0a0a] p-4 rounded-lg text-xs text-gray-300 overflow-x-auto">
            <code>{backgroundJs}</code>
          </pre>
        </Card>

        {/* Code: content.js */}
        <Card delay={0.7} className="mb-6">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <FileCode className="text-orange-400" size={20} />
            content.js (Form Detection & Filling)
          </h2>
          <p className="text-sm text-gray-400 mb-4">
            The core form detection and filling logic with preview modal.
          </p>
          <pre className="bg-[#0a0a0a] p-4 rounded-lg text-xs text-gray-300 overflow-x-auto max-h-96">
            <code>{contentJs}</code>
          </pre>
        </Card>

        {/* Code: popup.html */}
        <Card delay={0.8} className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <FileCode className="text-purple-400" size={20} />
            popup/popup.html
          </h2>
          <pre className="bg-[#0a0a0a] p-4 rounded-lg text-xs text-gray-300 overflow-x-auto">
            <code>{popupHtml}</code>
          </pre>
        </Card>

        {/* Safety Features */}
        <Card delay={0.9} className="mb-10 bg-gradient-to-r from-green-500/5 to-emerald-500/5 border-green-500/20">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Shield className="text-green-400" size={20} />
            Safety Features
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-[#1a1a1a] rounded-lg">
              <CheckCircle2 className="text-green-400 mb-2" size={20} />
              <h4 className="font-medium text-white text-sm mb-1">Preview First</h4>
              <p className="text-xs text-gray-400">Always shows what will be filled before any action</p>
            </div>
            <div className="p-4 bg-[#1a1a1a] rounded-lg">
              <CheckCircle2 className="text-green-400 mb-2" size={20} />
              <h4 className="font-medium text-white text-sm mb-1">Per-Field Approval</h4>
              <p className="text-xs text-gray-400">Accept or reject each field individually</p>
            </div>
            <div className="p-4 bg-[#1a1a1a] rounded-lg">
              <CheckCircle2 className="text-green-400 mb-2" size={20} />
              <h4 className="font-medium text-white text-sm mb-1">No Auto-Submit</h4>
              <p className="text-xs text-gray-400">Never clicks submit buttons—you're always in control</p>
            </div>
          </div>
        </Card>

        {/* Next Steps */}
        <Card delay={1.0} className="bg-gradient-to-r from-purple-500/5 to-indigo-500/5 border-purple-500/20">
          <h2 className="text-lg font-semibold text-white mb-4">Next: Phase IV - SaaS Launch</h2>
          <p className="text-sm text-gray-400 mb-4">
            With all core features complete, Phase IV transforms JobHunter Pro into a multi-user SaaS platform
            with authentication, subscription billing, and team features.
          </p>
          <Link
            href="/research/jobhunter/phase-4"
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors"
          >
            Continue to Phase IV <ArrowRight size={16} />
          </Link>
        </Card>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-10 pt-6 border-t border-[#262626] text-center"
        >
          <p className="text-sm text-gray-500">
            Phase III Documentation | Last updated: January 10, 2026
          </p>
        </motion.div>
      </main>
    </div>
  );
}
