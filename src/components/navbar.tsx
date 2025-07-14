'use client';

import { useState } from "react";
import {Menu, X } from 'lucide-react';
import navbar from '@/components/navbar';
import Link from "next/link";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
    <nav className="bg-white shadow-sm">
        <div className="max-w-7xl max-auto px-4">
            <div className="flex justify-between items-center h-16">
                <Link href="/" className="font-bold text-xl text-gray-800">
                    A Safe Space For Men
                </Link>

                <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button> 
            </div>
        </div>
    </nav>
    );
};

export default Navbar