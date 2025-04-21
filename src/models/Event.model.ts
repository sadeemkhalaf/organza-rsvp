import { IGuest } from "./User.model";

export interface EventGuests {
    eventId: string;
    list: IGuest[];
}