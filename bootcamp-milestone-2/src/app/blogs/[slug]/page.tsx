import Blog from "@/components/blog";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

async function getBlog(slug: string) {
  try {
    // This fetches the blog from an api endpoint that would GET the blog
    const res = await fetch(`http://localhost:3000/api/Blogs/${slug}`, {
      cache: "no-store",
    });
    // This checks that the GET request was successful
    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
    // `` are a special way of allowing JS inside a string
    // Instead of "error: " + err, we can just do the above
    // it is simular to formated strings in python --> f"{err}"
  }
}

export default async function BlogPage({ params: { slug } }: Props) {
  const blog = await getBlog(slug);

  return blog ? (
    <Blog
      name={blog.title}
      description={blog.description}
      image={blog.image}
      posted={blog.date}
    ></Blog>
  ) : (
    <div className="px-40 py-20 min-h-screen items-center justify-center text-center">
      <div>
        <h1 className="text-2xl font-bold">404: No Blog Found</h1>
        <h1 className="text-2xl font-bold">
          Find a list of available posts{" "}
          <Link className="hover:opacity-100 opacity-75" href="/blogs">
            here
          </Link>
          .
        </h1>
      </div>
    </div>
  );
}
