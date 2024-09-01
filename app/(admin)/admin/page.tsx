"use client";

import { Button } from "@/app/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const Admin = () => {
  const route = useRouter();
  return (
    <div className="container mx-auto px-14 py-[24px] gap-10 flex justify-between">
      <div className="flex-1 bg-white p-5 shadow-2xl">
        <div className="h-full flex flex-col justify-between items-start gap-5">
          <div className="space-y-2">
            <h2 className="font-[700] text-[24px] leading-[32px]">Comapnies</h2>
            <p className="font-[600] text-[18px] leading-[24px text-primary">
              Total: <span>654</span>
            </p>
          </div>
          <Button
            onClick={() => {
              route.push("/company");
            }}
          >
            Read more ...
          </Button>
        </div>
      </div>
      <div className="flex-1 bg-white p-5 shadow-2xl">
        <div className="h-full flex flex-col justify-between items-start gap-5">
          <div className="space-y-2">
            <h2 className="font-[700] text-[24px] leading-[32px]">Blogs</h2>
            <p className="font-[600] text-[18px] leading-[24px text-primary">
              Total: <span>654</span>
            </p>
          </div>
          <Button
            onClick={() => {
              route.push("/blog");
            }}
          >
            Read more ...
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Admin;