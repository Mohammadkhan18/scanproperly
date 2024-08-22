import React from "react";
import SharedHero from "@/app/components/shared/SharedHero";
import OfferCards from "./components/OfferCards";

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
      <SharedHero data={heroData} />
      <OfferCards />
    </div>
  );
};

export default Offer;
