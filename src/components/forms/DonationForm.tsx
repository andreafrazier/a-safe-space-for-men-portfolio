'use client';

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

interface DonationFormProps {
    className?: string;
}

const DonationForm: React.FC<DonationFormProps> = ({ className = '' }) => {
  const searchParams = useSearchParams();
  const [amount, setAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [error, setError] = useState<string>('');
  const [donationSource, setDonationSource] = useState<string>('');

  // Capture query parameters on mount
  useEffect(() => {
    const source = searchParams?.get('source') || 'direct';
    setDonationSource(source);
    console.log('Donation source:', source); // For tracking/debugging
  }, [searchParams]);

  const presetAmounts = [25, 50, 100, 250];
  const monthlyAmounts = [15, 25, 50];

  const handleAmountSelect = (selectedAmount: number) => {
    setAmount(selectedAmount);
    setCustomAmount('');
    setError('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    setAmount(value ? parseFloat(value) : null);
    setError('');
  };

  const handleDonation = async () => {
    // Validation
    if (!amount || amount <= 0) {
      setError('Please select or enter a valid donation amount.');
      return;
    }

    if (amount < 1) {
      setError('Minimum donation amount is $1.');
      return;
    }

    setIsProcessing(true);
    setError('');

    try {
      // Create checkout session
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount,
          donationType: donationType,
          source: donationSource, // pass source to Stripe metadata
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create checkout session');
      }

      const { url } = await response.json();

      // Redirect to Stripe Checkout
      if (url) {
        window.location.href = url;
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (error) {
      console.error('Donation error:', error);
      setError(
        error instanceof Error 
          ? error.message 
          : 'An error occurred. Please try again.'
      );
      setIsProcessing(false);
    }
  };

  return (
    <div className={`bg-white rounded-lg p-8 shadow-lg ${className}`}>
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Choose Your Support Level
      </h3>
      
      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 text-sm">{error}</p>
        </div>
      )}
      
      {/* Donation Type Toggle */}
      <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setDonationType('one-time')}
          disabled={isProcessing}
          className={`flex-1 py-2 px-4 rounded-md font-semibold transition-colors ${
            donationType === 'one-time'
              ? 'bg-emerald-600 text-white'
              : 'text-gray-600 hover:text-gray-800'
          } disabled:opacity-50`}
        >
          One-Time
        </button>
        <button
          onClick={() => setDonationType('monthly')}
          disabled={isProcessing}
          className={`flex-1 py-2 px-4 rounded-md font-semibold transition-colors ${
            donationType === 'monthly'
              ? 'bg-blue-600 text-white'
              : 'text-gray-600 hover:text-gray-800'
          } disabled:opacity-50`}
        >
          Monthly
        </button>
      </div>

      {donationType === 'one-time' ? (
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            One-Time Donation
          </h4>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {presetAmounts.map((presetAmount) => (
              <button
                key={presetAmount}
                onClick={() => handleAmountSelect(presetAmount)}
                disabled={isProcessing}
                className={`py-3 rounded-lg font-semibold transition-colors border-2 ${
                  amount === presetAmount
                    ? 'bg-emerald-50 border-emerald-600 text-emerald-600'
                    : 'border-emerald-600 text-emerald-600 hover:bg-emerald-50'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                ${presetAmount}
              </button>
            ))}
          </div>
          <div className="relative mb-4">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-semibold text-lg">
              $
            </span>
            <input
              type="number"
              placeholder="Enter custom one-time amount"
              value={customAmount}
              onChange={handleCustomAmountChange}
              disabled={isProcessing}
              className="w-full p-3 pl-8 border-2 border-emerald-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 disabled:opacity-50 text-gray-900 placeholder-gray-400"
              min="1"
              step="0.01"
            />
          </div>

          <button
            onClick={handleDonation}
            disabled={!amount || amount <= 0 || isProcessing}
            className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessing ? 'Processing...' : 'Donate Now'}
          </button>
        </div>
      ) : (
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-900 mb-2 text-center">
            Safe Space Sustainers
          </h4>
          <p className="text-sm text-gray-600 mb-4 text-center">
            Join our monthly giving program for ongoing impact
          </p>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {monthlyAmounts.map((monthlyAmount) => (
              <button
                key={monthlyAmount}
                onClick={() => handleAmountSelect(monthlyAmount)}
                disabled={isProcessing}
                className={`py-3 rounded-lg font-semibold transition-colors text-sm border-2 ${
                  amount === monthlyAmount
                    ? 'bg-blue-50 border-blue-600 text-blue-600'
                    : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                ${monthlyAmount}/mo
              </button>
            ))}
          </div>
          <div className="relative mb-4">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-semibold text-lg">
              $
            </span>
            <input
              type="number"
              placeholder="Enter custom monthly amount"
              value={customAmount}
              onChange={handleCustomAmountChange}
              disabled={isProcessing}
              className="w-full p-3 pl-8 border-2 border-blue-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 text-gray-900 placeholder-gray-400"
              min="1"
              step="0.01"
            />
          </div>
          <button
            onClick={handleDonation}
            disabled={!amount || amount <= 0 || isProcessing}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessing ? 'Processing...' : 'Become a Sustainer'}
          </button>
        </div>
      )}

      <div className="text-center mt-6">
        <p className="text-gray-500 text-sm">
          A Safe Space For Men is a 501(c)(3) organization. Your donation is tax-deductible.
        </p>
      </div>
    </div>
  );
};

export default DonationForm;