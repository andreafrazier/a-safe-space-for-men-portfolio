import React from 'react';
import type { Metadata } from 'next';
import TherapistsPageComponent from '@/components/pages/TherapistsPage';

export const metadata: Metadata = {
  title: 'Mental Health Resources',
  description: 'Comprehensive mental health resources for men in Detroit and beyond. Find therapy, support groups, addiction treatment, crisis support, and more.',
  keywords: ['mental health resources', 'Detroit therapy', 'men\'s counseling', 'addiction treatment', 'crisis support', 'support groups'],
  openGraph: {
    title: 'Mental Health Resources - A Safe Space For Men',
    description: 'Find the mental health support you need. Comprehensive directory of therapy, support groups, and crisis resources for men.',
    images: [
      {
        url: '/images/og-resources.jpg',
        width: 1200,
        height: 630,
        alt: 'Mental health resources and support for men in Detroit',
      },
    ],
  },
};

export default function ResourcesPage() {
  return <TherapistsPageComponent />;
}