"use client";

import React from "react";
import AddCompanyFrom from "./AddCompanyForm";
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { Button } from "../../../components/ui/button";

const AddCompany = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4  py-[12px] lg:px-14 lg:py-[24px]">
      <div className="flex items-center gap-5">
        <h2 className="font-[700] text-[24px] leading-[32px]">Add Company</h2>
        <Button
          onClick={() => {
            router.push("/company");
          }}
        >
          <BsArrowLeft className="text-[24px]" />
        </Button>
      </div>
      <AddCompanyFrom />
    </div>
  );
};

export default AddCompany;
