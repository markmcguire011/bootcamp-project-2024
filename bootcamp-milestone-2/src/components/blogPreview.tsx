import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/database/blogSchema";

export default function BlogPreview({ blog }: { blog: Blog }) {
  // const options = { year: "numeric", month: "long", day: "numeric" };
  // const customString = posted.toLocaleDateString("en-US", options);

  return (
    <Link href={"blogs/" + blog.slug}>
      <div className="my-5 w-max items-center text-center border-2 border-black rounded">
        <div className="pt-2">
          <h1 className="text-xl font-semibold">{blog.title}</h1>
        </div>
        <div className="py-2">
          <Image
            src={blog.image}
            width={300}
            height={300}
            alt={blog.imageAlt ? blog.imageAlt : "alt"}
          />
          <div className="pt-2">
            <p className="font-semibold">{blog.description}</p>
            <p className="font-semibold">{blog.date.toDateString()}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
