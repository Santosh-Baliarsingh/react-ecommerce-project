import React from "react";
import HeroSection from "./components/HeroSection";

export default function Home() {

  const data = {

    name : "Capital Store",
  };
  return (
    <>
    <HeroSection myData={data}/>
    </>
  );
}
