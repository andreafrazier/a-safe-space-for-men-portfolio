export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  locationType: 'in-person' | 'virtual' | 'hybrid';
  category: 'support-group' | 'workshop' | 'community' | 'awareness' | 'conference';
  image?: string;
  capacity?: number;
  registered?: number;
  cost: string;
  tags: string[];
  registrationLink?: string;
  recurring?: boolean;
}

export interface EventCategory {
  id: string;
  name: string;
}