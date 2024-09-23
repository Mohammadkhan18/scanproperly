import React from "react";

import Policy from "./privacyPolicyComponent/policy";
import HowDoseItWorkPrivacyPolicy from "./privacyPolicyComponent/HowDoseItWorkPrivacyPolicy";
import { privacyPolicy } from "../../constant";

const PrivacyPolicy = () => {
  return (
    <div className="">
      <div className="container mx-auto px-4 pt-[12px] pb-10 lg:px-14 lg:pt-[24px] lg:pb-20">
        <div className="space-y-2 mb-5 lg:mb-10">
          <h1 className="text-[20px] font-[600] leading-[25px] sm:text-[28px]  sm:leading-[35px] lg:text-[40px]  lg:leading-[50px] ">
            Privacy Policy
          </h1>
          <p className=" font-[400] text-[8px] leading-[12px] sm:text-[12px] sm:leading-[16px] lg:text-[16px] lg:leading-[20px]">
            Our Personal Statement, Cookies , Third _Parties
          </p>
        </div>
        <div className="flex flex-col space-y-5 lg:space-y-10 ">
          {privacyPolicy?.map(
            (
              { title, desc }: { title: string; desc: string },
              index: number
            ) => (
              <Policy policyData={{ title, desc }} key={index + 1} />
            )
          )}
        </div>
        <HowDoseItWorkPrivacyPolicy />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
