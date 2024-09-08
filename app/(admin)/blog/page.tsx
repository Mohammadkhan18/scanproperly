import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { fetchBlogs } from "../api/apiServices";
import BlogTable from "./blogComponents/BlogTable";

const Blog = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["blog"],
    queryFn: fetchBlogs,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BlogTable />
    </HydrationBoundary>
  );
};

export default Blog;
