import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/ProductReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({ children }) => {
  // Initial State
  const initialstate = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading : false,
    singleProduct : {}
  };

  // UseReducer Hook
  const [state, dispatch] = useReducer(reducer, initialstate);

  // getProducts Function for Fetching Api Data
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      console.log(res);
      const products = await res.data;
      console.log(products);
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // Api Call For Sngle Products
  const getSingleProduct = async (url) => {
    dispatch({type  : "SET_SINGLE_LOADING"});
    try {
      const res = await axios.get(url);
      console.log(res);
      const Singleproduct = await res.data;
      console.log(Singleproduct);
      dispatch({type : "SET_SINGLE_DATA" , payload : Singleproduct})
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  // UseEffect Hook
  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state , getSingleProduct }}>{children}</AppContext.Provider>
  );
};

// Custom Hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
