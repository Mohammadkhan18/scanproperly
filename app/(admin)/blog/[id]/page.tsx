"use client";

import React from "react";
import UpdateBlogsFrom from "./UpdateBlog";
import { useFetchSingleBlog } from "../../api/api-queries";
import Loader from "@/app/components/shared/Loader";
import { Button } from "@/app/components/ui/button";
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/navigation";

const UpdateBlog = () => {
  const router = useRouter();
  const { data, isLoading } = useFetchSingleBlog();

  return (
    <div className="container mx-auto px-14 py-[24px]">
      <div className="flex items-center gap-5">
        <h2 className="font-[700] text-[24px] leading-[32px]">Add Blog</h2>
        <Button
          onClick={() => {
            router.push("/blog");
          }}
        >
          <BsArrowLeft className="text-[24px]" />
        </Button>
      </div>
      {isLoading ? <Loader /> : <UpdateBlogsFrom blogData={data} />}
    </div>
  );
};

export default UpdateBlog;
