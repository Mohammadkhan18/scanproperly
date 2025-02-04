"use client";

import React, { useEffect } from "react";
import UpdateBlogsFrom from "./UpdateBlog";

import Loader from "../../../components/shared/Loader";
import { Button } from "../../../components/ui/button";
import { BsArrowLeft } from "react-icons/bs";
import { useFetchingSingleBlog } from "../../api/api-queries";
import { useRouter } from "next/navigation";

const UpdateBlog = (props: any) => {
  const router = useRouter();

  const { data, isLoading } = useFetchingSingleBlog(props.params.id);

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
      {isLoading ? (
        <div className="h-[60vh] flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <UpdateBlogsFrom blogData={data} />
      )}
    </div>
  );
};

export default UpdateBlog;
