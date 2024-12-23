import BlogPage from "@/components/blog";
import Comment from "@/components/comment";
import Link from "next/link";
import Blog from "@/database/blogSchema";
import { type MComment } from "@/database/commentSchema";
import { Key } from "react";

type Props = {
  params: { slug: string };
};

async function getBlog(slug: string) {
  try {
    // This fetches the blog from an api endpoint that would GET the blog
    const res = await fetch(`http://localhost:3000/api/Blogs/${slug}`, {
      cache: "no-store",
    });
    // This checks that the GET request was successful
    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
    // `` are a special way of allowing JS inside a string
    // Instead of "error: " + err, we can just do the above
    // it is simular to formated strings in python --> f"{err}"
  }
}

export default async function BlogContent({ params }: Props) {
  const resolvedParams = await params;
  const blog = await getBlog(resolvedParams.slug);

  if (blog) {
    return (
      <div className="px-40 py-20 min-h-screen">
        <BlogPage blog={blog}></BlogPage>
        <div className="bg-black h-[3px] rounded my-10"></div>
        <h1 className="font-semibold">Comments</h1>
        {blog.comments.map(
          (comment: MComment, index: Key | null | undefined) => (
            <Comment key={index} comment={comment} />
          )
        )}
      </div>
    );
  } else {
    return (
      <div className="px-40 py-20 min-h-screen items-center justify-center text-center">
        <div>
          <h1 className="text-2xl font-bold">404: No Blog Found</h1>
          <h1 className="text-2xl font-bold">
            Find a list of available posts{" "}
            <Link className="hover:opacity-100 opacity-75" href="/blogs">
              here
            </Link>
            .
          </h1>
        </div>
      </div>
    );
  }
}
