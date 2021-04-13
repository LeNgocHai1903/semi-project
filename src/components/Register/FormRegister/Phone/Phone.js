import React, { Component } from "react";
import "./Phone.css";

const PhoneRegister = props => {
    return (
      <>
        <p style={{ marginLeft: "20px", marginTop: "20px", fontSize: "28px" }}>
          Get moving with Uber
        </p>
        <div>
          <div className="Card-PhoneInput">
            +84
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              onChange={props.formik.handleChange}
            />
          </div>
          {props.formik.touched.phoneNumber &&
            props.formik.errors.phoneNumber && (
              <span>{props.formik.errors.phoneNumber}</span>
            )}
          <div className="Card-Checkbox">
            <input type="checkbox"></input>
            Agree Terms and Conditions
          </div>
          <div>
            {props.formik.values.phoneNumber ? (
              <button onClick={props.onclick}>
                <i class="fa fa-2x fa-arrow-right"></i>
              </button>
            ) : (
              <button onClick={props.onclick} disabled>
                <i class="fa fa-2x fa-arrow-right"></i>
              </button>
            )}
          </div>
        </div>
      </>
    );
  }


export default PhoneRegister;
