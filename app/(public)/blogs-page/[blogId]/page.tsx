import React from "react";
import image from "../../../public/blogImages/blog-detail.png";
import Image from "next/image";

const BlogDetail = () => {
  return (
    <div>
      <h1 className="font-[600] text-[40px] leading-[50px] text-center my-3">
        Web solution{" "}
      </h1>
      <div className="my-10 w-full h-[620px] ">
        <Image
          src={image}
          alt="Blog Image"
          quality={100}
          className="h-full w-[100%]"
        />
      </div>
      <div className="space-y-5">
        <p className="font-[400] text-[18px] leading-[28px] ">
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.{" "}
        </p>
        <p className="font-[400] text-[18px] leading-[28px] ">
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.{" "}
        </p>
        <p className="font-[400] text-[18px] leading-[28px] ">
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.{" "}
        </p>
        <p className="font-[400] text-[18px] leading-[28px] ">
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.{" "}
        </p>
        <p className="font-[400] text-[18px] leading-[28px] ">
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.{" "}
        </p>
        <p className="font-[400] text-[18px] leading-[28px] ">
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.{" "}
        </p>
      </div>
    </div>
  );
};

export default BlogDetail;
