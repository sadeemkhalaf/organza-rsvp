import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../../../../firebaseConfig';

// GET: Fetch a single guest by eventId and guestId
export async function GET(_req: NextRequest, context: { params: { eventId: string; id: string } }) {
  const { eventId, id } = await context.params;

  if (!eventId || !id) {
    return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
  }

  try {
    const guestRef = doc(db, 'guests', eventId, 'list', id);
    const snapshot = await getDoc(guestRef);

    if (!snapshot.exists()) {
      return NextResponse.json({ error: 'Guest not found' }, { status: 404 });
    }

    return NextResponse.json(snapshot.data(), { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT: Update a guest
export async function PUT(
  req: NextRequest,
  { params }: { params: { eventId: string; id: string } }
) {
  const { eventId, id } = params;

  if (!eventId || !id) {
    return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
  }

  try {
    const data = await req.json();

    const guestRef = doc(db, 'guests', eventId, 'list', id);
    await updateDoc(guestRef, data);

    return NextResponse.json({ message: 'Guest updated successfully' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
