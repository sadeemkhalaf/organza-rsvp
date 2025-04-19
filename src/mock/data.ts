import { Event, EventTemplate, Guest, User } from '@/types/all';

export const eventTemplates: EventTemplate[] = [
  {
    id: 'template-1',
    title: 'Classic Wedding',
    description: 'A timeless and elegant template for your special day.',
    imageUrl: '/lovable-uploads/47b65894-b5dd-4486-be24-eaa30bc39f88.png',
    category: 'Wedding',
    tags: ['elegant', 'classic', 'timeless'],
  },
  {
    id: 'template-2',
    title: 'Modern Save the Date',
    description: 'A sleek and contemporary design for your announcement.',
    imageUrl: '/lovable-uploads/75a6f4a5-dd51-4f09-abdb-3c9e0b03cc4c.png',
    category: 'Wedding',
    tags: ['modern', 'minimal', 'stylish'],
  },
  {
    id: 'template-3',
    title: 'Rustic Wedding',
    description: 'A warm and inviting design with natural elements.',
    imageUrl: '/lovable-uploads/afb1ceee-1844-4d4c-b3cb-6766d8dea43c.png',
    category: 'Wedding',
    tags: ['rustic', 'natural', 'romantic'],
  },
  {
    id: 'template-4',
    title: 'Birthday Celebration',
    description: 'A fun and festive template for your birthday party.',
    imageUrl: '/lovable-uploads/8784b67d-3927-4d0e-a078-e5e9eb9c5855.png',
    category: 'Birthday',
    tags: ['fun', 'colorful', 'celebration'],
  },
  {
    id: 'template-5',
    title: 'Corporate Event',
    description: 'A professional and sleek design for business events.',
    imageUrl: '/lovable-uploads/d01987bc-232a-4c11-9657-b0d4c648f0d9.png',
    category: 'Corporate',
    tags: ['professional', 'business', 'formal'],
  },
  {
    id: 'template-6',
    title: 'Baby Shower',
    description: 'A sweet and tender design for welcoming your little one.',
    imageUrl: '/lovable-uploads/baby-shower.jpg',
    category: 'Baby Shower',
    tags: ['cute', 'tender', 'playful'],
  },
];

export const sampleGuests: Guest[] = [
  {
    id: 'guest-1',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    status: 'confirmed',
    notes: 'Allergic to nuts',
    plusOne: true,
    plusOneName: 'Michael Johnson',
  },
  {
    id: 'guest-2',
    name: 'Michael Chen',
    email: 'm.chen@example.com',
    status: 'pending',
    plusOne: false,
  },
  {
    id: 'guest-3',
    name: 'Emily Williams',
    email: 'emily.w@example.com',
    status: 'declined',
    notes: 'Will be out of town',
    plusOne: false,
  },
];

export const sampleEvents: Event[] = [
  {
    id: 'event-1',
    title: 'Summer Wedding 2025',
    date: '2025-07-15',
    time: '18:00',
    location: 'Rosewood Gardens',
    locationUrl: 'https://maps.google.com/?q=Rosewood+Gardens',
    description: 'Join us for our wedding celebration!',
    story: 'We met five years ago at a coffee shop and have been inseparable ever since.',
    coverPhoto: '/lovable-uploads/47b65894-b5dd-4486-be24-eaa30bc39f88.png',
    mainPhoto: '/lovable-uploads/75a6f4a5-dd51-4f09-abdb-3c9e0b03cc4c.png',
    templateId: 'template-1',
    formTitle: 'RSVP',
    formDescription: 'Please let us know if you can attend our special day.',
    status: 'active',
    capacity: 120,
    guests: sampleGuests.slice(0, 2),
  },
  {
    id: 'event-2',
    title: 'Corporate Summit',
    date: '2025-08-22',
    time: '09:00',
    location: 'Grand Hotel Conference Center',
    locationUrl: 'https://maps.google.com/?q=Grand+Hotel+Conference+Center',
    description: 'Annual corporate meeting and strategy session.',
    templateId: 'template-5',
    formTitle: 'Registration',
    formDescription: 'Please register to confirm your attendance.',
    status: 'draft',
    capacity: 250,
    guests: [sampleGuests[2]],
  },
];

export const sampleUser: User = {
  id: 'user-1',
  name: 'Alex Morgan',
  email: 'alex@example.com',
  events: sampleEvents,
};
