'use client';

import axiosInstance from '@/lib/utils/axios.config';
import { GuestResponse } from '@/models/enum';
import { EventDetailsFS } from '@/models/Event.model';
import { IGuest } from '@/models/User.model';
import { useCallback, useEffect, useState } from 'react';

const useEventDetails = ({ eventId }: { eventId: string }) => {
  const [eventDetails, setEventDetails] = useState<EventDetailsFS>();
  const [eventGuests, setEventGuests] = useState<IGuest[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const fetchEvent = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(`/events/${eventId}`);
      const data = await response.data;
      setEventDetails(data as EventDetailsFS);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchEventGuests = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(`/events/${eventId}/guests`);
      const data = await response.data;
      setEventGuests(data as IGuest[]);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

const calculateChartData = useCallback((guests: IGuest[]) => {
    const total = guests.length;
    const accepted = guests.filter(guest => guest.rsvpResponse === GuestResponse.ACCEPTED).length;
    const pending = guests.filter(guest => guest.rsvpResponse === GuestResponse.PENDING).length;
    const declined = guests.filter(guest => guest.rsvpResponse === GuestResponse.DECLINED).length;
    return { total, accepted, pending, declined };
}, []);

  useEffect(() => {
    fetchEvent();
    fetchEventGuests();
  }, [fetchEvent, fetchEventGuests]);

  return { eventDetails, isLoading, error, fetchEvent, eventGuests, fetchEventGuests, calculateChartData };
};

export default useEventDetails;
