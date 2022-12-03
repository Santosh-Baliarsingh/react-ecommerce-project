import React from "react";
import { NavLink } from "react-router-dom";

export default function HeroSection({ myData }) {
  const { name } = myData;
  return (
    <>
      <div className="container mt-5">
        <div className="row my-2">
          <div className="col-md-6">
            <p className="my-2 mx-4 fw-bold text-uppercase">Welcome To</p>
            <h1 className="mx-4  text-uppercase fw-bold">{name}</h1>
            <p className=" text-justify mx-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
              nulla eligendi excepturi neque sit a nam deserunt, ea quibusdam
              dolor sit amet consectetur adipisicing
            </p>
            <NavLink to="/products">
              <button className="btn btn-outline-success shadow mx-4 my-3 px-4">
                Shop Now
              </button>
            </NavLink>
          </div>
          <div className="col-md-6 px-4">
            <img
              className="img-fluid shadow rounded"
              src="/assets/Shopping_Photo.jpg"
              alt="Shopping img"
            />
          </div>
        </div>
      </div>
    </>
  );
}
