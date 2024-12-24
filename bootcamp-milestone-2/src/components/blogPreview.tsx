import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/database/blogSchema";
import { parseCommentTime } from "./blog";

export default function BlogPreview({ blog }: { blog: Blog }) {
  // const options = { year: "numeric", month: "long", day: "numeric" };
  // const customString = posted.toLocaleDateString("en-US", options);

  return (
    <Link href={"blogs/" + blog.slug}>
      <div className="my-5 w-max h-min items-center text-center border-2 border-black rounded flex gap-4">
        <div className="">
          <Image
            src={blog.image}
            width={100}
            height={100}
            alt={blog.imageAlt}
          />
        </div>
        <div className="">
          <h1 className="text-xl font-semibold">{blog.title}</h1>
          <p className="font-semibold">{blog.description}</p>
        </div>
        <div className="h-8 w-[2px] bg-black rounded-md"></div>
        <p className="font-semibold pr-2">{parseCommentTime(blog.date)}</p>
      </div>
    </Link>
  );
}
