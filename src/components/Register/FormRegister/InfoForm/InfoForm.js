import React from "react";
import "./InfoForm.css";

import Male from "../../../../shared/images/male.jpg";
import FeMale from "../../../../shared/images/female.jpg";
import Camera from "../../../../shared/images/camera.jpeg";

const InfoForm = (props) => {
  return (
    <>
      <p style={{ marginLeft: "20px", marginTop: "20px", fontSize: "28px" }}>
        Enter your information
      </p>
      <div>
        <div className="Card-Info">
          <input
            id="userName"
            name="userName"
            type="text"
            onBlur={props.formik.handleBlur}
            onChange={props.formik.handleChange}
            placeholder="Enter your full name here"
          />
          {props.formik.touched.userName && props.formik.errors.userName && (
            <span>{props.formik.errors.userName}</span>
          )}
        </div>
        <p style={{ margin: " 20px" }}>Select gender</p>
        <div className="Card-SelectGender">
          <img
            alt="Male"
            src={Male}
            id="image"
            name="image"
            onBlur={props.formik.handleBlur}
            onChange={props.formik.handleChange}
          />
          {console.log(props.formik.values)}
          <img alt="Female" src={FeMale} />
        </div>
        <div className="Card-Camera">
          <img alt="Camera" src={Camera} />
          <p>Upload profile picture</p>
        </div>
        {props.formik.isValid && props.formik.dirty ? (
          <button type="submit" onClick={props.onclick}>
            <i class="fa fa-2x fa-arrow-right"></i>
          </button>
        ) : (
          <button type="submit" onClick={props.onclick} disabled>
            <i class="fa fa-2x fa-arrow-right"></i>
          </button>
        )}
      </div>
    </>
  );
};

export default InfoForm;
