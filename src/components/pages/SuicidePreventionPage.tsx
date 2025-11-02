// 'use client';

// import React, { useState } from 'react';
// import { Phone, MessageCircle, AlertTriangle, Heart, Users, Shield, Clock, CheckCircle, ArrowRight, Info, ExternalLink } from 'lucide-react';
// import Link from 'next/link';

// const SuicidePreventionPageComponent = () => {
//   const [activeTab, setActiveTab] = useState('crisis');

//   const crisisResources = [
//     {
//       name: '988 Suicide & Crisis Lifeline',
//       phone: '988',
//       description: 'Free and confidential emotional support 24/7 for people in suicidal crisis or distress.',
//       availability: '24/7/365',
//       languages: 'English, Spanish, and 250+ languages via interpretation',
//       icon: <Phone className="w-6 h-6 text-red-600" />
//     },
//     {
//       name: 'Crisis Text Line',
//       phone: '741741',
//       description: 'Text HOME to 741741 for free, confidential crisis support via text message.',
//       availability: '24/7/365',
//       languages: 'English and Spanish',
//       icon: <MessageCircle className="w-6 h-6 text-red-600" />
//     },
//     {
//       name: 'Emergency Services',
//       phone: '911',
//       description: 'Call 911 if you or someone else is in immediate physical danger.',
//       availability: 'Immediate emergency response',
//       languages: 'Multiple languages available',
//       icon: <AlertTriangle className="w-6 h-6 text-red-600" />
//     }
//   ];

//   const warningSignsGeneral = [
//     'Talking about wanting to die or wanting to kill themselves',
//     'Looking for a way to kill themselves',
//     'Talking about feeling hopeless or having no reason to live',
//     'Talking about feeling trapped or being in unbearable pain',
//     'Talking about being a burden to others',
//     'Increasing use of alcohol or drugs',
//     'Acting anxious or agitated',
//     'Withdrawing from family and friends',
//     'Changing eating and sleeping habits',
//     'Showing rage or talking about seeking revenge',
//     'Taking great risks that could lead to death',
//     'Giving away prized possessions',
//     'Saying goodbye to loved ones',
//     'Putting affairs in order, making a will'
//   ];

//   const warningSignsMen = [
//     'Increased aggression, irritability, or anger outbursts',
//     'Reckless behavior or taking dangerous risks',
//     'Increased alcohol consumption or substance abuse',
//     'Working excessively or becoming workaholic',
//     'Withdrawing from social connections and activities',
//     'Expressing feelings of failure as a provider or protector',
//     'Recent job loss, divorce, or major life changes',
//     'Physical complaints with no medical cause',
//     'Difficulty expressing emotions or asking for help',
//     'Sudden calmness after a period of depression or agitation'
//   ];

//   const howToHelp = [
//     {
//       title: 'Listen Without Judgment',
//       description: 'Give your full attention. Let them know you care and want to help.',
//       icon: <Heart className="w-5 h-5 text-emerald-600" />
//     },
//     {
//       title: 'Ask Direct Questions',
//       description: 'It\'s okay to ask "Are you thinking about suicide?" This can actually reduce their anxiety.',
//       icon: <MessageCircle className="w-5 h-5 text-emerald-600" />
//     },
//     {
//       title: 'Don\'t Leave Them Alone',
//       description: 'Stay with them or ensure someone trustworthy is with them until help arrives.',
//       icon: <Users className="w-5 h-5 text-emerald-600" />
//     },
//     {
//       title: 'Remove Means',
//       description: 'Help remove or secure potential means of harm like firearms, medications, or other dangerous items.',
//       icon: <Shield className="w-5 h-5 text-emerald-600" />
//     },
//     {
//       title: 'Get Professional Help',
//       description: 'Contact crisis services, mental health professionals, or emergency services.',
//       icon: <Phone className="w-5 h-5 text-emerald-600" />
//     }
//   ];

