import React, { useState } from "react";
import {
  Marker,
  TileLayer,
  MapContainer,
  useMapEvents,
  Popup,
} from "react-leaflet";

import "./Booking.css";

const L = window.L;

const Booking = (props) => {
  const fromLocationData = [
    {
      name: "Home",
      address: "18 Tăng Bạt Hổ, phường 11, quận Bình Thạnh, Hồ Chí Minh",
      lat: "10.811170",
      lng: "106.694150",
    },
    {
      name: "Company",
      address: "364 Cộng Hòa, phường 13, quận Tân Bình, Hồ Chí Minh",
      lat: "10.802340",
      lng: "106.644730",
    },
    {
      name: "The Coffee House D2",
      address: "157 Nguyễn Gia Trí, phường 11, quận Bình Thạnh, Hồ Chí Minh",
      lat: "10.805870",
      lng: "106.713220",
    },
  ];

  const toLocationData = [
    {
      name: "Home",
      address: "18 Tăng Bạt Hổ, phường 11, quận Bình Thạnh, Hồ Chí Minh",
      lat: "10.811170",
      lng: "106.694150",
    },
    {
      name: "Company",
      address: "364 Cộng Hòa, phường 13, quận Tân Bình, Hồ Chí Minh",
      lat: "10.802340",
      lng: "106.644730",
    },
    {
      name: "Hồ Con Rùa",
      address: "157 Nguyễn Gia Trí, phường 11, quận Bình Thạnh, Hồ Chí Minh",
      lat: "10.782668",
      lng: "106.695876",
    },
  ]

  const [fromLocation, setFromLocation] = useState ({lat:"10.762622", lng :"106.660172"})
  const [toLocation,setToLocation] = useState ({lat:"", lng :""});

  // const getDistance = ([from], [to]) => {
  //   var markerFrom = L.circleMarker([10.762622, 106.660172]);
  //   var markerTo = L.circleMarker([16.047079, 108.20623]);
  //   var from = markerFrom.getLatLng();
  //   var to = markerTo.getLatLng();
  //   map.addLayer(markerTo);
  //   map.addLayer(markerFrom);
  //   from.distanceTo(to);
  //   console.log(markerFrom._latlng);
  //   console.log(from.distanceTo(to).toFixed(0) / 1000);
  // };

  const SelectFromLocation = () => {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        console.log(e.latlng)
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });
    var markerFrom = L.circleMarker([fromLocation.lat, fromLocation.lng]);
    var from = markerFrom.getLatLng();
    map.flyTo(from, map.getZoom());

    console.log(fromLocation.lat)
    return position ? null : (
      <Marker position={fromLocation}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  // function LocationMarker() {
  //   const [position, setPosition] = useState(null);
  //   const map = useMapEvents({
  //     click() {
  //       map.locate();
  //     },
  //     locationfound(e) {
  //       console.log(e.latlng)
  //       setPosition(e.latlng);
  //       map.flyTo(e.latlng, map.getZoom());
  //     },
  //   });
  //   var markerFrom = L.circleMarker([fromLocation.lat, fromLocation.lng]);
  //   var markerTo = L.circleMarker([toLocation.lat, toLocation.lng]);
  //   var from = markerFrom.getLatLng();
  //   var to = markerTo.getLatLng();
  //   map.addLayer(markerTo);
  //   map.addLayer(markerFrom);
  //   map.flyTo(from, map.getZoom());
  //   from.distanceTo(to);
  //   console.log(from.distanceTo(to).toFixed(0) / 1000);

  //   return position === null ? null : (
  //     <Marker position={[fromLocation.lat, fromLocation.lng].getLatLng()}>
  //       <Popup>You are here</Popup>
  //     </Marker>
  //   );
  // }

  const selectLocationHandler = (lat,lng) => {
    setFromLocation({lat, lng});
  }


  return (
    <MapContainer
      center={{ lat: 10.762622, lng: 106.660172 }}
      zoom={15}
      scrollWheelZoom={false}
      className="Map"
    >
      <div className="InputField">
        <button
          className="TitleBtn"
          style={{ backgroundColor: "RGB(251, 252, 253)" }}
        >
          {" "}
          <div>
            <i className="fa fa-square"></i> <span>Where to? Use your own location ?</span>{" "}
          </div>
          <div>
            <i className="fa fa-2x fa-search"></i>
          </div>
        </button>
        {fromLocationData.map((l) => (
          <button className="SelectBtn" onClick={() => selectLocationHandler(l.lat,l.lng)}>
            <div>
              <i className="fa fa-map-marker"></i>
            </div>
            <div>
              <span>{l.name}</span>
              <p>{l.address}</p>
            </div>
          </button>
        ))}
      </div>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <LocationMarker /> */}
      <SelectFromLocation/>
    </MapContainer>
  );
};

export default Booking;
