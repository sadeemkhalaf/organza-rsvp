import mongoose, { Schema, Document } from "mongoose";

export enum UserPersmission {
    user = "user",
    admin = "admin",
    event_manager = "event-manager",
    anonymous = "anonymous",
    all_loggedin_users = "all-loggedin-users"
} 

export interface IUser extends Document {
  name: string;
  email: string;
  password?: string; // Optional for OAuth users
  image?: string;
  role: UserPersmission;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  provider: "credentials" | "google" | "facebook"; // Track login method
  socialId?: string; // Store OAuth ID
  events: mongoose.Types.ObjectId[]; // Reference to events created by user
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: function () {
        return this.provider === "credentials";
      }, // Required only for credential-based login
    },
    image: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: Object.values(UserPersmission),
      default: UserPersmission.user,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    provider: {
      type: String,
      enum: ["credentials", "google", "facebook"],
      required: true,
      default: "credentials",
    },
    socialId: {
      type: String,
      default: null,
    },
    events: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
