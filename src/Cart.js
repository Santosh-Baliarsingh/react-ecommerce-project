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
        {/* Product Table */}
        <div className="table-responsive">
          <table className="table my-3 rounded  align-middle">
            <thead className="text-center">
              <tr>
                <th></th>
                <th>Items</th>
                <th></th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {cart.map((currentElement) => (
                <CartItems key={currentElement.id} {...currentElement} />
              ))}
            </tbody>
          </table>
        </div>
        {/* Continue Shopping and Remove Cart Buttons */}
        <div className="d-flex justify-content-between">
          <NavLink to="/products">
            <button className="btn btn-success">Continue Shopping</button>
          </NavLink>
          <button className="btn btn-danger" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </div>

      {/* Total Price of Product in Cart */}
      <div className="container d-flex justify-content-end ">
        <div
          style={{ backgroundColor: "#251B37" }}
          className="mt-4  border border-1 border-dark rounded-3 pt-3"
        >
          <div className="row mx-3 text-light">
            <div className="col-7">
              <p>Subtotal :</p>
              <p >Shipping Fees :</p>
            </div>
            <div className="col-5">
              <p>
                <FormatPrice price={total_price} />
              </p>
              <p>
                <FormatPrice price={shipping_fee} />
              </p>
            </div>
          </div>
          <hr className="text-light mx-3" />
          <div className="row mx-3 text-light">
            <div className="col-7">
              <p>Order Total :</p>
            </div>
            <div className="col-5">
              <p>
                <FormatPrice price={total_price + shipping_fee} />
              </p>
            </div>
          </div>
          <div className="mx-5 my-2">
            <button className="btn btn-outline-light fw-bold">
              Proceed to checkout 
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
