export const runtime = "nodejs"; // مهم إذا رح تستخدميه في API Route

// import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "";

if (!MONGODB_URI) {
  console.warn(
    "⚠️ Warning: MONGODB_URI is not defined. Database will not connect."
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

// TODO: work on this later
// async function dbConnect() {
//   if (!MONGODB_URI) {
//     throw new Error("Missing MONGODB_URI, can't connect to database.");
//   }

//   if (cached.conn) return cached.conn;

//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//       dbName: process.env.DB_NAME,
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     };

//     cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
//       console.log("✅ DB connected successfully");
//       return mongoose;
//     });
//   }

//   try {
//     cached.conn = await cached.promise;
//   } catch (err) {
//     cached.promise = null;
//     throw err;
//   }

//   return cached.conn;
// }

// export default dbConnect;

export default async function dbConnect() {
  console.log("dbConnect called, but not implemented yet.");
  return null;
}


