'use client';

import React, { useEffect, useState } from 'react';
import {Menu, X } from 'lucide-react';
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from 'next/image';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const menuItems = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/start-here', label: 'Start Here'},
        { href: '/find-support', label: 'Find Support' },
        { href: '/join', label: 'Join' },
        { href: '/suicide-prevention', label: 'Suicide Prevention'},
        { href: '/events', label: 'Events'},   
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
        <nav className='bg-white shadow-sm fixed w-full top-8 z-40'>
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
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">About</a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">Start Here</a>
              <a href="#find-support" className="text-gray-700 hover:text-emerald-600 transition-colors">Find Support</a>
              <a href="#suicide-prevention" className="text-gray-700 hover:text-emerald-600 transition-colors">Suicide Prevention</a>
              <a href="#join" className="text-gray-700 hover:text-emerald-600 transition-colors">Join</a>
              <a href="#join" className="text-gray-700 hover:text-emerald-600 transition-colors">Events</a>
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
        </nav>
    </>
  );
};

export default NavBar;