'use client';

import React, { useState } from "react";
import { Menu, X, AlertTriangle, House } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from 'next/link';
import Image from "next/image";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const menuItems = [
        { href: '/', label: 'Home', icon: House, iconOnly: true },
        { href: '/about', label: 'About' },
        { href: '/start-here', label: 'Start Here' },
        { href: '/find-support', label: 'Find Support' },
        { href: '/join', label: 'Join' },
        { href: '/events', label: 'Events' },  
    ];

    const isActive = (href: string) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    };

    return (
        <>
            {/* Main Navigation */}
            <nav className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center h-16">
                        {/* Logo */}
                        <Link href='/' className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-2 group">
                            <div className="w-12 h-12 flex items-center justify-center relative overflow-hidden rounded-lg transition-transform group-hover:scale-105">
                                <Image 
                                    src="/images/handshake-wordcloud.png"
                                    alt="A Safe Space For Men logo - handshake with supportive words"
                                    width={60}
                                    height={60}
                                    className="object-contain w-full h-full"
                                    priority
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-xl text-gray-800 leading-tight group-hover:text-emerald-600 transition-colors">A Safe Space For Men</span>
                                <span className="text-xs text-gray-600 hidden sm:block leading-tight">Mental Health Awareness & Emotional Well-being</span>
                            </div>
                        </Link>
                        
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-10 ml-16">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`transition-colors font-medium ${
                                        isActive(item.href)
                                            ? 'text-emerald-600 font-semibold border-b-2 border-emerald-600 pb-1'
                                            // : item.priority
                                            //     ? 'text-red-600 hover:text-red-700 hover:border-b-2 hover:border-red-300 pb-1 font-semibold'
                                                : item.iconOnly
                                                ? 'text-emerald-600 hover:text-emerald-700 pb-1' 
                                                : 'text-gray-700 hover:text-emerald-600 hover:border-b-2 hover:border-emerald-300 pb-1'
                                    }`}
                                >
                                    {item.iconOnly && item.icon ? (
                                    <>
                                        <item.icon 
                                            className="w-5 h-5" 
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">{item.label}</span>
                                    </>
                                ) : (
                                    <>
                                    {item.label}
                                    {/* {item.priority && (
                                        <AlertTriangle className="w-3 h-3 inline ml-1" />
                                        )} */}
                                    </>
                                )}
                                </Link>
                            ))}
                            <Link 
                                href="/#donation" 
                                className="ml-12 bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-md"
                            >
                                Donate Now
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
                                            // : item.priority
                                            //     ? 'text-red-600 hover:text-red-700 hover:bg-red-50 font-semibold border-l-4 border-red-200'
                                                : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                                    }`}
                                >
                                    <div className="flex items-center">
                                        {item.icon && <item.icon className="w-5 h-5 mr-2" />}
                                        {item.label}
                                        {/* {item.priority && (
                                            <AlertTriangle className="w-4 h-4 ml-2" />
                                        )} */}
                                    </div>
                                </Link>
                            ))}
                            <Link 
                                href="/#donation"
                                onClick={() => setIsMenuOpen(false)}
                                className="block mx-4 mt-4 px-4 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 text-center"
                            >
                                Donate Now
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Header;