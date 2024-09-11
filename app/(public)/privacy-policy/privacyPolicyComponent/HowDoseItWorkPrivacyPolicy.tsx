import React from "react";

const HowDoseItWorkPrivacyPolicy = () => {
  return (
    <div className="bg-white py-6 lg:py-14 my-5">
      <div className="container mx-auto  px-4 lg:px-14 ">
        <h3 className="text-[16px] font-[700] leading-[21px] lg:text-[23px] lg:leading-[30px] text-center mb-5 lg:mb-10">
          How does it work?
        </h3>

        <div>
          <p className="font-[300]  text-[8px] leading-[12px] sm:text-[12px] sm:leading-[16px] lg:text-[16px] lg:leading-[20px] text-center mb-2 lg:mb-5 text-[#006D5E]">
            This list is compiled based on registered orders through
            Propfirmmatch from the previous week, ranked by dollar amounts.
          </p>
          <p className="font-[300]  text-[8px] leading-[12px] sm:text-[12px] sm:leading-[16px] lg:text-[16px] lg:leading-[20px] text-center  text-[#006D5E]">
            Please note that inaccuracies may occur if firms have not reported
            their numbers promptly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowDoseItWorkPrivacyPolicy;
