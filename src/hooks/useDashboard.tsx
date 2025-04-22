'use client';

import axiosInstance from "@/lib/utils/axios.config";
import { useCallback, useEffect, useState } from "react";

const useDashbaord = () => {
    const [eventList, setEventList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<unknown>(null);
    const fetchEvents = useCallback(
        async () => {
            setIsLoading(true);
            try {
                const response = await axiosInstance.get('/api/events');
                const data = await response.data;
                console.log("Events: ", data);
                setEventList(data);
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
      fetchEvents();
    }, [fetchEvents])
    

    return {eventList, isLoading, error, fetchEvents};
}

export default useDashbaord;