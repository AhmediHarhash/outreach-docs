import AppShell from '@/components/AppShell';

// Mock user data - will be replaced with Supabase auth
const mockUser = {
  name: 'Job Seeker',
  email: 'user@example.com',
};

export default function AppLayout({ children }) {
  return (
    <AppShell user={mockUser}>
      {children}
    </AppShell>
  );
}
