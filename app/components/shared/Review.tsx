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
        <p className="font-[600] text-[4px]  leading-[6.52px] sm:text-[8px]  sm:leading-[10.52px] lg:text-[12px]  lg:leading-[14.52px]">
          {data?.review}:
        </p>
        <div
          className={`border-2 border-primary rounded-md px-1 text-primary ${
            percent === "fill" ? "bg-primary text-white" : ""
          }`}
        >
          <p
            className={` font-[600] text-[4px]  leading-[6.52px] sm:text-[8px]  sm:leading-[10.52px] lg:text-[12px]  lg:leading-[14.52px]`}
          >
            {data?.rating}/5
          </p>
        </div>
      </div>
      <div className="flex items-center gap-[2px] lg:gap-1">
        <div className="flex ">
          {Array.from({ length: Math.round(Number(data?.rating)) })?.map(
            (start) => (
              <FaStar className="text-primary text-[8px] sm:text-[12px] lg:text-[18px]" />
            )
          )}
        </div>
        <p
          className={`font-[600] text-[4px]  leading-[6.52px] sm:text-[6px]  sm:leading-[8.52px] lg:text-[10px]  lg:leading-[12.52px]  text-primary mb-[-5px]`}
        >
          11.234
        </p>
        <p className="font-[300] text-[4px]  leading-[6.52px] sm:text-[6px]  sm:leading-[8.52px] lg:text-[10px]  lg:leading-[12.52px]  mb-[-5px]">
          Review
        </p>
      </div>
    </div>
  );
};

export default Review;
