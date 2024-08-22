import React from "react";
import image from "@/public/homeImages/doublebull.svg";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import { Button } from "@/app/components/ui/button";
import Review from "./Review";

const CompanyCard = () => {
  return (
    <div>
      <table
        className="w-full"
        style={{
          borderCollapse: "separate" /* Ensures spacing is applied */,
          borderSpacing: "10px" /* Adjust the spacing between cells */,
        }}
      >
        <thead>
          <tr className="">
            <th className="bg-[#FAFAFA] rounded-md p-2 text-[10.93px] font-[600] leading-[13.23px]">
              Company Info
            </th>
            <th className="bg-[#FAFAFA] rounded-md p-2 text-[10.93px] font-[600] leading-[13.23px]">
              Account Size
            </th>
            <th className="bg-[#FAFAFA] rounded-md p-2 text-[10.93px] font-[600] leading-[13.23px]">
              Profit Target
            </th>
            <th className="bg-[#FAFAFA] rounded-md p-2 text-[10.93px] font-[600] leading-[13.23px]">
              Profit Sharing
            </th>
            <th className="bg-[#FAFAFA] rounded-md p-2 text-[10.93px] font-[600] leading-[13.23px]">
              Drawdown
            </th>
            <th className="bg-[#FAFAFA] rounded-md p-2 text-[10.93px] font-[600] leading-[13.23px]">
              Settlment
            </th>
            <th className="bg-[#FAFAFA] rounded-md p-2 text-[10.93px] font-[600] leading-[13.23px]">
              Xountries
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className="rounded-md " rowSpan={4}>
              <div className="space-y-1">
                <div className="flex gap-1">
                  <div className="h-[100px] w-[100px] rounded-[11px] flex items-center justify-center bg-[#FAFAFA]">
                    <Image src={image} alt="bull" quality={100} />
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <p className="text-[10.23px] font-[600] leading-[14.52px]">
                          TrustPilot Rating:
                        </p>
                        <div className="border-2 border-primary rounded-md px-1 text-primary ">
                          <p className="text-[10.93px] font-[600] leading-[13.23px]">
                            4.8/5
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          <FaStar className="text-primary text-18px]" />
                          <FaStar className="text-primary text-18px]" />
                          <FaStar className="text-primary text-18px]" />
                          <FaStar className="text-primary text-18px]" />
                          <FaStar className="text-primary text-18px]" />
                        </div>
                        <p className="text-[10.23px] font-[600] leading-[12px] text-primary mb-[-5px]">
                          11.234
                        </p>
                        <p className="text-[10.23px] font-[300] leading-[12px] mb-[-5px]">
                          Review
                        </p>
                      </div>
                    </div>
                    <Review />
                  </div>
                </div>
                <div>
                  <p className="text-[10.93px] font-[600] leading-[13.23px] ">
                    Elite Trader Funding
                  </p>
                  <p>
                    <span className="text-[10.93px] font-[400] leading-[13.23px] ">
                      Founded:
                    </span>{" "}
                    <span className="text-[10.93px] font-[600] leading-[13.23px] text-primary">
                      2022, United State
                    </span>
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 border-2 border-primary rounded-[3.85px] flex items-center  px-[5px] py-[2px]">
                    <p className="text-[10.93px] font-[600] leading-[13.23px] text-primary">
                      Get 20% off : Code : XYZ20{" "}
                    </p>
                    <div>
                      <IoCopyOutline className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <Button className="h-[25px] flex items-center justify-center text-[10.93px] font-[800] leading-[13.23px]">
                      Get the deal
                    </Button>
                  </div>
                </div>
              </div>
            </td>
            <td className="bg-[#FAFAFA] rounded-md p-2" rowSpan={2}>
              <div className="flex flex-col items-center justify-center">
                <p className="text-center text-[10.93px] font-[400] leading-[13.23px]">
                  Account Size
                </p>
                <p className="text-[10.93px] font-[600] leading-[13.23px] text-center">
                  50,000
                </p>
              </div>
            </td>
            <td className="bg-[#FAFAFA] rounded-md p-2" rowSpan={4}>
              <div className="flex flex-col items-center justify-around">
                {" "}
                <div className="flex flex-col items-center justify-center">
                  <p className="text-center text-[10.93px] font-[400] leading-[13.23px]">
                    Evaluation
                  </p>
                  <p className="text-[10.93px] font-[600] text-center leading-[13.23px]">
                    50,000
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-center">
                    <p className="text-center text-[10.93px] font-[400] leading-[13.23px]">
                      Step1:
                    </p>
                    <p className="text-[10.93px] font-[600] text-center leading-[13.23px]">
                      8%
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="text-center text-[10.93px] font-[400] leading-[13.23px]">
                      Step1:
                    </p>
                    <p className="text-[10.93px] font-[600] text-center leading-[13.23px]">
                      8%
                    </p>
                  </div>
                </div>
              </div>
            </td>
            <td className="bg-[#FAFAFA] rounded-md p-2" rowSpan={3}>
              <div className="flex flex-col items-center justify-center">
                <p className="text-center text-[10.93px] font-[400] leading-[13.23px]">
                  Up to
                </p>
                <p className="text-[10.93px] font-[600] text-center leading-[13.23px]">
                  50%
                </p>
              </div>
            </td>
            <td className="bg-[#FAFAFA] rounded-md p-2">
              {" "}
              <div className="flex  items-center justify-center">
                <p className="text-center text-[10.93px] font-[400] leading-[13.23px]">
                  Daily Drawdown{" "}
                </p>
                <p className="text-[10.93px] font-[400] text-center leading-[13.23px]">
                  5%
                </p>
              </div>
            </td>
            <td className="bg-[#FAFAFA] rounded-md p-2" rowSpan={3}>
              <div className="flex flex-col items-center justify-center">
                <p className="text-center text-[10.93px] font-[400] leading-[13.23px]">
                  Within
                </p>
                <p className="text-[10.93px] font-[600] text-center leading-[13.23px]">
                  10 days{" "}
                </p>
              </div>
            </td>
            <td className="bg-[#FAFAFA] rounded-md p-2" rowSpan={4}>
              <div className="flex flex-col items-center justify-center">
                <p className="text-[10.93px] font-[600] leading-[13.23px]">
                  146
                </p>
                <p className="text-center text-[10.93px] font-[400] leading-[13.23px]">
                  {" "}
                  Countries{" "}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-[10.93px] font-[600] leading-[13.23px]">
                  Except
                </p>
                <p className="text-[10px] tfont-[400] leading-[13px] text-center">
                  INDIA,USA <br />
                  RUSSIA{" "}
                </p>
              </div>
            </td>
          </tr>
          <tr className="">
            <td className="bg-[#FAFAFA] rounded-md p-2">
              <div className="flex  items-center justify-center">
                <p className="text-center text-[10.93px] font-[400] leading-[13.23px]">
                  Max Drawdown{" "}
                </p>
                <p className="text-[10.93px] font-[400] text-center leading-[13.23px]">
                  5%
                </p>
              </div>
            </td>
          </tr>{" "}
          <tr className="">
            <td className="bg-[#FAFAFA] rounded-md p-2" rowSpan={2}>
              <div className="flex flex-col items-center justify-center">
                <p className="text-[10.93px] font-[600] text-center leading-[13.23px]">
                  Actual Price
                </p>
                <p className="text-primary line-through text-center text-[10.93px] font-[600] leading-[13.23px]">
                  2324{" "}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-[10.93px] font-[600] text-center leading-[13.23px]">
                  After discount
                </p>
                <p className="text-primary text-center line-through text-[10.93px] font-[400] leading-[13.23px]">
                  2324{" "}
                </p>
              </div>
            </td>

            <td className="bg-[#FAFAFA] rounded-md p-2">
              {" "}
              <div className="flex  items-center justify-center">
                <p className="text-center text-[10.93px] font-[400] leading-[13.23px]">
                  Balance equality highest at EOD
                </p>
              </div>
            </td>
          </tr>{" "}
          <tr className="">
            <td className="bg-[#FAFAFA] rounded-md p-2" colSpan={3}>
              <div className="flex  items-center justify-center">
                <p className="text-center text-[10.93px] font-[400] leading-[13.23px]">
                  Profit target to drawdown Ratio 1.0.62
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CompanyCard;
