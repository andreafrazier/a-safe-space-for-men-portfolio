import React from 'react';
import type { Metadata } from 'next';
import StartHerePageComponent from '@/components/pages/StartHerePage';

export const metadata: Metadata = {
  title: 'Start Here - Find the Right Support | A Safe Space For Men',
  description: 'Not sure where to start with your mental health? Take free assessments, explore support options, and find the right path forward. For men in Detroit dealing with stress, anxiety, depression, and life\'s challenges.',
  keywords: [
    'mental health assessment',
    'depression screening',
    'anxiety test',
    'men\'s mental health',
    'Detroit support',
    'where to start',
    'mental health help',
    'support groups'
  ],
  openGraph: {
    title: 'Start Here - Find Your Path to Better Mental Health',
    description: 'Free mental health assessments and personalized support options for men. Take the first step toward better emotional well-being.',
    images: [
      {
        url: '/images/handshake.png',
        width: 1200,
        height: 630,
        alt: 'Men supporting each other through mental health challenges',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Start Here - Mental Health Support for Men',
    description: 'Free assessments, support options, and guidance for men\'s mental health in Detroit.',
    images: ['/images/handshake.png'],
  },
};

export default function StartHerePage() {
  return <StartHerePageComponent />;
}