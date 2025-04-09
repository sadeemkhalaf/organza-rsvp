import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { fbApp } from "../../firebaseConfig";

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

    return {
      uid: user.uid,
      email: user.email,
      token: token,
    };
  } catch (error) {
    throw new Error(
      (error as any)?.message || "An error occurred while logging in",
    );
  }
};
