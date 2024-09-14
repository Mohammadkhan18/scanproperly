// "use client";

import React from "react";
import image from "../../../../public/blogImages/blog-detail.png";
import Image from "next/image";

import { Metadata } from "next";
import { fetchSingleBlog } from "@/app/(admin)/api/apiServices";

export const generateMetadata = async ({
  params,
}: {
  params: { blogId: string };
}): Promise<Metadata> => {
  const reponse: any = await fetch(
    `http://localhost:8000/api/v1/blogs/${params.blogId}`
  );
  const result = await reponse.json();
  return {
    title: `${result.metaTitle}`,
    description: `${result.metaDescription}`,
    keywords: result.metaKeywords,
    robots: result.metaRobots,
  };
};

const BlogDetail = async ({ params }: { params: { blogId: string } }) => {
  const reponse = await fetch(
    `http://localhost:8000/api/v1/blogs/${params.blogId}`
  );

  const result = await reponse.json();

  return (
    <div>
      <h1 className="font-[600] text-[40px] leading-[50px] text-center my-3">
        {result.title}
      </h1>
      <div className="my-10 w-full  max-h-[640px] overflow-hidden">
        <Image
          src={image}
          alt="Blog Image"
          quality={100}
          className="h-full w-[100%]"
        />
      </div>
      <div className="space-y-5">
        <p className="font-[400] text-[18px] leading-[28px] ">
          {result.content}
        </p>
      </div>
    </div>
  );
};

export default BlogDetail;
