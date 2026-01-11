'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Smartphone,
  Layout,
  User,
  Briefcase,
  FileText,
  MessageSquare,
  Settings,
  Home,
  Search,
  CheckCircle2,
  ArrowRight,
  Code,
  Palette,
  Layers,
  Monitor,
  Cpu,
  Database,
  Zap,
  Star,
  BarChart3
} from 'lucide-react';
import Navigation from '../../../../components/Navigation';
import Card from '../../../../components/Card';

const appScreens = [
  {
    name: 'Onboarding Flow',
    icon: User,
    description: 'Multi-step profile collection with CV upload, LinkedIn integration, and AI interview',
    screens: ['Welcome Screen', 'CV Upload', 'LinkedIn Connect', 'AI Interview Chat', 'Profile Summary'],
  },
  {
    name: 'Dashboard',
    icon: Home,
    description: 'Central hub showing job matches, application pipeline, and activity feed',
    screens: ['Match Score Chart', 'Top Opportunities', 'Pipeline View', 'Quick Actions'],
  },
  {
    name: 'Job Browser',
    icon: Search,
    description: 'Browse and filter jobs with detailed match analysis for each listing',
    screens: ['Job List', 'Filters Panel', 'Job Detail', 'Match Analysis', 'Apply Actions'],
  },
  {
    name: 'Applications',
    icon: Briefcase,
    description: 'Track all applications through the hiring pipeline with notes and reminders',
    screens: ['Kanban Board', 'Application Detail', 'Interview Scheduler', 'Notes & Documents'],
  },
  {
    name: 'Profile Management',
    icon: User,
    description: 'Edit profile, skills, experience, and preferences. Preview generated CVs.',
    screens: ['Profile Editor', 'Skills Manager', 'Experience Editor', 'CV Preview', 'Preferences'],
  },
];

const flutterStructure = `flutter_app/
├── lib/
│   ├── main.dart                     # App entry point
│   ├── app/
│   │   ├── app.dart                  # MaterialApp configuration
│   │   ├── routes.dart               # GoRouter navigation
│   │   └── theme.dart                # App theme (dark mode)
│   │
│   ├── core/
│   │   ├── api/
│   │   │   ├── api_client.dart       # Dio HTTP client
│   │   │   ├── api_endpoints.dart    # Endpoint constants
│   │   │   └── interceptors/
│   │   │       ├── auth_interceptor.dart
│   │   │       └── error_interceptor.dart
│   │   ├── storage/
│   │   │   └── local_storage.dart    # SharedPreferences wrapper
│   │   └── utils/
│   │       ├── extensions.dart       # Dart extensions
│   │       └── validators.dart       # Form validation
│   │
│   ├── features/
│   │   ├── onboarding/
│   │   │   ├── screens/
│   │   │   │   ├── welcome_screen.dart
│   │   │   │   ├── cv_upload_screen.dart
│   │   │   │   ├── linkedin_screen.dart
│   │   │   │   ├── interview_screen.dart    # AI chat interface
│   │   │   │   └── summary_screen.dart
│   │   │   ├── widgets/
│   │   │   │   ├── progress_indicator.dart
│   │   │   │   └── chat_bubble.dart
│   │   │   └── providers/
│   │   │       └── onboarding_provider.dart
│   │   │
│   │   ├── dashboard/
│   │   │   ├── screens/
│   │   │   │   └── dashboard_screen.dart
│   │   │   ├── widgets/
│   │   │   │   ├── match_chart.dart
│   │   │   │   ├── top_jobs_card.dart
│   │   │   │   ├── pipeline_summary.dart
│   │   │   │   └── activity_feed.dart
│   │   │   └── providers/
│   │   │       └── dashboard_provider.dart
│   │   │
│   │   ├── jobs/
│   │   │   ├── screens/
│   │   │   │   ├── job_list_screen.dart
│   │   │   │   └── job_detail_screen.dart
│   │   │   ├── widgets/
│   │   │   │   ├── job_card.dart
│   │   │   │   ├── filter_panel.dart
│   │   │   │   ├── match_badge.dart
│   │   │   │   └── analysis_card.dart
│   │   │   └── providers/
│   │   │       └── jobs_provider.dart
│   │   │
│   │   ├── applications/
│   │   │   ├── screens/
│   │   │   │   ├── applications_screen.dart
│   │   │   │   └── application_detail_screen.dart
│   │   │   ├── widgets/
│   │   │   │   ├── kanban_board.dart
│   │   │   │   ├── application_card.dart
│   │   │   │   └── status_chip.dart
│   │   │   └── providers/
│   │   │       └── applications_provider.dart
│   │   │
│   │   └── profile/
│   │       ├── screens/
│   │       │   ├── profile_screen.dart
│   │       │   └── cv_preview_screen.dart
│   │       ├── widgets/
│   │       │   ├── skill_chip.dart
│   │       │   ├── experience_card.dart
│   │       │   └── cv_document.dart
│   │       └── providers/
│   │           └── profile_provider.dart
│   │
│   └── shared/
│       ├── models/
│       │   ├── user_profile.dart
│       │   ├── job_listing.dart
│       │   ├── application.dart
│       │   └── match_analysis.dart
│       └── widgets/
│           ├── loading_indicator.dart
│           ├── error_dialog.dart
│           ├── custom_button.dart
│           └── animated_card.dart
│
├── pubspec.yaml
├── windows/                          # Windows platform config
├── macos/                            # macOS platform config
└── linux/                            # Linux platform config`;

