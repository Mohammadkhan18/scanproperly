import React from "react";

const HowDoseItWork = () => {
  return (
    <div className="bg-white py-10 lg:py-14">
      <div className="container mx-auto  px-14 ">
        <h3 className="font-[600]  text-[24px] leading-[24px]  sm:text-[32px] sm:leading-[32px] lg:text-[40px] lg:leading-[40px] text-center  mb-5 lg:mb-10">
          How does it work?
        </h3>

        <div>
          <p className="font-[300] text-[12px] leading-[20px] sm:text-[16px] sm:leading-[24px] lg:text-[20px] lg:leading-[32px] text-center mb-2 lg:mb-5 text-[#006D5E]">
            This list is compiled based on registered orders through
            Propfirmmatch from the previous week, ranked by dollar amounts.
          </p>
          <p className="font-[300] text-[12px] leading-[20px] sm:text-[16px] sm:leading-[24px] lg:text-[20px] lg:leading-[32px] text-center  text-[#006D5E]">
            Please note that inaccuracies may occur if firms have not reported
            their numbers promptly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowDoseItWork;
