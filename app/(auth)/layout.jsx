export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-ocean-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">
            <span className="text-accent-500">JobHunter</span>
            <span className="text-text-primary ml-2">Pro</span>
          </h1>
          <p className="text-text-secondary mt-2">AI-powered job hunting assistant</p>
        </div>

        {/* Auth Card */}
        <div className="glass-card p-8">
          {children}
        </div>

        {/* Footer */}
        <p className="text-center text-text-muted text-sm mt-6">
          Quality over quantity. Find your perfect match.
        </p>
      </div>
    </div>
  );
}