const dependencies = [
  { name: 'flutter_riverpod', version: '^2.5.0', purpose: 'State management with code generation' },
  { name: 'dio', version: '^5.4.0', purpose: 'HTTP client for API calls' },
  { name: 'go_router', version: '^14.0.0', purpose: 'Declarative routing' },
  { name: 'file_picker', version: '^8.0.0', purpose: 'CV file upload (PDF, DOCX)' },
  { name: 'syncfusion_flutter_pdf', version: '^24.0.0', purpose: 'PDF text extraction' },
  { name: 'fl_chart', version: '^0.68.0', purpose: 'Beautiful charts for dashboard' },
  { name: 'shared_preferences', version: '^2.2.0', purpose: 'Local key-value storage' },
  { name: 'url_launcher', version: '^6.2.0', purpose: 'Open job URLs in browser' },
  { name: 'flutter_markdown', version: '^0.7.0', purpose: 'Render markdown in CV preview' },
  { name: 'animations', version: '^2.0.0', purpose: 'Page transitions and micro-interactions' },
];

const codeExamples = {
  interviewScreen: `class InterviewScreen extends ConsumerStatefulWidget {
  const InterviewScreen({super.key});

  @override
  ConsumerState<InterviewScreen> createState() => _InterviewScreenState();
}

class _InterviewScreenState extends ConsumerState<InterviewScreen> {
  final _messageController = TextEditingController();
  final _scrollController = ScrollController();
  bool _isLoading = false;

  @override
  Widget build(BuildContext context) {
    final interviewState = ref.watch(interviewProvider);

    return Scaffold(
      backgroundColor: const Color(0xFF0A0A0A),
      appBar: AppBar(
        title: const Text('AI Interview'),
        backgroundColor: const Color(0xFF141414),
        actions: [
          // Progress indicator
          Padding(
            padding: const EdgeInsets.all(16),
            child: Text(
              'Building profile: \${interviewState.progress}%',
              style: TextStyle(color: Colors.purple.shade300),
            ),
          ),
        ],
      ),
      body: Column(
        children: [
          // Chat messages
          Expanded(
            child: ListView.builder(
              controller: _scrollController,
              padding: const EdgeInsets.all(16),
              itemCount: interviewState.messages.length,
              itemBuilder: (context, index) {
                final message = interviewState.messages[index];
                return ChatBubble(
                  message: message,
                  isUser: message.role == 'user',
                );
              },
            ),
          ),

          // Input area
          Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: const Color(0xFF141414),
              border: Border(
                top: BorderSide(color: Colors.grey.shade800),
              ),
            ),
            child: Row(
              children: [
                Expanded(
                  child: TextField(
                    controller: _messageController,
                    decoration: InputDecoration(
                      hintText: 'Type your response...',
                      filled: true,
                      fillColor: const Color(0xFF1A1A1A),
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(12),
                        borderSide: BorderSide.none,
                      ),
                    ),
                    maxLines: 3,
                    minLines: 1,
                  ),
                ),
                const SizedBox(width: 12),
                IconButton(
                  onPressed: _isLoading ? null : _sendMessage,
                  icon: _isLoading
                      ? const CircularProgressIndicator()
                      : const Icon(Icons.send, color: Colors.purple),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Future<void> _sendMessage() async {
    final message = _messageController.text.trim();
    if (message.isEmpty) return;

    setState(() => _isLoading = true);
    _messageController.clear();

    try {
      await ref.read(interviewProvider.notifier).sendResponse(message);
      _scrollToBottom();
    } finally {
      setState(() => _isLoading = false);
    }
  }

  void _scrollToBottom() {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      _scrollController.animateTo(
        _scrollController.position.maxScrollExtent,
        duration: const Duration(milliseconds: 300),
        curve: Curves.easeOut,
      );
    });
  }
}`,
  jobCard: `class JobCard extends StatelessWidget {
  final Job job;
  final double matchScore;
  final VoidCallback onTap;

  const JobCard({
    super.key,
    required this.job,
    required this.matchScore,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        margin: const EdgeInsets.only(bottom: 12),
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: const Color(0xFF141414),
          borderRadius: BorderRadius.circular(16),
          border: Border.all(
            color: Colors.grey.shade800,
          ),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Header with match score
            Row(
              children: [
                Expanded(
                  child: Text(
                    job.title,
                    style: const TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  ),
                ),
                MatchBadge(score: matchScore),
              ],
            ),
            const SizedBox(height: 8),

            // Company & Location
            Row(
              children: [
                Icon(Icons.business, size: 14, color: Colors.grey.shade500),
                const SizedBox(width: 4),
                Text(
                  job.company,
                  style: TextStyle(color: Colors.grey.shade400),
                ),
                const SizedBox(width: 16),
                Icon(Icons.location_on, size: 14, color: Colors.grey.shade500),
                const SizedBox(width: 4),
                Text(
                  job.location,
                  style: TextStyle(color: Colors.grey.shade400),
                ),
              ],
            ),
            const SizedBox(height: 12),

            // Description preview
            Text(
              job.description,
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(
                color: Colors.grey.shade500,
                fontSize: 13,
              ),
            ),
            const SizedBox(height: 12),

            // Footer with salary and source
            Row(
              children: [
                if (job.salaryMax != null) ...[
                  Container(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 8,
                      vertical: 4,
                    ),
                    decoration: BoxDecoration(
                      color: Colors.green.withOpacity(0.1),
                      borderRadius: BorderRadius.circular(6),
                    ),
                    child: Text(
                      '£\${job.salaryMin?.toStringAsFixed(0) ?? "?"} - £\${job.salaryMax?.toStringAsFixed(0)}',
                      style: TextStyle(
                        color: Colors.green.shade400,
                        fontSize: 12,
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                  ),
                ],
                const Spacer(),
                Text(
                  'via \${job.source}',
                  style: TextStyle(
                    color: Colors.grey.shade600,
                    fontSize: 11,
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

class MatchBadge extends StatelessWidget {
  final double score;

  const MatchBadge({super.key, required this.score});

  @override
  Widget build(BuildContext context) {
    final color = score >= 0.85
        ? Colors.green
        : score >= 0.70
            ? Colors.yellow
            : Colors.orange;

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
      decoration: BoxDecoration(
        color: color.withOpacity(0.15),
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: color.withOpacity(0.3)),
      ),
      child: Text(
        '\${(score * 100).toInt()}% match',
        style: TextStyle(
          color: color,
          fontWeight: FontWeight.bold,
          fontSize: 12,
        ),
      ),
    );
  }
}`,
  provider: `// Riverpod provider for interview state management

@riverpod
class Interview extends _\$Interview {
  @override
  InterviewState build() => InterviewState.initial();

  Future<void> startInterview() async {
    state = state.copyWith(isLoading: true);

    try {
      final response = await ref
          .read(apiClientProvider)
          .post('/api/interview/start');

      final question = response.data['question'];

      state = state.copyWith(
        isLoading: false,
        messages: [
          ChatMessage(
            role: 'assistant',
            content: question,
            timestamp: DateTime.now(),
          ),
        ],
      );
    } catch (e) {
      state = state.copyWith(
        isLoading: false,
        error: e.toString(),
      );
    }
  }

  Future<void> sendResponse(String message) async {
    // Add user message
    state = state.copyWith(
      messages: [
        ...state.messages,
        ChatMessage(
          role: 'user',
          content: message,
          timestamp: DateTime.now(),
        ),
      ],
      isLoading: true,
    );

    try {
      final response = await ref
          .read(apiClientProvider)
          .post('/api/interview/respond', data: {
        'message': message,
        'session_id': state.sessionId,
      });

      final nextQuestion = response.data['question'];
      final isComplete = response.data['is_complete'] ?? false;
      final progress = response.data['progress'] ?? state.progress;

      if (isComplete) {
        state = state.copyWith(
          isLoading: false,
          isComplete: true,
          progress: 100,
        );
      } else {
        state = state.copyWith(
          isLoading: false,
          progress: progress,
          messages: [
            ...state.messages,
            ChatMessage(
              role: 'assistant',
              content: nextQuestion,
              timestamp: DateTime.now(),
            ),
          ],
        );
      }
    } catch (e) {
      state = state.copyWith(
        isLoading: false,
        error: e.toString(),
      );
    }
  }
}

@freezed
class InterviewState with _\$InterviewState {
  const factory InterviewState({
    required String sessionId,
    required List<ChatMessage> messages,
    required int progress,
    required bool isLoading,
    required bool isComplete,
    String? error,
  }) = _InterviewState;

  factory InterviewState.initial() => InterviewState(
        sessionId: '',
        messages: [],
        progress: 0,
        isLoading: false,
        isComplete: false,
      );
}`,
};

