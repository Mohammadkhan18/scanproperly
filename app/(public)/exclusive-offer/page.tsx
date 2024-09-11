import React from "react";
import SharedHero from "@/app/components/shared/SharedHero";
import ExOffer from "./components/ExOffer";
import HowDoseItWork from "@/app/components/shared/HowDoseItWork";

const heroData = {
  title: "Best Sellers",
  subtitle: "Discover the firms traders are choosing now",
  tabs: [{ tab: "All" }, { tab: "Crypto" }, { tab: "Futures" }],
};
const ExclusiveOffer = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-[12px]  lg:px-14 lg:py-[24px]">
        <SharedHero data={heroData} isGradeint={true} />
      </div>
      <ExOffer />
      <HowDoseItWork />
    </div>
  );
};

export default ExclusiveOffer;
