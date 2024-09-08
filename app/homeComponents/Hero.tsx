import React from "react";
import boyImage from "../../public/heroImage/boy.svg";
import menImage from "../../public/heroImage/men.svg";
import traderImage from "../../public/heroImage/trader.svg";
import avalibilityImage from "../../public/heroImage/availibility.svg";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { Switch } from "@/app/components/ui/switch";
import { homeSelecterData } from "../constant";

const Hero = () => {
  return (
    <div className="container mx-auto px-14 py-[24px]">
      <div className="px-[40px] py-[24px] flex gap-24 justify-between rounded-[20px] bg-gradient">
        <div className="flex flex-col gap-7">
          <h1 className="text-[28px] font-[600] leading-[35px] lg:text-[40px]  lg:leading-[50px] text-white">
            What plan do you want to compare?
          </h1>

          {homeSelecterData?.map(
            (data: { title: string; btn: string[] }, index: number) => (
              <div key={index}>
                <h3 className="text-[16px] font-[700] leading-[21px] lg:text-[23px] lg:leading-[30px] text-white">
                  {data?.title}
                </h3>
                <div className="flex gap-[8px] mt-3 flex-wrap">
                  {data?.btn?.map((bt: any, index: number) => (
                    <Button
                      key={index}
                      className="bg-white text-black text-[11px] font-[500] leading-[21px] lg:text-[16px] lg:leading-[30px]"
                    >
                      <p>{bt}</p>
                    </Button>
                  ))}
                </div>
              </div>
            )
          )}
          <div>
            <Button>Search Now</Button>
          </div>
        </div>

        {/* ======================= hero right ======================= */}
        <div className="flex-grow lg:min-w-[320px] relative hidden lg:block">
          <div className="flex w-full items-center justify-end gap-[16px]">
            <h3 className="text-[23px] font-[700] leading-[30px] text-white">
              Apply discount
            </h3>
            <Switch />
          </div>
          <div className=" ">
            <div className="absolute top-[25%] left-[-40px] lg:top-[20%] lg:left-0">
              <Image
                src={menImage}
                alt="Men"
                quality={100}
                className="h-[187px] w-[104px] lg:h-[100%] lg:w-[100%]"
              />
            </div>
            <div className="absolute top-[15%] right-0 lg:top-[10%] lg:right-0">
              <Image
                src={avalibilityImage}
                alt="Aailibity"
                quality={100}
                className="h-[83px] w-[104px] lg:h-[100%] lg:w-[100%]"
              />
            </div>{" "}
            <div className="absolute left-[-40px] top-[60.5%] lg:left-0 lg:top-[68.5%]">
              <Image
                src={traderImage}
                alt="Traders"
                quality={100}
                className="h-[83px] w-[104px] lg:h-[100%] lg:w-[100%]"
              />
            </div>{" "}
            <div className="absolute right-0 top-[32.5%] lg:right-0 lg:top-[32.5%]">
              <Image
                src={boyImage}
                alt="Boy"
                quality={100}
                className=" h-[187px] w-[104px] lg:h-[100%] lg:w-[100%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
