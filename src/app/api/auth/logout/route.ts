import { logoutUserWithFirebas } from "@/services/login.service";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = await logoutUserWithFirebas();

    return NextResponse.json({ message: response }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }
}
