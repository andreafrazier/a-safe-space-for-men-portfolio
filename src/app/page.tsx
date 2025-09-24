import React from "react";
import { Calendar, Users, Heart, ArrowRight, AlertTriangle, Shield, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
//import DonationForm from '../components/ui/DonationForm';



export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Suicide Prevention & Men\'s Mental Health - Detroit and surrounding areas',
    description: 'A Safe Space For Men aims to foster resilience, improve mental health and suicide prevention statistics, and cultivate a culture where every man feels seen, heard, and supported.',
    keywords: ['suicide prevention', 'men\'s mental health', 'Detroit', 'crisis support', '988 crisis lifeline', 'mental health emergency'],
  };
}

const HomePage = () => {
  const stats = [
    {
      percentage: "4x",
      description: "higher suicide rate for men than women",
      icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
      context: "crisis"
    },
    {
      percentage: "75%",
      description: "of completed suicides are by men",
      icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
      context: "crisis"
    },
    {
      percentage: "40%",
      description: "of men have never discussed their mental health",
      icon: <Users className="w-8 h-8 text-emerald-600" />,
      context: "stigma"
    },
    {
      percentage: "90%",
      description: "of suicides are preventable with proper intervention",
      icon: <Shield className="w-8 h-8 text-emerald-600" />,
      context: "hope"
    }
  ];

   const preventionAreas = [
    {
      title: "Crisis Intervention",
      description: "24/7 access to crisis resources and immediate support for men in suicidal crisis.",
      icon: <Phone className="w-8 h-8 text-red-600" />,
      action: "Get Help Now",
      href: "/suicide-prevention"
    },
    {
      title: "Community Education",
      description: "Breaking down stigma and teaching communities how to recognize warning signs and support men in crisis.",
      icon: <Users className="w-8 h-8 text-emerald-600" />,
      action: "Learn More",
      href: "/suicide-prevention#warning-signs"
    },
    {
      title: "Support Networks",
      description: "Building connections and safe spaces where men can discuss mental health without judgment.",
      icon: <Heart className="w-8 h-8 text-emerald-600" />,
      action: "Join Community",
      href: "/join"
    }
  ];

  const testimonials = [
    {
      quote: "A Safe Space For Men helped me realize I wasn't alone in my struggles. The support group gave me tools I never knew I needed.",
      name: "Marcus T.",
      role: "Community Member"
    },
    {
      quote: "Finding this community changed my perspective on vulnerability. It's okay to not be okay, and it's strength to seek help.",
      name: "David L.",
      role: "Community Advocate"
    },
    {
      quote: "The resources and connections I found here literally saved my life. I'm grateful for this safe space.",
      name: "James R.",
      role: "Discussion Group Participant"
    }
  ];

  const upcomingEvents = [
    {
      title: "Suicide Prevention Gatekeeper Training",
      date: "Spring 2025",
      time: "TBD",
      location: "Detroit Community Centers",
      description: "Training community members to recognize warning signs and connect people to life-saving resources."
    },
    {
      title: "Men's Crisis Support Group",
      date: "Summer 2025", 
      time: "TBD",
      location: "Safe Space Locations",
      description: "Peer support groups specifically for men who have experienced suicidal thoughts or attempts."
    },
    {
      title: "Community Mental Health Awareness",
      date: "Fall 2025",
      time: "TBD", 
      location: "Detroit Metro Area",
      description: "Public education events to reduce stigma and increase awareness of men's suicide prevention."
    }
  ];

  const partners = [
    { name: "Detroit Mental Health Alliance", logo: "🤝" },
    { name: "Michigan Men's Health Initiative", logo: "💪" },
    { name: "Community Wellness Center", logo: "🏥" },
    { name: "Barbershop Collective", logo: "✂️" },
    { name: "Local Faith Communities", logo: "⛪" },
    { name: "Detroit Therapy Network", logo: "🧠" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-emerald-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Your Mental Health Matters
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Together, we can break the stigma and foster hope.
            </p>
            <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
              A SAFE SPACE FOR MEN PROVIDES SUICIDE PREVENTION RESOURCES, CRISIS SUPPORT, AND MENTAL HEALTH ADVOCACY 
              SPECIFICALLY DESIGNED FOR MEN IN DETROIT AND BEYOND.
            </p>

            {/* Crisis Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="tel:988"
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Crisis Help: Call 988
              </a>
              <Link 
                href="/suicide-prevention"
                className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Prevention Resources
              </Link>
            </div>
            
            {/* Secondary Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/join"
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Join Our Community
              </Link>
              <Link 
                href="/about"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Learn About Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Mission Statement with Prevention Focus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Suicide Prevention Mission</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our mission is to prevent male suicide through education, crisis intervention, and community support. 
                We create safe, culturally relevant spaces where men can discuss mental health challenges, access 
                life-saving resources, and build supportive networks that foster resilience and hope.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                By addressing the unique factors that contribute to men's higher suicide rates—including social isolation, 
                stigma around help-seeking, and cultural barriers to emotional expression—we aim to save lives and 
                create lasting change in Detroit and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Stats Section with Suicide Prevention Focus */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Crisis We're Addressing</h2>
            <p className="text-lg text-gray-600">Understanding the scope of male suicide and the power of prevention</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow ${
                stat.context === 'crisis' ? 'bg-red-50 border border-red-200' :
                stat.context === 'hope' ? 'bg-emerald-50 border border-emerald-200' :
                'bg-white border border-gray-200'
              }`}>
                <div className="flex justify-center mb-4" aria-hidden="true">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.percentage}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Prevention Focus Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Prevention Approach</h2>
            <p className="text-lg text-gray-600">Three critical areas where we focus our suicide prevention efforts</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {preventionAreas.map((area, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="flex justify-center mb-6">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{area.description}</p>
                <Link 
                  href={area.href}
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold"
                >
                  {area.action} <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Updated Testimonials with Suicide Prevention Focus */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stories of Hope and Recovery</h2>
            <p className="text-lg text-gray-600">Real voices from men whose lives have been impacted by our prevention efforts</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg p-8 shadow-lg">
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

      {/* Upcoming Prevention Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Prevention Programs</h2>
              <p className="text-lg text-gray-600">Join us in building suicide prevention capacity in our community</p>
            </div>
            <Link 
              href="/suicide-prevention" 
              className="hidden md:flex items-center text-emerald-600 hover:text-emerald-700 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1"
            >
              View All Prevention Resources <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <article key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-emerald-100">
                <div className="flex items-center mb-4">
                  <Shield className="w-5 h-5 text-emerald-600 mr-2" aria-hidden="true" />
                  <time className="text-sm text-gray-600">{event.date}</time>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-1 text-sm text-gray-500 mb-4">
                  <p><span aria-label="Time">⏰</span> {event.time}</p>
                  <p><span aria-label="Location">📍</span> {event.location}</p>
                </div>
                <Link 
                  href="/suicide-prevention"
                  className="block w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors text-center font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  Learn More
                </Link>
              </article>
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link 
              href="/suicide-prevention" 
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1"
            >
              View All Prevention Resources <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Updated Community Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Prevention Partners</h2>
            <p className="text-lg text-gray-600">Working together to save lives and prevent male suicide</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-8 mb-4 hover:bg-gray-50 transition-colors cursor-pointer shadow-sm">
                  <div className="text-4xl mb-2" role="img" aria-label={`${partner.name} logo`}>
                    {partner.logo}
                  </div>
                </div>
                <p className="text-sm text-gray-600 font-medium">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Updated Donation Section with Prevention Focus */}
      <section id="donation" className="py-20 bg-gradient-to-br from-emerald-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Support Life-Saving Work</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Your donation directly supports suicide prevention programs, crisis intervention resources, and community education that saves men's lives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Impact messaging with prevention focus */}
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-6">Your Life-Saving Impact</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">$25</span>
                  </div>
                  <p className="text-emerald-100">Provides crisis resource materials for one community member</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">$50</span>
                  </div>
                  <p className="text-emerald-100">Funds gatekeeper training for community leaders and barbers</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">$100</span>
                  </div>
                  <p className="text-emerald-100">Supports a suicide prevention education workshop</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">$250</span>
                  </div>
                  <p className="text-emerald-100">Sponsors comprehensive crisis support resources for one month</p>
                </div>
              </div>
            </div>

            {/* Donation Form */}
            {/* <DonationForm /> */}
          {/* </div> */}

          {/* <div className="text-center mt-12"> */}
            <p className="text-emerald-100 text-sm">
              A Safe Space For Men is a 501(c)(3) organization. Your donation is tax-deductible and directly supports men's suicide prevention and mental health advocacy efforts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;