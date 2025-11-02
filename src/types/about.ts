import React from 'react';

export interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: string;
  bio: string;
  email?: string;
  linkedin?: string;
}

export interface FocusArea {
  icon: React.ReactNode;
  title: string;
  description: string;
  initiatives: string[];
}

export interface ImpactStat {
  percentage: string;
  description: string;
  icon: React.ReactNode;
  context: string;
}