import React from "react";
import { Calendar, Users, Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import DonationForm from '@/components/donationform';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home',
    description: 'A Safe Space For Men aims to foster resilience, improve mental health outcomes, and cultivate a culture where every man feels seen, heard, and valued.',
  };
}

const HomePage = () => {
  const stats = [
    {
      percentage: "64%",
      description: "of men are at risk of moderate-high stress",
      icon: <Heart className="w-8 h-8 text-emerald-600" />
    },
    {
      percentage: "40%",
      description: "have never discussed their mental health",
      icon: <Users className="w-8 h-8 text-emerald-600" />
    },
    {
      percentage: "4x",
      description: "higher suicide rate than women",
      icon: <Heart className="w-8 h-8 text-emerald-600" />
    },
    {
      percentage: "1 in 2",
      description: "men at risk of social isolation",
      icon: <Users className="w-8 h-8 text-emerald-600" />
    }
  ];

  const testimonials = [
    {
      quote: "A Safe Space For Men helped me realize I wasn't alone in my struggles. The support group gave me tools I never knew I needed.",
      name: "Marcus T.",
      role: "Group Member"
    },
    {
      quote: "Finding this community changed my perspective on vulnerability. It's okay to not be okay, and it's strength to seek help.",
      name: "David L.",
      role: "Workshop Participant"
    },
    {
      quote: "The resources and connections I found here literally saved my life. I'm grateful for this safe space.",
      name: "James R.",
      role: "Community Member"
    }
  ];

  const upcomingEvents = [
    {
      title: "Men's Mental Health Workshop",
      date: "August 15, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Detroit Community Center",
      description: "Join us for an interactive workshop on stress management and emotional wellness."
    },
    {
      title: "Support Group Meeting",
      date: "August 22, 2025", 
      time: "7:00 PM - 8:30 PM",
      location: "Virtual Meeting",
      description: "Weekly support group session focusing on building healthy relationships."
    },
    {
      title: "Community Wellness Walk",
      date: "September 5, 2025",
      time: "9:00 AM - 11:00 AM", 
      location: "Belle Isle Park",
      description: "Join our community for a mental health awareness walk and networking."
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
      <section className="pt-24 bg-gradient-to-br from-emerald-50 to-blue-50 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <Image 
                src="/images/breakthestigma-green.png" 
                alt="Break the Stigma - Green awareness ribbon with supportive text promoting mental health awareness"
                width={400}
                height={200}
                className="mx-auto mb-8 max-w-md w-full h-auto"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Empower Your Journey
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Together, we can break the stigma and foster hope.
            </p>
            <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
              A SAFE SPACE FOR MEN AIMS TO FOSTER RESILIENCE, IMPROVE MENTAL HEALTH OUTCOMES, 
              AND CULTIVATE A CULTURE WHERE EVERY MAN FEELS SEEN, HEARD, AND VALUED.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/join"
                className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Join Our Community
              </Link>
              <Link 
                href="/about"
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our mission is to create a safe, supportive, and non-judgmental space where men can openly 
                explore and prioritize their emotional well-being. Through community support groups, mental 
                health education, and therapy referrals, we are dedicated to breaking down societal stigmas 
                around vulnerability and emotional expression.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We empower men to connect, share, and grow in an environment of mutual respect and understanding. 
                By fostering open dialogue, increasing awareness, and connecting individuals with competent resources, 
                we aim to build resilience and cultivate a culture where every man feels seen, heard, and valued.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Reality We're Addressing</h2>
            <p className="text-lg text-gray-600">Understanding the scope of men's mental health challenges</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
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

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Voices from Our Community</h2>
            <p className="text-lg text-gray-600">Real stories from men who found their strength</p>
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

      {/* Upcoming Events Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
              <p className="text-lg text-gray-600">Join us for community building and support</p>
            </div>
            <Link 
              href="/events" 
              className="hidden md:flex items-center text-emerald-600 hover:text-emerald-700 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1"
            >
              View All Events <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <article key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 text-emerald-600 mr-2" aria-hidden="true" />
                  <time className="text-sm text-gray-600">{event.date}</time>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="space-y-1 text-sm text-gray-500 mb-4">
                  <p><span aria-label="Time">⏰</span> {event.time}</p>
                  <p><span aria-label="Location">📍</span> {event.location}</p>
                </div>
                <Link 
                  href="/events"
                  className="block w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors text-center font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  Learn More
                </Link>
              </article>
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link 
              href="/events" 
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1"
            >
              View All Events <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Community Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Community Partners</h2>
            <p className="text-lg text-gray-600">Working together to support men's mental health</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-50 rounded-lg p-8 mb-4 hover:bg-gray-100 transition-colors cursor-pointer">
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

      {/* Donation Section */}
      <section id="donation" className="py-20 bg-gradient-to-br from-emerald-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Support Our Mission</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Your donation helps us create safe spaces, provide resources, and break down barriers in men's mental health.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Impact messaging */}
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-6">Your Impact</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">$25</span>
                  </div>
                  <p className="text-emerald-100">Supports one man attending a mental health workshop</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">$50</span>
                  </div>
                  <p className="text-emerald-100">Funds educational materials for a support group session</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">$100</span>
                  </div>
                  <p className="text-emerald-100">Covers venue costs for a community wellness event</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">$250</span>
                  </div>
                  <p className="text-emerald-100">Sponsors a month of support group meetings</p>
                </div>
              </div>
            </div>

            {/* Donation Form */}
            <DonationForm />
          </div>

          <div className="text-center mt-12">
            <p className="text-emerald-100 text-sm">
              A Safe Space For Men is a 501(c)(3) organization. Your donation is tax-deductible.
            </p>
          </div>
        </div>
      </section>
    </div>
)};

export default HomePage;
            