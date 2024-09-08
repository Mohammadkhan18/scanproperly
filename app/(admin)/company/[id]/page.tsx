"use client";

import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Button } from "@/app/components/ui/button";
import { useFetchSingleCompany } from "../../api/api-queries";
import { useParams, useRouter } from "next/navigation";
import UpdateCompanyFrom from "./UpdateCompanyForm";
import Loader from "@/app/components/shared/Loader";

const UpdateCompany = () => {
  const params = useParams();
  const router = useRouter();

  const { data, isLoading } = useFetchSingleCompany(params?.id);

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

      {isLoading ? (
        <div className="h-[60vh] flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <UpdateCompanyFrom data={data?.data?.data} />
      )}
    </div>
  );
};

export default UpdateCompany;
