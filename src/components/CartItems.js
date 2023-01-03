import React from "react";
import FormatPrice from "../helpers/FormatPrice";
import { BsPatchPlusFill, BsPatchMinusFill } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { useCartContext } from "../context/CartContext";

export default function CartItems({ id, name, image, color, price, amount }) {
  const { removeItem , setDecrement , setIncrement } = useCartContext();
  // const setIncrement = () => {
  //   // amount < stock ? setAmount(amount + 1) : setAmount(stock);
  // };

  // const setDecrement = () => {
  //   // amount > 1 ? setAmount(amount - 1) : setAmount(1);
  // };
  return (
    <>
      <div className="col-3 my-2">
        <div className="row">
          <div className="col-6">
            <img className="img-fluid rounded" src={image} alt="product img" />
          </div>
          <div className="col-6">
            <div>
              <p className="text-capitalize fw-bold">{name}</p>
            </div>
            <div>
              <span className="fw-bold">Color :</span>
              <button
                className="btn rounded-pill mx-2 p-2"
                style={{ backgroundColor: color }}
              ></button>
            </div>
          </div>
        </div>
      </div>
      {/* Price */}
      <div className="col-2">
        <p className="pt-2 fw-bold">
          <FormatPrice price={price} />
        </p>
      </div>
      {/* Quantity */}
      <div className="col-2">
        <div className="d-inline-flex">
          <button className="btn border-0" onClick={() => setDecrement(id)}>
            <BsPatchMinusFill className="h3 text-danger" />
          </button>
          <div className="h3 mx-3">{amount}</div>
          <button className="btn border-0" onClick={() => setIncrement(id)}>
            <BsPatchPlusFill className="h3 text-success" />
          </button>
        </div>
      </div>
      <div className="col-3">
        <p className="fw-bold">
          <FormatPrice price={price * amount} />
        </p>
      </div>
      {/* Remove Button */}
      <div className="col-2">
        <button
          className="btn btn-outline-danger"
          onClick={() => removeItem(id)}
        >
          <ImBin />
        </button>
      </div>
    </>
  );
}
