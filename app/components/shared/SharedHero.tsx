import React from "react";
import SearchInput from "./SearchInput";


type HeroType = {
  title: string;
  subtitle: string;
  tabs: { tab: string }[];
};

const SharedHero = ({
  data,
  isGradeint,
}: {
  data: HeroType;
  isGradeint: boolean;
}) => {
  return (
    <div
      className={`${
        isGradeint
          ? "bg-gradient py-8 sm:py-16 lg:py-24 "
          : "py-3 smpy-5 lg:py-10"
      } px-[24px] sm:px-[32px] lg:px-[40px] flex gap-8 sm:gap-16 lg:gap-24 items-center justify-center text-center  rounded-[20px] `}
    >
      <div className="space-y-3 sm:space-y-5 lg:space-y-8">
        <h1
          className={`font-[600] text-[12px] leading-[15px] sm:text-[28px] sm:leading-[35px] lg:text-[40px] lg:leading-[50px] ${
            isGradeint ? "text-white" : ""
          } `}
        >
          {data?.title}
        </h1>
        <h4
          className={`font-[600] text-[10px] leading-[15px] sm:text-[22px] sm:leading-[35px] lg:text-[32px] lg:leading-[50px]  ${
            isGradeint ? "text-white" : ""
          }  `}
        >
          {data?.subtitle}
        </h4>
        <div className="flex  justify-center">
          <div className=" border-b-2 border-b-primary font-[600] text-[6px] leading-[10px] sm:text-[14px] sm:leading-[22px] lg:text-[20px] lg:leading-[32px] text-primary px-4">
            Ability Program Offers
          </div>
          {data?.tabs?.map((tab: { tab: string }, index: number) => (
            <div
              key={index}
              className={`border-b-2 border-b-white font-[600] text-[6px] leading-[10px] sm:text-[14px] sm:leading-[22px] lg:text-[20px] lg:leading-[32px]  ${
                isGradeint ? "text-white" : ""
              }  px-4`}
            >
              {tab?.tab}
            </div>
          ))}
        </div>
        <SearchInput />
      </div>
    </div>
  );
};

export default SharedHero;
