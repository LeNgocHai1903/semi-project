import React, { useState } from "react";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import {
  Marker,
  TileLayer,
  MapContainer,
  useMapEvents,
  Popup,
} from "react-leaflet";

import "./Booking.css";

import BookingConfirm from "./BookingConfirm/BookingConfirm";

const Booking = (props) => {
  const [fromLocation, setFromLocation] = useState({
    lat: "",
    lng: "",
    isShow: true,
    address: ""
  });
  const [toLocation, setToLocation] = useState({
    lat: "",
    lng: "",
    isShow: false,
    address: ""
  });

  //GeoSreach

  const SelectFromLocation = () => {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
        map.addControl(searchControl);
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });
    const provider = new OpenStreetMapProvider();
    const searchControl = new GeoSearchControl({
      provider: provider,
      style: "bar",
      autoComplete: true, // optional: true|false  - default true
      autoCompleteDelay: 250, // optional: number      - default 250
      resultFormat: ({ result }) => console.log(result),
      popupFormat: ({ query, result }) =>
        setFromLocation({
          lat: query.data.y,
          lng: query.data.x,
          isShow: false,
          address: query.query
        }),

       
      searchLabel: "Where to? ",
      showMarker: true,
    });
    // setShowSearch({from: false,to: true})

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  };

  //////

  const SelectToLocation = () => {
    const map = useMapEvents({
      click() {
        map.addControl(searchControl);
      },
      locationfound(e) {
        map.flyTo(e.latlng, map.getZoom());
      },
    });
    const provider = new OpenStreetMapProvider();
    const searchControl = new GeoSearchControl({
      provider: provider,
      style: "bar",
      autoComplete: true, // optional: true|false  - default true
      autoCompleteDelay: 250, // optional: number      - default 250
      resultFormat: ({ result }) => result.label,
      popupFormat: ({ query, result }) =>
        setToLocation({ lat: query.data.y, lng: query.data.x, isShow: true, address:query.query }),
      searchLabel: "Where You Want To Go? ",
      showMarker: true,
    });

    return (
      <Marker position={[toLocation.lat, toLocation.lng]}>
        <Popup>You are here</Popup>
      </Marker>
    );
  };

  return (
    <MapContainer
      center={{ lat: 10.762622, lng: 106.660172 }}
      zoom={15}
      scrollWheelZoom={false}
      className="Map"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {fromLocation.isShow && <SelectFromLocation />}
      {!fromLocation.isShow && !toLocation.isShow && <SelectToLocation />}
      {toLocation.isShow && (
        <BookingConfirm from={fromLocation} to={toLocation} />
      )}
    </MapContainer>
  );
};

export default Booking;
