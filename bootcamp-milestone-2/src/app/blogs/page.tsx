import BlogPreview from "@/components/blogPreview";
import Blog from "@/database/blogSchema";
import connectDB from "@/database/db";

async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    return null;
  }
}

export default async function Blogs() {
  const blogs = await getBlogs();

  return (
    <div className="px-40 py-20 min-h-screen">
      <h1 className="text-2xl font-bold">Blogs</h1>
      {blogs
        ? blogs.map((blog) => (
            <BlogPreview
              name={blog.title}
              description={blog.description}
              image={blog.image}
              posted={blog.date}
              slug={blog.slug}
              key={blog.title}
            />
          ))
        : null}
    </div>
  );
}
