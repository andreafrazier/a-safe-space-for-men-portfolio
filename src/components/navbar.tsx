'use client';

import React, { useEffect, useState } from 'react';
import {Menu, Navigation, X } from 'lucide-react';
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from 'next/image';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const menuItems = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/join', label: 'Join Us' },
        { href: '/resources', label: 'Resources' },
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

        {/* Emergency Crisis Bar */}
        <div className='bg-red-600 text-white py-2 px-4 fixed w-full top-0 z-50'>
          <div className='max-w-7xl mx-auto flex flex-wrap items-center justify-center text-sm'>
            <span className="font-semibold mr-4">Emergency:</span>
            <a href="tel:988" className="mr-6 hover:underline">988 Crisis Lifeline</a>
            <a href="tel:911" className="mr-6 hover:underline">911 Emergency</a>
            <span className="mr-2">Crisis Text:</span>
            <span className="font-semibold">HOME to 741741</span>
          </div>
        </div>

        {/* Main Navigation */}
        <Navigation className='bg-white shadow-sm fixed w-full top-8 z-40'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-16'>
              {/* Logo */}
              <Link href='/' className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg ">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Image 
                                src="/images/handshake-wordcloud.png"
                                alt="A Safe Space For Men logo - handshake with supportive words"
                                width={40}
                                height={40}
                                className="object-cover"
                    />  
                  </div>
                  <span className="font-bold text-xl text-gray-800">A Safe Space For Men</span>
              </Link>
            </div>
          </div>                  
                
        {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">About Us</a>
              <a href="#join" className="text-gray-700 hover:text-emerald-600 transition-colors">Join Us</a>
              <a href="#resources" className="text-gray-700 hover:text-emerald-600 transition-colors">Resources</a>
              <a href="#events" className="text-gray-700 hover:text-emerald-600 transition-colors">Events</a>
              <a href="#donation" className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                Donate Now
              </a>
            </div>

        {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-emerald-600 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded p-1"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>       

        {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 transition-colors rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                      isActive(item.href)
                        ? 'text-emerald-600 font-semibold bg-emerald-50'
                        : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link 
                    href="/#donation"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    Donate Now
                </Link>
              </div>
            </div>
          )}
        </Navigation>
    </>
  );
};

export default Navigation;