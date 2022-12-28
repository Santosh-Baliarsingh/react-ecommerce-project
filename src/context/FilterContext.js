import { useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/FilterReducer";

const { createContext } = require("react");

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
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
    return dispatch({ type: "DO_SORTING" , payload : userValue });
  };

  // Sorting Products based on dropdown value
  useEffect(() => {
    return dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sorting_value , products]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, sorting }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// Custom Hook
export const useFilterContext = () => {
  return useContext(FilterContext);
};
