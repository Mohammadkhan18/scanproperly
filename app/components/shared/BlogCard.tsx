import React from "react";
import image from "../../../public/blogImages/blog.png";
import Image from "next/image";
import Link from "next/link";
const BlogCard = ({ id }: { id: number }) => {
  return (
    <div className="space-y-3 bg-white rounded-[20px] p-[20px] flex flex-col items-center">
      <Image src={image} alt="Blog Image" quality={100} />
      <div className="flex flex-col gap-3 px-3">
        <h3 className="font-[600] text-[20px] leading-[20px]">Web solution</h3>
        <p className="font-[400] text-[20px] leading-[24px]">
          Dummy text of the printing and typesetting
        </p>
        <Link href={`/blogs/${id}`}>Read More...</Link>
      </div>
    </div>
  );
};

export default BlogCard;
