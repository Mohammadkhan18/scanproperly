import React from "react";

const HowDoseItWork = () => {
  return (
    <div className="bg-white py-14">
      <div className="container mx-auto  px-14 ">
        <h3 className="font-[600] text-[40px] leading-[40px] text-center mb-10">
          How does it work?
        </h3>

        <div>
          <p className="font-[300] text-[20px] leading-[32px] text-center mb-5 text-[#006D5E]">
            This list is compiled based on registered orders through
            Propfirmmatch from the previous week, ranked by dollar amounts.
          </p>
          <p className="font-[300] text-[20px] leading-[32px] text-center  text-[#006D5E]">
            Please note that inaccuracies may occur if firms have not reported
            their numbers promptly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowDoseItWork;
