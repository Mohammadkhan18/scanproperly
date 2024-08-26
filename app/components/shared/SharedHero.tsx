import React from "react";
import SearchInput from "./SearchInput";
import { type } from "os";

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
        isGradeint ? "bg-gradient  py-24 " : " py-10"
      }  px-[40px] flex gap-24 items-center justify-center text-center  rounded-[20px] `}
    >
      <div className="space-y-8">
        <h1
          className={`text-[40px] font-[600] leading-[50px] ${
            isGradeint ? "text-white" : ""
          } `}
        >
          {data?.title}
        </h1>
        <h4
          className={`text-[32px] font-[600] leading-[50px]  ${
            isGradeint ? "text-white" : ""
          }  `}
        >
          {data?.subtitle}
        </h4>
        <div className="flex  justify-center">
          <div className=" border-b-2 border-b-primary text-[20px] font-[600] leading-[32px] text-primary px-4">
            Ability Program Offers
          </div>
          {data?.tabs?.map((tab: { tab: string }, index: number) => (
            <div
              key={index}
              className={`border-b-2 border-b-white text-[20px] font-[600] leading-[32px]  ${
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
