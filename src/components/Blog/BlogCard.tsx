import { Link } from "react-router";
import { cn } from "../../lib/utils";
import { Badge } from "../common/Title";
import { type BlogPost } from "./blogPosts";
import { motion } from "motion/react";
import { BlogVariants } from "../common/Variants";

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <motion.div
      variants={BlogVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Link
        aria-label={`Read blog post: ${post.title}`}
        to={`/blog/${post.id}`}
      >
        <article
          className={cn(
            "flex h-full w-full flex-col gap-2.5 bg-[#0d0d0d] p-7.5 lg:max-w-110",
            "border-neutral-surface/15 group overflow-hidden rounded-xl border",
          )}
        >
          <div className="h-full max-h-62.5 overflow-hidden">
            <img
              src={post.src}
              alt={post.imageAlt}
              width={380}
              height={250}
              className={cn(
                "h-full w-full rounded-xl object-cover object-center",
                "duration-500 group-hover:scale-110",
              )}
              fetchPriority="high"
            />
          </div>
          <Badge>{post.category}</Badge>
          <h2 className="text-neutral-surface text-xl font-semibold">
            {post.title}
          </h2>
        </article>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
