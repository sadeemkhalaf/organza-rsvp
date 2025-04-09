import { StatBox } from "@/components";
import { GuestList } from "@/components/organizms";
import { IEvent } from "@/types/event";
import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

interface EventDetailsProps {
  event: IEvent;
}

const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {
  return (
    <div className="max-w-6xl mx-auto pb-6 p-6">
      {/* Event Title */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h1 className="text-2xl font-bold">{event.attributes.title}</h1>
        <div className="flex text-gray-600 mt-2 flex-col md:flex-row items-start">
          <div className="flex flex-row items-baseline mx-3">
            <FaCalendarAlt className="mr-2" />
            {new Date(event.attributes.date).toLocaleString()}
          </div>
          <div className="flex flex-row items-baseline mx-3">
            <FaMapMarkerAlt className="ml-4 mr-2" />
            {event.attributes.locationDescription}
          </div>
        </div>
      </div>

      {/* Event Stats */}
      <div className="flex flex-wrap md:justify-between bg-white shadow-md rounded-lg p-6 mb-6">
        <StatBox
          title="Total Invited"
          value={event.attributes.guestsLimit || 10}
        />
        <StatBox title="Pending" value={60} color="#FFD700" /> {/* Yellow */}
        <StatBox title="Accepted" value={28} color="#32CD32" /> {/* Green */}
        <StatBox title="Declined" value={12} color="#FF4500" /> {/* Red */}
      </div>

      {/* Event Description */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold">Event Details</h2>
        <p className="text-gray-600 mt-2">
          {event.attributes.story || "this is a place for event description"}
        </p>
      </div>

      {/* Guest List */}
      <GuestList />
      <div className="my-8" />
    </div>
  );
};

export default EventDetails;
