export enum GuestStatus {
    Confirmed = 'Confirmed',
    Pending = 'Pending',
    Declined = 'Declined'
}
export interface Guest {
    id: string; // Unique identifier for each guest
    name: string; // Guest's name
    email: string; // Guest's email
    status: GuestStatus; // RSVP status
    avatarUrl?: string; // Optional: Avatar image URL
  }
  
  export interface Event {
    id: string; // Unique identifier for the event
    title: string; // Event title
    date: string; // Event date in ISO format
    startTime: string; // Event start time (e.g., '09:00 AM')
    endTime: string; // Event end time (e.g., '05:00 PM')
    location: string; // Event location (e.g., 'San Francisco, CA')
    totalInvited: number; // Total number of invited guests
    accepted: number; // Number of guests who accepted
    declined: number; // Number of guests who declined
    pending: number; // Number of guests with pending responses
    eventType: string; // Event type (e.g., 'Conference', 'Wedding')
    capacity: number; // Event capacity (max number of guests)
    description: string; // Event description
    story?: string;
    guests: Guest[]; // List of guests
    couple?: string; // Couple's name, for weddings and anniversaries and engagements
  }

  export interface IEvent {
    id: string;
    attributes: {
      title: string;
      date: string;
      story?: string;
      coverImage?: string;
      invitedBy: string;
      formTitle?: string;
      formDescription?: string;
      paid?: boolean;
      guestsLimit?: number;
      locationDescription?: string;
      createdAt: string;
      updatedAt: string;
      publishedAt?: string;
      eventId: string;
      account?: { data: { id: number; attributes: IAccount } };
    };
  }

  export interface IAccount {
    id: string;
    attributes: {
      name: string;
      email: string;
      profilePicture?: string;
      createdAt: string;
      updatedAt: string;
      role: "admin" | "event-planner" | "guest"; // Adjust roles as needed
      subscription?: {
        plan: string;
        status: "active" | "expired" | "canceled";
        renewalDate?: string;
      };
      events?: { data: IEvent[] }; // List of events the account owns
    };
  }
  
  
  