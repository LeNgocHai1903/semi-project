import React from "react";
import "./OTPForm.css";

const OTPForm = (props) => {
  return (
    <>
      <p style={{ padding: "15px", fontSize: "22px" }}>
        Enter the 4-digit code sent to you at {props.phoneNumber}.{" "}
        <a href="/register">Did you enter the correct number?</a>
      </p>
      <div>
        <div className="Card-OTP">
          <input
            id="otp1"
            name="otp1"
            type="text"
            onBlur={props.formik.handleBlur}
            onChange={props.formik.handleChange}
          />
          <input
            id="otp2"
            name="otp2"
            type="text"
            onBlur={props.formik.handleBlur}
            onChange={props.formik.handleChange}
          />
          <input
            id="otp3"
            name="otp3"
            type="text"
            onBlur={props.formik.handleBlur}
            onChange={props.formik.handleChange}
          />
          <input
            id="otp4"
            name="otp4"
            type="text"
            onBlur={props.formik.handleBlur}
            onChange={props.formik.handleChange}
          />
        </div>
        {props.formik.touched &&
          (props.formik.errors.otp1 ||
            props.formik.errors.otp2 ||
            props.formik.errors.otp3 ||
            props.formik.errors.otp4) && (
            <span>
              {props.formik.errors.otp1 ||
                props.formik.errors.otp2 ||
                props.formik.errors.otp3 ||
                props.formik.errors.otp4}
            </span>
          )}
        {props.errorAPI && <span>{props.errorAPI}</span>}
        <div className="OTPBtn">
          <a href="/"> I didn't receive code</a>
          {props.formik.errors.otp1 ||
          props.formik.errors.otp2 ||
          props.formik.errors.otp3 ||
          props.formik.errors.otp4 ? (
            <button onClick={props.onclick} disabled>
              <i class="fa fa-2x fa-arrow-right"></i>
            </button>
          ) : (
              <button onClick={props.onclick}>
                <i class="fa fa-2x fa-arrow-right"></i>
              </button>
          )}
        </div>
      </div>
    </>
  );
};

export default OTPForm;
