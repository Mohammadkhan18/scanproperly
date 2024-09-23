import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import React from "react";

// Define types for the data structure
type ListItem = {
  title: string;
};

type DataItem = {
  listData: ListItem[];
};

const data: DataItem[] = [
  {
    listData: [
      { title: "Ability Challenge" },
      { title: "Challenge" },
      { title: "Verification" },
      { title: "Live Account" },
    ],
  },
  {
    listData: [
      { title: "select field" },
      { title: "Account" },
      { title: "Unlimited" },
      { title: "Unlimited" },
    ],
  },
  {
    listData: [
      { title: "Min Trading Time" },
      { title: "4 Days" },
      { title: "4 Days" },
      { title: "4 Days" },
    ],
  },
  {
    listData: [
      { title: "Max Daily Drawdown" },
      { title: "15% Max Loss Limit $204,000" },
      { title: "15% Max Loss Limit $204,000" },
      { title: "15% Max Loss Limit $204,000" },
    ],
  },
  {
    listData: [
      { title: "Target" },
      { title: "10%" },
      { title: "10%" },
      { title: "Live Account" },
    ],
  },
  {
    listData: [
      { title: "Profit Share" },
      { title: "" },
      { title: "" },
      { title: "upto 85%" },
    ],
  },
];

const TableCard = () => {
  return (
    <div
      className=" p-5 space-y-5 my-20 rounded-[10px] bg-grayBackground"
      style={{ boxShadow: "0 0 30px 0px var(--primary)" }}
    >
      {data.map((data, index: number) => (
        <div className="grid grid-cols-4 gap-10 ">
          {data.listData.map((li, innerIndex: number) => (
            <>
              {index !== 0 && innerIndex === 0 ? (
                <div className="bg-white rounded-[4px] text-center font-[600] text-[9px] leading-[11px]">
                  <Select>
                    <SelectTrigger className=" focus:ring-0 focus:ring-ring focus:ring-offset-0 border-0 w-[100%] bg-white rounded-[4px] text-center font-[600] text-[9px] leading-[11px] ">
                      <SelectValue placeholder={li.title} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              ) : (
                <div className="bg-white rounded-[4px] flex items-center justify-center py-2">
                  <p className="text-center font-[600] text-[9px] leading-[11px] ">
                    {li.title}
                  </p>
                </div>
              )}
            </>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TableCard;
