import React from "react";

import Policy from "./privacyPolicyComponent/policy";
import HowDoseItWorkPrivacyPolicy from "./privacyPolicyComponent/HowDoseItWorkPrivacyPolicy";
import { privacyPolicy } from "@/app/constant";

const PrivacyPolicy = () => {
  return (
    <div className="">
      <div className="container mx-auto px-14 pt-[24px] pb-20">
        <div className="space-y-2 mb-10">
          <h1 className="font-[600] text-[40px] leading-[50px] ">
            Privacy Policy
          </h1>
          <p className=" font-[400] text-[16px] leading-[20px]">
            Our Personal Statement, Cookies , Third _Parties
          </p>
        </div>
        <div className="flex flex-col space-y-10 ">
          {privacyPolicy?.map(
            (
              { title, desc }: { title: string; desc: string },
              index: number
            ) => (
              <Policy policyData={{ title, desc }} key={index + 1} />
            )
          )}
        </div>
      </div>
      <HowDoseItWorkPrivacyPolicy />
    </div>
  );
};

export default PrivacyPolicy;
