'use client';

import React, { useState } from 'react';
import { CheckCircle, Heart, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import JoinUsForm from '@/components/forms/JoinUsForm';
 

const JoinUsPage = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleFormSuccess = () => {
    setShowSuccessMessage(true);
    // Auto-hide success message after 5 seconds
    setTimeout(() => setShowSuccessMessage(false), 5000);
  };

  if (showSuccessMessage) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 pt-24">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Welcome to Our Community!
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Thank you for taking this important step. You've joined a supportive community 
              dedicated to breaking barriers in men's mental health.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-emerald-50 p-6 rounded-lg">
                <Heart className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">We'll Be In Touch</h3>
                <p className="text-sm text-gray-600">
                  Expect to hear from us within 24-48 hours via your preferred contact method.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Connect & Support</h3>
                <p className="text-sm text-gray-600">
                  You'll receive information about upcoming events and support groups.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <ArrowRight className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Your Journey Begins</h3>
                <p className="text-sm text-gray-600">
                  Take your time to explore our resources while we prepare your welcome.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/resources"
                className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Explore Resources
              </Link>
              <Link 
                href="/about"
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Join Our Community
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Take the first step towards prioritizing your mental health and connecting with others on the same journey.
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              When you join A Safe Space For Men, you become part of a supportive network dedicated to breaking barriers in men's mental health.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">What to Expect</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Connection</h3>
                    <p className="text-gray-600">
                      We'll reach out within 24-48 hours to understand your needs and connect you with appropriate resources and support groups.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Events</h3>
                    <p className="text-gray-600">
                      Receive invitations to workshops, support group meetings, and community wellness events in the Detroit area.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Resource Access</h3>
                    <p className="text-gray-600">
                      Get access to mental health resources, educational materials, and professional referrals tailored to your situation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Volunteer Opportunities</h3>
                    <p className="text-gray-600">
                      If interested, learn about ways to give back and support other men in their mental health journeys.
                    </p>
                  </div>
                </div>
              </div>

              {/* Community Stats */}
              <div className="mt-12 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Join Our Growing Community</h3>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
                    <div className="text-sm text-gray-600">Men Supported</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                    <div className="text-sm text-gray-600">Events Hosted</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get Started Today</h2>
              <JoinUsForm onSuccess={handleFormSuccess} />
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Resources Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Need Help Right Now?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            If you're experiencing a mental health crisis, please reach out for immediate support.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Crisis Lifeline</h3>
              <a href="tel:988" className="text-2xl font-bold text-emerald-600 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded">
                988
              </a>
              <p className="text-sm text-gray-600 mt-2">24/7 crisis support</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Crisis Text Line</h3>
              <div className="text-lg font-bold text-blue-600">HOME to 741741</div>
              <p className="text-sm text-gray-600 mt-2">Text-based crisis support</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Emergency</h3>
              <a href="tel:911" className="text-2xl font-bold text-red-600 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 rounded">
                911
              </a>
              <p className="text-sm text-gray-600 mt-2">Immediate emergency</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUsPage;