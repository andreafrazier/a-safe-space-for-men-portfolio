'use client';

import React, { useState } from 'react';
import { 
  AlertTriangle, Phone, MessageSquare, ExternalLink, 
  Brain, Heart, Shield, Activity, Users, Stethoscope,
  CheckCircle, ArrowRight, HelpCircle, Home, DollarSign,
  Calendar, Info, Flame, Zap, HeartHandshake, AlertCircle
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const StartHerePage = () => {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  const selfAssessmentTools = [
    {
      name: "Depression Screening",
      description: "Feeling down, hopeless, or losing interest in things you used to enjoy?",
      details: "5-minute anonymous assessment to identify symptoms of depression and get personalized next steps.",
      link: "https://screening.mhanational.org/screening-tools/depression",
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      color: "blue"
    },
    {
      name: "Anxiety Screening",
      description: "Constant worry, racing thoughts, or feeling on edge?",
      details: "Quick assessment to understand anxiety symptoms, severity, and recommended support options.",
      link: "https://screening.mhanational.org/screening-tools/anxiety",
      icon: <Heart className="w-8 h-8 text-green-600" />,
      color: "green"
    },
    {
      name: "Substance Use Assessment",
      description: "Concerned about your drinking or substance use?",
      details: "Confidential screening to evaluate your relationship with alcohol or drugs and identify concerns.",
      link: "https://screening.mhanational.org/screening-tools/addiction",
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      color: "purple"
    },
    {
      name: "PTSD Screening",
      description: "Struggling with trauma, flashbacks, or difficult memories?",
      details: "Assessment for post-traumatic stress disorder symptoms and trauma-related mental health concerns.",
      link: "https://screening.mhanational.org/screening-tools/ptsd",
      icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
      color: "red"
    },
  ];

  const supportPaths = [
    {
      id: "community",
      title: "I want to talk to other guys like me",
      description: "Free peer support groups where men support men. No professionals, just real conversations.",
      benefits: ["No cost", "No commitment", "Meet weekly", "Share experiences"],
      icon: <Users className="w-12 h-12 text-emerald-600" />,
      ctaText: "Join Our Community",
      ctaLink: "/join",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    {
      id: "therapy",
      title: "I want to work with a therapist",
      description: "Licensed mental health professionals who specialize in men's issues, trauma, and emotional wellness.",
      benefits: ["Professional guidance", "Evidence-based treatment", "Covered by insurance", "Confidential"],
      icon: <Stethoscope className="w-12 h-12 text-blue-600" />,
      ctaText: "Find a Therapist",
      ctaLink: "/find-support?category=therapy",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      id: "addiction",
      title: "I need help with addiction",
      description: "Substance abuse treatment programs, recovery support, and addiction counseling services.",
      benefits: ["Specialized treatment", "Inpatient & outpatient", "12-step programs", "Medical support"],
      icon: <Shield className="w-12 h-12 text-purple-600" />,
      ctaText: "Find Treatment",
      ctaLink: "/find-support?category=addiction",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      id: "free",
      title: "I need something free or low-cost",
      description: "Community health centers, sliding-scale therapy, and free support services throughout Detroit.",
      benefits: ["No insurance needed", "Sliding scale fees", "Community-based", "Quality care"],
      icon: <DollarSign className="w-12 h-12 text-orange-600" />,
      ctaText: "See Free Resources",
      ctaLink: "/find-support?category=free",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      id: "unsure",
      title: "I'm not sure, I just know I'm struggling",
      description: "That's okay. Start with our free support group and we'll help you figure out next steps together.",
      benefits: ["No pressure", "Figure it out together", "Meet other men", "Free and safe"],
      icon: <HelpCircle className="w-12 h-12 text-gray-600" />,
      ctaText: "Connect With Us",
      ctaLink: "/join",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200"
    }
  ];

  const supportOptions = [
    {
      title: "Community Support Groups",
      description: "Free, informal gatherings where men support men. No therapists, just guys who get it.",
      whoFor: "Men who want community and connection",
      icon: <Users className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Individual Therapy",
      description: "Licensed professional providing one-on-one counseling, typically weekly sessions.",
      whoFor: "Men who want personalized professional help",
      icon: <Stethoscope className="w-6 h-6 text-blue-600" />
    },
    {
      title: "Psychiatry",
      description: "Medical doctor who can diagnose mental health conditions and prescribe medication if needed.",
      whoFor: "Men who may benefit from medication",
      icon: <Brain className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Treatment Programs",
      description: "Intensive programs for addiction or severe mental health issues, inpatient or outpatient.",
      whoFor: "Men needing structured, intensive support",
      icon: <Home className="w-6 h-6 text-orange-600" />
    },
    {
      title: "Crisis Services",
      description: "Immediate help when in danger or experiencing a mental health emergency.",
      whoFor: "Men in immediate crisis or danger",
      icon: <AlertTriangle className="w-6 h-6 text-red-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-red-600 text-white py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AlertTriangle className="w-12 h-12 mx-auto mb-3" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Are You in Immediate Danger?</h2>
            <p className="text-lg mb-4 text-red-100">
              If you're thinking about hurting yourself or someone else, please get help right now.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
              <h3 className="text-xl font-bold mb-3">Get Help Immediately:</h3>
              <div className="grid md:grid-cols-2 gap-3 text-left">
                <a 
                  href="tel:988" 
                  className="flex items-center bg-white text-red-600 p-3 rounded-lg hover:bg-red-50 transition-colors font-semibold"
                >
                  <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-sm">Call 988</div>
                    <div className="text-xs">Suicide & Crisis Lifeline</div>
                  </div>
                </a>
                
                <a 
                  href="sms:741741&body=HOME" 
                  className="flex items-center bg-white text-red-600 p-3 rounded-lg hover:bg-red-50 transition-colors font-semibold"
                >
                  <MessageSquare className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-sm">Text HOME to 741741</div>
                    <div className="text-xs">Crisis Text Line</div>
                  </div>
                </a>
                
                <a 
                  href="https://safety-zone.org" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-white text-red-600 p-3 rounded-lg hover:bg-red-50 transition-colors font-semibold"
                >
                  <ExternalLink className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-sm">SafetyZone Urgent Care</div>
                    <div className="text-xs">Behavioral Health Center</div>
                  </div>
                </a>
                
                <a 
                  href="tel:911" 
                  className="flex items-center bg-white text-red-600 p-3 rounded-lg hover:bg-red-50 transition-colors font-semibold"
                >
                  <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-sm">Call 911</div>
                    <div className="text-xs">Emergency Services</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-red-700 rounded-lg p-3">
              <p className="text-xs text-red-100">
                <strong>Warning Signs:</strong> Talking about wanting to die, looking for ways to kill oneself, 
                feeling hopeless, increased substance use, withdrawing from others, giving away possessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transition Section */}
      <section className="bg-gradient-to-b from-red-50 to-white py-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Not in Immediate Crisis?</h2>
          <p className="text-lg text-gray-700 mb-3">
            Great. Let's find the right ongoing support for you. Keep scrolling.
          </p>
          <ArrowRight className="w-6 h-6 text-gray-400 mx-auto animate-bounce" />
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <Image 
                src="/images/men-supporting-men.jpg"
                alt="Men supporting each other through mental health challenges"
                width={400}
                height={200}
                className="mx-auto mb-6 max-w-md w-full h-auto rounded-lg"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Not Sure Where to Start?
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-6 max-w-4xl mx-auto">
              We'll help you figure out what kind of support makes sense for you.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether you're dealing with stress, anxiety, depression, relationship struggles, or just feeling 
              overwhelmed—let's find the right path forward together.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: SELF-ASSESSMENT TOOLS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Activity className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Are You Really Doing?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
              Take a free, anonymous mental health screening to better understand what you're experiencing. You will be redirected to the Mental Health America website for confidential assessments. Your information will not be shared with A Safe Space For Men.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-amber-800 text-sm flex items-center justify-center">
                <Info className="w-4 h-4 mr-2 flex-shrink-0" />
                These tools are for educational purposes only and do not replace professional diagnosis.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {selfAssessmentTools.map((tool, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col h-full"
            >
              <div className="flex justify-center mb-4">
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{tool.name}</h3>
              <p className="text-gray-700 font-medium text-sm text-center mb-3">{tool.description}</p>
              <p className="text-gray-600 text-xs text-center mb-4 flex-grow">{tool.details}</p>
              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-gray-900 text-white px-4 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors mt-auto"
              >
                Take Screening <ExternalLink className="w-4 h-4 inline ml-1" />
              </a>  
            </div>
          ))}
        </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Based on your results, we can help you find the right support.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: CHOOSE YOUR PATH */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Kind of Support Do You Need?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the path that feels right for where you are right now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {supportPaths.map((path) => (
              <div
                key={path.id}
                className={`${path.bgColor} border-2 ${path.borderColor} rounded-xl p-6 hover:shadow-xl transition-shadow`}
              >
                <div className="flex items-start mb-4">
                  <div className="mr-4 flex-shrink-0">
                    {path.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{path.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{path.description}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <ul className="space-y-2">
                    {path.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={path.ctaLink}
                  className="block text-center bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  {path.ctaText} <ArrowRight className="w-4 h-4 inline ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: UNDERSTANDING YOUR OPTIONS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Understanding Your Options
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Not sure what the difference is between these types of support? Here's a quick guide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex items-center mb-3">
                  {option.icon}
                  <h3 className="text-lg font-bold text-gray-900 ml-3">{option.title}</h3>
                </div>
                <p className="text-gray-700 mb-3 text-sm leading-relaxed">{option.description}</p>
                <div className="bg-white rounded p-3 border border-gray-200">
                  <p className="text-xs text-gray-900">
                    <strong>Best for:</strong> {option.whoFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: STILL NOT SURE */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-20 h-20 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still Not Sure? Start Here.
          </h2>
          <p className="text-xl mb-6 text-emerald-100 leading-relaxed">
            If you're reading this and thinking "I don't know what I need"—start with our free support group.
          </p>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            You'll meet other guys, hear their stories, and figure out next steps together. 
            No commitment, no pressure, no judgment. Just men supporting men.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join"
              className="inline-flex items-center justify-center bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-colors shadow-lg"
            >
              Join Our Next Meeting <Calendar className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/find-support"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Browse All Resources <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartHerePage;