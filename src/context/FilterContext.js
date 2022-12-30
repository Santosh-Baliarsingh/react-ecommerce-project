import { useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/FilterReducer";

const { createContext } = require("react");

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "highest",
  filters: {
    text: "",
    category : "all",
    company : "all",
    colors : "all",
    maxPrice : 0,
    price : 0,
    minPrice : 0,
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  //   Set Grid View
  const setGridView = () => {
    return dispatch({ type: "SET_GRIDVIEW" });
  };

  //   Set List View
  const setListView = () => {
    return dispatch({ type: "SET_LISTVIEW" });
  };

  // Sorting functionality
  const sorting = (event) => {
    let userValue = event.target.value;
    return dispatch({ type: "DO_SORTING", payload: userValue });
  };

  // Update Filter Value
  const updateFilter = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  // Clear Filter
  const clearFilters = () => {
    dispatch({type : "CLEAR_FILTERS"})
  }

  // Sorting Products
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sorting_value, products, state.filters]);

  
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, sorting, updateFilter , clearFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// Custom Hook
export const useFilterContext = () => {
  return useContext(FilterContext);
};
