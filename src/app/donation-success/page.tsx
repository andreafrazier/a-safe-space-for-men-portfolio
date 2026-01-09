'use client';

import React, { useEffect, useState } from 'react';
import { CheckCircle, Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const DonationSuccessPage = () => {
  const [urlParams, setUrlParams] = useState<URLSearchParams | null>(null);

  useEffect(() => {
    // Get search params on client side
    setUrlParams(new URLSearchParams(window.location.search));
  }, []);

  const amount = urlParams?.get('amount') || '';
  const frequency = urlParams?.get('frequency') || '';

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-emerald-600" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Thank You for Your Support!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your generous donation helps us create safe spaces and support systems for men&apos;s mental health in Detroit and beyond.
          </p>

          {amount && (
            <div className="bg-white rounded-lg p-6 shadow-lg max-w-md mx-auto mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Donation Details</h2>
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-600">${amount}</p>
                {frequency && (
                  <p className="text-sm text-gray-600 capitalize">{frequency} donation</p>
                )}
              </div>
            </div>
          )}

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-8 mb-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-emerald-800 mb-4">Your Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start space-x-3">
                <Heart className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-emerald-800">Community Support</h3>
                  <p className="text-emerald-700 text-sm">Funding support groups and mental health workshops</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-emerald-800">Resource Access</h3>
                  <p className="text-emerald-700 text-sm">Connecting men with professional mental health services</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <ArrowRight className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-emerald-800">Stigma Reduction</h3>
                  <p className="text-emerald-700 text-sm">Breaking down barriers through education and advocacy</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Heart className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-emerald-800">Community Events</h3>
                  <p className="text-emerald-700 text-sm">Organizing wellness walks, workshops, and outreach</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link 
              href="/join"
              className="inline-flex items-center bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Join Our Community <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/"
              className="inline-flex items-center border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              Return Home
            </Link>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 mb-4">
              A Safe Space For Men is a 501(c)(3) organization. Your donation is tax-deductible.
            </p>
            <p className="text-sm text-gray-500">
              Questions about your donation? Contact us at{' '}
              <a href="mailto:asafespaceformen@gmail.com" className="text-emerald-600 hover:underline">
                asafespaceformen@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationSuccessPage;