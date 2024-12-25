import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/database/projectSchema";

export default function ProjectPreview({ project }: { project: Project }) {
  return (
    <Link href={"portfolio/" + project.slug}>
      <div className="my-5 w-max items-center text-center border-2 border-black rounded-lg">
        <h1 className="pt-2 font-semibold">{project.title}</h1>
        <div className="py-2">
          <Image
            src={project.image}
            width={300}
            height={300}
            alt={project.imageAlt + "_photo"}
          />
          <div className="pt-2">
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
