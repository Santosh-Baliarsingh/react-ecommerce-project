import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";

export default function Footer() {
  return (
    <>
    {/* main Footer Starts here */}
      <div className="container-fluid main-footer position-relative">
        {/* Footer upper container starts here */}
        <div className="container position-absolute top-0 start-50 translate-middle footer-upper-section">
          <div className="row footer-upper-bg  rounded-2  py-3 mb-4 shadow">
            <div className="col-md-6 text-center">
              <p className="mb-0 h5">Ready to get started?</p>
              <p className="h5">Talk to us Today</p>
            </div>
            <div className="col-md-6 ">
              <div className="d-grid d-flex justify-content-center">
                <NavLink to="/contact">
                  <button className="btn btn-outline-success  shadow">
                    GET STARTED
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Upper container ends here */}
        {/* Footer Middle Parts Starts Here */}
        <div className="container py-4">
          <div className="row py-3">
            <div className="col-md-3 mt-5">
              <h4 className="text-center text-light fw-bold">Capital Store</h4>
              <p className="text-center text-light ">
                Lorem ipsum, tetur adipisicing elit., ea quibusdam dolor sit
              </p>
            </div>
            <div className="col-md-3 mt-5">
              <h5 className="text-light ">Subscribe to get Updates</h5>
              <div>
                <input
                  className="form-control mb-2"
                  placeholder="Enter Email"
                />
              </div>
              <button className="btn btn-outline-light mt-2">Subscribe</button>
            </div>
            <div className="col-md-3 mt-5">
              <h5 className="text-center text-light fw-bold pb-2">Follow Us</h5>
              <div className="d-flex justify-content-evenly">
                <BsFacebook className="text-light h4" type="button" />
                <BsInstagram className="text-light h4" type="button" />
                <BsYoutube className="text-light h4" type="button" />
              </div>
            </div>
            <div className="col-md-3 text-center mt-5">
              <h5 className="text-light ">Call Us</h5>
              <div className="d-flex justify-content-center">
                <BiPhoneCall className="text-light h4 me-2" />
                <p className="text-light fw-bold">+11223 34455</p>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Middle Parts Ends Here */}
        <hr className="hr-line my-3"/>
        <div className="row">
            <div className="col-md-6 text-light text-center">
                <h6 className="pt-3">@{new Date().getFullYear()} Capital Store.All rights Reserved</h6>
            </div>
            <div className="col-md-6 text-light text-center">
                <h6 className="pointer">Privacy Policy</h6>
                <h6 className="pointer">Terms and Conditions</h6>
            </div>

        </div>

      </div>
      {/* Main Footer ends here */}
    </>
  );
}
