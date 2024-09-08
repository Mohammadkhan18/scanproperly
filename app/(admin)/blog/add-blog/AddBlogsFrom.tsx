"use client";

import React, { ChangeEvent, KeyboardEvent, useState } from "react";
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
  const [tags, setTags] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim() !== "") {
      e.preventDefault();
      const newTag = input.trim();
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setInput("");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

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

          <div>
            <p>Add Tags</p>
            <div className="w-full bg-white p-4 rounded-lg shadow-md">
              <div className="flex flex-wrap items-center border border-gray-300 rounded-lg p-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-1 m-1 text-sm font-medium text-white bg-primary rounded-full"
                  >
                    {tag}
                    <button
                      type="button"
                      className="ml-2 text-white focus:outline-none"
                      onClick={() => handleRemoveTag(tag)}
                    >
                      ×
                    </button>
                  </span>
                ))}
                <input
                  type="text"
                  value={input}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Add tags..."
                  className="flex-1 border-none outline-none p-2"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddBlogsFrom;
