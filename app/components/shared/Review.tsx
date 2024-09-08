import { Button } from "@/app/components/ui/button";
import React from "react";
import { FaStar } from "react-icons/fa";

const Review = ({
  percent,
  data,
}: {
  percent?: "fill" | null;
  data: {
    review: string;
    rating: string;
  };
}) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <p className="text-[12px] font-[600] leading-[14.52px]">
          {data?.review}:
        </p>
        <div
          className={`border-2 border-primary rounded-md px-1 text-primary ${
            percent === "fill" ? "bg-primary text-white" : ""
          }`}
        >
          <p className={`text-[10.93px] font-[600] leading-[13.23px]   `}>
            {data?.rating}/5
          </p>
        </div>
      </div>
      <div className="flex items-center gap-[2px] lg:gap-1">
        <div className="flex ">
          {Array.from({ length: Math.round(Number(data?.rating)) })?.map(
            (start) => (
              <FaStar className="text-primary text-[14px] lg:text-[18px]" />
            )
          )}
        </div>
        <p
          className={`text-[10.23px] font-[600] leading-[12px] text-primary mb-[-5px]`}
        >
          11.234
        </p>
        <p className="text-[10.23px] font-[300] leading-[12px] mb-[-5px]">
          Review
        </p>
      </div>
    </div>
  );
};

export default Review;
