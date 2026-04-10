import BlogContainer from "./BlogContainer";
import { blogPosts } from "./blogPosts";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <section id="blog" className="min-h-[55vh]">
      <BlogContainer />
      <div className="mx-auto grid max-w-300 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-center gap-10 px-4 md:px-8 lg:flex lg:flex-wrap">
        {blogPosts.map((post) => (
          <BlogCard post={post} key={post.id} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
