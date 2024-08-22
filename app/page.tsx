import React from "react";
import Hero from "./homeComponents/Hero";
import { Slider } from "./homeComponents/Slider";
import CompaniesData from "./homeComponents/CompaniesData";

const Home = () => {
  return (
    <div>
      <Hero />
      <Slider />
      <CompaniesData />
    </div>
  );
};

export default Home;
