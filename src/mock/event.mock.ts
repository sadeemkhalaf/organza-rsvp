import { Event, GuestStatus, IEvent } from "@/types/event";

export const MOCKED_EVENTS: Event[] = [{
    "id": "1",
    "title": "Annual Tech Conference 2025",
    "date": "2025-03-15",
    "startTime": "09:00 AM",
    "endTime": "05:00 PM",
    "location": "San Francisco, CA",
    "totalInvited": 250,
    "accepted": 180,
    "declined": 20,
    "pending": 50,
    "eventType": "Conference",
    "capacity": 300,
    "description": "Join us for our annual tech conference where industry leaders share insights on the latest technological trends and innovations. Network with peers and learn from the best in the field.",
    "guests": [
        {
            "id": "1",
            "name": "Sarah Johnson",
            "email": "sarah.j@example.com",
            "status": GuestStatus.Confirmed,
            "avatarUrl": "https://example.com/avatar1.png"
        },
        {
            "id": "2",
            "name": "Michael Chen",
            "email": "m.chen@example.com",
            "status": GuestStatus.Pending,
            "avatarUrl": "https://example.com/avatar2.png"
        }
    ]
}
];

export const MOCKED_IEVENTS: IEvent[] = [
    {
        id: "1",
        attributes: {
            title: "Tech Meetup 2025",
            date: "2025-04-20",
            invitedBy: "John Doe",
            createdAt: "2025-01-01T10:00:00Z",
            updatedAt: "2025-01-10T10:00:00Z",
            eventId: "1",
            locationDescription: "New York, NY",
            guestsLimit: 100,
            formTitle: "RSVP for Tech Meetup 2025",
            formDescription: "Please fill out the form to confirm your attendance.",
            paid: false,
        }
    },
    {
        id: "2",
        attributes: {
            title: "AI Symposium 2025",
            date: "2025-05-10",
            invitedBy: "Jane Smith",
            createdAt: "2025-02-01T11:00:00Z",
            updatedAt: "2025-02-15T11:00:00Z",
            eventId: "2",
            locationDescription: "Los Angeles, CA",
            guestsLimit: 200,
            formTitle: "RSVP for AI Symposium 2025",
            formDescription: "Join us for a day of AI discussions and networking.",
            paid: true,
            coverImage: "https://example.com/coverimage.png",
        }
    },
    {
        id: "3",
        attributes: {
            title: "Blockchain Summit 2025",
            date: "2025-06-15",
            invitedBy: "Alice Brown",
            createdAt: "2025-03-01T12:00:00Z",
            updatedAt: "2025-03-10T12:00:00Z",
            eventId: "3",
            locationDescription: "Chicago, IL",
            guestsLimit: 150,
            formTitle: "RSVP for Blockchain Summit 2025",
            formDescription: "Explore the future of blockchain technology with industry experts.",
            paid: true,
            coverImage: "https://example.com/blockchaincover.png",
        }
    },
    {
        id: "4",
        attributes: {
            title: "Cybersecurity Workshop 2025",
            date: "2025-07-20",
            invitedBy: "Bob White",
            createdAt: "2025-04-01T13:00:00Z",
            updatedAt: "2025-04-15T13:00:00Z",
            eventId: "4",
            locationDescription: "Austin, TX",
            guestsLimit: 80,
            formTitle: "RSVP for Cybersecurity Workshop 2025",
            formDescription: "Hands-on workshop on the latest in cybersecurity.",
            paid: false,
        }
    }
];
