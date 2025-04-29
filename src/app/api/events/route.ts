import { collection, getDocs, query } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../firebaseConfig";


export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
      const eventsRef = query(collection(db, "events"));
      const eventSnapshots = await getDocs(eventsRef);

      if (eventSnapshots.empty) {
        return NextResponse.json({ error: "No events found" }, { status: 404 });
      }

      const events = eventSnapshots.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return NextResponse.json(events, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { error: `${"Invalid or expired token"} - ${error}` },
        { status: 401 }
      );
    }
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}