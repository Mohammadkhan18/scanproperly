"use client";

import { useFetchBlog } from "../../../(admin)/api/api-queries";
import BlogCard from "../../../components/shared/BlogCard";
import React from "react";

const AllBlogs = () => {
  const { data, isLoading } = useFetchBlog();

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10 mt-5 lg:mt-10">
      {data?.data?.map((blog: any, index: number) => (
        <BlogCard key={blog?._id} data={blog} />
      ))}
    </div>
  );
};

export default AllBlogs;
