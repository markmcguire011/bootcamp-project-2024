import { NextRequest, NextResponse } from "next/server";
import Project from "@/database/projectSchema";
import connectDB from "@/database/db";

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const slug = body.slug;

    if (!body.user || !body.comment) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const blog = await Project.findOneAndUpdate(
      { slug: slug },
      {
        $push: {
          comments: {
            user: body.user,
            comment: body.comment,
            time: new Date(),
          },
        },
      },
      { new: true }
    );

    if (!blog) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
