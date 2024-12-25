import React from "react";
import Image from "next/image";
import Link from "next/link";
import { type Project } from "@/database/projectSchema";

export default function ProjectPage({ project }: { project: Project }) {
  return (
    <div className="my-5 w-max flex flex-col gap-2">
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <p className="font-semibold">{}</p>
      <Image
        src={project.image}
        width={300}
        height={300}
        alt={project.imageAlt}
      />
      <div className="py-2">
        <div className="pt-2">
          <p>{project.description}</p>
        </div>
        <p>
          Find it{" "}
          <Link className="opacity-75 hover:opacity-100" href={project.link}>
            here.
          </Link>
        </p>
      </div>
    </div>
  );
}
