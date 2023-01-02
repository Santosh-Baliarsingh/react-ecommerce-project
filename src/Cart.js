import React from "react";
import { useCartContext } from "./context/CartContext";
import CartItems from "./components/CartItems";

export default function Cart() {
  const { cart } = useCartContext();
  console.log(cart);
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
        <hr/>
        <div className="row text-center">
          {cart.map((currentElement) => (
            <CartItems key={currentElement.id} {...currentElement} />
          ))}
        </div>
        <hr/>
      </div>
    </>
  );
}
