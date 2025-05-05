'use client';

import { StatBox } from '@/components';
import { GuestList } from '@/components/organizms';
import useEventDetails from '@/hooks/useEventDetails';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

// each event will initiate a first guest for preview template, the guest shall not be counted and the status will be updated for preview only 
const EventDetails = () => {
  const { id } = useParams();
  
  const { eventDetails } = useEventDetails({ eventId: id ? (id as string) : '' });

  return (
    <div className="max-w-6xl mx-auto pb-6 p-6">
      {/* Event Title */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h1 className="text-2xl font-bold">{eventDetails?.title}</h1>
        <div className="flex text-gray-600 mt-2 flex-col md:flex-row items-start">
          <div className="flex flex-row items-baseline mx-3">
            <FaCalendarAlt className="mx-2" />
            {/* @ts-expect-error: ignore data type for now */}
            {eventDetails?.date ? new Date(eventDetails?.date?.seconds * 1000).toLocaleString() : ''}
          </div>
          <div className="flex flex-row items-baseline mx-3">
            <FaMapMarkerAlt className="ml-4 mx-2" />
            <Link href={eventDetails?.location || 'https://www.google.com/maps'}>
              <span className="text-cyan-600 cursor-pointer">{eventDetails?.location}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Event Stats */}
      <div className="flex flex-wrap md:justify-between bg-white shadow-md rounded-lg p-6 mb-6">
        <StatBox title="Total Invited" value={eventDetails?.capacity || 10} />
        <StatBox title="Pending" value={60} color="#FFD700" /> {/* Yellow */}
        <StatBox title="Accepted" value={28} color="#32CD32" /> {/* Green */}
        <StatBox title="Declined" value={12} color="#FF4500" /> {/* Red */}
      </div>

      {/* Event Description */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold">Event Details</h2>
        <p className="text-gray-600 mt-2">
          {eventDetails?.description || 'this is a place for event description'}
        </p>
      </div>

      {/* Guest List */}
      <GuestList />
      <div className="my-8" />
    </div>
  );
};

export default EventDetails;
