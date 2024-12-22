import ProjectPreview from "@/components/projectPreview";
import connectDB from "@/database/db";
import Project from "@/database/projectSchema";
import Link from "next/link";

async function getProjects() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const projects = await Project.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return projects;
  } catch (err) {
    return null;
  }
}

export default async function Portfolio() {
  const projects = await getProjects();

  return (
    <div className="px-40 py-20 min-h-screen">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <div>
        {projects
          ? projects.map((project) => (
              <ProjectPreview
                title={project.title}
                description={project.description}
                image={project.image}
                imageAlt={project.imageAlt}
                link={project.link}
                key={project.title}
              />
            ))
          : null}
      </div>
    </div>
  );
}
