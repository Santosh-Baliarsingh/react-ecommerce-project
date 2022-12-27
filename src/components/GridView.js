import React from "react";
import ProductPage from "./ProductPage";

export default function GridView({ products }) {
  console.log(products);
  return (
    <>
      <div className="container">
        <div className="row m-4">
          {products.map((currentElement) => (
            <ProductPage key={currentElement.id} {...currentElement} />
          ))}
        </div>
      </div>
    </>
  );
}
