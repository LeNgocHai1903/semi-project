import React, { useState } from "react";
import "./Phone.css";

const PhoneRegister = (props) => {
  const [checkbox, setCheckbox] = useState(false);
  const checkboxHandler = () => {
    setCheckbox(!checkbox);
  };
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

        {props.formik.errors.phoneNumber && (
          <span>{props.formik.errors.phoneNumber}</span>
        )}
        <div className="Card-Checkbox">
          <input
            type="checkbox"
            name="checkbox"
            value="true"
            onChange={checkboxHandler}
          ></input>
          Agree Terms and Conditions
        </div>
        <div>
          <button
            onClick={props.onclick}
            disabled={!props.formik.dirty || props.formik.errors.phoneNumber|| !checkbox }
          >
            <i className="fa fa-2x fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default PhoneRegister;
