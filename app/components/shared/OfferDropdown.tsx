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
      <div className=" flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-0 justify-between bg-grayBackground p-3 z-[1]">
        <div className=" flex flex-col md:flex-row gap-3 md:gap-5 md:items-center">
          <div className=" flex gap-3 md:gap-5 ">
            <NumberBadge />
            <div className="h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] md:h-[80px] md:w-[80px]  lg:h-[112px] lg:w-[112px] rounded-full">
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
          </div>
          <div>
            <h3 className="font-[600] text-[10px] leading-[15px]  sm:text-[24px] sm:leading-[40px]  md:font-[600] md:text-[32px] md:leading-[50px]">
              The 5%ers
            </h3>
            <div className="flex gap-10">
              <Review
                percent={"fill"}
                data={{ review: "Goolge Review", rating: "2" }}
              />
              <Review
                percent={"fill"}
                data={{ review: "Trust Polit Review", rating: "5" }}
              />
            </div>
          </div>
        </div>
        <div ref={dropdownRef}>
          <div
            className="cursor-pointer flex items-center justify-center gap-2  bg-primary rounded-md text-white px-1 py-2 md:px-3  md:py-4 lg:px-6 font-[600] text-[6px] leading-[11px] sm:text-[12px] sm:leading-[24px] lg:text-[16px] lg:leading-[24px]"
            onClick={handleToggleModal}
          >
            <FaAngleDown className="" />{" "}
            <span className="">Select Best Offer</span>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-[100%] w-full flex items-center justify-center z-[1000] "
        >
          <div className=" lg:px-12 lg:py-16 border-[7.5px] border-white bg-grayBackground min-h-[100px] w-[97%] flex flex-col justify-center gap-10 shadow-xl">
            {[1, 2]?.map((data: any) => (
              <div className="flex flex-col xl:flex-row items-start gap-5 xl:items-center h-full xl:justify-between">
                <div>
                  <h3 className="font-[600] text-[10px] leading-[15px]  sm:text-[24px] sm:leading-[40px]  md:text-[32px] md:leading-[50px]">
                    Ability Challenge
                  </h3>
                </div>
                <div className="w-full flex-1 flex flex-col md:flex-row gap-3 md:gap-10 xl:gap-20">
                  <h3 className="flex-1 font-[600] text-[10px] leading-[15px]  sm:text-[24px] sm:leading-[40px]   md:text-[32px] md:leading-[50px]">
                    15% off
                  </h3>
                  <div className="flex-1 flex items-center gap-3 text-white">
                    <div className="flex items-center gap-1">
                      <div className="px-[10px] py-2 sm:px-[20px] sm:py-3 rounded-l-[10px] bg-primary">
                        <p className="font-[600]  text-[8px] leading-[15px]  sm:text-[12px] sm:leading-[20px]   md:text-[16px] md:leading-[24px]">
                          Code
                        </p>
                      </div>
                      <div className="px-[10px] py-2 sm:px-[20px] sm:py-3  rounded-r-[10px] bg-primary">
                        <p className="font-[600]  text-[8px] leading-[15px]  sm:text-[12px] sm:leading-[20px]   md:text-[16px] md:leading-[24px] ">
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
                      className="h-[25px] w-[25px]  sm:h-[40px] sm:w-[40px] lg:h-[50px] lg:w-[50px]"
                    />
                  </div>
                  <div className="flex-1 flex md:justify-end">
                    <div className="flex items-center justify-center gap-2  bg-primary rounded-md text-white px-1 py-2 md:px-3  md:py-4 lg:px-6 font-[600] text-[6px] leading-[11px] sm:text-[12px] sm:leading-[24px] ">
                      Go to deal
                    </div>
                  </div>
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