//   const preventionStrategies = [
//     {
//       category: 'Build Support Networks',
//       strategies: [
//         'Connect with family and friends regularly',
//         'Join support groups or community organizations',
//         'Participate in A Safe Space For Men programs',
//         'Maintain relationships with colleagues and neighbors'
//       ]
//     },
//     {
//       category: 'Develop Coping Skills',
//       strategies: [
//         'Learn stress management techniques',
//         'Practice mindfulness and meditation',
//         'Exercise regularly and maintain physical health',
//         'Develop hobbies and meaningful activities'
//       ]
//     },
//     {
//       category: 'Seek Professional Help',
//       strategies: [
//         'Regular mental health check-ups',
//         'Therapy or counseling when needed',
//         'Medication management if prescribed',
//         'Crisis planning with mental health professionals'
//       ]
//     },
//     {
//       category: 'Reduce Risk Factors',
//       strategies: [
//         'Limit alcohol and substance use',
//         'Secure or remove access to lethal means',
//         'Treat underlying mental health conditions',
//         'Address financial or relationship stressors'
//       ]
//     }
//   ];

//   const communityPrograms = [
//     {
//       title: 'Gatekeeper Training',
//       description: 'Training community members to recognize warning signs and connect people to help.',
//       status: 'In Development',
//       target: 'Barbers, community leaders, employers'
//     },
//     {
//       title: 'Men\'s Crisis Support Groups',
//       description: 'Peer support groups specifically for men who have experienced suicidal thoughts.',
//       status: 'Planning Phase',
//       target: 'Men with lived experience'
//     },
//     {
//       title: 'Workplace Prevention Programs',
//       description: 'Partnering with employers to create suicide prevention resources in workplaces.',
//       status: 'Partnership Development',
//       target: 'Detroit-area employers'
//     },
//     {
//       title: 'Community Education Workshops',
//       description: 'Public education about men\'s suicide prevention and mental health awareness.',
//       status: 'Program Design',
//       target: 'General community'
//     }
//   ];

//   const detroitResources = [
//     {
//       name: 'Detroit Wayne Integrated Health Network',
//       service: 'Mental Health Crisis Services',
//       phone: '(800) 241-4949',
//       description: 'Local crisis mental health services for Wayne County residents'
//     },
//     {
//       name: 'Henry Ford Health System',
//       service: 'Behavioral Health Emergency Services',
//       phone: '(313) 916-2600',
//       description: 'Emergency mental health services and crisis intervention'
//     },
//     {
//       name: 'Detroit Recovery Project',
//       service: 'Substance Abuse & Mental Health',
//       phone: '(313) 207-5565',
//       description: 'Integrated treatment for substance use and mental health disorders'
//     },
//     {
//       name: 'NAMI Greater Detroit',
//       service: 'Support Groups & Education',
//       phone: '(248) 348-7197',
//       description: 'National Alliance on Mental Illness local chapter support services'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Crisis Banner - Always Visible */}
//       <div className="bg-red-600 text-white py-4 px-4 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-wrap items-center justify-center text-center">
//             <AlertTriangle className="w-5 h-5 mr-2" />
//             <span className="font-semibold mr-4">In Crisis? Get Help Now:</span>
//             <a href="tel:988" className="mr-6 hover:underline focus:outline-none focus:ring-2 focus:ring-red-300 rounded px-2 py-1">
//               <Phone className="w-4 h-4 inline mr-1" />988 Crisis Lifeline
//             </a>
//             <a href="tel:911" className="mr-6 hover:underline focus:outline-none focus:ring-2 focus:ring-red-300 rounded px-2 py-1">
//               Emergency: 911
//             </a>
//             <span className="text-sm">Text HOME to 741741</span>
//           </div>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <section className="pt-24 bg-gradient-to-br from-red-50 to-orange-50 py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//               Suicide Prevention Saves Lives
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
//               Comprehensive crisis support and prevention resources specifically designed for men in Detroit and beyond.
//             </p>
//             <div className="bg-white rounded-lg p-6 shadow-lg max-w-4xl mx-auto mb-8">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
//                 <div>
//                   <div className="text-3xl font-bold text-red-600 mb-2">4x</div>
//                   <p className="text-gray-700">Higher suicide rate for men than women</p>
//                 </div>
//                 <div>
//                   <div className="text-3xl font-bold text-red-600 mb-2">75%</div>
//                   <p className="text-gray-700">Of suicides are completed by men</p>
//                 </div>
//                 <div>
//                   <div className="text-3xl font-bold text-emerald-600 mb-2">90%</div>
//                   <p className="text-gray-700">Of suicides are preventable with proper intervention</p>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a 
//                 href="tel:988"
//                 className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
//               >
//                 <Phone className="w-5 h-5 inline mr-2" />
//                 Call 988 Now
//               </a>
//               <Link 
//                 href="#resources"
//                 className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
//               >
//                 View All Resources
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Tab Navigation */}
//       <section className="py-12 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-wrap justify-center mb-8">
//             {[
//               { id: 'crisis', label: 'Crisis Resources', icon: <Phone className="w-4 h-4" /> },
//               { id: 'warning-signs', label: 'Warning Signs', icon: <AlertTriangle className="w-4 h-4" /> },
//               { id: 'how-to-help', label: 'How to Help', icon: <Heart className="w-4 h-4" /> },
//               { id: 'prevention', label: 'Prevention', icon: <Shield className="w-4 h-4" /> }
//             ].map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`flex items-center px-6 py-3 mx-2 mb-2 rounded-lg font-semibold transition-colors ${
//                   activeTab === tab.id
//                     ? 'bg-red-600 text-white'
//                     : 'bg-white text-gray-700 hover:bg-gray-100'
//                 }`}
//               >
//                 {tab.icon}
//                 <span className="ml-2">{tab.label}</span>
//               </button>
//             ))}
//           </div>

