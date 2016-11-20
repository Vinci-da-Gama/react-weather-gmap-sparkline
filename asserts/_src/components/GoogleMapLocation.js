import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

const Gmap = (props) => {
	console.log('5 -- this props are: ', props);
	const markerObj = [
		{
			position: {
				lat: props.markers.lat,
		        lng: props.markers.lon
			},
		    key: props.cityname,
			defaultAnimation: 8
		}
	];
    return (
        <GoogleMapLoader
	        containerElement={ <div style={{height: '100%'}} /> }
	        googleMapElement={
	            <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}}>
					<Marker {...markerObj} />
					{
					    markerObj.map(theMarker => ( 
					    	< Marker {...theMarker } />
					    ))
					}
	            </GoogleMap>
	        }
	    />
    );
};

export default Gmap;