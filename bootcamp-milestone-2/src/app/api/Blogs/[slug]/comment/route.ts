import { type Blog } from "@/database/blogSchema";
import blogSchema from "@/database/blogSchema";
import connectDB from "@/database/db";
import { NextRequest, NextResponse } from "next/server";
import { MComment } from "@/database/blogSchema";

type IParams = {
  params: {
    slug: string;
  };
};

export async function POST(req: NextRequest, { params }: IParams) {
  try {
    await connectDB();
    const { slug } = await params;

    // Parse the request body
    const comment = await req.json();

    // Validate body
    if (!comment || !comment.user || !comment.comment) {
      return NextResponse.json(
        { error: "Information Missing" },
        { status: 400 }
      );
    }

    // Create the new comment object
    const newComment: MComment = {
      user: comment.user,
      comment: comment.comment,
      time: new Date(),
    };

    console.log(newComment);

    const blog: Blog = await blogSchema
      .findOneAndUpdate(
        { slug },
        {
          $push: {
            comments: newComment,
          },
        },
        { new: true }
      )
      .orFail();

    console.log("Verified updated document:", blog);

    console.log(blog.comments);

    return NextResponse.json(
      { message: "Comment added successfully", comment: newComment },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error adding comment:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