//           {/* Tab Content */}
//           <div className="bg-white rounded-lg shadow-lg p-8">
//             {activeTab === 'crisis' && (
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Immediate Crisis Resources</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//                   {crisisResources.map((resource, index) => (
//                     <div key={index} className="border border-red-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
//                       <div className="flex items-center mb-4">
//                         {resource.icon}
//                         <h3 className="text-lg font-semibold text-gray-600 ml-3">{resource.name}</h3>
//                       </div>
//                       <div className="text-2xl font-bold text-red-600 mb-2">
//                         <a href={`tel:${resource.phone}`} className="hover:underline">
//                           {resource.phone}
//                         </a>
//                       </div>
//                       <p className="text-gray-700 mb-3">{resource.description}</p>
//                       <div className="text-sm text-gray-600">
//                         <p><strong>Available:</strong> {resource.availability}</p>
//                         <p><strong>Languages:</strong> {resource.languages}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
                
//                 <div id="resources">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-6">Detroit-Area Resources</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {detroitResources.map((resource, index) => (
//                       <div key={index} className="bg-gray-50 rounded-lg p-6">
//                         <h4 className="text-lg font-semibold text-gray-900 mb-2">{resource.name}</h4>
//                         <p className="text-emerald-600 font-semibold mb-2">{resource.service}</p>
//                         <p className="text-gray-700 mb-3">{resource.description}</p>
//                         <a href={`tel:${resource.phone}`} className="text-red-600 hover:underline font-medium">
//                           <Phone className="w-4 h-4 inline mr-1" />
//                           {resource.phone}
//                         </a>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === 'warning-signs' && (
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recognizing Warning Signs</h2>
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                   <div className="bg-red-50 rounded-lg p-6">
//                     <h3 className="text-xl font-bold text-red-700 mb-4">General Warning Signs</h3>
//                     <ul className="space-y-2">
//                       {warningSignsGeneral.map((sign, index) => (
//                         <li key={index} className="flex items-start">
//                           <AlertTriangle className="w-4 h-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
//                           <span className="text-gray-700">{sign}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
                  
//                   <div className="bg-blue-50 rounded-lg p-6">
//                     <h3 className="text-xl font-bold text-blue-700 mb-4">Men-Specific Warning Signs</h3>
//                     <ul className="space-y-2">
//                       {warningSignsMen.map((sign, index) => (
//                         <li key={index} className="flex items-start">
//                           <Info className="w-4 h-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
//                           <span className="text-gray-700">{sign}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
                
