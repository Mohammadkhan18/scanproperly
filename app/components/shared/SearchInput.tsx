import React from "react";
import { Input } from "../ui/input";
import { FiSearch } from "react-icons/fi";

const SearchInput = () => {
  return (
    <div className="relative w-full">
      <Input
        type="text"
        className="px-[40px] sm:py-[10px] lg:py-[20px] h-full rounded-[50px] bg-white border-0 outline-none active:outline-0 focus:outline-0 font-[400] text-[8px]  leading-[10px] sm:text-[12px]  sm:leading-[15px] lg:text-[16px]  lg:leading-[20px]"
        placeholder="Enter Frim or Challenge"
      />
      <FiSearch className="absolute top-[50%] translate-y-[-50%] text-[10px] sm:text-[14px] lg:text-[20px] right-[40px]" />
    </div>
  );
};

export default SearchInput;
