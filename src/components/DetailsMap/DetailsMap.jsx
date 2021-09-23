import React, {useState, useEffect} from 'react'
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Circle,
} from "@react-google-maps/api"; // npm install react-google-maps/api

const containerStyle = {
  width: '600px',
  height: '300px'
};

function DetailsMap(props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDPYgvsAsMFTg4IXuxDt_DYbNxyPalyl3Y"
  })

  const [center, setCenter] = useState({
    lat: parseFloat(props.lat),
    lng: parseFloat(props.lng)
  })
  const [zoom, setZoom] = useState(13.5);
  const [radius, setRadius] = useState(500);

  useEffect(() => {
    setCenter({
        lat: parseFloat(props.lat),
        lng: parseFloat(props.lng)
      })
      if (props.radius) {
          setRadius(props.radius[0]);
      }
  }, [props.lat, props.lng, props.radius])
  
  
  return isLoaded ? (
      <GoogleMap className="mt-3"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        
      >
      <Marker position={ center } />
      <Circle
      center ={ center } radius = {radius} options={{strokeColor: "#ff0000"}} />
        <></>
      </GoogleMap>
  ) : <></>}

export default React.memo(DetailsMap)