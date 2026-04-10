import { useLocation, useNavigate } from "react-router";
import { blogPosts, type FeatureContent } from "./blogPosts";
import { ArrowLeft } from "lucide-react";
import { cn } from "../../lib/utils";
import { Badge } from "../common/Title";
import parseText from "../../lib/parseText";
import { motion } from "motion/react";
import { PostVariants } from "../common/Variants";
import ScrollToTop from "../../lib/ScrollToTop";
import React from "react";
import Error from "../common/Error";

const Post = () => {
  const { pathname } = useLocation();
  const id = pathname.match(/[^/]+$/)?.[0] ?? null;
  const postData = blogPosts.find((blog) => blog.id === id);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <ScrollToTop />
      {postData ? (
        <motion.article
          variants={PostVariants}
          initial="initial"
          animate="animate"
          className="mx-auto flex max-w-200 flex-col gap-8 px-4 pt-25"
        >
          <button
            onClick={goBack}
            className={cn(
              "text-neutral-surface/80 flex cursor-pointer items-center gap-2",
              "duration-200 hover:text-white",
            )}
          >
            <ArrowLeft size={18} />
            <span>Go back</span>
          </button>
          <div className="flex gap-2.5">
            <Badge className="text-white">{postData.category}</Badge>
            <Badge className="text-white">{postData.date}</Badge>
          </div>
          <h1 className="text-[36px] font-bold text-white sm:text-5xl sm:leading-20 lg:text-7xl">
            {postData.title}
          </h1>
          <p className="text-neutral-light font-semibold">
            {postData.introduction}
          </p>
          <div>
            <img
              width={750}
              height={400}
              src={postData.src}
              alt={postData.imageAlt}
              className="max-h-100 w-full rounded-xl object-cover object-center"
            />
          </div>

          {postData.body.map((item) => (
            <div key={item.sectionTitle}>
              <h2 className="text-3xl font-bold text-white max-md:mb-2.5 md:text-[45px]">
                {item.sectionTitle}
              </h2>
              {typeof item.content === "string" ? (
                <p key={item.content} className="text-neutral-surface">
                  {item.content}
                </p>
              ) : Array.isArray(item.content) ? (
                typeof item.content[0] === "string" ? (
                  (item.content as string[]).map((text, index) => {
                    const textData = parseText(text);

                    return (
                      <div key={`${textData}-${index}`}>
                        {textData ? (
                          <div className="pl-5">
                            <h3
                              style={
                                {
                                  "--index":
                                    item.index === "number"
                                      ? `"${index + 1}."`
                                      : item.index === "point"
                                        ? `"•"`
                                        : '""',
                                } as React.CSSProperties
                              }
                              className={cn(
                                "text-neutral-light font-bold",
                                `relative before:absolute before:top-0 before:-left-5 before:flex before:content-(--index)`,
                              )}
                            >
                              {textData.title}
                            </h3>
                            <p className="text-neutral-surface text-[15px]">
                              {textData.description}
                            </p>
                          </div>
                        ) : (
                          <p
                            key={index}
                            className="text-neutral-surface text-[15px]"
                          >
                            {text}
                          </p>
                        )}
                      </div>
                    );
                  })
                ) : (
                  (item.content as FeatureContent[]).map((feature, index) => (
                    <div key={index}>
                      <h3 className="my-5 text-2xl font-bold text-white">
                        {feature.label}
                      </h3>
                      <p className="text-neutral-surface">
                        {feature.description}
                      </p>
                    </div>
                  ))
                )
              ) : null}
            </div>
          ))}

          {postData.conclusion && (
            <div>
              <h3 className="my-2.5 text-3xl font-bold text-white md:text-[45px]">
                Conclusion
              </h3>
              <p className="text-neutral-surface">{postData.conclusion}</p>
            </div>
          )}
        </motion.article>
      ) : (
        <Error message="Post not found" to="/blog" />
      )}
    </>
  );
};

export default React.memo(Post);
