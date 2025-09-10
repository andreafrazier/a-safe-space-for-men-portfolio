'use client';
import React from 'react';
import { X } from 'lucide-react';

const SimpleBio = ({ member, onClose }: { member: any; onClose: () => void }) => {
  if (!member) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold">{member.name}</h3>
          <button onClick={onClose}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <p>{member.bio}</p>
      </div>
    </div>
  );
};

export default SimpleBio;