import React from "react";
import EventCard from "@/components/organizms/eventCard/EventCard.component";
import { IEvent } from "@/types/event";

interface DashboardProps {
  events: IEvent[];
}

const Dashboard: React.FC<DashboardProps> = ({ events }) => {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Events</h1>
      <p className="text-gray-500 mb-6">Manage, display and export all your invitations</p>

      {/* Search & Filter Section */}
      <div className="flex flex-1 justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Find an event ..."
          className="w-full mr-4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <label className="flex items-center text-gray-600">
          <input type="checkbox" className="mr-2" /> <span className="text-wrap text-sm">Filter expired events</span>
        </label>
      </div>

      {/* Event Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
        <EventCard isEmpty /> {/* Placeholder for creating a new event */}
      </div>
    </div>
  );
};

export default Dashboard;
