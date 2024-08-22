import React from "react";
import { Input } from "../ui/input";
import { FiSearch } from "react-icons/fi";

const SearchInput = () => {
  return (
    <div className="relative w-full">
      <Input
        type="text"
        className="px-[40px] h-[60px] rounded-[50px] bg-white border-0 outline-none active:outline-0 focus:outline-0 text-[16px] font-[400] leading-[20px]"
        placeholder="Enter Frim or Challenge"
      />
      <FiSearch className="absolute top-[50%] translate-y-[-50%] text-[20px] right-[40px]" />
    </div>
  );
};

export default SearchInput;
