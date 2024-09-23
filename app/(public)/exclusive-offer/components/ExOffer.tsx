import OfferDropdown from "../../../components/shared/OfferDropdown";
import React from "react";

const ExOffer = () => {
  return (
    <div className=" container mx-auto   px-4 py-[12px] lg:px-14 lg:py-[24px] lg:my-7">
      <div className="bg-white p-[24px] space-y-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((data: number) => (
          <OfferDropdown key={data} />
        ))}
      </div>
    </div>
  );
};

export default ExOffer;
