import React from "react";
import AllBlogs from "./allBlogs/page";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { fetchBlogs } from "../../(admin)/api/apiServices";

const Blogs = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["blog"],
    queryFn: fetchBlogs,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="container mx-auto  px-4 py-[12px] lg:px-14 lg:py-[24px] ">
        <h1 className="text-[20px] font-[600] leading-[25px] sm:text-[28px]  sm:leading-[35px] lg:text-[40px]  lg:leading-[50px] text-center">
          Our Latest Blogs
        </h1>
        <AllBlogs />
      </div>
    </HydrationBoundary>
  );
};

export default Blogs;
