import React from "react";
import EventCard from "@/components/organizms/eventCard/EventCard.component";
import { IEvent } from "@/types/event";
import Link from "next/link";

interface DashboardProps {
  events: IEvent[];
}

const Dashboard: React.FC<DashboardProps> = ({ events }) => {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 mb-6">
      <div className="w-full flex items-start flex-col sm:flex-row justify-between mb-6 flex-1 px-2 md:px-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Events</h1>
          <p className="text-gray-500 mb-6">
            Manage, display and export all <br /> your invitations
          </p>
        </div>
        <Link
          href="/new-event"
          className="bg-black text-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-800"
        >
          Create new event
        </Link>
      </div>

      {/* Search & Filter Section */}
      <div className="flex flex-1 flex-col md:flex-row md:justify-around md:items-center mb-6 px-2 md:px-4">
        <input
          type="text"
          placeholder="Find an event ..."
          className="w-full md:w-1/2 mr-4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <label className="flex items-center text-gray-600 mt-4 md:mt-0">
          <input type="checkbox" className="mr-2" />{" "}
          <span className="text-wrap text-sm px-2">Filter expired events</span>
        </label>
      </div>

      {/* Event Cards Grid */}
      <div className="flex flex-wrap flex-1">
        {([{ id: "empty" }, ...events] as IEvent[]).map((event) =>
          event.id !== "empty" ? (
            <EventCard key={event.id} event={event} />
          ) : (
            <EventCard isEmpty key={event.id} />
          ),
        )}
        {/* Placeholder for creating a new event */}
      </div>
    </div>
  );
};

export default Dashboard;
