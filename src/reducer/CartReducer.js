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
          if(newAmount >= currentElement.max){
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

  return state;
};

export default CartReducer;
