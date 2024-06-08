import React from "react";
import BlogCard from "./Components/BlogCard";
import useBlogs from "../../hooks/useBlogs";

const BlogsPage = () => {
  const { isLoading, blogs } = useBlogs();
  console.log({ isLoading, blogs });
  return isLoading ? (
    <div>.....Loading</div>
  ) : (
    <div className="p-4 flex flex-col gap-4 w-screen justify-center items-center">
      {blogs &&
        blogs.map((data) => {
          return (
            <BlogCard
              key={data.id}
              title={data.title}
              content={data.content}
              author={data.author.name}
              id={data.id}
            />
          );
        })}
    </div>
  );
};

export default BlogsPage;
