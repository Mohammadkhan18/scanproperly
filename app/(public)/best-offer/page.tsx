import React from "react";
import SharedHero from "@/app/components/shared/SharedHero";
import BstOffer from "./bestOfferComponent/bstOffer";
import HowDoseItWork from "./bestOfferComponent/HowDoseItWork";

const heroData = {
  title: "Best Sellers",
  subtitle: "Discover the firms traders are choosing now",
  tabs: [{ tab: "All" }, { tab: "Crypto" }, { tab: "Feature" }],
};
const BestSeller = () => {
  return (
    <div>
      <div className="container mx-auto  px-14 py-[24px]">
        <SharedHero data={heroData} isGradeint={true} />
      </div>
      <BstOffer />
      <HowDoseItWork />
    </div>
  );
};

export default BestSeller;