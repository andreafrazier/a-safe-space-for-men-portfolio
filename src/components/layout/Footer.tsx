'use client';

import React from 'react';
import { 
  AlertTriangle, Phone, MessageSquare, ExternalLink, 
  MapPin, Mail, Facebook, Twitter, Instagram, Linkedin 
} from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Crisis Resources Section - Always Visible */}
      <div className="bg-red-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 mr-2" />
              24/7 Crisis Support
            </h3>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm md:text-base">
              <a 
                href="tel:988" 
                className="flex items-center hover:underline font-semibold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-700 rounded px-2 py-1"
              >
                <Phone className="w-4 h-4 mr-2" />
                988 Suicide & Crisis Lifeline
              </a>
              <span className="hidden md:inline text-red-300">|</span>
              <a 
                href="sms:741741&body=HOME" 
                className="flex items-center hover:underline font-semibold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-700 rounded px-2 py-1"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Text HOME to 741741
              </a>
              <span className="hidden md:inline text-red-300">|</span>
              <a 
                href="https://safety-zone.org" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:underline font-semibold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-700 rounded px-2 py-1"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                SafetyZone Urgent Care
              </a>
              <span className="hidden md:inline text-red-300">|</span>
              <a 
                href="tel:911" 
                className="flex items-center hover:underline font-semibold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-700 rounded px-2 py-1"
              >
                <Phone className="w-4 h-4 mr-2" />
                Emergency: 911
              </a>
            </div>
            <div className="mt-3">
              <Link 
                href="/start-here" 
                className="text-sm text-red-100 hover:text-white underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-700 rounded px-2 py-1"
              >
                View all crisis resources and support options →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h4 className="text-lg font-bold mb-4">A Safe Space For Men</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Men's mental health and community support in Detroit and beyond. Creating spaces where every man feels seen, heard, and valued.
            </p>
            <div className="text-sm text-gray-400">
              501(c)(3) Nonprofit Organization
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/start-here" className="hover:text-white transition-colors">
                  Start Here
                </Link>
              </li>
              <li>
                <Link href="/join" className="hover:text-white transition-colors">
                  Join Community
                </Link>
              </li>
              <li>
                <Link href="/find-support" className="hover:text-white transition-colors">
                  Find Support
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/start-here" className="hover:text-white transition-colors">
                  Mental Health Assessments
                </Link>
              </li>
              <li>
                <Link href="/find-support" className="hover:text-white transition-colors">
                  Find a Therapist
                </Link>
              </li>
              <li>
                <a 
                  href="https://safety-zone.org" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors inline-flex items-center"
                >
                  SafetyZone Urgent Care
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.henryford.com/services/behavioral-health" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors inline-flex items-center"
                >
                  Henry Ford Health
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>Detroit, Michigan</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <a 
                  href="mailto:william@asafespaceformen.org"
                  className="hover:text-white transition-colors"
                >
                  william@asafespaceformen.org
                </a>
              </li>
            </ul>

            {/* Social Media - Optional, add if you have accounts */}
            <div className="mt-6">
              <h5 className="font-bold text-sm mb-3">Follow Us</h5>
              <div className="flex space-x-4">
                {/* Uncomment and add links when social media accounts are active
                <a 
                  href="https://facebook.com/your-page" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://twitter.com/your-handle" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com/your-handle" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/company/your-company" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} A Safe Space For Men. All rights reserved.
            </div>
            <div className="mt-1">
              Website by{' '}
              <a 
                href="mailto:andrea@veloraengine.com"
                className="hover:text-white transition-colors underline"
              >
                andrea@veloraengine.com
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-gray-400 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <span className="text-gray-600">|</span>
              <a 
                href="https://www.guidestar.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Nonprofit Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;