import React from "react";
import BlogCard from "../components/shared/BlogCard";

const Blogs = () => {
  return (
    <div className="container mx-auto px-14 py-[24px] ">
      <h1 className="font-[600] text-[40px] leading-[50px] text-center">
        Our Latest Blogs
      </h1>
      <div className="grid grid-cols-4 gap-10 mt-10">
        {Array.from({ length: 32 }).map((_d, index: number) => (
          <BlogCard key={index + 1} id={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
