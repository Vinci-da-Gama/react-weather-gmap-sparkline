import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

const Gmap = (props) => {
    return (
        <GoogleMapLoader
	        containerElement={ <div style={{height: '100%'}} /> }
	        googleMapElement={
	            <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}}>
	            	<Marker />
	            </GoogleMap>
	        }
	    />
    );
};

export default Gmap;