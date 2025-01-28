import { connectToDatabase } from './connectToDatabase';

export const updateGuestRSVP = async (
  eventId: string,
  guestId: string,
  status: 'Accepted' | 'Declined'
): Promise<boolean> => {
  const { db } = await connectToDatabase();

  // Update the guest's RSVP status
  const result = await db.collection('guests').updateOne(
    { eventId, guestId },
    { $set: { status } }
  );

  return result.modifiedCount > 0;
};
