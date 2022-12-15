import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../helpers/FormatPrice";
import "./ProductPage.css";

export const ProductPage = (ele) => {
  const { id, category, name, image, price } = ele;
  return (
    <div className="myContainer col-md-4 my-2">
      <NavLink className="text-decoration-none" to={`/singleProduct/${id}`}>
        <div className="position-relative">
          <h6 className="category-icon">{category}</h6>
        </div>
        <img
          className="img-fluid product_img rounded-4 shadow "
          src={image}
          alt="products img"
        />

        <div className="d-flex justify-content-between mt-2">
          <h5 className="text-dark text-capitalize">{name}</h5>
          <h5 className="text-dark">{<FormatPrice price={price} />}</h5>
        </div>
      </NavLink>
    </div>
  );
};

export default ProductPage;
