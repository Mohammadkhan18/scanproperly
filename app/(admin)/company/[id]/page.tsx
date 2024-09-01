"use client";

import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Button } from "@/app/components/ui/button";
import UpdateCompanyFrom from "./UpdateCompanyForm";
import { useFetchSingleCompany } from "../../api/api-queries";
import Loader from "@/app/components/shared/Loader";

const UpdateCompany = () => {
  const { data } = useFetchSingleCompany();

  return (
    <div className="container mx-auto px-14 py-[24px]">
      <div className="flex items-center gap-5">
        <h2 className="font-[700] text-[24px] leading-[32px]">
          Update Company
        </h2>
        <Button>
          <BsArrowLeft className="text-[24px]" />
        </Button>
      </div>

      <UpdateCompanyFrom currentCompany={data?.data?.data} />
    </div>
  );
};

export default UpdateCompany;
