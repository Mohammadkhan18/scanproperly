import React from "react";
import BlogCard from "@/app/components/shared/BlogCard";
import { useFetchBlog } from "@/app/(admin)/api/api-queries";
import AllBlogs from "./allBlogs/page";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { fetchBlogs } from "@/app/(admin)/api/apiServices";

const BlogsPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["blog"],
    queryFn: fetchBlogs,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="container mx-auto px-14 py-[24px] ">
        <h1 className="font-[600] text-[40px] leading-[50px] text-center">
          Our Latest Blogs
        </h1>
        <AllBlogs />
      </div>
    </HydrationBoundary>
  );
};

export default BlogsPage;
