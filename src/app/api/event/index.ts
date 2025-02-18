import { NextApiRequest, NextApiResponse } from 'next';
import { IEvent } from '../../../types/event';

// Mock data for demonstration purposes
const events: IEvent[] = [
    // Add more events as needed
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'GET':
            const { id } = req.query;
            if (id) {
                // Get single event by id
                const event = events.find(event => event.id === id);
                if (event) {
                    res.status(200).json(event);
                } else {
                    res.status(404).json({ message: 'Event not found' });
                }
            } else {
                // Get all events
                res.status(200).json(events);
            }
            break;
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}