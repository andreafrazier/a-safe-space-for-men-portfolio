'use client';
import React from 'react';

const SimpleStats = ({ stats }: { stats: any[] }) => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Challenge We Address</h2>
        <p className="text-lg text-gray-600">Understanding the scope of men's mental health challenges</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">
              {stat.icon}
            </div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.percentage}</div>
            <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SimpleStats;


