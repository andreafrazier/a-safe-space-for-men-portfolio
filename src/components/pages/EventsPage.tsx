'use client';

import React, { useState } from 'react';
import { 
  Calendar, MapPin, Clock, Users, Tag, ExternalLink,
  Filter, Search, ArrowRight, CheckCircle, Heart,
  AlertCircle, Video, Building
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { events } from '@/data/events';
import { Event } from '@/types/events';

const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Events', icon: <Calendar className="w-4 h-4" /> },
    { id: 'support-group', name: 'Support Groups', icon: <Users className="w-4 h-4" /> },
    { id: 'workshop', name: 'Workshops', icon: <Building className="w-4 h-4" /> },
    { id: 'community', name: 'Community Events', icon: <Heart className="w-4 h-4" /> },
    { id: 'awareness', name: 'Awareness Campaigns', icon: <AlertCircle className="w-4 h-4" /> }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const EventCard = ({ event }: { event: Event }) => {
    const eventDate = new Date(event.date);
    const isUpcoming = eventDate >= new Date();
    
    return (
      <div className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 border-l-4 ${
        isUpcoming ? 'border-emerald-500' : 'border-gray-300'
      }`}>
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
            {event.recurring && (
              <span className="inline-flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium mb-2">
                <Calendar className="w-3 h-3 mr-1" />
                Recurring Event
              </span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            {event.locationType === 'virtual' && (
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                <Video className="w-3 h-3 mr-1" />
                Virtual
              </span>
            )}
            {event.locationType === 'hybrid' && (
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                <Video className="w-3 h-3 mr-1" />
                Hybrid
              </span>
            )}
          </div>
        </div>
        
        <p className="text-gray-700 mb-4 leading-relaxed">{event.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2 text-emerald-600" />
            <span className="font-semibold">
              {eventDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-2 text-emerald-600" />
            {event.time}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-emerald-600" />
            {event.location}
          </div>
          {event.capacity && (
            <div className="flex items-center text-sm text-gray-600">
              <Users className="w-4 h-4 mr-2 text-emerald-600" />
              {event.registered}/{event.capacity} registered
              {event.registered && event.capacity && event.registered / event.capacity > 0.8 && (
                <span className="ml-2 text-orange-600 font-semibold">Limited spots!</span>
              )}
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {event.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-emerald-600">
            {event.cost}
          </div>
          {isUpcoming && (
            <Link
              href={event.registrationLink || '/join'}
              className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors inline-flex items-center"
            >
              Register <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          )}
          {!isUpcoming && (
            <span className="text-sm text-gray-500 font-medium">Past Event</span>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-emerald-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <Image 
                src="/images/griot1.jpg"
                alt="Men connecting and supporting each other through community events"
                width={600}
                height={300}
                className="mx-auto max-w-2xl w-full h-auto rounded-lg shadow-lg"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Events & Gatherings
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join us for support groups, workshops, and community events focused on men's mental health
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search events (e.g., support group, workshop, anxiety)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-3 border-emerald-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900 placeholder-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'Upcoming Events' : 
               categories.find(cat => cat.id === selectedCategory)?.name}
            </h2>
            <div className="text-sm text-gray-600">
              {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''}
            </div>
          </div>
          
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or filters</p>
              <Link
                href="/join"
                className="inline-flex items-center text-emerald-600 font-semibold hover:underline"
              >
                Join our community to stay updated <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Info Banner */}
      <section className="py-12 bg-emerald-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-emerald-200">
            <div className="flex items-start">
              <CheckCircle className="w-8 h-8 text-emerald-600 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Want to Stay Updated on Events?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Join our community to receive notifications about upcoming support groups, 
                  workshops, and special events. We'll keep you informed about opportunities 
                  to connect, learn, and support other men on their mental health journey.
                </p>
                <Link
                  href="/join"
                  className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Join Our Community <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have an Idea for an Event?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            We're always looking for ways to better serve the community. If you have ideas 
            for workshops, topics, or events, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:asafespaceformen@gmail.com?subject=Event Idea"
              className="inline-flex items-center bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Share Your Ideas
            </a>
            <Link 
              href="/find-support" 
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Find Resources <ExternalLink className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;








