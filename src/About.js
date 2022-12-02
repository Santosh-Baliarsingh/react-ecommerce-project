import React from "react";
import HeroSection from "./components/HeroSection";

export default function About() {

  const data = {

    name : "Capital Ecommerce",
  };
  return (
    <>
      <HeroSection myData={data}/>
    </>
  );
}
