import React from "react";
import Hero from "./homeComponents/Hero";
import { Slider } from "./homeComponents/Slider";
import CompaniesData from "./homeComponents/CompaniesData";
import SharedHero from "@/app/components/shared/SharedHero";
import ExOffer from "./exclusive-offer/components/ExOffer";
import HowDoseItWork from "@/app/components/shared/HowDoseItWork";
import BstOffer from "./best-offer/bestOfferComponent/bstOffer";
import Testimonial from "./homeComponents/Testimonial";
import Subscribe from "./homeComponents/Subscribe";
import Blogs from "./blogs/page";

const exHeroData = {
  title: "Best Sellers",
  subtitle: "Discover the firms traders are choosing now",
  tabs: [{ tab: "All" }, { tab: "Crypto" }, { tab: "Futures" }],
};

const bestOfferHeroData = {
  title: "Best Sellers",
  subtitle: "Discover the firms traders are choosing now",
  tabs: [{ tab: "All" }, { tab: "Crypto" }, { tab: "Feature" }],
};

const Home = () => {
  return (
    <div>
      <Hero />
      <Slider />
      <CompaniesData />

      <div className="container mx-auto  px-14 py-[24px]">
        <SharedHero data={exHeroData} isGradeint={false} />
      </div>
      <ExOffer />
      <HowDoseItWork />

      <div className="container mx-auto  px-14 py-[24px]">
        <SharedHero data={bestOfferHeroData} isGradeint={false} />
      </div>
      <BstOffer />
      <Blogs />
      <Testimonial />

      <Subscribe />
    </div>
  );
};

export default Home;
