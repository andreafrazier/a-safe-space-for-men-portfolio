import React from 'react';
import { Users, Heart, Building, Network, AlertTriangle } from 'lucide-react';
import type { TeamMember, FocusArea, ImpactStat } from '@/types/about';


export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "William J. Word",
    title: "Founder & Board President",
    image: "/images/team/william-word.jpeg",
    bio: "William J. Word is a visionary leader and community advocate dedicated to breaking barriers in men's mental health. As Founder and Board President of A Safe Space for Men, William leads the charge in creating supportive, judgment-free environments where men—particularly Black men—can prioritize their emotional well-being. With 20+ years of leadership experience spanning sales, operations, and customer service, he brings strong organizational, strategic, and interpersonal skills to the nonprofit sector, ensuring that mental health resources and support systems reach those who need them most.\n\nThroughout his career, William has honed his ability to build relationships, manage teams, and foster community engagement. His experience in high-volume operations, event management, and customer relations has made him a skilled communicator and problem-solver, adept at leading initiatives that drive real impact.\n\nIn addition to his professional background, William has a strong passion for entertainment and artist management, having worked with renowned recording studios and artists to support creative expression and community-driven projects. This experience has reinforced his commitment to mentorship, empowerment, and fostering safe spaces for dialogue—a cornerstone of A Safe Space for Men.\n\nWilliam's leadership, dedication to social change, and ability to connect with individuals from all walks of life make him an instrumental force in advancing mental health advocacy and reshaping the conversation around masculinity and emotional resilience.",
    email: "william@asafespaceformen.org"
  },
  {
    id: 2,
    name: "Douglas A. Monds",
    title: "Legal & Compliance",
    image: "",
    bio: "Douglas A. Monds graduated from Morehouse College and the University of Michigan Law School. As Compliance Officer for A Safe Space for Men, Douglas is responsible for ensuring organizational adherence to relevant laws, regulations, policies and standards.\n\nDouglas began his career at Miller, Canfield, Paddock and Stone and served as a Hearing Officer for Detroit's Department of Appeals and Hearings. Now in private practice, he assists small businesses and represents indigent defendants through Wayne County's Indigent Defense Program. Douglas is also a golfer, artist, musician, and entrepreneur."
  },
  {
    id: 3,
    name: "Michael Ross",
    title: "Fundraising",
    image: "/images/team/michael-ross.jpeg",
    bio: "Michael Ross is the owner of Motoren Group Consulting, an innovative and dynamic firm specializing in manufacturing consulting. With over 18 years of dedicated experience in the ever-evolving fields of manufacturing, materials, and logistics, he has established himself as a Senior Supply Chain Management professional. Michael excels at cultivating cohesive teams and fostering collaboration across all levels of an organization. His mission is to empower the workforce, instilling strength and self-sustainability within teams. He takes immense pride in mentoring individuals, guiding them on their journey toward advancing into senior leadership roles and helping them realize their full potential.\n\nAs Board Secretary for A Safe Space for Men, Michael is instrumental in program planning and fundraising activities. As an Army veteran who served during the Gulf War, Michael is acutely aware of the challenges faced by returning soldiers and understands the impact that such experiences can have on individuals.\n\nBeyond his professional achievements, Michael is deeply committed to community service, embodying his belief in the importance of giving back. He has proudly served as Vice President of the Detroit Inter-Alumni Council chapter of the United Negro College Fund, advocating for educational opportunities for students. As a member of Alpha Phi Alpha Fraternity Inc., he participates in various initiatives aimed at uplifting the community. Additionally, Michael actively volunteers with organizations such as Forgotten Harvest and Citizens Changing Communities, working alongside others to make a positive impact and foster meaningful change in the lives of those they serve."
  },
  {
    id: 4,
    name: "Darryl Woods, Sr.",
    title: "Community Outreach",
    image: "/images/team/darryl-woods.jpeg",
    bio: "Darryl Woods, Sr. became a minister while serving a life sentence without the possibility of parole. During 29 years in prison, he started programs to reduce parolee recidivism and the school-to-prison pipeline. His work led thousands to transform their lives. He chaired the NAACP Detroit Branch Prison Program Committee and served on the Chance for Life Board before Gov. Rick Synder commuted his sentence in 2018.\n\nPolice Commissioner Woods joined the Board in January 2024 after being appointed by Mayor Mike Duggan to a five-year term and confirmed by the Detroit City Council. He brings a wealth of knowledge and community experience to his role as a Board Member for A Safe Space for Men.\n\nPolice Commissioner Woods continues to inspire youth and others through his story to show anyone can rebuild their lives -- and commit to building the community around them. On any given day, you might find him speaking at events; urban planning with politicians, billionaires and pastors; or working with judges, the FBI, DEA, US Attorney Office, and others on public safety.\n\nSince his release, he has worked with Mitch Albom SAY Detroit and Growth Works. He served on the State Appellate Defenders Commission and the Detroit Wayne Integrated Health Network's Substance Use Disorder Board. He is a licensed Elder at Greater Grace Temple and the founder and CEO of Fighting the Good Fight LLC."
  }, 
];

export const focusAreas: FocusArea[] = [
  {
    icon: React.createElement(Users, { className: "w-12 h-12 text-emerald-600" }),
    title: "Community Awareness & Engagement",
    description: "We develop campaigns to highlight the importance of men's mental health, organize educational workshops, and share personal stories to foster empathy and understanding.",
    initiatives: [
      "Awareness campaigns across various media platforms",
      "Educational workshops addressing mental health topics",
      "Storytelling initiatives to reduce stigma"
    ]
  },
  {
    icon: React.createElement(Building, { className: "w-12 h-12 text-emerald-600" }),
    title: "Community Resources & Referrals",
    description: "We create comprehensive directories of mental health services and develop user-friendly platforms offering tools and access to support communities.",
    initiatives: [
      "Comprehensive directory of mental health services",
      "Digital platforms with self-assessment tools",
      "Access to in-person and virtual support communities"
    ]
  },
  {
    icon: React.createElement(Network, { className: "w-12 h-12 text-emerald-600" }),
    title: "Community Partnerships",
    description: "We partner with local and national men's mental health organizations to build an accessible network that serves all men in various formats.",
    initiatives: [
      "Partnerships with other men's organizations",
      "Collaborative networks for broader impact",
      "Resource sharing and joint initiatives"
    ]
  }
];

export const impactStats: ImpactStat[] = [
  {
    percentage: "77%",
    description: "of men experience symptoms of anxiety, stress, and depression",
    icon: React.createElement(AlertTriangle, {className: "w-8 h-8 text-red-600" }),
    context: "crisis"
  },
  {
    percentage: "40%",
    description: "have never discussed their mental health with anyone",
    icon: React.createElement(AlertTriangle, { className: "w-8 h-8 text-red-600" }),
    context: "crisis"
  },
  {
    percentage: "14%",
    description: "of Black men seek mental health treatment",
    icon: React.createElement(AlertTriangle, { className: "w-8 h-8 text-red-600" }),
    context: "crisis"
  },
  {
    percentage: "1 in 4",
    description: "men lack close friends and social support",
    icon: React.createElement(AlertTriangle, { className: "w-8 h-8 text-red-600" }),
    context: "crisis"
  }
];
