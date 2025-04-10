import bcrypt from "bcryptjs";
import User from "@/models/User.model";
import dbConnect from "@/lib/db/connectToDatabase";
import { signJwtToken } from "@/lib/utils/signJwtToken";

/**
 * Register a new user
 */
export const registerUser = async (
  name: string,
  email: string,
  password: string,
) => {
  await dbConnect();

  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ name, email, password: hashedPassword });

  return { id: newUser._id, email: newUser.email, name: newUser.name };
};

/**
 * Login user and return JWT token
 */
export const loginUser = async (email: string, password: string) => {
  await dbConnect();

  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = signJwtToken({ id: user._id, email: user.email });

  return { token, user: { id: user._id, email: user.email, name: user.name } };
};

/**
 * Logout user (Invalidate session - Placeholder for session-based auth)
 */
export const logoutUser = async () => {
  return { message: "User logged out successfully" };
};
