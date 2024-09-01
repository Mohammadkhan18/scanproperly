"use client";

import React from "react";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Button } from "@/app/components/ui/button";
import { AddBlogType } from "@/app/@types/blogTypes";
import { useAddBlog } from "../../api/api-queries";
import ImageUpload from "@/app/components/shared/ImageUpload";

const AddBlogsFrom = () => {
  const schema = z.object({
    image: z.any(),
    title: z.string().nonempty("This field is required"),
    description: z.string().nonempty("This field is required"),
  });

  const form = useForm<AddBlogType>({
    defaultValues: {
      image: null,
      title: "",
      description: "",
    },
    resolver: zodResolver(schema),
  });

  const { mutate: addBlog } = useAddBlog();

  const handleSubmit = (values: AddBlogType) => {
    addBlog(values);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} type="text" className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <ImageUpload {...field} control={form.control} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-end">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddBlogsFrom;
