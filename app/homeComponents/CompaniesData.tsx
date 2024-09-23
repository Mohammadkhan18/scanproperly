"use client";

import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import CompanyCard from "../components/shared/CompanyCard";
import SearchInput from "../components/shared/SearchInput";
import { Button } from "../components/ui/button";
import { IoOptionsOutline } from "react-icons/io5";
import { useFetchCompany } from "../(admin)/api/api-queries";
import Loader from "../components/shared/Loader";

const title = [
  { title: "Exclusive offers" },
  { title: "Premium Brand" },
  { title: "Oldest Prop Firm" },
  { title: "Top Review Firm" },
  { title: "Top Review Firm" },
  { title: "Fast Payout" },
  { title: "High Profit - Sharing" },
  { title: "Account Size" },
];

const accordianData = [
  {
    title: "Select one or multiple firms:",
    listData: [
      { text: "Alpha Capital Group" },
      { text: "AquaFunded" },
      { text: "Audacity Capital" },
      { text: "Blue Guardian" },
      { text: "Breakout" },
      { text: "BrightFunded" },
      { text: "City Traders Imperium" },
      { text: "Crypto Fund Trader" },
      { text: "E8 Markets" },
      { text: "FTMO" },
      { text: "FXIFY" },
      { text: "Finotive Funding" },
      { text: "For Traders" },
      { text: "Funded Trading Plus" },
      { text: "FundedNext" },
      { text: "Funding Pips" },
      { text: "Funding Traders" },
      { text: "Glow Node" },
      { text: "Goat Funded Trader" },
      { text: "Instant Funding" },
      { text: "Lark Funding" },
      { text: "MPFunds" },
      { text: "Maven" },
      { text: "Ment Funding" },
      { text: "My Funded FX" },
      { text: "Nordic Funder" },
      { text: "The 5%ers" },
      { text: "The Trading Pit" },
      { text: "Traddoo" },
    ],
  },
  {
    title: "Select Instruments:",
    listData: [
      { text: "Alpha Capital Group" },
      { text: "Forex" },
      { text: "Indices" },
      { text: "Commodities" },
      { text: "Crypto" },
    ],
  },
];

export const Search = () => {
  return (
    <div className="flex gap-10">
      <SearchInput />

      <Button className="px-[16px]  py-[20px] lg:px-[24px]  lg:py-[30px] flex items-center rounded-[10px] justify-center gap-2 text-white text-[16px] font-[600] leading-[20px]">
        {" "}
        <IoOptionsOutline className="text-[30px]" />
        <p className="hidden md:block">More options</p>
      </Button>
    </div>
  );
};

const CompaniesData = () => {
  const { data, isLoading } = useFetchCompany();

  return (
    <div className="container mx-auto  px-4 py-[12px] lg:px-14 lg:py-[24px] space-y-5">
      {/* ============ filters =========== */}
      <div className=" items-center justify-between hidden mc:flex">
        {title?.map((data: { title: string }, index: number) => (
          <div key={index} className="px-[10px] py-[6px] bg-white">
            {data?.title}
          </div>
        ))}
      </div>

      {/*=============== search input field ============== */}
      <Search />

      {/* ========================== */}
      <div className="flex  gap-5 ">
        <div className="bg-white rounded-[8px] p-4 hidden lg:block">
          {accordianData?.map(
            (
              data: { title: string; listData: { text: string }[] },
              index: number
            ) => (
              <Accordion
                key={index}
                type="single"
                collapsible
                defaultChecked={true}
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>{data?.title}</AccordionTrigger>
                  {data?.listData?.map((list: { text: string }) => (
                    <AccordionContent>{list?.text}</AccordionContent>
                  ))}
                </AccordionItem>
              </Accordion>
            )
          )}

          {/* <MultiRange /> */}
        </div>
        {isLoading ? (
          <div className="w-full h-[40vh] flex items-center justify-center">
            <Loader />
          </div>
        ) : (
          <div className="flex-1 bg-white rounded-[8px]">
            {data?.data?.data?.map((company: any, index: number) => (
              <CompanyCard key={company?.id} companyData={company} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CompaniesData;
