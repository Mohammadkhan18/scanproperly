// "use client";

import React from "react";

import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { fetchComapny } from "../api/apiServices";
import CompanyTable from "./companyComponent/CompanyTable";

const Company = async () => {
  // const router = useRouter();

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: fetchComapny,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CompanyTable />
    </HydrationBoundary>
  );
};

export default Company;
