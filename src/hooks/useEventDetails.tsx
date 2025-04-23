'use client';

import axiosInstance from "@/lib/utils/axios.config";
import { EventDetailsFS } from "@/models/Event.model";
import { useCallback, useEffect, useState } from "react";

const useEventDetails = ({eventId}: {eventId: string}) => {
    const [eventDetails, setEventDetails] = useState<EventDetailsFS>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<unknown>(null);
    const fetchEvent = useCallback(
        async () => {
            setIsLoading(true);
            try {
                const response = await axiosInstance.get(`/events/${eventId}`);
                const data = await response.data;
                setEventDetails(data as EventDetailsFS);
            }
            catch (error) {
                setError(error);
            }
            finally {
                setIsLoading(false);
            }
        },
      [],
    )
    

    useEffect(() => {
      fetchEvent();
    }, [fetchEvent])
    

    return {eventDetails, isLoading, error, fetchEvent};
}

export default useEventDetails;