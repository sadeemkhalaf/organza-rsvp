'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { FaPlus, FaUsers } from 'react-icons/fa';
import Link from 'next/link';
import { EventDetailsFS } from '@/models/Event.model';

interface EventCardProps {
  event?: EventDetailsFS;
  isEmpty?: boolean;
}

export default function EventCard({ event, isEmpty }: EventCardProps) {
  const router = useRouter();

  if (isEmpty) {
    return (
      <div className="m-4 flex flex-col w-full max-w-xs bg-[#FFFFFF75] border border-dashed border-gray-300 rounded-lg p-6 cursor-pointer] items-center justify-center hover:shadow-md transition-all duration-300">
        <div className="flex flex-col items-center">
          <FaPlus className="text-gray-400 text-3xl mb-2" />
          <Link href="/new-event" className="text-gray-600 text-lg font-medium">
            Create New Event
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="m-4 flex flex-col w-full max-w-xs bg-white border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-md transition-all duration-300"
      onClick={() => router.push(`/dashboard/event/${event?.eventId}`)}
    >
      <div
        className="relative rounded-md bg-cover bg-center h-[120px]"
        style={{
          backgroundImage: `url('${
            event?.coverImage || 'https://via.placeholder.com/300'
          }')`,
        }}
      >
        <span
          className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded-full ${
            event?.paid ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
          }`}
        >
          {event?.paid ? 'paid' : 'pending payment'}
        </span>
      </div>
      <div className="mt-3">
        <h3 className="font-semibold text-lg text-gray-800">
          {event?.title || 'Untitled Event'}
        </h3>
        <p className="text-sm text-gray-500">
          {new Date(event?.date || '').toLocaleString()}
        </p>
        <div className="flex items-center gap-2 mt-2 text-gray-600 text-sm">
          <FaUsers className="text-gray-500" /> {event?.capacity || 0} guests
        </div>
      </div>
      <div className="mt-4 text-sm font-medium text-blue-600">View Details</div>
    </div>
  );
}
