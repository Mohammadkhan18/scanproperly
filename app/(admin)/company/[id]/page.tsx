"use client";

import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/button";
import UpdateCompanyFrom from "./UpdateCompanyForm";

const UpdateCompany = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto px-14 py-[24px]">
      <div className="flex items-center gap-5">
        <h2 className="font-[700] text-[24px] leading-[32px]">
          Update Company
        </h2>
        <Button
          onClick={() => {
            router.push("/company");
          }}
        >
          <BsArrowLeft className="text-[24px]" />
        </Button>
      </div>
      <UpdateCompanyFrom />
    </div>
  );
};

export default UpdateCompany;
