'use client';

import React from "react";
import { Phone, MessageSquare } from 'lucide-react';

const CrisisBar = () => {
    return (
        <div className="bg-red-600 text-white py-2 px-4 fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center text-sm">
                <div className="flex items-center mr-6">
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="font-semibold mr-2">Emergency:</span>
                    <a
                        href="tel:988"
                        className="mr-4 hover:underline focus:underline focus:outline-none"
                        aria-label="Call 988 Crisis LifeLine"
                    >
                    </a>
                    <a 
                    href="tel:911"
                    className="hover:underline focus:underline focus:outline-none"
                    aria-label="Call 911 Emergency Services"
                    >
                    </a>
                </div>
                <div className="flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    <span className="mr-2">Crisis Text:</span>
                    <span className="font-semibold">HOME to 741741</span>
                </div>
            </div>
        </div>
    );
};

export default CrisisBar;