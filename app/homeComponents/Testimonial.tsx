import React from "react";
import client from "@/public/tetimonialImage/client.svg";
import Image from "next/image";
import { MdStar } from "react-icons/md";

const Testimonial = () => {
  return (
    <div className=" container mx-auto px-14 py-[24px] my-20">
      <div className="relative bg-gradient rounded-[20px] p-[24px] ">
        <div className="absolute top-[-70px]">
          <Image
            src={client}
            alt="Client image"
            quality={100}
            width={446}
            height={552}
          />
        </div>
        <div className="relative flex justify-between w-full">
          {" "}
          <div className="flex-1 max-w-[446px] h-[100%]"></div>
          <div className="flex-1 space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h3 className="font-[500] text-[32px] leading-[32px] text-white">
                  Annie Marie
                </h3>
                <p className="font-[400] text-[20px] leading-[24px] text-white">
                  Annie Marie
                </p>
              </div>
              <div className="flex items-center gap-1 px-[14px] py-[10px] rounded-[40px] bg-white text-gradientColor1">
                <p>5.0</p> <MdStar className="text-primary text-[20px]" />
              </div>
            </div>
            <p className="font-[600] text-[20px] leading-[24px] text-white">
              America
            </p>
            <p className="font-[300] text-[20px] leading-[32px] text-white">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley Simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley
            </p>
            <div className="flex items-center gap-2">
              <p className="font-[500] text-[32px] leading-[32px] text-white">
                $5,000
              </p>
              <p className="font-[500] text-[20px] leading-[24px] text-white">
                Saved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
