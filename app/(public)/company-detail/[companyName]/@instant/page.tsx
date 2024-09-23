import React from "react";
import instantLogo from "../../../../../public/instantFunding-logo.svg";
import Image from "next/image";
import { Progress } from "../../../../components/ui/progress";
import { Button } from "../../../../components/ui/button";

export const ProgressBars = () => {
  return (
    <div className="space-y-3 my-5">
      <Progress value={80} />
      <Progress value={60} />
      <Progress value={40} />
      <Progress value={20} />
    </div>
  );
};

const Detail = () => {
  return (
    <div className="space-y-5 flex flex-col border-y border-y-gray-700 py-7 ">
      <div className="flex gap-2 justify-between ">
        <div className="flex-1 flex flex-col gap-2">
          <p className="font-[500] text-[10px] leading-[12px]">CEO</p>
          <p className="font-[500] text-[10px] leading-[12px]">LEWIS</p>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <p className="font-[500] text-[10px] leading-[12px]">ESTABLISHED</p>
          <p className="font-[500] text-[10px] leading-[12px]">JUNE 2022</p>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <p className="font-[500] text-[10px] leading-[12px]">COUNTRY</p>
          <p className="font-[500] text-[10px] leading-[12px]">UK</p>
        </div>
      </div>

      <div className="flex gap-2 justify-between ">
        <div className="flex-1 flex flex-col gap-2">
          <p className="font-[500] text-[10px] leading-[12px]">BROKER</p>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <p className="font-[500] text-[10px] leading-[12px]">PLATFORM</p>
          <p className="font-[600] text-[10px] leading-[12px]">
            DX trade,C trader, MT5
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <p className="font-[500] text-[10px] leading-[12px]">TRUST PILOT</p>
          <p className="font-[500] text-[10px] leading-[12px]">4.6</p>
        </div>
      </div>

      <div className="flex gap-2 justify-between ">
        <div className="flex-1 flex flex-col gap-2">
          <p className="font-[500] text-[10px] leading-[12px]">
            PAYMENT METHOD
          </p>
          <p className="font-[600] text-[10px] leading-[12px]">
            Crypto currency,Credit/Debit cards
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <p className="font-[500] text-[10px] leading-[12px]">PAYOUT METHOD</p>
          <p className="font-[600] text-[10px] leading-[12px]">
            Crypto currency(via Rise),banks transfer via (rise)
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-2"></div>
      </div>
    </div>
  );
};

const Instrument = () => {
  return (
    <div className="flex items-center justify-between gap-3 border-y border-y-gray-700 py-7 my-7">
      <div className="space-y-3">
        <h5 className="font-[500] text-[10px] leading-[12px]">INSTRUMENTS</h5>
        <p className="font-[600] text-[11px] leading-[13px]">
          You can trade the following assets:
        </p>

        <div className="font-[600] text-[11px] leading-[13px] flex items-center gap-2">
          <div className="h-[4px] w-[4px] bg-primary rounded-full" />
          <p>FX(forex)</p>
        </div>
        <div className="font-[600] text-[11px] leading-[13px] flex items-center gap-2">
          <div className="h-[4px] w-[4px] bg-primary rounded-full" />
          <p>Commodities</p>
        </div>
        <div className="font-[600] text-[11px] leading-[13px] flex items-center gap-2">
          <div className="h-[4px] w-[4px] bg-primary rounded-full" />
          <p>Indices</p>
        </div>
        <div className="font-[600] text-[11px] leading-[13px] flex items-center gap-2">
          <div className="h-[4px] w-[4px] bg-primary rounded-full" />
          <p>Crypto</p>
        </div>

        <p className="font-[600] text-[11px] leading-[13px]">
          For a full list of tradeable
          <br /> instruments visit;
          <span className="text-primary">Here</span>
        </p>
      </div>
      <div className="space-y-3">
        <h5 className="font-[500] text-[10px] leading-[12px]">INSTRUMENTS</h5>

        <div className="font-[600] text-[11px] leading-[13px] flex items-center gap-2">
          <p>Leverage:</p>
        </div>
        <div className="font-[600] text-[11px] leading-[13px] flex items-center gap-2">
          <p>FX:1:100 </p>
        </div>
        <div className="font-[600] text-[11px] leading-[13px] flex items-center gap-2">
          <p>Commodities 1:20</p>
        </div>
        <div className="font-[600] text-[11px] leading-[13px] flex items-center gap-2">
          <p>Indices 1:20</p>
        </div>
        <div className="font-[600] text-[11px] leading-[13px] flex items-center gap-2">
          <p>Crypto 1:20</p>
        </div>
        <div className="font-[600] text-[11px] leading-[13px] flex items-center gap-2">
          <div className="h-[4px] w-[4px] bg-primary rounded-full" />
          <p>Commission</p>
        </div>
      </div>
    </div>
  );
};

const Forix = () => {
  return (
    <div className="border-y border-y-gray-700 py-7 my-7">
      <div className="font-[400] text-[11px] leading-[21px] flex items-center gap-2">
        <div className="h-[4px] w-[4px] bg-black rounded-full" />
        <p className="font-[400] text-[11px] leading-[21px]">Forex</p>
      </div>
      <p className="font-[400] text-[11px] leading-[21px] ml-[12px]">
        All Pairs – $5{" "}
      </p>
      <p className="font-[400] text-[11px] leading-[21px] ml-[12px]">
        Per LotMetals/CommoditiesXAUUSD – $2
      </p>
      <p className="font-[400] text-[11px] leading-[21px] ml-[12px]">
        Per LotXAGUSD – $2
      </p>
      <p className="font-[400] text-[11px] leading-[21px] ml-[12px]">
        Per LotXAUEUR – Around $2
      </p>
      <p className="font-[400] text-[11px] leading-[21px] ml-[12px]">
        (This changes based on Interest rates/exchange rates on the EUR)UKOUSD –
        $2
      </p>
      <p className="font-[400] text-[11px] leading-[21px] ml-[12px]">
        USOUSD – $2
      </p>
      <p className="font-[400] text-[11px] leading-[21px] ml-[12px]">
        IndicesUSD Based Indices – $2
      </p>
    </div>
  );
};

const Instant = () => {
  return (
    <div className=" max-w-[342px]">
      {/* =========== header ======== */}
      <div className="flex  gap-10">
        <div className="bg-grayBackground rounded-md p-2">
          <Image
            src={instantLogo}
            alt="Instant funding"
            quality={100}
            // placeholder="blur"
            height={48}
            width={54}
          />
        </div>
        <div className="space-y-5">
          <h4 className="font-[600] text-[21px] leading-[13px]">
            Instant Funding
          </h4>
          <div className="flex items-end justify-between">
            <div className="bg-primary p-2 rounded-md">
              <p className="text-white font-[600] text-[14px] leading-[13px]">
                4.4
              </p>
            </div>
            <p className="font-[400] text-[14px] leading-[13px]">83 Reviews</p>
          </div>
        </div>
      </div>

      {/* ============ progress bars ============ */}
      <ProgressBars />

      {/* =========== detail ============ */}
      <Detail />

      {/* =========== instrument  =============*/}
      <Instrument />
      <Instrument />

      {/* =========== forix ============ */}
      <Forix />
      <Forix />

      <div className="flex items-center justify-between">
        <p className="font-[500] text-[9px] leading-[10px]">Commission</p>
        <Button>Payout time Reports</Button>
      </div>
    </div>
  );
};

export default Instant;
