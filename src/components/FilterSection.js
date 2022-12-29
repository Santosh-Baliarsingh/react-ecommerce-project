import React from "react";
import { useFilterContext } from "../context/FilterContext";

export default function FilterSection() {
  const {
    filters: { text },
    all_products,
    updateFilter,
  } = useFilterContext();

  // Get Unique Data of Each field
  const getUniqueData = (data, property) => {
    let newValue = data.map((currentElement) => {
      return currentElement[property];
    });
    // console.log(newValue);
    return (newValue = ["all", ...new Set(newValue)]);
    // console.log(newValue);
  };

  // Category Data
  const categoryData = getUniqueData(all_products, "category");
  // Company Data
  const companyData = getUniqueData(all_products, "company");
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
      <div className="mt-5">
        <h4>Category</h4>
        <div className="d-flex flex-column">
          {categoryData.map((currentElement, index) => (
            <button
              key={index}
              className="btn text-start border-0 text-capitalize fw-bold m-1"
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
      <div className="mt-2">
        <h4>Company</h4>
        <div>
          <select
            onClick={updateFilter}
            className="form-select fw-bold text-capitalize"
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
    </>
  );
}
