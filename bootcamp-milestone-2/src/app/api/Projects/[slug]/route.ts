import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import projectSchema from "@/database/projectSchema";

type IParams = {
  params: {
    slug: string;
  };
};

// If { params } looks confusing, check the note below this code block
export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB(); // function from db.ts before
  const { slug } = await params; // another destructure

  try {
    const blog = await projectSchema.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch {
    return NextResponse.json("Project not found.", { status: 404 });
  }
}
