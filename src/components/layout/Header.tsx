'use client';

import React, { useState } from "react";
import { Menu, X, AlertTriangle, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from 'next/link';
import Image from "next/image";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const menuItems = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/suicide-prevention', label: 'Suicide Prevention', priority: true },
        { href: '/join', label: 'Join Us' },
        { href: '/resources', label: 'Resources' },
        { href: '/community-updates', label: 'Community Updates' },
    ];

    const isActive = (href: string) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    };

    return (
        <>
            {/* Crisis Bar */}
            <div className="bg-red-600 text-white py-3 px-4 fixed w-full top-0 z-50">
                <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center text-sm">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    <span className="font-semibold mr-4">Crisis Support Available 24/7:</span>
                    <a href="tel:988" className="mr-6 hover:underline focus:outline-none focus:ring-2 focus:ring-red-300 rounded px-2 py-1 flex items-center">
                        <Phone className="w-3 h-3 mr-1" />
                        988 Crisis Lifeline
                    </a>
                    <a href="tel:911" className="mr-6 hover:underline focus:outline-none focus:ring-2 focus:ring-red-300 rounded px-2 py-1">
                        Emergency: 911
                    </a>
                    <span className="mr-2">Crisis Text:</span>
                    <span className="font-semibold">HOME to 741741</span>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="bg-white shadow-sm fixed w-full top-12 z-40 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link href='/' className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-2">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center overflow-hidden shadow-lg">
                                <Image 
                                    src="/images/handshake-wordcloud.png"
                                    alt="A Safe Space For Men logo - handshake with supportive words"
                                    width={48}
                                    height={48}
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-xl text-gray-800 leading-tight">A Safe Space For Men</span>
                                <span className="text-xs text-gray-600 hidden sm:block">Men's Mental Health & Suicide Prevention</span>
                            </div>
                        </Link>
                        
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`transition-colors font-medium ${
                                        isActive(item.href)
                                            ? 'text-emerald-600 font-semibold border-b-2 border-emerald-600 pb-1'
                                            : item.priority
                                                ? 'text-red-600 hover:text-red-700 hover:border-b-2 hover:border-red-300 pb-1 font-semibold'
                                                : 'text-gray-700 hover:text-emerald-600 hover:border-b-2 hover:border-emerald-300 pb-1'
                                    }`}
                                >
                                    {item.label}
                                    {item.priority && (
                                        <AlertTriangle className="w-3 h-3 inline ml-1" />
                                    )}
                                </Link>
                            ))}
                            <Link 
                                href="/#donation" 
                                className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-md"
                            >
                                Support Our Mission
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-gray-700 hover:text-emerald-600 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded p-2"
                                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                                aria-expanded={isMenuOpen}
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block px-4 py-3 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                                        isActive(item.href)
                                            ? 'text-emerald-600 font-semibold bg-emerald-50 border-l-4 border-emerald-600'
                                            : item.priority
                                                ? 'text-red-600 hover:text-red-700 hover:bg-red-50 font-semibold border-l-4 border-red-200'
                                                : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                                    }`}
                                >
                                    <div className="flex items-center">
                                        {item.label}
                                        {item.priority && (
                                            <AlertTriangle className="w-4 h-4 ml-2" />
                                        )}
                                    </div>
                                </Link>
                            ))}
                            <Link 
                                href="/#donation"
                                onClick={() => setIsMenuOpen(false)}
                                className="block mx-4 mt-4 px-4 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 text-center"
                            >
                                Support Our Mission
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Header;