//                 <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
//                   <div className="flex items-center mb-4">
//                     <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3" />
//                     <h3 className="text-lg font-semibold text-yellow-800">Important Note</h3>
//                   </div>
//                   <p className="text-yellow-700">
//                     Men are less likely to express suicidal thoughts directly and may show different warning signs than women. 
//                     Pay attention to changes in behavior, increased risk-taking, and withdrawal from social connections.
//                   </p>
//                 </div>
//               </div>
//             )}

//             {activeTab === 'how-to-help' && (
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Help Someone in Crisis</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//                   {howToHelp.map((step, index) => (
//                     <div key={index} className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
//                       <div className="flex items-center mb-4">
//                         {step.icon}
//                         <h3 className="text-lg font-semibold text-emerald-800 ml-3">{step.title}</h3>
//                       </div>
//                       <p className="text-emerald-700">{step.description}</p>
//                     </div>
//                   ))}
//                 </div>
                
//                 <div className="bg-gray-50 rounded-lg p-6">
//                   <h3 className="text-xl font-bold text-gray-900 mb-4">What NOT to Say</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <h4 className="font-semibold text-red-600 mb-2">Avoid These Phrases:</h4>
//                       <ul className="space-y-1 text-gray-700">
//                         <li>• "Things could be worse"</li>
//                         <li>• "You have so much to live for"</li>
//                         <li>• "Just think positive"</li>
//                         <li>• "Suicide is selfish"</li>
//                         <li>• "You'll get over it"</li>
//                       </ul>
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-emerald-600 mb-2">Say This Instead:</h4>
//                       <ul className="space-y-1 text-gray-700">
//                         <li>• "I'm here for you"</li>
//                         <li>• "You're not alone in this"</li>
//                         <li>• "I want to help"</li>
//                         <li>• "Your life matters to me"</li>
//                         <li>• "Let's get through this together"</li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === 'prevention' && (
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Prevention Strategies</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//                   {preventionStrategies.map((category, index) => (
//                     <div key={index} className="bg-gray-50 rounded-lg p-6">
//                       <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
//                       <ul className="space-y-2">
//                         {category.strategies.map((strategy, strategyIndex) => (
//                           <li key={strategyIndex} className="flex items-start">
//                             <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
//                             <span className="text-gray-700">{strategy}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Community Programs */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Our Suicide Prevention Programs
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               A Safe Space For Men is developing comprehensive suicide prevention programs specifically for the Detroit community.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
//             {communityPrograms.map((program, index) => (
//               <div key={index} className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg p-6 border border-emerald-200">
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-lg font-semibold text-gray-900">{program.title}</h3>
//                   <span className={`px-3 py-1 rounded-full text-xs font-medium ${
//                     program.status === 'In Development' ? 'bg-yellow-100 text-yellow-800' :
//                     program.status === 'Planning Phase' ? 'bg-blue-100 text-blue-800' :
//                     'bg-emerald-100 text-emerald-800'
//                   }`}>
//                     {program.status}
//                   </span>
//                 </div>
//                 <p className="text-gray-700 mb-3">{program.description}</p>
//                 <p className="text-emerald-600 text-sm font-medium">Target: {program.target}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//             Together, We Can Save Lives
//           </h2>
//           <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
//             Every conversation matters. Every connection counts. Every life has value. 
//             Join us in creating a community where men feel safe to seek help and support each other.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link 
//               href="/join"
//               className="inline-flex items-center bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
//             >
//               Join Our Mission <ArrowRight className="w-5 h-5 ml-2" />
//             </Link>
//             <Link 
//               href="/#donation"
//               className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
//             >
//               Support Prevention Programs <Heart className="w-5 h-5 ml-2" />
//             </Link>
//           </div>
          
//           <div className="mt-12 bg-white bg-opacity-10 rounded-lg p-6">
//             <p className="text-red-600 text-sm">
//               <strong>Crisis resources are available 24/7.</strong> If you or someone you know is in immediate danger, 
//               please call 988 (Suicide & Crisis Lifeline) or 911 (Emergency Services) right away.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SuicidePreventionPageComponent;