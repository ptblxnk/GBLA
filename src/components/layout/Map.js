import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
	width: "20rem",
	height: "14rem",
	margin: "0",
};

const center = {
	lat: 34.07055,
	lng: -118.26951,
};

function ContactMap() {
	return (
		<LoadScript googleMapsApiKey="AIzaSyBdlOHzVB-LQItM5M2c34Szc0XZpwfgze8">
			<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
				<Marker position={center} />
			</GoogleMap>
		</LoadScript>
	);
}

export default React.memo(ContactMap);
