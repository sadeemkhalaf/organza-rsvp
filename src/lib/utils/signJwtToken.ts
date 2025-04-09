import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key";

/**
 * Signs a JWT token for user authentication
 */
export const signJwtToken = (payload: object, expiresIn: string = "7d") => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

/**
 * Verifies a JWT token
 */
export const verifyJwtToken = (token: string) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    console.error("JWT verification error:", error);
    throw new Error("Invalid token");
    return null;
  }
};
