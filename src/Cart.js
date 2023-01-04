import React from "react";
import { useCartContext } from "./context/CartContext";
import CartItems from "./components/CartItems";
import { NavLink } from "react-router-dom";
import FormatPrice from "./helpers/FormatPrice";

export default function Cart() {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
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
      <div className="container d-flex justify-content-end">
        <div
          style={{ backgroundColor: "#251B37" }}
          className="w-25 mt-4  border border-1 border-dark rounded-3 pt-3"
        >
          <div className="row ms-2 text-light">
            <div className="col-6">
              <p>Sub-Total :</p>
              <p>Shipping Fees :</p>
            </div>
            <div className="col-6">
              <p>
                <FormatPrice price={total_price} />
              </p>
              <p>
                <FormatPrice price={shipping_fee} />
              </p>
            </div>
          </div>
          <hr className="text-light mx-3" />
          <div className="row ms-2 text-light">
            <div className="col-6">
              <p>Order Total :</p>
            </div>
            <div className="col-6">
              <p>
                <FormatPrice price={total_price + shipping_fee} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
