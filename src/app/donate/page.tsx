import DonationForm from '@/components/forms/DonationForm';
import Link from 'next/link';
import { ArrowLeft, CreditCard, Shield } from 'lucide-react';

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link 
          href="/"
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Support Our Mission
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your donation supports free support groups, mental health resources, and community programs that help men prioritize their emotional well-being.
          </p>
        </div>

        {/* Donation Form */}
        <DonationForm />

        {/* Payment Methods */}
        <div className="mt-8 bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-gray-600" />
            <h3 className="text-sm font-semibold text-gray-700">Secure Payment Methods</h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* Credit/Debit Cards */}
            <div className="px-4 py-2 bg-blue-600 rounded-md text-white text-sm font-semibold">
              💳 Credit/Debit Card
            </div>
            
            {/* Apple Pay */}
            <div className="px-4 py-2 bg-black rounded-md text-white text-sm font-semibold">
              🍎 Apple Pay
            </div>

            {/* Google Pay */}
            <div className="px-4 py-2 bg-white border-2 border-gray-300 rounded-md text-gray-700 text-sm font-semibold">
              🅖 Google Pay
            </div>

            {/* Link by Stripe */}
            <div className="px-4 py-2 bg-emerald-600 rounded-md text-white text-sm font-semibold">
              🔗 Link
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center mt-4 flex items-center justify-center gap-1">
            <Shield className="w-3 h-3" />
            All transactions are secure and encrypted
          </p>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-4">
            <strong>Questions about donating?</strong> Contact us at{' '}
            <a 
              href="mailto:william@asafespaceformen.org" 
              className="text-emerald-600 hover:underline"
            >
              william@asafespaceformen.org
            </a>
          </p>
          <p className="text-xs text-gray-400">
            A Safe Space For Men is a 501(c)(3) organization (EIN: pending).<br />
            Your donation is tax-deductible to the extent allowed by law.
          </p>
        </div>
      </div>
    </div>
  );
}