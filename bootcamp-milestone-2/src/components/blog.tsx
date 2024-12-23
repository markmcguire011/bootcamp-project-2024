import React from "react";
import Image from "next/image";
import Link from "next/link";
import Blog from "@/database/blogSchema";
import Comment from "@/components/comment";

function parseCommentTime(time: string | Date) {
  const dateObject = typeof time === "string" ? new Date(time) : time;

  return (
    dateObject.getMonth() +
    "-" +
    dateObject.getDay() +
    "-" +
    dateObject.getFullYear()
  );
}

export default function BlogPage({ blog }: { blog: Blog }) {
  return (
    <div className="my-5 w-max flex flex-col gap-2">
      <h1 className="text-4xl font-bold">{blog.title}</h1>
      <p className="font-semibold">{parseCommentTime(blog.date)}</p>
      <Image src={blog.image} width={300} height={300} alt={blog.imageAlt} />
      <div className="py-2">
        <div className="pt-2">
          <p>{blog.text}</p>
        </div>
      </div>
    </div>
  );
}
