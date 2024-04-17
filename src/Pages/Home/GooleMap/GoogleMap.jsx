import React from "react";
import GoogleMapReact from "google-map-react";
import { Helmet } from "react-helmet-async";
import { googleAPIKey } from "../../../googleAPIKey";
import { FaMapMarkerAlt } from 'react-icons/fa';
const AnyReactComponent = ({ text }) => <div style={{color:'red'}}><FaMapMarkerAlt></FaMapMarkerAlt> </div>;

const GoogleMap = () => {
  const defaultProps = {
    center: {
      lat: 23.8041,
      lng: 90.4152
    },
    zoom: 11
  };

  return (
    <div>
      <Helmet>
        <title>Indrusto || Google Map</title>
      </Helmet>
      <div style={{ height: '500px', width: '100%' }}> {/* Adjust width as needed */}
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleAPIKey }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={defaultProps.center.lat} // Adjust lat and lng as needed
            lng={defaultProps.center.lng}
            text="My Indrusti"
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default GoogleMap;






