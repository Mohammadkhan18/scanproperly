import React from "react";
import image from "../../../public/blogImages/blog.png";
import Image from "next/image";
import Link from "next/link";
const BlogCard = ({ data }: { data: any }) => {
  return (
    <div className="space-y-3 bg-white rounded-[20px] p-[10px] sm:p-[15px] lg:p-[20px] flex flex-col ">
      <div className="h-full w-full rounded-[20px] overflow-hidden">
        <Image src={image} alt="Blog Image" quality={100} className="w-full" />
      </div>
      <div className="flex flex-col items-start  gap-3 px-3">
        <h3 className="font-[600] text-[12px] leading-[12px] sm:text-[16px] sm:leading-[16px] lg:text-[20px] lg:leading-[20px]">
          {data?.title}
        </h3>
        <p className="font-[400]  text-[12px] leading-[16px]  sm:text-[16px] sm:leading-[20px] lg:text-[20px] lg:leading-[24px]">
          {data?.content}
        </p>
        <Link href={`/blogs/${data?._id}`}>Read More...</Link>
      </div>
    </div>
  );
};

export default BlogCard;
