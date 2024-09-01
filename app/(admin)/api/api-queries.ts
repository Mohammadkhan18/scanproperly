"use client";

import {
  addBlog,
  addCompany,
  deleteBlogs,
  deleteComapny,
  fetchBlogs,
  fetchComapny,
  fetchSingleBlog,
  getSingleComapny,
  updateBlog,
  updateCompany,
} from "./apiServices";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { AddBlogType } from "@/app/@types/blogTypes";

export const useAddCompany = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: addCompany,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["companies", "list"],
      });

      router.push("/company");
    },
  });
};

export const useUpdateCompany = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: updateCompany,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["companies", "list"],
      });

      router.push("/company");
    },
  });
};

export const useFetchCompany = () => {
  return useQuery({
    queryKey: ["companies", "list"],
    queryFn: fetchComapny,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};

export const useFetchSingleCompany = () => {
  const params = useParams();
  return useQuery({
    queryKey: [`${params.id}`, "data"],
    queryFn: () => getSingleComapny(params.id),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};

export const useDeleteCompany = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteComapny,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["companies", "list"],
      });
    },
  });
};

export const useFetchBlog = () => {
  return useQuery({
    queryKey: ["blog", "list"],
    queryFn: fetchBlogs,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};

export const useFetchSingleBlog = () => {
  const params = useParams();
  return useQuery({
    queryKey: [`${params.id}`, "object"],
    queryFn: () => {
      return fetchSingleBlog(params.id);
    },
    enabled: !!params.id,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};

export const useAddBlog = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: addBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["blog", "list"],
      });
      router.push("/blog");
    },
  });
};

export const useUpdateBlog = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: updateBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["blog", "list"],
      });
      router.push("/blog");
    },
  });
};

export const useDeleteBlog = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteBlogs,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["blog", "list"],
      });
    },
  });
};
