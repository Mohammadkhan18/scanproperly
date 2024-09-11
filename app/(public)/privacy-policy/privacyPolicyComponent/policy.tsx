import React from "react";

const Policy = ({ policyData }: any) => {
  return (
    <div className="flex flex-col lg:flex-row  justify-between gap-2 lg:gap-10">
      <h3 className="flex-1 max-w-[250px] font-[500] text-[12px] leading-[12px] sm:text-[16px] sm:leading-[16px] lg:text-[20px] lg:leading-[20px]">
        {policyData?.title}
      </h3>
      <p className="flex-1 font-[400]  text-[8px] leading-[12px] sm:text-[12px] sm:leading-[16px] lg:text-[16px] lg:leading-[20px]">
        {policyData?.desc}
      </p>
    </div>
  );
};

export default Policy;
