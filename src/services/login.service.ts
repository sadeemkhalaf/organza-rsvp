import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { fbApp } from "../../firebaseConfig";
import { cookies } from "next/headers"; // Import Next.js cookies API

const auth = getAuth(fbApp);

export const loginUserWithFirebaseEmailPassword = async (
  email: string,
  password: string,
) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    const token = await user.getIdToken();

        // Store the token in a secure cookie
        (await
            // Store the token in a secure cookie
            cookies()).set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7, // 7 days
            path: "/",
        });

        return {
            uid: user.uid,
            email: user.email,
            token: token,
        };
    } catch (error) {
        throw new Error((error as any)?.message || 'An error occurred while logging in');
    }
};
