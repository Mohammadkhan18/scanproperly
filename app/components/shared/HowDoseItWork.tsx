import React from "react";
import NumberBadge from "./NumberBadge";

const HowDoseItWork = () => {
  return (
    <div className="bg-white py-14">
      <div className="container mx-auto  px-14 ">
        <h3 className="font-[600] text-[40px] leading-[40px] text-center mb-10">
          How does it work?
        </h3>
        <div className="flex items-center justify-between gap-5">
          {[1, 2, 3].map((data: number, index: number) => (
            <div
              key={index}
              className="bg-grayBackground p-5 rounded-[20px] flex flex-col gap-5"
            >
              <NumberBadge />
              <p className="font-[400] text-[16px] leading-[32px]">
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
