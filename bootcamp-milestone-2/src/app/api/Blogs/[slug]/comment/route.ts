import { NextRequest, NextResponse } from "next/server";
import Blog from "@/database/blogSchema";
import connectDB from "@/database/db";

export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await connectDB();

    const body = await request.json();

    if (!body.user || !body.comment) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const blog = await Blog.findOneAndUpdate(
      { slug: params.slug },
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
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
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
