import { Button } from "@/app/components/ui/button";
import React from "react";
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
import AddBlogsFrom from "./blogsComponents/AddBlogsFrom";
import { DialogTrigger } from "@/app/components/ui/dialog";

const Blog = () => {
  return (
    <div className="container mx-auto px-14 py-[24px]">
      <div className="flex items-center justify-between">
        <h2 className="font-[700] text-[24px] leading-[32px]">Blogs</h2>
        <AddBlogsFrom>
          <DialogTrigger>
            <div className="px-4 py-3 bg-primary rounded-md text-white">
              <FaPlus />
            </div>
          </DialogTrigger>
        </AddBlogsFrom>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Blog;
