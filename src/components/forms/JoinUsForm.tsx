'use client';

import React, { useState } from 'react';
import { User, Mail, Phone, MessageSquare, Users, Loader2 } from 'lucide-react';

interface JoinUsFormProps {
  onSuccess: () => void;
}

const JoinUsForm: React.FC<JoinUsFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredContact: 'email',
    hearAboutUs: '',
    interestedInVolunteering: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const contactMethods = [
    { value: 'email', label: 'Email', icon: <Mail className="w-4 h-4" /> },
    { value: 'phone', label: 'Phone Call', icon: <Phone className="w-4 h-4" /> },
    { value: 'text', label: 'Text Message', icon: <MessageSquare className="w-4 h-4" /> }
  ];

  const referralSources = [
    'Search Engine (Google, Bing, etc.)',
    'Social Media (Facebook, Instagram, Twitter)',
    'Friend or Family Member',
    'Healthcare Provider',
    'Mental Health Professional',
    'Community Event',
    'Barbershop or Local Business',
    'Online Article or Blog',
    'Detroit Community Organization',
    'Other (please specify below)'
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\(\)\+\.]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.hearAboutUs) newErrors.hearAboutUs = 'Please tell us how you heard about us';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate form submission (replace with actual Netlify form submission)
      const formElement = e.target as HTMLFormElement;
      const netlifyFormData = new FormData(formElement);
      
      // Add the volunteer interest as a readable value
      netlifyFormData.set('interestedInVolunteering', formData.interestedInVolunteering ? 'yes' : 'no');
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(netlifyFormData as any).toString()
      });

      if (response.ok) {
        onSuccess();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ submit: 'There was an error submitting the form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <form 
      name="join-us" 
      method="POST" 
      data-netlify="true" 
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Netlify form fields */}
      <input type="hidden" name="form-name" value="join-us" />
      <input type="hidden" name="bot-field" />
      
      {/* Error message */}
      {errors.submit && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          {errors.submit}
        </div>
      )}

      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
            First Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 placeholder-gray-500 ${
                errors.firstName ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your first name"
            />
          </div>
          {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
            Last Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 placeholder-gray-500 ${
                errors.lastName ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your last name"
            />
          </div>
          {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
          Email Address *
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 placeholder-gray-500 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="your.email@example.com"
          />
        </div>
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
          Phone Number *
        </label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 placeholder-gray-500 ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="(555) 123-4567"
          />
        </div>
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
      </div>

      {/* Preferred Contact Method */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Preferred Contact Method *
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {contactMethods.map((method) => (
            <label key={method.value} className="relative">
              <input
                type="radio"
                name="preferredContact"
                value={method.value}
                checked={formData.preferredContact === method.value}
                onChange={handleInputChange}
                className="sr-only"
              />
              <div className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                formData.preferredContact === method.value
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                  : 'border-gray-300 hover:border-emerald-300 text-gray-800' 
              }`}>
                {method.icon}
                <span className="ml-2 font-medium">{method.label}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* How did you hear about us */}
      <div>
        <label htmlFor="hearAboutUs" className="block text-sm font-semibold text-gray-700 mb-2">
          How did you hear about us? *
        </label>
        <select
          id="hearAboutUs"
          name="hearAboutUs"
          value={formData.hearAboutUs}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 ${
            errors.hearAboutUs ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value="">Please select...</option>
          {referralSources.map((source, index) => (
            <option key={index} value={source}>{source}</option>
          ))}
        </select>
        {errors.hearAboutUs && <p className="mt-1 text-sm text-red-600">{errors.hearAboutUs}</p>}
      </div>

      {/* Volunteer Interest */}
      <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-6 rounded-lg">
        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="checkbox"
            name="interestedInVolunteering"
            checked={formData.interestedInVolunteering}
            onChange={handleInputChange}
            className="mt-1 w-5 h-5 text-emerald-600 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 focus:ring-2"
          />
          <div>
            <span className="text-sm font-semibold text-gray-700 flex items-center">
              <Users className="w-4 h-4 mr-2 text-emerald-600" />
              Interested in Volunteering?
            </span>
            <p className="text-sm text-gray-600 mt-1">
              Check this box if you'd like to learn about volunteer opportunities to help other men in our community. 
              We'll provide more information about ways you can contribute based on your interests and availability.
            </p>
          </div>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-emerald-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Joining Community...
          </>
        ) : (
          'Join Our Community'
        )}
      </button>

      {/* Privacy Notice */}
      <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
        <p className="mb-2">
          <strong>Your Privacy Matters:</strong> We take your privacy seriously and will never share your personal information 
          without your consent. Your information is used solely to:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Connect you with appropriate support groups and resources</li>
          <li>Send you updates about community events and workshops</li>
          <li>Match you with volunteer opportunities (if you expressed interest)</li>
          <li>Provide crisis support resources when needed</li>
        </ul>
        <p className="mt-3 text-xs">
          By submitting this form, you agree to receive communications from A Safe Space For Men. 
          You can unsubscribe at any time.
        </p>
      </div>
    </form>
  );
};

export default JoinUsForm;