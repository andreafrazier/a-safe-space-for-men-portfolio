'use client';

import React from 'react';
import { ArrowRight, User } from 'lucide-react';
import type { TeamMember } from '@/types/about';

interface TeamMemberCardProps {
  member: TeamMember;
  onBioClick: () => void;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, onBioClick }) => {
  return (
    <div 
      className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg p-5 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
      onClick={onBioClick}
    >
      {member.image ? (
        <img 
          src={member.image} 
          alt={`${member.name}, ${member.title}`}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex flex-col items-center justify-center">
          <User className="w-16 h-16 text-gray-400 mb-2" />
          <p className="text-gray-600 font-semibold">Image Coming Soon</p>
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
      <p className="text-emerald-600 font-semibold mb-4">{member.title}</p>
      <button className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center">
        Read Biography <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  );
};

export default TeamMemberCard;