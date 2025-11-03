import React from "react";
import type { Metadata } from 'next';
import EventsPageComponent from '@/components/pages/EventsPage';

export const metadata: Metadata = {
  title: 'Events & Gatherings - Support Groups & Workshops | A Safe Space For Men',
  description: 'Join men\'s mental health events in Detroit and beyond. Free support groups, workshops, conferences, and community gatherings. Connect with others in a safe, judgment-free space.',
  keywords: [
    'men\'s support groups Detroit',
    'mental health events Michigan',
    'men\'s wellness workshops',
    'Detroit community gatherings',
    'men\'s mental health conferences',
    'support group meetings',
    'Black men mental health Detroit',
    'men\'s leadership events',
    'free mental health events'
  ],
  openGraph: {
    title: 'Events & Gatherings - Connect with Men\'s Mental Health Community',
    description: 'Join support groups, workshops, and community events focused on men\'s mental health and emotional well-being in Detroit.',
    images: [
      {
        url: '/images/griot1.jpg',
        width: 1200,
        height: 630,
        alt: 'Men connecting and supporting each other through community events and gatherings',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Events & Gatherings - Men\'s Mental Health Support',
    description: 'Support groups, workshops, and community events for men in Detroit. Free and paid options available.',
    images: ['/images/handshake.png'],
  },
};
 export default function EventsPage() {
  return <EventsPageComponent />;
}