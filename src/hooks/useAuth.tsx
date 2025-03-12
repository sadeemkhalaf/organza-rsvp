import { useState, useEffect } from 'react';
import { auth } from '../firebase'; // Adjust the import based on your firebase configuration
import { onAuthStateChanged, User } from 'firebase/auth';

const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return { user, loading };
};

export default useAuth;