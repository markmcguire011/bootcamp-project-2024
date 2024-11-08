import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Blog({
  name,
  description,
  image,
  posted,
  slug,
}: {
  name: string;
  description: string;
  image: string;
  posted: string;
  slug: string;
}) {
  return (
    <div className="px-40 my-5 w-max min-h-screen">
      <h1 className="text-4xl font-bold">{name}</h1>
      <h1>{posted}</h1>
      <Image src={image} width={300} height={300} alt="Blog Picture" />
      <div className="py-2">
        <div className="pt-2">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
