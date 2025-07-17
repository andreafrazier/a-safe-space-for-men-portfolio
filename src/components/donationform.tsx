'use client';

import React, { useState } from "react";
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface DonationFormProps {
    className?: string;
}

const DonationForm: React.FC<DonationFormProps> = ({ className = '' }) => {
    const [amount, setAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');

  const presetAmounts = [25, 50, 100, 250];
  const monthlyAmounts = [15, 25, 50];

  const handleAmountSelect = (selectedAmount: number) => {
    setAmount(selectedAmount);
    setCustomAmount('');    
};

const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    setAmount(value ? parseFloat(value) : null);
  };

  const handleDonation = async () => {
    if (!amount || amount <= 0) {
      alert('Please select or enter a valid donation amount.');
      return;
    }

    setIsProcessing(true);

    try {
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe failed to initialize');
      }

      // Create payment intent
      const response = await fetch('/api/stripe/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: Math.round(amount * 100), // Convert to cents
          currency: 'usd',
          donationType,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create payment intent');
      }

      const { clientSecret } = await response.json();

      // Redirect to Stripe Checkout or handle payment intent
      const { error } = await stripe.redirectToCheckout({
        sessionId: clientSecret,
      });

      if (error) {
        console.error('Stripe error:', error);
        alert('Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Donation error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className={`bg-white rounded-lg p-8 shadow-lg ${className}`}>
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Choose Your Support Level</h3>
      
      {/* Donation Type Toggle */}
      <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setDonationType('one-time')}
          className={`flex-1 py-2 px-4 rounded-md font-semibold transition-colors ${
            donationType === 'one-time'
              ? 'bg-emerald-600 text-white'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          One-Time
        </button>
        <button
          onClick={() => setDonationType('monthly')}
          className={`flex-1 py-2 px-4 rounded-md font-semibold transition-colors ${
            donationType === 'monthly'
              ? 'bg-blue-600 text-white'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Monthly
        </button>
      </div>

      {donationType === 'one-time' ? (
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">One-Time Donation</h4>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {presetAmounts.map((presetAmount) => (
              <button
                key={presetAmount}
                onClick={() => handleAmountSelect(presetAmount)}
                className={`py-3 rounded-lg font-semibold transition-colors border-2 ${
                  amount === presetAmount
                    ? 'bg-emerald-50 border-emerald-600 text-emerald-600'
                    : 'border-emerald-600 text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                ${presetAmount}
              </button>
            ))}
          </div>
          <input
            type="number"
            placeholder="Enter custom amount"
            value={customAmount}
            onChange={handleCustomAmountChange}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            min="1"
            step="0.01"
          />
          <button
            onClick={handleDonation}
            disabled={!amount || amount <= 0 || isProcessing}
            className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessing ? 'Processing...' : 'Donate Now'}
          </button>
        </div>
      ) : (
        <div className="border-t pt-8">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Safe Space Sustainers</h4>
          <p className="text-sm text-gray-600 mb-4">Join our monthly giving program for ongoing impact</p>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {monthlyAmounts.map((monthlyAmount) => (
              <button
                key={monthlyAmount}
                onClick={() => handleAmountSelect(monthlyAmount)}
                className={`py-3 rounded-lg font-semibold transition-colors text-sm border-2 ${
                  amount === monthlyAmount
                    ? 'bg-blue-50 border-blue-600 text-blue-600'
                    : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}
              >
                ${monthlyAmount}/mo
              </button>
            ))}
          </div>
          <input
            type="number"
            placeholder="Custom monthly amount"
            value={customAmount}
            onChange={handleCustomAmountChange}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            min="1"
            step="0.01"
          />
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