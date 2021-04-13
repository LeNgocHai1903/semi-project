import React, { Component } from "react";
import "./OTPForm.css";

class OTPForm extends Component {
  render() {
    return (
      <>
        <p style={{ padding: "15px", fontSize: "22px" }}>
          Enter the 4-digit code sent to you at {this.props.phoneNumber}.{" "}
          <a href="/register">Did you enter the correct number?</a>
        </p>
        <div>
          <div className="Card-OTP">
            <input
              id="otp1"
              name="otp1"
              type="text"
              onBlur={this.props.formik.handleBlur}
              onChange={this.props.formik.handleChange}
            />
            <input
              id="otp2"
              name="otp2"
              type="text"
              onBlur={this.props.formik.handleBlur}
              onChange={this.props.formik.handleChange}
            />
            <input
              id="otp3"
              name="otp3"
              type="text"
              onBlur={this.props.formik.handleBlur}
              onChange={this.props.formik.handleChange}
            />
            <input
              id="otp4"
              name="otp4"
              type="text"
              onBlur={this.props.formik.handleBlur}
              onChange={this.props.formik.handleChange}
            />
          </div>
          {this.props.formik.touched &&
            (this.props.formik.errors.otp1 ||
              this.props.formik.errors.otp2 ||
              this.props.formik.errors.otp3 ||
              this.props.formik.errors.otp4) && (
              <span>
                {this.props.formik.errors.otp1 ||
                  this.props.formik.errors.otp2 ||
                  this.props.formik.errors.otp3 ||
                  this.props.formik.errors.otp4}
              </span>
            )}
          {this.props.error && (<span>{this.props.error}</span>)}
          <div className="OTPBtn">
            <a href="#"> I didn't receive code</a>
            {this.props.formik.isValid && this.props.formik.dirty ? (
              <button onClick={this.props.onclick}>
                <i class="fa fa-2x fa-arrow-right"></i>
              </button>
            ) : (
              <button onClick={this.props.onclick} disabled>
                <i class="fa fa-2x fa-arrow-right"></i>
              </button>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default OTPForm;
