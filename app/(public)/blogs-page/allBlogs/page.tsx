"use client";

import { useFetchBlog } from "@/app/(admin)/api/api-queries";
import BlogCard from "@/app/components/shared/BlogCard";
import React from "react";

const AllBlogs = () => {
  const { data, isLoading } = useFetchBlog();

  return (
    <div className="grid grid-cols-4 gap-10 mt-10">
      {data?.data?.map((blog: any, index: number) => (
        <BlogCard key={blog?._id} data={blog} />
      ))}
    </div>
  );
};

export default AllBlogs;
