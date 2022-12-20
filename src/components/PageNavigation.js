import React from "react";
import { NavLink } from "react-router-dom";

export default function PageNavigation({ title }) {
  return (
    <>
      <div className="container-fluid d-flex ">
        <NavLink to='/'  className="text-decoration-none d-inline">
          <h5 className="text-success fw-bold">Home</h5>
        </NavLink>
          <h5>/{title}</h5>
      </div>
    </>
  );
}
