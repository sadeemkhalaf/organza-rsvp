import { MOCKED_IEVENTS } from "@/mock/event.mock";
import { DashboardView } from "@/views";
import React from "react";

// a page to show the dashboard with all the events
function DashboardPage() {
  return <DashboardView events={MOCKED_IEVENTS} />;
}

export default DashboardPage;
