import TemplateRenderer from '@/features/EventTemplate/components/TemplateRenderer';
import { Guest } from '@/types/event';
import { useEffect, useState } from 'react';
import RSVPForm from './rsvp';


const EventGuestPage = ({ params }: { params: { eventId: string; guestId: string } }) => {
  const { eventId, guestId } = params;

  const [eventDetails, setEventDetails] = useState<Event | null>(null);
  const [guestDetails, setGuestDetails] = useState<Guest | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // (async () => {
    //   try {
    //     setLoading(true);
    //     const { event, guest } = await fetchEventDetails(eventId, guestId);
    //     setEventDetails(event);
    //     setGuestDetails(guest);
    //   } catch (error) {
    //     console.error('Failed to fetch event or guest details:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // })();
  }, [eventId, guestId]);

  if (loading) return <p>Loading...</p>;
  if (!eventDetails || !guestDetails) return <p>Event or guest not found</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Template Renderer */}
      <TemplateRenderer eventDetails={eventDetails} guestDetails={guestDetails} />

      {/* RSVP Form */}
      <RSVPForm guestId={guestId} eventId={eventId} />
    </div>
  );
};

export default EventGuestPage;
