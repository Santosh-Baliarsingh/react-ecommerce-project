import React, { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import CartItemToggle from "./CartItemToggle";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export default function AddToCart({ product }) {
  const { addToCart } = useCartContext();

  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);

  const [amount, setAmount] = useState(1);

  const setIncrement = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  const setDecrement = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  return (
    <>
      <div className="container my-3 px-0">
        <div>
          <p>
            Colors :
            {colors.map((currentColor, index) => (
              <button
                key={index}
                className={
                  color === currentColor
                    ? "btn rounded-pill mx-2 active border-0 "
                    : "btn rounded-pill mx-2 p-3"
                }
                onClick={() => setColor(currentColor)}
                style={{ backgroundColor: currentColor }}
              >
                {color === currentColor ? (
                  <GiCheckMark className="text-light" />
                ) : null}
              </button>
            ))}
          </p>
        </div>
        {/* Add to cart */}
        <CartItemToggle
          amount={amount}
          setIncrement={setIncrement}
          setDecrement={setDecrement}
        />
      </div>
      <NavLink to="/cart"  onClick={() => addToCart(id, color, amount, product)}>
        <button
          
          className="btn btn-outline-warning fw-bold p-2 mx-auto"
        >
          Add to Cart
        </button>
      </NavLink>
    </>
  );
}
