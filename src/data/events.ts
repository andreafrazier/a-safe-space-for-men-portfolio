import { Event } from '@/types/events';

export const events: Event[] = [
  {
    id: 1,
    title: "Monthly Men's Discussion Group",
    description: "A safe space where men talk openly about life's challenges. No professionals, just conversation and brotherhood.",
    date: "2025-11-24", 
    time: "6:30 PM - 8:30 PM",
    location: "TBD, Detroit",
    locationType: "in-person",
    category: "support-group",
    cost: "Free",
    tags: ["Support", "Mental Health", "Community"],
    recurring: true
  },
  {
    id: 2,
    title: "We Care Health Fair",
    description: "Connections to Life invites you to a day of wellness, resources, and healthy living.",
    date: "2025-11-08",
    time: "11:00 AM - 2:00 PM",
    location: "8324 Woodward Ave - Detroit People's Food Co-op",
    locationType: "in-person",
    category: "community",
    cost: "Free",
    tags: ["Health", "Community", "Support"],
    registrationLink: "https://www.eventbrite.com/e/we-care-health-fair-tickets-1652948366059?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl"
  },
  {
    id: 3,
    title: "NAMI Detroit Family Support Group Meeting (Mental Health)",
    description: "Join NAMI Detroit for an event all about mental health and providing a safe space for families to connect and grow.",
    date: "2025-11-13",
    time: "6:00 PM",
    location: "2900 Conner St, Bldg A, Detroit",
    locationType: "in-person",
    category: "support-group",
    cost: "Free",
    tags: ["Community", "Awareness", "Mental Health"],
    registrationLink: "https://www.eventbrite.com/e/nami-detroit-family-support-group-meetingmental-health-in-person-only-tickets-1136075435209?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&aff=ebdsshcopyurl"
  },
  {
    id: 4,
    title: "Black Men's Mental Health Conference",
    description: "Bringing awareness and education to mental health care for Black Men.",
    date: "2025-11-15",
    time: "10:00 AM - 2:00 PM",
    location: "461 Burroughs Street - TechTown Detroit",
    locationType: "in-person",
    category: "conference",
    cost: "Free to $23.18",
    tags: ["Community", "Awareness", "Mental Health"],
    registrationLink: "https://www.eventbrite.com/e/detroit-black-mens-mental-health-conference-tickets-1644869923219?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl"
  },
  {
    id: 5,
    title: "National Black Men in Leadership Conference",
    description: "A transformative experience uplifts Black men through connection, leadership development, and strategy",
    date: "2025-12-04",
    time: "8:00 AM - 5:00 PM",
    location: "1 Washington Blvd - Huntington Place, Detroit",
    locationType: "in-person",
    category: "conference",
    cost: "$499",
    tags: ["Community", "Leadership", "Support"],
    registrationLink: "https://theunitycollaborative.org/black-men-in-leadership-conference-2025/"
  },
];

// Helper function to get upcoming events for the homepage
export const getUpcomingEventsForHome = (): Event[] => {
  const now = new Date();
  
  // Get the recurring event
  const recurringEvent = events.find(event => event.recurring);
  
  // Get non-recurring upcoming events, sorted by date
  const upcomingEvents = events
    .filter(event => !event.recurring && new Date(event.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 2); // Get next 2 upcoming events
  
  // Return recurring event first, then the 2 upcoming events
  return recurringEvent 
    ? [recurringEvent, ...upcomingEvents]
    : upcomingEvents;
};