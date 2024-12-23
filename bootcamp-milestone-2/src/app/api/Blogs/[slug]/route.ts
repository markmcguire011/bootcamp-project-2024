import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import blogSchema from "@/database/blogSchema";
import BlogModel from "@/database/blogSchema";

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
    const blog = await blogSchema.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch (err) {
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  console.log("POST request to add a comment");
  await connectDB(); // Ensure MongoDB is connected

  const { slug } = await params; // Destructure slug from params
  const body = await req.json(); // Parse the request body

  try {
    // Validate the body
    const { user, comment, time } = body;
    if (!user || !comment) {
      return NextResponse.json(
        { error: "Invalid comment data" },
        { status: 400 }
      );
    }

    // Construct the comment object
    const newComment = {
      user,
      comment,
      time: new Date(), // Ensure time is a Date object
    };

    // Update the blog with the new comment
    BlogModel.findOne({ slug }).then((blog) => {
      if (blog) {
        console.log(blog.comments);
        blog.comments.push(newComment);
      }
    });

    // if (!updatedBlog) {
    //   return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    // }

    // console.log(updatedBlog.comments);

    return NextResponse.json({
      message: "Comment added successfully",
    });
  } catch (err) {
    console.error("Error adding comment:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
