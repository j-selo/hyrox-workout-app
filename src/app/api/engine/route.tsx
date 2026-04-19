import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("hyrox-workouts");
    const data = await db
      .collection("engine")
      .aggregate([{ $sample: { size: 1 } }])
      .toArray();

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch engine workout" },
      { status: 500 }
    );
  }
}

