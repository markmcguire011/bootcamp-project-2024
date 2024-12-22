import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogPreview({
  name,
  description,
  image,
  posted,
  slug,
}: {
  name: string;
  description: string;
  image: string;
  posted: Date;
  slug: string;
}) {
  // const options = { year: "numeric", month: "long", day: "numeric" };
  // const customString = posted.toLocaleDateString("en-US", options);

  return (
    <div className="my-5 w-max items-center text-center border-2 border-black">
      <div className="pt-2">
        <Link className="text-xl font-semibold" href={"blogs/" + slug}>
          {name}
        </Link>
      </div>
      <div className="py-2">
        <Image src={image} width={300} height={300} alt="Main Picture" />
        <div className="pt-2">
          <p className="font-semibold">{description}</p>
          <p className="font-semibold">{posted.toDateString()}</p>
        </div>
      </div>
    </div>
  );
}
