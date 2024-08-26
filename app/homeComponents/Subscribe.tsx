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
    <div className="container mx-auto px-14 py-[24px] my-10">
      <h1 className={`text-[48px] font-[600] leading-[60px] text-center `}>
        Subscribe To Stay Updated
      </h1>

      <div className="bg-white rounded-[20px] px-10 py-10 mt-10">
        <div className="h-[88px] relative">
          <Input
            type="email"
            placeholder="Email Address"
            className="bg-grayBackground rounded-[60px] border-0 px-10 h-full font-[400] text-[24px] leading-[32px] z-[1]"
          />
          <Button className="absolute top-0 right-0 rounded-[60px] h-full px-12 z-[10] font-[400] text-[24px] leading-[32px]">
            Subscribe
          </Button>
        </div>
        <div className="flex items-center justify-around mt-7">
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
