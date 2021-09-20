import React, {useState, useEffect} from 'react'
import "./Map.css"
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
  Circle,
} from "@react-google-maps/api"; // npm install react-google-maps/api
import { Range } from 'react-range'; // npm install react-rang

const containerStyle = {
  width: '800px',
  height: '400px'
};

function Map(props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDPYgvsAsMFTg4IXuxDt_DYbNxyPalyl3Y"
  })

  const [map, setMap] = React.useState(null)
  const [center, setCenter] = useState({
    lat: 43.651070,
    lng: -79.347015
  })
  const [zoom, setZoom] = useState(10)

  useEffect(() => {
    if (props.lat && props.lng) {
      setCenter({lat: props.lat, lng: props.lng})
      setZoom(14.5)
   }
  }, [props.location, props.lat, props.lng, props.radius])
  
  
  return isLoaded ? (
      <GoogleMap className="mt-3"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
      >
      <Marker position={ center } />
      <Circle
      center ={ center } radius = {props.radius[0]} options={{strokeColor: "#ff0000"}} />
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)