import React from "react";
import { 
  Calendar, Users, Heart, ArrowRight, CheckCircle, Shield, 
  Brain, Stethoscope, Phone, MessageSquare, Activity
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'A Safe Space For Men - Men\'s Mental Health & Community Support in Detroit',
    description: 'Community-based mental health support for men in Detroit. Free support groups, resources, and connections for men dealing with stress, anxiety, depression, and life\'s challenges.',
    keywords: ['men\'s mental health', 'Detroit', 'support groups', 'mental health resources', 'men\'s wellness', 'therapy', 'community support'],
  };
}

const HomePage = () => {
  const stats = [
    {
      percentage: "75%",
      description: "of men report feeling stress or anxiety regularly, but most never seek support",
      icon: <Activity className="w-8 h-8 text-blue-600" />
    },
    {
      percentage: "3x",
      description: "Men are three times more likely to avoid seeking help due to stigma",
      icon: <Brain className="w-8 h-8 text-purple-600" />
    },
    {
      percentage: "1 in 5",
      description: "men will experience a mental health challenge this year—support changes outcomes",
      icon: <Heart className="w-8 h-8 text-emerald-600" />
    }
  ];

  const supportTypes = [
    {
      title: "Peer Support Groups",
      description: "Weekly gatherings where men talk openly about stress, anxiety, relationships, and life challenges in a judgment-free environment.",
      icon: <Users className="w-8 h-8 text-white" />,
      bgColor: "bg-emerald-600",
      href: "/join"
    },
    {
      title: "Mental Health Resources",
      description: "Access to therapists, treatment centers, and support services throughout Detroit—all culturally competent and experienced with men's mental health.",
      icon: <Brain className="w-8 h-8 text-white" />,
      bgColor: "bg-blue-600",
      href: "/find-support"
    },
    {
      title: "Education & Advocacy",
      description: "We're changing the conversation around men's mental health through community events, workshops, and breaking the stigma that keeps men silent.",
      icon: <Heart className="w-8 h-8 text-white" />,
      bgColor: "bg-purple-600",
      href: "/about"
    }
  ];

  const struggles = [
    {
      title: "Feeling Overwhelmed",
      description: "Work stress, financial pressure, or just feeling like everything's too much",
      icon: <CheckCircle className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Struggling with Relationships",
      description: "Marriage, dating, family conflicts, or feeling disconnected from loved ones",
      icon: <CheckCircle className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Dealing with Loss",
      description: "Grief, loss of a loved one, job loss, or major life transitions",
      icon: <CheckCircle className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Feeling Isolated",
      description: "Lonely, disconnected, or like no one really gets what you're going through",
      icon: <CheckCircle className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Anxiety or Depression",
      description: "Persistent worry, low mood, or just not feeling like yourself",
      icon: <CheckCircle className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Looking for Community",
      description: "Want to connect with other men who understand and support each other",
      icon: <CheckCircle className="w-6 h-6 text-emerald-600" />
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
      role: "Support Group Participant"
    },
    {
      quote: "I came here feeling lost and overwhelmed. I left with connections, resources, and hope. This place is doing important work.",
      name: "James R.",
      role: "Community Advocate"
    }
  ];

  const upcomingEvents = [
    {
      title: "Weekly Men's Support Group",
      date: "Every Thursday", 
      time: "7:00 PM - 8:30 PM",
      location: "SafetyZone, Detroit",
      description: "A safe space for men to openly discuss mental health challenges and support each other."
    },
    {
      title: "Managing Stress & Anxiety Workshop",
      date: "November 20, 2025",
      time: "6:00 PM - 7:30 PM", 
      location: "Virtual (Zoom)",
      description: "Practical strategies for managing stress and anxiety in daily life with expert facilitators."
    },
    {
      title: "Community Walk for Men's Mental Health",
      date: "November 22, 2025",
      time: "9:00 AM - 12:00 PM",
      location: "Belle Isle Park",
      description: "Join us for a 5K community walk to raise awareness and connect with other men."
    }
  ];

  const partners = [
    { name: "SafetyZone Behavioral Health", description: "Urgent Care Partner" },
    { name: "Henry Ford Health", description: "Healthcare Partner" },
    { name: "DWHIN", description: "Network Partner" },
    { name: "Meijer", description: "Community Partner" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Updated Messaging */}
      <section className="pt-16 bg-gradient-to-br from-emerald-50 via-blue-50 to-teal-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* <div className="mb-8">
              <Image 
                src="/images/handshake.png"
                alt="Men supporting each other through mental health challenges"
                width={400}
                height={200}
                className="mx-auto max-w-md w-full h-auto rounded-lg"
                priority
              />
            </div> */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              You Don't Have to Carry <br className="hidden md:block"/>Everything Alone
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-6 max-w-4xl mx-auto">
              A Safe Space For Men provides mental health support, community connection, 
              and resources for men in Detroit facing life's challenges.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Whether you're dealing with stress, anxiety, depression, relationship struggles, 
              or just feeling overwhelmed—this is your space. No judgment. Just support.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                href="/join" 
                className="inline-flex items-center justify-center bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Join a Support Group <Users className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/start-here" 
                className="inline-flex items-center justify-center border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Start Here <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                <span>Free Support Groups</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-emerald-600 mr-2" />
                <span>Confidential & Safe</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-emerald-600 mr-2" />
                <span>Men Supporting Men</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Support You Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Support You
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We meet you where you are with support that actually fits your life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportTypes.map((support, index) => (
              <div key={index} className={`${support.bgColor} rounded-xl p-8 text-white hover:shadow-xl transition-shadow`}>
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {support.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{support.title}</h3>
                <p className="mb-6 leading-relaxed text-white/90">
                  {support.description}
                </p>
                <Link href={support.href} className="inline-flex items-center text-white font-semibold hover:underline">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* You're Not Alone Statistics */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              You're Not Alone
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Mental health challenges affect men everywhere. Here's why we do this work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold text-emerald-400 mb-2">{stat.percentage}</div>
                <p className="text-gray-300 leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-gray-300 mb-6">
              Getting support isn't weakness. It's strength.
            </p>
            <Link 
              href="/start-here" 
              className="inline-flex items-center bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Take the First Step <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* This Is For You If... Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              This Is For You If...
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              You don't have to be in crisis to reach out. We're here for everyday struggles too.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {struggles.map((struggle, index) => (
              <div key={index} className="flex items-start space-x-4 bg-emerald-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 mt-1">
                  {struggle.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{struggle.title}</h3>
                  <p className="text-gray-700">{struggle.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 bg-blue-50 border-2 border-blue-200 rounded-xl p-8 max-w-3xl mx-auto">
            <p className="text-lg text-gray-900 leading-relaxed">
              <strong>You don't have to have everything figured out.</strong> You don't need to be 
              "bad enough" to deserve support. If you're reading this and thinking 
              "maybe I should reach out"—that's enough.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stories from Our Community</h2>
            <p className="text-lg text-gray-600">Real voices from men whose lives have been impacted</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
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

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="mb-4 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Upcoming Events</h2>
              <p className="text-lg text-gray-600">Join us for support groups, workshops, and community gatherings</p>
            </div>
            <Link 
              href="/events" 
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded px-2 py-1"
            >
              View All Events <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <article key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-emerald-500">
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 text-emerald-600 mr-2" />
                  <time className="text-sm font-semibold text-gray-600">{event.date}</time>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                <div className="space-y-1 text-sm text-gray-500 mb-4">
                  <p className="flex items-center">
                    <span className="mr-2">⏰</span> {event.time}
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">📍</span> {event.location}
                  </p>
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
        </div>
      </section>

      {/* Community Partners */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-lg text-gray-600">Working together to support men's mental health in Detroit</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-sm text-emerald-600 font-medium">{partner.description}</p>
              </div>
            ))}
          </div>
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
                href="/join"
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

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our community of men supporting men on the journey to better mental health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/join" 
              className="inline-flex items-center justify-center bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Join Our Community <Users className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/find-support" 
              className="inline-flex items-center justify-center border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Find Resources <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;