'use client';
// Server-side handler for RSVP submission

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface RSVPFormProps {
  guestId: string;
  eventId: string;
}

const RSVPForm: React.FC<RSVPFormProps> = ({ guestId, eventId }) => {
  const [status, setStatus] = useState<'Accepted' | 'Declined' | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleRSVP = async (response: 'Accepted' | 'Declined') => {
    setLoading(true);
    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ guestId, eventId, status: response }),
      });

      if (!res.ok) throw new Error('Failed to submit RSVP');

      setStatus(response);
      setError(null);

      // Redirect to thank-you or success page
      router.push(`/${eventId}/${guestId}/thank-you`);
    } catch (err) {
      setError(`Failed to submit RSVP. Please try again. ${err}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8">
      {status ? (
        <p>Thank you for your response! You have {status} the invitation.</p>
      ) : (
        <div>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg mr-4"
            onClick={() => handleRSVP('Accepted')}
            disabled={loading}
          >
            Accept
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
            onClick={() => handleRSVP('Declined')}
            disabled={loading}
          >
            Decline
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      )}
    </div>
  );
};

export default RSVPForm;
