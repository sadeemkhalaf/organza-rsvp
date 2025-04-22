export interface EventTemplate {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
}

export interface Guest {
  id: string;
  name: string;
  email: string;
  status: "pending" | "confirmed" | "declined";
  notes?: string;
  plusOne?: boolean;
  plusOneName?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  locationUrl?: string;
  description: string;
  story?: string;
  coverPhoto?: string;
  mainPhoto?: string;
  templateId: string;
  formTitle?: string;
  formDescription?: string;
  status: "draft" | "active" | "completed";
  capacity?: number;
  guests?: Guest[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  events: Event[];
}
