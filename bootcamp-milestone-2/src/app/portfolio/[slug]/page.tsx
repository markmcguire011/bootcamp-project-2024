import ProjectPage from "@/components/project";
import Comment from "@/components/comment";
import AddComment from "@/components/addComment";
import Link from "next/link";
import { IComment } from "@/database/blogSchema";
import { Key } from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getProject({ params }: Props) {
  try {
    // This fetches the project from an api endpoint that would GET the project
    const fetchedParams = await params;
    const res = await fetch(
      `https://bootcamp-project-2024-six.vercel.app/api/Projects/${fetchedParams.slug}`,
      {
        cache: "no-store",
      }
    );
    // This checks that the GET request was successful
    if (!res.ok) {
      throw new Error("Failed to fetch project");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default async function ProjectContent({ params }: Props) {
  const project = await getProject({ params });

  if (project) {
    return (
      <div className="px-40 py-20 min-h-screen">
        <ProjectPage project={project}></ProjectPage>
        <div className="bg-black h-[3px] rounded my-10"></div>
        <h1 className="font-semibold">Add a comment</h1>
        <AddComment slug={project.slug} projOrBlog="project"></AddComment>
        <h1 className="font-semibold">Comments</h1>
        {project.comments.map(
          (comment: IComment, index: Key | null | undefined) => (
            <Comment key={index} comment={comment} />
          )
        )}
      </div>
    );
  } else {
    return (
      <div className="px-40 py-20 min-h-screen items-center justify-center text-center">
        <div>
          <h1 className="text-2xl font-bold">404: No Project Found</h1>
          <h1 className="text-2xl font-bold">
            Find a list of available projects{" "}
            <Link className="hover:opacity-100 opacity-75" href="/portfolio">
              here
            </Link>
            .
          </h1>
        </div>
      </div>
    );
  }
}
