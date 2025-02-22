import { Header } from '@/app/components/header';
import { AnimatedBackground } from '@/app/components/animated-background';

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <main className="min-h-screen pt-24 pb-12 bg-white/80 dark:bg-gray-950">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article className="prose prose-gray dark:prose-invert max-w-none">
            {children}
          </article>
        </div>
      </main>
    </>
  );
} 