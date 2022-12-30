import React from "react";
import { useFilterContext } from "../context/FilterContext";
import { GiCheckMark } from "react-icons/gi";
import FormatPrice from "../helpers/FormatPrice";

export default function FilterSection() {
  const {
    filters: { text, colors, price, maxPrice, minPrice },
    all_products,
    updateFilter,
    clearFilters
  } = useFilterContext();

  // Get Unique Data of Each field
  const getUniqueData = (data, property) => {
    let newValue = data.map((currentElement) => {
      return currentElement[property];
    });

    // get unique Colors
    if (property === "colors") {
      newValue = newValue.flat();
    }
    return (newValue = ["all", ...new Set(newValue)]);
  };

  // Category Data
  const categoryData = getUniqueData(all_products, "category");
  // Company Data
  const companyData = getUniqueData(all_products, "company");

  // Colors Data
  const colorsData = getUniqueData(all_products, "colors");
  // console.log('color',colorsData);
  return (
    <>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Search Products"
            name="text"
            value={text}
            onChange={updateFilter}
            className="form-control"
          />
        </form>
      </div>
      {/* Category Section */}
      <div className="mt-3">
        <h4>Category</h4>
        <div className="d-flex flex-column">
          {categoryData.map((currentElement, index) => (
            <button
              key={index}
              className="btn text-start border-0 text-capitalize fw-bold "
              type="button"
              name="category"
              value={currentElement}
              onClick={updateFilter}
            >
              {currentElement}
            </button>
          ))}
        </div>
      </div>
      {/* Company Section */}
      <div className="mt-2">
        <h4>Company</h4>
        <div>
          <select
            onClick={updateFilter}
            className="form-select fw-bold text-capitalize w-75"
            id="company"
            name="company"
          >
            {companyData.map((currentElement, index) => (
              <option key={index} value={currentElement} name="company">
                {currentElement}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Colors Section */}
      <div className="mt-3">
        <h4>Colors</h4>
        {colorsData.map((currentColor, index) => {
          if (currentColor === "all") {
            return (
              <button
                key={index}
                type="button"
                name="colors"
                className="text-dark btn text-capitalize rounded-pill bg-warning fw-bold px-2"
                value={currentColor}
                onClick={updateFilter}
              >
                all
              </button>
            );
          }
          return (
            <button
              key={index}
              type="button"
              name="colors"
              value={currentColor}
              className={
                colors === currentColor
                  ? "btn rounded-pill mx-1 active border-0 "
                  : "btn rounded-pill mx-1 p-3"
              }
              style={{ backgroundColor: currentColor }}
              onClick={updateFilter}
            >
              {colors === currentColor ? (
                <GiCheckMark className="text-light" />
              ) : null}
            </button>
          );
        })}
      </div>
      {/* Price Range Section */}
      <div className="mt-3">
        <h4>Price</h4>

        <label htmlFor="customRange1" className="form-label">
          <FormatPrice price={price} />
        </label>
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          name="price"
          value={price}
          onChange={updateFilter}
          className="form-range"
          id="customRange1"
        />
      </div>
      {/* Clear Filter Button */}
      <div className="mt-3">
        <button onClick={clearFilters} className="btn btn-outline-danger">
          Clear Filter
        </button>
      </div>
    </>
  );
}
