// src/app/join/layout.tsx - FIXED VERSION
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join Us | A Safe Space For Men',
  description: 'Join A Safe Space For Men community and become part of a supportive network dedicated to breaking barriers in men\'s mental health.',
};

export default function JoinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}