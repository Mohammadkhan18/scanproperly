import React from "react";
import { Input } from "../components/ui/input";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import newsIcon from "@/public/subscribeIcon/news.svg";
import launchIcon from "@/public/subscribeIcon/launch.svg";
import giveawayIcon from "@/public/subscribeIcon/giveaway.svg";
import offerIcon from "@/public/subscribeIcon/offer.svg";

const Subscribe = () => {
  return (
    <div className="container mx-auto  px-4 py-[12px] lg:px-14 lg:py-[24px] my-5 lg:my-10">
      <h1
        className={`text-[20px] font-[600] leading-[25px] sm:text-[28px]  sm:leading-[35px] lg:text-[40px]  lg:leading-[50px] text-center `}
      >
        Subscribe To Stay Updated
      </h1>

      <div className="bg-white rounded-[20px] px-5 py-5 lg:px-10 lg:py-10 mt-10">
        <div className="h-[50px] sm:h-[60px] lg:h-[88px] relative">
          <Input
            type="email"
            placeholder="Email Address"
            className="bg-grayBackground rounded-[60px] border-0 px-3 sm:px-5 lg:px-10 h-full font-[400] text-[16px] leading-[24px] sm:text-[20px] sm:leading-[28px] lg:text-[24px] lg:leading-[32px] z-[1]"
          />
          <Button className="absolute top-0 right-0 rounded-[60px] h-full px-3 sm:px-6 lg:px-12 z-[10] font-[400] text-[16px] lg:text-[24px] leading-[32px]">
            Subscribe
          </Button>
        </div>
        <div className="grid  sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-7">
          <Button
            className="flex items-center gap-2 px-[10px] py-2 bg-grayBackground hover:bg-white"
            variant={"outline"}
          >
            <Image
              src={newsIcon}
              alt="News"
              quality={100}
              height={30}
              width={24}
            />
            <p>The Latest Prop News</p>
          </Button>
          <Button
            className="flex items-center gap-2 px-[10px] py-2 bg-grayBackground hover:bg-white"
            variant={"outline"}
          >
            <Image
              src={launchIcon}
              alt="Launch Details"
              quality={100}
              height={30}
              width={24}
            />{" "}
            <p> Launch Details</p>
          </Button>{" "}
          <Button
            className="flex items-center gap-2 px-[10px] py-2 bg-grayBackground hover:bg-white"
            variant={"outline"}
          >
            <Image
              src={giveawayIcon}
              alt="Giveaway Info"
              quality={100}
              height={30}
              width={24}
            />{" "}
            <p> Giveaway Info</p>
          </Button>{" "}
          <Button
            className="flex items-center gap-2 px-[10px] py-2 bg-grayBackground hover:bg-white"
            variant={"outline"}
          >
            <Image
              src={offerIcon}
              alt="Best Offer"
              quality={100}
              height={30}
              width={24}
            />{" "}
            <p>The Best Offers</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
