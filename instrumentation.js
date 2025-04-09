import connect from "@/lib/db/connectToDatabase";

export async function register() {
  await connect();
}
