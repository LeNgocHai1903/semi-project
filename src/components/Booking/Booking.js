import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  InfoWindow,
  Marker,
} from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from "react-google-autocomplete";
import { Descriptions } from "antd";

const {
  MarkerWithLabel,
} = require("react-google-maps/lib/components/addons/MarkerWithLabel");

const google = (window.google = window.google ? window.google : {});
Geocode.setApiKey("AIzaSyAeajHZKYFt_wSQzpsaAprttSmBUjao4lc");
Geocode.enableDebug();

class LocationSearchModal extends React.Component {
  state = {
    address: "",
    city: "",
    area: "",
    state: "",
    zoom: 15,
    height: 700,
    mapPosition: {
      lat: 0,
      lng: 0,
    },
    markerPosition: {
      lat: 0,
      lng: 0,
    },
  };

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState(
          {
            mapPosition: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            markerPosition: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
          },
          () => {
            Geocode.fromLatLng(
              position.coords.latitude,
              position.coords.longitude
            ).then(
              (response) => {
                console.log(response);
                const address = response.results[0].formatted_address,
                  addressArray = response.results[0].address_components,
                  city = this.getCity(addressArray),
                  area = this.getArea(addressArray),
                  state = this.getState(addressArray);
                console.log("city", city, area, state);
                this.setState({
                  address: address ? address : "",
                  area: area ? area : "",
                  city: city ? city : "",
                  state: state ? state : "",
                });
              },
              (error) => {
                console.error(error);
              }
            );
          }
        );
      });
    } else {
      console.error("Geolocation is not supported by this browser!");
    }
  }

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //     if (
  //         this.state.markerPosition.lat !== this.state.center.lat ||
  //         this.state.address !== nextState.address ||
  //         this.state.city !== nextState.city ||
  //         this.state.area !== nextState.area ||
  //         this.state.state !== nextState.state
  //     ) {
  //         return true
  //     } else if (this.state.mapPosition.lat === nextState.mapPosition.lat) {
  //         return false
  //     }
  // }

  //   function getDistance()
  // {
  //    //Find the distance
  //    var distanceService = new google.maps.DistanceMatrixService();
  //    distanceService.getDistanceMatrix({
  //       origins: [$("#autocompleteDeparture").val()],
  //       destinations: [$("#autocompleteArrival").val()],
  //       travelMode: google.maps.TravelMode.WALKING,
  //       unitSystem: google.maps.UnitSystem.METRIC,
  //       durationInTraffic: true,
  //       avoidHighways: false,
  //       avoidTolls: false
  //   },
  //   function (response, status) {
  //       if (status !== google.maps.DistanceMatrixStatus.OK) {
  //           console.log('Error:', status);
  //       } else {
  //           console.log(response);
  //           $("#distance").text(response.rows[0].elements[0].distance.text).show();
  //           $("#duration").text(response.rows[0].elements[0].duration.text).show();
  //       }
  //   });
  // }

  getCity = (addressArray) => {
    let city = "";
    for (let i = 0; i < addressArray.length; i++) {
      if (
        addressArray[i].types[0] &&
        "administrative_area_level_2" === addressArray[i].types[0]
      ) {
        city = addressArray[i].long_name;
        return city;
      }
    }
  };

  getArea = (addressArray) => {
    let area = "";
    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0]) {
        for (let j = 0; j < addressArray[i].types.length; j++) {
          if (
            "sublocality_level_1" === addressArray[i].types[j] ||
            "locality" === addressArray[i].types[j]
          ) {
            area = addressArray[i].long_name;
            return area;
          }
        }
      }
    }
  };

  getState = (addressArray) => {
    let state = "";
    for (let i = 0; i < addressArray.length; i++) {
      for (let i = 0; i < addressArray.length; i++) {
        if (
          addressArray[i].types[0] &&
          "administrative_area_level_1" === addressArray[i].types[0]
        ) {
          state = addressArray[i].long_name;
          return state;
        }
      }
    }
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onMarkerDragEnd = (event) => {
    let newLat = event.latLng.lat(),
      newLng = event.latLng.lng();

    Geocode.fromLatLng(newLat, newLng).then(
      (response) => {
        const address = response.results[0].formatted_address,
          addressArray = response.results[0].address_components,
          city = this.getCity(addressArray),
          area = this.getArea(addressArray),
          state = this.getState(addressArray);
        this.setState({
          address: address ? address : "",
          area: area ? area : "",
          city: city ? city : "",
          state: state ? state : "",
          markerPosition: {
            lat: newLat,
            lng: newLng,
          },
          mapPosition: {
            lat: newLat,
            lng: newLng,
          },
        });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  onPlaceSelected = (place) => {
    console.log("plc", place);
    const address = place.formatted_address,
      addressArray = place.address_components,
      city = this.getCity(addressArray),
      area = this.getArea(addressArray),
      state = this.getState(addressArray),
      latValue = place.geometry.location.lat(),
      lngValue = place.geometry.location.lng();

    console.log("latvalue", latValue);
    console.log("lngValue", lngValue);

    // Set these values in the state.
    this.setState({
      address: address ? address : "",
      area: area ? area : "",
      city: city ? city : "",
      state: state ? state : "",
      markerPosition: {
        lat: latValue,
        lng: lngValue,
      },
      mapPosition: {
        lat: latValue,
        lng: lngValue,
      },
    });
  };

  render() {
    const fakecurrentAddress = [
      {
        address: "18 Tăng Bạt Hổ , phường 11, quận Bình Thạnh",
        city: "Hồ Chí Minh",
        markerPosition: {
          lat: 0,
          lng: 0,
        },
      },
      {
        address: "18 Tăng Bạt Hổ , phường 11, quận Bình Thạnh",
        city: "Hồ Chí Minh",
        markerPosition: {
          lat: 0,
          lng: 0,
        },
      },
    ];
    const AsyncMap = withScriptjs(
      withGoogleMap((props) => (
        <>
          <Autocomplete
            style={{
              position: "absolute",
              width: "100%",
              height: "40px",
              paddingLeft: "16px",
              marginTop: "2px",
              marginBottom: "2rem",
            }}
            onPlaceSelected={this.onPlaceSelected}
            types={["(regions)"]}
          />
          <GoogleMap
            defaultZoom={this.state.zoom}
            defaultCenter={{
              lat: this.state.mapPosition.lat,
              lng: this.state.mapPosition.lng,
            }}
          >
            {/*Marker*/}
            <Marker
              google={this.props.google}
              name={"Dolores park"}
              draggable={true}
              onDragEnd={this.onMarkerDragEnd}
              position={{
                lat: this.state.markerPosition.lat,
                lng: this.state.markerPosition.lng,
              }}
            />
            <Marker />

            {/* For Auto complete Search Box */}

            {/* <div className="AddInput">
            <input style={{backgroundColor:"RGB(255, 255, 255)"}}>
              <i className="fa fa-map-marker-check"></i> Where to ?
            </input>
            {fakecurrentAddress.map((add) => (
              <input>
                <i className="fa fa-map-marker-check"></i>
                {add.address}
              </input>
            ))}
          </div> */}
          </GoogleMap>
        </>
      ))
    );

    return (
      <div style={{ padding: "1rem", margin: "0 auto" }}>
        <div className="AddInput">
          aksbdaijbsdjansjdkanjskdnakjsndkajndsç
          </div>
        <AsyncMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAeajHZKYFt_wSQzpsaAprttSmBUjao4lc&libraries=places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div style={{ height: this.state.height, width: "100%" }} />
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default LocationSearchModal;
