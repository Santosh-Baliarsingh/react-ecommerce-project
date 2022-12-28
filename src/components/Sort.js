import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { useFilterContext } from "../context/FilterContext";

export default function Sort() {
  const { filter_products, grid_view, setGridView, setListView, sorting } =
    useFilterContext();
  return (
    <>
      <div className="container mb-3 d-flex justify-content-between align-item-center mx-2">
        {/* Grid and List Buttons */}
        <div>
          <button
            onClick={setGridView}
            className={
              grid_view
                ? "btn active btn-outline-dark "
                : "btn btn-outline-dark"
            }
          >
            <BsFillGridFill />
          </button>
          <button
            onClick={setListView}
            className={
              !grid_view
                ? "btn active btn-outline-dark ms-2"
                : "btn btn-outline-dark ms-2"
            }
          >
            <FaList />
          </button>
        </div>
        {/* Products */}
        <div>
          <p className="fw-bold">
            {`${filter_products.length}`} Products available
          </p>
        </div>
        {/* DropDown */}
        <div>
          <select
            onClick={sorting}
            className="form-select fw-bold"
            id="Sort"
            aria-label="Default select example"
          >
            <option value="lowest" select = "true">Price ( lowest )</option>
            <option value="highest">Price ( highest )</option>
            <option value="a-z">Name (a - z)</option>
            <option value="z-a">Name (z - a)</option>
          </select>
        </div>
      </div>
    </>
  );
}
