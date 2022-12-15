import React from "react";
import { useProductContext } from "../context/ProductContext";
import { Bars } from "react-loader-spinner";
import ProductPage from "./ProductPage";

export default function FeatureProducts() {
  const { isLoading, featureProducts } = useProductContext();
  console.log(featureProducts);
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <Bars height="50" width="80" color="black" ariaLabel="loading" />
      </div>
    );
  }
  return (
    <>
      <div className="container mt-5">
        <h6>Check Now</h6>
        <h3>Our Feature Services</h3>

        <div className="row">
          {featureProducts.map((ele) => {
            return <ProductPage key={ele.id} {...ele} />;
          })}
        </div>
      </div>
    </>
  );
}
