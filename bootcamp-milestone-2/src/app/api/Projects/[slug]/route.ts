import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import projectSchema from "@/database/projectSchema";

// If { params } looks confusing, check the note below this code block
export async function GET(req: NextRequest) {
  await connectDB(); // function from db.ts before

  const urlItems = req.url.split("/");
  const slug = urlItems[urlItems.length - 1];

  try {
    const blog = await projectSchema.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch {
    return NextResponse.json("Project not found.", { status: 404 });
  }
}
