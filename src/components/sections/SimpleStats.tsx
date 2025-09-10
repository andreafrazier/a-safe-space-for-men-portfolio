'use client';
import React from 'react';

const SimpleStats = ({ stats }: { stats: any[] }) => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
      <div className="grid grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold">{stat.percentage}</div>
            <p>{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SimpleStats;
