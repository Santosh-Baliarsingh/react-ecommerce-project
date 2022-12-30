const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceRange = action.payload.map(
        (currentElement) => currentElement.price
      );
      let maxPrice = Math.max(...priceRange);
      console.log(maxPrice);
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filters, maxPrice: maxPrice, price: maxPrice },
      };

    case "SET_GRIDVIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LISTVIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "DO_SORTING":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;

      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "highest") {
          return b.price - a.price;
        }
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }
        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }
        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortData = tempSortProduct.sort(sortingProducts);
      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    // Filter Functionality Actions
    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];

      const { text, category, company, colors, price } = state.filters;

      if (text) {
        tempFilterProduct = tempFilterProduct.filter((currentElement) => {
          return currentElement.name.toLowerCase().includes(text);
        });
      }

      if (category !== "all") {
        tempFilterProduct = tempFilterProduct.filter((currentElement) => {
          return currentElement.category === category;
        });
      }

      if (company !== "all") {
        tempFilterProduct = tempFilterProduct.filter((currentElement) => {
          return currentElement.company === company;
        });
      }

      if (colors !== "all") {
        tempFilterProduct = tempFilterProduct.filter((currentElement) => {
          return currentElement.colors.includes(colors);
        });
      }

      if (price) {
        tempFilterProduct = tempFilterProduct.filter((currentElement) => {
          return currentElement.price <= price;
        });
      }
      return {
        ...state,
        filter_products: tempFilterProduct,
      };

      case "CLEAR_FILTERS" :
        return{
          ...state,
          filters : {
            ...state.filters,
            text: "",
            category : "all",
            company : "all",
            colors : "all",
            maxPrice : state.filters.maxPrice,
            price : state.filters.maxPrice,
            minPrice : state.filters.minPrice,
          }
        }
    default:
      return state;
  }
};

export default filterReducer;
