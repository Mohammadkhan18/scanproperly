import React from "react";
import client from "@/public/tetimonialImage/client.svg";
import Image from "next/image";
import { MdStar } from "react-icons/md";

const Testimonial = () => {
  return (
    <div className=" container mx-auto px-4 py-[12px] my-10 lg:px-14 lg:py-[24px] lg:my-20">
      <div className="relative bg-gradient rounded-[20px] p-[24px] ">
        <div className="absolute top-[-10%]  xl:top-[-70px] hidden xl:block">
          <Image
            src={client}
            alt="Client image"
            quality={100}
            className="h-[452px] xl:h-[552px] xl:w-[446px]"
          />
        </div>
        <div className="relative flex flex-col sm:flex-row items-center xl:items-start justify-between w-full">
          {" "}
          <div className="flex-1 max-w-[446px]  rounded-tl-[25px] rounded-tr-[40px]  rounded-br-[25px] rounded-bl-[40px] overflow-hidden">
            <Image
              src={client}
              alt="Client image"
              quality={100}
              className="h-[100%] w-[100%]  xl:hidden"
            />
          </div>
          <div className="flex-1 space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h3 className="font-[500] text-[16px] leading-[16px] md:text-[24px] md:leading-[24px] xl:text-[32px] xl:leading-[32px] text-white">
                  Annie Marie
                </h3>
                <p className="font-[400] text-[12px] leading-[16px] md:text-[16px] md:leading-[20px] xl:text-[20px] xl:leading-[32px] text-white">
                  Annie Marie
                </p>
              </div>
              <div className="flex items-center gap-1 px-[14px] py-[10px] rounded-[40px] bg-white text-gradientColor1">
                <p>5.0</p> <MdStar className="text-primary text-[20px]" />
              </div>
            </div>
            <p className="font-[600]  text-[12px] leading-[16px] md:text-[16px] md:leading-[20px] xl:text-[20px] xl:leading-[24px] text-white">
              America
            </p>
            <p className="font-[300] text-[12px] leading-[16px] lg:text-[18px] lg:leading-[24px] xl:text-[20px] xl:leading-[32px] text-white">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley Simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley
            </p>
            <div className="flex items-center gap-2">
              <p className="font-[500] text-[16px] leading-[16px] md:text-[24px] md:leading-[24px] xl:text-[32px] xl:leading-[32px] text-white">
                $5,000
              </p>
              <p className="font-[500] text-[12px] leading-[16px] md:text-[16px] md:leading-[20px] xl:text-[20px] xl:leading-[24px text-white">
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
