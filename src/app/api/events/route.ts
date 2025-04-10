import { IEvent } from "@/types/event";
import { NextResponse } from "next/server";

const events: IEvent[] = [
  {
    id: "1",
    attributes: {
      title: "Sample Event",
      createdAt: "2025-06-01T00:00:00.000Z",
      updatedAt: "2025-06-01T00:00:00.000Z",
      date: "2025-06-01",
      eventId: "1",
      invitedBy: "John Doe",
      story: "A great event happening in Amman.",
      paid: false,
      formDescription: "Please fill out the form to attend the event.",
      formTitle: "Event Form",
      guestsLimit: 100,
      locationDescription: "Amman, Jordan",
      publishedAt: "2025-06-01T00:00:00.000Z",
    },
  },
  // Add more events as needed
];

export async function GET() {
  try {
    const event = events[0]; // Simulate fetching an event

    if (!event) {
      return NextResponse.json({ message: "Event not found" }, { status: 404 });
    }

    return NextResponse.json(event, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
