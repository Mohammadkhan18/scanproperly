"use client";

import React from "react";
import AddBlogsFrom from "./AddBlogsFrom";
import { Button } from "@/app/components/ui/button";
import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";

const AddBlog = () => {
  const router = useRouter();
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
      <AddBlogsFrom />
    </div>
  );
};

export default AddBlog;
