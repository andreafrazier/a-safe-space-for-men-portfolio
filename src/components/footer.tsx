import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center overflow-hidden">
                <Image 
                  src="/images/handshake-wordcloud.png"
                  alt="A Safe Space For Men logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-xl">A Safe Space For Men</span>
            </div>
            <p className="text-gray-300 mb-4">
              Creating community for men's mental health in Detroit and beyond.
            </p>
            <p className="text-gray-400 text-sm">
              For Event Partnerships or Sponsorships, please contact: [Contact information to be added]
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/join" className="hover:text-emerald-400 transition-colors">
                  Join Us
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-emerald-400 transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-emerald-400 transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Crisis Resources</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="tel:988" className="hover:text-emerald-400 transition-colors">
                  988 Suicide & Crisis Lifeline
                </a>
              </li>
              <li>
                <a href="tel:911" className="hover:text-emerald-400 transition-colors">
                  Emergency: 911
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Crisis Text Line: Text HOME to 741741
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 A Safe Space For Men. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;