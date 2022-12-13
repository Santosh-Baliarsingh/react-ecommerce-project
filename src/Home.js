import React from "react";
import FeatureProducts from "./components/FeatureProducts";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

export default function Home() {

  const data = {

    name : "Capital Store",
  };
  return (
    <>
    <HeroSection myData={data}/>
    <FeatureProducts/>
    <Services/>
    <Trusted/>
    </>
  );
}
