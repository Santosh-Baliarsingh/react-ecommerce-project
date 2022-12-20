const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_API_DATA":
      const featureData = action.payload.filter((currentElement) => {
        return currentElement.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
        isError: false,
      };
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

      // Actions for Single Product Data
    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SET_SINGLE_DATA":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };
    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default ProductReducer;
