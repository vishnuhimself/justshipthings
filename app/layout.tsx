import type { Metadata } from 'next';
import { Space_Grotesk, Outfit } from 'next/font/google';
import { ThemeProvider } from './components/theme-provider';
import { GoogleAnalytics } from './components/google-analytics';
import { FloatingMenu } from './components/floating-menu';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://justshipthings.com'),
  title: {
    default: 'Just Ship Things',
    template: '%s | Just Ship Things',
  },
  description: 'A showcase of products shipped with passion and purpose.',
  keywords: ['portfolio', 'products', 'startup', 'indie hacker', 'software', 'apps'],
  authors: [{ name: 'JustShipThings' }],
  creator: 'JustShipThings',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://justshipthings.com',
    title: 'Just Ship Things',
    description: 'A showcase of products shipped with passion and purpose.',
    siteName: 'JustShipThings',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'JustShipThings - A Portfolio of Shipped Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JustShipThings | A Portfolio of Shipped Products',
    description: 'A showcase of products shipped with passion and purpose.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
      </head>
      <body className={`${spaceGrotesk.variable} ${outfit.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="justshipthings-theme"
        >
          {children}
          <FloatingMenu />
        </ThemeProvider>
      </body>
    </html>
  );
}
