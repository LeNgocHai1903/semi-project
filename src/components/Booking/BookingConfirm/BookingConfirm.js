import React,{useState,useEffect} from "react";
import "./BookingConfirm.css";

import L from "leaflet";;

const BookingConfirm = (props) => {
    const [distance, setDistance] = useState(null);

    useEffect(()=> {
        var markerFrom = L.circleMarker([props.from.lat,props.from.lng]);
        var markerTo =  L.circleMarker([props.to.lat,props.to.lng]);
        var from = markerFrom.getLatLng();
        var to = markerTo.getLatLng();
            setDistance((from.distanceTo(to)).toFixed(0)/1000);
    })

  return (
    <div className="BookingConfirm">
      <div className="BookingConfirm-Input">
        <i className="fa fa-2x fa-map-marker"></i>
        <div>
          <label>
            <b>From</b>
          </label>
          <span>{props.from.address}</span>
        </div>
      </div>
      <div className="BookingConfirm-Input">
        <i className="fa fa-2x fa-map-marker"></i>
        <div>
          <label>
            <b>To</b>
          </label>
          <span>{props.to.address}</span>
        </div>
      </div>
      <div className="BookingConfirm-Input">
        <i className="fa fa-2x fa-money"></i>
        <div>
          <label>
            <b>Prize: </b>
          </label>
          <span>Kilometer: {distance} km </span>
          <span>Time: {distance * 5} minutes</span>
        </div>
      </div>
      <div className="BookingConfirm-Last">
        <div className="BookingConfirm-Back">
          <i
            className="fa fa-2x fa-arrow-left"
            style={{ marginRight: "10px" }}
          ></i>
          <a>
            <b>Back</b>
          </a>
        </div>
        <div className="BookingConfirm-Continue">
          <button>
            <i
              className="fa fa-2x fa-arrow-right"
              style={{ marginLeft: "60px" }}
            ></i>
            <a>
              <b>Confirm</b>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirm;
