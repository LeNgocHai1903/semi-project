import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./Contact.css";

const formikConfig = {
  initialValues: {
    name: "",
    select: "",
    message: "",
  },
  validationSchema: Yup.object({
    name: Yup.string()
      .min(3, "Mininum 2 characters")
      .max(15, "Maximum 15 characters")
      .required("Required!"),
    select: Yup.string()
      .min(1, "You have to choose an option")
      .required("You have to choose an option"),
    message: Yup.string()
      .min(8, "Minimum 8 characters")
      .max(100, "Maximum 100 characters")
      .required("Required!"),
  }),
  onSubmit: (values, actions) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 2000);
  },
};

const Contact = () => (
  <div className="ContactUs">
    <div className="SignUp">
      <h1>
        <i className="fa fa-envelope" aria-hidden="true"></i> Contact Us
      </h1>
      <Formik {...formikConfig}>
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div className="FormStyle">
              <div className="LeftInfo">
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-default"
                    >
                      Your Name:
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    name="name"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  />
                </div>
                {props.errors.name && props.touched.name && (
                  <div className="error-text">{props.errors.name}</div>
                )}
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-default"
                    >
                      Select:
                    </span>
                  </div>
                  <select
                    type="text"
                    className="form-control"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    name="select"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  >
                    <option value="">Choose...</option>
                    <option value="Example - 1">Example - 1</option>
                    <option value="Example - 2">Example - 2</option>
                    <option value="Example - 3">Example - 3</option>
                  </select>
                </div>
                {props.errors.select && props.touched.select && (
                  <div className="error-text">{props.errors.select}</div>
                )}
              </div>

              <div className="RightInfo">
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-default"
                    >
                      Message:
                    </span>
                  </div>
                  <textarea
                    type="text"
                    className="form-control"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    name="message"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  />
                </div>
                {props.errors.message && props.touched.message && (
                  <div className="error-text">{props.errors.message}</div>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="submitBtn"
              disabled={!props.isValid}
            >
              <i className="fa fa-2x fa-arrow-right" aria-hidden="true"></i>
            </button>
          </form>
        )}
      </Formik>
    </div>
  </div>
);

export default Contact;
