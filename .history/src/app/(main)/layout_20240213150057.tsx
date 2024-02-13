import { Header } from '@/components/layouts';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen bg-slate-50">
      <Header />
      {children}
    </div>
  );
}
