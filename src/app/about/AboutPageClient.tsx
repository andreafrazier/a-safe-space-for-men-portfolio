'use client';

import React, { useState } from 'react';
import { Calendar, Users, Heart, ArrowRight, CheckCircle, Target, Building, Network } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import  type { TeamMember } from '@/types/about';
import SimpleStats from '@/components/sections/SimpleStats';
import { focusAreas, impactStats, teamMembers } from '@/data/about-data';
import SimpleBio from '@/components/sections/SimpleBio';
import TeamMemberCard from '@/components/sections/TeamMemberCard';



export default function AboutPageClient() {
  const [selectedBio, setSelectedBio] = useState<TeamMember | null>(null);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="pt-16 bg-gradient-to-br from-emerald-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <Image 
                src="/images/breakthestigma-green.png"
                alt="Mental health resources and support network illustration"
                width={400}
                height={200}
                className="mx-auto mb-6 max-w-md w-full h-auto rounded-lg"
                priority
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About A Safe Space For Men
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Breaking barriers, building community, and fostering resilience in men's mental health across Detroit and beyond.
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              We create safe, supportive, and non-judgmental spaces where men can openly explore and prioritize their emotional well-being.
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/join"
                className="inline-flex items-center justify-center bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Join Our Community <Users className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/find-support"
                className="inline-flex items-center justify-center border-2 border-emerald-600 text-emerald-600 px-16 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Find Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  A Safe Space For Men was founded on the belief that every man deserves a place where vulnerability 
                  is viewed as strength, not weakness. Our journey began with recognizing the significant barriers that 
                  prevent men from seeking mental health support and the devastating impact of untreated mental health 
                  challenges in our communities.
                </p>
                <p>
                  Rooted in the Detroit community, our organization emerged from a deep understanding of the unique 
                  cultural, social, and economic factors that affect men's willingness to prioritize their mental health. 
                  We saw the need for culturally relevant support systems that speak to men's experiences and challenges 
                  without judgment or stigma.
                </p>
                <p>
                  Today, we continue to grow our community of men who support each other through shared experiences, 
                  professional resources, and the simple yet powerful understanding that seeking help is an act of courage, 
                  not surrender.
                </p>
              </div>
            </div>
            
            {/* Image side with proper aspect ratio */}
            <div className="relative">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/images/handshake-wordcloud.png" 
                  alt="Handshake wordcloud representing cooperation, support, and community connection"
                  fill
                  className="object-contain bg-white p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/10 to-transparent rounded-lg pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Guided by our commitment to creating lasting change in men's mental health
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-emerald-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
                <p className="text-emerald-600 leading-relaxed font-semibold">
                  A Safe Space For Men is dedicated to men's mental health and emotional well-being 
                  through community connection, education, and support.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  We create a safe, non-judgmental space where men can openly address the real challenges 
                  they face—anxiety, depression, grief, relationship struggles, and the weight of isolation—before 
                  they reach crisis. Through peer support groups, mental health education, and referrals to 
                  culturally competent therapists, we break down the stigma that tells men they must carry 
                  everything alone.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  We believe that emotional well-being isn't a luxury or a sign of weakness—it's essential. 
                  By fostering open dialogue, building genuine connections, and linking men to the resources 
                  they need, we're working to prevent the tragic outcomes that too often result from silence 
                  and shame.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  In Detroit and beyond, we're cultivating a culture where every man feels seen, heard, and 
                  valued—and where asking for help is an act of strength, not surrender.
                </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-emerald-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We envision a future where men in Detroit and beyond can embrace their emotional well-being 
                without stigma, access culturally relevant support systems, and build strong, supportive 
                communities that empower them to thrive. Through education, community engagement, and advocacy, 
                we strive to normalize conversations about mental health and ensure every man has the tools 
                and connections needed to prioritize his well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <SimpleStats stats={impactStats} />

      {/* Focus Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Strategic Approach</h2>
            <p className="text-lg text-gray-600">Three focus areas guide our community-centered work</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-6">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{area.title}</h3>
                <p className="text-gray-700 mb-6 text-center leading-relaxed">{area.description}</p>
                <ul className="space-y-2">
                  {area.initiatives.map((initiative: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{initiative}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Leadership Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated leaders driving our mission forward with expertise, passion, and commitment to men's mental health advocacy.
            </p>
          </div>
          
          {/* Team Grid with better spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <TeamMemberCard 
                key={member.id} 
                member={member} 
                onBioClick={() => setSelectedBio(member)} 
              />
            ))}
          </div>
          
          {/* Additional context */}
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our diverse leadership team brings together decades of experience in mental health advocacy, 
              community organizing, business leadership, and lived experience to create meaningful change.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Community Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Growing Impact</h2>
            <p className="text-lg text-gray-600">Building stronger communities through connection and support</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Impact Image */}
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <div className="relative w-full h-64">
                <Image 
                  src="/images/breakthestigma-green.png" 
                  alt="Community workshop showcasing men supporting each other in mental health advocacy"
                  fill
                  className="object-contain bg-white p-4 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="font-semibold text-lg mb-2">Breaking the Stigma</h3>
                  <p className="text-sm opacity-90">Empowering men through education and awareness</p>
                </div>
              </div>
            </div>
            
            {/* Placeholder Impact Cards */}
            {[2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group bg-gradient-to-br from-emerald-100 to-blue-100">
                <div className="w-full h-64 flex items-center justify-center">
                  <div className="text-center p-6">
                    <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">Community Impact {index}</h3>
                    <p className="text-sm text-gray-600">Building connections and fostering support</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Take the first step towards prioritizing your mental health and connecting with others on the same journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/join" 
              className="inline-flex items-center bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              Join Our Community <Users className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/#donation" 
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              Support Our Mission <Heart className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Biography Modal */}
      <SimpleBio member={selectedBio} onClose={() => setSelectedBio(null)} />
    </div>
  );
}