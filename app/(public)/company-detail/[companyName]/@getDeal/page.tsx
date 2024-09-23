import { Button } from "../../../../components/ui/button";
import React from "react";
import { IoCopyOutline } from "react-icons/io5";

const GetDeal = () => {
  return (
    <div className="flex flex-col gap-5">
      {[1, 2].map((data) => (
        <div className="bg-grayBackground rounded-[21px] px-10 py-4 flex items-center justify-between">
          <h3 className="text-[20px] font-[400] leading-[21px]">
            Ability Challenge
          </h3>
          <div className="flex items-center gap-5">
            <div>
              <p className="text-[14px] font-[400] leading-[21px] text-primary">
                15% Discount
              </p>
              <p className="text-[20px] font-[400] leading-[21px] text-primary">
                Code: XYZ15
              </p>
            </div>
            <div>
              <IoCopyOutline className="text-[25px] text-primary" />
            </div>
          </div>
          <Button
            className={"bg-primary rounded-[14px] w-[300px] font-semibold "}
          >
            Get the Deal
          </Button>
        </div>
      ))}
    </div>
  );
};

export default GetDeal;
