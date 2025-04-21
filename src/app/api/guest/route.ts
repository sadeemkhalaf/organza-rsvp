import type { NextApiRequest, NextApiResponse } from "next";
import { db, guestCollection } from "../../../../firebaseConfig";


export default async function guestHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id, eventId },
    body,
    method,
  } = req;

  const batch = db.batch();
  switch (method) {
    case "GET":
      // Get data from your database
      if (typeof eventId !== "string") {
        res.status(400).json({ error: "Invalid eventId" });
        return;
      }
      const doc = await guestCollection.doc(eventId as string).collection('list').doc(id as string).get();
      console.log('doc: ', doc);
      
      if (!doc.exists) {
        res.status(404).end();
      } else {
        res.status(200).json(doc.data());
      }
      break;
    case "PUT":
      // Update or create data in your database
      const updatedoc = guestCollection.doc(id as string);
      // console.log(
      //   "rsvpResponse: ",
      //   body
      // );
      try {
        await batch.update(updatedoc, body).commit();
        res.status(200).json("success");
      } catch (error) {
        res.status(500).json(`Failed: ${error}`);
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
