import React from "react";
import { FaStar } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import Image from "next/image";

import image from "@/public/homeImages/doublebull.svg";
import { Button } from "@/app/components/ui/button";
import Review from "./Review";
import { CommandEmpty } from "cmdk";

const CompanyCard = ({ companyData }: { companyData: any }) => {
  return (
    <div>
      {/* ================== descktop view ============= */}
      <table
        className="w-full hidden md:block"
        style={{
          borderCollapse: "separate" /* Ensures spacing is applied */,
          borderSpacing: "10px" /* Adjust the spacing between cells */,
        }}
      >
        <thead>
          <tr className="">
            <th className="bg-[#FAFAFA] rounded-md p-2 text-[7.77px] leading-[9.41px] lg:text-[10.93px] font-[600] lg:leading-[13.23px]">
              Company Info
            </th>
            <th className="bg-[#FAFAFA] rounded-md p-2 text-[7.77px] leading-[9.41px] lg:text-[10.93px] font-[600] lg:leading-[13.23px]">
              Account Size
            </th>
            <th className="bg-[#FAFAFA] rounded-md p-2 text-[7.77px] leading-[9.41px] lg:text-[10.93px] font-[600] lg:leading-[13.23px]">
              Profit Target
            </th>
            <th className="bg-[#FAFAFA] rounded-md p-2 text-[7.77px] leading-[9.41px] lg:text-[10.93px] font-[600] lg:leading-[13.23px] ">
              Profit Sharing
            </th>
            <th className="bg-[#FAFAFA] rounded-md p-2 text-[7.77px] leading-[9.41px] lg:text-[10.93px] font-[600] lg:leading-[13.23px]">
              Drawdown
            </th>
            <th className="bg-[#FAFAFA] rounded-md p-2 text-[7.77px] leading-[9.41px] lg:text-[10.93px] font-[600] lg:leading-[13.23px]">
              Settlment
            </th>
            <th className="bg-[#FAFAFA] rounded-md p-2 text-[7.77px] leading-[9.41px] lg:text-[10.93px] font-[600] lg:leading-[13.23px]">
              Countries
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className="rounded-md " rowSpan={4}>
              <div className="space-y-1">
                <div className="flex gap-1">
                  <div className="h-[55px] w-[55px] lg:h-[100px] lg:w-[100px] rounded-[11px] flex items-center justify-center bg-[#FAFAFA]">
                    <Image src={image} alt="bull" quality={100} />
                  </div>

                  <div className="flex flex-col gap-3">
                    <Review
                      data={{
                        review: "Google Review",
                        rating: companyData?.googleReview,
                      }}
                    />
                    <Review
                      data={{
                        review: "Trust Polit Review",
                        rating: companyData?.trustPilotReview,
                      }}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[7.77px] leading-[9.41px] lg:text-[10.93px] font-[600] lg:leading-[13.23px] ">
                    {companyData?.name}
                  </p>
                  <p>
                    <span className="text-[10.93px] font-[400] leading-[13.23px] ">
                      Founded:
                    </span>
                    <span className="text-[7.77px] leading-[9.41px] lg:text-[10.93px] font-[600] lg:leading-[13.23px] text-primary">
                      {companyData?.establishedYear}, {companyData?.country}
                    </span>
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 border-2 border-primary rounded-[3.85px] flex items-center justify-between px-1  lg:px-[5px] lg:py-[2px]">
                    <p className="text-[5.77px] leading-[6.41px] lg:text-[10.93px] font-[600] lg:leading-[13.23px] text-primary">
                      Get 20% off : Code : XYZ20
                    </p>
                    <div>
                      <IoCopyOutline className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <Button className="h-[18px] lg:h-[25px] flex items-center justify-center text-[7px] leading-[8px] lg:text-[10.93px] font-[800] lg:leading-[13.23px]">
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
                <p className="text-[7.77px] leading-[9.41px] lg:text-[10.93px] font-[600] lg:leading-[13.23px] text-center">
                  {companyData?.accountSize}
                </p>
              </div>
            </td>
            <td className="bg-[#FAFAFA] rounded-md p-2" rowSpan={4}>
              <div className="flex flex-col items-center justify-around">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-center text-[10.93px] font-[400] leading-[13.23px]">
                    Evaluation
                  </p>
                  <p className="text-[10.93px] font-[600] text-center leading-[13.23px]">
                    {companyData?.evaluationType}
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
              <div className="flex  items-center justify-center">
                <p className="text-center text-[10.93px] font-[400] leading-[13.23px]">
                  Daily Drawdown
                </p>
                <p className="text-[10.93px] font-[400] text-center leading-[13.23px]">
                  {companyData?.dailyDrawdown}%
                </p>
              </div>
            </td>
            <td className="bg-[#FAFAFA] rounded-md p-2" rowSpan={3}>
              <div className="flex flex-col items-center justify-center">
                <p className="text-center text-[10.93px] font-[400] leading-[13.23px]">
                  Within
                </p>
                <p className="text-[10.93px] font-[600] text-center leading-[13.23px]">
                  10 days
                </p>
              </div>
            </td>
            <td className="bg-[#FAFAFA] rounded-md p-2" rowSpan={4}>
              <div className="flex flex-col items-center justify-center">
                <p className="text-[7.77px] leading-[9.41px] lg:text-[10.93px] font-[600] lg:leading-[13.23px]">
                  146
                </p>
                <p className="text-center text-[10.93px] font-[400] leading-[13.23px]">
                  Countries
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-[7.77px] leading-[9.41px] lg:text-[10.93px] font-[600] lg:leading-[13.23px]">
                  Except
                </p>
                <p className="text-[10px] tfont-[400] leading-[13px] text-center">
                  INDIA,USA <br />
                  RUSSIA
                </p>
              </div>
            </td>
          </tr>
          <tr className="">
            <td className="bg-[#FAFAFA] rounded-md p-2">
              <div className="flex  items-center justify-center">
                <p className="text-center text-[10.93px] font-[400] leading-[13.23px]">
                  Max Drawdown
                </p>
                <p className="text-[10.93px] font-[400] text-center leading-[13.23px]">
                  {companyData?.maxDrawdown}%
                </p>
              </div>
            </td>
          </tr>
          <tr className="">
            <td className="bg-[#FAFAFA] rounded-md p-2" rowSpan={2}>
              <div className="flex flex-col items-center justify-center">
                <p className="text-[10.93px] font-[600] text-center leading-[13.23px]">
                  Actual Price
                </p>
                <p className="text-primary line-through text-center text-[7.77px] leading-[9.41px] lg:text-[10.93px] font-[600] lg:leading-[13.23px]">
                  {companyData?.actualPrice}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-[10.93px] font-[600] text-center leading-[13.23px]">
                  After discount
                </p>
                <p className="text-primary text-center line-through text-[10.93px] font-[400] leading-[13.23px]">
                  {companyData?.discountedPrice}
                </p>
              </div>
            </td>

            <td className="bg-[#FAFAFA] rounded-md p-2">
              <div className="flex  items-center justify-center">
                <p className="text-center text-[10.93px] font-[400] leading-[13.23px]">
                  Balance equality highest at EOD
                </p>
              </div>
            </td>
          </tr>
          <tr className="">
            <td className="bg-[#FAFAFA] rounded-md p-2" colSpan={3}>
              <div className="flex  items-center justify-center">
                <p className="text-center text-[10.93px] font-[400] leading-[13.23px]">
                  Profit target to drawdown Ratio{" "}
                  {companyData?.profitToDrawdownRatio}
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* ==================mob view ================= */}
      <table
        className="w-full  md:hidden"
        style={{
          borderCollapse: "separate" /* Ensures spacing is applied */,
          borderSpacing: "10px" /* Adjust the spacing between cells */,
        }}
      >
        <thead>
          <tr className="">
            <th className="bg-[#FAFAFA] rounded-md p-2 text-[7.77px] leading-[9.41px] lg:text-[10.93px] font-[600] lg:leading-[13.23px]">
              Company Info
            </th>
            <th className="bg-[#FAFAFA] rounded-md p-2 text-[7.77px] leading-[9.41px] lg:text-[10.93px] font-[600] lg:leading-[13.23px]">
              Account Size
            </th>
            <th className="bg-[#FAFAFA] rounded-md p-2 text-[7.77px] leading-[9.41px] lg:text-[10.93px] font-[600] lg:leading-[13.23px]">
              Profit Target
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className="rounded-md " rowSpan={4}>
              <div className="space-y-1">
                <div className="flex gap-1">
                  <div className="h-[55px] w-[55px] lg:h-[100px] lg:w-[100px] rounded-[11px] flex items-center justify-center bg-[#FAFAFA]">
                    <Image src={image} alt="bull" quality={100} />
                  </div>

                  <div className="flex flex-col gap-3">
                    <Review
                      data={{
                        review: "Google Review",
                        rating: companyData?.googleReview,
                      }}
                    />
                    <Review
                      data={{
                        review: "Trust Polit Review",
                        rating: companyData?.trustPilotReview,
                      }}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[7.77px] leading-[9.41px] lg:text-[10.93px] font-[600] lg:leading-[13.23px] ">
                    {companyData?.name}
                  </p>
                  <p>
                    <span className="text-[10.93px] font-[400] leading-[13.23px] ">
                      Founded:
                    </span>
                    <span className="text-[7.77px] leading-[9.41px] lg:text-[10.93px] font-[600] lg:leading-[13.23px] text-primary">
                      {companyData?.establishedYear}, {companyData?.country}
                    </span>
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 border-2 border-primary rounded-[3.85px] flex items-center justify-between px-1  lg:px-[5px] lg:py-[2px]">
                    <p className="text-[5.77px] leading-[6.41px] lg:text-[10.93px] font-[600] lg:leading-[13.23px] text-primary">
                      Get 20% off : Code : XYZ20
                    </p>
                    <div>
                      <IoCopyOutline className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <Button className="h-[18px] lg:h-[25px] flex items-center justify-center text-[7px] leading-[8px] lg:text-[10.93px] font-[800] lg:leading-[13.23px]">
                      Get the deal
                    </Button>
                  </div>
                </div>
              </div>
            </td>
            <td className="bg-[#FAFAFA] rounded-md p-2" rowSpan={1}>
              <div className="flex flex-col items-center justify-center">
                <p className="text-center text-[10.93px] font-[400] leading-[13.23px]">
                  Account Size
                </p>
                <p className="text-[7.77px] leading-[9.41px] lg:text-[10.93px] font-[600] lg:leading-[13.23px] text-center">
                  {companyData?.accountSize}
                </p>
              </div>
            </td>
            <td className="bg-[#FAFAFA] rounded-md p-2" rowSpan={4}>
              <div className="flex flex-col items-center justify-around">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-center text-[10.93px] font-[400] leading-[13.23px]">
                    Evaluation
                  </p>
                  <p className="text-[10.93px] font-[600] text-center leading-[13.23px]">
                    {companyData?.evaluationType}
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
          </tr>
          {/* <tr className="">
            <td className="bg-[#FAFAFA] rounded-md p-2">
              <div className="flex  items-center justify-center">
                <p className="text-center text-[10.93px] font-[400] leading-[13.23px]">
                  Max Drawdown
                </p>
                <p className="text-[10.93px] font-[400] text-center leading-[13.23px]">
                  {companyData?.maxDrawdown}%
                </p>
              </div>
            </td>
          </tr> */}
          <tr className="">
            <td className="bg-[#FAFAFA] rounded-md p-2" rowSpan={2}>
              <div className="flex flex-col items-center justify-center">
                <p className="text-[10.93px] font-[600] text-center leading-[13.23px]">
                  Actual Price
                </p>
                <p className="text-primary line-through text-center text-[7.77px] leading-[9.41px] lg:text-[10.93px] font-[600] lg:leading-[13.23px]">
                  {companyData?.actualPrice}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-[10.93px] font-[600] text-center leading-[13.23px]">
                  After discount
                </p>
                <p className="text-primary text-center line-through text-[10.93px] font-[400] leading-[13.23px]">
                  {companyData?.discountedPrice}
                </p>
              </div>
            </td>
          </tr>
          {/* <tr className="">
            <td className="bg-[#FAFAFA] rounded-md p-2" colSpan={3}>
              <div className="flex  items-center justify-center">
                <p className="text-center text-[10.93px] font-[400] leading-[13.23px]">
                  Profit target to drawdown Ratio{" "}
                  {companyData?.profitToDrawdownRatio}
                </p>
              </div>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyCard;
