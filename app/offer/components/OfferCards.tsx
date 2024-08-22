import OfferDropdown from "@/app/components/shared/OfferDropdown";
import React from "react";

const OfferCards = () => {
  return (
    <div className="space-y-5">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((data: number) => (
        <OfferDropdown />
      ))}
    </div>
  );
};

export default OfferCards;
