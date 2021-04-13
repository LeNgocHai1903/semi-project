import React, { Component } from "react";
import "./Register.css";
import { withFormik } from "formik";
import * as Yup from "yup";

import Phone from "./FormRegister/Phone/Phone";
import OTP from "./FormRegister/OTPForm/OTPForm";
import Info from './FormRegister/InfoForm/InfoForm';
import Spinning from "../../containers/UIElements/Spinning/Spinning";

import { connect } from "react-redux";
import { fetchOTP, confirmOTP } from "../../redux/action";

const mapStateToProps = (state) => {
  return {
    phoneNumber: state.phoneNumber,
    isLoading: state.isLoading,
    error: state.error,
    OTPData: state.OTPData,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchOTPHandler: () => dispatch(fetchOTP()),
  confirmOTPHandler: (o1, o2, o3, o4, phoneNumber) =>
    dispatch(confirmOTP(o1, o2, o3, o4, phoneNumber)),
});

class Register extends Component {
  state = {
    phoneForm: true,
    otpForm: false,
    innfoForm: false,
  };
  render() {
    const changePhoneStatus = () => {
      this.setState({ phoneForm: false, otpForm: true, innfoForm: false });
      this.props.fetchOTPHandler();
    };

    const changeOTPStatus = () => {
      this.props.confirmOTPHandler(
        this.props.values.otp1,
        this.props.values.otp2,
        this.props.values.otp3,
        this.props.values.otp4,
        this.props.values.phoneNumber
      );

      setTimeout(() => {
        if (this.props.error === null && this.props.phoneNumber) {
          this.setState({ phoneForm: false, otpForm: false, innfoForm:true });
        }
      }, 1000);
    };
    return (
      <>
        <form onSubmit={this.props.handleSubmit}>
          <div className="Register">
            <div className="Card">
              {this.props.isLoading ? (
                <Spinning />
              ) : (
                <>
                  {this.state.phoneForm && (
                    <Phone
                      formik={this.props}
                      onclick={() => changePhoneStatus()}
                    />
                  )}
                  {this.state.otpForm && (
                    <OTP
                      formik={this.props}
                      onclick={() => changeOTPStatus()}
                      error={this.props.error}
                    />
                  )}
                  {this.state.innfoForm && (
                    <Info formik={this.props}/>
                  )}
                </>
              )}
            </div>
          </div>
        </form>
      </>
    );
  }
}
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const numRegExp = /^[0-0]?[0-9]$/;
//Formik
const formik = withFormik({
  mapPropsToValues: () => ({
    phoneNumber: "",
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
  }),
  validationSchema: Yup.object().shape({
    // Validate form field
    phoneNumber: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .min(0, "Phone number must be 10 characters"),
    otp1: Yup.string()
      .matches(numRegExp, "Please enter only number < 10").required("Please fill all the fields")
      .min(0, "Please enter OTP number")
      .max(9, "Only 1 number "),
    otp2: Yup.string().required("Please fill all the fields")
      .matches(numRegExp, "Please enter only number < 10")
      .min(0, "Please enter OTP number")
      .max(9, "Only 1 number "),
    otp3: Yup.string().required("Please fill all the fields")
      .matches(numRegExp, "Please enter only number < 10")
      .min(0, "Please enter OTP number")
      .max(9, "Only 1 number "),
    otp4: Yup.string().required("Please fill all the fields")
      .matches(numRegExp, "Please enter only number < 10")
      .min(0, "Please enter OTP number")
      .max(9, "Only 1 number "),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  },
})(connect(mapStateToProps, mapDispatchToProps)(Register));

export default formik;
