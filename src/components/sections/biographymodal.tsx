'use client';

import React from 'react';
import { X } from 'lucide-react';
import { TeamMember } from '@/types/about';

interface BiographyModalProps {
  member: any;
  onClose: () => void;
}

const BiographyModal: React.FC<BiographyModalProps> = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-6">
              <img 
                src={member.image} 
                alt={`${member.name}, ${member.title} at A Safe Space For Men`}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-lg text-emerald-600">{member.title}</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close biography"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="prose max-w-none">
            {member.bio.split('\n\n').map((paragraph: string, index: number) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          {(member.email || member.linkedin) && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm font-semibold text-gray-900 mb-2">Connect with {member.name.split(' ')[0]}:</p>
              {member.email && (
                <p className="text-sm text-emerald-600 mb-1">
                  <a href={`mailto:${member.email}`} className="hover:underline">
                    {member.email}
                  </a>
                </p>
              )}
              {member.linkedin && (
                <p className="text-sm text-emerald-600">
                  <a href={`https://${member.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {member.linkedin}
                  </a>
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BiographyModal;