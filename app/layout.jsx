import './globals.css';

export const metadata = {
  title: 'Outreach Docs | v0.0.1',
  description: 'Job Intelligence & Market Intelligence Documentation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
