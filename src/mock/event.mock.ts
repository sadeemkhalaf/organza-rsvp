import { Event, GuestStatus } from "@/types/event";

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