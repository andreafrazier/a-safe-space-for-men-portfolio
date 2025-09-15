'use client';

import React, { useState } from 'react';
import { Users, Heart, Calendar, Mail, Phone, User, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

const JoinUsForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    state: 'Michigan',
    interests: [] as string[],
    availability: [] as string[],
    experience: '',
    motivation: '',
    agreeToContact: false,
    agreeToTerms: false
  });

  const interestOptions = [
    { id: 'support-groups', label: 'Support Groups', icon: <Users className="w-4 h-4" /> },
    { id: 'workshops', label: 'Educational Workshops', icon: <Calendar className="w-4 h-4" /> },
    { id: 'volunteering', label: 'Volunteering', icon: <Heart className="w-4 h-4" /> },
    { id: 'events', label: 'Community Events', icon: <MapPin className="w-4 h-4" /> },
    { id: 'advocacy', label: 'Mental Health Advocacy', icon: <Mail className="w-4 h-4" /> },
    { id: 'mentoring', label: 'Peer Mentoring', icon: <User className="w-4 h-4" /> }
  ];

  const availabilityOptions = [
    { id: 'weekday-mornings', label: 'Weekday Mornings' },
    { id: 'weekday-afternoons', label: 'Weekday Afternoons' },
    { id: 'weekday-evenings', label: 'Weekday Evenings' },
    { id: 'weekend-mornings', label: 'Weekend Mornings' },
    { id: 'weekend-afternoons', label: 'Weekend Afternoons' },
    { id: 'weekend-evenings', label: 'Weekend Evenings' },
    { id: 'flexible', label: 'Flexible Schedule' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleInterestChange = (interestId: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(id => id !== interestId)
        : [...prev.interests, interestId]
    }));
  };

  const handleAvailabilityChange = (availabilityId: string) => {
  setFormData(prev => ({
    ...prev,
    availability: prev.availability.includes(availabilityId)
      ? prev.availability.filter(id => id !== availabilityId)
      : [...prev.availability, availabilityId]
  }));
};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create FormData object for Netlify
      const formParams = new URLSearchParams();
      
      // Add form name for Netlify
      formParams.append('form-name', 'join-us');
      
      // Add all form fields
      formParams.append('firstName', formData.firstName);
      formParams.append('lastName', formData.lastName);
      formParams.append('email', formData.email);
      formParams.append('phone', formData.phone);
      formParams.append('city', formData.city);
      formParams.append('state', formData.state);
      formParams.append('interests', formData.interests.join(', '));
      formParams.append('availability', formData.availability.join(', '));
      formParams.append('experience', formData.experience);
      formParams.append('motivation', formData.motivation);
      formParams.append('agreeToContact', formData.agreeToContact ? 'Yes' : 'No');
      formParams.append('agreeToTerms', formData.agreeToTerms ? 'Yes' : 'No');
      formParams.append('submissionDate', new Date().toISOString());

      // Submit to Netlify
      const response = await fetch('/_forms.html', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formParams.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          city: '',
          state: 'Michigan',
          interests: [],
          availability: [],
          experience: '',
          motivation: '',
          agreeToContact: false,
          agreeToTerms: false
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Our Community!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for joining A Safe Space For Men. We've received your information and will be in touch soon about upcoming events and opportunities.
          </p>
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-emerald-800 mb-2">What's Next?</h3>
            <ul className="text-emerald-700 text-left space-y-2">
              <li>• You'll receive a welcome email within 24 hours</li>
              <li>• We'll notify you about upcoming support groups and workshops</li>
              <li>• Check out our resources page for immediate support</li>
              <li>• Follow us on social media for community updates</li>
            </ul>
          </div>
          <div className="space-y-4">
            <a 
              href="/resources" 
              className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors mr-4"
            >
              Explore Resources
            </a>
            <a 
              href="/" 
              className="inline-block border-2 border-emerald-600 text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              Return Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Disclaimer Notice */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded-r-lg">
        <div className="flex items-start">
          <AlertCircle className="w-6 h-6 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Important Notice</h3>
            <p className="text-blue-700 text-sm leading-relaxed">
              A Safe Space For Men provides educational resources and community support. We are not a substitute for professional mental health care. 
              If you are experiencing a mental health crisis, please contact 988 (Suicide & Crisis Lifeline) or call 911 immediately. 
              By joining our community, you acknowledge that we provide peer support and educational resources, not clinical treatment.
            </p>
          </div>
        </div>
      </div>

      <form 
        name="join-us" 
        method="POST" 
        data-netlify="true" 
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-8"
      >
        {/* Hidden fields for Netlify */}
        <input type="hidden" name="form-name" value="join-us" />
        <input type="hidden" name="bot-field" />

        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
              <p className="text-red-700">
                There was an error submitting your form. Please try again or contact us directly at asafespaceformen@gmail.com
              </p>
            </div>
          </div>
        )}

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Community</h2>
          <p className="text-lg text-gray-600">
            Take the first step towards connecting with other men who prioritize their mental health and well-being.
          </p>
        </div>

        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-gray-900 placeholder-gray-500"
              placeholder="Enter your first name"
            />
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-gray-900 placeholder-gray-500"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-gray-900 placeholder-gray-500"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-gray-900 placeholder-gray-500"
              placeholder="(555) 123-4567"
            />
          </div>
        </div>

        {/* Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-gray-900 placeholder-gray-500"
              placeholder="Detroit"
            />
          </div>
          
          <div>
            <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">
              State
            </label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-gray-900 placeholder-gray-500"
            >
              <option value="Michigan">Michigan</option>
              <option value="Ohio">Ohio</option>
              <option value="Illinois">Illinois</option>
              <option value="Indiana">Indiana</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Interests */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-gray-700 mb-4">
            What interests you most? (Select all that apply)
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {interestOptions.map((option) => (
              <label
                key={option.id}
                className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  formData.interests.includes(option.id)
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                    : 'border-gray-300 hover:border-emerald-300 hover:bg-emerald-50 text-gray-800'
                }`}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={formData.interests.includes(option.id)}
                  onChange={() => handleInterestChange(option.id)}
                />
                <div className="flex items-center">
                  <div className="mr-3 text-emerald-600">
                    {option.icon}
                  </div>
                  <span className="text-sm font-medium">{option.label}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-gray-700 mb-4">
            When are you typically available for events or activities? (Select all that apply)
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {availabilityOptions.map((option) => (
              <label
                key={option.id}
                className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  formData.availability.includes(option.id)
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                    : 'border-gray-300 hover:border-emerald-300 hover:bg-emerald-50 text-gray-900'
                }`}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={formData.availability.includes(option.id)}
                  onChange={() => handleAvailabilityChange(option.id)}
                />
                <div className="flex items-center">
                  <div className="w-4 h-4 border-2 border-emerald-500 rounded mr-3 flex items-center justify-center">
                    {formData.availability.includes(option.id) && (
                      <div className="w-2 h-2 bg-emerald-500 rounded"></div>
                    )}
                  </div>
                  <span className="text-sm font-medium">{option.label}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-8">
          <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
            Do you have any experience with mental health advocacy, support groups, or volunteer work?
          </label>
          <textarea
            id="experience"
            name="experience"
            rows={4}
            value={formData.experience}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none text-gray-900 placeholder-gray-500"
            placeholder="Tell us about any relevant experience you have (optional)"
          />
        </div>

        {/* Motivation */}
        <div className="mb-8">
          <label htmlFor="motivation" className="block text-sm font-semibold text-gray-700 mb-2">
            What motivates you to join our community?
          </label>
          <textarea
            id="motivation"
            name="motivation"
            rows={4}
            value={formData.motivation}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none text-gray-900 placeholder-gray-500"
            placeholder="Share what brings you to A Safe Space For Men (optional)"
          />
        </div>

        {/* Agreements */}
        <div className="space-y-4 mb-8">
          <label className="flex items-start">
            <input
              type="checkbox"
              name="agreeToContact"
              checked={formData.agreeToContact}
              onChange={handleInputChange}
              className="mt-1 mr-3 h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
              required
            />
            <span className="text-sm text-gray-700">
              I agree to be contacted by A Safe Space For Men regarding events, workshops, and volunteer opportunities. 
              You can unsubscribe at any time. *
            </span>
          </label>
          
          <label className="flex items-start">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              className="mt-1 mr-3 h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
              required
            />
            <span className="text-sm text-gray-700">
              I understand that A Safe Space For Men provides peer support and educational resources, not clinical treatment. 
              I acknowledge the disclaimer above regarding mental health crises. *
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-200'
            } text-white shadow-lg`}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Joining Community...
              </span>
            ) : (
              'Join Our Community'
            )}
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Questions? Contact us at <a href="mailto:asafespaceformen@gmail.com" className="text-emerald-600 hover:underline">asafespaceformen@gmail.com</a></p>
        </div>
      </form>
    </div>
  );
};

export default JoinUsForm;