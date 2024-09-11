import React from "react";
import NumberBadge from "./NumberBadge";

const HowDoseItWork = () => {
  return (
    <div className="bg-white py-6 sm:py-10 lg:py-14">
      <div className="container mx-auto  px-4 sm:px-14 ">
        <h3 className="font-[600] text-[10px] leading-[15px]  sm:text-[24px] sm:leading-[40px]  md:text-[32px] md:leading-[50px] text-center mb-10">
          How does it work?
        </h3>
        <div className="flex items-center justify-center xl:justify-between flex-wrap gap-3 lg:gap-5">
          {[1, 2, 3].map((data: number, index: number) => (
            <div
              key={index}
              className="bg-grayBackground p-3 lg:p-5 rounded-[20px] flex flex-col gap-5 w-full max-w-[360px] min-w-[280px]"
            >
              <NumberBadge />
              <p className="font-[400] text-[#006D5E] text-[6px] leading-[12px] sm:text-[11px] sm:leading-[22px] lg:text-[16px] lg:leading-[32px]">
                If the MATCH code is applicable: Simply apply the MATCH code at
                the checkout on the firm’s website.
              </p>
            </div>
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default HowDoseItWork;
