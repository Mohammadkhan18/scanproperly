import React from "react";

const Policy = ({ policyData }: any) => {
  return (
    <div className="flex justify-between gap-10">
      <h3 className="flex-1 max-w-[250px] font-[500] text-[20px] leading-[20px]">
        {policyData?.title}
      </h3>
      <p className="flex-1 font-[400] text-[16px] leading-[20px]">
        {policyData?.desc}
      </p>
    </div>
  );
};

export default Policy;
