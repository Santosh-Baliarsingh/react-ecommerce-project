import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div>
            <NavLink className="navbar-brand" to="/">
              <img
                className="ms-2"
                src="/assets/logo.png"
                alt="logo"
                width="100"
                height="50"
              />
            </NavLink>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className=" collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <div className="mx-auto"></div>
            <div className="mx-auto"></div>
            <div className="mx-auto"></div>
            <ul className="navbar-nav me-auto text-sm-center my-1 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold text-dark  mx-3"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className="nav-link fw-bold text-dark mx-3"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className="nav-link fw-bold text-dark mx-3"
                  to="/products"
                >
                  Products
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link fw-bold text-dark mx-3"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <NavLink className="nav-link cart text-dark mx-3" to="/cart">
                <div className=" position-relative p-md-1 p-sm-0">
                  <FiShoppingCart className="h4 " />
                  <span className="position-absolute top-0 start-md-100 translate-middle badge rounded bg-primary">
                    10
                  </span>
                </div>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
