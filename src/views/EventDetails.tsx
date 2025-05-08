'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { StatBox } from '@/components';
import { GuestList } from '@/components/organizms';
import useEventDetails from '@/hooks/useEventDetails';
import { GuestResponseColor } from '@/models/enum';
import { FiCalendar, FiMapPin, FiCompass } from 'react-icons/fi';

// each event will initiate a first guest for preview template, the guest shall not be counted and the status will be updated for preview only
const EventDetails = () => {
  const { id } = useParams();

  const { eventDetails, eventGuests, calculateChartData } = useEventDetails({
    eventId: id ? (id as string) : '',
  });

  const calculateGuestData = useMemo(() => calculateChartData(eventGuests || []), [eventGuests]);

  return (
    <div className="mx-auto pb-6 p-6">
      {/* Event Title */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <title>{eventDetails?.title}</title>
        <h1 className="text-2xl font-bold">{eventDetails?.title}</h1>
        <div className="flex justify-between items-center">
          <div className="flex text-gray-600 mt-2 flex-col md:flex-row items-start">
            <div className="flex flex-row items-center mx-3">
              <FiCalendar className="mx-2" />
              {eventDetails?.date
                ? new Date(eventDetails?.date?.seconds * 1000).toLocaleString()
                : ''}
            </div>
            <div className="flex flex-row items-center mx-3">
              <FiMapPin className="ml-4 mx-2" />
              <Link href={eventDetails?.location || 'https://www.google.com/maps'}>
                <span className="text-cyan-600 cursor-pointer">{eventDetails?.location}</span>
              </Link>
            </div>
          </div>
          <Link className="flex flex-row mx-3 items-center" href={`/event/${eventDetails?.title}/${eventDetails?.eventId}/guestTestId`}>
          {/* /Users/sadeemahmad/Documents/GitHub/organza-rsvp/src/app/[event-title]/[eventId]/[guestId]/page.tsx */}
            <FiCompass className="ml-4 mx-2" />
            <span className="text-cyan-600 font-bold">Preview Template</span>
          </Link>
        </div>
      </div>

      {/* Event Stats */}
      <div className="flex flex-wrap md:justify-between bg-white shadow-md rounded-lg p-6 mb-6">
        <StatBox
          title="Total Capacity"
          value={eventDetails?.capacity || calculateGuestData.total}
        />
        <StatBox
          title="Pending"
          value={calculateGuestData.pending}
          color={GuestResponseColor.PENDING}
        />
        {/* Yellow */}
        <StatBox
          title="Accepted"
          value={calculateGuestData.accepted}
          color={GuestResponseColor.ACCEPTED}
        />
        {/* Green */}
        <StatBox
          title="Declined"
          value={calculateGuestData.declined}
          color={GuestResponseColor.DECLINED}
        />
        {/* Red */}
      </div>

      {/* Event Description */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold">Event Details</h2>
        <p className="text-gray-600 mt-2">
          {eventDetails?.description || 'this is a place for event description'}
        </p>
      </div>

      {/* Guest List */}
      <GuestList eventGuests={eventGuests} />
      <div className="my-8" />
    </div>
  );
};

export default EventDetails;
