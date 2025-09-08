'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutPageClient() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-24 bg-gradient-to-br from-emerald-50 to-blue-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <Image 
                src="/images/breakthestigma-green.png"
                alt="Break the Stigma - Green awareness ribbon promoting mental health awareness"
                width={400}
                height={200}
                className="mx-auto mb-8 max-w-md w-full h-auto"
                priority
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About A Safe Space For Men - Test Version
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              This is a minimal test version to isolate import issues.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}