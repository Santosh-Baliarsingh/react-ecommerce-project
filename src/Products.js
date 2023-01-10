import React from "react";
import FilterSection from "./components/FilterSection";
import Sort from "./components/Sort";
import ProductList from "./components/ProductList";

export default function Products() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 ">
            <FilterSection />
          </div>
          <div className="col-md-8 ">
            <div className="row">
              <Sort />
            </div>
            <div className="row">
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
