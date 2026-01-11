'use client';

import { useState } from 'react';
import { Sparkles, ArrowRight, ArrowLeft, Upload, CheckCircle, User, Briefcase, Target, FileText } from 'lucide-react';

const steps = [
  { id: 'welcome', title: 'Welcome', icon: Sparkles },
  { id: 'cv', title: 'CV Upload', icon: FileText },
  { id: 'experience', title: 'Experience', icon: Briefcase },
  { id: 'skills', title: 'Skills', icon: Target },
  { id: 'preferences', title: 'Preferences', icon: User },
  { id: 'complete', title: 'Complete', icon: CheckCircle },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [aiMessages, setAiMessages] = useState([
    { role: 'assistant', content: "Hi! I'm your AI job hunting assistant. I'll help you build a profile that attracts the right opportunities. Let's start by learning about your background. What's your current or most recent job title?" }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    // Add user message
    setAiMessages(prev => [...prev, { role: 'user', content: userInput }]);
    setUserInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setAiMessages(prev => [...prev, {
        role: 'assistant',
        content: "Great! That's helpful. Now, could you tell me about your key skills and technologies you work with? What are you most proficient in?"
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const currentStepData = steps[currentStep];

  return (
    <div className="min-h-full flex">
      {/* Sidebar Progress */}
      <div className="w-64 bg-ocean-800 border-r border-ocean-600 p-6">
        <h2 className="text-lg font-semibold text-text-primary mb-6">Setup Progress</h2>

        <div className="space-y-2">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${
                index === currentStep
                  ? 'bg-accent-500/20 text-accent-400'
                  : index < currentStep
                  ? 'text-success-400'
                  : 'text-text-muted'
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                index < currentStep
                  ? 'bg-success-500/20'
                  : index === currentStep
                  ? 'bg-accent-500/20'
                  : 'bg-ocean-700'
              }`}>
                {index < currentStep ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <step.icon className="w-4 h-4" />
                )}
              </div>
              <span className="text-sm font-medium">{step.title}</span>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <div className="text-sm text-text-muted mb-2">Overall Progress</div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
          <div className="text-xs text-text-muted mt-1">
            Step {currentStep + 1} of {steps.length}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-ocean-600">
          <h1 className="text-2xl font-bold text-text-primary">{currentStepData.title}</h1>
          <p className="text-text-secondary mt-1">
            {currentStep === 0 && "Let's get to know you better"}
            {currentStep === 1 && "Upload your CV for instant profile creation"}
            {currentStep === 2 && "Tell us about your work experience"}
            {currentStep === 3 && "What are your top skills?"}
            {currentStep === 4 && "Set your job preferences"}
            {currentStep === 5 && "Your profile is ready!"}
          </p>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-6">
          {currentStep === 0 && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="glass-card p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-accent-500/20 flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-10 h-10 text-accent-400" />
                </div>
                <h2 className="text-xl font-bold text-text-primary mb-2">
                  Welcome to JobHunter Pro
                </h2>
                <p className="text-text-secondary mb-6">
                  I'll guide you through a quick interview to understand your background,
                  skills, and what you're looking for. This helps me find perfect job matches for you.
                </p>
                <button
                  onClick={() => setCurrentStep(1)}
                  className="btn-primary"
                >
                  Let's Get Started
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="glass-card p-8">
                <h3 className="text-lg font-semibold text-text-primary mb-4">Upload Your CV</h3>
                <p className="text-text-secondary mb-6">
                  Upload your CV and I'll automatically extract your experience, skills, and education.
                  You can review and edit everything afterwards.
                </p>

                <div className="border-2 border-dashed border-ocean-600 rounded-xl p-8 text-center hover:border-accent-500/50 transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 text-text-muted mx-auto mb-4" />
                  <p className="text-text-primary font-medium">Drop your CV here</p>
                  <p className="text-text-muted text-sm mt-1">or click to browse</p>
                  <p className="text-text-muted text-xs mt-4">Supports PDF, DOCX, TXT</p>
                </div>

                <div className="mt-6 text-center">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="text-text-secondary hover:text-accent-400 text-sm"
                  >
                    Skip for now, I'll enter manually →
                  </button>
                </div>
              </div>
            </div>
          )}

          {(currentStep === 2 || currentStep === 3 || currentStep === 4) && (
            <div className="max-w-3xl mx-auto">
              {/* AI Chat Interface */}
              <div className="glass-card h-[500px] flex flex-col">
                {/* Messages */}
                <div className="flex-1 overflow-auto p-6 space-y-4">
                  {aiMessages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                          msg.role === 'user'
                            ? 'bg-accent-500 text-white rounded-br-md'
                            : 'bg-ocean-700 text-text-primary rounded-bl-md'
                        }`}
                      >
                        {msg.role === 'assistant' && (
                          <div className="flex items-center gap-2 mb-1">
                            <Sparkles className="w-4 h-4 text-accent-400" />
                            <span className="text-xs text-accent-400 font-medium">AI Assistant</span>
                          </div>
                        )}
                        <p className="text-sm">{msg.content}</p>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-ocean-700 px-4 py-3 rounded-2xl rounded-bl-md">
                        <div className="flex gap-1">
                          <span className="w-2 h-2 bg-text-muted rounded-full animate-bounce" />
                          <span className="w-2 h-2 bg-text-muted rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                          <span className="w-2 h-2 bg-text-muted rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input */}
                <div className="p-4 border-t border-ocean-600">
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Type your answer..."
                      className="input flex-1"
                    />
                    <button
                      onClick={handleSendMessage}
                      className="btn-primary"
                      disabled={!userInput.trim() || isTyping}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="glass-card p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-success-500/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-success-400" />
                </div>
                <h2 className="text-xl font-bold text-text-primary mb-2">
                  You're All Set!
                </h2>
                <p className="text-text-secondary mb-6">
                  Your profile is complete. I'm already searching for jobs that match your
                  skills and preferences. Let's find your dream job!
                </p>
                <div className="flex gap-3 justify-center">
                  <a href="/profile" className="btn-secondary">
                    View Profile
                  </a>
                  <a href="/dashboard" className="btn-primary">
                    Go to Dashboard
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="p-6 border-t border-ocean-600 flex justify-between">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            className="btn-ghost"
            disabled={currentStep === 0}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          {currentStep < steps.length - 1 && currentStep > 0 && (
            <button
              onClick={() => setCurrentStep(currentStep + 1)}
              className="btn-primary"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
