import React from "react";
import { useCartContext } from "./context/CartContext";
import CartItems from "./components/CartItems";
import { NavLink } from "react-router-dom";

export default function Cart() {
  const { cart, clearCart } = useCartContext();
  // console.log(cart);

  if (cart.length === 0) {
    return (
      <div className="text-center my-5">
        <h4 className="fw-bold">No Items Added </h4>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row text-center text-uppercase fw-bold">
          <div className="col-3">Items</div>
          <div className="col-2">Price</div>
          <div className="col-2">Quantity</div>
          <div className="col-3">Total</div>
          <div className="col-2">Remove</div>
        </div>
        <hr />
        <div className="row text-center">
          {cart.map((currentElement) => (
            <CartItems key={currentElement.id} {...currentElement} />
          ))}
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <NavLink to="/products">
            <button className="btn btn-success">Continue Shopping</button>
          </NavLink>
          <button className="btn btn-danger" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </div>
    </>
  );
}
