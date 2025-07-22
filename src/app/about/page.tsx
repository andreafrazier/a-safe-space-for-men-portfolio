import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about A Safe Space For Men, our mission to create supportive communities for men\'s mental health in Detroit and beyond. Meet our leadership team and discover our impact.',
  keywords: ['about us', 'men\'s mental health', 'Detroit community', 'leadership team', 'mission', 'vision'],
  openGraph: {
    title: 'About A Safe Space For Men',
    description: 'Breaking barriers, building community, and fostering resilience in men\'s mental health across Detroit and beyond.',
    images: [
      {
        url: '/images/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'A Safe Space For Men leadership team and community impact',
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}