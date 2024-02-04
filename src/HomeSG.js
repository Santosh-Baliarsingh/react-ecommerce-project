import React from "react";
import FeatureProducts from "./components/FeatureProducts";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const storeData = {
    name: "Capital Store",
  };

  return (
    <>
      {renderHeroSection(storeData)}
      <FeatureProducts />
      <Services />
      <Trusted />
    </>
  );
};

const renderHeroSection = (data) => <HeroSection myData={data} />;

export default Home;
