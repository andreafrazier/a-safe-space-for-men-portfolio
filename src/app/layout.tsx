import React from 'react';
import { Inter } from 'next/font/google';
import type { Metadata } from "next";
import "./globals.css";
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://asafespaceformen.org'), 
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
    url: 'https://asafespaceformen.org', // Update with your actual domain
    siteName: 'A Safe Space For Men',
    title: 'A Safe Space For Men',
    description: 'Creating community for men\'s mental health in Detroit and beyond. Breaking barriers, building community, and fostering resilience.',
    images: [
      {
        url: '/images/breakthestigma-green.png', // Use an existing image
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
    images: ['/images/breakthestigma-green.png'], // Use an existing image
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
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}