'use client';

import React, { useState } from 'react';
import { CheckCircle, Users, Heart, ArrowRight, Phone, Mail, MessageSquare, Globe, Handshake, Target } from 'lucide-react';
import JoinUsForm from '@/components/forms/JoinUsForm';
import Image from 'next/image';

const JoinUsPageComponent = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const benefits = [
    {
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      title: "Supportive Community",
      description: "Connect with men who understand your journey and share similar experiences"
    },
    {
      icon: <Heart className="w-6 h-6 text-emerald-600" />,
      title: "Mental Health Resources",
      description: "Access curated resources, workshops, and professional referrals"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-emerald-600" />,
      title: "Safe Space to Share",
      description: "Express yourself freely in a non-judgmental, confidential environment"
    },
    {
      icon: <Target className="w-6 h-6 text-emerald-600" />,
      title: "Personal Growth",
      description: "Develop emotional resilience and healthy coping strategies"
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-600" />,
      title: "Community Events",
      description: "Participate in workshops, wellness walks, and community gatherings"
    },
    {
      icon: <Handshake className="w-6 h-6 text-emerald-600" />,
      title: "Volunteer Opportunities",
      description: "Give back by helping other men on their mental health journey"
    }
  ];

  const testimonials = [
    {
      quote: "Joining this community was the best decision I made for my mental health. I finally found men who get it.",
      name: "Marcus T.",
      role: "Community Member"
    },
    {
      quote: "The support here is genuine. No judgment, just real conversations about real struggles.",
      name: "David L.", 
      role: "Support Group Participant"
    },
    {
      quote: "I came for help but stayed to help others. Being part of this community gives my life purpose.",
      name: "James R.",
      role: "Volunteer Member"
    }
  ];

  const nextSteps = [
    {
      step: "1",
      title: "Submit Your Information",
      description: "Complete the form below to join our community"
    },
    {
      step: "2", 
      title: "Welcome Call",
      description: "We'll reach out via your preferred method within 48 hours"
    },
    {
      step: "3",
      title: "Find Your Fit",
      description: "We'll help you find the right support group or volunteer opportunity"
    },
    {
      step: "4",
      title: "Start Your Journey",
      description: "Begin participating in our community and prioritizing your well-being"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-emerald-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <Image 
                src="/images/handshake-wordcloud.png"
                alt="Community handshake with supportive words - cooperation, welcome, connect"
                width={300}
                height={150}
                className="mx-auto mb-6 max-w-sm w-full h-auto"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Join Our Community
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Take the first step towards prioritizing your mental health and connecting with others on the same journey.
            </p>
            <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
              You don't have to face life's challenges alone. Our community provides a safe, supportive environment 
              where men can openly discuss mental health, share experiences, and grow together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#join-form"
                className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Join Today
              </a>
              <a 
                href="#benefits"
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Join A Safe Space For Men?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the benefits of being part of a community that prioritizes men's mental health and emotional well-being.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h3 className="text-xl font-bold text-gray-900 ml-3">{benefit.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Members Say</h2>
            <p className="text-lg text-gray-600">Real experiences from men who found strength in community</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                <div className="text-emerald-600 text-4xl mb-4" aria-hidden="true">"</div>
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  {testimonial.quote}
                </blockquote>
                <div className="border-t pt-4">
                  <cite className="font-semibold text-gray-900 not-italic">{testimonial.name}</cite>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Form Section */}
      <section id="join-form" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Join?</h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll welcome you into our community. We'll reach out within 48 hours 
                  to help you get started on your journey.
                </p>
              </div>
              
              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-emerald-800 mb-4">Welcome to the Community!</h3>
                  <p className="text-emerald-700 mb-6">
                    Thank you for joining A Safe Space For Men. We'll reach out via your preferred contact method 
                    within 48 hours to help you get started.
                  </p>
                  <div className="bg-white rounded-lg p-4 text-left">
                    <h4 className="font-semibold text-gray-900 mb-2">What happens next?</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• We'll contact you within 48 hours</li>
                      <li>• Help you find the right support group</li>
                      <li>• Share upcoming events and workshops</li>
                      <li>• Connect you with volunteer opportunities (if interested)</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <JoinUsForm onSuccess={() => setFormSubmitted(true)} />
              )}
            </div>

            {/* Next Steps */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">What to Expect</h3>
              <div className="space-y-6">
                {nextSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Heart className="w-5 h-5 text-emerald-600 mr-2" />
                  Our Commitment to You
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    Confidential and judgment-free environment
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    Respectful communication at all times
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    Support when you need it most
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                    No pressure - participate at your own pace
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Support Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Immediate Support?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            If you're experiencing a mental health crisis, please reach out for immediate help. You don't have to wait to join our community to get support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a 
              href="tel:988" 
              className="bg-red-600 hover:bg-red-700 text-white p-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <Phone className="w-8 h-8 mx-auto mb-2" />
              <div className="font-bold text-lg">988</div>
              <div className="text-sm">Crisis Lifeline</div>
            </a>
            <a 
              href="tel:911" 
              className="bg-red-600 hover:bg-red-700 text-white p-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              <Phone className="w-8 h-8 mx-auto mb-2" />
              <div className="font-bold text-lg">911</div>
              <div className="text-sm">Emergency</div>
            </a>
            <div className="bg-red-600 text-white p-6 rounded-lg">
              <MessageSquare className="w-8 h-8 mx-auto mb-2" />
              <div className="font-bold text-lg">Text HOME</div>
              <div className="text-sm">to 741741</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Your Mental Health Matters
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Take the first step towards a healthier, more connected you. Join thousands of men who have chosen to prioritize their mental health.
          </p>
          <a 
            href="#join-form" 
            className="inline-flex items-center bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            Join Us Today <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default JoinUsPageComponent;
