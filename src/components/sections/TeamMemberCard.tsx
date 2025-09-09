'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { TeamMember } from '@/types/about';

interface TeamMemberCardProps {
  member: TeamMember;
  onBioClick: () => void;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, onBioClick }) => {
  return (
    <div 
      className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
      onClick={onBioClick}
    >
      <img 
        src={member.image} 
        alt={`${member.name}, ${member.title}`}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
      <p className="text-emerald-600 font-semibold mb-4">{member.title}</p>
      <button className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center">
        Read Biography <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  );
};

export default TeamMemberCard;