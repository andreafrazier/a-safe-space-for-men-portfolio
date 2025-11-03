import React from 'react';
import type { Metadata } from 'next';
import JoinUsForm from '@/components/forms/JoinUsForm';
import { Heart, Users, Calendar, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Join Us',
  description: 'Join A Safe Space For Men community. Connect with others who prioritize mental health, attend support groups, workshops, and make a difference in men\'s mental health advocacy.',
  keywords: ['join community', 'men\'s mental health', 'support groups', 'Detroit', 'volunteer', 'mental health advocacy'],
  openGraph: {
    title: 'Join A Safe Space For Men Community',
    description: 'Take the first step towards connecting with other men who prioritize their mental health and well-being.',
    images: [
      {
        url: '/images/og-join.jpg',
        width: 1200,
        height: 630,
        alt: 'Join A Safe Space For Men - Building community for men\'s mental health',
      },
    ],
  },
};

const JoinUsPage = () => {
  const communityBenefits = [
    {
      icon: <Users className="w-8 h-8 text-emerald-600" />,
      title: "Supportive Community",
      description: "Connect with men who understand your journey and provide non-judgmental support."
    },
    {
      icon: <Calendar className="w-8 h-8 text-emerald-600" />,
      title: "Regular Events",
      description: "Attend workshops, support groups, and community activities designed for growth and connection."
    },
    {
      icon: <Heart className="w-8 h-8 text-emerald-600" />,
      title: "Make a Difference",
      description: "Help break stigma and create positive change in men's mental health awareness."
    },
    {
      icon: <Phone className="w-8 h-8 text-emerald-600" />,
      title: "Ongoing Support",
      description: "Access resources, referrals, and connections to professional mental health services."
    }
  ];

  const testimonials = [
    {
      quote: "Joining this community was the best decision I made for my mental health. I finally found a place where I could be vulnerable without judgment.",
      name: "Marcus T.",
      role: "Community Member since 2023"
    },
    {
      quote: "The support group sessions gave me tools I never knew I needed. I'm not just surviving anymore - I'm thriving.",
      name: "David L.",
      role: "Workshop Participant"
    },
    {
      quote: "Volunteering with A Safe Space For Men helped me find purpose while supporting other men on their journey.",
      name: "James R.",
      role: "Community Volunteer"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="pt-16 bg-gradient-to-br from-emerald-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <Image 
                src="/images/handshake-wordcloud.png"
                alt="Mental health resources and support network illustration"
                width={400}
                height={200}
                className="mx-auto mb-6 max-w-md w-full h-auto rounded-lg"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Journey Starts Here
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Join a community of men who believe that prioritizing mental health is a sign of strength, not weakness.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-lg max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Join Our Community?</h2>
              <p className="text-gray-700 leading-relaxed">
                At A Safe Space For Men, we create environments where vulnerability is valued, stories are shared, 
                and every man feels seen, heard, and supported. Whether you're seeking connection, wanting to volunteer, 
                or looking to make a difference in men's mental health advocacy, you belong here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What You'll Gain</h2>
            <p className="text-lg text-gray-600">The benefits of joining our supportive community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {communityBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Community Voices</h2>
            <p className="text-lg text-gray-600">Hear from men who found their strength in our community</p>
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Join?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fill out the form below to become part of our community. We'll connect you with upcoming events, 
              volunteer opportunities, and ways to support men's mental health in Detroit and beyond.
            </p>
          </div>
          
          <JoinUsForm />
        </div>
      </section>

      {/* Updated Donation Section */}
      <section id="donation" className="py-20 bg-gradient-to-br from-emerald-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Support Our Mission</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Your donation supports free support groups, mental health resources, and community programs 
              that help men prioritize their emotional well-being.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Impact messaging */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Your Impact</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-700 font-bold">$25</span>
                  </div>
                  <div className="text-white">
                    <p className="font-semibold mb-1">Support Group Materials</p>
                    <p className="text-emerald-100 text-sm">Resources for one month of weekly meetings</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-700 font-bold">$50</span>
                  </div>
                  <div className="text-white">
                    <p className="font-semibold mb-1">Community Workshop</p>
                    <p className="text-emerald-100 text-sm">Funds mental health education for 20 men</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-700 font-bold">$100</span>
                  </div>
                  <div className="text-white">
                    <p className="font-semibold mb-1">Resource Directory</p>
                    <p className="text-emerald-100 text-sm">Helps men connect with therapists and services</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-700 font-bold">$250</span>
                  </div>
                  <div className="text-white">
                    <p className="font-semibold mb-1">Community Outreach</p>
                    <p className="text-emerald-100 text-sm">Reaches 100+ men with mental health awareness</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/#donate"
                className="inline-flex items-center bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600 mb-4"
              >
                Donate Now <Heart className="w-5 h-5 ml-2" />
              </Link>
              <p className="text-emerald-100 text-sm">
                A Safe Space For Men is a 501(c)(3) organization. Your donation is tax-deductible 
                and directly supports men's mental health and community building efforts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUsPage;