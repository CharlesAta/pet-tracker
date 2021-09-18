import React, {useState, useEffect} from 'react'
import "./Map.css"
import {
  GoogleMap,
  useJsApiLoader
} from "@react-google-maps/api";

// import useOnclickOutside from "react-cool-onclickoutside";

const containerStyle = {
  width: '800px',
  height: '400px'
};

// const center = {
//   lat: 43.651070,
//   lng: -79.347015
// };


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
      console.log("zoom", zoom)
      setZoom(15)
      console.log("atMap", props.lat, props.lng)
   }
  }, [props.location, props.lat, props.lng])
  
  
  return isLoaded ? (
      <GoogleMap className="mt-3"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}

      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)