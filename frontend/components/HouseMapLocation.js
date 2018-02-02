import React from 'react';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const location = {
	lat: 33.7767410,
	lng: -84.3943390
}

const HouseMapLocation = withScriptjs(withGoogleMap(props => {
	return (
		<GoogleMap
			defaultZoom={17}
			defaultCenter={location}>
			<Marker position={location} />
		</GoogleMap>
	);
}));

export default HouseMapLocation;