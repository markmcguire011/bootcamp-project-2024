import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectPreview({
  title,
  description,
  image,
  imageAlt,
  link,
}: {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
}) {
  return (
    <div className="my-5 w-max items-center text-center border-2 border-black">
      <div className="pt-2">
        <Link className="text-xl font-semibold" href={link}>
          {title}
        </Link>
      </div>
      <div className="py-2">
        <Image src={image} width={300} height={300} alt={imageAlt + "_photo"} />
        <div className="pt-2">
          <p className="font-semibold">{description}</p>
        </div>
      </div>
    </div>
  );
}
