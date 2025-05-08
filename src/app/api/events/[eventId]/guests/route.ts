// File: src/app/api/events/[eventId]/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../../../firebaseConfig';


// GET method to fetch a single event by eventId
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ eventId: string }> }
) {

  const { eventId } = await params;

  if (!eventId) {
    return NextResponse.json({ error: 'Missing eventId' }, { status: 400 });
  }

  try {
    const eventGuestsRef = collection(db, 'guests', eventId, 'list');
    // get guests refs 
    const snapshot = await getDocs(eventGuestsRef);

    if (!snapshot.docs.length) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }
    const guests = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    
    return NextResponse.json(guests, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


// export async function PUT(
//   req: NextRequest,
//   { params }: { params: { eventId: string; id: string } }
// ) {
//   const { eventId, id } = params;

//   try {
//     const body = await req.json();

//     // const guestRef = guestCollection.doc(eventId).collection('list').doc(id);
//     const guestRef = doc(collection(doc(collection(db, 'guests'), eventId), 'list'), id);
//     await updateDoc(guestRef, body);

//     return NextResponse.json({ success: true }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: (error as any).message || 'Update failed' }, { status: 500 });
//   }
// }
