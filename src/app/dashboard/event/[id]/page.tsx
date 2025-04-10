import { MOCKED_IEVENTS } from "@/mock/event.mock";
import EventDetails from "@/views/EventDetails";
import React from "react";

// a page to show event details
function EventPage() {
  return <EventDetails event={MOCKED_IEVENTS[0]} />;
}

export default EventPage;
