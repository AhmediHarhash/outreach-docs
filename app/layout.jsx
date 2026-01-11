import './globals.css';

export const metadata = {
  title: 'JobHunter Pro | AI-Powered Job Search',
  description: 'Find your perfect job with AI-powered matching, semantic search, and personalized recommendations.',
  keywords: ['job search', 'AI', 'job hunting', 'career', 'job matching'],
  openGraph: {
    title: 'JobHunter Pro | AI-Powered Job Search',
    description: 'Find your perfect job with AI-powered matching.',
    url: 'https://outreach.hekax.com',
    siteName: 'JobHunter Pro',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
