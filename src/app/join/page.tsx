import React from 'react';
import type { Metadata } from 'next';
import JoinUsPage from '@/components/pages/JoinUsPage';

export const metadata: Metadata = {
  title: 'Join Us',
  description: 'Join A Safe Space For Men community and become part of a supportive network dedicated to breaking barriers in men\'s mental health. Connect, grow, and thrive with us.',
  keywords: ['join us', 'men\'s mental health community', 'Detroit support group', 'volunteer opportunities', 'mental health advocacy'],
  openGraph: {
    title: 'Join A Safe Space For Men Community',
    description: 'Take the first step towards prioritizing your mental health and connecting with others on the same journey.',
    images: [
      {
        url: '/images/breakthestigma-green.png',
        width: 1200,
        height: 630,
        alt: 'Join A Safe Space For Men - Community support and mental health advocacy',
      },
    ],
  },
};

export default function JoinPage() {
  return <JoinUsPage />;
}