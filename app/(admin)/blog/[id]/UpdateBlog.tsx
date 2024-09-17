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

import { useAddBlog, useUpdateBlog } from "../../api/api-queries";
import ImageUpload from "@/app/components/shared/ImageUpload";

type AddBlogType = {
  id?: number | string;
  title: string;
  image: File | FileList | null;
  description: string;
  metaTitle: string;
  metaDescription: string;
  tags: string[];
  altImageAttributes: string;
  canonicalUrl: string;
  openGraph: string;
  xmlSitemap: string;
  schemaMetaData: string;
  favicon: File | FileList | null;
  urlEditing: string;
  internalLinking: string;
  anchorTexting: string;
};

const UpdateBlogsFrom = ({ blogData }: { blogData: any }) => {
  const [tags, setTags] = useState<string[]>(
    blogData?.metaKeywords ? blogData?.metaKeywords : []
  );
  const [robots, seRobots] = useState<string[]>(
    blogData?.metaRobots ? blogData?.metaRobots : []
  );
  const [inputTags, setInputTags] = useState<string>("");
  const [inputRobots, setInputRobots] = useState<string>("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputTags.trim() !== "") {
      e.preventDefault();
      const newTag = inputTags.trim();
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setInputTags("");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputTags(e.target.value);
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleRobotsKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputRobots.trim() !== "") {
      e.preventDefault();
      const newRobot = inputRobots.trim();
      if (!robots.includes(newRobot)) {
        seRobots([...robots, newRobot]);
      }
      setInputRobots("");
    }
  };

  const handleRobotsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputRobots(e.target.value);
  };

  const handleRobotsRemoveTag = (robotToRemove: string) => {
    seRobots(robots.filter((robot) => robot !== robotToRemove));
  };

  const schema = z.object({
    image: z.any(),
    title: z.string().nonempty("This field is required"),
    description: z.string().nonempty("This field is required"),
    metaTitle: z.any(),
    metaDescription: z.any(),
    altImageAttributes: z.any(),
    canonicalUrl: z.any(),
    openGraph: z.any(),
    xmlSitemap: z.any(),
    schemaMetaData: z.any(),
    favicon: z.any(),
    urlEditing: z.any(),
    internalLinking: z.any(),
    anchorTexting: z.any(),
  });

  const form = useForm<AddBlogType>({
    defaultValues: {
      image: null,
      title: blogData?.title,
      description: blogData?.content,
      metaTitle: blogData?.metaTitle,
      metaDescription: blogData?.metaDescription,
      altImageAttributes: blogData?.altImageAttributes,
      canonicalUrl: blogData?.canonicalUrl,
      openGraph: blogData?.openGraph,
      xmlSitemap: blogData?.xmlSiteMap,
      schemaMetaData: blogData?.schemaMetaData,
      favicon: null,
      urlEditing: blogData?.urlEditing,
      internalLinking: blogData?.internalLinking,
      anchorTexting: blogData?.anchorTexting,
    },
    resolver: zodResolver(schema),
  });

  const { mutate: updateBlog } = useUpdateBlog();

  const handleSubmit = (values: AddBlogType) => {
    updateBlog({
      ...values,
      metakeyword: tags,
      robotsKeyword: robots,
      id: blogData?._id,
    });
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

          {/* ==================== meta tags field ==================== */}
          <div className="pt-10">
            <div className="mb-2">
              <h4 className="text-[16px] font-[500] leading-[20px] lg:text-[20px] lg:leading-[25px]">
                Meta Data fileds
              </h4>
            </div>
            <div className=" space-y-5">
              <FormField
                control={form.control}
                name="metaTitle"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Meta Title</FormLabel>
                    <FormControl>
                      <Input {...field} type="text" className="w-full" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="metaDescription"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Meta Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>
                <p>Meta Keywords</p>
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
                      value={inputTags}
                      onChange={handleChange}
                      onKeyDown={handleKeyDown}
                      placeholder="Meta Keywords..."
                      className="flex-1 border-none outline-none p-2"
                    />
                  </div>
                </div>
              </div>

              <div>
                <p>Robot TXT</p>
                <div className="w-full bg-white p-4 rounded-lg shadow-md">
                  <div className="flex flex-wrap items-center border border-gray-300 rounded-lg p-2">
                    {robots.map((robot, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 m-1 text-sm font-medium text-white bg-primary rounded-full"
                      >
                        {robot}
                        <button
                          type="button"
                          className="ml-2 text-white focus:outline-none"
                          onClick={() => handleRobotsRemoveTag(robot)}
                        >
                          ×
                        </button>
                      </span>
                    ))}
                    <input
                      type="text"
                      value={inputRobots}
                      onChange={handleRobotsChange}
                      onKeyDown={handleRobotsKeyDown}
                      placeholder="Robot TXT..."
                      className="flex-1 border-none outline-none p-2"
                    />
                  </div>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <FormField
                  control={form.control}
                  name="altImageAttributes"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Alt Image Attributes</FormLabel>
                      <FormControl>
                        <Input {...field} type="text" className="w-full" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="canonicalUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Canonical URL </FormLabel>
                      <FormControl>
                        <Input {...field} type="text" className="w-full" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="openGraph"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Open Graph </FormLabel>
                      <FormControl>
                        <Input {...field} type="text" className="w-full" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="xmlSitemap"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>XML Sitemap </FormLabel>
                      <FormControl>
                        <Input {...field} type="text" className="w-full" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="schemaMetaData"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Schema Meta Data </FormLabel>
                      <FormControl>
                        <Input {...field} type="text" className="w-full" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="urlEditing"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>URL editing </FormLabel>
                      <FormControl>
                        <Input {...field} type="text" className="w-full" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="internalLinking"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Internal Linking </FormLabel>
                      <FormControl>
                        <Input {...field} type="text" className="w-full" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="anchorTexting"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Anchor Texting </FormLabel>
                      <FormControl>
                        <Input {...field} type="text" className="w-full" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="favicon"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Favicon</FormLabel>
                    <FormControl>
                      <ImageUpload {...field} control={form.control} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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

export default UpdateBlogsFrom;

// export default UpdateBlogsFrom;
