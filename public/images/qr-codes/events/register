'use client';

import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface EventRegistrationFormProps {
  eventDate: string;
  eventTitle: string;
}

const EventRegistrationForm: React.FC<EventRegistrationFormProps> = ({ eventDate, eventTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hearAboutUs: '',
    firstTime: 'yes',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formElement = e.currentTarget;
      const formDataToSend = new FormData(formElement);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend as any).toString(),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your registration. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          You're Registered!
        </h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Thank you for registering for {eventTitle} on {eventDate}. We look forward to seeing you!
        </p>
        <p className="text-sm text-gray-500">
          A confirmation has been sent to your email.
        </p>
      </div>
    );
  }

  return (
    <form 
      name="event-registration" 
      method="POST" 
      data-netlify="true"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="event-registration" />
      <input type="hidden" name="event" value={`${eventTitle} - ${eventDate}`} />

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
          placeholder="John Doe"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
          placeholder="john@example.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
          Phone Number <span className="text-gray-400">(Optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
          placeholder="(555) 123-4567"
        />
      </div>

      {/* First Time Attending */}
      <div>
        <label htmlFor="firstTime" className="block text-sm font-semibold text-gray-700 mb-2">
          Is this your first time attending? <span className="text-red-500">*</span>
        </label>
        <select
          id="firstTime"
          name="firstTime"
          value={formData.firstTime}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
        >
          <option value="yes">Yes, this is my first meeting</option>
          <option value="no">No, I've attended before</option>
        </select>
      </div>

      {/* How did you hear about us */}
      <div>
        <label htmlFor="hearAboutUs" className="block text-sm font-semibold text-gray-700 mb-2">
          How did you hear about us? <span className="text-gray-400">(Optional)</span>
        </label>
        <input
          type="text"
          id="hearAboutUs"
          name="hearAboutUs"
          value={formData.hearAboutUs}
          onChange={handleChange}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
          placeholder="Social media, friend, website, etc."
        />
      </div>

      {/* Additional Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Questions or Comments <span className="text-gray-400">(Optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
          placeholder="Any topics you'd like to discuss, questions about the meeting, or anything else we should know..."
        />
      </div>

      {/* Privacy Note */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
        <p className="text-sm text-emerald-800">
          <strong>Privacy & Confidentiality:</strong> Your information will be kept strictly confidential. 
          We collect this information only to plan for the meeting and follow up with attendees.
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-emerald-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
      >
        {isSubmitting ? 'Registering...' : 'Register for Meeting'}
      </button>
    </form>
  );
};

export default EventRegistrationForm;