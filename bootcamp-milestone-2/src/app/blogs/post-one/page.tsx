import Blog from "@/components/blog";
import blogs from "@/app/blogData";

export default function BlogPage() {
  return (
    <div>
      <Blog
        name={blogs[0].title}
        description={blogs[0].description}
        image={blogs[0].image}
        posted={blogs[0].date}
        slug={blogs[0].slug}
      ></Blog>
    </div>
  );
}
