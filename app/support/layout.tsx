import { Header } from '@/app/components/header';

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-white">
        {children}
      </main>
    </>
  );
} 