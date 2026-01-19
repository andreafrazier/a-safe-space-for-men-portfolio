import { Metadata } from 'next';
import EventRegistrationForm from '@/components/forms/EventRegistrationForm';
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, Clock } from 'lucide-react';

// ========================================
// EVENT CONFIGURATION - UPDATE THIS FOR EACH NEW EVENT
// ========================================
const eventConfig = {
  title: "Men's Community Meeting",
  description: "Join us for an evening of connection, support, and open conversation in a safe space for men.",
  date: "Monday, January 19, 2026",
  time: "6:00 PM - 8:30 PM",
  location: {
    name: "SafetyZone",
    address: "21040 Greenfield Road",
    suite: "Suite 278",
    city: "Oak Park, MI 48237"
  },
  features: [
    "A welcoming, judgment-free environment for all men",
    "Open discussion and support from peers who understand",
    "Opportunities to share your experiences or simply listen",
    "Resources and connections to professional mental health support",
    "Light refreshments provided"
  ],
  additionalInfo: "Free parking is available at the SafetyZone building."
};
// ========================================

export const metadata: Metadata = {
  title: `Register for ${eventConfig.title}`,
  description: `Register for A Safe Space For Men's ${eventConfig.title.toLowerCase()} on ${eventConfig.date}.`,
};

export default function EventRegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link 
          href="/events"
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Events
        </Link>

        {/* Event Details Header */}
        <div className="bg-gradient-to-br from-emerald-600 to-blue-600 rounded-xl p-8 mb-8 text-white shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {eventConfig.title}
          </h1>
          <p className="text-emerald-100 text-lg mb-6">
            {eventConfig.description}
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <Calendar className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold">Date</div>
                <div className="text-emerald-100">{eventConfig.date}</div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold">Time</div>
                <div className="text-emerald-100">{eventConfig.time}</div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold">Location</div>
                <div className="text-emerald-100">
                  {eventConfig.location.name}<br />
                  {eventConfig.location.address}<br />
                  {eventConfig.location.suite}<br />
                  {eventConfig.location.city}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What to Expect */}
        <div className="bg-white rounded-lg p-8 mb-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Expect</h2>
          <ul className="space-y-3 text-gray-700">
            {eventConfig.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-emerald-600 mr-3 text-xl">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Register for This Meeting</h2>
          <p className="text-gray-600 mb-6">
            Please fill out this form to reserve your spot. All information is kept confidential.
          </p>
          <EventRegistrationForm eventDate={eventConfig.date} eventTitle={eventConfig.title} />
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 mb-2">
            Questions about the meeting? Contact us at{' '}
            <a 
              href="mailto:william@asafespaceformen.org" 
              className="text-emerald-600 hover:underline"
            >
              william@asafespaceformen.org
            </a>
          </p>
          <p className="text-xs text-gray-400">
            {eventConfig.additionalInfo}
          </p>
        </div>
      </div>
    </div>
  );
}