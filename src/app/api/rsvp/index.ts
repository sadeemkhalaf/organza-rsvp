import { NextApiRequest, NextApiResponse } from 'next';
import { updateGuestRSVP } from '@/lib/db/rsvp';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { eventId, guestId, status } = req.body;

      if (!eventId || !guestId || !status) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const success = await updateGuestRSVP(eventId, guestId, status);

      if (!success) {
        return res.status(500).json({ error: 'Failed to update RSVP' });
      }

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error updating RSVP:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  res.setHeader('Allow', ['POST']);
  return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
}
