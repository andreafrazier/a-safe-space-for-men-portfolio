import DonationForm from '@/components/forms/DonationForm';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

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