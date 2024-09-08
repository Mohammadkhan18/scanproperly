// "use client";

import React, { ReactNode } from "react";
import { FaPlus } from "react-icons/fa";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
// import { useRouter } from "next/navigation";
import { useDeleteCompany, useFetchCompany } from "../api/api-queries";

import { Button } from "@/app/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineDelete, MdOutlineModeEdit } from "react-icons/md";
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
