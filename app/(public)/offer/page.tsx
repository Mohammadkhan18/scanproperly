import React from "react";
import SharedHero from "@/app/components/shared/SharedHero";
import OfferCards from "./components/OfferCards";
import HowDoseItWork from "@/app/components/shared/HowDoseItWork";

const heroData = {
  title: "Exclusive Offers",
  subtitle: "Better offers than you'll find anywhere else",
  tabs: [
    { tab: "Ability Program Offers" },
    { tab: "Live/ Instant Account Offers" },
  ],
};

const Offer = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-[12px]  lg:px-14 lg:py-[24px]">
        <SharedHero data={heroData} isGradeint={true} />
      </div>
      <OfferCards />
      <HowDoseItWork />
    </div>
  );
};

export default Offer;
