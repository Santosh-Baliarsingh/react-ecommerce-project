import React from "react";
import { BsPatchPlusFill, BsPatchMinusFill } from "react-icons/bs";

export default function CartItemToggle({ amount, setIncrement, setDecrement }) {
  return (
    <>
      <div className="container d-flex px-0 ">
        <div className="mt-2">
          <p>Quantity :</p>
        </div>
        <div className="d-inline-flex">
          <button className="btn border-0" onClick={() => setDecrement()}>
            <BsPatchMinusFill className="h3 text-danger" />
          </button>
          <div className="h3 mx-3">{amount}</div>
          <button className="btn border-0" onClick={() => setIncrement()}>
            <BsPatchPlusFill className="h3 text-success" />
          </button>
        </div>
      </div>
    </>
  );
}
