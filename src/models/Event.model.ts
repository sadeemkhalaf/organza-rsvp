import { IGuest } from "./User.model";

export interface EventGuests {
    eventId: string;
    list: IGuest[];
}

export interface EventDetailsFS {
    contact: string[]; // Array of phone numbers
    date: Date; // Firestore Timestamp will be converted to JS Date
    description: string;
    eventId: string;
    eventType: string;
    formDescription: string;
    coverImage: string;
    location: string;
    subTitle: string;
    templateId: string;
    title: string;
    userId: string; // Firestore DocumentReference can be typed explicitly if needed
    capacity: number;
    guests?: IGuest[];
    status: 'draft' | 'active' | 'completed';
    paid: boolean;
    formTitle?: string;
  }