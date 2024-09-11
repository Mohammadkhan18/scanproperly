import React from "react";
import Image from "next/image";

import { Button } from "@/app/components/ui/button";
import twitterIcon from "../../../public/twitter.svg";
import intagramIcon from "../../../public/intagram.svg";
import youtubeIcon from "../../../public/youtube.svg";
import eng from "../../../public/eng-flag.svg";
import hameburger from "../../../public/hameburger.svg";
import NavbarTab from "./NavbarTab";
import logo from "../../../public/logo.svg";
import start from "../../../public/star.svg";
import { DropdownMenuTrigger } from "../ui/dropdown-menu";
import MobDropdownNav from "./MobDropdownNav";

const Navbar = () => {
  return (
    <div className="container mx-auto px-4 sm:px-14 ">
      {" "}
      <div className="flex item-center justify-between py-[16px]">
        <div className="flex items-center gap-[8px]">
          <Image
            src={logo}
            alt="Logo"
            quality={100}
            height={53.33}
            width={152.44}
          />
          <div className="flex items-center justify-between  p-[8px]  rounded-[32px] bg-[#353535]">
            <Image
              src={start}
              alt="Review"
              quality={100}
              height={16}
              width={16}
            />
            <p className="text-[13px] text-white">2.9</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-[16px] ">
          <div className="flex items-center gap-[4px] lg:gap-[8px]">
            <div>
              <Image
                src={twitterIcon}
                alt="twitter"
                quality={100}
                className="h-[20px] lg:h-[24px]"
              />
            </div>
            <div>
              <Image
                src={intagramIcon}
                alt="twitter"
                quality={100}
                className="h-[20px] lg:h-[24px]"
              />
            </div>
            <div>
              <Image
                src={youtubeIcon}
                alt="twitter"
                quality={100}
                className="h-[20px] lg:h-[24px]"
              />
            </div>
          </div>

          <div className="flex items-center gap-[4px] ">
            <div>
              <Image src={eng} alt="eng" quality={100} height={16} />
            </div>
            <p className="text-[14px] font-semibold mb-0">EN</p>
          </div>
          <div className="flex itams-center gap-[4px] lg:gap-[8px]">
            <Button className="text-[12xp] lg:text-[16px] text-white px-2 py-1 lg:px-[8px] ">
              Login
            </Button>
            <Button className="text-[12xp] lg:text-[16px] text-white px-2 py-1 lg:px-[8px] ">
              Signup
            </Button>
          </div>
          <div className="bg-white rounded-md px-4 py-3">
            <Image
              src={hameburger}
              alt="Hameburger"
              height={18}
              className="h-[14px] lg:h-[18px]"
            />
          </div>
        </div>

        <div className="flex items-center justify-center sm:hidden bg-white rounded-md px-4 py-3">
          <MobDropdownNav>
            <DropdownMenuTrigger asChild>
              <Image
                src={hameburger}
                alt="Hameburger"
                height={18}
                className="h-[14px] lg:h-[18px]"
              />
            </DropdownMenuTrigger>
          </MobDropdownNav>
        </div>
      </div>
      {/* ===================== navbar tabs ====================== */}
      <NavbarTab />
    </div>
  );
};

export default Navbar;
