import OfferDropdown from "@/app/components/shared/OfferDropdown";
import React from "react";

const OfferCards = () => {
  return (
    <div className="container mx-auto  px-14 py-[24px] my-7">
      <div className="bg-white p-[24px] space-y-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((data: number) => (
          <OfferDropdown key={data} />
        ))}
      </div>
    </div>
  );
};

export default OfferCards;
