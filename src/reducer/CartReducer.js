export const CartReducer = (state, action) => {
  // Add Items in Cart
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    // console.log(product);

    // Handling Existing Products
    let existingProduct = state.cart.find(
      (currentItem) => currentItem.id === id + color
    );
    if (existingProduct) {
      let updatedProduct = state.cart.map((currentElement) => {
        if (currentElement.id === id + color) {
          let newAmount = currentElement.amount + amount;
          if (newAmount >= currentElement.max) {
            newAmount = currentElement.max;
          }
          return {
            ...currentElement,
            amount: newAmount,
          };
        } else {
          return currentElement;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  // To remove specific item in cart
  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (currentElement) => currentElement.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  // To remove all cart items
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  // To Increase and Decrease Quantity
  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((currentElement) => {
      if (currentElement.id === action.payload) {
        let decrementAmount = currentElement.amount - 1;
        if (decrementAmount <= 1) {
          decrementAmount = 1;
        }
        return {
          ...currentElement,
          amount: decrementAmount,
        };
      } else {
        return currentElement;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }
  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((currentElement) => {
      if (currentElement.id === action.payload) {
        let incrementAmount = currentElement.amount + 1;
        if (incrementAmount >= currentElement.max) {
          incrementAmount = currentElement.max;
        }
        return {
          ...currentElement,
          amount: incrementAmount,
        };
      } else {
        return currentElement;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }

  // Update Item Quantity in Cart
  if (action.type === "CART_TOTAL_ITEM") {
    let updateItemValue = state.cart.reduce((initialValue, currentElement) => {
      let { amount } = currentElement;
      initialValue = initialValue + amount;
      return initialValue;
    }, 0);
    return {
      ...state,
      total_item: updateItemValue,
    };
  }

  return state;
};

export default CartReducer;
