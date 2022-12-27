import React from "react";
import FormatPrice from "../helpers/FormatPrice";
import { NavLink } from "react-router-dom";
import "./ProductPage.css";

export default function ListView({ products }) {
  return (
    <>
      <div className="container">
        {products.map((currentElement) => {
          const { id, name, image, price, description } = currentElement;
          return (
            <div key={currentElement.id} className="row">
              <div className="myContainer col-md-6  p-4 my-2">
                <figcaption>
                  <img
                    className="img-fluid product_img rounded-4 shadow"
                    src={image}
                    alt="img"
                  />
                </figcaption>
              </div> 
              <div className="col-md-6 p-4 text-wrap">
                <h3>{name}</h3>
                <p>
                  <FormatPrice price={price} />
                </p>
                <p>{description.slice(0, 148)}...</p>
                <NavLink to={`/singleProduct/${id}`}>
                  <button className="btn btn-outline-success">Read more</button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
