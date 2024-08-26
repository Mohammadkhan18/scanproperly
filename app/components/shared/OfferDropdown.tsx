"use client";

import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
// import image from "@/public/bestOfferImages/percent.svg";
import imageUrl from "../../../public/bestOfferImages/percent.svg";
import Review from "./Review";
import { Button } from "@/app/components/ui/button";
import { FaAngleDown } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

import copy from "@/public/copy.svg";
import NumberBadge from "./NumberBadge";

const OfferDropdown = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const handleToggleModal = () => {
    setIsOpen((prev) => !isOpen);
  };

  const dropdownRef: any = useRef(null);

  useEffect(() => {
    const handleOutSideClick = (e: any) => {
      if (dropdownRef.current && !dropdownRef?.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutSideClick, true);
    return () => {
      document.removeEventListener("click", handleOutSideClick, true);
    };
  }, [dropdownRef]);

  return (
    <div className="relative  ">
      <div className=" flex items-center justify-between bg-grayBackground p-3 z-[1]">
        <div className=" flex gap-5 items-center">
          <NumberBadge />
          <div className="h-[112px] w-[112px] rounded-full">
            <Avatar className="">
              {/* <AvatarImage
                src={imageUrl}
                alt="Best offer"
                className="bg-[#04070E]"
              /> */}
              <AvatarFallback className="bg-[#04070E] text-white">
                BO
              </AvatarFallback>
            </Avatar>
          </div>
          <div>
            <h3 className="font-[600] text-[32px] leading-[50px]">The 5%ers</h3>
            <div className="flex gap-10">
              <Review percent={"fill"} />
              <Review percent={"fill"} />
            </div>
          </div>
        </div>
        <div ref={dropdownRef}>
          <div
            className="flex items-center  bg-primary rounded-md text-white pl-2 px-2"
            onClick={handleToggleModal}
          >
            <FaAngleDown className="text-[20px]" />{" "}
            <Button className="px-1 py-6">Select Best Offer</Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-[100%] w-full flex items-center justify-center z-[1000] "
        >
          <div className=" px-12 py-16 border-[7.5px] border-white bg-grayBackground min-h-[100px] w-[97%] flex flex-col justify-center gap-10 shadow-xl">
            {[1, 2]?.map((data: any) => (
              <div className="flex items-center h-full justify-between">
                <div>
                  <h3 className="font-[600] text-[24px] leading-[50px]">
                    Ability Challenge
                  </h3>
                </div>
                <div className="flex-1 flex items-center justify-end gap-20">
                  <h3 className="font-[600] text-[32px] leading-[50px]">
                    15% off
                  </h3>
                  <div className="flex items-center gap-3 text-white">
                    <div className="flex items-center gap-1">
                      <div className="px-[20px] py-3 rounded-l-[10px] bg-primary">
                        <p className="font-[600] text-[16px] leading-[24px]">
                          Code
                        </p>
                      </div>
                      <div className="px-[20px] py-3  rounded-r-[10px] bg-primary">
                        <p className="font-[600] text-[16px] leading-[24px]">
                          XYZ15
                        </p>
                      </div>
                    </div>
                    <Image
                      src={copy}
                      alt="Copy"
                      quality={100}
                      height={50}
                      width={45}
                    />
                  </div>
                  <Button className="px-5 py-6">Goto Deal</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OfferDropdown;
