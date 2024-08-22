import React from "react";
import boyImage from "../../public/heroImage/boy.svg";
import menImage from "../../public/heroImage/men.svg";
import traderImage from "../../public/heroImage/trader.svg";
import avalibilityImage from "../../public/heroImage/availibility.svg";
import Image from "next/image";
import { Button } from "@/app/components/ui/button";
import { Switch } from "@/app/components/ui/switch";

const heroData = [
  {
    title: "Select Asset Type",
    btn: ["Forex", "Future", "Stocks", "Crypto", "Indices", "Commodities"],
  },
  {
    title: "Number of steps",
    btn: ["Instant", "1 Step", "2 Step", "3 Step"],
  },
  {
    title: "Select your account size",
    btn: [
      "5K",
      "10K",
      "25K",
      "50K",
      "100K",
      "200K",
      "300K",
      "400K",
      "500K",
      "Load more",
    ],
    account: true,
  },
  {
    title: "Platform to trade",
    btn: ["MT4", "MT5", "C - Trader"],
  },
];

const Hero = () => {
  return (
    <div className="container mx-auto px-14">
      <div className=" px-[40px] py-[24px] my-5 flex gap-24 justify-between rounded-[20px] bg-gradient">
        <div className="flex flex-col gap-7">
          <h1 className="text-[40px] font-[600] leading-[50px] text-white">
            What plan do you want to compare?
          </h1>

          {heroData?.map(
            (data: { title: string; btn: string[] }, index: number) => (
              <div key={index}>
                <h3 className="text-[23px] font-[700] leading-[30px] text-white">
                  {data?.title}
                </h3>
                <div className="flex gap-[8px] mt-3">
                  {data?.btn?.map((bt: any, index: number) => (
                    <Button key={index} className="bg-white text-black">
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
        <div className="flex-grow relative ">
          <div className="flex w-full items-center justify-end gap-[16px]">
            <h3 className="text-[23px] font-[700] leading-[30px] text-white">
              Apply discount
            </h3>
            <Switch />
          </div>
          <div className=" ">
            <div className="absolute top-[20%] left-0">
              <Image src={menImage} alt="Men" quality={100} />
            </div>
            <div className="absolute top-[10%] right-0">
              <Image src={avalibilityImage} alt="Aailibity" quality={100} />
            </div>{" "}
            <div className="absolute left-0 top-[68.5%]">
              <Image src={traderImage} alt="Traders" quality={100} />
            </div>{" "}
            <div className="absolute right-0 top-[32.5%]">
              <Image src={boyImage} alt="Boy" quality={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
