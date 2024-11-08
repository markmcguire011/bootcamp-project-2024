import BlogPreview from "@/components/blogPreview";
import blogs from "@/app/blogData";

export default function Blogs() {
  return (
    <div className="px-40 py-20 min-h-screen">
      {blogs.map((blog) => (
        <BlogPreview
          name={blog.title}
          description={blog.description}
          image={blog.image}
          posted={blog.date}
          slug={blog.slug}
          key={blog.title}
        />
      ))}
    </div>
  );
}
