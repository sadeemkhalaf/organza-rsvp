import { NextRequest, NextResponse } from 'next/server';
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../../../../../firebaseConfig';


export async function GET(
  req: NextRequest,
  context: { params: { eventId: string; id: string } }
) {
  const { eventId, id } = await context.params;
  
  if (!eventId || !id) {
    return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
  }

  try {
    const guestRef = doc(collection(doc(collection(db, "guests"), eventId), "list"), id);
    const snapshot = await getDoc(guestRef);

    if (!snapshot.exists()) {
      return NextResponse.json({ error: "Guest not found" }, { status: 404 });
    }

    return NextResponse.json(snapshot.data(), { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as any).message }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { eventId: string; id: string } }
) {
  const { eventId, id } = params;

  try {
    const body = await req.json();

    // const guestRef = guestCollection.doc(eventId).collection('list').doc(id);
    const guestRef = doc(collection(doc(collection(db, 'guests'), eventId), 'list'), id);
    await updateDoc(guestRef, body);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as any).message || 'Update failed' }, { status: 500 });
  }
}
