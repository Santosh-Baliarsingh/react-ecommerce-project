export const CartReducer = (state, action) => {
  // Add Items in Cart
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    // console.log(product);

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
  if(action.type === "CLEAR_CART"){
    return{
      ...state,
      cart : [],
    }
  }

  return state;
};

export default CartReducer;
