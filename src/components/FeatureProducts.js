import React from "react";
import { useProductContext } from "../context/ProductContext";
import ProductPage from "./ProductPage";

export default function FeatureProducts() {
  const { featureProducts } = useProductContext();
  console.log(featureProducts);
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
