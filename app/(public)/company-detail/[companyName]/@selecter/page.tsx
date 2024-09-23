import React from "react";
import { ImClipboard } from "react-icons/im";

import { Button } from "../../../../components/ui/button";
import { companySelecterData } from "../../../../constant";
import { Input } from "../../../../components/ui/input";

const Selecter = () => {
  return (
    <div className="space-y-5">
      {companySelecterData?.map(
        (data: { title: string; btn: string[] }, index: number) => (
          <div key={index} className="flex items-center gap-5">
            <h3 className="text-[16px] font-[400] leading-[20px] w-[150px]">
              {data?.title}
            </h3>
            <div className="flex gap-[8px] mt-3">
              {data?.btn?.map((bt: any, index: number) => (
                <Button
                  key={index}
                  className="bg-grayBackground text-black rounded-[13px]"
                >
                  <p>{bt}</p>
                </Button>
              ))}
            </div>
          </div>
        )
      )}
      {/* ============== get name and email form ============= */}

      <div className="flex items-center justify-between gap-10 mt-[50px]">
        <div className="flex-1 flex items-center gap-5">
          <div className="w-full max-w-[150px]">
            {" "}
            <label htmlFor="email">Email Address</label>
          </div>
          <Input
            type="text"
            id="email"
            className="border-none rounded-[13px] bg-grayBackground"
            placeholder="Enter your email address"
          />
        </div>

        <div className="flex-1 flex items-center gap-5">
          <div className="w-full max-w-[150px]">
            <label htmlFor="name">Name</label>
          </div>

          <Input
            type="text"
            id="name"
            className="border-none rounded-[13px] bg-grayBackground"
            placeholder="Enter your full name"
          />
        </div>
      </div>

      <div className="flex items-center justify-around py-10">
        <div className="flex items-center gap-5 w-[300px] py-5">
          <div>
            <ImClipboard className="text-[25px] " />
          </div>
          <p className="text-[10px] font-[400] leading-[21px]">
            I would like to recieve exclusive offers and valuable updates
          </p>
        </div>
        <div className="flex items-center gap-5 w-[300px] py-5">
          <div>
            <ImClipboard className="text-[25px]" />
          </div>
          <p className="text-[10px] font-[400] leading-[21px]">
            I would like to recieve exclusive offers and valuable updates
          </p>
        </div>
      </div>
    </div>
  );
};

export default Selecter;
