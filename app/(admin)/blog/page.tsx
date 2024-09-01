"use client";

import { Button } from "@/app/components/ui/button";
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

import { useRouter } from "next/navigation";
import { useDeleteBlog, useFetchBlog } from "../api/api-queries";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { MdOutlineDelete, MdOutlineModeEdit } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import Loader from "@/app/components/shared/Loader";

const ActionDropDown = ({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) => {
  const router = useRouter();

  const { mutate: deleteCompany } = useDeleteBlog();

  const handleDelete = () => {
    deleteCompany(id);
  };
  return (
    <DropdownMenu>
      {children}
      <DropdownMenuContent className="w-20 right-0 ">
        <DropdownMenuItem
          className="space-x-3 cursor-pointer"
          onClick={() => {
            router.push(`/blog/${id}`);
          }}
        >
          <MdOutlineModeEdit className="text-[20px]" />
          <span>Edit</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="space-x-3 cursor-pointer"
          onClick={handleDelete}
        >
          <MdOutlineDelete className="text-[20px] text-red-500" />
          <span>Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Blog = () => {
  const router = useRouter();

  const { data, isLoading } = useFetchBlog();
  return (
    <div className="container mx-auto px-14 py-[24px]">
      <div className="flex items-center justify-between">
        <h2 className="font-[700] text-[24px] leading-[32px]">Blogs</h2>
        <Button
          onClick={() => {
            router.push("blog/add-blog");
          }}
        >
          <FaPlus />
        </Button>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Contect</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data?.map(
              (blog: {
                _id: string;
                title: string;
                image: string;
                content: string;
              }) => (
                <TableRow>
                  <TableCell>
                    {blog?.image?.includes("http") && (
                      <Image
                        src={blog?.image}
                        alt="Blog image"
                        width={120}
                        height={100}
                      />
                    )}
                  </TableCell>
                  <TableCell>{blog.title}</TableCell>
                  <TableCell>{blog.content}</TableCell>
                  <TableCell>
                    <ActionDropDown id={blog._id}>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                          <BsThreeDots />
                        </Button>
                      </DropdownMenuTrigger>
                    </ActionDropDown>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default Blog;
