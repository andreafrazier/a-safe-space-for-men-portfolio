'use client';

import React, { useState } from 'react';
import { 
  Search, Filter, Phone, MapPin, DollarSign, Clock, 
  Star, MessageSquare, Download, Heart, Users, Brain,
  AlertTriangle, Shield, CheckCircle, ExternalLink,
  Stethoscope, Home, Globe, Calendar
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Resource {
  id: number;
  name: string;
  description: string;
  category: string;
  location: string;
  phone: string;
  website?: string;
  cost: string;
  hours: string;
  specialties: string[];
  rating: number;
  reviewCount: number;
  lastUpdated: string;
  acceptsInsurance: boolean;
  languages?: string[];
}

const FindSupportPageComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources', icon: <Globe className="w-4 h-4" /> },
    { id: 'therapy', name: 'Individual Therapy', icon: <Brain className="w-4 h-4" /> },
    { id: 'groups', name: 'Support Groups', icon: <Users className="w-4 h-4" /> },
    { id: 'addiction', name: 'Addiction Treatment', icon: <Shield className="w-4 h-4" /> },
    { id: 'free', name: 'Free/Low-Cost', icon: <DollarSign className="w-4 h-4" /> },
    { id: 'specialized', name: 'Specialized Services', icon: <Heart className="w-4 h-4" /> }
  ];

  // Resources array with crisis resources removed (previously items 1-3)
  const resources: Resource[] = [
    // INDIVIDUAL THERAPY
    {
      id: 1,
      name: "Mike Lamerato, MS, LLP - Men's Therapy",
      description: "Licensed therapist specializing in men's issues, trauma, and emotional wellness in Metro Detroit.",
      category: "therapy",
      location: "Metro Detroit Area",
      phone: "(248) 555-0123",
      website: "https://metro-detroit-mens-therapy.com",
      cost: "$120-180/session",
      hours: "Mon-Fri 9AM-7PM",
      specialties: ["Men's issues", "Trauma therapy", "Anger management", "Relationships"],
      rating: 4.8,
      reviewCount: 94,
      lastUpdated: "2025-01-12",
      acceptsInsurance: true,
      languages: ["English"]
    },
    {
      id: 2,
      name: "Dr. Chris Allen Shreve - Trauma Specialist",
      description: "Trauma specialist focusing on men's mental health, substance abuse, and life transitions.",
      category: "therapy",
      location: "Detroit, MI",
      phone: "(313) 555-0167",
      cost: "$100-150/session",
      hours: "Tue-Sat 10AM-6PM",
      specialties: ["Trauma therapy", "Substance abuse", "Depression", "Anxiety"],
      rating: 4.7,
      reviewCount: 76,
      lastUpdated: "2025-01-08",
      acceptsInsurance: true,
      languages: ["English", "Spanish"]
    },
    {
      id: 3,
      name: "Jordan Fields - Clinical Therapist",
      description: "Clinical therapist intern specializing in general counseling and men's issues with fresh perspectives.",
      category: "therapy",
      location: "Detroit, MI",
      phone: "(313) 555-0189",
      cost: "$60-90/session",
      hours: "Mon-Thu 11AM-8PM",
      specialties: ["General counseling", "Men's issues", "Stress management"],
      rating: 4.5,
      reviewCount: 32,
      lastUpdated: "2025-01-14",
      acceptsInsurance: true,
      languages: ["English"]
    },
    {
      id: 4,
      name: "Psychology Today - Detroit Therapists",
      description: "Comprehensive directory of licensed therapists, psychologists, and psychiatrists in the Detroit area with detailed profiles and specialties.",
      category: "therapy",
      location: "Detroit Metro Area",
      phone: "(855) 945-3663",
      website: "https://www.psychologytoday.com/us/therapists/mi/detroit",
      cost: "Varies by Provider",
      hours: "Directory Available 24/7",
      specialties: ["Therapist directory", "Men's issues", "Depression", "Anxiety", "Trauma"],
      rating: 4.6,
      reviewCount: 1247,
      lastUpdated: "2025-01-15",
      acceptsInsurance: true,
      languages: ["English", "Multiple languages available"]
    },   
    
    // SUPPORT GROUPS
    {
      id: 5,
      name: "NAMI Metro Detroit Support Groups",
      description: "Free support groups for individuals with mental health conditions and their families.",
      category: "groups",
      location: "Multiple Detroit Locations",
      phone: "(248) 348-7197",
      website: "https://www.namidetroit.org",
      cost: "Free",
      hours: "Various meeting times",
      specialties: ["Mental health education", "Peer support", "Family support"],
      rating: 4.4,
      reviewCount: 156,
      lastUpdated: "2025-01-11",
      acceptsInsurance: false
    },
    {
      id: 6,
      name: "Men's Mental Health Support Group",
      description: "Weekly support group specifically for men dealing with depression, anxiety, and life challenges.",
      category: "groups",
      location: "Community Center, Detroit",
      phone: "(313) 555-0145",
      cost: "Free",
      hours: "Thursdays 7PM-8:30PM",
      specialties: ["Men's support", "Depression", "Anxiety", "Peer support"],
      rating: 4.6,
      reviewCount: 43,
      lastUpdated: "2025-01-09",
      acceptsInsurance: false
    },

    // ADDICTION TREATMENT
    {
      id: 7,
      name: "Detroit Recovery Project",
      description: "Certified Community Behavioral Health Clinic providing outpatient addiction and mental health services.",
      category: "addiction",
      location: "Multiple Detroit Locations",
      phone: "(313) 888-9300",
      website: "https://www.recovery4detroit.com",
      cost: "Insurance/Sliding Scale",
      hours: "Mon-Fri 8AM-6PM",
      specialties: ["Substance abuse", "Co-occurring disorders", "Outpatient treatment"],
      rating: 4.3,
      reviewCount: 198,
      lastUpdated: "2025-01-13",
      acceptsInsurance: true,
      languages: ["English", "Spanish", "Arabic"]
    },
    {
      id: 8,
      name: "Salvation Army Adult Rehabilitation Center",
      description: "180-day residential program for men with substance abuse issues, including spiritual support.",
      category: "addiction",
      location: "1627 W. Fort St, Detroit",
      phone: "(313) 965-7760",
      website: "http://semichigan.satruck.org",
      cost: "Free",
      hours: "24/7 Admission Available",
      specialties: ["Long-term residential", "12-step program", "Job training", "Spiritual support"],
      rating: 4.1,
      reviewCount: 127,
      lastUpdated: "2025-01-07",
      acceptsInsurance: false
    },
    {
      id: 9,
      name: "Mariners Inn",
      description: "Nonprofit organization providing shelter and addiction recovery services since 1925.",
      category: "addiction",
      location: "Cass Corridor, Detroit",
      phone: "(313) 993-4700",
      cost: "Free/Donations",
      hours: "24/7",
      specialties: ["Long-term recovery", "Housing", "Case management", "Life skills"],
      rating: 4.0,
      reviewCount: 89,
      lastUpdated: "2025-01-06",
      acceptsInsurance: false
    },

    // FREE/LOW-COST
    {
      id: 10,
      name: "Central City Health",
      description: "Community health center providing mental health, medical, and re-entry services.",
      category: "free",
      location: "Multiple Detroit Locations",
      phone: "(313) 555-0198",
      cost: "Free/Sliding Scale",
      hours: "Mon-Fri 8AM-5PM",
      specialties: ["Mental health", "Medical care", "Re-entry support", "Housing"],
      rating: 4.2,
      reviewCount: 234,
      lastUpdated: "2025-01-10",
      acceptsInsurance: true,
      languages: ["English", "Spanish", "Arabic"]
    },
    {
      id: 11,
      name: "CARE of Southeast Michigan",
      description: "Free mental health and substance abuse support for parents, youth, and adults.",
      category: "free",
      location: "Southeast Michigan",
      phone: "(734) 555-0176",
      cost: "Free",
      hours: "Mon-Fri 9AM-5PM",
      specialties: ["Mental health", "Substance abuse", "Parenting support", "Youth services"],
      rating: 4.3,
      reviewCount: 167,
      lastUpdated: "2025-01-12",
      acceptsInsurance: false
    },

    // SPECIALIZED SERVICES
    {
      id: 12,
      name: "LGBT Detroit Mental Health Services",
      description: "Free mental health therapy for LGBTQ+ individuals experiencing mental health crises.",
      category: "specialized",
      location: "Detroit Metro Area",
      phone: "(313) 396-9700",
      website: "https://www.lgbtdetroit.org",
      cost: "Free",
      hours: "Mon-Fri 9AM-5PM",
      specialties: ["LGBTQ+ support", "Crisis intervention", "Trauma therapy"],
      rating: 4.7,
      reviewCount: 112,
      lastUpdated: "2025-01-11",
      acceptsInsurance: false
    },
    {
      id: 13,
      name: "Michigan Veterans Affairs",
      description: "Mental health and substance abuse services specifically for veterans and their families.",
      category: "specialized",
      location: "Multiple Michigan Locations",
      phone: "(800) 642-4838",
      cost: "Free for Veterans",
      hours: "Mon-Fri 8AM-5PM",
      specialties: ["PTSD", "Veteran support", "Substance abuse", "Family counseling"],
      rating: 4.4,
      reviewCount: 203,
      lastUpdated: "2025-01-09",
      acceptsInsurance: true
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.specialties.some(specialty => 
                           specialty.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const selfAssessmentTools = [
    {
      name: "Depression Self-Assessment",
      description: "Anonymous screening tool to help identify symptoms of depression",
      link: "https://screening.mhanational.org/screening-tools/depression",
      icon: <Brain className="w-6 h-6 text-blue-600" />
    },
    {
      name: "Anxiety Screening",
      description: "Quick assessment to understand anxiety symptoms and severity",
      link: "https://screening.mhanational.org/screening-tools/anxiety",
      icon: <Heart className="w-6 h-6 text-green-600" />
    },
    {
      name: "Addiction Assessment",
      description: "Evaluate your relationship with alcohol and identify potential concerns",
      link: "https://screening.mhanational.org/screening-tools/addiction",
      icon: <Shield className="w-6 h-6 text-purple-600" />
    },
    {
      name: "PTSD Screening",
      description: "Assessment for post-traumatic stress disorder symptoms",
      link: "https://screening.mhanational.org/screening-tools/ptsd",
      icon: <AlertTriangle className="w-6 h-6 text-red-600" />
    }
  ];

  const ResourceCard = ({ resource }: { resource: Resource }) => (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 border-l-4 border-emerald-500">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-gray-900">{resource.name}</h3>
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-semibold">{resource.rating}</span>
          <span className="text-sm text-gray-500">({resource.reviewCount})</span>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4 leading-relaxed">{resource.description}</p>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="w-4 h-4 mr-2 text-emerald-600" />
          {resource.location}
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Phone className="w-4 h-4 mr-2 text-emerald-600" />
          <a href={`tel:${resource.phone}`} className="hover:underline font-medium">
            {resource.phone}
          </a>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <DollarSign className="w-4 h-4 mr-2 text-emerald-600" />
          {resource.cost}
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="w-4 h-4 mr-2 text-emerald-600" />
          {resource.hours}
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {resource.specialties.slice(0, 3).map((specialty, index) => (
          <span key={index} className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-medium">
            {specialty}
          </span>
        ))}
        {resource.specialties.length > 3 && (
          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
            +{resource.specialties.length - 3} more
          </span>
        )}
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          <a
            href={`tel:${resource.phone}`}
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            <Phone className="w-4 h-4 inline mr-2" />
            Call Now
          </a>
          {resource.website && (
            <a
              href={resource.website}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors"
            >
              <ExternalLink className="w-4 h-4 inline mr-2" />
              Website
            </a>
          )}
        </div>
        <div className="text-xs text-gray-500">
          Updated: {new Date(resource.lastUpdated).toLocaleDateString()}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Crisis Banner - Sticky at top */}
      <div className="bg-red-600 text-white py-4 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center text-center">
            <AlertTriangle className="w-5 h-5 mr-2" />
            <Link 
              href="/suicide-prevention" 
              className="underline hover:text-red-100 font-semibold mr-4 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600 rounded px-2 py-1"
            >
              In Crisis? Get Help Now:
            </Link>
            <span className="hidden sm:inline text-red-100">|</span>
                <a href="tel:988" className="mr-6 hover:underline focus:outline-none focus:ring-2 focus:ring-red-300 rounded px-2 py-1">
                    <Phone className="w-4 h-4 inline mr-1" />988 Crisis Lifeline
                </a>
                <a href="tel:911" className="mr-6 hover:underline focus:outline-none focus:ring-2 focus:ring-red-300 rounded px-2 py-1">
                    Emergency: 911
                </a>
                <span className="text-sm">Text HOME to 741741</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
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
              Find the Support You Need
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive mental health resources for men in Detroit and beyond
            </p>
            <p className="text-lg text-gray-700 mb-4 max-w-4xl mx-auto leading-relaxed">
              Connect with therapists, join support groups, and access treatment resources for your ongoing mental health journey.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search resources (e.g., therapy, depression, addiction)..."
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
      <section className="bg-white border-b border-gray-200 sticky top-12 z-30">
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

      {/* Main Resources */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'All Resources' : 
               categories.find(cat => cat.id === selectedCategory)?.name}
            </h2>
            <div className="text-sm text-gray-600">
              Showing {filteredResources.length} resources
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
          
          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No resources found</h3>
              <p className="text-gray-500">Try adjusting your search terms or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Self-Assessment Tools */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Self-Assessment Tools</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Take anonymous mental health screenings to better understand your mental health and find appropriate resources.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6 max-w-2xl mx-auto">
              <p className="text-amber-800 text-sm">
                <AlertTriangle className="w-4 h-4 inline mr-2" />
                These tools are for educational purposes only and do not replace professional diagnosis or treatment.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {selfAssessmentTools.map((tool, index) => (
              <a
                key={index}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow block"
              >
                <div className="flex justify-center mb-4">
                  {tool.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{tool.name}</h3>
                <p className="text-gray-600 text-sm text-center mb-4">{tool.description}</p>
                <div className="text-center">
                  <span className="inline-flex items-center text-emerald-600 font-semibold text-sm">
                    Take Assessment <ExternalLink className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Join our community of men supporting men on the journey to better mental health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/join" 
              className="inline-flex items-center bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Join Our Community <Users className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/#donation" 
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Support Our Mission <Heart className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindSupportPageComponent;