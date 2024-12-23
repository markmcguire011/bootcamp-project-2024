import BlogPreview from "@/components/blogPreview";
import BlogModel, { Blog } from "@/database/blogSchema";
import connectDB from "@/database/db";

async function getBlogs() {
  await connectDB();

  try {
    const blogs = await BlogModel.find().sort({ date: -1 }).orFail();
    return blogs;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export default async function Blogs() {
  const blogs: Blog[] = await getBlogs();

  return (
    <div className="px-40 py-20 min-h-screen">
      <h1 className="text-2xl font-bold">Blogs</h1>
      {blogs.map((blog) => (
        <BlogPreview blog={blog} />
      ))}
    </div>
  );
}
