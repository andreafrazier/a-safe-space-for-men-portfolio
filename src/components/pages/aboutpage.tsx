'use client';

import React, { useState } from 'react';
import { ArrowRight, Users, Heart, Target, Building, Network, CheckCircle } from 'lucide-react';
import BiographyModal from '@/components/sections/biographymodal';
import StatsSection from '@/components/sections/statssection';
import TeamMember from '@/components/sections/teammember';
import { teamMembers, focusAreas, impactStats } from '@/data/about-data';
import { TeamMember as TeamMemberInterface, FocusArea } from '@/types/about';

const AboutPageComponent = () => {
  const [selectedBio, setSelectedBio] = useState<TeamMemberInterface | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-emerald-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About A Safe Space For Men
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Breaking barriers, building community, and fostering resilience in men's mental health across Detroit and beyond.
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We create safe, supportive, and non-judgmental spaces where men can openly explore and prioritize their emotional well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
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
            <div className="relative">
              <img 
                src="/images/hero/cooperation-handshake.jpg" 
                alt="Men supporting each other in community discussion, representing cooperation and connection"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent rounded-lg"></div>
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
              <p className="text-gray-700 leading-relaxed">
                Our mission is to create a safe, supportive, and non-judgmental space where men can openly 
                explore and prioritize their emotional well-being. Through community support groups, mental 
                health education, and therapy referrals, we are dedicated to breaking down societal stigmas 
                around vulnerability and emotional expression. We empower men to connect, share, and grow in 
                an environment of mutual respect and understanding. By fostering open dialogue, increasing 
                awareness, and connecting individuals with competent resources, we aim to build resilience 
                and cultivate a culture where every man feels seen, heard, and valued.
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
      <StatsSection stats={impactStats} />

      {/* Focus Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Strategic Approach</h2>
            <p className="text-lg text-gray-600">Three focus areas guide our community-centered work</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {focusAreas.map((area: FocusArea, index: number) => (
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

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600">Meet the dedicated leaders driving our mission forward</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member: TeamMember) => (
              <TeamMember 
                key={member.id} 
                member={member} 
                onBioClick={() => setSelectedBio(member)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Growing Impact</h2>
            <p className="text-lg text-gray-600">Building stronger communities through connection and support</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
                <img 
                  src={`/images/events/community-event-${index}.jpg`} 
                  alt={`Community event showcasing men supporting each other in mental health advocacy - Event ${index}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="font-semibold text-lg mb-2">Community Workshop {index}</h3>
                    <p className="text-sm opacity-90">Empowering men through education and connection</p>
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
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Take the first step towards prioritizing your mental health and connecting with others on the same journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/join" 
              className="inline-flex items-center bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Join Us Today <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a 
              href="#donation" 
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Support Our Mission <Heart className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Biography Modal */}
      <BiographyModal member={selectedBio} onClose={() => setSelectedBio(null)} />
    </div>
  );
};

export default AboutPageComponent;