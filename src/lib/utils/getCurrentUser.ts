import { getAuth, onAuthStateChanged, User } from "firebase/auth";

export const getCurrentUser = (): Promise<User | null> => {
  const auth = getAuth();
  
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe(); // stop listening
      resolve(user);
    });
  });
};
