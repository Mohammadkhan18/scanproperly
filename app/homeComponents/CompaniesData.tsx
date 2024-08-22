import React from "react";
import { Input } from "@/app/components/ui/input";
import { FiSearch } from "react-icons/fi";
import { IoOptionsOutline } from "react-icons/io5";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import CompanyCard from "@/app/components/shared/CompanyCard";
import MultiRange from "@/app/components/ui/multiRange/multiRange";
import SearchInput from "@/app/components/shared/SearchInput";

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
      <div className="cursor-pointer flex items-center rounded-[10px] justify-center gap-2 px-[24px]  py-[16px] bg-primary text-white text-[16px] font-[600] leading-[20px]">
        <IoOptionsOutline className="text-[30px]" />
        <p>More options</p>
      </div>
    </div>
  );
};

const CompaniesData = () => {
  return (
    <div className="container mx-auto px-14 py-[24px] space-y-5">
      {/* ============ filters =========== */}
      <div className="flex items-center justify-between">
        {title?.map((data: { title: string }) => (
          <div className="px-[10px] py-[6px] bg-white">{data?.title}</div>
        ))}
      </div>

      {/*=============== search input field ============== */}
      <Search />

      {/* ========================== */}
      <div className="flex  gap-5 ">
        <div className="bg-white rounded-[8px] p-4">
          {accordianData?.map(
            (data: { title: string; listData: { text: string }[] }) => (
              <Accordion type="single" collapsible>
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
        <div className="flex-1 bg-white rounded-[8px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <CompanyCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompaniesData;