import React from "react";
import FormatPrice from "../helpers/FormatPrice";
import { BsPatchPlusFill, BsPatchMinusFill } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { useCartContext } from "../context/CartContext";

export default function CartItems({ id, name, image, color, price, amount }) {
  const { removeItem, setDecrement, setIncrement } = useCartContext();
  return (
    <>
      <tr>
        {/* Product Name */}
        <td>
          <p className="text-capitalize fw-bold">{name}</p>
        </td>
        {/* Product Image */}
        <td>
          <img
            style={{ width: "150px" }}
            className=" rounded"
            src={image}
            alt="product img"
          />
        </td>
        {/* Product Color */}
        <td>
          <div>
            <button
              className="btn rounded-pill mx-2 p-3"
              style={{ backgroundColor: color }}
            ></button>
          </div>
        </td>
        {/* Product Price */}
        <td>
          <p className="pt-2 fw-bold">
            <FormatPrice price={price} />
          </p>
        </td>
        {/* Product Quantity */}
        <td>
          <div className="d-inline-flex">
            <button className="btn border-0" onClick={() => setDecrement(id)}>
              <BsPatchMinusFill className="h3 text-danger" />
            </button>
            <div className="h3 mx-3">{amount}</div>
            <button className="btn border-0" onClick={() => setIncrement(id)}>
              <BsPatchPlusFill className="h3 text-success" />
            </button>
          </div>
        </td>
        {/* Product Price */}
        <td>
          <p className="fw-bold">
            <FormatPrice price={price * amount} />
          </p>
        </td>
        {/* Remove Product Button */}
        <td>
          <button
            className="btn btn-outline-danger"
            onClick={() => removeItem(id)}
          >
            <ImBin />
          </button>
        </td>
      </tr>
    </>
  );
}