export default function Phase2Page() {
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
            <span className="text-purple-400">Phase II: Desktop App</span>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
              <Smartphone className="text-white" size={28} />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-white">Phase II: Desktop Application</h1>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">In Development</span>
              </div>
              <p className="text-gray-400 max-w-2xl">
                Cross-platform Flutter desktop application providing a beautiful, intuitive interface for profile management,
                job browsing, AI interviews, and application tracking.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <Card delay={0.1} className="mb-8 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border-blue-500/20">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-white mb-2">Technology Stack</h3>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-[#1a1a1a] rounded-lg text-blue-400 text-sm">Flutter 3.38</span>
                <span className="px-3 py-1 bg-[#1a1a1a] rounded-lg text-purple-400 text-sm">Riverpod 2.5</span>
                <span className="px-3 py-1 bg-[#1a1a1a] rounded-lg text-green-400 text-sm">Go Router</span>
                <span className="px-3 py-1 bg-[#1a1a1a] rounded-lg text-orange-400 text-sm">Dio</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] rounded-lg">
                <Monitor size={16} className="text-blue-400" />
                <span className="text-sm text-gray-400">Windows</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] rounded-lg">
                <Monitor size={16} className="text-gray-400" />
                <span className="text-sm text-gray-400">macOS</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] rounded-lg">
                <Monitor size={16} className="text-gray-400" />
                <span className="text-sm text-gray-400">Linux</span>
              </div>
            </div>
          </div>
        </Card>

        {/* App Screens Overview */}
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Layout className="text-blue-400" size={24} />
          Application Screens
        </h2>
        <p className="text-gray-400 mb-6">
          The desktop app is organized into five main feature areas, each with multiple screens and components.
        </p>

        <div className="space-y-4 mb-10">
          {appScreens.map((screen, index) => {
            const Icon = screen.icon;
            return (
              <Card key={screen.name} delay={0.2 + index * 0.1}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-blue-400" size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1">{screen.name}</h3>
                    <p className="text-sm text-gray-400 mb-3">{screen.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {screen.screens.map((s, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-[#1a1a1a] text-gray-300 rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Project Structure */}
        <Card delay={0.5} className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Layers className="text-yellow-400" size={20} />
            Project Structure
          </h2>
          <pre className="bg-[#0a0a0a] p-4 rounded-lg text-xs text-gray-300 overflow-x-auto">
            <code>{flutterStructure}</code>
          </pre>
        </Card>

        {/* Dependencies */}
        <Card delay={0.6} className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Code className="text-green-400" size={20} />
            Key Dependencies (pubspec.yaml)
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {dependencies.map((dep) => (
              <div key={dep.name} className="p-3 bg-[#1a1a1a] rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <code className="text-sm text-cyan-400">{dep.name}</code>
                  <span className="text-xs text-gray-500">{dep.version}</span>
                </div>
                <p className="text-xs text-gray-400">{dep.purpose}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Code Examples */}
        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
          <Code className="text-cyan-400" size={24} />
          Code Examples
        </h2>

        <Card delay={0.7} className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">AI Interview Screen</h3>
          <p className="text-sm text-gray-400 mb-4">
            The interview screen provides a chat-like interface where Claude asks questions to build the user's profile.
          </p>
          <pre className="bg-[#0a0a0a] p-4 rounded-lg text-xs text-gray-300 overflow-x-auto">
            <code>{codeExamples.interviewScreen}</code>
          </pre>
        </Card>

        <Card delay={0.8} className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">Job Card Widget</h3>
          <p className="text-sm text-gray-400 mb-4">
            Reusable job card component with match score badge and key information.
          </p>
          <pre className="bg-[#0a0a0a] p-4 rounded-lg text-xs text-gray-300 overflow-x-auto">
            <code>{codeExamples.jobCard}</code>
          </pre>
        </Card>

        <Card delay={0.9} className="mb-10">
          <h3 className="text-lg font-semibold text-white mb-4">Riverpod Provider</h3>
          <p className="text-sm text-gray-400 mb-4">
            State management for the interview feature using Riverpod with code generation.
          </p>
          <pre className="bg-[#0a0a0a] p-4 rounded-lg text-xs text-gray-300 overflow-x-auto">
            <code>{codeExamples.provider}</code>
          </pre>
        </Card>

        {/* Design System */}
        <Card delay={1.0} className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Palette className="text-purple-400" size={20} />
            Design System
          </h2>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-3">Colors</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-[#0a0a0a] border border-[#262626]"></div>
                  <span className="text-xs text-gray-400">Background #0A0A0A</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-[#141414] border border-[#262626]"></div>
                  <span className="text-xs text-gray-400">Surface #141414</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-purple-500"></div>
                  <span className="text-xs text-gray-400">Primary Purple</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-green-500"></div>
                  <span className="text-xs text-gray-400">Success Green</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-3">Typography</h4>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-white">Heading</p>
                <p className="text-base text-white">Body Text</p>
                <p className="text-sm text-gray-400">Secondary</p>
                <p className="text-xs text-gray-500">Caption</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-400 mb-3">Components</h4>
              <div className="space-y-2">
                <button className="px-4 py-2 bg-purple-500 text-white rounded-lg text-sm">Primary Button</button>
                <button className="px-4 py-2 bg-[#1a1a1a] text-gray-300 rounded-lg text-sm border border-[#262626]">Secondary</button>
                <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs inline-block">Badge</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Next Steps */}
        <Card delay={1.1} className="bg-gradient-to-r from-purple-500/5 to-indigo-500/5 border-purple-500/20">
          <h2 className="text-lg font-semibold text-white mb-4">Next: Phase III - Chrome Extension</h2>
          <p className="text-sm text-gray-400 mb-4">
            With the desktop app providing a beautiful interface, Phase III adds the Chrome extension for
            smart form detection and auto-filling when applying to jobs.
          </p>
          <Link
            href="/research/jobhunter/phase-3"
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors"
          >
            Continue to Phase III <ArrowRight size={16} />
          </Link>
        </Card>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10 pt-6 border-t border-[#262626] text-center"
        >
          <p className="text-sm text-gray-500">
            Phase II Documentation | Last updated: January 10, 2026
          </p>
        </motion.div>
      </main>
    </div>
  );
}
