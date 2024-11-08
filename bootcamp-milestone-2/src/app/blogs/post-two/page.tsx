import Blog from "@/components/blog";
import blogs from "@/app/blogData";

export default function BlogPage() {
  return (
    <div>
      <Blog
        name={blogs[1].title}
        description={blogs[1].description}
        image={blogs[1].image}
        posted={blogs[1].date}
        slug={blogs[1].slug}
      ></Blog>
    </div>
  );
}