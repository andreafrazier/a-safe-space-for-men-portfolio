import React from "react";
import { Calendar, Users, Heart, ArrowRight, ExternalLink} from 'lucide-react';
import type { Metadata } from 'next';

export default function Home() {
    return (

        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">A Safe Space For Men</h1>
            <div className="flex gap-4">
                <Heart className="w-6 h-6 text-red-500" />
                <Users className="w-6 h-6 text-blue-500" />
            </div>
        </div>
    );
}