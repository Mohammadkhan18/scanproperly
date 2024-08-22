import React from "react";
import SharedHero from "@/app/components/shared/SharedHero";

const heroData = {
  title: "Best Sellers",
  subtitle: "Discover the firms traders are choosing now",
  tabs: [{ tab: "All" }, { tab: "Crypto" }, { tab: "Futures" }],
};
const ExclusiveOffer = () => {
  return (
    <div>
      <SharedHero data={heroData} />
    </div>
  );
};

export default ExclusiveOffer;
