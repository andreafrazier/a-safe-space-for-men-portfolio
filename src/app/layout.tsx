import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'A Safe Space For Men',
    template: '%s | A Safe Space For Men'
},
description: 'Creating community for men\'s mental health in Detroit and beyond. Breaking barriers, building community, and fostering resilience.',
keywords: ['men\'s mental health', 'Detroit', 'support groups', 'mental wellness', 'community'],
authors: [{ name: 'A Safe Space For Men' }],
creator: 'A Safe Space For Men',
openGraph: {
  type: 'website',
  locale: 'en_US',
  url: 'https://asafespaceformen.org',
  siteName: 'A Safe Space For Men',
  title: 'A Safe Space For Men',
  description: 'Creating community for men\'s mental health in Detroit and beyond. Breaking barriers, building community, and fostering resilience.',
  images: [
    {
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'A Safe Space For Men - Creating community for men\'s mental health',
    },
  ],
},
twitter: {
  card: 'summary_large_image',
  title: 'A Safe Space For Men',
  description: 'Creating community for men\'s mental health in Detroit and beyond.',
  images: ['/images/og-image.jpg'],
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
verification: {
  google: 'your-google-verification-code',
},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
