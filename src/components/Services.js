import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import "./Services.css";

export default function Services() {
  return (
    <>
      <div className="container  my-5 p-5">
        <div className="row">
          <div className="col-md-4 service1 shadow">
            <div className="d-flex justify-content-center mt-5">
              <FaShippingFast className="h1 text-warning " />
            </div>
            <p className=" text-center fw-bold">Super Fast and Free Delivery</p>
          </div>
          {/* Middle Section Starts */}
          {/* <div className="col-md-4 my-md-0 my-3 d-md-block d-none">
            <div className="service2  pt-3 rounded-4 shadow">
              <MdSecurity className="mx-3 text-danger h1" />
              <span className="fw-bold ">Non-Contact Shipping</span>
            </div>
            <div className="my-4"></div>
            <div className="service2 pt-3 rounded-4  shadow">
              <GiReceiveMoney className=" text-success mx-3 h1 " />
              <span className="fw-bold">Money Back Gaurenteed</span>
            </div>
          </div> */}
          <div className="col-md-4 my-md-0 my-3">
            <div className="service2  pt-3 rounded-4 shadow">
              <div className="d-flex justify-content-center">
                <MdSecurity className="mx-3 text-danger h1" />
              </div>
              <span className="fw-bold d-block text-center">
                Non-Contact Shipping
              </span>
            </div>
            <div className="my-4"></div>
            <div className="service2 pt-3 rounded-4  shadow">
              <div className="d-flex justify-content-center">
                <GiReceiveMoney className=" text-success mx-3 h1 " />
              </div>
              <span className="fw-bold d-block text-center">Money Back Gaurenteed</span>
            </div>
          </div>
          {/* Middle Section Ends */}
          <div className="service3 col-md-4 shadow">
            <div className="d-flex justify-content-center mt-5">
              <RiSecurePaymentLine className="h1 text-info" />
            </div>
            <p className="text-center fw-bold">Super Secure Payment System</p>
          </div>
        </div>
      </div>
    </>
  );
}
